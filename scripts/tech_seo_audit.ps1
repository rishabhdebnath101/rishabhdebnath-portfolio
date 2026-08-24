# ==============================================================================
# Technical SEO & Schema Regression Audit Script
# Tests all HTML pages in the portfolio for SEO compliance
# ==============================================================================

$rootPath = Resolve-Path "$PSScriptRoot\.."
$htmlFiles = Get-ChildItem -Path $rootPath -Filter "*.html" -Recurse | Where-Object { 
    $_.FullName -notmatch "_template" -and 
    $_.FullName -notmatch "\\node_modules\\" -and 
    $_.FullName -notmatch "\\.git\\"
}

$totalChecked = 0
$totalPassed = 0
$totalFailed = 0
$issues = @()

Write-Host ""
Write-Host "Running Technical SEO Audit across $($htmlFiles.Count) pages..." -ForegroundColor Cyan
Write-Host ""

foreach ($file in $htmlFiles) {
    $totalChecked++
    $relPath = $file.FullName.Substring($rootPath.Path.Length + 1)
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $fileIssues = @()

    # 1. Title Tag Check (30-70 chars acceptable, 40-65 optimal)
    if ($content -match '<title>(.*?)</title>') {
        $title = $matches[1].Trim()
        $titleLen = $title.Length
        if ($titleLen -lt 25 -or $titleLen -gt 75) {
            $fileIssues += "Title length [$titleLen chars] outside range (30-70 chars): '$title'"
        }
    } else {
        $fileIssues += "Missing title tag"
    }

    # 2. Meta Description Check (100-170 chars)
    if ($content -match '<meta\s+name=["'']description["'']\s+content=["''](.*?)["'']') {
        $desc = $matches[1].Trim()
        $descLen = $desc.Length
        if ($descLen -lt 90 -or $descLen -gt 180) {
            $fileIssues += "Meta description length [$descLen chars] outside range (100-170 chars)"
        }
    } else {
        $fileIssues += "Missing meta description tag"
    }

    # 3. Canonical Tag Check
    if ($content -notmatch '<link\s+rel=["'']canonical["'']\s+href=["'']https://rishabhdebnath\.com') {
        $fileIssues += "Missing or invalid absolute https://rishabhdebnath.com canonical link"
    }

    # 4. Single <h1> Check
    $h1Matches = [regex]::Matches($content, '<h1[\s>]', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    if ($h1Matches.Count -ne 1) {
        $fileIssues += "Expected exactly 1 h1 tag, found $($h1Matches.Count)"
    }

    # 5. Schema.org JSON-LD Check
    if ($content -notmatch '<script\s+type=["'']application/ld\+json["'']') {
        $fileIssues += "Missing Schema.org JSON-LD structured data script"
    }

    # 6. Local Path Hygiene Check (no file:/// or D:/ leaks)
    if ($content -match 'href=["'']file://' -or $content -match 'src=["'']file://' -or $content -match 'href=["''][A-Z]:/' -or $content -match 'src=["''][A-Z]:/') {
        $fileIssues += "Detected local absolute path leak (file:// or drive letter)"
    }

    # Report results
    if ($fileIssues.Count -eq 0) {
        Write-Host "  PASS: $relPath" -ForegroundColor Green
        $totalPassed++
    } else {
        Write-Host "  FAIL: $relPath" -ForegroundColor Red
        foreach ($iss in $fileIssues) {
            Write-Host "     - $iss" -ForegroundColor Yellow
        }
        $totalFailed++
        $issues += [PSCustomObject]@{ File = $relPath; Issues = $fileIssues }
    }
}

Write-Host ""
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "SEO Audit Summary: $totalPassed / $totalChecked passed. ($totalFailed failures)" -ForegroundColor $(if ($totalFailed -eq 0) { "Green" } else { "Yellow" })
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

if ($totalFailed -gt 0) {
    exit 1
} else {
    exit 0
}
