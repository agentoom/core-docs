---
title: Artisan CLI Commands
description: Reference catalog of Agentoom console commands for maintenance, pricing sync, and worker supervision.
---

# Artisan CLI Commands

Agentoom includes dedicated Laravel Artisan CLI commands for system initialization, catalog synchronization, queue supervision, and EU AI Act compliance checks.

---

## 🛠️ Command Catalog

### System & Discovery

#### `php artisan agentoom:install`
Initializes the Agentoom environment, creating default user roles (`superadmin`, `admin`, `user`, `registered`), seeding supported languages, and preparing system tables.

```bash
php artisan agentoom:install
```

#### `php artisan agentoom:create-resources`
Creates standard system agents, foundational pipelines, and common skills. Supports selective imports using flags:

```bash
php artisan agentoom:create-resources --agents
php artisan agentoom:create-resources --pipelines
php artisan agentoom:create-resources --skills
```

#### `php artisan agentoom:discover-tools`
Scans the `Agentoom\Core\Ai\Tools` namespace and registers all available PHP actionables and tools into the database for agent consumption.

```bash
php artisan agentoom:discover-tools
```

#### `php artisan agentoom:create-missing-project-system-users`
Ensures every project has a corresponding dedicated system user for executing automated background jobs and scheduled pipelines.

```bash
php artisan agentoom:create-missing-project-system-users
```

---

## 🤖 AI Models & Pricing

#### `php artisan providers:sync-models {provider?}`
Connects to configured AI providers (OpenRouter, OpenAI, Anthropic, Google DeepMind, DeepSeek, xAI, Groq, Mistral, Bedrock, Azure) and synchronizes their active model catalogs into the Agentoom database.

```bash
# Sync models across all configured providers
php artisan providers:sync-models

# Sync models for a specific provider by name or ID
php artisan providers:sync-models openrouter
php artisan providers:sync-models anthropic
```

#### `php artisan ai:sync-pricing {source?} {--force}`
Fetches verified per-token and multimodal pricing tables from maintained catalogs (`litellm` and `models_dev`). Updates all 8 cost dimensions (input, output, cache read/write, reasoning, audio, image) in the local database.

```bash
# Sync pricing from default catalogs
php artisan ai:sync-pricing

# Sync specifically from models_dev or litellm
php artisan ai:sync-pricing models_dev

# Force refresh ignoring conditional cache headers
php artisan ai:sync-pricing --force
```

#### `php artisan ai:aggregate-metrics {--hour=}`
Aggregates hourly token consumption, model latencies, and financial credits into analytics snapshots for the Command Center.

```bash
php artisan ai:aggregate-metrics
php artisan ai:aggregate-metrics --hour="2026-09-30 04:00:00"
```

---

## ⚡ Runtime & Queue Supervision

#### `php artisan schedules:dispatch {--now} {--sync}`
Evaluates all registered cron-scheduled agent triggers and dispatches any tasks that are currently due.

```bash
# Standard scheduled evaluation
php artisan schedules:dispatch

# Force immediate execution of all schedules
php artisan schedules:dispatch --now

# Run synchronously for local testing (bypassing Redis queue)
php artisan schedules:dispatch --sync
```

#### `php artisan agentoom:process-ai-tasks`
Processes pending asynchronous AI tasks and monitors background jobs for execution timeouts.

```bash
php artisan agentoom:process-ai-tasks
```

#### `php artisan agentoom:resume-waits`
Inspects paused pipeline executions that have reached their scheduled `resume_at` timestamp and resumes downstream steps.

```bash
php artisan agentoom:resume-waits
```

#### `php artisan agentoom:analyze-memory`
Runs background semantic memory analysis over recent conversations to extract user identities, preferences, and recurring task patterns into persistent skills.

```bash
php artisan agentoom:analyze-memory
```

#### `php artisan ai:prune-conversations`
Deletes agent conversation sessions and associated interaction traces that exceed the configured data retention timeframe according to enterprise privacy policies.

```bash
php artisan ai:prune-conversations
```

---

## 🛡️ Sentinel Security & Compliance

#### `php artisan agentoom:security-cleanup`
Prunes expired OTP confirmation codes, cleans up orphaned authorization requests that timed out, and releases locked system resources.

```bash
php artisan agentoom:security-cleanup
```

#### `php artisan compliance:generate-alerts`
Scans all active AI systems and generates automated compliance alerts for:
- Overdue periodic risk reviews.
- High-risk agents operating without approved mitigation plans.
- High-risk incident rates exceeding safety thresholds.

```bash
php artisan compliance:generate-alerts
```

#### `php artisan ai:generate-compliance-report {--frequency=}`
Compiles scheduled EU AI Act post-market monitoring reports (Article 72) and packages audit traces for regulatory submission.

```bash
# Generate scheduled reports (weekly, monthly, quarterly)
php artisan ai:generate-compliance-report --frequency=monthly
```

