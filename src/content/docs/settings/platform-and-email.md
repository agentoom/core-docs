---
title: Platform & Email Configuration
description: Configure outbound SMTP mail delivery, multi-language localization, and system preferences.
---

# Platform & Email Configuration

Agentoom sends security OTP codes, compliance alerts, and incident notifications through your configured email transport.

---

## ✉️ Supported Email Transports

In **Settings > Platform > Email Configuration**, administrators can configure three separate email services:

1. **Gmail Integration (OAuth & Service Accounts)**:
   - Client ID & Client Secret for Google OAuth consent.
   - Service Account JSON credentials for autonomous agent email delivery.
2. **Standard SMTP**:
   - Mail Host & Port (e.g., `smtp.mailgun.org`, port `587` with TLS).
   - Authentication credentials (username, password).
   - Sender details (`mail_from_address`, `mail_from_name`).
3. **Inbound IMAP**:
   - Host, Port, Username, Password, and SSL encryption for incoming mail ingestion and agent email monitoring.
