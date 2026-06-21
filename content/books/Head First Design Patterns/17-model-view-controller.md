---
title: "Model-View-Controller"
description: "My notes on the Model-View-Controller from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Model-View-Controller

**Type:** Architectural pattern

**Book location:** Chapter 12, Patterns of Patterns

## The idea

Separate application state, presentation, and user input into model, view, and controller roles.

## Problem it solves

- UI code, business state, and input handling become tangled.
- Multiple views need to present the same data.
- Changing the UI should not force changes to the core model.

## How it works

- The model owns state and business behavior.
- The view displays model state.
- The controller interprets user actions and updates the model or view.
- Observer, Strategy, and Composite often appear inside MVC-style designs.

## Main roles

- Model: state and domain behavior.
- View: output and presentation.
- Controller: input handling and flow control.

## Example from the book

The book uses a beat model with views and controllers to explain MVC through familiar design patterns.

## When I should use it

- You are building UI applications.
- You want separation between domain logic and presentation.
- Multiple interfaces may use the same model.

## When I should be careful

- When a tiny feature does not need three roles.
- When the team uses a different framework architecture with different names.

## My takeaway

MVC is less about folders and more about keeping state, display, and user actions separated.

## Related notes

- [[02-observer-pattern|Observer Pattern]]
- [[01-strategy-pattern|Strategy Pattern]]
- [[13-composite-pattern|Composite Pattern]]
