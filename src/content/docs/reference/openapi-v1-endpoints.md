---
title: OpenAPI v1 Endpoints
description: Endpoint contract and payload schemas for the OpenAI-compatible gateway.
---

# OpenAPI v1 Endpoints

Agentoom exposes OpenAI-compliant endpoints to interact with agents and models.

---

## `POST /v1/chat/completions`

Generates a model response for a conversation.

### Headers
- `Authorization: Bearer <token>`
- `Content-Type: application/json`

### Body Parameters
- `model` *(string, required)*: The Agentoom agent identifier (e.g. `agent:3` or specific model alias).
- `messages` *(array, required)*: Conversation history.
- `stream` *(boolean, optional)*: If `true`, returns Server-Sent Events (SSE).
- `temperature` *(float, optional)*: Sampling temperature.
