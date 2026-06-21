---
title: "Bridge Pattern"
description: "My notes on the Bridge Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Bridge Pattern

**Type:** Structural pattern

**Book location:** Appendix, Leftover Patterns

## The idea

Separate an abstraction from its implementation so the two can vary independently.

## Problem it solves

- Both the high-level abstraction and the low-level implementation may change.
- Inheritance would create too many combinations.
- You want to avoid binding abstraction and implementation permanently.

## How it works

- Put the abstraction in one hierarchy.
- Put implementation details in another hierarchy.
- The abstraction delegates to an implementation interface.
- Both sides can evolve separately.

## Main roles

- Abstraction: high-level interface.
- Refined abstraction: variations of the abstraction.
- Implementor: low-level implementation interface.
- Concrete implementors: actual implementations.

## Example from the book

A remote control abstraction can be separated from the TV implementation so both can vary independently.

## When I should use it

- You have two dimensions of variation.
- You want to avoid a class explosion.
- You need platform-independent abstractions.

## When I should be careful

- When there is only one dimension of variation.
- When a simple Adapter or Strategy is enough.

## My takeaway

Bridge is composition used to split two inheritance axes.

## Related notes

- [[09-adapter-pattern|Adapter Pattern]]
- [[01-strategy-pattern|Strategy Pattern]]
