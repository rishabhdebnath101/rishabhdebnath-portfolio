# Rishabh Debnath — Portfolio Codebase

Welcome to the source code for my personal website and SEO case study hub: **[rishabhdebnath.com](https://rishabhdebnath.com)**.

I’m an SEO specialist with an English Honours background. I spend most of my time on the technical and semantic side of search — making sure websites have clean architectures, connected Schema.org entity graphs, and content structured so that both traditional search engines (Google, Bing) and AI search platforms (Perplexity, ChatGPT Search, Google AI Overviews) can easily understand and reference them.

---

## What’s in This Repository?

This site is built from scratch without bulky frameworks or external CSS libraries:

* **Pure Vanilla Stack:** Semantic HTML5, handcrafted Vanilla CSS (custom design tokens and glassmorphism), and lightweight modular JavaScript.
* **Fast & Stable:** Fast page loads, zero layout shifts (CLS), and clean responsive layouts across mobile, tablet, and desktop.
* **Structured Data:** Connected Schema.org JSON-LD graphs on every single page (linking author identity, articles, breadcrumbs, and FAQs).
* **Automated QA:** Custom PowerShell audit scripts to catch broken tags, missing meta, or layout overflow before code is pushed to production.

---

## Featured Case Studies

Here are four technical case studies hosted on the live site, along with the real-world challenges they tackle:

### 1. 🏢 [German Regional B2B Website — Multilingual SEO](https://rishabhdebnath.com/work/german-regional-b2b-seo/)
* **The Problem:** A German manufacturing business wanted to expand across Germany, Austria, and Switzerland without having localized pages compete against each other or get filtered out.
* **What I Did:**
  * Designed a reciprocal hreflang linking structure (`de-DE`, `de-AT`, `de-CH`, and `x-default`) so each country's searchers see their local page.
  * Added `ProfessionalService` structured data declaring target territories (`DE`, `AT`, `CH`) and core competencies.
  * Reduced crawl budget waste by removing redirect chains and cleaning up internal navigation.
* [👉 Read the full case study](https://rishabhdebnath.com/work/german-regional-b2b-seo/)

---

### 2. 🏋️ [Olympia Fitness Studio — Local SEO & AI Search](https://rishabhdebnath.com/work/olympia-local-seo/)
* **The Problem:** A local fitness studio wanted to rank higher in local Google Maps packs and appear accurately when people ask conversational AI assistants for nearby gym recommendations.
* **What I Did:**
  * Aligned Google Business Profile categories and standardized NAP (Name, Address, Phone) consistency across directories.
  * Embedded `ExerciseGym` JSON-LD schema with exact GPS coordinates, price ranges, and day-by-day opening hours.
  * Structured program pages with clear, direct FAQ sections that AI search tools (like Perplexity) can directly quote.
* [👉 Read the full case study](https://rishabhdebnath.com/work/olympia-local-seo/)

---

### 3. 🛍️ [Specialty E-Commerce — Faceted Navigation & Schema](https://rishabhdebnath.com/work/ecommerce-technical-seo/)
* **The Problem:** An online apparel store had severe index bloat — thousands of filter combinations (color, size, price sorting) were generating duplicate URLs and wasting search engine crawl budget.
* **What I Did:**
  * Implemented canonical consolidation rules to point variant URLs back to clean, authoritative parent collection pages.
  * Built complete `Product` and `Offer` schema with SKU numbers, availability, and merchant return policies to qualify for Google rich product snippets.
  * Established a hub-and-spoke internal linking model connecting top informational blog guides to high-intent product pages.
* [👉 Read the full case study](https://rishabhdebnath.com/work/ecommerce-technical-seo/)

---

### 4. 📰 [Digital Publishing Portal — Crawl Speed & E-E-A-T](https://rishabhdebnath.com/work/digital-publishing-seo/)
* **The Problem:** A fast-paced technology publication needed breaking stories indexed by Google News within minutes while fixing page jumpiness (CLS) caused by dynamic banner ads.
* **What I Did:**
  * Structured a rolling 48-hour XML News Sitemap with automated ping notifications on article publish.
  * Implemented `NewsArticle` schema linking journalists directly to their verified author profiles to reinforce editorial trust and E-E-A-T.
  * Reserved fixed-height CSS wrappers for ad containers, eliminating layout shift and passing Core Web Vitals.
* [👉 Read the full case study](https://rishabhdebnath.com/work/digital-publishing-seo/)

---

## Automated QA Scripts

To make sure updates never break SEO or responsive layouts, I use two automated PowerShell scripts located in the [`scripts/`](scripts/) folder:

```powershell
# 1. Audits titles, meta descriptions, canonicals, H1 hierarchy, and schema across all 14 pages
powershell -ExecutionPolicy Bypass -File .\scripts\tech_seo_audit.ps1

# 2. Tests responsive layout containment across 11 viewports (320px mobile to 1920px desktop)
powershell -ExecutionPolicy Bypass -File .\scripts\qa_responsive.ps1
```

Running these checks guarantees that every page stays clean, accessible, and error-free before going live.

---

## Tools & Practical Skills

* **SEO & AI Search:** Google Search Console, Bing Webmaster Tools, Semrush, Ahrefs, Screaming Frog, Perplexity, ChatGPT Search
* **Structured Data:** Schema.org JSON-LD (`@graph`, Person, Organization, LocalBusiness, Product, NewsArticle, FAQPage)
* **Web Analytics & Performance:** Google Analytics 4 (GA4), Google PageSpeed Insights, Chrome DevTools
* **Frontend & Scripting:** Semantic HTML5, Modern CSS3, JavaScript (ES6+), PowerShell, Git & GitHub

---

## Verified Certifications

* **Google:** Google Analytics 4 (GA4) Certification • Google Ads Search Certification
* **HubSpot Academy:** SEO Certification • Digital Marketing Certification • Content Marketing Certification
* **Semrush:** Technical SEO • Keyword Research
* **Meta:** Meta Blueprint Digital Marketing Fundamentals

---

## Get in Touch

I’m always happy to discuss SEO audits, generative search strategies, or technical web optimization.

* 🌐 **Website:** [rishabhdebnath.com](https://rishabhdebnath.com)
* 📄 **Resume:** [rishabhdebnath.com/resume.html](https://rishabhdebnath.com/resume.html)
* ✉️ **Email:** [rishabhdebnath101@gmail.com](mailto:rishabhdebnath101@gmail.com)
