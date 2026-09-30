---
title: Outbound Webhooks
description: Subscribe to platform lifecycle events and dispatch real-time payloads to external webhooks.
---

# Outbound Webhook Subscriptions

Agentoom provides a reliable, event-driven webhook engine with automatic exponential backoff retries.

---

## 🔔 Subscribable Events

- `agent.run.completed`: Dispatched when an interactive conversation or agent run finishes.
- `pipeline.completed` / `pipeline.failed`: Dispatched on pipeline termination.
- `compliance.alert.raised`: Dispatched when an overdue risk assessment or emergency stop triggers.
- `sentinel.authorization.required`: Dispatched when an action is paused awaiting operator OTP or confirmation.
