---
title: "@agentoom/core-privacy"
description: Complete technical reference for the local PII replacement and AGPII tag processing package.
---

# `@agentoom/core-privacy`

Provides local PII detection, regex pattern evaluators, and session-scoped pseudonymization mapping stores.

---

## 🔒 Key Classes

- `AgpiiTagProcessor`: Local, zero-latency processor for deterministic privacy tags.
- `DeterministicPiiDetector`: Regex recognizers for emails, IBAN, credit cards, and phone numbers.
- `MappingStore`: Secure, isolated storage maintaining original-to-placeholder mappings.
- `Pseudonymizer`: Replaces placeholders back to original values after AI model completion.
