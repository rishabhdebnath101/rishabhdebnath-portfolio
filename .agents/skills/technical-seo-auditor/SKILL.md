---
name: technical-seo-auditor
description: Standard operating procedure and automated checklist for auditing technical SEO, indexability, canonical governance, heading structure, Core Web Vitals, and metadata across web pages.
---

# Technical SEO Auditor Skill

This skill defines the mandatory technical SEO inspection protocol for any new or modified web page within the portfolio.

## 1. Audit Checklist

When auditing a page or creating a new HTML document, verify each item:

### A. Indexability & Meta
- [ ] **Title Tag**: Must be unique, descriptive, and between **40–60 characters** (to pass both Google and Bing Webmaster guidelines).
- [ ] **Meta Description**: Must be unique, compelling, and between **120–160 characters**.
- [ ] **Canonical URL**: Must be self-referencing, absolute, and use `https://rishabhdebnath.com/...` with proper trailing slash.
- [ ] **Robots Meta**: `<meta name="robots" content="index, follow" />` must be present.
- [ ] **Language & Charset**: `<html lang="en">` and `<meta charset="UTF-8" />` declared.

### B. Heading Hierarchy & Semantics
- [ ] **Exactly One `<h1>`**: Every page must have exactly one top-level `<h1>` representing the primary page entity.
- [ ] **No Skipped Headings**: `<h2>` follows `<h1>`, `<h3>` follows `<h2>`. Do not skip heading levels for styling.
- [ ] **Semantic Elements**: Use `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`.

### C. Open Graph & Social Cards
- [ ] `og:type` (`website`, `article`, or `profile`)
- [ ] `og:title` & `og:description`
- [ ] `og:url` (canonical absolute URL)
- [ ] `og:image` (absolute URL, preferably 1200x630px `.png` or `.webp`)
- [ ] `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

### D. Structured Data (Schema.org)
- [ ] Valid JSON-LD in `<script type="application/ld+json">`
- [ ] Graph architecture (`@graph`) linking page entities (`Person`, `WebSite`, `BreadcrumbList`, `TechArticle`, `BlogPosting`, `FAQPage`)
- [ ] 0 syntax errors or missing required fields.

### E. Assets & Internal Links
- [ ] **Image Optimization**: WebP or SVG format, explicit `width` and `height`, descriptive `alt` attribute.
- [ ] **Link Hygiene**: Zero broken relative links (`404`), zero local filesystem paths (`file://` or `D:/`).
- [ ] **Sitemap Synchronization**: Page must be registered in `sitemap.xml` with `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`.

## 2. Quick CLI Validation Command

Run the automated regression audit in PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File "scripts/tech_seo_audit.ps1"
```
