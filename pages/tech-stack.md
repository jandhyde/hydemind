---
layout: pillar
title: "Tech Stack"
permalink: /tech-stack/
description: "The tools that power revenue teams. Evaluation, implementation, integration, and adoption."
intro: "RevOps lives in the tools. Your CRM, marketing automation, sales engagement, customer success platform — these aren't just software. They're the infrastructure that makes everything else possible (or impossible, if configured poorly)."
toc:
  - id: rationale
    label: Rationale
  - id: key-concepts
    label: Key Concepts
  - id: the-revops-tool-landscape
    label: The RevOps Tool Landscape
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

The tech stack is where RevOps theory meets reality. You can design the perfect process on paper, but if the CRM doesn't support it, if the systems don't talk to each other, if the data flows break — none of it matters.

This pillar isn't about becoming an engineer or a full-time admin. It's about understanding the tools deeply enough to configure them correctly, integrate them effectively, and know when you need technical help vs. when you can solve it yourself.

**This pillar covers:**
{: .rationale-covers}

- **CRM Administration** — Salesforce, HubSpot, or your system of record
- **System Integration** — How data flows between tools
- **Automation** — Workflows, triggers, and process builders
- **Tool Evaluation** — Selecting the right tools for your needs
- **Implementation** — Rolling out new tools without breaking everything
{: .rationale-covers}

The best RevOps people aren't just "Salesforce admins" — they understand how the entire stack works together to support the revenue engine.

