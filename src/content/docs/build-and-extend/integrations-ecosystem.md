---
title: Integrations & Protocol Ecosystem
description: Complete directory of supported integrations in Agentoom (September 2026), including MCP, OpenAI v1, WhatsApp, Telegram, Typesense, Redis, and cloud providers.
---

import { Card, CardGrid, Badge } from '@astrojs/starlight/components';

# Supported Integrations & Ecosystem

Agentoom acts as a unified integration fabric connecting AI models, enterprise business databases, client interfaces, and compliance infrastructure.

Below is the complete catalog of integrations supported across the **Agentoom World**.

---

## 🔌 1. Protocols & API Gateways

<CardGrid>
  <Card title="Model Context Protocol (MCP)" icon="setting">
    Native support for Anthropic's **MCP** over SSE and stdio/HTTP. Discover external tools and data sources dynamically with automatic Sentinel security rule enforcement.
    [Read MCP Guide &rarr;](/build-and-extend/mcp-servers/)
  </Card>

  <Card title="OpenAI v1 Drop-in API" icon="laptop">
    Full `/v1/chat/completions` and `/v1/models` compatibility via `@agentoom/core-openapi-v1`. Point **Cursor**, **LangChain**, **LlamaIndex**, **AutoGen**, or official OpenAI SDKs to Agentoom without changing your code.
    [Read API Guide &rarr;](/build-and-extend/api-keys-and-tokens/)
  </Card>

  <Card title="Native Tool Protocol (Actionables)" icon="rocket">
    Direct deterministic code execution using PHP 8 attributes (`#[Actionable]`). Run database queries, math, and external API requests at zero token cost and millisecond latency.
    [Read Actionables Guide &rarr;](/core-concepts/actionables-zero-token-compute/)
  </Card>

  <Card title="Inbound & Outbound Webhooks" icon="document">
    Trigger pipelines from external events (CRMs, payment processors, Git repos) with signature verification, and dispatch outbound notifications with automatic retry policies.
    [Read Webhooks Guide &rarr;](/manage/webhooks/)
  </Card>
</CardGrid>

---

## 📱 2. Communication Channels & Instant Messaging

Connect agents to customers and internal teams across messaging networks via `@agentoom/core-instant-messaging`:

- **WhatsApp Cloud API**: Official Meta API integration for verified business accounts. Receive customer inquiries, send rich media, and route conversations through the Trust Layer.
- **Telegram Bot API**: Bi-directional bots for employee automation, notification channels, and operational approvals.
- **Slack & Discord Integrations**: Outbound webhook alerts for incident detection, emergency stop triggers, and Sentinel pending authorization requests.
- **Email (IMAP / SMTP)**: Automatically ingest inbound customer emails, draft contextual replies with citations, and enforce human approval before sending.

---

## 💻 3. Client Embeds & User Interfaces

- **Embeddable Chat Widget (`@agentoom/core-chat-widget`)**: Lightweight, drop-in JavaScript widget for any website, supporting custom branding, avatar customization, streaming responses, and starter prompt pills.
- **Accessibility Toolbar (`@agentoom/core-accessibility-widget`)**: WCAG 2.1 AA certified UI with high-contrast modes, dyslexia typography, text size scaling, and screen-reader optimizations.
- **Live Support Takeover (`@agentoom/core-live-support`)**: Real-time human-in-the-loop takeover desk. Support agents can monitor conversations and seamlessly take over from AI assistants in the active widget session.
- **Conversational Forms & Lead Generators**: Multi-step structured data collection forms driven by conversational AI.

---

## 🗄️ 4. Storage, Vector & Knowledge Engines

- **Typesense**: Lightning-fast semantic vector search and hybrid keyword retrieval for uploaded PDFs, Markdown, and Word documents.
- **PostgreSQL & pgvector**: Relational data storage, immutable audit logs, and integrated vector embeddings.
- **Redis & Redis Streams**: Low-latency caching, queue brokering, real-time presence tracking, and pseudonymization mapping stores.
- **Cloud & Local Storage**: AWS S3, Cloudflare R2, MinIO, or local disk drivers for knowledge bases and compliance evidence archives.

---

## 🛡️ 5. Security, Auth & Enterprise Identity

- **Authentication**: Passkeys (FIDO2 / WebAuthn passwordless authentication), TOTP Two-Factor Authentication, and OAuth 2.0 (Google, GitHub, Microsoft Azure AD).
- **Sentinel Security Buffer**: Application-level mandatory middleware with OTP email and verbal approval drivers.
- **AGPII Privacy Engine**: Local pattern matching and remote semantic Named Entity Recognition (NER) for multi-language PII redaction and restoration.
- **EU AI Act Post-Market Engine**: Article 72 monitoring, risk classification wizard, emergency kill-switches, and cryptographic trace verification (`AiAgentTrace`).
