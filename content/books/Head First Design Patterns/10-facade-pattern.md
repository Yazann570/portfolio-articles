---
title: "Facade Pattern"
description: "My notes on the Facade Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Facade Pattern

**Type:** Structural pattern

**Book location:** Chapter 7, Being Adaptive

## The idea

Provide a simplified interface to a larger set of classes or subsystem.

## Problem it solves

- A subsystem has many classes and complicated setup steps.
- Clients repeat the same multi-step sequence.
- You want to reduce coupling between clients and subsystem internals.

## How it works

- Create one facade class that exposes common high-level operations.
- The facade delegates to subsystem classes.
- Clients use the facade for normal use cases, while subsystem classes can still be available for advanced use.

## Main roles

- Facade: simple entry point.
- Subsystem classes: detailed implementation.
- Client: talks mostly to the facade.

## Example from the book

A home theater facade gives one simple method to start a movie instead of asking the client to control every device directly.

## When I should use it

- You want to simplify an API.
- You want to hide subsystem complexity.
- You want a clean boundary between layers.

## When I should be careful

- When the facade becomes a giant god object.
- When hiding subsystem details removes needed flexibility.

## My takeaway

Facade improves usability. Adapter changes an interface. Decorator adds responsibilities.

## Related notes

- [[09-adapter-pattern|Adapter Pattern]]
- [[23-mediator-pattern|Mediator Pattern]]
