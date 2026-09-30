---
title: OpenAPI v1 Endpoints
description: Endpoint contract and payload schemas for the OpenAI-compatible gateway.
---

# OpenAPI v1 Endpoints

Agentoom exposes OpenAI-compliant endpoints to interact with agents and models.

## `GET /v1/models`

Lists all active agents and model targets available to the authenticated API key.

### Headers
- `Authorization: Bearer <sk-agt-...>`

### Response (`200 OK`)
```json
{
  "object": "list",
  "data": [
    {
      "id": "support-specialist",
      "object": "model",
      "created": 1727680000,
      "owned_by": "agentoom"
    },
    {
      "id": "data-analyst",
      "object": "model",
      "created": 1727685000,
      "owned_by": "agentoom"
    }
  ]
}
```

---

## `POST /v1/chat/completions`

Generates an AI agent completion for a multi-turn conversation.

### Headers
- `Authorization: Bearer <sk-agt-...>`
- `Content-Type: application/json`

### Body Parameters
- `model` *(string, required)*: The Agentoom agent slug (e.g. `support-specialist`) or agent ID (e.g. `agent:3`).
- `messages` *(array, required)*: Array of message objects (`role` and `content`).
- `stream` *(boolean, optional)*: If `true`, streams tokens using standard Server-Sent Events (SSE).
- `temperature` *(float, optional)*: Sampling temperature override (e.g. `0.3`).

### Response (`200 OK` - Non-Streaming)
```json
{
  "id": "chatcmpl-9x8f2...",
  "object": "chat.completion",
  "created": 1727689200,
  "model": "support-specialist",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Our return policy allows items to be refunded within 30 days."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 124,
    "completion_tokens": 18,
    "total_tokens": 142
  }
}
```
