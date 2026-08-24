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
      slug: "how-to-rank-on-google-and-ai-search",
      title: "How to Rank on Google and AI Search: A Practical Guide to Modern SEO",
      category: "Search Strategy",
      readTime: "7 min read",
      publishedDate: "2026-08-24",
      updatedDate: "2026-08-24",
      url: "blog/how-to-rank-on-google-and-ai-search/",
      featured: true,
      excerpt: "Search is no longer just about 10 blue links. Learn how to optimize your website to earn organic Google rankings and get cited by AI answer engines like ChatGPT and Perplexity.",
      tags: ["SEO Fundamentals", "GEO", "AI Search", "Intent Mapping", "Free SEO Tools"]
    },
    {
      slug: "the-shift-from-traditional-seo-to-geo",
      title: "SEO vs GEO: What Actually Changes in AI Search?",
      category: "GEO",
      readTime: "7 min read",
      publishedDate: "2026-08-15",
      updatedDate: "2026-08-19",
      url: "blog/the-shift-from-traditional-seo-to-geo/",
      featured: true,
      excerpt: "SEO still matters, but AI search changes how information is discovered and summarized. Here's what GEO adds, what stays the same, and what you should actually focus on.",
      tags: ["GEO", "RAG", "LLM Citations", "Information Density", "Knowledge Graph"]
    },
    {
      slug: "entity-based-seo",
      title: "What Is Entity-Based SEO, and Why Does It Matter?",
      category: "Entity SEO",
      readTime: "6 min read",
      publishedDate: "2026-08-10",
      updatedDate: "2026-08-18",
      url: "blog/entity-based-seo/",
      featured: true,
      excerpt: "Search engines try to understand people, brands, products, and places—not just keywords. This article explains entities in simple terms and where they fit into modern SEO.",
      tags: ["Entities", "Knowledge Graph", "Schema.org", "Wikidata", "Semantic Search"]
    },
    {
      slug: "technical-seo-audit-checklist",
      title: "How I Approach a Technical SEO Audit",
      category: "Technical SEO",
      readTime: "8 min read",
      publishedDate: "2026-08-05",
      updatedDate: "2026-08-19",
      url: "blog/technical-seo-audit-checklist/",
      featured: true,
      excerpt: "A practical look at the checks I use for crawling, indexing, Core Web Vitals, structured data, internal links, and other technical SEO issues.",
      tags: ["Technical SEO", "Crawl Budget", "Core Web Vitals", "Canonicals", "Log Analysis"]
    },
    {
      slug: "optimizing-for-ai-search",
      title: "How Can You Make Content Easier for AI Search to Understand?",
      category: "AI Search",
      readTime: "7 min read",
      publishedDate: "2026-08-01",
      updatedDate: "2026-08-19",
      url: "blog/optimizing-for-ai-search/",
      featured: true,
      excerpt: "There's no magic trick for getting cited by AI tools. But clear answers, strong structure, trustworthy information, and good technical SEO can make your content easier to interpret and retrieve.",
      tags: ["Perplexity", "ChatGPT Search", "AI Overviews", "Direct Answers", "GEO Tactics"]
    }
  ]
};

// Export or expose globally
if (typeof window !== "undefined") {
  window.BLOG_DATA = BLOG_DATA;
}
