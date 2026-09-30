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

Explicitly defines Sentinel security policies directly on the tool method:

```php
use Agentoom\Sentinel\Attributes\Sentinelable;

#[Sentinelable(
    driver: 'otp',
    timeoutMinutes: 15,
    description: 'Requires supervisor OTP confirmation before refunding charges'
)]
public function processRefund(string $chargeId, float $amount): bool
{
    // ...
}
```
