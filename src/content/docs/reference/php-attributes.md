---
title: PHP Attributes Reference
description: Technical reference for #[Actionable], #[Sentinelable], and #[GroupVisibility] attributes.
---

# PHP Attributes Reference

Agentoom leverages native PHP 8 attributes to declare tools, security rules, and access scopes directly in code.

---

## `#[Actionable]`

Marks a class method as a deterministic, callable capability for pipelines and external services.

```php
use Agentoom\Core\Attributes\Actionable;

#[Actionable(
    name: 'Calculate Tax',
    description: 'Calculates applicable VAT based on country code and subtotal',
    category: 'Billing'
)]
public function calculateTax(string $country, float $subtotal): array
{
    // ...
}
```

---

## `#[Sentinelable]`

Marks a tool method as eligible for application-level security gating by the Sentinel Security Buffer:

```php
use Agentoom\Core\Attributes\Sentinelable;

#[Sentinelable(
    name: 'Process Customer Refund',
    description: 'Issues a financial credit or refund back to the customer card',
    category: 'Billing'
)]
public function processRefund(string $chargeId, float $amount): bool
{
    // ...
}
```

### Constructor Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| `name` | `string` | `''` | Friendly name displayed in the Sentinel Security Buffer UI. |
| `description` | `string` | `''` | Explanation of what the protected action does. |
| `category` | `string` | `'General'` | Logical grouping for filtering in administrative tables. |

> [!NOTE]
> Specific verification policies (such as **OTP Email Verification** vs. **In-Chat Verbal Confirmation**, expiration timeouts, and parameter-level rules) are configured dynamically in the **Sentinel Security Buffer UI**. This decouples business logic from compliance requirements and allows security teams to adjust authorization thresholds without changing application code.

---

## `#[GroupVisibility]`

Controls which user groups, agents, or ecosystems can discover and invoke a given tool class or individual method:

```php
use Agentoom\Core\Attributes\GroupVisibility;
use Laravel\Ai\Contracts\Tool;

#[GroupVisibility('server_management')]
class ServerDeploymentTool implements Tool
{
    #[GroupVisibility('superadmin_only')]
    public function rebootServer(): string
    {
        // Only accessible to callers authorized for superadmin_only
    }
}
```

### Constructor Parameters

| Parameter | Type | Description |
|---|---|---|
| `group` | `string` | The visibility group identifier (e.g. `'public'`, `'experimentoom'`, `'server_management'`). |

`#[GroupVisibility]` can be applied to an entire class (`TARGET_CLASS`), individual methods (`TARGET_METHOD`), or both. When evaluating whether an agent can view a tool during prompt compilation, Agentoom checks that the caller possesses matching group permissions.
