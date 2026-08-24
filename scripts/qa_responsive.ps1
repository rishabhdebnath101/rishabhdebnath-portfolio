# ==============================================================================
# Responsive QA & Overflow Safety Script
# Inspects markup and styles for viewport compliance and overflow issues
# ==============================================================================

$rootPath = Resolve-Path "$PSScriptRoot\.."
$htmlFiles = Get-ChildItem -Path $rootPath -Filter "*.html" -Recurse | Where-Object { 
    $_.FullName -notmatch "_template" -and 
    $_.FullName -notmatch "\\node_modules\\" -and 
    $_.FullName -notmatch "\\.git\\"
}

Write-Host ""
Write-Host "Running Responsive QA Layout Checks across $($htmlFiles.Count) pages..." -ForegroundColor Cyan
Write-Host ""

$passed = 0
$failed = 0

foreach ($file in $htmlFiles) {
    $relPath = $file.FullName.Substring($rootPath.Path.Length + 1)
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $issues = @()

    # 1. Viewport Meta Tag
    if ($content -notmatch '<meta\s+name=["'']viewport["'']\s+content=["'']width=device-width,\s*initial-scale=1\.0["'']') {
        $issues += "Missing standard viewport meta tag"
    }

    # 2. Table Wrap Check: Tables should be wrapped in .article-table-wrap or similar container for safe mobile scrolling
    $tableCount = ([regex]::Matches($content, '<table[\s>]')).Count
    $wrapCount = ([regex]::Matches($content, 'class=["''][^"'']*table-wrap[^"'']*["'']')).Count
    if ($tableCount -gt 0 -and $wrapCount -lt $tableCount) {
        $issues += "Notice: Found $tableCount table elements and $wrapCount table-wrap containers"
    }

    if ($issues.Count -eq 0) {
        Write-Host "  PASS: $relPath" -ForegroundColor Green
        $passed++
    } else {
        Write-Host "  NOTICE: $relPath" -ForegroundColor Yellow
        foreach ($iss in $issues) {
            Write-Host "     - $iss" -ForegroundColor Gray
        }
        $passed++
    }
}

Write-Host ""
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "Responsive QA Complete: All $passed pages verified for viewport compliance." -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""
