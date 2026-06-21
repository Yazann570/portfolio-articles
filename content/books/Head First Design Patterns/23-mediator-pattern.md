---
title: "Mediator Pattern"
description: "My notes on the Mediator Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Mediator Pattern

**Type:** Behavioral pattern

**Book location:** Appendix, Leftover Patterns

## The idea

Centralize complex communication between objects in a mediator object.

## Problem it solves

- Many objects communicate directly with many others.
- The object graph becomes tangled.
- Changing one interaction causes changes across many classes.

## How it works

- Objects talk to the mediator instead of each other.
- The mediator coordinates interactions.
- Colleague objects become simpler and more reusable.

## Main roles

- Mediator: coordination interface.
- Concrete mediator: interaction logic.
- Colleagues: objects that communicate through the mediator.

## Example from the book

UI components can communicate through a dialog mediator instead of talking directly to every other component.

## When I should use it

- A group of objects has complex communication rules.
- You want to reduce many-to-many dependencies.
- You are coordinating UI widgets, workflows, or components.

## When I should be careful

- When the mediator becomes a huge controller with too much logic.
- When direct communication is simple and clear.

## My takeaway

Mediator reduces object coupling, but the mediator itself must stay focused.

## Related notes

- [[10-facade-pattern|Facade Pattern]]
- [[02-observer-pattern|Observer Pattern]]
