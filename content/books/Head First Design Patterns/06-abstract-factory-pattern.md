---
title: "Abstract Factory Pattern"
description: "My notes on the Abstract Factory Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Abstract Factory Pattern

**Type:** Creational pattern

**Book location:** Chapter 4, Baking with OO Goodness

## The idea

Provide an interface for creating families of related objects without specifying their concrete classes.

## Problem it solves

- A system needs multiple related products that must work together.
- You want to switch product families without changing client code.
- Concrete creation logic is scattered across the codebase.

## How it works

- Define a factory interface with methods for each product in the family.
- Create concrete factories for each family or theme.
- Clients depend on the abstract factory and abstract products.
- Changing the factory changes the whole family of products.

## Main roles

- Abstract factory: creates abstract products.
- Concrete factories: create one family of concrete products.
- Abstract products: interfaces for product roles.
- Concrete products: family-specific implementations.

## Example from the book

Pizza ingredient factories create families of related ingredients for New York and Chicago styles.

## When I should use it

- You need product families, such as UI widgets for different platforms.
- Objects from one family must be used together.
- You want to enforce consistency across created objects.

## When I should be careful

- When adding new product types is frequent, because every factory interface must change.
- When there is only one product type, Factory Method may be simpler.

## My takeaway

Abstract Factory is about families. Factory Method is about one creation hook.

## Related notes

- [[05-factory-method-pattern|Factory Method Pattern]]
- [[04-simple-factory|Simple Factory]]
