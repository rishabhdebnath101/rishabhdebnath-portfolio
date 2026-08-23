# Mandatory SEO & Quality Assurance Standards

Always apply and check against these 4 core skills during every implementation, content update, or code change:

## 1. Technical SEO Auditor (`technical-seo-auditor`)
- Verify title tag length is strictly between **40–60 characters** (never exceed 65 to avoid Bing/Google truncation).
- Verify unique, compelling meta descriptions (**120–160 characters**).
- Ensure strictly **one `<h1>` per page** and clean heading hierarchy (`<h2>` -> `<h3>`).
- Confirm self-referencing absolute canonical URLs with proper trailing slashes.
- Ensure all pages are synchronized in `sitemap.xml`.

## 2. GEO Schema Generator (`geo-schema-generator`)
- Verify all structured data is validated JSON-LD using connected `@graph` architecture.
- Ensure unambiguous `@id` entity links (`#person`, `#website`, `#article`, `#breadcrumb`).
- Include `FAQPage` and direct answer passages for AI search grounding where applicable.

## 3. GEO Content Writer (`geo-content-writer`)
- Ensure high-density, factual statements suitable for LLM RAG pipelines.
- Include **Key Takeaways** summary boxes near the top of in-depth guides.
- **Zero outcome overclaiming**: Describe what work demonstrates or targets rather than claiming guaranteed rankings or traffic.

## 4. Responsive QA Checker (`responsive-qa-checker`)
- Ensure zero horizontal scroll (`overflow-x: hidden` / clean wrap) across all 11 viewports (`320px` to `1920px`).
- Ensure no clipped text, overlapping buttons, or unreadable contrast.
- Ensure clean ink-efficient print styles for resume and case study documents.
