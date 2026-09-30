---
title: Credits & Cost Control
description: Manage AI token expenditures, track provider pricing, and enforce strict per-project and per-agent budget limits.
---

# Credits & Cost Control

Running AI models in enterprise environments can lead to surprise bills if left unmonitored. Agentoom provides a transparent, real-time **Credit & Cost Control System** that intercepts every AI request, tracks token consumption, and prevents budget overruns before they happen.

---

## 💰 How Credits Work

1. **Credit Top-Ups**: Projects are allocated a credit balance (e.g., $500 / €500 or custom unit equivalents).
2. **Real-Time Cost Interception**: As an agent generates streaming responses, middleware calculates the input and output token counts against provider pricing tables.
3. **Automatic Deduction**: Credits are subtracted in real time from the project's balance.
4. **Hard Budget Caps**: If an agent hits its configured spending limit, further AI calls are paused immediately, and operators receive an alert.

---

## 📉 Cost Reduction Strategies

- **Use Deterministic Actionables**: Replace LLM calls for data formatting and database querying with native PHP functions (0 tokens).
- **Conditional Pipeline Skips**: Skip downstream agent analysis steps if data shows no anomalies.
- **Provider-Aware Routing**: Direct routine classification tasks to cost-effective models (e.g. lightweight fast models), reserving flagship frontier models for complex analytical synthesis.
