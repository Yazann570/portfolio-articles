---
title: "Observer Pattern"
description: "My notes on the Observer Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Observer Pattern

**Type:** Behavioral pattern

**Book location:** Chapter 2, Keeping your Objects in the Know

## The idea

Create a one-to-many dependency so that when one object changes state, its dependents are notified automatically.

## Problem it solves

- Many objects need to react to changes in another object.
- The subject should not know the concrete classes of every dependent object.
- Objects should be able to subscribe or unsubscribe at runtime.

## How it works

- A subject keeps a list of observers.
- Observers implement a common update interface.
- When the subject changes, it notifies observers.
- The design keeps the subject loosely coupled to its observers.

## Main roles

- Subject: stores observers and sends notifications.
- Observer: interface used by dependent objects.
- Concrete subject: owns the changing state.
- Concrete observers: react to updates.

## Example from the book

The Weather Station. Displays subscribe to weather data and update automatically when measurements change.

## When I should use it

- You need event notifications.
- A change in one object should update many other objects.
- The set of listeners changes while the program runs.
- You are building UI events, domain events, or publish-subscribe flows.

## When I should be careful

- When update order is important and hard to control.
- When too many observers make the system difficult to trace.

## My takeaway

This is one of the most practical patterns for UI, events, notifications, and reactive systems.

## Related notes

- [[17-model-view-controller|Model-View-Controller]]
- [[16-compound-patterns|Compound Patterns]]
