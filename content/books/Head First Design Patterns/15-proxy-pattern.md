---
title: "Proxy Pattern"
description: "My notes on the Proxy Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Proxy Pattern

**Type:** Structural pattern

**Book location:** Chapter 11, Controlling Object Access

## The idea

Provide a stand-in object that controls access to another object.

## Problem it solves

- Access to a real object needs control.
- The real object may be remote, expensive, sensitive, or lazy-loaded.
- Clients should interact with a consistent interface.

## How it works

- Create a proxy that implements the same interface as the real subject.
- The proxy holds or locates the real subject.
- The proxy controls access, adds security, performs lazy loading, or manages remote calls.

## Main roles

- Subject: common interface.
- Real subject: actual object.
- Proxy: controls access and delegates to the real subject.
- Client: uses the subject interface.

## Example from the book

A proxy controls access to remote gumball machines, virtual CD cover images, or protected objects.

## When I should use it

- You need lazy loading or expensive object creation.
- You need remote access.
- You need protection or access checks.
- You need logging, caching, or monitoring around another object.

## When I should be careful

- When the proxy hides latency or errors that clients must understand.
- When a decorator would better represent added responsibilities.

## My takeaway

Proxy is about controlling access. Decorator is about adding behavior.

## Related notes

- [[03-decorator-pattern|Decorator Pattern]]
- [[09-adapter-pattern|Adapter Pattern]]
