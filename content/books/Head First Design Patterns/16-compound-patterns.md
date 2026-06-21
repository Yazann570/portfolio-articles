---
title: "Compound Patterns"
description: "My notes on the Compound Patterns from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Compound Patterns

**Type:** Pattern combination

**Book location:** Chapter 12, Patterns of Patterns

## The idea

Use multiple patterns together to solve a larger design problem.

## Problem it solves

- Real designs often need more than one pattern.
- A single pattern does not fully describe the architecture.
- Different forces exist at the same time, such as creation, traversal, notification, and adaptation.

## How it works

- Combine patterns intentionally.
- Let each pattern solve one part of the problem.
- Keep the design understandable by naming the roles and responsibilities clearly.
- Avoid forcing patterns where they do not belong.

## Main roles

- There is no single structure.
- The structure is a collaboration of several pattern structures.
- The important part is how the pattern roles interact.

## Example from the book

The duck simulator combines Adapter, Decorator, Factory, Composite, Iterator, and Observer. MVC combines several patterns too.

## When I should use it

- A real problem has multiple design forces.
- You can explain why every pattern is needed.
- Combining patterns makes the design clearer, not more impressive.

## When I should be careful

- When you are adding patterns just because you know them.
- When the design becomes harder to explain.

## My takeaway

Patterns are vocabulary, not trophies. A compound design should feel simpler after explanation.

## Related notes

- [[17-model-view-controller|Model-View-Controller]]
