---
title: Pipelines & Workflows
description: Build resilient, multi-step agent pipelines with conditional branching, jump control, and automatic error handling.
---

# Pipelines & Workflows

A **Pipeline** in Agentoom is an automated sequence of steps executed in order (`0 -> N`). Each step can invoke a **deterministic Actionable**, an **AI Agent**, a **Decision Model**, or a **data pass-through transformer**.

---

## ⚡ Pipeline Execution Flow

```
Pipeline Definition (Steps 0..N)
         │
         ▼
   Pipeline Run Created (status: pending)
         │
         ▼
   ┌───────────────────────────────────────────────┐
   │  For each step (order 0 → N):                 │
   │                                               │
   │  ① Load step configuration                   │
   │  ② Check conditions (skip if false)           │
   │  ③ Execute action / evaluation:               │
   │     · Deterministic Actionable                │
   │     · AI Agent Reasoning                      │
   │     · Decision Model Evaluation               │
   │     · Data Pass-Through                       │
   │  ④ Evaluate result:                           │
   │     · Decision → Branch on confidence         │
   │     · Success → Advance to next step          │
   │     · Error → Continue/Retry/Jump             │
   │     · Stop → Halt with custom status          │
   │  ⑤ Record step execution trace                │
   └───────────────────────────────────────────────┘
         │
         ▼
   Pipeline Run Completed (status: completed)
```

---

## 🔀 Advanced Flow Controls

1. **Conditional Branching**: Steps can check variables using 15 operators (`>`, `<`, `=`, `contains`, `in`, `matches_regex`). If the condition is not met, the step is skipped cleanly.
2. **Decision Model Routing**: Specialized Decision steps evaluate input or prior outputs against calibrated probability criteria (`noul` or `choice`). Execution branches to `next_step_on_true` when confidence meets or exceeds the threshold, or to `next_step_on_false` otherwise. See [Decision Models & Filter Gates](/core-concepts/decision-models) for details.
3. **Jump Control**: Steps can redirect execution backward or forward to a specific step based on runtime conditions (e.g., jump to Step 5 if verification fails).
4. **Data Passing**: Output from previous steps is automatically available via variable interpolation: `{previous_output}`, `{1.status}`, or `{2.field}`.
5. **Granular Error Handling**: Configure how each step handles unexpected failures: automatically retry with exponential backoff (`retry`), pass the error message to the next step (`continue`), or dynamically divert execution to an alternative remediation step (`jump`).
