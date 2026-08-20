/**
 * Blog Data Source & Metadata Architecture
 * Rishabh Debnath — SEO & Generative Engine Optimization Specialist
 * 
 * Central registry for all blog articles.
 * Full content remains in crawlable standalone HTML files (/blog/[slug]/index.html).
 */

const BLOG_DATA = {
  articles: [
    {
      slug: "the-shift-from-traditional-seo-to-geo",
      title: "The Shift from Traditional SEO to GEO: How LLMs Select Sources",
      category: "Generative Engine Optimization",
      readTime: "7 min read",
      publishedDate: "2026-08-15",
      updatedDate: "2026-08-19",
      url: "blog/the-shift-from-traditional-seo-to-geo/",
      featured: true,
      excerpt: "An architectural deep-dive into how large language models perform retrieval-augmented generation (RAG), score information density, and choose authoritative citations over legacy keyword signals.",
      tags: ["GEO", "RAG", "LLM Citations", "Information Density", "Knowledge Graph"]
    },
    {
      slug: "entity-based-seo",
      title: "Entity-Based SEO: Why Search Engines Care About Things, Not Just Strings",
      category: "Semantic SEO",
      readTime: "6 min read",
      publishedDate: "2026-08-10",
      updatedDate: "2026-08-18",
      url: "blog/entity-based-seo/",
      featured: true,
      excerpt: "How modern search engines construct Knowledge Graphs, map semantic concepts, and prioritize unambiguous entities and topical authority over keyword frequency.",
      tags: ["Entities", "Knowledge Graph", "Schema.org", "Wikidata", "Semantic Search"]
    },
    {
      slug: "technical-seo-audit-checklist",
      title: "Technical SEO Audit Checklist for Modern Web Architecture",
      category: "Technical SEO",
      readTime: "8 min read",
      publishedDate: "2026-08-05",
      updatedDate: "2026-08-19",
      url: "blog/technical-seo-audit-checklist/",
      featured: true,
      excerpt: "A diagnostic framework for auditing crawl efficiency, indexation governance, faceted navigation traps, log file health, and Core Web Vitals across modern web platforms.",
      tags: ["Technical SEO", "Crawl Budget", "Core Web Vitals", "Canonicals", "Log Analysis"]
    },
    {
      slug: "optimizing-for-ai-search",
      title: "Optimizing for Perplexity, ChatGPT Search & Google AI Overviews",
      category: "AI Search Optimization",
      readTime: "7 min read",
      publishedDate: "2026-08-01",
      updatedDate: "2026-08-19",
      url: "blog/optimizing-for-ai-search/",
      featured: true,
      excerpt: "Practical tactics to structure content for direct passage retrieval, conversational query matching, and citation acquisition in Perplexity, ChatGPT Search, and Google AI Overviews.",
      tags: ["Perplexity", "ChatGPT Search", "AI Overviews", "Direct Answers", "GEO Tactics"]
    }
  ]
};

// Export or expose globally
if (typeof window !== "undefined") {
  window.BLOG_DATA = BLOG_DATA;
}
