---
title: User Interface Tour
description: A thorough visual tour of the Agentoom Command Center, Top Bar, and Sidebar navigation for September 2026.
---

import { Card, CardGrid, Badge } from '@astrojs/starlight/components';

# Visual User Interface Tour

Agentoom provides an intuitive, centralized **Command Center** designed for both technical administrators and business team members. This guide breaks down every navigation section, card, and action in detail.

---

## 1. Top Navigation Bar

The top bar provides immediate access to your primary operating entities:

```
[Agentoom Logo]   Agents ▾   Chat   Pipelines   Endpoints   Schedules      [AI Credits Meter]  [User Profile]
```

- **Agents ▾**: Dropdown menu containing:
  - **Agents**: List, create, and manage your autonomous assistants.
  - **AI Tasks**: Define repeatable prompt templates and task recipes.
  - **Skills & Skill Presets**: Reusable behavioral presets (e.g., Code Reviewer, Support Specialist).
  - **Agent Tools**: View all local and remote tools registered on the server.
- **Chat**: An interactive chat console to test agents with real-time token streaming.
- **Pipelines**: The multi-step workflow orchestrator.
- **Endpoints**: Inbound webhooks that external applications can trigger with HTTP calls.
- **Schedules**: Cron-based automated timers that trigger pipelines at scheduled times (e.g., daily at 08:00).
- **AI Credits**: Live credit balance indicator and budget meter.

---

## 2. Command Center Dashboard

The central dashboard gives you an instant operational pulse of your deployment:

![Agentoom Command Center](/images/screenshots/dashboard.png)

### Key Dashboard Cards Explained:
- **AI Credits Meter**: Shows total available credits remaining on your tenant. Warns you before budgets run out.
- **Welcome Back & Quick Links**: Shortcuts to frequently used features (**Chat**, **Agents**, **Forms**, **Projects**).
- **Resource Usage Grid**: Live counters of active entities:
  - *Agents*, *Pipelines*, *Endpoints*, *Resource Types*
  - *Projects*, *MCP Servers*, *Chat Widgets*, *Forms*, *Prompts*, *Protected Operations*
- **Locale Switcher**: Switch the interface between English, Italian, German, Spanish, and French.

---

## 3. Left Sidebar: Navigation Sections

The left sidebar organizes Agentoom's administrative power into four clean groups:

### A. Govern (Trust & Security Layer)

This section contains your security gates and compliance controls.

#### Sentinel Security Buffer
![Sentinel Security Buffer](/images/screenshots/sentinel-tools.png)
- **Sentinel Rules**: Specify which tools require human approval before running.
- **Confirmation Types**: Configure **Verbal Confirmation** (operator approves inside the chat UI) or **OTP Confirmation** (one-time security code sent via email).
- **Logs**: Complete audit trail of all approval requests, authorized actions, and rejections.

#### Trust Layer (PII Anonymization)
![Trust Layer Detection Rules](/images/screenshots/privacy-recognizers.png)
- **Detection Rules**: View and configure pattern recognizers for personal data (emails, credit cards, tax IDs, phone numbers).
- **Masking Rules**: Define how detected sensitive spans should be masked before sending them to external AI models.
- **External Privacy Service**: Connect the advanced semantic PII microservice (`@agentoom/core-privacy-pro`).

#### EU AI Act Compliance
![EU AI Act Compliance Dashboard](/images/screenshots/compliance-dashboard.png)
- **Post-Market Monitoring (Art. 72)**: Real-time compliance health dashboard.
- **Audit Log & Agent Traces**: Cryptographic records (`AiAgentTrace`) reconstructing every step an agent took.
- **Pending Decisions**: Human-in-the-loop approval queue for paused agents.
- **Emergency Stops**: Instant master kill-switches to halt any agent or workflow immediately.
- **Incidents & Alerts**: Track non-conformity events, risk escalations, and overdue reviews.
- **Assessment Wizard**: Interactive questionnaire to classify deployments (Minimal, Limited, or High Risk).
- **Control Library & Governance Profiles**: Apply tailored compliance control benchmarks to Governed Deployments (Agents, Pipelines, and Endpoints).

---

### B. Build & Extend

Tools to expand your agents' capabilities and connect external services.

#### Multi-Step Pipelines
![Pipelines Overview](/images/screenshots/pipelines.png)
- Chain multiple agents and deterministic Actionables sequentially.
- Add structured if/else branching conditions and jump instructions.
- Inspect detailed execution traces for each pipeline run.

#### Model Context Protocol (MCP) Servers
![MCP Servers](/images/screenshots/mcp-servers.png)
- Connect external MCP servers over SSE or HTTP.
- Automatically discover and sync external capabilities as native agent tools.
- Manage shared MCP API tokens and cost tracking.

#### Chat Widgets & Conversational Forms
![Widgets Management](/images/screenshots/widgets.png)
- **Chat Widgets**: Generate embeddable JavaScript code snippets to add an AI chat bubble to any website.
- **Forms & Prompts**: Create conversational lead-generation forms.

#### API Endpoints & Triggers
![API Endpoints](/images/screenshots/endpoints.png)
- Create unique HTTP webhook URLs.
- External applications (CRMs, ERPs, GitHub, Stripe) can trigger pipelines asynchronously.

---

### C. Manage (Multi-Tenancy & Observability)

#### Projects & Budget Isolation
![Projects Overview](/images/screenshots/projects.png)
- Segment your organization into teams or departments (e.g., *Finance*, *Support*, *R&D*).
- Enforce independent monthly spending limits and credit balances.
- Segregate knowledge documents and conversation histories.

#### Monitoring & Telemetry
![System Monitoring](/images/screenshots/monitoring.png)
- **Executions Today**: Total number of agent runs.
- **Failure Rate & Latency**: Monitor API performance and model errors.
- **Hourly Trends**: Interactive charts showing queue depths, token usage, and daily costs.

---

### D. Settings

- **Access Control**: Invite users, assign roles (`superadmin`, `admin`, `user`, or custom RBAC roles), and grant granular permissions.
- **Platform**: Configure outbound email transports (SMTP / Gmail OAuth), default language localization, and system branding.
- **System**: Configure autonomous System AI Worker Agents (such as the background Memory Worker and Summarizer Agent) and monitor general platform health. Dedicated queue supervision is provided by Laravel Horizon (`/horizon`).
