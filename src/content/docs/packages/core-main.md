---
title: "@agentoom/core-main"
description: Complete technical reference for the core Agentoom runtime, execution engine, and database schema.
---

# `@agentoom/core-main`

The foundational package providing the application backbone, agent execution engine, pipeline orchestrator, and multi-tenant resource layer for the Agentoom ecosystem.

---

## 🏗️ Architectural Overview

`@agentoom/core-main` acts as the central runtime hub in the Agentoom monorepo. It manages the lifecycle of AI agents, coordinates background job queues via Redis and Laravel Horizon, executes deterministic actionables, and connects to AI providers with comprehensive 8-dimensional cost metering.

```
+-----------------------------------------------------------+
|                    @agentoom/core-main                    |
|                                                           |
|  +--------------------+   +----------------------------+  |
|  |   Agent Engine     |   |   Pipeline Orchestrator    |  |
|  | - System prompts   |   | - Linear & DAG execution   |  |
|  | - Tools & skills   |   | - Actionable invocations   |  |
|  | - Knowledge bases  |   | - Wait/resume schedules    |  |
|  +--------------------+   +----------------------------+  |
|                                                           |
|  +--------------------+   +----------------------------+  |
|  | Multi-Provider Hub |   | Multi-Tenancy & Financials |  |
|  | - OpenRouter / LLMs|   | - Project isolation        |  |
|  | - Live price sync  |   | - Credit quotas & limits   |  |
|  | - Model discovery  |   | - Audit traces             |  |
|  +--------------------+   +----------------------------+  |
+-----------------------------------------------------------+
```

---

## 🚀 Core Subsystems

### 1. Agent Runtime & Prompt Compiler
- **Dynamic Assembly**: Compiles system instructions, user personas, injected knowledge snippets, and registered tool signatures into compliant provider payloads.
- **Provider Agnostic**: Seamlessly switches underlying models (Anthropic Claude 3.7/3.5, OpenAI o3/o1/4.5, Gemini 2.5, DeepSeek R1, Grok, or local Ollama) without modifying agent business logic.
- **Stateful Memory**: Maintains conversational context across turns while analyzing long-term skills and preferences via background jobs.

### 2. Pipeline Orchestration Plane
- **Linear & Branching Flows**: Chains multiple agents, deterministic PHP actionables, webhook triggers, and human approvals into resilient pipelines.
- **Zero-Token Actionables**: Native PHP classes decorated with `#[AsAiActionable]` execute deterministically without consuming token budgets or introducing non-deterministic latency.
- **Asynchronous Pausing**: Supports durable delays (`resume_at`) and webhook callbacks without blocking queue worker processes.

### 3. Multi-Provider Gateway & Financial Tracking
- **Automated Price Sync**: Keeps local pricing records up to date using `php artisan ai:sync-pricing` (fetching from `litellm` and `models_dev`).
- **8-Dimensional Metering**: Tracks input tokens, output tokens, prompt cache reads, prompt cache writes, reasoning/thinking tokens, audio streams, and image units.
- **Hard Credit Safeguards**: Enforces strict project quotas that halt non-essential execution when budgets are depleted.

### 4. Background Queue Architecture
Managed by **Laravel Horizon**, `@agentoom/core-main` distributes asynchronous workloads across isolated Redis queue pools:
- `default`: General agent tasks and conversational inference.
- `broker`: Event dispatching and webhook delivery.
- `updates`: Asynchronous catalog and model metadata synchronization.
- `telemetry`: High-throughput metric aggregation and trace recording.
- `backups`: Long-running data archival and export package compilation.

---

## 🛠️ Key Artisan Commands

| Command | Purpose |
|---|---|
| `php artisan agentoom:install` | Initializes default roles, system permissions, and supported languages |
| `php artisan agentoom:discover-tools` | Scans and registers native PHP actionables into the tool catalog |
| `php artisan providers:sync-models` | Discovers available models from configured AI providers |
| `php artisan ai:sync-pricing` | Fetches live pricing matrices from verified industry catalogs |
| `php artisan ai:aggregate-metrics` | Generates hourly metric rollups for Command Center graphs |
| `php artisan schedules:dispatch` | Evaluates and triggers cron-based agent tasks |

