---
title: "Visitor Pattern"
description: "My notes on the Visitor Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Visitor Pattern

**Type:** Behavioral pattern

**Book location:** Appendix, Leftover Patterns

## The idea

Add operations to object structures without changing the classes of the elements.

## Problem it solves

- You have a stable object structure but need many new operations over it.
- Adding methods to every element class is inconvenient.
- Operations need to depend on concrete element types.

## How it works

- Each element accepts a visitor.
- The visitor has visit methods for concrete element types.
- New visitors add new operations without modifying elements.
- The object structure remains mostly stable.

## Main roles

- Visitor: visit operations.
- Concrete visitor: a specific operation.
- Element: accept operation.
- Concrete elements: call the right visitor method.
- Object structure: collection or composite to traverse.

## Example from the book

A visitor can walk through a composite structure and add new operations without changing every element class.

## When I should use it

- The element classes are stable.
- You need to add many operations.
- You are working with trees, ASTs, or composite structures.

## When I should be careful

- When element classes change often, because every visitor may need updates.
- When it breaks encapsulation by requiring too much access to internals.

## My takeaway

Visitor makes adding operations easy, but adding new element types harder.

## Related notes

- [[13-composite-pattern|Composite Pattern]]
- [[12-iterator-pattern|Iterator Pattern]]
