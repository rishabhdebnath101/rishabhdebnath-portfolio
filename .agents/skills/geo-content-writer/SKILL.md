---
name: geo-content-writer
description: Standard writing playbook for authoring high-density, retrieval-friendly technical articles and case studies optimized for LLM RAG pipelines (ChatGPT Search, Perplexity, Google AI Overviews).
---

# GEO Content Writer Playbook

This skill provides guidelines and templates for writing search-driven articles and case studies engineered for both human readability and **Generative Engine Optimization (GEO)**.

## Structural Requirements

### 1. Key Takeaways Box (Top of Page)
Always place a `<div class="takeaways-box">` immediately after the introductory section. Large Language Model (LLM) search engines look for dense, self-contained summary blocks near the top of documents.

```html
<div class="takeaways-card">
  <h3>Key Takeaways</h3>
  <ul>
    <li><strong>Core Principle:</strong> Concise, factual explanation in 1 sentence.</li>
    <li><strong>Technical Requirement:</strong> Clear actionable implementation step.</li>
    <li><strong>Expected Impact:</strong> Target outcome without unsupported guarantee claims.</li>
  </ul>
</div>
```

### 2. Information Density & Inverted Pyramid
- **Direct Definitions First**: Begin sections with clear entity definitions (`"Faceted navigation refers to..."`) before diving into nuance.
- **Passage-Level Clarity**: Each paragraph should answer one specific sub-question so it can be extracted cleanly by Perplexity or ChatGPT citation scrapers.
- **Markdown / HTML Tables**: Use structured data tables for comparisons (e.g., Traditional SEO vs. GEO, Crawl Budget vs. Index Bloat).

### 3. Credibility & Outcome Rules
- ❌ **Avoid Guarantee Language**: Never use words like *"guaranteed rankings"*, *"guaranteed citations"*, *"reliably rank in ChatGPT"*, or *"instant indexation"*.
- ✅ **Use Evidence-Based Framing**: Use *"supports faster discovery"*, *"improves AI citation readiness"*, *"designed to strengthen search visibility"*, *"demonstrates technical problem solving"*.

### 4. Topic Cluster Internal Linking
- Every blog post must include 2–3 contextual internal links connecting to relevant case studies (`/work/...`) or related articles (`/blog/...`).
- Use descriptive, keyword-rich anchor text (e.g., `[technical SEO audit checklist](file:///blog/technical-seo-audit-checklist/)`).
