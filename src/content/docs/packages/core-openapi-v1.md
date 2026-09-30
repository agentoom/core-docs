---
title: "@agentoom/core-openapi-v1"
description: Complete technical reference for the OpenAI-compatible API adapter package.
---

# `@agentoom/core-openapi-v1`

Enables Agentoom to act as a drop-in replacement for OpenAI API endpoints (`/v1/chat/completions`, `/v1/models`).

---

## ⚡ Integration

- **Route**: `POST /v1/chat/completions`
- **Authentication**: `Authorization: Bearer ag_live_...`
- **Streaming**: Fully supports Server-Sent Events (`stream: true`) with token-by-token emission and cost accounting.
