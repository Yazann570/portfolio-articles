---
title: "Adapter Pattern"
description: "My notes on the Adapter Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Adapter Pattern

**Type:** Structural pattern

**Book location:** Chapter 7, Being Adaptive

## The idea

Convert one interface into another interface that clients expect.

## Problem it solves

- Existing code expects one interface.
- A useful class has a different interface.
- You want to reuse the class without changing client code or the adaptee.

## How it works

- Create an adapter that implements the target interface.
- The adapter wraps the adaptee.
- Each target method translates the request into calls on the adaptee.

## Main roles

- Client: uses the target interface.
- Target: interface expected by the client.
- Adapter: implements target and delegates to adaptee.
- Adaptee: existing class with incompatible interface.

## Example from the book

A turkey is adapted to behave like a duck interface so client code expecting a duck can still work.

## When I should use it

- You need to integrate legacy code.
- You are wrapping third-party APIs.
- You want to keep client code stable while adapting dependencies.

## When I should be careful

- When changing the original interface is easier and safe.
- When the adapter hides important semantic differences.

## My takeaway

Adapter is for compatibility. It lets old and new code cooperate without forcing everything to change.

## Related notes

- [[10-facade-pattern|Facade Pattern]]
- [[03-decorator-pattern|Decorator Pattern]]
