---
title: What is Agentoom?
description: An introduction to Agentoom, the Enterprise AI Operating System designed for governed, autonomous, and compliant agent operations.
---

import { Card, CardGrid, Badge } from '@astrojs/starlight/components';

# What is Agentoom?

> **Agentoom** is an **Enterprise AI Operating System** that enables organizations to build, orchestrate, govern, and audit autonomous AI agents and deterministic workflows in a single, self-hosted platform.

Unlike simple wrappers around AI model APIs, Agentoom treats every AI interaction as a **governed transaction**. It sits between your users or internal systems and external AI providers (like OpenAI, Anthropic, or Google Gemini), ensuring that every action is safe, compliant with regulations like the **EU AI Act**, stripped of sensitive personal data (PII), and cryptographically auditable.

---

## 🎯 The Elevator Pitch

Modern enterprises face a dilemma when deploying AI agents:
1. **Unpredictability & Security**: Large Language Models can hallucinate, make unauthorized external calls, or expose confidential data.
2. **Regulatory Risk**: The European Union AI Act and international privacy laws mandate risk assessments, human oversight, emergency shut-offs, and immutable audit logs.
3. **Runaway Costs**: Calling multi-step LLMs for repetitive data fetching wastes tokens and money.

**Agentoom solves all three challenges simultaneously:**
- **Pre-execution Security (Sentinel)**: Intercepts agent tool calls at the application layer *before* they execute, enforcing human-in-the-loop (OTP/verbal) approvals.
- **Legal Compliance by Design**: Built-in EU AI Act post-market monitoring (Article 72), risk classification wizard, and emergency stops.
- **Zero-Token Deterministic Code (Actionables)**: Run native code directly when reasoning isn't needed, saving budget and eliminating hallucinations.

---

## 🏛️ The Four Tiers of Agentoom

Agentoom organizes its functionality into four integrated tiers:

```
┌─────────────────────────────────────────────────────────────┐
│                       COMMAND CENTER                        │
│   Web Dashboard · Real-Time Telemetry · Project Budgets     │
├─────────────────────────────────────────────────────────────┤
│                         TRUST LAYER                         │
│   Sentinel Security · GovernanceGate · PII Anonymization   │
├─────────────────────────────────────────────────────────────┤
│                       EXECUTION PLANE                       │
│   Agent Runtime · Pipeline Engine · Job Queue · Scheduler   │
├─────────────────────────────────────────────────────────────┤
│                      INTEGRATION FABRIC                     │
│   Tool Protocol · MCP Servers · Chat Widgets · REST / v1    │
└─────────────────────────────────────────────────────────────┘
```

1. **The Command Center**: A modern web interface where both technical engineers and business managers view agent health, queue throughput, budget meters, and pending approvals.
2. **The Trust Layer**: A mandatory pre-execution pipeline that sanitizes sensitive data (PII) with the AGPII tag engine and enforces security rules before any external API is touched.
3. **The Execution Plane**: A resilient, queue-backed engine with horizontal worker scaling, step-by-step pipeline branching, and deterministic Actionables.
4. **The Integration Fabric**: Turn any external database, API, or Model Context Protocol (MCP) server into a callable capability with zero friction.

---

## ⚖️ How Agentoom Differs from Other AI Frameworks

| Feature / Dimension | Agentoom | LangChain / LlamaIndex | CrewAI / AutoGen | Generic Chatbot Wrappers |
|---|---|---|---|---|
| **Primary Nature** | **Full Operating System** | Code libraries (Python/TS) | Multi-agent coordination scripts | Single-purpose web UI |
| **Security Gates** | **Mandatory middleware (Sentinel)** | None (Prompt instructions only) | None (Prompt instructions only) | Basic rate limiting |
| **EU AI Act Compliance** | **Built-in engine (Art. 72, HITL)** | None | None | None |
| **PII Anonymization** | **Multi-layer (Local & Pro AGPII)** | Requires external plugins | None | None |
| **Deterministic Code** | **Actionables (0 token cost)** | Custom code tools | Python tool calls | N/A |
| **Audit Integrity** | **Cryptographic traces (`AiAgentTrace`)** | Logging callbacks | Console logs | Basic DB chat history |
| **Target User** | **Developers & Business Teams** | Software developers | Python developers | End users |
| **Hosting** | **100% Self-Hosted & Private** | Library / Cloud SaaS | Self-scripted | Cloud SaaS |

---

## 👥 Who is Agentoom For?

<CardGrid>
  <Card title="AI Developers & Engineers" icon="laptop">
    Build sophisticated agents, craft multi-step conditional pipelines, connect custom MCP servers, and write high-speed PHP Actionables.
  </Card>
  <Card title="Compliance & DPO Officers" icon="document">
    Fulfill EU AI Act requirements effortlessly with automated risk questionnaires, audit-ready exports, and emergency shutdown switches.
  </Card>
  <Card title="Operations & Support Leads" icon="setting">
    Deploy embeddable chat widgets on company websites, connect WhatsApp/Telegram channels, and take over conversations in real time with Live Support.
  </Card>
  <Card title="Product & Finance Managers" icon="star">
    Track exact token expenditure per project, set strict budget limits, and eliminate costly API waste with conditional workflow branching.
  </Card>
</CardGrid>

---

## ❓ Frequently Asked Questions (FAQ)

### What is an "Actionable" in Agentoom?
An **Actionable** is a deterministic PHP function marked with the `#[Actionable]` attribute. When a workflow step only needs to fetch data from a CRM, calculate an invoice total, or trigger a webhook, an Actionable runs directly without invoking an AI model. This means **zero token fees**, **millisecond response times**, and **100% predictable output**.

### What makes Sentinel "bypass-proof"?
Unlike prompt guardrails that ask the AI to "please confirm before sending an email," **Sentinel** is a physical middleware class in the execution pipe. The agent has no code path to the tool that circumvents Sentinel. If a rule specifies OTP email verification for transfers over $1,000, the system automatically pauses execution and notifies the operator. The agent cannot "jailbreak" or talk its way around code it cannot see.

### Can Agentoom run on private infrastructure?
Yes. Agentoom is designed from the ground up for **self-hosting**. Your data, knowledge documents, conversations, and audit records never leave your servers unless you explicitly configure an external model provider.

### Is Agentoom compatible with OpenAI SDKs and tools?
Yes. Through the `@agentoom/core-openapi-v1` package, Agentoom exposes a standard OpenAI-compatible `/v1/chat/completions` API. You can point existing tools, LangChain agents, or Cursor directly to Agentoom as a drop-in replacement.

---

## 🚀 Next Steps

- [Quickstart Guide](/getting-started/quickstart-guide/): Build and chat with your first agent in under 5 minutes.
- [User Interface Tour](/getting-started/user-interface-tour/): Explore the Command Center, Govern menu, and Build & Extend modules.
- [Sentinel Security Buffer](/govern/sentinel-security-buffer/): Learn how code-level security protects your company.
