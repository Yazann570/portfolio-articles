---
title: "Singleton Pattern"
description: "My notes on the Singleton Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Singleton Pattern

**Type:** Creational pattern

**Book location:** Chapter 5, One of a Kind Objects

## The idea

Ensure a class has only one instance and provide a global access point to it.

## Problem it solves

- There must be exactly one instance of a class.
- The instance must be available to different parts of the system.
- Multiple instances would cause incorrect behavior or wasted resources.

## How it works

- Make the constructor private.
- Store the single instance in a static field.
- Expose a static access method.
- Handle lazy loading and multithreading carefully.

## Main roles

- Singleton class: owns the private constructor and the single instance.
- Global access method: returns the same instance.

## Example from the book

A Chocolate Boiler should have one controlled instance so multiple objects do not create unsafe boiler states.

## When I should use it

- There is truly one shared resource.
- The object is stateless or carefully synchronized.
- The design benefits from a controlled single access point.

## When I should be careful

- When it hides global mutable state.
- When it makes tests harder.
- When dependency injection can provide a cleaner lifecycle.

## My takeaway

Singleton looks simple, but it can create hidden coupling. In modern apps, dependency injection is often a better default.

## Related notes

- [[06-abstract-factory-pattern|Abstract Factory Pattern]]