## Key Concepts
{: #key-concepts}

These are the technical and architectural concepts you need to understand to manage a modern revenue tech stack.

| Concept | What It Means | Why It Matters |
|---------|---------------|----------------|
| **System of Record** | The authoritative source for a piece of data (e.g., Salesforce is system of record for opportunities) | Without clear ownership, data conflicts arise |
| **Integration** | Connecting systems so data flows automatically between them | Manual data entry = errors, delays, frustration |
| **API (Application Programming Interface)** | The way systems talk to each other programmatically | Understanding APIs helps you evaluate tool compatibility |
| **ETL (Extract, Transform, Load)** | Process of moving data between systems with transformations | Critical for data warehousing and cross-system reporting |
| **Workflow Automation** | Rules that trigger actions automatically (e.g., "when opportunity closes, create onboarding task") | Reduces manual work, ensures process consistency |
| **Custom Objects/Fields** | Extending your CRM's data model to fit your business | Out-of-box rarely fits; customization enables your processes |
| **User Adoption** | Whether people actually use the tools as intended | The best tool poorly adopted is worse than a decent tool well adopted |
| **Technical Debt** | Shortcuts and workarounds that create future problems | Quick fixes accumulate; eventually the system becomes unmaintainable |

### Related KPIs

<div class="kpi-box" markdown="1">

#### KPIs This Pillar Impacts

*Tech Stack is infrastructure — it enables revenue outcomes but doesn't directly move any single KPI. A well-configured stack removes friction from every metric; a poorly configured one creates drag on all of them.*

</div>

### Operational Metrics

- **User Adoption Rate** — are people actually using the tools?
- **Data Entry Compliance** — are required fields being filled?
- **Integration Reliability** — are systems syncing correctly?
- **Time to Value** — how quickly can new tools be implemented and adopted?
{: .rationale-covers}

## The RevOps Tool Landscape
{: #the-revops-tool-landscape}

You don't need to master every tool, but you should understand the categories and how they fit together.

<div class="tool-category" markdown="1">

### CRM (Customer Relationship Management)

The system of record for accounts, contacts, and opportunities. Everything else integrates with this.

**Examples:** Salesforce, HubSpot, Microsoft Dynamics, Pipedrive
{: .tool-examples}

</div>

<div class="tool-category" markdown="1">

### Marketing Automation Platform (MAP)

Manages marketing campaigns, lead nurturing, and scoring. Feeds qualified leads to sales.

**Examples:** HubSpot, Marketo, Pardot, Eloqua, ActiveCampaign
{: .tool-examples}

</div>

<div class="tool-category" markdown="1">

### Sales Engagement

Enables multi-channel outreach sequences (email, phone, social). Tracks rep activity.

**Examples:** Outreach, Salesloft, Apollo, Gong Engage
{: .tool-examples}

</div>

<div class="tool-category" markdown="1">

### Customer Success Platform

Tracks customer health, manages renewals, surfaces expansion opportunities.

**Examples:** Gainsight, ChurnZero, Totango, Planhat
{: .tool-examples}

</div>

<div class="tool-category" markdown="1">

### Revenue Intelligence

Analyzes conversations and pipeline to provide insights on deal health and forecast accuracy.

**Examples:** Gong, Clari, Chorus, People.ai
{: .tool-examples}

</div>

<div class="tool-category" markdown="1">

### Data Enrichment

Fills in missing firmographic and technographic data on leads and accounts.

**Examples:** ZoomInfo, Clearbit, Apollo, Clay, Cognism
{: .tool-examples}

</div>

<div class="tool-category" markdown="1">

### Integration & Automation

Connects systems, moves data, and automates workflows across tools.

**Examples:** Zapier, Workato, Tray.io, MuleSoft, native integration
{: .tool-examples}

</div>

<div class="tool-category" markdown="1">

### CPQ (Configure, Price, Quote)

Manages complex pricing, generates quotes, and enforces deal desk rules.

**Examples:** Salesforce CPQ, DealHub, PandaDoc, Proposify
{: .tool-examples}

</div>

<div class="tool-category" markdown="1">

### Business Intelligence / Analytics

Aggregates data for cross-system reporting and visualization.

**Examples:** Tableau, Looker, Power BI, Domo, Sisense
{: .tool-examples}

</div>

## Resources
{: #resources}

Start with CRM administration — Salesforce Admin certification is the most valuable credential in RevOps. Then expand into integrations and automation.

### CRM Administration (Salesforce)

| Resource | Source | Type | Cost | Prerequisites |
|----------|--------|------|------|---------------|
| [Admin Beginner Trail](https://trailhead.salesforce.com/content/learn/trails/force_com_admin_beginner) | Salesforce Trailhead | Trail | Free | None |
| [Admin Intermediate Trail](https://trailhead.salesforce.com/content/learn/trails/force_com_admin_intermediate) | Salesforce Trailhead | Trail | Free | Admin Beginner |
| [Salesforce Administrator Certification](https://trailhead.salesforce.com/en/credentials/administrator) | Salesforce | Certification | $200 exam | Admin trails + hands-on |
| [Focus on Force](https://focusonforce.com/) | Focus on Force | Practice Exams | ~$25/exam | Trailhead completion |

### CRM Administration (HubSpot)

| Resource | Source | Type | Cost | Prerequisites |
|----------|--------|------|------|---------------|
| [HubSpot Sales Software](https://academy.hubspot.com/courses/hubspot-sales-software) | HubSpot Academy | Certification | Free | None |
| [Revenue Operations](https://academy.hubspot.com/courses/revenue-operations) | HubSpot Academy | Certification | Free | None |
| [HubSpot Reporting](https://academy.hubspot.com/courses/hubspot-reporting) | HubSpot Academy | Certification | Free | None |

### Automation & Integration

| Resource | Source | Type | Cost | Prerequisites |
|----------|--------|------|------|---------------|
| [Flow Basics](https://trailhead.salesforce.com/content/learn/modules/flow-basics) | Salesforce Trailhead | Module | Free | Admin basics |
| [Build Flows with Flow Builder](https://trailhead.salesforce.com/content/learn/trails/build-flows-with-flow-builder) | Salesforce Trailhead | Trail | Free | Flow Basics |
| [Zapier Learn](https://zapier.com/learn) | Zapier | Guides | Free | None |
| [Integration Patterns and Practices](https://trailhead.salesforce.com/content/learn/trails/explore-integration-patterns-and-practices) | Salesforce Trailhead | Trail | Free | Admin Intermediate |

### Tool-Specific Training

| Resource | Source | Type | Cost | Prerequisites |
|----------|--------|------|------|---------------|
| [Outreach University](https://university.outreach.io/) | Outreach | Certifications | Free | None |
| [Salesloft Learning](https://learn.salesloft.com/) | Salesloft | Courses | Free | None |
| [Gainsight Education](https://education.gainsight.com/) | Gainsight | Certifications | Free tier | None |
| [Gong Academy](https://www.gong.io/training-and-education) | Gong | Courses | Free | None |

## Recommended Books
{: #recommended-books}

| Book | Author | Why It's Here | Time |
|------|--------|---------------|------|
| **[Salesforce for Dummies](https://a.co/d/hty6ULq)** | Liz Kao & Jon Paz | Solid foundation for understanding Salesforce architecture and administration. Good starting point if you're new to the platform. | 10-12 hrs |
| **[The Martech Handbook](https://a.co/d/28pgqd3)** | Phil Barden | Overview of the marketing technology landscape and how to think about stack architecture. Useful for understanding how tools fit together. | 6-8 hrs |
| **[Designing Data-Intensive Applications](https://a.co/d/ikaUvfJ)** | Martin Kleppmann | Deep dive into how data systems work. Overkill for most RevOps roles, but excellent if you want to truly understand integrations, APIs, and data flow at a technical level. | 25+ hrs (reference) |

**Honest take:** For tech stack skills, hands-on practice beats books. Get the Salesforce Admin cert, build things in a dev org, configure real integrations. Books supplement but don't replace doing.

## Checklist
{: #checklist}

You've mastered this pillar when you can confidently do the following:

### CRM Administration

- Create custom objects and fields to support business processes
- Build page layouts and record types for different user needs
- Configure user permissions and security settings appropriately
- Build reports and dashboards that answer business questions
- Obtain Salesforce Administrator certification (or equivalent for your CRM)

### Automation

- Build workflow automation that triggers on record changes
- Create approval processes for deals, discounts, or escalations
- Design automated lead routing based on territory or round-robin rules
- Build task/activity automation that ensures follow-up doesn't fall through cracks
- Document automation logic so others can maintain it

### Integration

- Map data flows between your core systems (CRM ↔ MAP ↔ CS platform)
- Configure a native integration between two systems
- Build a Zapier/Workato workflow for a cross-system process
- Troubleshoot integration failures and identify root cause
- Understand API basics — what they are, rate limits, authentication

### Tool Evaluation & Implementation

- Create a requirements document for evaluating new tools
- Lead or participate in a tool selection process with stakeholders
- Build an implementation plan with phases, milestones, and success criteria
- Roll out a new tool with training, documentation, and adoption tracking
- Measure ROI of a tool investment after implementation

### Stack Architecture

- Document your current tech stack with owners and integration points
- Identify redundancies or gaps in your current stack
- Define system of record for each key data type
- Create a tech stack roadmap aligned with business priorities

## Practical Application
{: #practical-application}

### If you have CRM access at work

Start with the Salesforce Admin certification — even if you're already using Salesforce daily. The structured learning fills gaps you didn't know you had. Then pick one manual process and automate it. Document the before/after.

Audit your current integrations: What data flows between systems? Where does it break? Is there a manual workaround that could be automated?

### If you don't have CRM access

Salesforce Developer Edition is free. HubSpot's free tier is robust. Get hands-on with real tools, not just documentation. Build custom objects, create workflows, configure integrations with Zapier's free tier.

The Salesforce Admin cert is achievable in 4-8 weeks of focused study and is the single most valuable credential for RevOps roles.

### Certifications Worth Pursuing

Not all certifications are equal. Prioritize based on your role and stack:

- **Salesforce Administrator** — The gold standard. Opens doors, proves competency.
- **HubSpot Revenue Operations** — Free, quick, and provides solid foundational knowledge.
- **Salesforce Business Analyst** — Good next step after Admin, more strategic.
- **Tool-specific certs** (Outreach, Gong, etc.) — Useful if you're implementing those tools.
{: .rationale-covers}

Skip vendor certs that are just marketing exercises. Focus on ones that require actual knowledge.

### Portfolio Pieces to Build

- Salesforce Developer org with custom objects, fields, and automation
- Documentation of a workflow automation you built (before/after)
- Integration map showing how data flows across your stack
- Tool evaluation matrix with requirements and scoring
- Implementation plan for a tool rollout
{: .rationale-covers}
