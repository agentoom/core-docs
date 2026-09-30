---
title: Endpoints and Schedules
description: Trigger your AI workflows automatically via incoming HTTP webhooks or background cron schedules.
---

# Endpoints and Schedules

Workflows in Agentoom can run interactively via the Command Center or trigger autonomously through **Endpoints** and **Schedules**.

---

## 🌐 Endpoints (Inbound HTTP Webhooks)

An **Endpoint** generates a dedicated, secure webhook URL. When external systems (like Stripe, Shopify, GitHub, or internal ERPs) post JSON payloads to this endpoint, Agentoom captures the request, verifies credentials, and executes the assigned agent or pipeline.

- **Dual Execution Modes**:
  - **Direct Response (Asynchronous)**: Returns an immediate customizable status acknowledgement (e.g. `200` or `202`) while dispatching execution to background queue workers (`agent-chat-processing`).
  - **Synchronous Execution**: Waits for the agent or pipeline run to complete and returns the processed response payload directly to the caller.
- **Payload Forwarding**: Inbound JSON parameters are forwarded as input context to the agent or Step 0 of the pipeline.
- **Security & Rate Limiting**: Restrict traffic with allowed origin/IP whitelists (`allowed_sources`), header bearer auth tokens (`auth_token`), and per-endpoint rate limit throttling.

---

## ⏰ Schedules (Cron Triggers)

A **Schedule** executes a pipeline automatically based on a standard cron expression.

Examples:
- `0 8 * * 1-5`: Run daily business briefing pipeline at 8:00 AM, Monday to Friday.
- `*/15 * * * *`: Check customer support inbox for unassigned tickets every 15 minutes.
- `0 0 1 * *`: Generate monthly expense and compliance audit summary on the 1st of every month.

All scheduled runs are logged in the **Schedule Logs** tab with start time, execution duration, and completion status.
