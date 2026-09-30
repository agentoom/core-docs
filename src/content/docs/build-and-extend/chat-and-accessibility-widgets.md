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
   Copy the generated `<script>` tag and paste it into your website:
   ```html
   <script src="https://your-agentoom-domain.com/jsd/agentoom-vars.js?id=your-widget-slug"></script>
   ```

### Conversational Forms (`FormWidget`)
You can also embed structured conversational lead-capture forms using:
```html
<script src="https://your-agentoom-domain.com/jsd/form-vars.js?id=your-form-slug"></script>
```

---

## ♿ Accessibility Widgets (`@agentoom/core-accessibility-widget`)

The `@agentoom/core-accessibility-widget` ensures your public-facing web applications meet WCAG 2.1 / ADA accessibility guidelines:
- **Visual Controls**: High-contrast mode, saturation adjustments, monochrome display, and font scaling.
- **Typography & Layout**: OpenDyslexic font switcher, adjustable line height, and letter spacing.
- **Assistive UX**: Reading ruler guide, high-visibility cursor, stop animations toggle, and screen reader compatibility.

### Embed Snippet
```html
<script src="https://your-agentoom-domain.com/api/accessibility/loader/your-widget-slug.js" defer></script>
```
