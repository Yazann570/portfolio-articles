---
title: "Strategy Pattern"
description: "My notes on the Strategy Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Strategy Pattern

**Type:** Behavioral pattern

**Book location:** Chapter 1, Welcome to Design Patterns

## The idea

Define a family of algorithms, put each one in its own class, and make them interchangeable.

## Problem it solves

- A class has behavior that keeps changing across subclasses.
- Inheritance causes duplicated code or forces methods onto subclasses that do not need them.
- You want to change behavior at runtime without rewriting the object.

## How it works

- Separate the behavior that changes from the object that uses it.
- Create a common interface for the behavior.
- Give the main object a reference to that behavior interface.
- Swap behavior implementations when needed.

## Main roles

- Context: the object that uses a behavior.
- Strategy: the interface shared by all interchangeable behaviors.
- Concrete strategies: the real behavior implementations.

## Example from the book

The SimUDuck app. Ducks delegate flying and quacking to behavior objects instead of hardcoding those behaviors in the Duck superclass.

## When I should use it

- You have many related algorithms or behaviors.
- You see lots of conditional logic choosing between behaviors.
- You want runtime flexibility.
- You want composition instead of deep inheritance.

## When I should be careful

- When there is only one behavior and no realistic variation.
- When the extra classes make a tiny problem harder to read.

## My takeaway

In my own projects, this is useful when a feature has several policies, filters, sorters, ranking algorithms, payment methods, or validation rules.

## Related notes

- [[14-state-pattern|State Pattern]]
- [[11-template-method-pattern|Template Method Pattern]]
- [[17-model-view-controller|Model-View-Controller]]
