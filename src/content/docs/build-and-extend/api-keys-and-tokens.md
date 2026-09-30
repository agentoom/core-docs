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
3. Configure the token details:
   - **Name**: A descriptive label (e.g., `Cursor Integration` or `Production Backend Client`).
   - **Assigned User**: Select the user context whose permissions and AI credit quota will apply.
   - **Allowed Domains / IPs (Optional)**: Restrict API usage to specific hostnames or IP addresses.
   - **Status**: Toggle active/inactive.
4. Copy the generated bearer token (`sk-agt-...`). For security, the full secret key is only displayed once upon creation.

---

## 💻 Using Existing OpenAI SDKs

You can use the official Python or TypeScript OpenAI libraries by simply pointing `base_url` to your Agentoom instance:

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://your-agentoom-domain.com/v1",
    api_key="sk-agt-your_token_here",
)

# 1. List available agents and models
models = client.models.list()
for model in models:
    print(f"- {model.id} ({model.owned_by})")

# 2. Chat with an agent
response = client.chat.completions.create(
    model="agent:3", # Target Agentoom Agent ID or alias
    messages=[
        {"role": "user", "content": "What is our company refund policy?"}
    ],
    stream=True
)

for chunk in response:
    print(chunk.choices[0].delta.content or "", end="")
```
