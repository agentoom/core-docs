---
title: System Workers & Maintenance
description: Monitor queue worker processes via Laravel Horizon, run scheduled prune tasks, and manage data retention.
---

# System Workers & Maintenance

Agentoom delegates background tasks, model streaming, and pipeline steps to dedicated Redis queue workers managed by **Laravel Horizon**.

---

## ⚙️ Worker Supervision

In **Settings > System > System Workers**:
- Inspect queue depths across `default`, `broker`, `updates`, `backups`, and `telemetry`.
- Monitor worker memory limits and auto-scaling process pools.
- Trigger maintenance commands (such as synchronizing AI model pricing tables or pruning old execution traces according to GDPR data retention schedules).
