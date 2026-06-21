---
title: "Interpreter Pattern"
description: "My notes on the Interpreter Pattern from Head First Design Patterns."
tags:
  - books
  - software-engineering
  - design-patterns
  - head-first-design-patterns
draft: false
---
# Interpreter Pattern

**Type:** Behavioral pattern

**Book location:** Appendix, Leftover Patterns

## The idea

Represent a grammar and define an interpreter for sentences in that grammar.

## Problem it solves

- You need to evaluate expressions in a small language.
- The grammar is stable and not too complex.
- You want each grammar rule represented as an object.

## How it works

- Create an expression interface.
- Create concrete expression classes for grammar rules.
- Build an abstract syntax tree from expressions.
- Interpret the tree using a context.

## Main roles

- Abstract expression: interpret operation.
- Terminal expression: grammar leaves.
- Nonterminal expression: grammar combinations.
- Context: shared interpretation information.

## Example from the book

A small language can be represented as classes, where each grammar rule knows how to interpret itself.

## When I should use it

- The language grammar is simple.
- You need simple rule engines, expressions, or mini-languages.
- Performance is not the main concern.

## When I should be careful

- When the grammar is large or complex.
- When parser generators or existing language tools are better.

## My takeaway

Interpreter is powerful for small languages but can become heavy quickly.

## Related notes

- [[13-composite-pattern|Composite Pattern]]
- [[26-visitor-pattern|Visitor Pattern]]
