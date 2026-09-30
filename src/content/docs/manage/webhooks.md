---
title: Outbound Webhooks
description: Subscribe to platform lifecycle events and dispatch real-time payloads to external webhooks.
---

# Outbound Webhook Subscriptions

Agentoom provides a reliable, event-driven webhook engine with automatic exponential backoff retries.

---

## 🔔 Subscribable Events

In **Manage > Webhooks**, administrators can subscribe outbound webhook endpoints to any of the following lifecycle events:

- `agent.run.completed`: Dispatched when an interactive chat or agent task run completes successfully.
- `agent.run.failed`: Dispatched when an agent run encounters an uncaught error or provider failure.
- `pipeline.completed`: Dispatched when all steps in an orchestrated pipeline complete successfully.
- `pipeline.failed`: Dispatched when an orchestrated pipeline fails or halts on an unhandled exception.
- `endpoint.completed`: Dispatched when an inbound webhook endpoint finishes processing asynchronously.
- `endpoint.failed`: Dispatched when an inbound webhook endpoint execution fails.
- `incident.created`: Dispatched when an EU AI Act compliance incident or safety non-conformity is recorded.

Webhooks support custom signature secrets, SSL verification toggles, and optional scoping to specific agents or pipelines.
