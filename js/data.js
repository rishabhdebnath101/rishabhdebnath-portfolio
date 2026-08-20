/**
 * Portfolio Data Source: Rishabh Debnath - SEO & GEO Specialist
 * Realistic, human, and technically rigorous data for case studies, skills, certifications, and articles.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Rishabh Debnath",
    title: "SEO & Generative Engine Optimization (GEO) Specialist",
    tagline: "I help businesses get discovered across Google Search and AI platforms.",
    supportingText: "I combine technical SEO, content strategy, and Generative Engine Optimization to improve how brands are understood by search engines and AI systems.",
    badge: "Open to SEO & Digital Marketing Opportunities",
    email: "rishabhdebnath101@gmail.com",
    location: "Available for Remote & International Roles",
    github: "https://github.com/rishabhdebnath101",
    aboutNarrative: [
      "I started with language before I started with search. Studying English taught me how meaning, context, and structure influence communication. SEO became a natural extension of that curiosity — understanding how humans search and how machines interpret information.",
      "As search systems evolved from simple keyword matching toward Knowledge Graphs, semantic vector indexing, and generative AI models, my focus shifted toward technical architecture and entity optimization.",
      "Today, discovery happens in two complementary spaces: traditional search engines like Google and Bing, and generative AI engines like ChatGPT Search, Perplexity, and Google AI Overviews. My work focuses on bridging both worlds through clean crawl paths, rigorous Schema markup, and clear information hierarchy."
    ]
  },

  approach: [
    {
      step: "01",
      title: "Research",
      desc: "Understanding search intent, competitors, and users.",
      details: "Analyzing real search queries, search engine result page (SERP) features, user mental models, and content gaps before implementing technical or structural changes.",
      tags: ["Intent Mapping", "Competitor Analysis", "SERP Analysis"]
    },
    {
      step: "02",
      title: "Optimization",
      desc: "Improving technical structure, content, and discoverability.",
      details: "Remediating crawl errors, optimizing Core Web Vitals, structuring unambiguous Schema.org JSON-LD entities, and formatting content for both web crawlers and LLM extraction.",
      tags: ["Crawl Efficiency", "Schema Engineering", "Content Architecture"]
    },
    {
      step: "03",
      title: "Measurement",
      desc: "Tracking performance and refining strategies.",
      details: "Monitoring organic impressions, indexing status, search visibility trends in GSC/GA4, and testing brand citation presence across generative AI platforms.",
      tags: ["Search Console", "GA4 Analytics", "AI Citations"]
    }
  ],

  projects: [
    {
      id: "german-regional-b2b-seo",
      slug: "german-regional-b2b-seo",
      url: "work/german-regional-b2b-seo/",
      title: "German Regional B2B Website",
      subtitle: "Multilingual Technical SEO & Regional Search Architecture",
      projectType: "Self-Initiated Case Study",
      category: "Technical & Regional SEO",
      tags: ["Technical SEO", "DACH Region", "Hreflang", "Structured Data", "Screaming Frog"],
      image: "/assets/images/projects/project-german.svg",
      summary: "A practical study exploring how a regional German B2B engineering site could improve search visibility across Germany, Austria, and Switzerland through proper hreflang, German keyword intent mapping, and structured data.",
      tools: ["Screaming Frog", "Semrush (DE)", "Google Search Console", "PageSpeed Insights"],
      details: {
        overview: "A self-initiated SEO case study exploring how a regional German B2B website could improve multilingual search visibility across Germany, Austria, and Switzerland.",
        problemsIdentified: [
          "Improper hreflang tag setup causing regional duplicate content confusion between de-DE, de-AT, and de-CH pages.",
          "German compound noun search terms misaligned with real user search intent and query phrasing.",
          "Slow server response times (TTFB > 1.2s) caused by unoptimized assets and server configuration.",
          "Missing Organization and ProfessionalService Schema.org structured data to help search engines understand the business."
        ],
        keywordStrategy: [
          "Mapped high-intent German compound terms and industry-specific keywords across technical service lines.",
          "Grouped technical documentation and ISO standard guides separately from commercial service pages to prevent intent mismatch."
        ],
        geoStrategy: [
          "Structured JSON-LD data linking company services, key personnel, and certifications clearly for search engines and AI tools.",
          "Formatted key case takeaways with clear problem-solution summaries to make content easy for search engines and AI assistants to extract."
        ],
        technicalImprovements: [
          "Audited internal links and redirect chains using Screaming Frog to identify crawl bottlenecks.",
          "Designed reciprocal hreflang annotations across language and regional variants.",
          "Recommended caching rules and asset compression to bring server response times into healthy ranges."
        ],
        outcomesPlaceholder: {
          headline: "Key Learnings & Success Criteria",
          metrics: [
            { label: "Target Keyword Visibility", value: "Clear DACH Regional Intent Coverage" },
            { label: "Crawl Health Target", value: "Clean Hreflang & Canonical Signals" },
            { label: "Performance Goal", value: "Target: Sub-300ms Server Response (TTFB)" },
            { label: "Information Structure", value: "Unambiguous Schema.org Entity Data" }
          ]
        }
      }
    },
    {
      id: "olympia-local-seo",
      slug: "olympia-local-seo",
      url: "work/olympia-local-seo/",
      title: "Olympia Local Fitness Studio",
      subtitle: "Local Search, Google Maps & AI Discovery",
      projectType: "Self-Initiated Case Study",
      category: "Local SEO & GEO",
      tags: ["Local SEO", "Google Business Profile", "Citations", "LocalBusiness Schema", "AI Discovery"],
      image: "/assets/images/projects/project-olympia.svg",
      summary: "A local SEO case study exploring how Olympia Fitness Studio could improve visibility in Google Maps, local organic search, and AI-powered recommendations through profile optimization, review signals, and LocalBusiness schema.",
      tools: ["Google Search Console", "Google Business Profile", "Ahrefs", "Schema.org"],
      details: {
        overview: "A local SEO case study exploring how Olympia Fitness Studio could improve visibility in Google Maps, local search, and AI-powered recommendations.",
        problemsIdentified: [
          "Inconsistent NAP (Name, Address, Phone) citations across local business directories creating confusion for search engines.",
          "Google Business Profile missing key service attributes, secondary categories, and structured Q&A.",
          "Thin localized landing pages with duplicate meta descriptions and no structured LocalBusiness schema.",
          "Limited presence in conversational AI tools (Perplexity, ChatGPT Search) when users ask for local gym recommendations."
        ],
        keywordStrategy: [
          "Researched local search queries such as 'strength training studio near me' and neighborhood-specific fitness phrases.",
          "Structured question-and-answer FAQs matching common questions people ask before joining a local gym."
        ],
        geoStrategy: [
          "Authored ExerciseGym and LocalBusiness JSON-LD schema with exact coordinates, opening hours, and offered services.",
          "Created clear service description summaries to help AI search engines cite the studio accurately for relevant neighborhood queries."
        ],
        technicalImprovements: [
          "Improved mobile page loading times by converting images to WebP and deferring non-essential scripts.",
          "Set up clean canonical URLs and breadcrumb trails across localized training pages."
        ],
        outcomesPlaceholder: {
          headline: "Key Learnings & Success Criteria",
          metrics: [
            { label: "Google Maps Goal", value: "Target: Top-3 Local Map Pack Visibility" },
            { label: "Citation Quality", value: "Goal: 100% NAP Consistency Across Core Directories" },
            { label: "AI Search Citability", value: "Clear Structure for Perplexity & AI Summaries" },
            { label: "User Experience", value: "Frictionless Class Booking & Inquiry Pathway" }
          ]
        }
      }
    },
    {
      id: "ecommerce-technical-seo",
      slug: "ecommerce-technical-seo",
      url: "work/ecommerce-technical-seo/",
      title: "Specialty D2C E-commerce Catalog",
      subtitle: "Faceted Navigation, Canonical Strategy & Product Schema",
      projectType: "Self-Initiated Case Study",
      category: "E-commerce SEO",
      tags: ["E-commerce", "Faceted Navigation", "Product Schema", "Internal Linking", "Ahrefs"],
      image: "/assets/images/projects/project-ecommerce.svg",
      summary: "A technical SEO research project focused on common e-commerce indexing problems such as faceted navigation crawl bloat, product variant canonicalization, rich Product schema, and category internal linking.",
      tools: ["Ahrefs", "Google Search Console", "Screaming Frog", "Schema.org", "Shopify/Liquid"],
      details: {
        overview: "A technical SEO research project focused on common e-commerce indexing problems such as faceted navigation, duplicate URLs, canonicalization, product schema, and internal linking.",
        problemsIdentified: [
          "Faceted navigation filters generated hundreds of duplicate parameterized URLs that wasted crawl budget.",
          "Product color and size variants competing with main category and product pages for search rankings.",
          "Missing or incomplete Product, Offer, and MerchantReturnPolicy structured data.",
          "Informational blog guides failed to pass internal link equity to high-priority product category pages."
        ],
        keywordStrategy: [
          "Audited search demand to index only high-value facet combinations (e.g., Category + Brand) while canonicalizing thin filter permutations.",
          "Structured category and subcategory landing pages for specific product buyer search intents."
        ],
        geoStrategy: [
          "Implemented comprehensive Product schema with pricing, stock status, product specs, and return policies.",
          "Formatted product specifications and comparison tables so AI shopping assistants can accurately read product features."
        ],
        technicalImprovements: [
          "Recommended clean URL handling and canonical rules for faceted filters to keep crawl queues focused on valuable pages.",
          "Structured automated JSON-LD rich snippet markup across product and collection templates."
        ],
        outcomesPlaceholder: {
          headline: "Key Learnings & Success Criteria",
          metrics: [
            { label: "Index Efficiency", value: "Target: Remove Low-Value Parameter URLs from Crawl" },
            { label: "Rich Results Goal", value: "Valid Product & Pricing Schema for SERP Snippets" },
            { label: "Internal Linking", value: "Hub-and-Spoke Link Flow from Guides to Collections" },
            { label: "AI Shopping Clarity", value: "Structured Specs for AI Assistant Retrieval" }
          ]
        }
      }
    },
    {
      id: "digital-publishing-seo",
      slug: "digital-publishing-seo",
      url: "work/digital-publishing-seo/",
      title: "Digital Publishing & News Portal",
      subtitle: "Crawl Efficiency, Google News Readiness & NewsArticle Schema",
      projectType: "Self-Initiated Case Study",
      category: "Publishing & News SEO",
      tags: ["News SEO", "Google News", "Crawl Efficiency", "NewsArticle Schema", "Core Web Vitals"],
      image: "/assets/images/projects/project-news.svg",
      summary: "A publishing SEO case study exploring crawl efficiency, Google News readiness, NewsArticle schema, author E-E-A-T signals, and technical performance for a fast-moving news website.",
      tools: ["Google Search Console", "Screaming Frog", "Schema.org", "PageSpeed Insights"],
      details: {
        overview: "A publishing SEO case study exploring crawl efficiency, Google News readiness, article schema, internal linking, and technical performance for a fast-moving news website.",
        problemsIdentified: [
          "Indexation delay after publication, causing missed search interest during early news cycles.",
          "Missing or incomplete NewsArticle schema without proper author references and update timestamps.",
          "Search engine crawl budget spent on low-value tag archives, duplicate author pages, and search result URLs.",
          "Cumulative Layout Shift (CLS) issues caused by dynamic ad containers loading without reserved dimensions."
        ],
        keywordStrategy: [
          "Developed headline best practices balancing journalistic clarity with primary search entities.",
          "Created topic cluster internal linking connecting breaking news updates back to evergreen background explainer pages."
        ],
        geoStrategy: [
          "Configured author schema linked to professional profiles to clearly communicate author expertise and editorial accountability.",
          "Added 'Key Takeaways' summary boxes at the top of long-form articles to make content easy for AI search summaries to extract."
        ],
        technicalImprovements: [
          "Recommended optimized XML News Sitemaps to notify search engines immediately when new articles publish.",
          "Applied noindex and robots.txt rules on internal search and duplicate tag pages to focus bot attention on real articles.",
          "Reserved fixed aspect ratio dimensions for ad slots to eliminate visual layout shifts."
        ],
        outcomesPlaceholder: {
          headline: "Key Learnings & Success Criteria",
          metrics: [
            { label: "Index Speed Goal", value: "Target: Rapid Discovery for Time-Sensitive Content" },
            { label: "Author Schema", value: "Valid Author Entity Markup Supporting E-E-A-T" },
            { label: "Crawl Efficiency", value: "Preserved Crawl Budget by Excluding Thin Archives" },
            { label: "Visual Stability", value: "Target: CLS < 0.1 for Core Web Vitals 'Good' Range" }
          ]
        }
      }
    }
  ],

  skills: {
    technical: [
      { name: "Technical Audits", level: "Technical SEO", desc: "Comprehensive diagnostic auditing for crawl errors, redirect loops, and server response issues." },
      { name: "Crawl Analysis", level: "SEO Implementation", desc: "Log file evaluation, Screaming Frog crawl configuration, and crawl budget optimization." },
      { name: "Indexation Control", level: "Technical SEO", desc: "Robots.txt directives, canonical tag hierarchy, XML sitemaps, and noindex governance." },
      { name: "Core Web Vitals", level: "Working Knowledge", desc: "Optimizing LCP, INP, and CLS metrics, critical rendering path analysis, and WebP compression." }
    ],
    content: [
      { name: "Keyword Research", level: "Practical Experience", desc: "Search volume analysis, commercial keyword mapping, and long-tail query clustering." },
      { name: "Search Intent", level: "Working Knowledge", desc: "Classifying informational, commercial, and transactional intent to guide page structure." },
      { name: "Content Structure", level: "SEO Implementation", desc: "Heading hierarchy, entity-rich paragraphs, and readable information-dense formatting." },
      { name: "Internal Linking", level: "Technical SEO", desc: "Hub-and-spoke topical clustering, contextual anchor text, and PageRank equity flow." }
    ],
    geo: [
      { name: "Entity Optimization", level: "Working Knowledge", desc: "Connecting brand and content entities to recognized knowledge graphs (Wikidata, DBpedia)." },
      { name: "Schema Markup", level: "SEO Implementation", desc: "Handcrafted JSON-LD structured data (Organization, LocalBusiness, Product, Article, FAQ)." },
      { name: "AI Citation Readiness", level: "Practical Experience", desc: "Structuring factual statements and bulleted summaries for reliable LLM retrieval." },
      { name: "LLM Visibility", level: "Working Knowledge", desc: "Testing and tracking brand presence across Perplexity, ChatGPT Search, and Google AI Overviews." }
    ],
    tools: [
      { name: "Google Search Console", level: "Practical Experience", desc: "Performance tracking, coverage diagnostics, URL inspection, and sitemap validation." },
      { name: "Google Analytics 4 (GA4)", level: "Working Knowledge", desc: "Event-based measurement, user journey tracking, and organic channel attribution." },
      { name: "Semrush", level: "Practical Experience", desc: "Competitive domain benchmarking, keyword gap analysis, and position tracking." },
      { name: "Ahrefs", level: "Working Knowledge", desc: "Backlink profile diagnostics, content exploration, and keyword difficulty analysis." },
      { name: "Screaming Frog", level: "Technical SEO", desc: "Deep site crawling, custom XPath extraction, and JavaScript rendering audits." },
      { name: "PageSpeed Insights", level: "Practical Experience", desc: "Core Web Vitals auditing, render-blocking script detection, and performance benchmarks." }
    ]
  },

  certifications: [
    {
      title: "HubSpot Digital Marketing Certification",
      issuer: "HubSpot Academy",
      date: "Completed Course",
      badge: "HubSpot Certified",
      summary: "Foundational training in search-driven content strategy, inbound methodology, and conversion optimization.",
      skills: ["Inbound Strategy", "Content Marketing", "Search Fundamentals"]
    },
    {
      title: "Google Analytics 4 (GA4) Certification",
      issuer: "Google Skillshop",
      date: "Completed Course",
      badge: "Google Skillshop",
      summary: "Measurement foundations, custom event configuration, user journey analysis, and organic traffic attribution.",
      skills: ["GA4 Analytics", "Conversion Tracking", "Event Measurement"]
    },
    {
      title: "Semrush Academy Technical SEO & Toolkit",
      issuer: "Semrush Academy",
      date: "Completed Course",
      badge: "Semrush Academy",
      summary: "Practical training in technical site audits, competitive keyword research, and on-page optimization workflows.",
      skills: ["Technical SEO", "Competitive Audits", "Keyword Intelligence"]
    },
    {
      title: "Continuous Specialization & Modern Search",
      issuer: "Continuous Self-Study",
      date: "Ongoing Learning",
      badge: "Active Research",
      summary: "Dedicated continuous research into Generative AI Search dynamics, Schema.org graph engineering, and web performance standards.",
      skills: ["GEO Research", "Schema.org Standards", "Core Web Vitals"]
    }
  ],

  articles: [
    {
      id: "the-shift-from-traditional-seo-to-geo",
      slug: "the-shift-from-traditional-seo-to-geo",
      title: "The Shift from Traditional SEO to GEO: How LLMs Select Sources",
      category: "Generative Engine Optimization",
      readTime: "7 min read",
      publishedDate: "2026-08-15",
      updatedDate: "2026-08-19",
      url: "blog/the-shift-from-traditional-seo-to-geo/",
      excerpt: "An architectural deep-dive into how large language models perform retrieval-augmented generation (RAG), score information density, and choose authoritative citations over legacy keyword signals."
    },
    {
      id: "entity-based-seo",
      slug: "entity-based-seo",
      title: "Entity-Based SEO: Why Search Engines Care About Things, Not Just Strings",
      category: "Semantic SEO",
      readTime: "6 min read",
      publishedDate: "2026-08-10",
      updatedDate: "2026-08-18",
      url: "blog/entity-based-seo/",
      excerpt: "How modern search engines construct Knowledge Graphs, map semantic concepts, and prioritize unambiguous entities and topical authority over keyword frequency."
    },
    {
      id: "technical-seo-audit-checklist",
      slug: "technical-seo-audit-checklist",
      title: "Technical SEO Audit Checklist for Modern Web Architecture",
      category: "Technical SEO",
      readTime: "8 min read",
      publishedDate: "2026-08-05",
      updatedDate: "2026-08-19",
      url: "blog/technical-seo-audit-checklist/",
      excerpt: "A diagnostic framework for auditing crawl efficiency, indexation governance, faceted navigation traps, log file health, and Core Web Vitals across modern web platforms."
    },
    {
      id: "optimizing-for-ai-search",
      slug: "optimizing-for-ai-search",
      title: "Optimizing for Perplexity, ChatGPT Search & Google AI Overviews",
      category: "AI Search Optimization",
      readTime: "7 min read",
      publishedDate: "2026-08-01",
      updatedDate: "2026-08-19",
      url: "blog/optimizing-for-ai-search/",
      excerpt: "Practical tactics to structure content for direct passage retrieval, conversational query matching, and citation acquisition in Perplexity, ChatGPT Search, and Google AI Overviews."
    }
  ]
};
