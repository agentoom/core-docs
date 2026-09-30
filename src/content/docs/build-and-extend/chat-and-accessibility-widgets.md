---
title: Chat & Accessibility Widgets
description: Embed AI chat widgets, conversational forms, and accessibility controls directly into your website.
---

# Chat & Accessibility Widgets

Agentoom allows you to deploy custom-branded conversational widgets to any public website or customer portal with a simple copy-and-paste JavaScript snippet.

![Widgets Overview in the Command Center](/images/screenshots/widgets.png)

---

## 💬 Chat Widgets (`@agentoom/core-chat-widget`)

1. Navigate to **Build & Extend > Widgets** and click **+ New Widget**.
2. **Assign an Agent**: Select which AI agent powers the conversation.
3. **Appearance & Customization**:
   - Primary brand color, logo, and chat bubble position (Bottom-Right or Bottom-Left).
   - Welcome greetings and suggested starting prompts.
4. **Embed Snippet**:
   Copy the generated `<script>` tag and paste it into the HTML of your website:
   ```html
   <script 
     src="https://your-agentoom-domain.com/widgets/chat.js" 
     data-widget-id="wgt_984f10a8"
     defer>
   </script>
   ```

---

## ♿ Accessibility Widgets (`@agentoom/core-accessibility-widget`)

The `@agentoom/core-accessibility-widget` ensures your public-facing chat interface meets WCAG accessibility guidelines:
- High-contrast color modes for visually impaired users.
- Adjustable font sizing and dyslexia-friendly typography.
- Keyboard navigation shortcuts and screen reader optimizations.
