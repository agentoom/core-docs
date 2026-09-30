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

- **Data & Resource Isolation**: Agents, knowledge base documents, and conversation histories are linked to specific projects, keeping team workflows properly segregated.
- **Dedicated System Users**: Every created project automatically provisions an isolated internal system user (`project.{id}.system@agentoom.internal`) to handle background queue tasks and scheduled pipelines under proper attribution.
- **Budget Ceilings & Financial Metering**: Assign a strict `budget_limit` and active start date to each project. Cumulative spending is tracked via `total_spent`, preventing budget overruns by automatically halting further paid API calls when the limit is reached.
- **Team Project Membership**: Administrators assign users to specific projects via the `project_user` association, controlling workspace membership across organizational divisions.
