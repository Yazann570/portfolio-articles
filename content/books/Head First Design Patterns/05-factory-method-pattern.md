---
title: "Factory Method Pattern"
description: "My notes on the Factory Method Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Factory Method Pattern

**Type:** Creational pattern

**Book location:** Chapter 4, Baking with OO Goodness

## The idea

Define an interface for creating an object, but let subclasses decide which concrete class to instantiate.

## Problem it solves

- A superclass has a workflow but should not know exact product classes.
- Different subclasses need different concrete products.
- Object creation should vary without changing the main algorithm.

## How it works

- Put the general workflow in a superclass.
- Move product creation into a factory method.
- Let subclasses override the factory method.
- The superclass works with product abstractions.

## Main roles

- Creator: declares the factory method and uses products.
- Concrete creators: implement the factory method.
- Product: common type.
- Concrete products: created by concrete creators.

## Example from the book

PizzaStore defines the ordering process, while regional subclasses decide which concrete pizza gets created.

## When I should use it

- A class cannot predict the concrete objects it must create.
- A framework wants users to plug in product types.
- You want to localize creation decisions to subclasses.

## When I should be careful

- When subclassing only exists to create one object and adds no value.
- When a small Simple Factory is enough.

## My takeaway

Factory Method keeps the algorithm stable while allowing product creation to vary.

## Related notes

- [[04-simple-factory|Simple Factory]]
- [[06-abstract-factory-pattern|Abstract Factory Pattern]]
