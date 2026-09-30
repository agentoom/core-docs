---
title: Actionables (Zero-Token Compute)
description: Understand how deterministic Actionables run code directly without AI model fees, latency, or hallucinations.
---

# Actionables: Deterministic Code Execution

Not every automated task requires an artificial intelligence model. If your workflow needs to fetch a customer balance from MySQL, query weather data, or trigger an invoice PDF generation, sending that task to a Large Language Model introduces unnecessary latency, burns paid API credits, and risks hallucinated numbers.

**Actionables** solve this problem by providing **zero-AI-cost, millisecond-fast, 100% deterministic code execution**.

---

## 💡 What is an Actionable?

An Actionable is any PHP method decorated with the `#[Actionable]` attribute. The platform registers these methods as native callable capabilities that can be invoked directly by pipeline steps, external webhooks, or agents.

```php
use Agentoom\Core\Attributes\Actionable;

class StripeBillingService
{
    #[Actionable(
        name: 'Retrieve Customer Balance',
        description: 'Queries the Stripe API and returns the current balance for a customer ID',
        category: 'Finance'
    )]
    public function getCustomerBalance(string $customerId): array
    {
        // Direct, deterministic execution. Zero AI tokens used!
        $balance = $this->stripeClient->customers->retrieve($customerId);

        return [
            'customer_id' => $customerId,
            'balance_cents' => $balance->balance,
            'currency' => $balance->currency,
        ];
    }
}
```

---

## ⚡ Actionable vs. AI Agent Comparison

| Dimension | Deterministic Actionable | AI Agent Step |
|---|---|---|
| **Cost** | **$0.00 (Zero AI Tokens)** | Token-based model pricing |
| **Execution Speed** | **5ms – 100ms** (Native speed) | 1,500ms – 10,000ms (LLM generation) |
| **Output Predictability** | **100% Deterministic** | Probabilistic (May vary) |
| **Ideal For** | Database queries, math, API calls | Reasoning, summarization, creative drafting |

---

## 🔄 Best Practice: The Hybrid Pipeline Pattern

The most cost-effective enterprise pipelines chain Actionables and AI Agents together:

1. **Step 1 (Actionable)**: Query database for inactive accounts over the last 30 days.
2. **Step 2 (Conditional Gate)**: If 0 accounts found, skip subsequent steps.
3. **Step 3 (AI Agent)**: Analyze past purchase history and draft a personalized re-engagement email for each user.
4. **Step 4 (Sentinel-Gated Actionable)**: Send the drafted email via SendGrid (requiring supervisor approval if recipient count > 50).

You only pay for AI reasoning where human-like intelligence is genuinely needed.
