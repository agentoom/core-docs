---
title: Glossary of Key Terms
description: A plain-English dictionary of core concepts and terminology across the Agentoom ecosystem.
---

# Glossary of Key Terms

To help less-technical users and new team members navigate the platform, here is a simple reference guide to the terms used across Agentoom.

---

### Agent
An autonomous software assistant powered by an AI Large Language Model (LLM). An agent combines **system instructions** (defining its personality and role), **knowledge bases** (documents it can read), and **tools** (actions it can take).

### Actionable
A deterministic PHP code function (annotated with `#[Actionable]`) that executes directly without calling an AI model. Actionables are used for data retrieval, math, database updates, and external API requests. They cost **zero AI tokens** and produce 100% predictable output.

### Sentinel
The mandatory security buffer in Agentoom. Sentinel sits in the code execution path between the AI agent and sensitive tools. When an agent attempts an action that could impact real-world data (such as sending an email or executing a transaction), Sentinel pauses the operation and requires human authorization (via OTP code or verbal chat confirmation).

### GovernanceGate
A pre-execution policy checker. Before an agent runs, the GovernanceGate verifies that the agent has been properly classified, that its assigned risk tier does not exceed the project's governance profile, and that no emergency stops or unresolved decisions are blocking it.

### EU AI Act (European Union Artificial Intelligence Act)
A landmark European regulation establishing risk-based legal rules for AI systems. Agentoom includes built-in compliance tooling for the EU AI Act, including Article 72 post-market monitoring, risk tier assessment wizards, and auditor-ready export packages.

### PII (Personally Identifiable Information)
Sensitive personal information such as full names, email addresses, credit card numbers, phone numbers, and physical addresses. 

### AGPII Tag Engine & Privacy Service
Agentoom's privacy protection layer. It detects PII in user prompts, replaces it with temporary placeholders before sending the text to third-party AI models (like OpenAI or Anthropic), and reverses the placeholders in the final response. Your customers' private data never leaves your infrastructure.

### Pipeline
A sequence of chained steps where the output of one step feeds into the next. Pipelines can combine both intelligent AI agent steps and deterministic Actionable steps, along with conditional branching (e.g., "if sentiment is negative, jump to step 4").

### Schedule
An automated timer (using cron syntax) that triggers a pipeline at scheduled dates and times without human intervention.

### Endpoint
A secure HTTP webhook URL provided by Agentoom. External software (like your CRM, website, or backend system) can send a POST request to this URL to trigger an agent or pipeline in the background.

### MCP (Model Context Protocol)
An open industry standard that allows AI agents to connect to external databases, tools, and servers using a standardized client-server protocol.

### HITL (Human-in-the-Loop)
An operational model where an AI agent cannot complete a sensitive decision on its own; a human supervisor must review, approve, reject, or override the action before it takes effect.

### Emergency Stop
A master kill-switch available in the Command Center. If an agent misbehaves or an external service fails, an operator can trigger an Emergency Stop to halt all ongoing actions and block future runs immediately.

### `AiAgentTrace`
An immutable, cryptographically hashed audit record captured for every agent interaction. It records every step, every tool invocation with hashed arguments, token counts, and latency, allowing auditors to reconstruct the entire AI decision path.
