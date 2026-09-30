---
title: Trust Layer & Privacy (PII Protection)
description: Keep sensitive customer and corporate data safe with multi-layer PII detection, pseudonymization, and AGPII tag replacement.
---

# Trust Layer & PII Anonymization

Sending raw customer Personally Identifiable Information (PII)—such as social security numbers, credit cards, full names, and personal phone numbers—to external third-party AI APIs violates privacy regulations like GDPR, CCPA, and HIPAA.

Agentoom's **Trust Layer** guarantees that private customer data is detected and replaced with temporary pseudonyms *before* it leaves your servers.

![Trust Layer Detection Rules](/images/screenshots/privacy-recognizers.png)

---

## 🔒 The 4-Phase Privacy Pipeline

```
Incoming User Text (contains sensitive PII)
        │
        ▼
┌──────────────────────────┐
│ PHASE 1: AGPII Tag Engine│  Processes internal deterministic privacy tags
└──────────┬───────────────┘  locally without external network dependencies.
           │
           ▼
┌──────────────────────────┐
│ PHASE 2: PII Detection   │  Scans text for:
│                          │  · Regex patterns (emails, IBAN, cards, phones)
│                          │  · Semantic AI entities (names, locations)
└──────────┬───────────────┘
           │
           ▼
┌──────────────────────────┐
│ PHASE 3: Anonymization   │  Replaces sensitive spans with placeholders
│          & Mapping Store │  (e.g., John Doe → [PERSON_1]).
└──────────┬───────────────┘  Stores original/pseudonym mapping securely.
           │
           ▼
Clean Text Sent to AI Model
           │
           ▼
AI Model Generates Response (using [PERSON_1])
           │
           ▼
┌──────────────────────────┐
│ PHASE 4: Reconstruction  │  Reverses placeholders back to original values
│ (Pseudonymization)       │  before presenting the answer to your user.
└──────────────────────────┘
```

---

## 🛡️ Failure Modes & Graceful Degradation

If the remote semantic AI detection engine ever becomes unreachable, administrators can configure one of two operational postures:

1. **`warn_and_continue`**: Logs the degradation and falls back to local regex pattern matching. Suitable for low-risk internal environments.
2. **`warn_and_stop`**: Halts agent execution immediately. Crucial for highly regulated environments (finance, medical, legal) where accidental PII exposure is legally unacceptable.
