---
title: System Workers & Maintenance
description: Monitor queue worker processes via Laravel Horizon, run scheduled prune tasks, and manage data retention.
---

# System Workers & Maintenance

Agentoom delegates background tasks, model streaming, and pipeline steps to dedicated Redis queue workers managed by **Laravel Horizon**.

---

## 🤖 System AI Worker Configuration

In **Settings > System > System Workers**, administrators configure autonomous background agents that support platform operations:

1. **Memory Worker Agent**:
   - Selected agent responsible for background semantic analysis (`agentoom:analyze-memory`).
   - Automatically extracts user profiles, communication preferences, and recurring task successes into persistent agent skills.
2. **Specialized AI Agents**:
   - **Summarizer Agent**: Automatically generates semantic summaries for uploaded knowledge files to enhance RAG retrieval precision while minimizing token footprint.

---

## ⚡ Queue Worker Supervision (Laravel Horizon)

Asynchronous AI tasks, streaming completions, and multi-step pipeline executions run in Redis-backed queue pools supervised by **Laravel Horizon**:

- **Queue Pools**:
  - `default`: Conversational execution and primary agent reasoning steps.
  - `broker`: Event subscriptions, webhook deliveries, and instant messaging bridges.
  - `updates`: AI provider model catalog and pricing synchronizations.
  - `telemetry`: High-throughput metric aggregation and cryptographic trace recording.
- **Horizon Dashboard**:
  - Administrators can access the real-time Horizon console directly at `/horizon` to inspect queue throughput, active workers, runtime memory, and failed jobs.

---

## 🧹 Maintenance & Data Hygiene Commands

Run scheduled maintenance via the Artisan CLI:

```bash
# Clean up expired OTP tokens and timed-out authorization requests
php artisan agentoom:security-cleanup

# Delete conversation records exceeding your retention policy (GDPR compliance)
php artisan ai:prune-conversations

# Synchronize pricing tables from verified industry catalogs
php artisan ai:sync-pricing
```
