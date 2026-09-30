---
title: Model Context Protocol (MCP) Servers
description: Connect local and remote Model Context Protocol (MCP) servers to extend your agents with external tools and resources.
---

# Model Context Protocol (MCP) Integration

Agentoom natively supports the **Model Context Protocol (MCP)**, an open industry standard that enables AI models to connect seamlessly to data sources, tools, and developer environments.

![MCP Servers in the Command Center](/images/screenshots/mcp-servers.png)

---

## 🔌 Connecting an MCP Server

In the Command Center, navigate to **Build & Extend > MCP Servers** and click **+ New MCP Server**:

1. **Name**: Provide a friendly name (e.g. `GitHub Integration MCP` or `PostgreSQL Connector`).
2. **Server URL**: Enter the endpoint URL of your MCP server.
3. **Transport Type**: Select **SSE (Server-Sent Events)** or standard **HTTP POST**.
4. **Authentication**: Provide an optional Bearer token or custom authorization header.

Click **Save & Sync**. Agentoom immediately initiates a discovery handshake:
- Queries the MCP server for available tools (`tools/list`).
- Queries for available resources (`resources/list`).
- Automatically registers the discovered tools into Agentoom's tool registry.

---

## 🛡️ MCP Security with Sentinel

Tools discovered from external MCP servers are automatically subject to Agentoom's **Sentinel Security Buffer**. 

You can define keyword filters and parameter rules on any external MCP tool to enforce human approval or OTP verification before the tool runs.
