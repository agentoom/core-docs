---
title: Monitoring & Telemetry
description: Inspect real-time agent execution latency, failure rates, queue depth, and hourly trends in the Command Center.
---

# Monitoring & Real-Time Telemetry

Observing production AI workloads requires tracking both application performance metrics and model-specific telemetry.

![Monitoring Dashboard in the Command Center](/images/screenshots/monitoring.png)

---

## 📊 Live Metrics Explained

- **Executions Today**: Total number of agent runs and pipeline steps dispatched in the current 24-hour cycle.
- **Failure Rate**: Percentage of runs that encountered an uncaught error, timeout, or provider exception.
- **Average Response Time**: End-to-end latency from request dispatch to final token delivery (in milliseconds).
- **Daily Cost & Token Volume**: Total AI credit expenditure and aggregate token volume consumed today across all connected models.
- **Queue Depth**: Number of background tasks waiting in Redis for worker pickup.
- **Provider Health & Latency**: Per-model invocation counts and average latency benchmarks across your connected AI labs.
