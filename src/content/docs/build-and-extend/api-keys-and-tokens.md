---
title: API Keys & OpenAPI v1 Tokens
description: Create bearer tokens to query Agentoom using standard OpenAI client libraries and SDKs.
---

# API Keys & OpenAPI v1 Tokens

Agentoom includes a drop-in adapter package (`@agentoom/core-openapi-v1`) that makes your agents accessible to any tool designed for OpenAI.

---

## 🔑 Generating an OpenAPI Token

1. In the Command Center, navigate to **Build & Extend > API Keys**.
2. Click **+ New API Key**.
3. Set an optional expiration date and project scope.
4. Copy the generated bearer token (`ag_live_...`).

---

## 💻 Using Existing OpenAI SDKs

You can use the official Python or TypeScript OpenAI libraries by simply pointing `base_url` to your Agentoom instance:

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://your-agentoom-domain.com/v1",
    api_key="ag_live_your_token_here",
)

response = client.chat.completions.create(
    model="agent:3", # Target Agentoom Agent ID
    messages=[
        {"role": "user", "content": "What is our company refund policy?"}
    ],
    stream=True
)

for chunk in response:
    print(chunk.choices[0].delta.content or "", end="")
```
