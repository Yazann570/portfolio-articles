---
title: "Command Pattern"
description: "My notes on the Command Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Command Pattern

**Type:** Behavioral pattern

**Book location:** Chapter 6, Encapsulating Invocation

## The idea

Encapsulate a request as an object so it can be parameterized, queued, logged, undone, or executed later.

## Problem it solves

- The object that asks for work should not know how the work is done.
- You need undo, logging, scheduling, macros, or queues.
- Requests should be passed around like regular objects.

## How it works

- Create a command interface with an execute method.
- Concrete commands hold a receiver and call the correct receiver method.
- The invoker stores and triggers commands.
- Commands can also implement undo.

## Main roles

- Command: common execute operation.
- Concrete command: binds an action to a receiver.
- Receiver: does the real work.
- Invoker: triggers commands.
- Client: wires everything together.

## Example from the book

A remote control stores command objects for lights, doors, stereos, and other home automation devices.

## When I should use it

- You are building buttons, menus, jobs, task queues, undo stacks, or macros.
- You want to decouple the invoker from the receiver.
- You want to store actions for later execution.

## When I should be careful

- When the request is trivial and does not need object-like behavior.
- When too many command classes add noise.

## My takeaway

Command is useful anytime an action needs to become data.

## Related notes

- [[20-chain-of-responsibility-pattern|Chain of Responsibility Pattern]]
- [[24-memento-pattern|Memento Pattern]]
