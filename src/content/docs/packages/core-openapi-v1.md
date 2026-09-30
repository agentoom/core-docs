---
title: "@agentoom/core-openapi-v1"
description: Complete technical reference for the OpenAI-compatible API adapter package.
---

# `@agentoom/core-openapi-v1`

Enables Agentoom to act as a drop-in replacement for OpenAI API endpoints (`/v1/chat/completions`, `/v1/models`).

---

## ⚡ Endpoints & Integration

- **List Models & Agents**: `GET /v1/models`
- **Chat Completions**: `POST /v1/chat/completions`
- **Authentication**: `Authorization: Bearer sk-agt-...`
- **Streaming**: Fully supports Server-Sent Events (`stream: true`) with token-by-token emission and cost accounting.
- **Auditing**: Every request maps to a system trace, user context, and credit deduction.
