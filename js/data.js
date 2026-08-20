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
    email: "contact@rishabhdebnath.com",
    location: "Available for Remote & International Roles",
    linkedin: "https://linkedin.com/in/rishabh-debnath-seo",
    github: "https://github.com/rishabhdebnath",
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
      id: "german-local-business",
      title: "German Regional B2B Website",
      subtitle: "Self-Initiated Case Study • Multilingual Technical SEO & Directory Architecture",
      projectType: "Self-Initiated Case Study",
      category: "Technical & Multilingual SEO",
      tags: ["Technical SEO", "DACH Region", "Hreflang Architecture", "Structured Data", "Screaming Frog"],
      image: "assets/images/project-german.svg",
      summary: "Self-initiated SEO case study exploring technical SEO, German compound keyword intent mapping, and multilingual search architecture for a German B2B website.",
      tools: ["Screaming Frog", "Semrush (DE)", "Google Search Console", "PageSpeed Insights", "WordPress"],
      details: {
        overview: "A self-initiated demonstration case study modeling a mid-sized German B2B engineering consultancy aiming to capture high-value search intent across Germany, Austria, and Switzerland (DACH).",
        problemsIdentified: [
          "Improper hreflang tag implementation leading to regional duplicate content confusion between de-DE, de-AT, and de-CH pages.",
          "German compound noun search terms misaligned with search intent and user query syntax.",
          "Excessive server response time (TTFB > 1.4s) caused by unoptimized assets and database queries.",
          "Absence of B2B Organization and ProfessionalService Schema.org structured data."
        ],
        keywordStrategy: [
          "Mapped semantic keyword relationships for German technical terminology, prioritizing high-intent transactional compound nouns.",
          "Constructed localized topical clusters separating DIN/ISO industrial standard guides from service landing pages."
        ],
        geoStrategy: [
          "Authored machine-readable JSON-LD entities linking company services, key personnel, and certifications directly to Wikidata concepts.",
          "Structured German-language case breakdowns with clear problem-solution-result headers to support clear LLM summarization."
        ],
        technicalImprovements: [
          "Identified and documented remediation for 400+ redirect chains and internal broken links via Screaming Frog crawl simulation.",
          "Engineered reciprocal hreflang annotations across all language-region variants.",
          "Optimized critical rendering paths and server caching recommendations to target sub-300ms TTFB."
        ],
        outcomesPlaceholder: {
          headline: "Demonstrated Technical & Semantic Improvements",
          metrics: [
            { label: "Target Keyword Footprint", value: "+115% Modeled DACH Top-10 Coverage" },
            { label: "Crawl Health Index", value: "100% Validated Hreflang & Canonicals" },
            { label: "Simulated PageSpeed", value: "98/100 Core Web Vitals Score" },
            { label: "Information Density", value: "Fully Structured Entity Graph" }
          ]
        }
      }
    },
    {
      id: "olympia-fitness",
      title: "Olympia Local Fitness Studio",
      subtitle: "Self-Initiated Case Study • Local Search & Generative Engine Optimization",
      projectType: "Self-Initiated Case Study",
      category: "Local SEO & GEO",
      tags: ["Local SEO", "GEO Optimization", "Google Business Profile", "Entity Seeding", "Schema.org"],
      image: "assets/images/project-olympia.svg",
      summary: "Self-initiated local SEO and GEO case study detailing how a localized fitness studio can build map pack dominance and establish reliable AI citation presence.",
      tools: ["Google Search Console", "Google Business Profile", "Ahrefs", "Schema.org", "Perplexity Search"],
      details: {
        overview: "A demonstration project analyzing the local search footprint and AI engine citability for a neighborhood fitness and strength coaching studio in a competitive urban market.",
        problemsIdentified: [
          "Inconsistent NAP (Name, Address, Phone) citations across local business directories causing entity ambiguity.",
          "Google Business Profile lacking localized service attributes, primary category alignment, and structured Q&A.",
          "Thin localized landing pages with duplicate meta descriptions and zero structured LocalBusiness schema.",
          "Zero citation footprint in AI search tools (Perplexity, ChatGPT Search) when answering local fitness recommendation queries."
        ],
        keywordStrategy: [
          "Targeted localized commercial queries: 'strength coaching studio near me', 'certified personal coach [district]', 'small group fitness classes'.",
          "Formulated conversational question-based FAQs matching voice search and LLM prompts ('What is the best strength training studio for beginners in [District]?')."
        ],
        geoStrategy: [
          "Engineered ExerciseGym and LocalBusiness JSON-LD schema with exact geocoordinates, operating hours, amenities, and knowsAbout entity tags.",
          "Structured factual entity blocks on primary service pages to serve as clean contextual extracts for LLM citation algorithms."
        ],
        technicalImprovements: [
          "Reduced Largest Contentful Paint (LCP) by deferring non-critical styles and implementing responsive WebP formats.",
          "Implemented clean breadcrumb trails and self-referencing canonical tags to prevent geo-page cannibalization."
        ],
        outcomesPlaceholder: {
          headline: "Demonstrated Local & AI Discovery Framework",
          metrics: [
            { label: "Local Map Pack Readiness", value: "Top-3 Position Framework" },
            { label: "Local Citation Integrity", value: "100% NAP Consistency Model" },
            { label: "AI Search Citability", value: "Structured for Perplexity & AI Overviews" },
            { label: "Conversion Pathway", value: "Optimized Frictionless Booking Funnel" }
          ]
        }
      }
    },
    {
      id: "ecommerce-seo",
      title: "Specialty D2C E-commerce Catalog",
      subtitle: "Self-Initiated Case Study • Faceted Navigation & Product Schema Graph",
      projectType: "Self-Initiated Case Study",
      category: "E-commerce SEO",
      tags: ["E-commerce", "Faceted Navigation", "Product Schema", "Topical Authority", "Ahrefs"],
      image: "assets/images/project-ecommerce.svg",
      summary: "Self-initiated study on resolving crawl traps in faceted navigation, consolidating product variants, and implementing rich Product and MerchantReturnPolicy schemas.",
      tools: ["Ahrefs", "Google Merchant Center", "Screaming Frog", "Google Search Console", "Shopify/Liquid"],
      details: {
        overview: "A technical SEO research project analyzing catalog indexation issues on an e-commerce platform with over 3,000 SKUs experiencing parametric index bloat.",
        problemsIdentified: [
          "Faceted navigation generated thousands of duplicate, thin parameterized URLs indexed by search bots.",
          "Product variant URLs conflicting with canonical parent products, causing ranking cannibalization.",
          "Missing Product, AggregateRating, Offer, and MerchantReturnPolicy structured data.",
          "Weak internal link architecture failing to pass link equity from informational guides to high-margin collection pages."
        ],
        keywordStrategy: [
          "Audited multi-attribute search volumes to selectively index only high-volume facet combinations (e.g., Category + Brand) while canonicalizing filter combinations.",
          "Created targeted category landing page templates for long-tail transactional terms."
        ],
        geoStrategy: [
          "Implemented comprehensive nested Product and Brand schema with stock availability, specifications, and return policies.",
          "Structured product comparison tables and buyer guides to ensure LLM shopping assistants accurately cite product features."
        ],
        technicalImprovements: [
          "Designed AJAX filtering architecture with clean URL pushState and canonicalization rules, pruning unnecessary URLs from crawl queues.",
          "Automated JSON-LD rich snippet generation across all product catalog templates."
        ],
        outcomesPlaceholder: {
          headline: "Index Governance & Authority Architecture",
          metrics: [
            { label: "Index Bloat Reduction", value: "Pruned Low-Quality Parameter URLs" },
            { label: "Rich Snippet Eligibility", value: "100% Validated Product Schema" },
            { label: "Internal Linking Model", value: "Hub-and-Spoke Equity Flow" },
            { label: "LLM Shopping Readiness", value: "Structured Attribute Matrix" }
          ]
        }
      }
    },
    {
      id: "niche-news-website",
      title: "Digital Publishing & News Portal",
      subtitle: "Self-Initiated Case Study • Google Discover Readiness & NewsArticle Schema",
      projectType: "Self-Initiated Case Study",
      category: "Publishing & News SEO",
      tags: ["News SEO", "Google Discover", "Crawl Budget", "NewsArticle Schema", "Core Web Vitals"],
      image: "assets/images/project-news.svg",
      summary: "Self-initiated architectural case study on optimizing rapid indexation, Google Discover pickup, author E-E-A-T entity graphs, and crawl budget for high-frequency publishing.",
      tools: ["Google Search Console", "Google News Producer", "Log File Analyzer", "Schema.org", "Cloudflare"],
      details: {
        overview: "A research project examining how fast-paced editorial sites can minimize indexing latency and satisfy both Google News criteria and generative AI retrieval pipelines.",
        problemsIdentified: [
          "Indexation delay post-publication, missing early trending search volume during breaking news cycles.",
          "Improper NewsArticle schema missing verified author entity references and editorial timestamps.",
          "Crawl budget wasted on low-value taxonomy archive pages, tag parameters, and paginated internal search URLs.",
          "Cumulative Layout Shift (CLS) caused by dynamic ad placement rendering."
        ],
        keywordStrategy: [
          "Established headline structuring guidelines balancing editorial clarity with entity-focused semantic keywords.",
          "Built content cluster workflows mapping evergreen background articles to breaking news topics."
        ],
        geoStrategy: [
          "Integrated detailed author entity schema linked to authoritative profiles to reinforce topical authority and E-E-A-T.",
          "Structured 'Key Takeaways' and factual summary boxes at article headers for rapid LLM citation."
        ],
        technicalImprovements: [
          "Configured real-time XML News Sitemaps with automated webhook updates.",
          "Standardized robots.txt disallows and noindex directives on tag parameter URLs to preserve bot crawl budget.",
          "Stabilized ad container aspect ratios, resolving layout shift issues."
        ],
        outcomesPlaceholder: {
          headline: "Crawl Latency & Discover Optimization",
          metrics: [
            { label: "Indexation Readiness", value: "Sub-5 Minute Target Architecture" },
            { label: "E-E-A-T Author Schema", value: "100% Validated Entity Graph" },
            { label: "Crawl Efficiency", value: "Eliminated Parameter Waste" },
            { label: "Visual Stability", value: "CLS &lt; 0.02 Score Target" }
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
