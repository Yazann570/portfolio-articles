---
title: "Composite Pattern"
description: "My notes on the Composite Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Composite Pattern

**Type:** Structural pattern

**Book location:** Chapter 9, Well-Managed Collections

## The idea

Compose objects into tree structures and let clients treat individual objects and groups uniformly.

## Problem it solves

- You have part-whole hierarchies.
- Clients should not need separate logic for single items and collections of items.
- The structure may be nested recursively.

## How it works

- Create a common component interface.
- Leaf objects implement behavior directly.
- Composite objects contain child components.
- Clients work with the component type.

## Main roles

- Component: shared interface.
- Leaf: individual object with no children.
- Composite: object with child components.
- Client: treats leaves and composites uniformly.

## Example from the book

Menus and menu items are treated through one common menu component structure, allowing nested menus.

## When I should use it

- Your data naturally forms a tree.
- You want recursive operations across a hierarchy.
- You want uniform treatment of single and grouped objects.

## When I should be careful

- When the tree abstraction hides important differences between leaves and groups.
- When enforcing type safety across children is very strict.

## My takeaway

Composite is perfect for folders, menus, UI trees, organization charts, and nested structures.

## Related notes

- [[12-iterator-pattern|Iterator Pattern]]
- [[26-visitor-pattern|Visitor Pattern]]
