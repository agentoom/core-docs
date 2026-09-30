---
title: Pipelines & Workflows
description: Build resilient, multi-step agent pipelines with conditional branching, jump control, and automatic error handling.
---

# Pipelines & Workflows

A **Pipeline** in Agentoom is an automated sequence of steps executed in order (`0 -> N`). Each step can invoke a **deterministic Actionable**, an **AI Agent**, or a **data pass-through transformer**.

---

## ⚡ Pipeline Execution Flow

```
Pipeline Definition (Steps 0..N)
         │
         ▼
   Pipeline Run Created (status: pending)
         │
         ▼
   ┌─────────────────────────────────────┐
   │  For each step (order 0 → N):       │
   │                                     │
   │  ① Load step configuration         │
   │  ② Check conditions (skip if false) │
   │  ③ Execute action:                  │
   │     · Deterministic Actionable      │
   │     · AI Agent Reasoning            │
   │     · Data Pass-Through             │
   │  ④ Evaluate result:                 │
   │     · Success → Advance to next step│
   │     · Error → Continue/Retry/Jump   │
   │     · Stop → Halt with custom status│
   │  ⑤ Record step execution trace      │
   └─────────────────────────────────────┘
         │
         ▼
   Pipeline Run Completed (status: completed)
```

---

## 🔀 Advanced Flow Controls

1. **Conditional Branching**: Steps can check variables using 15 operators (`>`, `<`, `=`, `contains`, `in`, `matches_regex`). If the condition is not met, the step is skipped cleanly.
2. **Jump Control**: Steps can redirect execution backward or forward to a specific step based on runtime conditions (e.g., jump to Step 5 if verification fails).
3. **Data Passing**: Output from previous steps is automatically available via variable interpolation: `$previous_output.field` or `$step_0.result`.
4. **Dedicated Failure Handlers**: If any critical step fails, an optional recovery pipeline executes automatically (e.g., paging on-call engineers via Slack or triggering an email alert).
