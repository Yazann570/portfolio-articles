---
title: "Chain of Responsibility Pattern"
description: "My notes on the Chain of Responsibility Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Chain of Responsibility Pattern

**Type:** Behavioral pattern

**Book location:** Appendix, Leftover Patterns

## The idea

Pass a request along a chain of handlers, giving multiple objects a chance to handle it.

## Problem it solves

- The sender should not know which object will handle a request.
- Several objects may be able to handle the same request.
- The handler set or order may need to change.

## How it works

- Create handler objects with a common interface.
- Each handler either handles the request or passes it to the next handler.
- The client sends the request to the first handler only.

## Main roles

- Handler: common handling interface.
- Concrete handlers: handle or forward requests.
- Client: starts the chain.

## Example from the book

A request passes through a chain of handlers until one handler processes it.

## When I should use it

- You are building middleware, filters, validation chains, approval flows, or support escalation.
- You want to decouple sender from receiver.
- Different handlers may be added or reordered.

## When I should be careful

- When every request must definitely be handled and the chain makes that hard to guarantee.
- When debugging request flow through many handlers becomes confusing.

## My takeaway

This pattern is useful for pipelines where each step can decide to handle, modify, or forward a request.

## Related notes

- [[08-command-pattern|Command Pattern]]
