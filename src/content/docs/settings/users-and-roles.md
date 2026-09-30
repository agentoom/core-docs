---
title: Users, Roles & Access Control
description: Manage team members, configure Role-Based Access Control (RBAC), and assign project permissions.
---

# Users, Roles & Access Control

Agentoom implements granular Role-Based Access Control (RBAC) via standard permissions.

---

## 👥 Default Seeded Roles

During system installation (`php artisan agentoom:install`), Agentoom creates four foundational roles:

- **`superadmin`**: Unrestricted administrative access across all tenant configurations, system AI workers, security rules, and user accounts.
- **`admin`**: Full operational rights to create and edit agents, orchestrate pipelines, manage endpoints, configure MCP servers, and assign project members.
- **`user`**: Standard role authorized to interact with assigned agents, run approved workflows, inspect chat logs, and connect third-party OAuth integrations.
- **`registered`**: Baseline role assigned to newly created or invited users pending role assignment and permission grants.

---

## 🛡️ Custom Roles & Granular Permissions

Organizations can define custom roles tailored to specific operational profiles (such as *Compliance Officer*, *Live Support Operator*, or *Read-Only Auditor*) in **Manage > Roles**:

1. Click **+ New Role** and provide a title.
2. Select individual permissions across modules (e.g., `agents.view`, `live-support.view`, `compliance.manage`, `sentinel.rules`).
3. Assign users to one or multiple roles to enforce least-privilege governance.
