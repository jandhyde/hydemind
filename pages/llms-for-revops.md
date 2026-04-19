---
layout: pillar
title: "LLMs for RevOps"
permalink: /llms-for-revops/
description: "The foundation skill that amplifies every pillar. How to use large language models effectively in Revenue Operations."
intro: "Large language models are a capability multiplier across every RevOps pillar. They don't replace domain knowledge — someone who doesn't understand data governance won't magically fix their CRM with an LLM. But someone who does can move significantly faster on execution. This is the foundation skill that makes everything above it more effective."
toc:
  - id: rationale
    label: Rationale
  - id: the-big-three
    label: The Big Three
  - id: use-cases-by-pillar
    label: Use Cases by Pillar
  - id: where-llms-dont-help
    label: Where LLMs Don't Help
  - id: resources
    label: Resources
  - id: checklist
    label: Checklist
---

## Rationale
{: #rationale}

RevOps is full of repetitive cognitive work: cleaning data, writing formulas, documenting processes, building reports, analyzing patterns. LLMs handle this kind of work well — not perfectly, but well enough to dramatically accelerate someone who already knows what good output looks like.

This isn't a pillar. It's a foundation. The six pillars define *what* Revenue Operations covers. LLM fluency changes *how* you do the work within each of them. That's why it sits beneath the pillars rather than alongside them — it's a capability layer that amplifies everything above it.

Here's the thing most people miss: the core skill isn't "prompt engineering" in some technical sense. It's clarity of intent — the ability to articulate what you want, clearly, step by step. That's a skill RevOps people already have. Writing detailed requirements, defining business processes, building specs for what a dashboard should show — that's the same muscle as writing a good prompt. The gap isn't "learn a new skill from scratch." It's "apply a skill you already have in a new context."

Most of the best learning resources for LLMs come from the developer world. That's fine. The concepts — clear instructions, structured output, iterative refinement, knowing when the tool is the wrong choice — translate directly to operations work. Part of getting good at this is building the habit of translating developer-oriented content to your own workflows.

## The Big Three
{: #the-big-three}

Three LLMs dominate the current landscape. They all work for RevOps use cases. Pick one, get competent, and know that the fundamentals transfer across all of them.

| LLM | Positioning | Best For |
|-----|------------|----------|
| **Claude** (Anthropic) | Strong at long document analysis, nuanced writing, and structured reasoning | Deep analysis, document processing, complex multi-step workflows |
| **ChatGPT** (OpenAI) | Deep research capabilities, broad plugin ecosystem | Research synthesis, exploring unfamiliar topics, general-purpose problem solving |
| **Gemini** (Google) | Native Google Workspace integration | Teams already embedded in Google Sheets, Docs, and Gmail workflows |

Don't get caught up in which one is "best." They all improve rapidly. The skill that matters is learning to communicate clearly with any of them — that transfers regardless of which model you're using.

## Use Cases by Pillar
{: #use-cases-by-pillar}

LLMs touch every pillar differently. The use cases below range from things you can do right now in a chat interface to workflows that benefit from API-level automation at scale.

### Data

| Use Case | Interface Level |
|----------|----------------|
| Normalize messy field values (job titles, industries, company names) | Chat or API |
| Write data validation rules from plain-language business requirements | Chat |
| Generate deduplication logic and matching criteria | Chat |
| Build data cleanup scripts from a description of the problem | Chat |
| Process thousands of records through consistent normalization rules | API |

### Tech Stack

| Use Case | Interface Level |
|----------|----------------|
| Write Salesforce formulas, flows, and validation rules from requirements | Chat |
| Troubleshoot integration errors from log messages | Chat |
| Draft automation logic (workflow rules, process builder specs) | Chat |
| Evaluate tools against a requirements matrix | Chat |
| Generate documentation for existing system configurations | Chat |

### Customer Processes

| Use Case | Interface Level |
|----------|----------------|
| Draft process documentation from rough notes or verbal descriptions | Chat |
| Map customer journey stages from existing data definitions | Chat |
| Build qualification framework first drafts (BANT, MEDDIC variants) | Chat |
| Write segmentation logic in plain language, then translate to technical specs | Chat |
| Extract customer intelligence from unstructured notes at scale (see example below) | API |

### Enablement

| Use Case | Interface Level |
|----------|----------------|
| Generate onboarding plan drafts from role descriptions | Chat |
| Draft playbooks and battle cards from product positioning docs | Chat |
| Create training outlines for new tool rollouts | Chat |
| Write coaching frameworks based on performance data patterns | Chat |
| Build FAQ documents from common support tickets or Slack questions | Chat |

### KPIs & Reporting

| Use Case | Interface Level |
|----------|----------------|
| Write SQL/SOQL queries from plain-language metric definitions | Chat |
| Build dashboard specifications from stakeholder requirements | Chat |
| Explain complex metric calculations to non-technical stakeholders | Chat |
| Generate data visualization recommendations based on the story you need to tell | Chat |
| Analyze report outputs and surface patterns or anomalies | Chat |

### Strategic Insights & Planning

| Use Case | Interface Level |
|----------|----------------|
| Build scenario models from assumptions and constraints | Chat |
| Draft territory design proposals from account data | Chat |
| Run capacity planning calculations with different growth assumptions | Chat |
| Generate business case frameworks for strategic initiatives | Chat |
| Synthesize competitive intelligence from multiple sources | Chat or API |

### From Chat to API: A Real-World Example
{: .rationale-covers}

<div class="example-box" markdown="1">

#### Extracting Intelligence from 21,000 Meeting Notes

A B2B SaaS company had three years of meeting notes across 1,100+ accounts. Intelligence about churn risk, competitive threats, and upsell opportunities was buried in those notes, and nobody was systematically extracting it. CSMs had conversations, took notes, and moved on. Nobody went back to connect dots across accounts.

Using an LLM API to process every note with a consistent prompt, the team built three outputs:

**Churn Risk Scoring** — Each account's notes were analyzed against the company's existing risk categories: budget pressure, platform migrations, competitor mentions, product gaps, relationship breakdowns. Every account received a 1-5 risk score with citations back to the specific notes that triggered it. Instead of relying on CSMs to self-report risk, the team could validate it against what customers actually said.

**Product Coverage Mapping** — The system extracted what capabilities each customer was actually using, what they were doing with competitors, and where gaps existed. Months of manual discovery calls compressed into hours of processing. Every blank field became a potential conversation. Every competitor mention became a displacement target.

**Technology Landscape Extraction** — Every technology a customer mentioned was captured — what platforms they were on, what they were migrating to, what adjacent tools they used. Patterns that were invisible when notes were read one at a time became obvious in aggregate.

This is the jump from "chat interface trick" to "operational intelligence at scale." It works because the API lets you process thousands of records with the same prompt. And it solves a management problem, not just a productivity one — the issue wasn't that anyone was slow at reading notes. The issue was that institutional knowledge was decaying in real time because no human process could keep up.

</div>

## Where LLMs Don't Help
{: #where-llms-dont-help}

Knowing where LLMs fail is more important than knowing where they succeed. Anyone can find use cases. Avoiding the failure modes is what separates effective use from expensive mistakes.

**System-of-record writes without human review.** Never let an LLM push data directly into your CRM, billing system, or any source of truth without a human checking the output. LLMs hallucinate — confidently and without warning. A hallucinated account name in a meeting summary is annoying. A hallucinated revenue figure in a forecast is a material problem.

**Anything involving PII or sensitive customer data without proper guardrails.** Pasting customer data into a consumer LLM chat interface is a data handling violation at most companies. If you're processing sensitive data, you need enterprise agreements, data processing terms, and API-level controls — not a browser tab.

**Organizational and political judgment.** "Should we reorganize territories?" "How do I tell the VP of Sales their forecast methodology is wrong?" "Which team should own this process?" These require context about people, relationships, and organizational dynamics that an LLM doesn't have and can't reliably infer.

**Anything where being wrong is expensive and hard to detect.** LLMs can subtly miscalculate a forecast, misdefine a metric, or generate a formula that works in most cases but fails at edge cases. The danger isn't obvious errors — you'll catch those. The danger is plausible-looking output that's slightly wrong in ways that compound over time. Always verify quantitative output independently.

**Final-version anything.** LLMs generate drafts. Strong drafts, sometimes. But drafts. The value is in acceleration — getting from blank page to 70% in minutes instead of hours. The last 30% still requires your domain expertise, your judgment, and your knowledge of what "good" looks like in your specific context.

## Resources
{: #resources}

### Start Here

| Resource | Source | Type | Cost | Prerequisites |
|----------|--------|------|------|---------------|
| [Prompt Engineering Course](https://anthropic.skilljar.com/) | Anthropic Academy | Self-paced course | Free | None |
| [AI Prompting Trailmix](https://trailhead.salesforce.com/users/amoore777/trailmixes/ai-prompting) | Salesforce Trailhead | Trailmix | Free | Basic Salesforce familiarity |

The Anthropic Academy course teaches prompt engineering fundamentals — how to write clear instructions, structure inputs, and iterate on outputs. It's the single best starting point because the skills transfer to any LLM. The Salesforce Trailmix applies prompting concepts specifically to the Salesforce ecosystem, which is where most RevOps practitioners spend their time.

### Go Deeper

| Resource | Source | Type | Cost | Prerequisites |
|----------|--------|------|------|---------------|
| [Full Anthropic Academy Catalog](https://anthropic.skilljar.com/) | Anthropic Academy | 13 self-paced courses | Free | Prompt Engineering Course |
| [Nate B Jones](https://www.youtube.com/@NateBJones) | YouTube | Ongoing channel | Free | None |
| [Understanding Large Language Models in Business](https://www.coursera.org/learn/understanding-large-language-models-in-business) | Coursera | Course (audit free) | Free / Paid cert | None |

The full Anthropic Academy covers API fundamentals, tool use, and agent frameworks — essential once you move beyond chat-interface use cases into API-level automation. Nate B Jones covers LLM developments from a developer perspective, but the concepts translate broadly — building the habit of following what's changing in this space matters more than any single tutorial. The Coursera course provides a business-oriented framing of what LLMs are and how they fit into organizational workflows.

### Technical Foundation

| Resource | Source | Type | Cost | Prerequisites |
|----------|--------|------|------|---------------|
| [Generative AI with Large Language Models](https://www.coursera.org/learn/generative-ai-with-llms) | Coursera (DeepLearning.AI + AWS) | Course (audit free) | Free / Paid cert | Basic Python helpful |
| [MIT 6.S191: Introduction to Deep Learning](https://introtodeeplearning.com/) | MIT OpenCourseWare | Lecture series | Free | Math comfort (linear algebra, calculus basics) |

These are for people who want to understand how LLMs actually work under the hood — transformer architecture, training processes, fine-tuning. You don't need this to use LLMs effectively in RevOps, but it builds intuition for why they behave the way they do and where their limitations come from.

## Checklist
{: #checklist}

You've built this foundation skill when you can confidently do the following:

### Fundamentals

- Write a prompt that produces usable output on the first attempt
- Restructure a vague request into a clear, step-by-step prompt
- Evaluate LLM output for accuracy, hallucinations, and gaps before using it
- Explain to a non-technical stakeholder what LLMs can and can't do

### Applied Use

- Identify which tasks in your weekly workflow benefit from LLMs vs. don't
- Build a repeatable prompt for a task you do regularly (data cleanup, report generation, documentation)
- Use an LLM to draft a process document, then refine it to production quality
- Translate a business requirement into a technical output (formula, query, automation logic) using an LLM

### Scaling Up

- Use an LLM API to process data at scale with a consistent prompt
- Build a workflow that takes unstructured input and produces structured, importable output
- Design a quality-check process for LLM-generated output before it enters production systems
- Evaluate when a task needs API automation vs. when the chat interface is sufficient
