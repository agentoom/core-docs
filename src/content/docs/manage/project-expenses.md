---
title: Project Expenses & Financial Reports
description: Review historical credit consumption, model cost breakdowns, and export accounting statements.
---

# Project Expenses & Financial Governance

In modern enterprise AI systems, unmonitored model invocation can lead to unpredictable cloud expenses. Agentoom eliminates billing surprises by treating every token, cache read, audio stream, and tool call as a **strictly metered transaction** tied to projects, organizations, and compliance logs.

---

## 📊 Overview: Enterprise AI Financial Governance

Agentoom tracks resource consumption with down-to-the-penny accuracy across all connected providers:
- **Real-Time Metering**: Calculate costs dynamically for every request based on the latest token pricing.
- **Granular 8-Dimensional Accounting**: Model billing is not just "prompt vs completion". Agentoom records input, output, prompt caching (read/write), reasoning/thinking tokens, multimodal audio, and image compute.
- **Hard Credit Safeguards**: Enforce project-level credit caps that automatically pause agents before debts occur.
- **Auditable Financial Trails**: Every transaction links to a specific agent trace, user identity, and EU AI Act compliance log.

---

## 💰 The 8 Tracked Cost Dimensions

Agentoom's database table `ai_model_pricings` records model tariffs across eight distinct technical dimensions:

| Dimension | Description | Typical Industry Rate Trend |
|---|---|---|
| **Input Tokens** | Base prompt, system instructions, and RAG context sent to the model | Standard base rate per 1M tokens |
| **Output Tokens** | Generated response tokens produced by the model | Usually 3× to 5× higher than input |
| **Cache Read Tokens** | Prompt tokens retrieved from provider caches (e.g. Anthropic, OpenAI, Gemini) | Discounted by up to **80%–90%** |
| **Cache Write Tokens** | Initial token submission fee to write large contexts into provider caches | Modest 1.25× surcharge on first call |
| **Reasoning Tokens** | Hidden chain-of-thought tokens used by reasoning models (OpenAI o3/o1, DeepSeek R1, Claude 3.7 Extended Thinking) | Billed at output token rates |
| **Audio Input** | Real-time audio stream ingested for multimodal speech models | Billed per minute or per audio token |
| **Audio Output** | Synthetic speech returned directly by speech-to-speech agents | Billed per output audio unit |
| **Image Units** | Multimodal image frames analyzed or generated | Billed per image resolution tier |

---

## 🌐 Multi-Provider Cost Matrix

Whether your agents route through the unified **OpenRouter** gateway, direct frontier APIs (**Anthropic, OpenAI, Google DeepMind**), ultra-fast hardware (**Groq, Cerebras**), or private clouds (**AWS Bedrock, Azure OpenAI**), Agentoom consolidates all expenses into a unified dashboard:

1. **Gateway Providers**: 
   - **OpenRouter**: Access 300+ models with consolidated billing, per-model margin tracking, and automated fallback routes.
2. **Direct Frontier Providers**: 
   - **OpenAI**: Track reasoning tokens for `o3-mini`, `o1`, and multimodal inputs for `gpt-4.5` and `gpt-4o`.
   - **Anthropic**: Monitor prompt caching efficiency on `claude-3-7-sonnet` and extended thinking token budgets.
   - **Google Gemini & Vertex AI**: Track 2M+ context window economics on `gemini-2.5-pro` and `gemini-2.5-flash`.
   - **DeepSeek & xAI**: Monitor budget reasoning with `deepseek-r1`, `deepseek-v3`, and `grok-3`.
3. **Low-Latency Silicon Gateways**: 
   - **Groq & Cerebras**: Track ultra-fast token streams on open weights (e.g., Llama 3.3 70B, Qwen 2.5).
4. **Enterprise Cloud VPCs**:
   - **AWS Bedrock & Microsoft Azure**: Attribute corporate cloud commitments directly to internal department projects.
5. **Zero-Token Local Execution**:
   - **Ollama & vLLM**: On-premise open-source models show $0 token API costs, tracking purely execution latency and hardware capacity.
   - **Deterministic Actionables**: Native PHP business logic executes with **zero AI token consumption**.

---

## 🔄 Automated Pricing Synchronization

Model prices fluctuate rapidly. Instead of requiring manual updates, Agentoom provides automated catalog synchronization:

```bash
# Sync verified pricing tables from maintained catalogs (litellm and models_dev)
php artisan ai:sync-pricing

# Force update regardless of HTTP caching headers
php artisan ai:sync-pricing --force
```

This console command updates base rates for hundreds of model aliases in seconds, ensuring your expense dashboard always reflects current market prices.

---

## 🛡️ Project Budgets & Safe Limits

To prevent runaway loops or unexpected team expenses:
1. **Assign Credit Allocations**: Give each project a monthly or lifetime credit balance in **Manage > Projects**.
2. **Configurable Threshold Alerts**: Receive automatic notifications when a project reaches 75%, 90%, and 100% of its budget.
3. **Automatic Task Interception**: When a project runs out of credits, Agentoom safely suspends non-essential agent tasks while preserving chat history and pipeline state.

---

## 📑 Accounting Statements & Exports

For accounting and finance teams, Agentoom provides one-click exportable statements:
- **CSV Data Dumps**: Raw transaction rows with timestamp, project ID, agent name, provider, model name, tokens by dimension, and total cost in cents.
- **PDF Summaries**: Executive-ready financial summaries showing monthly burn rate, top 5 consuming workflows, and prompt cache savings.
- **EU AI Act Cost Attribution**: Cross-reference high-risk AI system operating costs with their Article 72 post-market compliance logs.

