---
title: "Simple Factory"
description: "My notes on the Simple Factory from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Simple Factory

**Type:** Creation idiom, not an official GoF pattern

**Book location:** Chapter 4, Baking with OO Goodness

## The idea

Move object creation logic into one factory object or method.

## Problem it solves

- Client code is filled with new concrete classes.
- Changing which concrete class to instantiate requires editing many places.
- Creation logic distracts from the client's main job.

## How it works

- Create a factory that knows which concrete class to instantiate.
- Clients ask the factory for objects instead of constructing them directly.
- The client works with a common type when possible.

## Main roles

- Client: asks for an object.
- Simple factory: contains creation logic.
- Product interface or superclass: what clients use.
- Concrete products: what the factory returns.

## Example from the book

A pizza factory creates pizzas for a pizza store instead of letting the store call concrete pizza constructors directly.

## When I should use it

- Creation logic is duplicated.
- You want a beginner-friendly step toward factory patterns.
- The creation rules are simple and centralized.

## When I should be careful

- When the factory becomes a large switch statement that changes constantly.
- When subclasses should control creation, use Factory Method instead.
- When families of related products are needed, use Abstract Factory instead.

## My takeaway

Even though it is not an official pattern, it is useful because it starts removing concrete dependencies from client code.

## Related notes

- [[05-factory-method-pattern|Factory Method Pattern]]
- [[06-abstract-factory-pattern|Abstract Factory Pattern]]
