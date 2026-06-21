---
title: "Template Method Pattern"
description: "My notes on the Template Method Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Template Method Pattern

**Type:** Behavioral pattern

**Book location:** Chapter 8, Encapsulating Algorithms

## The idea

Define the skeleton of an algorithm in a superclass and let subclasses override specific steps.

## Problem it solves

- Several classes share the same algorithm structure.
- Some steps vary, but the overall order should stay controlled.
- You want to avoid duplicated algorithm code.

## How it works

- Put the algorithm in a final or stable template method.
- Implement common steps in the superclass.
- Declare variable steps as abstract or overridable methods.
- Use hooks for optional behavior.

## Main roles

- Abstract class: owns the template method.
- Primitive operations: steps subclasses must implement.
- Hooks: optional extension points.
- Concrete subclasses: customize selected steps.

## Example from the book

Coffee and tea share the same recipe structure, while subclasses fill in steps like brewing and adding condiments.

## When I should use it

- You want a fixed workflow with customizable steps.
- You are building frameworks.
- You need to prevent subclasses from changing the overall algorithm order.

## When I should be careful

- When composition would be more flexible.
- When inheritance hierarchy becomes rigid or deep.

## My takeaway

Template Method is inheritance-based reuse. Strategy is composition-based behavior swapping.

## Related notes

- [[01-strategy-pattern|Strategy Pattern]]
