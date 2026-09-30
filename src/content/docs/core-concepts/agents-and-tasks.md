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

## 🧠 Version History & Immutability

Every modification made to an agent's instructions, model parameters, or attached tools creates an **immutable version snapshot**. 

If a newly edited prompt degrades response quality or fails an internal evaluation, operators can rollback to any previous version with a single click in the Command Center.
