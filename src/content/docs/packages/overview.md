---
title: Monorepo Package Ecosystem
description: An architectural overview of the 11 official packages that make up the Agentoom World (September 2026).
---

# The Agentoom Monorepo Ecosystem

As of **September 2026**, the Agentoom platform is structured as a modular suite of decoupled packages prefixed with `core-*`, allowing organizations to install only the components they require.

---

## 📦 Package Catalog

| Package | Composer / NPM Name | Purpose |
|---|---|---|
| **Core Main** | `agentoom/core-main` | The primary application runtime, agent engine, and pipeline dispatcher |
| **Core Sentinel** | `agentoom/core-sentinel` | Mandatory security buffer for tool interception and OTP authorizations |
| **Core Compliance** | `agentoom/core-compliance` | EU AI Act Article 72 compliance engine, risk wizards, and evidence exports |
| **Core Privacy** | `agentoom/core-privacy` | AGPII tag processor and local regex PII anonymization |
| **Core Privacy Pro** | `agentoom/core-privacy-pro` | Client for the remote semantic PII detection microservice |
| **Core OpenAPI v1** | `agentoom/core-openapi-v1` | Drop-in OpenAI-compatible API gateway (`/v1/chat/completions`, `/v1/models`) |
| **Core Chat Widget** | `agentoom/core-chat-widget` | Embeddable web chat interface for customer websites |
| **Core Accessibility** | `agentoom/core-accessibility-widget` | WCAG accessibility controls and high-contrast styling |
| **Core Live Support** | `agentoom/core-live-support` | Seamless human takeover bridge for agent conversations |
| **Core Instant Messaging** | `agentoom/core-instant-messaging` | Direct messaging drivers for WhatsApp Cloud API and Telegram |
| **Core Experimentoom** | `agentoom/core-experimentoom` | Experimentoom platform publishing tool, telemetry sync, and research reporting |
