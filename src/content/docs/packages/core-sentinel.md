---
title: "@agentoom/core-sentinel"
description: Complete technical reference for the Sentinel security package and authorization middleware.
---

# `@agentoom/core-sentinel`

Provides application-layer interception for tool calls, authorization drivers, and security definition models.

---

## 🛠️ Key Classes & Interfaces

- `Agentoom\Sentinel\Pipes\SecurityBuffer`: Mandatory middleware handling every tool invocation.
- `Agentoom\Sentinel\Services\SecurityRuleEvaluator`: Evaluates parameter conditions using 15 operators.
- `Agentoom\Sentinel\Drivers\EmailOtpDriver`: Generates and delivers 6-digit email OTPs.
- `Agentoom\Sentinel\Drivers\VerbalConfirmationDriver`: Generates in-chat approval requests.
