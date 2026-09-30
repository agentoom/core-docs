---
title: Quickstart Guide
description: Learn how to set up your first AI agent in Agentoom in under 5 minutes with a beginner-friendly walkthrough.
---

import { Steps, Aside, Badge } from '@astrojs/starlight/components';

# Quickstart: Your First Agent in 5 Minutes

Welcome to Agentoom! This guide walks you through creating your first autonomous AI agent, attaching tools and knowledge to it, and initiating a governed chat session.

No coding is required for this walkthrough. Everything is managed directly through the Agentoom Command Center.

---

## 📋 Prerequisites

Before starting, ensure you have:
1. An active Agentoom instance (self-hosted or cloud-managed).
2. An administrator account.
3. At least one AI Provider configured (e.g. OpenAI, Anthropic, or local Ollama).

---

## 🚀 Step-by-Step Walkthrough

<Steps>

1. ### Access the Command Center

   Open your browser and navigate to your Agentoom URL (e.g., `https://devcore.agentoom.com/admin/dashboard`). Sign in with your credentials.

   ![Agentoom Command Center Dashboard](/images/screenshots/dashboard.png)

   Upon logging in, you will be greeted by the **Command Center Dashboard**. Here you can see your active agents, pipeline counters, available AI credits, and system health status.

2. ### Navigate to the Agents Page

   Click on **Agents** in the top navigation bar, or select **Agents** from the Quick Links on your dashboard.

   ![Agent Management Overview](/images/screenshots/agents.png)

   The Agents page displays all currently configured digital assistants. Click the blue **+ New Agent** button in the upper-right corner.

3. ### Configure Your Agent

   Fill out the simple setup form:
   - **Name**: Give your agent a distinct role (e.g., `Customer Support Specialist` or `Data Analyst`).
   - **System Instructions**: Tell the agent how it should behave, its tone, and its domain boundaries:
     ```text
     You are a helpful customer support agent for our company. 
     Always respond politely and ground your answers in the provided knowledge base.
     ```
   - **Model Provider & Name**: Choose your preferred model provider (e.g., OpenRouter gateway, Anthropic: `claude-3-7-sonnet`, OpenAI: `o3-mini`, Google: `gemini-2.5-flash`, DeepSeek: `deepseek-r1`, or local Ollama).
   - **Temperature**: Set to `0.3` for consistent, factual responses.

   Click **Save Agent**.

4. ### Attach Knowledge Documents (Optional)

   To ground your agent in your business data:
   - In the agents table, find your newly created agent and click **Manage Knowledge**.
   - Upload a PDF, Markdown, or text file (e.g., your company FAQ or product manuals).
   - Agentoom automatically processes and semantically indexes the document in the background.

5. ### Start a Governed Chat Session

   Click **Chat** in the top navigation bar. Select your agent from the dropdown and type your first message:
   ```text
   Hello! Can you summarize our support refund policy?
   ```

   Watch as the response streams back token-by-token in real time. Behind the scenes:
   - **Trust Layer** checks that no sensitive personal data (credit cards, personal phone numbers) is exposed.
   - **Sentinel** verifies that any tools called meet your company's security policies.
   - **Audit Engine** signs the interaction with a cryptographic trace ID.

</Steps>

---

## 🔍 Where to Go Next?

Now that your first agent is running, explore the core capabilities of Agentoom:

- [User Interface Tour](/getting-started/user-interface-tour/): Discover every feature in the top bar and sidebar.
- [Multi-Step Pipelines](/core-concepts/pipelines-and-workflows/): Chain multiple agents and deterministic Actionables together.
- [Sentinel Security Rules](/govern/sentinel-security-buffer/): Set up OTP email approvals before agents execute sensitive tools.
- [EU AI Act Compliance](/govern/eu-ai-act-compliance/): Understand how Agentoom automates compliance reporting.
