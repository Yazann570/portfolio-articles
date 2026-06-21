---
title: "Prototype Pattern"
description: "My notes on the Prototype Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Prototype Pattern

**Type:** Creational pattern

**Book location:** Appendix, Leftover Patterns

## The idea

Create new objects by copying existing prototype objects.

## Problem it solves

- Object creation is expensive or complicated.
- The exact concrete class may be known only at runtime.
- You want to avoid many factory subclasses.

## How it works

- Create a prototype interface with a clone operation.
- Register or store prototype instances.
- Clients request copies and customize them.

## Main roles

- Prototype: clone interface.
- Concrete prototype: implements cloning.
- Client: clones prototypes.

## Example from the book

Instead of building an object from scratch, clone a prepared prototype and adjust it.

## When I should use it

- Objects are expensive to create.
- You need runtime-configured object creation.
- Copying an existing object is simpler than reconstructing it.

## When I should be careful

- When cloning semantics are unclear.
- When objects contain deep references that are hard to copy correctly.

## My takeaway

Prototype is useful when the object to create is best described by an existing example.

## Related notes

- [[06-abstract-factory-pattern|Abstract Factory Pattern]]
