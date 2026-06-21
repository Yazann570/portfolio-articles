---
title: "Iterator Pattern"
description: "My notes on the Iterator Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Iterator Pattern

**Type:** Behavioral pattern

**Book location:** Chapter 9, Well-Managed Collections

## The idea

Provide a way to access elements of a collection sequentially without exposing its internal representation.

## Problem it solves

- Clients need to loop through items without knowing whether storage is an array, list, map, or tree.
- Collection internals should stay hidden.
- Traversal logic should be separated from collection logic.

## How it works

- Create an iterator interface with traversal operations.
- Each collection returns its own iterator.
- Client code loops through the iterator instead of the collection internals.

## Main roles

- Iterator: traversal interface.
- Concrete iterator: tracks current position.
- Aggregate or collection: creates iterators.
- Client: uses the iterator.

## Example from the book

Different restaurant menus store items differently, but clients can traverse them through a common iterator.

## When I should use it

- You want a uniform traversal API.
- You want to hide collection implementation details.
- You support multiple ways to traverse the same data.

## When I should be careful

- When built-in language iteration is already clear and enough.
- When custom iterators add complexity without hiding anything useful.

## My takeaway

Iterator protects clients from collection details and supports clean traversal.

## Related notes

- [[13-composite-pattern|Composite Pattern]]
