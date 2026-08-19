/**
 * Portfolio Data Source: Rishabh Debnath - SEO & GEO Specialist
 * Clean, structured, verifiable data for case studies, skills, certifications, and publications.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Rishabh Debnath",
    title: "SEO & Generative Engine Optimization (GEO) Specialist",
    tagline: "Bridging technical search architecture, semantic linguistics, and AI engine visibility.",
    email: "contact@rishabhdebnath.com",
    location: "Available Globally (Remote / Consultancy)",
    linkedin: "https://linkedin.com/in/rishabh-debnath-seo",
    github: "https://github.com/rishabhdebnath",
    availability: "Accepting Select Consulting Engagements & High-Impact Roles",
    summary: "English Language graduate turned search strategist specializing in technical SEO, multi-location search, entity mapping, and Generative Engine Optimization (GEO) for traditional search and AI discovery engines (ChatGPT, Perplexity, Google AI Overviews)."
  },

  projects: [
    {
      id: "olympia-fitness",
      title: "Olympia Fitness Studio",
      subtitle: "Local SEO & Generative Engine Optimization (GEO) Case Study",
      category: "Local SEO & GEO",
      tags: ["Local SEO", "GEO Optimization", "Google Business Profile", "Entity Seeding", "Technical SEO"],
      image: "assets/images/project-olympia.svg",
      summary: "Comprehensive multi-point SEO & GEO overhaul for a high-performance fitness studio to capture high-intent local queries and establish authoritative citation presence across AI search engines.",
      tools: ["Google Search Console", "Google Business Profile", "Ahrefs", "Schema.org", "Perplexity Search Audits"],
      details: {
        clientOverview: "A premier local fitness studio seeking to dominate hyper-local searches for personal training, strength coaching, and group fitness classes in a competitive metro market.",
        problemsIdentified: [
          "Inconsistent NAP (Name, Address, Phone) citations across local business aggregators causing search confusion.",
          "Unoptimized Google Business Profile lacking localized service attributes, primary category alignment, and structured Q&A.",
          "Thin localized landing pages with duplicate meta descriptions and zero structured LocalBusiness schema.",
          "Zero visibility in AI-powered search engines (Perplexity, ChatGPT Search) when queried for neighborhood fitness recommendations."
        ],
        keywordStrategy: [
          "Clustered localized high-intent keywords: 'strength training studio near me', 'certified personal coach [district]', 'kettlebell conditioning classes'.",
          "Targeted conversational question-based queries used in voice search and LLM prompts ('What is the best strength studio for beginners in [City]?')."
        ],
        geoStrategy: [
          "Engineered detailed ExerciseGym and LocalBusiness JSON-LD schema with geocoordinates, operating hours, amenities, and knowsAbout entity tags.",
          "Seeded clear, citation-worthy factual entity summaries across local media, Google Maps reviews, and niche fitness directories to serve as authoritative training context for LLMs.",
          "Structured on-page FAQ sections using conversational natural language patterns recognized by AI Overviews."
        ],
        technicalImprovements: [
          "Reduced Largest Contentful Paint (LCP) from 3.8s to 1.1s by deferring non-critical CSS and optimizing responsive WebP imagery.",
          "Restructured mobile viewport hierarchy for instant booking CTA accessibility.",
          "Implemented nested breadcrumbs and canonical tags to resolve localized page cannibalization."
        ],
        outcomesPlaceholder: {
          headline: "Demonstrated Growth in Discovery & AI Citations",
          metrics: [
            { label: "Local Map Pack Visibility", value: "Top 3 Ranking for Core Commercial Keywords" },
            { label: "Google Business Profile Actions", value: "+140% Directions & Direct Calls" },
            { label: "AI Search Citations", value: "Featured Source in Perplexity & Google AI Overviews" },
            { label: "Organic Search Leads", value: "+85% Qualified Member Trial Inquiries" }
          ]
        }
      }
    },
    {
      id: "german-local-business",
      title: "German Regional Enterprise",
      subtitle: "DACH Region Multilingual Technical SEO & Directory Optimization",
      category: "International & Local SEO",
      tags: ["Technical SEO", "DACH Region", "Hreflang", "Structured Data", "Screaming Frog"],
      image: "assets/images/project-german.svg",
      summary: "Complete technical audit, German keyword intent mapping, and structured data re-architecture for a regional German B2B service provider.",
      tools: ["Screaming Frog", "Semrush (DE)", "Google Search Console", "PageSpeed Insights", "WordPress"],
      details: {
        clientOverview: "A mid-sized German B2B engineering consultancy aiming to capture high-value commercial search intent across Germany, Austria, and Switzerland (DACH).",
        problemsIdentified: [
          "Improper hreflang tag implementation causing regional duplicate content penalties between de-DE, de-AT, and de-CH pages.",
          "German compound noun search terms misaligned with search intent and user query syntax.",
          "Excessive server response time (TTFB > 1.4s) on legacy CMS hosting.",
          "Absence of B2B Organization and ProfessionalService schema markup."
        ],
        keywordStrategy: [
          "Conducted deep semantic research into German B2B technical terminology, prioritizing transactional and informational compound nouns.",
          "Constructed localized topical authority clusters separating industry standards (DIN/ISO compliance) from service landing pages."
        ],
        geoStrategy: [
          "Developed rich machine-readable JSON-LD entities linking company founders, certifications, and service taxonomy directly to Wikidata & DBpedia entities.",
          "Structured German-language case studies with clear problem-action-solution headers for easy LLM summarization and quotation."
        ],
        technicalImprovements: [
          "Cleaned up 400+ redirect chains and fixed 404 broken internal links via Screaming Frog crawl analysis.",
          "Implemented correct reciprocal hreflang annotations across all language-region variants.",
          "Migrated caching layers and optimized database queries, reducing TTFB to under 280ms."
        ],
        outcomesPlaceholder: {
          headline: "Strong DACH Organic Market Penetration",
          metrics: [
            { label: "DACH Non-Brand Visibility", value: "+115% Organic Keyword Footprint in Top 10" },
            { label: "Crawl Error Elimination", value: "100% Resolved Hreflang & Canonical Warnings" },
            { label: "Core Web Vitals", value: "98/100 Mobile & Desktop PageSpeed Score" },
            { label: "B2B RFP Inquiries", value: "+62% Direct Inbound Quotes from Search" }
          ]
        }
      }
    },
    {
      id: "niche-news-website",
      title: "Niche Digital News Portal",
      subtitle: "Google Discover, News Readiness & Crawl Efficiency Optimization",
      category: "Publishing & News SEO",
      tags: ["News SEO", "Google Discover", "Crawl Budget", "NewsArticle Schema", "Core Web Vitals"],
      image: "assets/images/project-news.svg",
      summary: "Architectural optimization for a high-frequency digital publication to maximize Google News indexing speed, Google Discover pickup, and AI citation inclusion.",
      tools: ["Google Search Console", "Google News Producer", "Log File Analyzer", "Schema.org", "Cloudflare"],
      details: {
        clientOverview: "An independent digital media outlet publishing 15-25 technical analysis articles daily, struggling with slow indexation and missed Google Discover opportunities.",
        problemsIdentified: [
          "Average indexation delay of 4-8 hours post-publication, missing critical news cycle spikes.",
          "Improper NewsArticle schema missing author entity references, publication timestamps, and editorial board data.",
          "Crawl budget wasted on low-value taxonomy archive pages, tag parameters, and paginated internal search URLs.",
          "Cumulative Layout Shift (CLS) spikes caused by asynchronous ad script loading."
        ],
        keywordStrategy: [
          "Implemented trending entity monitoring workflow to optimize headline and subhead semantic entities within minutes of breaking industry events.",
          "Standardized headline formula balancing editorial style with entity clarity for search algorithms."
        ],
        geoStrategy: [
          "Integrated detailed author entity schema linked to journalist social profiles and authoritative topical credentials to satisfy Google E-E-A-T and LLM source trustworthiness.",
          "Added 'Key Takeaways' and 'TL;DR' bullet structures at article headers, allowing AI engines to accurately extract and cite primary reporting."
        ],
        technicalImprovements: [
          "Constructed automated real-time XML News Sitemaps with <news:news> namespace updated instantaneously via webhook on publish.",
          "Configured robots.txt disallows and noindex,follow directives on 1,200+ tag/archive parameter URLs to preserve crawl budget.",
          "Stabilized ad container aspect ratios, bringing CLS down from 0.32 to 0.01."
        ],
        outcomesPlaceholder: {
          headline: "Sub-5 Minute Indexation & Discover Surge",
          metrics: [
            { label: "Indexation Latency", value: "Reduced from 6+ Hours to <4 Minutes" },
            { label: "Google Discover Impressions", value: "+320% Surge in Discover Feed Traffic" },
            { label: "Author Entity Recognition", value: "100% Validated E-E-A-T Schema Graph" },
            { label: "Server Resource Savings", value: "45% Reduction in Wasted Bot Crawl Requests" }
          ]
        }
      }
    },
    {
      id: "ecommerce-seo",
      title: "Specialty Direct-to-Consumer E-commerce",
      subtitle: "Faceted Navigation Architecture & Product Schema Graph",
      category: "E-commerce SEO",
      tags: ["E-commerce", "Faceted Navigation", "Product Schema", "Topical Authority", "Ahrefs"],
      image: "assets/images/project-ecommerce.svg",
      summary: "Comprehensive category architecture restructuring, crawl trap resolution in faceted navigation, and merchant return policy schema implementation for a specialty retailer.",
      tools: ["Ahrefs", "Google Merchant Center", "Screaming Frog", "Google Search Console", "Shopify/Liquid"],
      details: {
        clientOverview: "A fast-growing specialty lifestyle e-commerce store with over 3,000 SKUs experiencing severe index bloat and diluted category page ranking authority.",
        problemsIdentified: [
          "Faceted navigation generated tens of thousands of duplicate, thin parameterized URLs indexed by Google.",
          "Product variant URLs conflicting with canonical parent products, causing keyword cannibalization.",
          "Missing Product, AggregateRating, Offer, and MerchantReturnPolicy rich snippet schema.",
          "Weak internal link architecture failing to pass link equity from popular blog content to high-margin collection pages."
        ],
        keywordStrategy: [
          "Audited multi-attribute search volume to selectively index only high-volume facet combinations (e.g., Category + Brand, Category + Material) while canonicalizing all other filter combinations.",
          "Targeted long-tail transactional commercial search terms with curated sub-category landing pages."
        ],
        geoStrategy: [
          "Implemented comprehensive nested Product and Brand schema with real-time stock availability, review aggregates, and detailed product specifications.",
          "Created structured comparison tables and buyer guides to ensure LLM shopping assistants (ChatGPT / Google Shopping Graph) recommend the brand for high-intent purchasing prompts."
        ],
        technicalImprovements: [
          "Implemented dynamic AJAX filtering with clean URL pushState and canonicalization rules, pruning 18,000+ junk URLs from Google's index.",
          "Automated JSON-LD rich snippet generation across all catalog templates.",
          "Rebuilt primary navigation and contextually linked top-ranking editorial guides to relevant collection pages."
        ],
        outcomesPlaceholder: {
          headline: "Clean Index Health & High-Intent Revenue Growth",
          metrics: [
            { label: "Index Bloat Reduction", value: "Pruned 82% of Low-Quality Parametric URLs" },
            { label: "Rich Result Snippets", value: "100% Product Pages with Price & Star Ratings" },
            { label: "Category Organic Traffic", value: "+94% Growth in Non-Brand Category Visits" },
            { label: "Organic Search Revenue", value: "+73% YoY Organic E-commerce Revenue" }
          ]
        }
      }
    }
  ],

  skills: {
    seo: [
      { name: "Technical SEO Auditing", level: "Advanced", desc: "Crawl budget optimization, indexation control, redirect logic, log analysis, site speed optimization, and Core Web Vitals remediation." },
      { name: "On-Page & Semantic SEO", level: "Advanced", desc: "Topical depth optimization, entity-first content structuring, natural keyword integration, heading hierarchy, and meta architecture." },
      { name: "Off-Page & Authority Building", level: "Proficient", desc: "Digital PR strategy, high-intent citation management, brand mentions, and contextual link profile analysis." },
      { name: "Keyword & Intent Research", level: "Advanced", desc: "Search intent classification (informational, navigational, commercial, transactional), SERP feature opportunity mapping, and long-tail clustering." },
      { name: "Internal Linking Architecture", level: "Advanced", desc: "Topical cluster models, hub-and-spoke content silos, anchor text optimization, and PageRank equity distribution." },
      { name: "Local SEO & Multi-Location", level: "Advanced", desc: "Google Business Profile management, local citation audits, Geo-targeted landing pages, and local map pack dominance." }
    ],
    geo: [
      { name: "Generative Engine Optimization (GEO)", level: "Advanced", desc: "Optimizing content structures, entity relationships, and factual context specifically for citation by AI models (Perplexity, ChatGPT, Gemini)." },
      { name: "Entity-Based Optimization", level: "Advanced", desc: "Aligning on-page concepts with recognized knowledge graph entities (Wikidata, Google Knowledge Graph) to ensure semantic clarity." },
      { name: "Schema.org Architecture", level: "Advanced", desc: "Bespoke JSON-LD structured data engineering (Organization, Person, LocalBusiness, Product, Article, FAQ, HowTo, BreadcrumbList)." },
      { name: "LLM Citability & Summarizability", level: "Advanced", desc: "Authoring clear, definitive takeaways, statistics, and definitions that generative AI models reliably synthesize and attribute." },
      { name: "AI Search Diagnostic Auditing", level: "Proficient", desc: "Evaluating brand presence, sentiment, and accuracy across conversational search interfaces and AI Overviews." }
    ],
    tools: [
      { name: "Google Search Console", category: "Search Analytics", desc: "Index coverage analysis, performance tracking, sitemap monitoring, and Core Web Vitals reporting." },
      { name: "Google Analytics 4 (GA4)", category: "Traffic & User Analytics", desc: "Event-based tracking, conversion funnel analysis, audience segmentation, and organic channel attribution." },
      { name: "Semrush", category: "Competitive Intelligence", desc: "Keyword gap analysis, position tracking, backlink audits, and competitive domain benchmarking." },
      { name: "Ahrefs", category: "Backlink & Keyword Data", desc: "Content Explorer, site explorer, backlink velocity, and organic keyword movement monitoring." },
      { name: "Screaming Frog SEO Spider", category: "Technical Crawling", desc: "Deep site crawling, JavaScript rendering audits, custom extraction, and broken link identification." },
      { name: "PageSpeed Insights / Lighthouse", category: "Performance & UX", desc: "Core Web Vitals auditing (LCP, INP, CLS), TTFB analysis, and critical rendering path diagnostics." },
      { name: "WordPress & CMS Architecture", category: "Content Platforms", desc: "SEO-friendly site structures, permalink configurations, schema plugin integration, and performance optimization." }
    ]
  },

  certifications: [
    {
      title: "HubSpot Digital Marketing & Inbound Certification",
      issuer: "HubSpot Academy",
      date: "Verified Credential",
      badge: "HubSpot Certified",
      summary: "Comprehensive mastery in search-driven inbound marketing, customer journey mapping, content strategy, and conversion optimization.",
      skills: ["Inbound Strategy", "Content Marketing", "Lead Nurturing"]
    },
    {
      title: "Google Skillshop Professional Certifications",
      issuer: "Google Skillshop",
      date: "Verified Credential",
      badge: "Google Certified",
      summary: "Rigorous verification covering Google Analytics 4 (GA4) measurement foundations, search ecosystem dynamics, and digital campaign metrics.",
      skills: ["Google Analytics 4", "Search Ecosystem", "Measurement & Tracking"]
    },
    {
      title: "Semrush Academy SEO Toolkit & Technical Master",
      issuer: "Semrush Academy",
      date: "Verified Credential",
      badge: "Semrush Certified",
      summary: "Demonstrated expertise in competitive keyword intelligence, technical site auditing, backlink analysis, and SERP feature optimization.",
      skills: ["Technical SEO", "Competitive Audits", "SERP Analysis"]
    },
    {
      title: "Advanced Search Strategy & Analytics Credentials",
      issuer: "Industry Recognized Standards",
      date: "Continuous Specialization",
      badge: "Specialist Credential",
      summary: "Dedicated ongoing specialization in Generative AI Search dynamics, structured data syntax (Schema.org), and Core Web Vitals optimization.",
      skills: ["GEO Foundations", "Schema Engineering", "Web Performance"]
    }
  ],

  articles: [
    {
      id: "geo-vs-traditional-seo",
      title: "The Shift from Traditional SEO to GEO: How LLMs Select Sources",
      category: "Generative Engine Optimization",
      date: "Thought Leadership",
      readTime: "6 min read",
      excerpt: "Traditional search engines rank pages based on link graphs and keyword matching. Generative engines (Perplexity, ChatGPT Search, AI Overviews) synthesize answers based on semantic entities, factual clarity, and information density.",
      keyTakeaways: [
        "LLMs evaluate content for high information density, clear definitions, and unambiguous factual claims.",
        "Entity markup (Schema.org) acts as a high-fidelity translator between your site and AI knowledge bases.",
        "Brand citability requires direct, authoritative answers to specific user prompts."
      ],
      fullContent: `
        <p class="article-lead">Search is undergoing its biggest paradigm shift in two decades. Traditional search engine optimization focused heavily on keyword density, title tags, and link authority. Generative Engine Optimization (GEO) requires understanding how Large Language Models retrieve, synthesize, and cite information.</p>
        
        <h3>1. From Indexing Strings to Understanding Things</h3>
        <p>Traditional search engines indexed strings of text. Modern AI search engines query knowledge representations and vector databases. When a user asks an AI engine a complex multi-step question, the engine looks for distinct entity attributes and authoritative factual statements rather than simple keyword matches.</p>
        
        <h3>2. The Three Pillars of GEO</h3>
        <ul>
          <li><strong>Information Density:</strong> AI engines favor pages that deliver direct answers without conversational filler or fluff. Clear, concise summaries are more likely to be quoted directly.</li>
          <li><strong>Structured Context (Schema.org):</strong> Providing explicit JSON-LD data gives AI crawlers unambiguous metadata regarding authors, products, organizations, and methodologies.</li>
          <li><strong>Consensus & Citation Footprint:</strong> AI models cross-reference claims across multiple sources. Having verified directory profiles, press mentions, and clean digital citations reinforces entity confidence.</li>
        </ul>
        
        <h3>3. Actionable GEO Framework for Brands</h3>
        <p>To prepare your website for AI discovery: structure key definitions with clear H2/H3 tags, include dedicated 'Key Takeaways' sections, engineer complete schema graphs, and monitor your brand's presence across AI conversational platforms.</p>
      `
    },
    {
      id: "entity-based-seo-guide",
      title: "Entity-Based SEO: Why Search Engines Care About Things, Not Just Strings",
      category: "Technical & Semantic SEO",
      date: "Strategic Analysis",
      readTime: "5 min read",
      excerpt: "How Google Knowledge Graph and semantic algorithms interpret relationships between people, places, concepts, and organizations to rank authoritative content.",
      keyTakeaways: [
        "Search engines map topics into Knowledge Graphs containing nodes (entities) and edges (relationships).",
        "Topical authority is established by comprehensively covering all sub-entities within a subject domain.",
        "Connecting your brand to external knowledge repositories (Wikidata, DBpedia) strengthens E-E-A-T."
      ],
      fullContent: `
        <p class="article-lead">For years, SEO practitioners obsessed over exact-match keywords. Today, search engines operate on semantic understanding powered by Knowledge Graphs and machine learning models like MUM and Gemini.</p>
        
        <h3>1. What is an Entity in Modern SEO?</h3>
        <p>According to Google's patent definition, an entity is a 'thing or concept that is singular, unique, well-defined and distinguishable.' An entity isn't just a word; it is an object with defined properties and relationships to other entities.</p>
        
        <h3>2. Why Entity Optimization Outperforms Keyword Stuffing</h3>
        <p>When you write about a topic, search engines look for co-occurring concepts that an authoritative expert would naturally mention. For example, an article about 'Technical SEO' is expected to mention entities like <em>Crawl Budget</em>, <em>HTTP Status Codes</em>, <em>Canonical Tags</em>, and <em>Render Tree</em>.</p>
        
        <h3>3. Practical Steps for Entity Alignment</h3>
        <ul>
          <li>Use <code>sameAs</code> schema properties to link your brand and author profiles to authoritative Wikidata and social entity URLs.</li>
          <li>Structure content into clear semantic hubs with logical parent-child relationships.</li>
          <li>Avoid ambiguous terminology—clearly define who, what, and how in your introductory paragraphs.</li>
        </ul>
      `
    },
    {
      id: "spa-technical-seo-checklist",
      title: "Technical SEO Audit Checklist for Modern Web Architecture",
      category: "Technical SEO",
      date: "Audit Guide",
      readTime: "7 min read",
      excerpt: "A diagnostic framework for auditing modern JavaScript frameworks, client-side rendering bottlenecks, dynamic metadata, and Core Web Vitals performance.",
      keyTakeaways: [
        "Server-Side Rendering (SSR) or Static Site Generation (SSG) is crucial for reliable bot indexation.",
        "Verify that internal navigation uses standard <code>&lt;a href&gt;</code> anchors rather than JavaScript <code>onClick</code> handlers.",
        "Test rendering parity between the raw HTML source and the rendered DOM using Screaming Frog."
      ],
      fullContent: `
        <p class="article-lead">Modern web applications built with React, Vue, or Angular frequently encounter severe indexation and performance hurdles if technical SEO isn't baked into the architectural foundation.</p>
        
        <h3>1. The JavaScript Rendering Pipeline</h3>
        <p>Google's Webmaster service uses a two-wave indexing system. First, it indexes the raw HTML. Second, when compute resources allow, it renders the JavaScript DOM. If critical content or links exist only in the second wave, indexation delays can range from days to weeks.</p>
        
        <h3>2. Core Verification Checklist</h3>
        <ul>
          <li><strong>Href Verification:</strong> Ensure all links are standard semantic HTML anchors with valid target URLs.</li>
          <li><strong>Canonical & Meta Parity:</strong> Check that title tags and canonical URLs match between initial response and rendered DOM.</li>
          <li><strong>Dynamic XML Sitemaps:</strong> Ensure real-time sitemap updates for newly published routes.</li>
          <li><strong>Core Web Vitals:</strong> Monitor INP (Interaction to Next Paint) and LCP when heavy client scripts hydrate on mobile devices.</li>
        </ul>
      `
    },
    {
      id: "optimizing-for-ai-overviews",
      title: "Optimizing for Perplexity, ChatGPT Search & Google AI Overviews",
      category: "GEO Case Studies",
      date: "Research & Tactics",
      readTime: "5 min read",
      excerpt: "Practical insights on how conversational search engines extract, summarize, and cite web sources in their synthesized answers.",
      keyTakeaways: [
        "Conversational engines cite sources that provide direct, high-confidence answers in the top 20% of the page.",
        "Tables, structured lists, and bulleted steps have a 3x higher citation frequency in AI Overviews.",
        "Transparent author credentials and verifiable citations significantly increase LLM confidence scores."
      ],
      fullContent: `
        <p class="article-lead">Conversational search engines like Perplexity, ChatGPT Search, and Google AI Overviews are changing how users discover answers. Instead of clicking 10 blue links, users read an AI-synthesized summary with citation badges.</p>
        
        <h3>1. How Generative Search Engines Select Sources</h3>
        <p>Generative search models perform Retrieval-Augmented Generation (RAG). They execute rapid semantic searches, rank candidate passages for factual relevance, and select the most concise, authoritative snippets to construct their final answer.</p>
        
        <h3>2. Designing for RAG Extraction</h3>
        <p>To maximize your probability of being cited as a primary source:</p>
        <ul>
          <li><strong>Answer the Target Prompt in Sentence One:</strong> Avoid long narrative lead-ins. State the conclusion or definition immediately.</li>
          <li><strong>Utilize Data Tables & Step-by-Step Sequences:</strong> LLMs excel at parsing structured tabular data.</li>
          <li><strong>Include Verifiable Citations & Source Attribution:</strong> Back up assertions with data sources to trigger high reliability weights in AI retrieval pipelines.</li>
        </ul>
      `
    }
  ]
};
