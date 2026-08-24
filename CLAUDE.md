# CLAUDE.md — Repository Knowledge & Developer Playbook

> **Repository:** `rishabhdebnath101/rishabhdebnath-portfolio`  
> **Live Domain:** [https://rishabhdebnath.com](https://rishabhdebnath.com)  
> **Owner / Author:** Rishabh Debnath (SEO & Generative Engine Optimization Specialist)  
> **Primary Technology Stack:** Semantic HTML5, Vanilla CSS3 (Design Tokens & Glassmorphism), Vanilla ES6+ JavaScript, Schema.org JSON-LD Knowledge Graphs.

---

## 1. Executive Overview & Core Philosophy

This codebase is the personal portfolio, technical case study hub, and Generative Engine Optimization (GEO) demonstration platform for **Rishabh Debnath**.

### Key Rules of Engagement for Claude
1. **Zero Fluff & Honest Framing**: Never fabricate metrics, rankings, or guarantee claims. Distinguish observed findings from proposed solutions. Use evidence-based qualitative framing (*"supports faster discovery"*, *"optimizes citation readiness"*).
2. **Vanilla-First Architecture**: Use pure HTML5, Vanilla CSS, and modular ES6+ JavaScript. **Do NOT introduce TailwindCSS, Bootstrap, or heavy JS frameworks** unless explicitly requested by the user.
3. **Rich Dark Aesthetics**: Maintain the modern dark technical theme (sleek glassmorphism, luminous accent borders, responsive fluid typography, micro-interactions).
4. **Automated Quality Governance**: Every new page, article, or tool MUST comply with the 4 core skills outlined below and pass the automated audit scripts.

---

## 2. Directory & Architecture Map

```
/
├── index.html                  # Main interactive portfolio landing page
├── resume.html                 # Interactive online CV with print-optimized styling
├── sitemap.xml                 # XML sitemap for search crawlers (must stay synchronized)
├── robots.txt                  # Directs search bots to sitemap
├── README.md                   # GitHub profile overview
├── CLAUDE.md                   # Claude Code master playbook & conventions (this file)
│
├── .agents/                    # Agent customization roots
│   ├── rules/
│   │   └── seo-qa-standards.md # High-level SEO & QA standards
│   └── skills/
│       ├── technical-seo-auditor/  # Indexability, meta, semantics checklist
│       ├── geo-schema-generator/   # Schema.org JSON-LD templates & rules
│       ├── geo-content-writer/     # High-density RAG & AI search writing guidelines
│       └── responsive-qa-checker/  # 11-viewport test matrix
│
├── assets/
│   ├── css/
│   │   ├── style.css           # Global tokens, reset, typography, base layout
│   │   ├── components.css      # Reusable UI components (buttons, badges, cards, modals)
│   │   └── blog.css            # Article layouts, sticky TOC, tables, code blocks
│   ├── js/
│   │   ├── main.js             # Navigation, scroll-spy, drawer, modal handlers
│   │   ├── data.js             # Central registry for case studies (`PORTFOLIO_DATA.projects`)
│   │   └── blog-data.js        # Central registry for blog posts (`BLOG_POSTS`)
│   └── images/
│       ├── brand/              # Logos, favicons, OG social share cards
│       ├── certifications/     # Verified credential badges
│       ├── evidence/           # Search Console & audit proof screenshots
│       ├── profile/            # Author headshots
│       └── projects/           # Project hero mockups & diagrams
│
├── blog/
│   ├── _template/index.html    # Master boilerplate for new blog posts
│   ├── entity-based-seo/
│   ├── optimizing-for-ai-search/
│   ├── technical-seo-audit-checklist/
│   └── the-shift-from-traditional-seo-to-geo/
│
├── work/
│   ├── _template/index.html    # Master boilerplate for new case studies
│   ├── digital-publishing-seo/
│   ├── ecommerce-technical-seo/
│   ├── german-regional-b2b-seo/
│   └── olympia-local-seo/
│
└── scripts/
    ├── tech_seo_audit.ps1      # Automated PowerShell script for technical SEO validation
    └── qa_responsive.ps1       # Automated PowerShell script for responsive layout checks
```

---

## 3. The 4 Mandatory Skills & Quality Standards

Whenever building new pages, case studies, blog posts, or tools, apply these 4 core skill disciplines:

### 🌟 Skill 1: Technical SEO Auditor (`technical-seo-auditor`)
* **Title Tag**: Strictly **40–60 characters** (maximum 65). Format: `[Page Topic / Keyword] | Rishabh Debnath`.
* **Meta Description**: Strictly **120–160 characters**. Summarizes page intent and value.
* **Canonical Tag**: Must be absolute, self-referencing with trailing slash: `<link rel="canonical" href="https://rishabhdebnath.com/path/" />`.
* **Heading Hierarchy**: Exactly **one `<h1>` per page**. `<h2>` follows `<h1>`, `<h3>` follows `<h2>`. Never skip heading levels.
* **Open Graph & Twitter**: Complete `og:type`, `og:title`, `og:description`, `og:url`, `og:image` (1200x630px) and `twitter:card`.
* **Path Hygiene**: Zero local path leaks (`file://` or `D:/`). All asset paths relative (`/assets/...` or `../../assets/...`).
* **Sitemap Registration**: Synchronize all standalone URLs in `sitemap.xml`.

### 🤖 Skill 2: GEO Schema Generator (`geo-schema-generator`)
* **Connected `@graph` Structure**: Every page must have Schema.org JSON-LD using a single `@graph` array connecting all entities.
* **Entity Linking**: Unambiguous `@id` anchors linking `#person`, `#website`, `#article`, `#faq`, `#breadcrumb`.
* **Author Identity**:
  ```json
  "author": {
    "@type": "Person",
    "@id": "https://rishabhdebnath.com/#person",
    "name": "Rishabh Debnath",
    "jobTitle": "SEO & Generative Engine Optimization (GEO) Specialist",
    "url": "https://rishabhdebnath.com"
  }
  ```
* **Rich Snippets & AI Grounding**: Include `FAQPage` with direct 2–4 sentence answers in `acceptedAnswer.text` whenever an FAQ section is present.

### ✍️ Skill 3: GEO Content Writer (`geo-content-writer`)
* **Key Takeaways Card**: Place a `<div class="key-takeaways-card">` at the top of every article/case study immediately following the introduction.
* **Inverted Pyramid & Entity Definitions**: Start sections with direct definitions (`"Entity-based SEO is..."`) for clean extraction by Perplexity, ChatGPT Search, and Google AI Overviews.
* **Structured Data Tables**: Wrap comparison data in `<div class="article-table-wrap"><table class="article-table">...</table></div>`.
* **Zero Overclaiming**: Describe technical setups, intent mapping, and problem-solving. Never claim guaranteed rankings.
* **Topic Clustering**: Include 2–3 contextual internal links connecting related blog posts and case studies.

### 📱 Skill 4: Responsive QA Checker (`responsive-qa-checker`)
* **11-Device Viewport Test Matrix**: Verify zero layout breakage across:
  `320px`, `360px`, `375px`, `390px`, `412px`, `430px`, `768px`, `1024px`, `1280px`, `1440px`, `1920px`.
* **Zero Horizontal Overflow**: `scrollWidth` must never exceed `clientWidth`. Tables wrapped in `.article-table-wrap`. Code blocks wrapped with `white-space: pre-wrap` / `overflow-x: auto`.
* **Touch Targets**: Minimum `44x44px` clickable touch targets for buttons and interactive controls.
* **Contrast & Print Styles**: High contrast ratios (WCAG AAA for text) and clean print stylesheets on resumes and case studies.

---

## 4. Design System & CSS Guide

### Color Tokens (defined in `assets/css/style.css`)
```css
:root {
  --bg-primary: #0a0d14;       /* Deep obsidian canvas */
  --bg-secondary: #111622;     /* Surface cards */
  --bg-tertiary: #182032;      /* Elevated cards / dropdowns */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-glow: rgba(0, 230, 184, 0.25);

  --accent-teal: #00E6B8;      /* Primary brand neon green/teal */
  --accent-blue: #3B82F6;      /* Secondary electric blue */
  --accent-purple: #8B5CF6;    /* Tertiary violet accent */
  --text-primary: #F3F4F6;     /* Bright high-contrast text */
  --text-secondary: #9CA3AF;   /* Muted body text */
  --text-muted: #6B7280;       /* Metadata / subtle hints */
}
```

### Typography
* Headings: `Sora`, sans-serif (`500`, `600`, `700`)
* Body: `Inter`, sans-serif (`400`, `500`, `600`)
* Code / Technical Labels: `IBM Plex Mono` or `JetBrains Mono`, monospace

---

## 5. Step-by-Step Blueprints for Future Projects

### 📘 Blueprint A: Creating a New Case Study (`/work/slug/`)
1. **Copy Template**: Copy `work/_template/index.html` into `work/<new-slug>/index.html`.
2. **Update Metadata**:
   - Replace title: `<title>[Client/Project] — [Specialization] Case Study | Rishabh Debnath</title>`
   - Replace meta description (120–160 chars).
   - Set canonical: `https://rishabhdebnath.com/work/<new-slug>/`.
   - Update Open Graph / Twitter tags.
   - Remove `<meta name="robots" content="noindex, nofollow" />` (make it indexable).
3. **Configure Schema**:
   - Update `BreadcrumbList` with position 3 pointing to the new slug.
   - Update `TechArticle` headline, description, dates, and author.
4. **Draft High-Density Case Study Content**:
   - Problem Statement & Initial Architecture Audit
   - Technical Strategy & Execution Steps (Crawl governance, hreflang, schema, navigation)
   - Results & Key Takeaways (qualitative findings and measurable search foundation outcomes)
5. **Register in `assets/js/data.js`**: Add project metadata to `PORTFOLIO_DATA.projects` array.
6. **Register in `sitemap.xml`**: Add `<url><loc>https://rishabhdebnath.com/work/<new-slug>/</loc>...</url>`.
7. **Run Validation Script**: `powershell -ExecutionPolicy Bypass -File "scripts/tech_seo_audit.ps1"`.

---

### 📰 Blueprint B: Creating a New Blog Article (`/blog/slug/`)
1. **Copy Template**: Copy `blog/_template/index.html` into `blog/<new-slug>/index.html`.
2. **Update Metadata & Schema**:
   - Title tag (40–60 chars), meta description (120–160 chars), canonical URL.
   - `BlogPosting` + `BreadcrumbList` + `FAQPage` in Schema.org JSON-LD.
   - Remove `noindex, nofollow`.
3. **Write Article Content**:
   - Add `<div class="key-takeaways-card">` after introduction.
   - Structured H2/H3 hierarchy with table of contents scroll-spy matching IDs.
   - Comparison tables in `.article-table-wrap`.
   - Interactive FAQ accordion section.
4. **Register in `assets/js/blog-data.js`**: Add article entry to `BLOG_POSTS` array.
5. **Register in `sitemap.xml`**: Add new URL entry.
6. **Run Validation Script**: `powershell -ExecutionPolicy Bypass -File "scripts/tech_seo_audit.ps1"`.

---

### ⚡ Blueprint C: Building Interactive Web Apps & Tools
When creating new tools (e.g., Schema Generators, SERP Snippet Previewers, Robots.txt Checkers, or custom client-side web apps):
1. **Technology**: Use Vanilla JS + HTML5 + CSS3 components or modern Vite SPA if complex state management is needed.
2. **Design Tokens**: Inherit `--bg-primary`, `--accent-teal`, `--border-subtle`, and Glassmorphism styling from `components.css`.
3. **Performance**: Zero bulky dependencies; load instant client-side calculations.
4. **UX**: Add copy-to-clipboard buttons, real-time validation badges, and accessible keyboard interactions.

---

## 6. CLI Testing & Regression Commands

Execute these PowerShell commands to audit and verify changes:

```powershell
# 1. Run automated SEO & Schema validation across all pages
powershell -ExecutionPolicy Bypass -File "scripts/tech_seo_audit.ps1"

# 2. Run automated Responsive QA and Viewport check
powershell -ExecutionPolicy Bypass -File "scripts/qa_responsive.ps1"

# 3. Check git status
git status
```

---

## 7. Deployment Protocol

* **Hosting**: Automated continuous deployment via Git push to Hostinger.
* **Production URL**: `https://rishabhdebnath.com`
* **Pre-Deployment Checklist**:
  1. All HTML pages pass `tech_seo_audit.ps1` with 0 failures.
  2. `sitemap.xml` includes all published URLs with current `<lastmod>` dates.
  3. No `noindex` tags on production articles/case studies.
  4. Tested on narrow viewport (`360px`) and desktop (`1440px`).
