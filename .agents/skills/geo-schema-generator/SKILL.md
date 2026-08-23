---
name: geo-schema-generator
description: Generates handcrafted, validated Schema.org JSON-LD structured data graphs with entity linking for articles, case studies, local business, and profiles to optimize for Google Rich Results and AI search citations (GEO).
---

# GEO & Schema.org Generator Skill

Use this skill to generate clean, connected Schema.org JSON-LD markup optimized for **Google Rich Snippets** and **Generative Engine Optimization (GEO)** across ChatGPT, Perplexity, and Google AI Overviews.

## Core Schema Templates

### 1. Case Study (`TechArticle` + `BreadcrumbList`)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://rishabhdebnath.com/work/@@SLUG@@/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rishabhdebnath.com/" },
        { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://rishabhdebnath.com/#work" },
        { "@type": "ListItem", "position": 3, "name": "@@PAGE_TITLE@@", "item": "https://rishabhdebnath.com/work/@@SLUG@@/" }
      ]
    },
    {
      "@type": "TechArticle",
      "@id": "https://rishabhdebnath.com/work/@@SLUG@@/#article",
      "headline": "@@PAGE_TITLE@@",
      "description": "@@META_DESCRIPTION@@",
      "inLanguage": "en",
      "author": {
        "@type": "Person",
        "@id": "https://rishabhdebnath.com/#person",
        "name": "Rishabh Debnath",
        "url": "https://rishabhdebnath.com/"
      },
      "publisher": {
        "@type": "Person",
        "@id": "https://rishabhdebnath.com/#person"
      }
    }
  ]
}
</script>
```

### 2. Blog Article (`BlogPosting` + `FAQPage` + `BreadcrumbList`)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://rishabhdebnath.com/blog/@@SLUG@@/#article",
      "headline": "@@TITLE@@",
      "description": "@@META_DESCRIPTION@@",
      "datePublished": "2026-MM-DD",
      "dateModified": "2026-MM-DD",
      "inLanguage": "en",
      "author": {
        "@type": "Person",
        "@id": "https://rishabhdebnath.com/#person",
        "name": "Rishabh Debnath"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://rishabhdebnath.com/blog/@@SLUG@@/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "@@QUESTION_1@@",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "@@ANSWER_1@@"
          }
        }
      ]
    }
  ]
}
</script>
```

### 3. Local Business Demonstration (`LocalBusiness` / `ExerciseGym`)
```json
{
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "name": "Olympia Fitness Studio",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "@@STREET@@",
    "addressLocality": "@@CITY@@",
    "addressRegion": "@@REGION@@",
    "postalCode": "@@POSTAL_CODE@@",
    "addressCountry": "@@COUNTRY@@"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "@@LAT@@",
    "longitude": "@@LNG@@"
  }
}
```

## Best Practices for GEO Citability
1. **Unambiguous `@id` Linking**: Always anchor `@id` strings to established entities (`#person`, `#website`, `#article`).
2. **Direct Answer Text**: Keep `acceptedAnswer.text` concise (2-4 sentences) with factual density for conversational AI retrieval.
