---
title: EU AI Act Compliance
description: Automate European Union AI Act compliance, post-market monitoring (Art. 72), risk classification, and audit exports.
---

# EU AI Act Compliance Engine

The European Union Artificial Intelligence Act imposes strict legal obligations on organizations deploying AI systems, requiring continuous risk assessments, technical documentation, human oversight, and post-market incident monitoring.

The `@agentoom/core-compliance` package provides a built-in regulatory compliance suite directly inside the Command Center.

![EU AI Act Post-Market Monitoring Dashboard](/images/screenshots/compliance-dashboard.png)

---

## 📋 Key Compliance Features

### 1. Post-Market Monitoring (Article 72)
Article 72 of the EU AI Act requires operators of high-risk and limited-risk AI systems to document and evaluate system performance throughout its operational lifecycle.
- **Active Emergency Stops**: Instant visibility into blocked agents.
- **Overdue Risk Reviews**: Automated alerts when an agent's assessment expires.
- **Evaluation Scores**: Track benchmark scores and evaluation tests over time.

### 2. The Risk Assessment Wizard
Before deploying an agent to production, operators can complete the built-in Assessment Wizard:
- Guides you through targeted questions regarding the agent's target domain, affected groups, autonomy level, and human review frequency.
- The rule engine automatically classifies the deployment into **Minimal Risk**, **Limited Risk**, or **Potential High Risk**.
- Generates recommended safeguards and mandatory oversight controls.

### 3. Human-In-The-Loop (HITL) Queue
The **Pending Decisions** interface serves as a central clearinghouse where human supervisors review, approve, or reject escalated agent actions before any real-world impact occurs.

### 4. Auditor-Ready Evidence Packages
Generate complete audit archives (`.zip` containing cryptographically signed JSON traces, risk assessment history, and model configuration snapshots) with a single click to present directly to compliance auditors or regulatory bodies.
