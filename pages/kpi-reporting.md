---
layout: pillar
title: "KPIs & Reporting"
permalink: /kpi-reporting/
description: "Where RevOps proves value. Forecasting, dashboards, and the metrics that matter."
intro: "Where RevOps proves its value. You can't just be \"the Salesforce person\" — you need to speak the language of the business and show impact in numbers leadership cares about."
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

This pillar is where RevOps earns credibility. Leadership doesn't care about your Salesforce skills — they care about revenue, efficiency, and predictability. KPIs & Reporting is about translating operational data into the metrics that drive business decisions.

The goal isn't just to build dashboards. It's to build dashboards that answer the questions leadership is actually asking: Are we going to hit the number? Where are we losing deals? Which customers are at risk? What's the real pipeline coverage?

Master this pillar, and you become the person who can walk into an executive meeting and confidently explain what's happening, why it's happening, and what to do about it.

## Key Concepts
{: #key-concepts}

These are the metrics and concepts you need to understand deeply — not just define, but calculate, interpret, and act on.

| Concept | What It Means | Why It Matters |
|---------|---------------|----------------|
| **MRR/ARR** | Monthly/Annual Recurring Revenue. Predictable subscription revenue normalized to a time period. | The fundamental health metric for any SaaS business |
| **NRR (Net Revenue Retention)** | Revenue retained from existing customers including expansion, contraction, and churn. | Shows if your customer base is growing or shrinking |
| **GRR (Gross Revenue Retention)** | Revenue retained excluding expansion. Only measures churn and contraction. | Harder metric than NRR — upsells can't hide retention problems |
| **Forecast Accuracy** | How close predictions were to actual results over time. | Measures your ability to predict the business — critical for planning |
| **Pipeline Velocity** | Speed at which opportunities move through the funnel. | Identifies bottlenecks and predicts future revenue |
| **Win Rate** | Percentage of opportunities that close successfully. | Measures sales efficiency and qualification quality |
| **Sales Cycle** | Average time from opportunity creation to close. | Affects forecasting, capacity planning, and cash flow |
| **Pipeline Coverage** | Ratio of pipeline value to quota (e.g., 3x coverage means $3M pipeline for $1M quota). | Early warning system for whether you'll hit the number |
| **Leading vs. Lagging Indicators** | Leading = predictive (pipeline, activity). Lagging = historical (closed revenue, churn). | Leading indicators let you intervene before it's too late |

### Related KPIs

<div class="kpi-box" markdown="1">

#### KPIs This Pillar Impacts

- **Forecast Accuracy** — reporting methodology directly impacts forecast quality

*This pillar enables visibility into all 15 core KPIs. The quality of your reporting determines whether leadership can make informed decisions — but the pillar itself is measured by operational metrics.*

</div>

### Operational Metrics

- **Report/Dashboard Adoption** — are people actually using what you built?
- **Time to Insight** — how quickly can you answer a business question?
- **Data Accuracy** — do the numbers in reports match reality?
{: .rationale-covers}

## Resources
{: #resources}

Start with the fundamentals, then move to visualization and communication. The goal is not just to pull data, but to tell stories with it.

### CRM Reporting Fundamentals

| Resource | Source | Type | Cost | Prerequisites |
|----------|--------|------|------|---------------|
| [Reports & Dashboards for Lightning](https://trailhead.salesforce.com/content/learn/modules/lex_implementation_reports_dashboards) | Salesforce Trailhead | Module | Free | Basic Salesforce navigation |
| [CRM Analytics Basics](https://trailhead.salesforce.com/content/learn/trails/wave_analytics_explorer) | Salesforce Trailhead | Trail | Free | Reports & Dashboards |
| [Data Quality](https://trailhead.salesforce.com/content/learn/modules/data_quality) | Salesforce Trailhead | Module | Free | None |
| [Revenue Operations Certification](https://academy.hubspot.com/courses/revenue-operations) | HubSpot Academy | Certification | Free | None |

### Data Visualization & Storytelling

| Resource | Source | Type | Cost | Prerequisites |
|----------|--------|------|------|---------------|
| [Storytelling with Data YouTube](https://www.youtube.com/c/storytellingwithdata) | Cole Nussbaumer Knaflic | Videos | Free | None |
| [Storytelling with Data Podcast](https://www.storytellingwithdata.com/podcast) | Cole Nussbaumer Knaflic | Podcast | Free | None |
| [Data Visualization Best Practices](https://trailhead.salesforce.com/content/learn/modules/communication-with-charts/apply-visualization-attributes-and-principles) | Salesforce Trailhead | Module | Free | None |

### HubSpot Reporting

| Resource | Source | Type | Cost | Prerequisites |
|----------|--------|------|------|---------------|
| [HubSpot Reporting Certification](https://academy.hubspot.com/courses/hubspot-reporting) | HubSpot Academy | Certification | Free | None |
| [HubSpot Custom Report Builder](https://knowledge.hubspot.com/reports/create-custom-reports) | HubSpot Knowledge Base | Reference | Free | Professional+ |
| [HubSpot Revenue Analytics](https://knowledge.hubspot.com/reports/analyze-revenue) | HubSpot Knowledge Base | Reference | Free | None |

### BI Platforms

CRM-native reporting hits a ceiling. When a company reaches ~50 employees or $5M+ ARR, someone starts asking for Tableau, Looker, or Power BI. BI platform fluency is a Practitioner→Strategist transition skill.

| Platform | Best For | Cost Model |
|----------|---------|-----------|
| **Tableau** | Visual exploration, complex analyses, embedded analytics | Per-user licensing ($35-$70/user/month) |
| **Looker** | Governed metrics, self-service analytics, consistent definitions | Per-user (part of Google Cloud) |
| **Power BI** | Microsoft shops, cost-sensitive orgs, Excel-familiar teams | Free (Desktop) to $10-$20/user/month |

If you're at a company without a BI platform and making the case, Power BI is the easiest sell. If you're joining a team that already has Tableau or Looker, learn that tool. Don't waste time learning all three — learn one deeply.

| Resource | Source | Type | Cost | Prerequisites |
|----------|--------|------|------|---------------|
| [Tableau Free Training](https://www.tableau.com/learn) | Tableau | Self-paced courses | Free | None |
| [Power BI Guided Learning](https://learn.microsoft.com/en-us/power-bi/guided-learning/) | Microsoft | Learning Path | Free | None |
| [Looker Studio (formerly Google Data Studio)](https://skillshop.withgoogle.com/) | Google Skillshop | Course | Free | None |
| [SQL for Data Analysis](https://mode.com/sql-tutorial/) | Mode Analytics | Tutorial | Free | None |
| [Power BI for Tableau Users](https://learn.microsoft.com/en-us/training/modules/power-bi-tableau-intro/) | Microsoft | Course | Free | Tableau familiarity |

### Advanced Analytics

| Resource | Source | Type | Cost | Prerequisites |
|----------|--------|------|------|---------------|
| [Tableau eLearning](https://www.tableau.com/learn/training/elearning) | Tableau | Course | $120 annually | None |
| [Build Analytics Apps with CRM Analytics](https://trailhead.salesforce.com/content/learn/modules/wave_apps_basics/wave_apps_creating_wave_apps) | Salesforce Trailhead | Trail | Free | CRM Analytics Basics |

## Recommended Books
{: #recommended-books}

| Book | Author | Why It's Here | Time |
|------|--------|---------------|------|
| **[Storytelling with Data](https://a.co/d/jlLSLRa)** | Cole Nussbaumer Knaflic | The definitive guide to presenting data to executives. Not about making charts pretty — about making them clear and actionable. Start here. | 8-10 hrs |
| **[Lean Analytics](https://a.co/d/eKfrYyW)** | Alistair Croll & Benjamin Yoskovitz | Teaches you to think about metrics hierarchy and what to measure at each stage. The "One Metric That Matters" concept is essential. | 12-15 hrs |
| **[The Big Book of Dashboards](https://a.co/d/iiNIJLK)** | Steve Wexler, Jeffrey Shaffer & Andy Cotgreave | 28 real-world dashboard examples with analysis of what works and why. Great for pattern recognition and stealing good ideas. | 10-12 hrs |

**If you only read one:** Storytelling with Data. It's immediately applicable to every deck and dashboard you build.

## Checklist
{: #checklist}

You've mastered this pillar when you can confidently do the following:

### Fundamentals

- Define and calculate ARR, MRR, NRR, and GRR without looking them up
- Explain the difference between leading and lagging indicators with examples
- Build a revenue waterfall showing starting ARR → new → expansion → contraction → churn → ending ARR
- Calculate pipeline coverage ratio and explain what "healthy" looks like for your business

### Forecasting

- Build a pipeline-weighted forecast using stage probabilities
- Calculate historical forecast accuracy and identify patterns in misses
- Identify which pipeline is real vs. "happy ears" based on data patterns
- Present forecast risks to leadership with specific accounts and reasons

### Reporting & Dashboards

- Build a sales performance dashboard that answers "are we going to hit the number?"
- Build a customer health dashboard that surfaces at-risk accounts
- Create an executive summary that tells a story, not just displays data
- Design reports that drive action, not just inform
- (HubSpot) Build a sales performance dashboard using HubSpot's custom report builder
- (HubSpot) Create a pipeline waterfall report showing stage movement
- (HubSpot) Set up attribution reporting (requires Marketing Hub Professional+)

### BI Foundations

- Understand the difference between CRM-native reporting and BI platform reporting — when do you need each?
- Connect a BI tool to at least one data source (CRM export, database, or API)
- Build a dashboard in a BI tool that you couldn't build in your CRM alone (multi-source data)
- Learn basic SQL (SELECT, WHERE, JOIN, GROUP BY) — this unlocks every BI platform

### Platform Proficiency (pick your org's tool)

- (Tableau) Complete Tableau Creator free training path
- (Tableau) Build a sales pipeline dashboard with drill-down capability
- (Power BI) Complete Microsoft Power BI Guided Learning
- (Power BI) Build a revenue waterfall using DAX calculations
- (Looker) Understand LookML basics — how the semantic layer defines metrics
- (Looker Studio) Build a marketing performance dashboard with blended data sources

### Advanced

- Perform cohort analysis to identify retention patterns over time
- Calculate and track forecast accuracy by rep, segment, and time period
- Build unit economics model (CAC, LTV, LTV:CAC ratio, payback period)
- Identify leading indicators that predict churn 90+ days in advance
- Build an executive dashboard that combines CRM, billing, and product usage data
- Design a self-service analytics environment where sales managers can explore their own data
- Create a data governance process for dashboard definitions (who owns "revenue"?)

### Communication

- Present a QBR to a customer using data to tell a value story
- Translate metrics into financial impact ("this churn risk represents $X")
- Anticipate every question leadership will ask and have data ready
- Explain complex metrics to non-technical stakeholders without jargon

## Practical Application
{: #practical-application}

### If you have CRM access at work

Start by auditing your existing dashboards. Are they actually being used? Do they answer questions or just display data? Pick one dashboard and redesign it using Storytelling with Data principles — remove clutter, add context, make the "so what" obvious.

Build a forecast accuracy tracker. Compare what was forecasted each month to what actually closed. After 3 months, you'll have data showing which reps over-forecast, which segments are unpredictable, and where the process breaks down.

### If you don't have CRM access

Use Salesforce Developer Edition (free) and import sample data. Build the dashboards described in the checklist using dummy data. The skills transfer — what matters is understanding what to measure and how to present it.

Study public company earnings reports. They're masterclasses in how to present revenue metrics to stakeholders. Notice how they frame growth, how they explain misses, how they set expectations.

### If your company has a BI platform

Build something leadership actually uses. Not a practice dashboard — a real one. Start with the executive dashboard: pipeline summary, bookings vs. target, churn indicators, forecast vs. actual. Make it good enough that someone checks it daily.

### If your company doesn't have a BI platform

Download Power BI Desktop (free) or use Looker Studio (free). Export your CRM data and build a dashboard that combines it with another data source (even a spreadsheet of targets or budget data). The skill is combining data sources and telling a visual story — you can demonstrate that with free tools and export data.

### Portfolio Pieces to Build

- A revenue waterfall showing the components of ARR change
- A pipeline health dashboard with coverage ratios and velocity metrics
- A forecast accuracy analysis showing historical patterns
- An executive summary deck that tells a story with data
- A cohort analysis showing retention trends over time
- Executive revenue dashboard (multi-source) with drill-down capability in a BI tool
- Self-service analytics guide for business users (documentation of what you built and how others can use it)
{: .rationale-covers}
