---
title: External Privacy Engine (Privacy Pro)
description: Connect Agentoom to the remote Privacy Service microservice for multi-language semantic PII detection.
---

# External Privacy Engine (Privacy Pro)

While `@agentoom/core-privacy` provides fast, local pattern-matching for structured data (emails, credit cards, dates), the optional `@agentoom/core-privacy-pro` package connects your instance to the **Agentoom Privacy Service**.

---

## 🌟 Enhanced Capabilities

- **Multilingual Named Entity Recognition (NER)**: Detects personal names, company names, and addresses across English, Italian, German, Spanish, and French.
- **Context-Dependent Entities**: Understands nuanced sentences where words could be either common verbs or proper family names.
- **Isolated Mapping Store**: Maintains temporary token maps in encrypted Redis memory caches, ensuring absolute isolation between tenants and requests.
- **Microservice Scalability**: Allows your privacy scanning compute to scale horizontally and independently from web application workers.
