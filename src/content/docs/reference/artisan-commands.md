---
title: Artisan CLI Commands
description: Reference catalog of Agentoom console commands for maintenance, pricing sync, and worker supervision.
---

# Artisan CLI Commands

Agentoom includes dedicated Laravel Artisan CLI commands to maintain the platform:

---

## 🛠️ Command Catalog

### `php artisan agentoom:sync-ai-pricing`
Fetches the latest official pricing tables (per 1k/1M prompt and completion tokens) from OpenAI, Anthropic, and Google, updating the local database cache.

### `php artisan sentinel:cleanup-authorizations`
Prunes expired OTP tokens and pending authorization requests that have exceeded their timeout window.

### `php artisan compliance:generate-reports`
Runs periodic post-market compliance audits and checks for overdue risk reviews according to EU AI Act schedules.
