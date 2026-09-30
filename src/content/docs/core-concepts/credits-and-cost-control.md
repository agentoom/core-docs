---
title: Credits & Cost Control
description: Manage AI token expenditures, track provider pricing, and enforce strict per-project and per-agent budget limits.
---

# Credits & Cost Control

Running AI models in enterprise environments can lead to surprise bills if left unmonitored. Agentoom provides a transparent, real-time **Credit & Cost Control System** that intercepts every AI request, tracks token consumption, and prevents budget overruns before they happen.

---

## 💰 Multi-Tiered Cost Governance

Agentoom enforces financial safeguards across three distinct operational layers:

1. **Platform Credit Balance**: The overall installation maintains a credit balance (`app_ai_credits`) preventing unmonitored external API charges.
2. **Project-Level Budgets**: Each department or team project defines a strict `budget_limit`. When cumulative spending (`total_spent`) reaches this ceiling, further agent calls in that project are automatically blocked.
3. **Agent-Level Spending Limits**: Individual agents can be configured with specific spending caps and notification thresholds to prevent runaway loops.
4. **Real-Time Cost Interception**: The `LogAgentInteraction` middleware calculates exact 8-dimensional token costs in real time against verified provider pricing matrices before finalizing the transaction.

---

## 📉 Cost Reduction Strategies

- **Use Deterministic Actionables**: Replace LLM calls for data formatting and database querying with native PHP functions (0 tokens).
- **Conditional Pipeline Skips**: Skip downstream agent analysis steps if data shows no anomalies.
- **Provider-Aware Routing**: Direct routine classification tasks to cost-effective models (e.g. lightweight fast models), reserving flagship frontier models for complex analytical synthesis.
