---
title: Instant Messaging Channels
description: Connect your agents to WhatsApp, Telegram, and chat platforms using @agentoom/core-instant-messaging.
---

# Instant Messaging Integration

With `@agentoom/core-instant-messaging`, your agents can communicate with customers and employees directly on popular messaging apps.

---

## 📱 Native Messaging Drivers

`@agentoom/core-instant-messaging` provides direct, first-party drivers for two major communication platforms:

- **WhatsApp Cloud API (`WhatsAppDriver`)**: Connect official Meta WhatsApp Business accounts. Receive inbound customer inquiries, route context through the Trust Layer, and return streaming AI responses.
- **Telegram Bot API (`TelegramDriver`)**: Register Telegram bots to provide conversational assistants for staff, send automated broadcast updates, and trigger pipeline workflows.

> [!NOTE]
> For team notifications in **Slack** and **Discord**, configure outbound webhook subscriptions under **Manage > Webhooks** to post JSON payloads to your incoming webhook URLs.
