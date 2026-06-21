---
title: "Flyweight Pattern"
description: "My notes on the Flyweight Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Flyweight Pattern

**Type:** Structural pattern

**Book location:** Appendix, Leftover Patterns

## The idea

Share common state between many fine-grained objects to reduce memory usage.

## Problem it solves

- The program creates many similar objects.
- Duplicated state wastes memory.
- Most object state can be shared instead of stored repeatedly.

## How it works

- Split state into intrinsic shared state and extrinsic context state.
- Store shared objects in a factory or cache.
- Clients provide context-specific state when using the flyweight.

## Main roles

- Flyweight: shared interface.
- Concrete flyweight: stores intrinsic state.
- Flyweight factory: manages sharing.
- Client: supplies extrinsic state.

## Example from the book

Many small objects can share common internal state instead of duplicating it in memory.

## When I should use it

- You have thousands or millions of similar objects.
- Memory usage is a real concern.
- Shared state is stable and can be separated from context.

## When I should be careful

- When object count is small.
- When separating intrinsic and extrinsic state makes code harder to understand.

## My takeaway

Flyweight is a memory optimization pattern. Do not use it unless object volume justifies it.

## Related notes

- [[19-builder-pattern|Builder Pattern]]
