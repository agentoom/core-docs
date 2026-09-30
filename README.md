# Agentoom Core Documentation (`@agentoom/core-docs`)

The centralized developer and operator documentation portal for **Agentoom Core**, powered by [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

---

## 🌟 Overview

The `@agentoom/core-docs` package contains the complete technical documentation, architecture guides, API references, tool development tutorials, and deployment documentation for the Agentoom ecosystem. It builds into a fast, accessible, static documentation portal with full-text search, dark/light theme switching, syntax highlighting, and responsive navigation.

- **Package Name**: `@agentoom/core-docs`
- **Engine**: Astro v5+ with Starlight documentation theme
- **Output**: Static HTML/CSS/JS (`dist/`) suitable for hosting on Nginx, Cloudflare Pages, Vercel, or AWS S3

---

## 🚀 Key Features

### 1. Developer Documentation Suite
- **Getting Started & Installation**: Step-by-step guides for installing and configuring Agentoom Core and its satellite packages.
- **Agent Architecture**: Documentation explaining agent creation, system instructions, stateful context windows, model selection, and memory retention.
- **Tool & Skill Development**: Tutorials on creating custom agent tools using PHP attributes (`#[Actionable]`, `#[Sentinelable]`, `#[GroupVisibility]`).
- **Pipeline & Scheduler Guides**: Instructions on orchestrating multi-step workflows, setting up cron schedules, and managing background queues.
- **Model Context Protocol (MCP)**: Guides on integrating local or remote MCP servers with Agentoom.
- **Governance & Compliance**: In-depth explanations of the EU AI Act compliance engine, risk classifications, audit logs, and emergency stops.

### 2. Modern Static Documentation Engine
- **Starlight Powered**: Built-in full-text search, table of contents, pagination, external link indicators, and mobile-friendly sidebar navigation.
- **Markdown & MDX Support**: Write rich documentation using standard Markdown or interactive components with MDX.
- **Fast Build Times**: Powered by Astro's optimized Vite-based compilation pipeline.

---

## 📁 Package Structure

```
core-docs/
├── public/                 # Static assets (favicons, images)
├── src/
│   ├── assets/             # Brand logos and illustrations
│   ├── content/
│   │   ├── docs/           # Documentation content pages (.md / .mdx)
│   │   │   ├── guides/     # Step-by-step developer guides
│   │   │   └── reference/  # Architecture and API reference documentation
│   │   └── content.config.ts # Starlight collection schemas
│   └── env.d.ts
├── astro.config.mjs        # Astro & Starlight configuration (sidebar, nav, title)
├── package.json            # Node dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

---

## 💻 Development & Build Commands

All commands are executed from the `packages/agentoom/core-docs` directory:

```bash
# Install dependencies
npm install

# Start local development server (accessible at http://localhost:4321)
npm run dev

# Start local server in the background
astro dev --background

# Stop, check status, or view logs for background server
astro dev stop
astro dev status
astro dev logs

# Compile production-ready static site to dist/
npm run build

# Preview production build locally
npm run preview
```
