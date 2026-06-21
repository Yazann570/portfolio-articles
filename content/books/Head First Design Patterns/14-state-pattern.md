---
title: "State Pattern"
description: "My notes on the State Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# State Pattern

**Type:** Behavioral pattern

**Book location:** Chapter 10, The State of Things

## The idea

Allow an object to alter its behavior when its internal state changes, making it appear to change its class.

## Problem it solves

- An object has many conditionals based on state.
- Adding new states makes the class messy.
- State-specific behavior is scattered across methods.

## How it works

- Create a state interface for state-dependent actions.
- Move behavior for each state into its own class.
- The context delegates actions to the current state object.
- States decide when to transition the context to another state.

## Main roles

- Context: owns current state.
- State interface: common actions.
- Concrete states: implement behavior for each state.

## Example from the book

A gumball machine changes behavior depending on whether it has no quarter, has a quarter, sold a gumball, or is out of gumballs.

## When I should use it

- Your class has many state-based if or switch statements.
- States have distinct behavior.
- New states or transitions are likely.

## When I should be careful

- When there are only one or two simple states.
- When state transitions are easier to express as a small table.

## My takeaway

State organizes state machines into objects and removes messy conditionals from the context.

## Related notes

- [[01-strategy-pattern|Strategy Pattern]]
