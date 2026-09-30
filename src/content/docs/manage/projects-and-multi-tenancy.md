---
title: Projects & Multi-Tenancy
description: Isolate teams, data, billing, and governance profiles across organizational departments with Projects.
---

# Projects & Multi-Tenancy

In an enterprise environment, different departments (Customer Support, Finance, Engineering, Legal) have distinct data boundaries, security requirements, and budget constraints.

**Projects** provide hard isolation boundaries across the entire Agentoom ecosystem.

![Projects Overview in the Command Center](/images/screenshots/projects.png)

---

## 🏢 Project Isolation Boundaries

When an agent, pipeline, or document belongs to a project:

- **Data Privacy**: Knowledge base documents and conversation histories in Project A cannot be accessed by Project B.
- **Budget & Billing**: Credit balances, top-ups, and expense reports are calculated independently per project.
- **Governance Profiles**: Project A (Finance) can enforce **Enhanced Governance** requiring OTP for all tool calls, while Project C (R&D) can use **Basic Governance** for rapid prototyping.
- **Role-Based Access**: Users can be granted *Admin* privileges in one project while remaining read-only *Viewers* in another.
