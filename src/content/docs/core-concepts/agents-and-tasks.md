---
title: Agents and AI Tasks
description: Learn how agents are constructed at runtime with instructions, registered tools, skills, and knowledge bases.
---

# Agents and AI Tasks

In Agentoom, an **Agent** is an intelligent assistant capable of understanding context, querying documentation, calling external tools, and delivering structured answers.

---

## 🧩 Dynamic Agent Assembly

When an agent executes, Agentoom dynamically composes six components from the database:

```
Agent Definition (Database)
    │
    ├── 1. Instructions     → System prompt defining tone, boundaries, and goals
    ├── 2. Tools            → Callable actions (APIs, email, database, SSH, MCP)
    ├── 3. Skills           → Reusable behavioral presets (Support, Coder, Analyst)
    ├── 4. Knowledge Base   → Ingested documents searchable via semantic embeddings
    ├── 5. Learned Skills   → Patterns discovered by the agent during past executions
    └── 6. Model Config     → AI Provider, model name, temperature, and max tokens
```

---

## 🛠️ Attaching Tools to Agents

Agents can discover and invoke registered tools at runtime. Agentoom includes over 30 built-in tools:
- **Knowledge Search**: Retrieve relevant excerpts from uploaded PDF/Word/Markdown files.
- **Resource Management**: Read and update dynamic structured resources.
- **Email (IMAP/SMTP)**: Read customer inquiries and draft replies.
- **Web Browsing & API Calls**: Fetch public web pages and query external REST endpoints.
- **MCP Tools**: Tools exposed by local or remote Model Context Protocol servers.

---

## 🧠 Version History & Single-Click Rollback

Prompt engineering is an iterative process. Modifying a system prompt, adjusting temperature, or swapping a model parameter can sometimes cause unexpected regressions in factual adherence or formatting.

To make prompt iteration completely safe and compliant with enterprise auditing standards, Agentoom captures an **immutable version snapshot** every time an agent is saved.

---

### 🔍 Where to Find Version History in the Command Center

1. Navigate to **Build & Extend > Agents** in the left sidebar.
2. Click on any existing agent to open the **Edit Agent** form.
3. In the top header next to the agent title, click the **Version History (vX)** button (or click **Version History** in the bottom action bar).

```text
+------------------------------------------------------------------------------------------+
| Edit Agent: Support Specialist                                  [ Version History (v4) ] |
| Edit agent details and prompt instructions                                               |
+------------------------------------------------------------------------------------------+
```

---

### ⏱️ Inspecting Snapshots & Field Diffs

Clicking **Version History** opens an interactive modal displaying:
- **Chronological Timeline**: See every version (`v1`, `v2`, `v3`, `v4`), author identity, exact timestamp, and change notes.
- **Current Version Badge**: Highlights the active configuration currently in production.
- **Inspect Differences**: Click **Inspect** on any past version to view:
  - Side-by-side visual diff comparing modified fields against the current saved state (system prompt instructions, role, objective, operational protocol, error handling, or model parameters).
  - Exact tool additions and removals.
  - Complete snapshot preview.

---

### 🔄 Rolling Back to a Previous Version

If a prompt update introduces an issue:
1. Open the **Version History** modal on the agent edit page.
2. Locate the stable past version you want to restore.
3. Click the **Rollback** button on that row (or from within the inspection diff view).
4. Confirm the confirmation dialog.

Agentoom will:
- Revert all system prompt instructions, role, objective, protocols, model configuration, and attached tool associations to the exact snapshot state.
- Instantly refresh the form in the Command Center.
- Create a new immutable audit entry (e.g. `v5: Rolled back to Version 2`) so the rollback itself is permanently logged for EU AI Act Article 72 compliance.

---

### ✍️ Adding Version Change Notes

When making modifications to an agent:
- At the bottom of the form before saving, use the **Version Notes (Optional)** field (e.g. *"Lowered temperature to 0.2 and enabled cautious constraint"*).
- Your note is saved directly into the snapshot metadata, helping your team understand the reasoning behind each prompt iteration.

