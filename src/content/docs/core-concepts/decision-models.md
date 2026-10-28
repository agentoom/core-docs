---
title: Decision Models & Filter Gates
description: Learn how Decision Models evaluate states with calibrated confidence probabilities for pipeline branching and inbound webhook filtering.
---

# Decision Models & Filter Gates

Large Language Models excel at generating text and creative synthesis, but evaluating operational conditions (e.g., *"Does this user qualify for immediate escalation?"* or *"Is this inbound payload a duplicate event?"*) requires fast, calibrated, probabilistic judgment rather than long-form token generation.

**Decision Models** in Agentoom provide high-speed, calibrated evaluation returning confidence scores ($0.0 - 1.0$) for boolean assertions (`noul`) and multi-choice selections (`choice`).

---

## ⚡ Key Capabilities

- **Native OpenRouter Decisions API**: Direct integration with specialized decision models (e.g. `typesafe/jev-1.14`, `typesafe/jev-latest`, `liquid/d1.1`) via OpenRouter's `/api/alpha/decisions` endpoint.
- **Universal Calibrated LLM Fallback**: If OpenRouter is unconfigured, or when using providers like OpenAI, Anthropic, Ollama, or Groq, the engine automatically falls back to structured JSON evaluation with calibrated confidence scores.
- **Pipeline Decision Steps**: Dedicated pipeline step type that routes execution dynamically to `next_step_on_true` or `next_step_on_false` based on a configured confidence threshold.
- **Endpoint Filter Gates**: Pre-execution filters on HTTP Endpoints to validate incoming webhook payloads before invoking linked agents or pipelines.
- **Global & Step-Level Overrides**: Set a global default decision model in Admin Settings and the Onboarding Wizard, while retaining the freedom to override the model per pipeline step or endpoint.

---

## 🏗️ Architecture & Dual Execution Mode

```
                          Inbound State / Context
                                     │
                                     ▼
                      ┌─────────────────────────────┐
                      │    DecisionModelService     │
                      └──────────────┬──────────────┘
                                     │
                  Provider is OpenRouter & Has API Key?
                                ╱         ╲
                             YES           NO / Fallback
                             ╱               ╲
                            ▼                 ▼
          ┌───────────────────────────┐   ┌───────────────────────────┐
          │  OpenRouter Decisions API │   │   Universal Structured    │
          │  /api/alpha/decisions     │   │      LLM Evaluation       │
          │  - noul probability       │   │  - strict JSON schema     │
          │  - choice probabilities   │   │  - calibrated confidence  │
          └─────────────┬─────────────┘   └─────────────┬─────────────┘
                        │                               │
                        └───────────────┬───────────────┘
                                        ▼
                         Evaluation Result Object:
                         - passed: bool (confidence >= threshold)
                         - decision: bool | string
                         - confidence: float (0.0000 - 1.0000)
                         - threshold: float
```

### 1. Native OpenRouter Decisions API
When using an OpenRouter provider with decision models (such as TypeSafe JEV), requests are routed to OpenRouter's dedicated Decisions API (`POST /api/alpha/decisions`):
- **`noul` Questions**: Evaluates the probability (between $0.0$ and $1.0$) that the condition described in the instructions is met.
- **`choice` Questions**: Evaluates a closed set of candidate choices, returning a probability distribution across options.

### 2. Universal Calibrated LLM Fallback
If the active provider is not OpenRouter (e.g., OpenAI, Anthropic, Ollama, Google Gemini, Mistral) or if the upstream decisions endpoint is unreachable, `DecisionModelService` automatically prompts the configured model with a strictly constrained JSON schema:

```json
{
  "decision": true,
  "confidence": 0.95,
  "reasoning": "The payload contains a high-priority refund request."
}
```

The parsed confidence is normalized between $0.0$ and $1.0$ and compared against the threshold.

---

## 🔀 Pipeline Decision Steps

Decision steps allow pipelines to branch deterministically based on whether a condition is satisfied with sufficient confidence.

### Step Configuration
When creating or editing a step in the visual diagram editor or form view:
1. **Type**: Select **Decision Model**.
2. **Decision Model**: Pick the synced decision model (or leave blank to use the system default).
3. **Question / Instructions**: The criteria or assertion to evaluate against the input or previous step outputs (e.g., *"Determine if the customer query expresses dissatisfaction or requests a supervisor"*).
4. **Confidence Threshold**: Float value between $0.0$ and $1.0$ (default: `0.80`).
5. **Next Step on True / False**:
   - `next_step_on_true`: Target step order to execute if `confidence >= threshold`.
   - `next_step_on_false`: Target step order to execute if `confidence < threshold` or if the decision is negative.

### Example Flow

```
[Step 0: Receive Webhook] 
          │
          ▼
[Step 1: Decision Step] "Is this an urgent production outage?" (Threshold: 0.85)
          │
     ┌────┴────────────────────────┐
     │                             │
 (True: confidence >= 0.85)    (False: confidence < 0.85)
     │                             │
     ▼                             ▼
[Step 2: PagerDuty Escalation]  [Step 3: Standard Ticket Triage]
```

---

## 🛡️ Endpoint Pre-Execution Decision Filters

Endpoints can be protected by a Decision Filter gate. When an external system (e.g., Stripe, Shopify, GitHub) posts a webhook payload, the decision model evaluates the payload **before** the linked agent or pipeline runs.

### Filter Settings
In **Endpoints > Create / Edit**:
- **Decision Filter Toggle**: Enable or disable the filter gate.
- **Provider & Model**: Choose the evaluation provider and model.
- **Filter Instructions**: Criteria defining acceptable payloads (e.g., *"Verify that the payload represents a confirmed payment and the amount is greater than zero"*).
- **Confidence Threshold**: Minimum confidence required to allow execution (default: `0.80`).
- **Rejection Action**: Action taken if the payload fails the confidence threshold:
  - `skip_200` (Default): Returns HTTP 200 with `status: "filtered"` and records the skip in `EndpointLog`. Execution halts cleanly.
  - `reject_422`: Rejects the request with HTTP 422 Unprocessable Content.
  - `silent_drop`: Returns HTTP 204 No Content without executing downstream workflows.

---

## ⚙️ Default Model Configuration & Onboarding

### Admin Configurations
Under **Admin > Configurations > AI Models**, operators can set the default decision settings:
- **Decision Provider** (`ai_decision_provider`)
- **Decision Model** (`ai_decision_model`)
- **Default Confidence Threshold** (`ai_decision_confidence_threshold`)

### Onboarding Wizard
During initial setup (Step 3: Agents & Models), the Onboarding Wizard presents a dedicated **Decision Model** selector pre-populated with synced decision models.

### Dynamic Fallback Guarantee
If `ai_decision_provider` or `ai_decision_model` is unconfigured, or if the selected provider is removed, [`InjectCurrentAiConfigService::getDecisionConfig()`](file:///home/simone/Documents/Projects/agentoom-core/packages/agentoom/core-main/src/Services/InjectCurrentAiConfigService.php) automatically falls back to the instance's global `ai_provider` and `ai_model`. Your workflows never crash due to a missing decision provider.

---

## 🔄 Discovering Decision Models

To discover and sync available decision models from connected providers:

```bash
# Sync all models including decisions output modality
php artisan providers:sync-models openrouter
```

The sync process automatically queries OpenRouter with `output_modalities=decisions` to index specialized models like TypeSafe JEV alongside standard text models.
