---
title: "Decorator Pattern"
description: "My notes on the Decorator Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Decorator Pattern

**Type:** Structural pattern

**Book location:** Chapter 3, Decorating Objects

## The idea

Attach extra responsibilities to an object dynamically by wrapping it with decorator objects.

## Problem it solves

- Subclassing every possible feature combination creates too many classes.
- You need to add responsibilities at runtime.
- You want extension without modifying the original class.

## How it works

- Decorators implement the same interface as the object they wrap.
- Each decorator holds a reference to a component.
- The decorator adds behavior before, after, or around calls to the wrapped object.
- Multiple decorators can be stacked.

## Main roles

- Component: common interface.
- Concrete component: the original object.
- Decorator: base wrapper type.
- Concrete decorators: add behavior.

## Example from the book

Starbuzz Coffee. A beverage is wrapped with condiments like milk, mocha, soy, and whip to add cost and description dynamically.

## When I should use it

- You need optional features that can be combined.
- You want to extend behavior without changing existing classes.
- You want a flexible alternative to subclassing.
- You are working with streams, middleware, filters, or request pipelines.

## When I should be careful

- When many small decorators make debugging hard.
- When object identity matters and wrappers can confuse equality checks.

## My takeaway

Decorator is great when features are independent add-ons, not when they are part of the object's core identity.

## Related notes

- [[09-adapter-pattern|Adapter Pattern]]
- [[15-proxy-pattern|Proxy Pattern]]
