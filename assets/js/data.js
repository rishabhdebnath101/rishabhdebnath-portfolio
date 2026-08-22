/**
 * Portfolio Data Source: Rishabh Debnath - SEO & GEO Specialist
 * Realistic, human, and technically rigorous data for case studies, skills, certifications, and articles.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Rishabh Debnath",
    title: "SEO & Generative Engine Optimization (GEO) Specialist",
    tagline: "I help businesses get discovered across Google Search and AI platforms.",
    supportingText: "I build clean website architecture, clear structured data, and search strategies designed to improve organic visibility and make brands easier to discover across search engines and AI platforms.",
    badge: "Open to SEO & Digital Marketing Opportunities",
    email: "rishabhdebnath101@gmail.com",
    location: "Available for Remote & International Roles",
    github: "https://github.com/rishabhdebnath101",
    aboutNarrative: [
      "I started with language before I got into SEO. Studying English taught me how subtle nuances in words, context, and structure shape human communication. Transitioning into search was a natural fit — it is all about understanding what real people are looking for and helping search engines connect them with the right answers.",
      "Over the years, search systems have evolved from simple keyword matching toward understanding real-world concepts, entities, and relationships. That is why my focus is on solid technical foundations: fast-loading pages, clean site architecture, and clear structured data that leaves no room for confusion.",
      "Today, getting found online means showing up in two complementary places: traditional search engines like Google and Bing, and conversational AI platforms like ChatGPT, Perplexity, and Google AI Overviews. My goal is to make sure your website excels in both."
    ]
  },

  approach: [
    {
      step: "01",
      title: "Research",
      desc: "Understanding what your customers actually search for.",
      details: "Analyzing real search queries, studying competitor strengths and weaknesses, and identifying high-intent topics that potential customers use before making a decision.",
      tags: ["Intent Research", "Competitor Gaps", "Search Trends"]
    },
    {
      step: "02",
      title: "Optimization",
      desc: "Fixing technical roadblocks and organizing content.",
      details: "Resolving crawl errors, speeding up page load times, adding clean Schema.org structured data, and formatting content so both Google crawlers and AI tools can read it effortlessly.",
      tags: ["Technical Fixes", "Structured Data", "Clear Layouts"]
    },
    {
      step: "03",
      title: "Measurement",
      desc: "Tracking real visibility and continuous improvement.",
      details: "Monitoring organic impressions, indexing health, and traffic trends in Search Console and GA4, while testing how often your business is cited in modern AI answer engines.",
      tags: ["Traffic Analytics", "Search Console", "AI Citations"]
    }
  ],

  projects: [
    {
      id: "german-regional-b2b-seo",
      slug: "german-regional-b2b-seo",
      url: "work/german-regional-b2b-seo/",
      title: "German Regional B2B Website",
      subtitle: "Multilingual SEO & Multi-Country Architecture",
      projectType: "Self-Initiated Case Study",
      category: "Technical SEO · International SEO",
      tags: ["Technical SEO", "DACH Region", "Hreflang", "Structured Data", "Screaming Frog"],
      image: "assets/images/projects/project-german.svg",
      summary: "A practical study showing how a regional engineering company can organize its German, Austrian, and Swiss pages so local business buyers find the right localized pricing and contact details without duplicate content confusion.",
      tools: ["Screaming Frog", "Semrush (DE)", "Google Search Console", "PageSpeed Insights"],
      details: {
        overview: "A self-initiated SEO case study exploring how a regional German B2B website can improve search visibility across Germany, Austria, and Switzerland through clean hreflang and localized intent mapping.",
        problemsIdentified: [
          "Incorrect hreflang tags causing Google to show German (de-DE) pages to visitors searching from Austria (de-AT) and Switzerland (de-CH).",
          "Technical engineering terms misaligned with the natural search phrases business buyers actually type into Google.",
          "Slow server response times (TTFB > 1.2s) causing search crawlers to slow down and visitors to leave.",
          "Missing Organization and ProfessionalService structured data to help search engines verify business credentials."
        ],
        keywordStrategy: [
          "Researched high-intent German B2B search phrases and mapped them to dedicated service landing pages.",
          "Separated technical documentation and ISO standards from sales inquiry pages so each page had a single, clear goal."
        ],
        geoStrategy: [
          "Added clear Schema.org JSON-LD linking company services, key personnel, and certifications for Google and AI tools.",
          "Formatted key takeaways with clear problem-solution summaries to make content easy for search engines and AI assistants to extract."
        ],
        technicalImprovements: [
          "Audited internal links and redirect chains using Screaming Frog to remove crawl bottlenecks.",
          "Implemented reciprocal hreflang annotations across language and regional variants.",
          "Recommended caching rules and asset compression to bring server response times into healthy ranges."
        ],
        outcomesPlaceholder: {
          headline: "Key Learnings & Success Criteria",
          metrics: [
            { label: "Regional Search Focus", value: "Clear DACH Multi-Country Coverage" },
            { label: "Crawl Health Target", value: "Clean Hreflang & Canonical Signals" },
            { label: "Page Speed Goal", value: "Target: Sub-300ms Server Response (TTFB)" },
            { label: "Business Clarity", value: "Verified Schema.org Company Data" }
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
      category: "Local SEO · GEO",
      tags: ["Local SEO", "Google Business Profile", "Citations", "LocalBusiness Schema", "AI Discovery"],
      image: "assets/images/projects/project-olympia.svg",
      summary: "Exploring how a neighborhood fitness studio could strengthen its Google Maps presence, local organic visibility, and AI search readiness through Google Business Profile optimization, local signals, and structured business data.",
      tools: ["Google Search Console", "Google Business Profile", "Ahrefs", "Schema.org"],
      details: {
        overview: "A local SEO case study exploring how Olympia Fitness Studio could improve visibility in Google Maps, local search, and AI-powered recommendations.",
        problemsIdentified: [
          "Inconsistent Name, Address, and Phone (NAP) details across local directories, confusing search engines.",
          "Google Business Profile missing key service attributes, secondary categories, and structured customer Q&As.",
          "Thin localized landing pages with duplicate descriptions and no structured LocalBusiness schema.",
          "Limited presence in AI tools (like Perplexity and ChatGPT) when users ask for local workout and training recommendations."
        ],
        keywordStrategy: [
          "Researched local search queries such as 'strength training studio near me' and neighborhood-specific fitness phrases.",
          "Created straightforward FAQ sections answering the most common questions people ask before signing up for a gym."
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
            { label: "Google Maps Target", value: "Target: Stronger Local Map Pack Visibility" },
            { label: "Citation Quality", value: "Goal: Consistent Contact Info Across Core Directories" },
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
      subtitle: "Faceted Navigation, Canonical Rules & Product Schema",
      projectType: "Self-Initiated Case Study",
      category: "E-commerce SEO · Technical SEO",
      tags: ["E-commerce", "Faceted Navigation", "Product Schema", "Internal Linking", "Ahrefs"],
      image: "assets/images/projects/project-ecommerce.svg",
      summary: "A technical SEO project focused on cleaning up thousands of duplicate filter pages (size, color, price) in an online store so search engines focus crawl time on important product and category pages with stronger commercial value.",
      tools: ["Ahrefs", "Google Search Console", "Screaming Frog", "Schema.org", "Shopify/Liquid"],
      details: {
        overview: "A technical SEO research project focused on common e-commerce indexing problems such as faceted navigation, duplicate URLs, canonicalization, product schema, and internal linking.",
        problemsIdentified: [
          "Product filters (color, size, price) generated thousands of duplicate URLs that wasted search engine crawl time.",
          "Product color and size variants competing with main category pages for search rankings.",
          "Missing or incomplete Product, Offer, and Return Policy structured data for Google rich snippets.",
          "Informational blog guides failed to link back to high-priority product category pages."
        ],
        keywordStrategy: [
          "Audited search demand to index only high-value filter combinations (e.g., Brand + Category) while preventing indexation of thin filters.",
          "Structured category and subcategory landing pages to match buyer search intent."
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
      subtitle: "Fast News Indexing, Google News & Article Schema",
      projectType: "Self-Initiated Case Study",
      category: "Publishing SEO · Technical SEO",
      tags: ["News SEO", "Google News", "Crawl Efficiency", "NewsArticle Schema", "Core Web Vitals"],
      image: "assets/images/projects/project-news.svg",
      summary: "Exploring how a fast-paced news website can improve crawl efficiency and support faster discovery of time-sensitive articles while keeping low-value tag and archive pages from wasting crawl resources.",
      tools: ["Google Search Console", "Screaming Frog", "Schema.org", "PageSpeed Insights"],
      details: {
        overview: "A publishing SEO case study exploring crawl efficiency, Google News readiness, article schema, internal linking, and technical performance for a fast-moving news website.",
        problemsIdentified: [
          "Delays in getting new articles indexed, missing out on search traffic during early news cycles.",
          "Incomplete NewsArticle schema without author credentials, verified bios, or update timestamps.",
          "Search crawlers wasting resources on low-value tag pages and internal search results.",
          "Visual layout jumps caused by ads loading without reserved space, frustrating mobile readers."
        ],
        keywordStrategy: [
          "Developed headline best practices balancing journalistic clarity with primary search topics.",
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
            { label: "Author Trust", value: "Valid Author Entity Markup Supporting E-E-A-T" },
            { label: "Crawl Efficiency", value: "Preserved Crawl Budget by Excluding Thin Archives" },
            { label: "Visual Stability", value: "Target: CLS < 0.1 for Core Web Vitals 'Good' Range" }
          ]
        }
      }
    }
  ],

  skills: {
    technical: [
      { name: "Technical Audits", level: "Technical SEO", desc: "Finding and fixing crawl roadblocks, broken redirect chains, and server speed issues." },
      { name: "Crawl & Indexing", level: "SEO Implementation", desc: "Using Screaming Frog and log analysis to ensure search bots focus on your most important pages." },
      { name: "Indexation Control", level: "Technical SEO", desc: "Managing robots.txt, canonical tags, and XML sitemaps to prevent duplicate content." },
      { name: "Page Speed (CWV)", level: "Working Knowledge", desc: "Optimizing loading speed, mobile interactivity, and image formats (WebP/SVG) for Core Web Vitals." }
    ],
    content: [
      { name: "Keyword Research", level: "Practical Experience", desc: "Finding the exact phrases customers use and grouping them by purchase intent." },
      { name: "Search Intent", level: "Working Knowledge", desc: "Matching page content to what searchers actually want (learning, comparing, or buying)." },
      { name: "Content Structure", level: "SEO Implementation", desc: "Structuring pages with clear headings, bullet points, and quick answers that humans and AI can skim." },
      { name: "Internal Linking", level: "Technical SEO", desc: "Connecting related articles to product pages to guide visitors and pass search authority." }
    ],
    geo: [
      { name: "Structured Data (Schema)", level: "SEO Implementation", desc: "Writing JSON-LD code for businesses, products, and articles so Google shows rich search snippets." },
      { name: "Entity Optimization", level: "Working Knowledge", desc: "Connecting your brand and author credentials to recognized Knowledge Graphs (Wikidata)." },
      { name: "AI Citation Readiness", level: "Practical Experience", desc: "Formatting facts, definitions, and data tables so tools like ChatGPT and Perplexity cite your site." },
      { name: "AI Search Monitoring", level: "Working Knowledge", desc: "Testing and tracking how often your business appears in AI Overviews and AI search tools." }
    ],
    tools: [
      { name: "Google Search Console", level: "Practical Experience", desc: "Tracking real Google traffic, indexing coverage, and keyword rankings." },
      { name: "Google Analytics 4 (GA4)", level: "Working Knowledge", desc: "Measuring user actions, conversion pathways, and organic traffic channels." },
      { name: "Semrush", level: "Practical Experience", desc: "Analyzing competitor keywords, search volumes, and domain visibility." },
      { name: "Ahrefs", level: "Working Knowledge", desc: "Auditing backlink profiles, content gaps, and search ranking difficulty." },
      { name: "Screaming Frog", level: "Technical SEO", desc: "Simulating search engine crawls to find broken links, missing tags, and redirect loops." },
      { name: "PageSpeed Insights", level: "Practical Experience", desc: "Measuring real-world loading speed and diagnosing performance bottlenecks." }
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
