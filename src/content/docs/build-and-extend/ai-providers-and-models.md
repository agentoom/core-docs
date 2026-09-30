---
title: AI Providers & Model Ecosystem
description: Comprehensive guide to AI providers supported in Agentoom (September 2026), including OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, xAI, Groq, Mistral, Bedrock, Azure, and local inference.
---

import { Badge, Card, CardGrid } from '@astrojs/starlight/components';

# AI Providers & Model Ecosystem

Agentoom is designed with a **strictly model-agnostic architecture**. Rather than locking you into specific model versions, Agentoom allows you to use **every latest text, conversational, reasoning, and multimodal model released by any AI provider**.

Whenever an AI laboratory drops a new model—whether the newest frontier generations from OpenAI, Anthropic, Google DeepMind, DeepSeek, xAI, or open-weights releases—you can deploy it in Agentoom immediately without waiting for platform updates or code changes.

---

## ⚡ Key Architectural Advantages

- **Zero Hardcoding**: Agentoom never restricts you to a fixed list of models. Any valid model identifier accepted by an upstream provider can be assigned to your agents.
- **Dynamic Model Discovery**: Run a single console command to query your connected providers' live APIs and automatically populate your catalog with their newest models.
- **Automated Multi-Dimensional Pricing**: Keep cost tracking accurate with automated feeds that pull live rates across 8 distinct billing dimensions from global catalogs (`litellm` and `models_dev`).
- **Unified Gateway or Direct APIs**: Connect directly to your favorite AI labs or route through unified gateways like OpenRouter to access hundreds of models with automated failover and single-invoice billing.

---

## 🌐 Supported Provider Ecosystem & Gateways

Agentoom provides pre-built, production-tested connectors for the entire industry landscape:

### 1. OpenRouter (Unified Model Gateway)
- **Best For**: Centralized access to over 300+ models with automated fallback routing and zero vendor lock-in.
- **Capabilities**: Connect once with a single API key to access every major lab (OpenAI, Anthropic, Google, Meta, DeepSeek, Qwen, Mistral, and more). If a primary provider suffers an outage or hits rate limits, OpenRouter automatically reroutes traffic to an alternative healthy endpoint.

### 2. OpenAI
- **Capabilities**: Full support for all current and upcoming OpenAI models:
  - **Frontier Flagship & Conversational Models**: Latest GPT generations for advanced multimodal understanding, high-instruction adherence, and complex tool calling.
  - **Reasoning Models (o-Series)**: Advanced step-by-step chain-of-thought models designed for deep mathematical, algorithmic, and scientific problem-solving.
  - **Multimodal & Realtime Audio**: Low-latency voice-to-voice streaming and vision analysis.

### 3. Anthropic
- **Capabilities**: Full support for the entire Claude model family:
  - **Hybrid Reasoning & Extended Thinking**: Configurable thinking budgets that allow models to deeply reflect before responding.
  - **Prompt Caching**: Native support for Anthropic's prompt cache, discounting input token costs by up to **90%** on long system prompts and knowledge files.
  - **Tiered Performance**: From lightning-fast Haiku classification to high-intelligence Sonnet and Opus models.

### 4. Google DeepMind & Vertex AI
- **Capabilities**: Full support for Google's Gemini family:
  - **Massive Context Windows**: Process million-token document archives, entire codebases, or long audio/video files in a single prompt.
  - **Native Multimodality**: Direct understanding of text, images, audio, and video without external preprocessing.
  - **Enterprise Cloud Deployment**: Connect via direct Google AI Studio keys or private Google Cloud Vertex AI infrastructure.

### 5. DeepSeek
- **Capabilities**: Full support for DeepSeek's open-weights and API models:
  - **R-Series Reasoning**: State-of-the-art open reasoning models offering math and coding performance comparable to proprietary frontier models at a fraction of the cost.
  - **V-Series & MoE**: High-capacity Mixture-of-Experts architectures providing cost-effective conversational intelligence.

