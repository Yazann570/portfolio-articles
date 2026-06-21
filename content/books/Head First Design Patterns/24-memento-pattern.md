---
title: "Memento Pattern"
description: "My notes on the Memento Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Memento Pattern

**Type:** Behavioral pattern

**Book location:** Appendix, Leftover Patterns

## The idea

Capture and restore an object's internal state without violating encapsulation.

## Problem it solves

- You need undo, checkpoints, snapshots, or rollback.
- The object should not expose its internal state to the outside world.
- External code should store state but not inspect or modify it.

## How it works

- The originator creates a memento containing its state.
- A caretaker stores the memento.
- Later, the originator restores itself from the memento.

## Main roles

- Originator: object whose state is saved.
- Memento: state snapshot.
- Caretaker: stores mementos.

## Example from the book

An object's previous state can be saved and restored without exposing its internal fields.

## When I should use it

- You need undo or rollback.
- You need snapshots while preserving encapsulation.
- State objects are not too expensive to store.

## When I should be careful

- When snapshots are huge and memory is limited.
- When exposing state is already safe and simple.

## My takeaway

Memento is a clean way to support undo without breaking encapsulation.

## Related notes

- [[08-command-pattern|Command Pattern]]
