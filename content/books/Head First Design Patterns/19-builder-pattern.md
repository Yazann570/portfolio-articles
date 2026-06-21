---
title: "Builder Pattern"
description: "My notes on the Builder Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Builder Pattern

**Type:** Creational pattern

**Book location:** Appendix, Leftover Patterns

## The idea

Separate the construction of a complex object from its representation.

## Problem it solves

- An object has many construction steps or optional parts.
- Constructors become huge and hard to read.
- Different representations can be built through the same process.

## How it works

- Create a builder with step-by-step construction methods.
- A director or client controls the order of construction.
- The builder returns the final product.
- Different builders can produce different representations.

## Main roles

- Builder: construction interface.
- Concrete builder: builds and stores parts.
- Director: optional object that defines construction order.
- Product: final complex object.

## Example from the book

A builder can assemble a complex object step by step while hiding the construction details from the client.

## When I should use it

- Object construction has many optional parameters.
- You need readable object creation.
- You want the same construction process to create different products.

## When I should be careful

- When the object is simple.
- When a factory method or constructor is clear enough.

## My takeaway

Builder is great for readability and controlled construction of complex objects.

## Related notes

- [[04-simple-factory|Simple Factory]]
- [[06-abstract-factory-pattern|Abstract Factory Pattern]]
