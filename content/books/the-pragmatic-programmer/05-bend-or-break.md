---
title: "Chapter 5: Bend, or Break"
description: "Notes on decoupling, metadata, temporal coupling, services, models, views, and blackboards."
tags:
  - books
  - pragmatic-programmer
  - architecture
  - decoupling
  - concurrency
aliases:
  - Bend, or Break
draft: false
---

# Chapter 5: Bend, or Break

These notes are my summarized understanding and reflections, not a replacement for the chapter.

## One-line takeaway

Systems survive change when they are loosely coupled, configurable, concurrent where needed, and organized around clean communication between parts.

## What this chapter is about

This chapter is about flexibility. Software that is too rigid eventually breaks under changing requirements. Pragmatic programmers design systems that can bend without collapsing.

The chapter covers:

- Decoupling and the Law of Demeter
- Metaprogramming
- Temporal Coupling
- It's Just a View
- Blackboards

## Key ideas

### 1. Minimize coupling

Coupling is the amount of knowledge one part of the system has about another. High coupling means changes spread everywhere. Low coupling means parts can change independently.

The Law of Demeter encourages code to avoid reaching through objects to talk to distant objects. In simple terms, do not make one object know too much about the internal structure of another.

Bad sign:

```text
order.customer.address.country.code
```

This style can reveal that the current code knows too much about the shape of other objects.

Better design often means asking the object for what you need at the right level of abstraction.

### 2. Configure, do not integrate

Some details should not be hardcoded into the system. Configuration and metadata allow behavior to change without rewriting core code.

Examples:

- Feature flags.
- Environment-specific settings.
- Validation rules.
- Routing rules.
- Display labels.
- External service settings.

The chapter's deeper point is that abstractions should live in code, while details that change often can live in metadata.

### 3. Separate abstractions from details

A flexible system keeps stable ideas separate from changing details. Business concepts, interfaces, and rules should not be tangled with implementation details like file paths, UI labels, or database vendor-specific behavior.

This makes the system easier to adapt when details change.

### 4. Analyze workflow to improve concurrency

Temporal coupling happens when things are forced to happen in a specific order even when they do not logically need to. Some steps must be sequential, but others can happen independently or concurrently.

A good design asks:

- What must happen first?
- What can happen at the same time?
- What can be delayed?
- What can be retried independently?

This matters for performance, responsiveness, and system design.

### 5. Design using services

The chapter pushes toward independent services with clear responsibilities and interfaces. A service should hide its internal details and expose behavior that other parts can use safely.

This idea applies even inside one application. A service does not need to mean microservices. It can mean a well-defined module that owns a responsibility.

### 6. Separate views from models

A model should represent the important state and behavior. A view should present it. Mixing them makes the system harder to change because UI decisions and business decisions become tangled.

The model-view separation makes it possible to change the UI, add another interface, or test business rules without needing the display layer.

### 7. Blackboards

A blackboard architecture lets independent participants communicate through a shared space of facts or events. Each participant can add information, observe changes, and act when enough information is available.

This is useful when the workflow is not a simple linear chain. It can help coordinate different agents while keeping them independent.

Modern examples with similar ideas include event-driven systems, message queues, shared state machines, and workflow engines.

## Tips from this chapter

- Minimize coupling between modules.
- Configure, do not integrate.
- Put abstractions in code, details in metadata.
- Analyze workflow to improve concurrency.
- Design using services.
- Always design for concurrency.
- Separate views from models.
- Use blackboards to coordinate workflow.

## My understanding

This chapter is about avoiding rigidity. Code becomes fragile when every part knows too much about every other part. A change in one detail should not break unrelated areas.

The most practical idea for me is to look at every dependency and ask whether it is necessary. If two things are unrelated, the code should not make them affect each other.

## How I can apply this

- Keep controllers thin and avoid putting business logic inside UI or framework code.
- Use interfaces or service boundaries where they reduce direct knowledge.
- Move changeable settings to configuration when suitable.
- Avoid hardcoding environment-specific details.
- Think about ordering and concurrency when designing workflows.
- Keep models separate from how they are displayed.

## Questions to ask myself

- Does this module know too much about another module?
- Is this detail likely to change?
- Should this be configuration instead of code?
- Are we forcing steps to happen sequentially without a real reason?
- Can this UI change without changing business logic?

## Related notes

- [[02-a-pragmatic-approach|Chapter 2: A Pragmatic Approach]]
- [[04-pragmatic-paranoia|Chapter 4: Pragmatic Paranoia]]
- [[06-while-you-are-coding|Chapter 6: While You Are Coding]]
