---
layout: pillar
title: "Data"
permalink: /data/
description: "The foundation everything runs on. Data health, governance, enrichment, and infrastructure."
intro: "Revenue Operations runs on data. If your data is garbage, your forecasts, reports, and processes will be too. This pillar is about building the foundation everything else depends on."
toc:
  - id: rationale
    label: Rationale
  - id: key-concepts
    label: Key Concepts
  - id: resources
    label: Resources
  - id: recommended-books
    label: Recommended Books
  - id: checklist
    label: Checklist
  - id: practical-application
    label: Practical Application
---

## Rationale
{: #rationale}

Data is the unsexy pillar that makes everything else possible. You can't forecast accurately with duplicate accounts. You can't segment customers with missing fields. You can't measure pipeline velocity if stage dates aren't captured.

Most RevOps problems that look like process problems or tool problems are actually data problems. The territory is "unfair" because account assignments are based on bad firmographic data. The forecast is wrong because reps aren't updating opportunity stages. The churn prediction model fails because customer health data was never captured consistently.

**This pillar covers:**
{: .rationale-covers}

- **Data Health** — Accuracy, completeness, consistency, deduplication
- **Data Infrastructure** — How data flows between systems, where it lives
- **Data Administration** — Governance, access controls, ownership
- **Data Stewardship** — Ongoing maintenance, quality monitoring, standards
{: .rationale-covers}

Master this, and you become the person who can actually trust the numbers everyone else is guessing at.

## Key Concepts
{: #key-concepts}

These are the foundational concepts you need to understand to manage data effectively across your revenue systems.

| Concept | What It Means | Why It Matters |
|---------|---------------|----------------|
| **Data Health** | Accuracy, completeness, consistency of records | Bad data = bad decisions. Period. |
| **Deduplication** | Identifying and merging duplicate records | Duplicates inflate metrics, confuse reps, waste outreach |
| **Data Enrichment** | Adding missing firmographic/technographic data | Enables segmentation, targeting, lead scoring |
| **Data Governance** | Policies for who can edit what, and how | Prevents data decay, maintains quality over time |
| **Data Lineage** | Understanding where data originates and how it flows | Critical for debugging when numbers don't match |
| **Master Data Management** | Single source of truth for key entities (accounts, contacts) | Eliminates conflicting data across systems |

### Related KPIs

<div class="kpi-box" markdown="1">

#### KPIs This Pillar Impacts

- **Lead Score, Opp Score, Account Score** — only as good as the underlying data
- **Forecast Accuracy** — garbage in, garbage out
- **Pipeline Velocity** — bad data creates friction that slows deals
- **Win Rate** — you can't optimize what you can't accurately measure

</div>

### Operational Metrics

- **Data Completeness Rate** — % of critical fields populated
- **Duplicate Rate** — % of records with duplicates
- **Enrichment Coverage** — % of records with firmographic/technographic data
{: .rationale-covers}

## Resources
{: #resources}

Start with CRM fundamentals, then move to data quality and enrichment concepts.

### Foundational

| Resource | Source | Type | Cost | Prerequisites |
|----------|--------|------|------|---------------|
| [Data Modeling](https://trailhead.salesforce.com/content/learn/modules/data_modeling) | Salesforce Trailhead | Module | Free | None |
| [Data Quality](https://trailhead.salesforce.com/content/learn/modules/data_quality) | Salesforce Trailhead | Module | Free | Basic Salesforce |
| [Data Management](https://trailhead.salesforce.com/content/learn/modules/lex_implementation_data_management) | Salesforce Trailhead | Module | Free | Basic Salesforce |
| [Duplicate Management](https://trailhead.salesforce.com/content/learn/modules/sales_admin_duplicate_management) | Salesforce Trailhead | Module | Free | Basic Salesforce |

### Data Quality & Management (HubSpot)

| Resource | Source | Type | Cost | Prerequisites |
|----------|--------|------|------|---------------|
| [HubSpot Data Quality Tools](https://academy.hubspot.com/courses/data-quality) | HubSpot Academy | Course | Free | None |
| [HubSpot Data Management](https://knowledge.hubspot.com/properties/manage-your-properties) | HubSpot Knowledge Base | Reference | Free | None |
| [Import & Clean Data in HubSpot](https://academy.hubspot.com/courses/importing-data) | HubSpot Academy | Course | Free | None |

### Data Enrichment & Tools

| Resource | Source | Type | Cost | Prerequisites |
|----------|--------|------|------|---------------|
| [Clay University](https://www.clay.com/university) | Clay | Course | Free | None |
| [ZoomInfo University](https://university.zoominfo.com/) | ZoomInfo | Resources | Free | None |

### Advanced / Architecture

| Resource | Source | Type | Cost | Prerequisites |
|----------|--------|------|------|---------------|
| [Data Integration Specialist Superbadge Prep](https://trailhead.salesforce.com/users/rfrazer/trailmixes/prep-for-data-integration-specialist-superbadge) | Salesforce Trailhead | Trailmix | Free | Intermediate Salesforce |
| [Integration Patterns and Practices](https://trailhead.salesforce.com/content/learn/trails/explore-integration-patterns-and-practices) | Salesforce Trailhead | Trail | Free | Data Modeling |
| [DAMA Data Management Body of Knowledge (DAMA-DMBOK)](https://www.dama.org/cpages/body-of-knowledge) | DAMA International | Framework | $79 | None |

### Videos & Talks

| Resource | Source | Length | Cost |
|----------|--------|--------|------|
| [The Data Warehouse Toolkit Explained](https://www.youtube.com/watch?v=LiUGZuEUTQY&list=PLAiQxhsZqUI2Q3EGUxTsanqCxvAqunBnR) | Kimball Group | 45 min | Free |

## Recommended Books
{: #recommended-books}

| Book | Author | Why It's Here | Time |
|------|--------|---------------|------|
| **[Lean Analytics](https://leananalyticsbook.com/)** | Alistair Croll & Benjamin Yoskovitz | Chapter on "What Data to Track" is foundational for understanding metrics hierarchy. Teaches you to think about data strategically. | 12-15 hrs |
| **[Data Science for Business](https://www.amazon.com/Data-Science-Business-Data-Analytic-Thinking/dp/1449361323)** | Foster Provost & Tom Fawcett | Builds the mental model for how data becomes insight. Not hands-on technical, but conceptually essential. | 15-20 hrs |
| **[The Data Warehouse Toolkit](https://www.amazon.com/Data-Warehouse-Toolkit-Definitive-Dimensional/dp/1118530802)** | Ralph Kimball | If you need to understand how data infrastructure actually works (dimensional modeling, ETL concepts). More technical — skip if you're not building systems. | 20+ hrs (reference) |

For practical CRM data work, Trailhead modules are more directly applicable than books. The books above are for building deeper conceptual understanding.

## Checklist
{: #checklist}

You've mastered this pillar when you can confidently do the following:

### Data Health Fundamentals

- Audit a CRM for data quality issues (duplicates, missing fields, inconsistent values)
- Calculate a data completeness score for key objects (Accounts, Contacts, Opportunities)
- Identify the top 5 data quality issues impacting reporting accuracy
- Build a duplicate detection and merge process
- (HubSpot) Audit property hygiene — identify unused, duplicate, and inconsistently-used properties
- (HubSpot) Set up data quality automation using Operations Hub (formatting, deduplication)

### Data Infrastructure

- Map how data flows between your core systems (CRM, MAP, CS platform, etc.)
- Identify where data gets created, modified, and potentially corrupted
- Explain the difference between a system of record vs. system of engagement
- Understand basic ETL concepts (Extract, Transform, Load)

### Data Administration & Governance

- Define field-level ownership (who is responsible for keeping each field accurate?)
- Create validation rules that prevent bad data entry at the source
- Build a data dictionary documenting what each field means and how it should be used
- Establish a regular data hygiene cadence (weekly/monthly cleanup routines)

### Data Enrichment

- Evaluate data enrichment vendors (ZoomInfo, Clearbit, Clay, Apollo, etc.)
- Define what firmographic/technographic data would improve segmentation
- Build an enrichment workflow that fills gaps without overwriting good data

### Advanced

- Design a lead scoring model based on enriched data attributes
- Build account segmentation using firmographic data (industry, size, tech stack)
- Create data quality dashboards that surface issues before they impact reports

### Real-World Application

- Reduce duplicate account rate below 5%
- Achieve 90%+ completeness on critical fields (industry, employee count, etc.)
- Build one segmentation or targeting analysis that drove a business decision

## Practical Application
{: #practical-application}

### If you have CRM access at work

Export your account data and analyze it in Excel: How many duplicates? What percentage have industry filled in? Employee count? Pick one critical field that's less than 80% complete. Build a project to fill it (enrichment tool, rep data entry campaign, or manual research).

Create a "Data Quality" dashboard that leadership can see. Nothing drives cleanup like visibility.

### If you don't have CRM access

Use Salesforce Developer Edition (free) and import sample data to practice. Download a messy dataset from Kaggle and clean it — document your process. Sign up for Clay's free tier and experiment with enrichment workflows.

### Portfolio Pieces to Build

- A data quality audit with findings and recommendations
- A before/after analysis showing impact of data cleanup
- A data dictionary for a CRM instance
- A segmentation analysis using enriched firmographic data
{: .rationale-covers}