### 6. xAI
- **Capabilities**: Native connector for xAI's Grok model suite:
  - **Real-Time Knowledge & Search**: Access models with built-in web grounding and up-to-the-minute information.
  - **Multimodal Reasoning**: Advanced document and image analysis with strong coding capabilities.

### 7. Groq & Cerebras (Ultra-Low-Latency Silicon Gateways)
- **Capabilities**: Specialized hardware (LPUs and wafer-scale engines) delivering unprecedented generation speeds:
  - **Extreme Throughput**: Generates hundreds of tokens per second on open-weights models (such as Llama and Qwen).
  - **Ideal Use Cases**: Voice conversations, interactive chat widgets, and high-volume background data transformation pipelines.

### 8. Mistral AI & Cohere
- **Capabilities**:
  - **Mistral AI**: European data sovereignty, high-efficiency models, and specialized multilingual reasoning.
  - **Cohere**: Enterprise-grade retrieval-augmented generation (RAG), native citation grounding, and industry-standard reranking models.

### 9. Enterprise Cloud VPCs (AWS Bedrock & Azure OpenAI)
- **Capabilities**:
  - **Amazon Bedrock**: Deploy Claude, Llama, and Amazon models inside private AWS VPCs with IAM role authorization and HIPAA/SOC2 compliance.
  - **Microsoft Azure OpenAI**: Dedicated OpenAI instances running in your corporate Azure subscription with private networking and regional data boundaries.

### 10. Local, Air-Gapped & Custom OpenAI-Compatible
- **Capabilities**:
  - **Engines**: **Ollama**, **vLLM**, **LocalAI**, **TGI (Text Generation Inference)**, or custom self-hosted inference servers.
  - **Protocol**: Any server that exposes the standard `/v1/chat/completions` API can be added as a custom provider in Agentoom.
  - **Air-Gapped Privacy**: Deploy entirely offline for defense, healthcare, and sensitive enterprise environments where zero data may leave internal infrastructure.

---

## 🔄 Dynamic Model & Pricing Synchronization

To keep your Agentoom installation automatically aware of new models and changing tariffs, run the built-in Artisan maintenance commands:

### Discover & Register New Models
```bash
# Query all configured providers for newly released models
php artisan providers:sync-models

# Query a specific provider (e.g. openrouter, openai, anthropic)
php artisan providers:sync-models openrouter
```

### Sync Real-Time Multi-Dimensional Pricing
```bash
# Pull verified pricing matrices from global catalogs (litellm and models_dev)
php artisan ai:sync-pricing

# Force an immediate refresh ignoring conditional HTTP cache headers
php artisan ai:sync-pricing --force
```

---

## 💰 8-Dimensional Cost Metering

Agentoom does not rely on simple token estimations. Every model invocation is metered across eight distinct technical dimensions in the database table `ai_model_pricings`:

| Dimension | Description |
|---|---|
| `input` | Prompt tokens transmitted to the model (system instructions, persona, and history) |
| `output` | Completion tokens generated by the model |
| `cache_read` | Tokens retrieved from provider cache (discounted up to 90% by Anthropic, Gemini, OpenAI) |
| `cache_write` | Initial fee for committing prompt context to provider cache |
| `reasoning` | Internal chain-of-thought tokens produced by reasoning models |
| `audio_input` | Audio stream units ingested during real-time voice interactions |
| `audio_output` | Synthetic speech tokens returned directly by voice agents |
| `image_price` | Resolution-based charge for image analysis or generation |

---

## 🎛️ How to Use Any New Model in 3 Steps

You never have to wait for an Agentoom update to start using a newly released model:

1. **Configure or Verify Provider**: Go to **Build & Extend > Providers** in the Command Center and ensure your API key or endpoint is active.
2. **Assign the Model to an Agent**:
   - In **Agents**, open any agent's configuration.
   - Select your provider, then pick the model from the synced dropdown or **type any model identifier directly** into the input field.
3. **Save & Test**: Click **Save Agent**. Your agent is immediately powered by the new model, governed by Sentinel security rules, and tracked in project financial ledgers.

