---
title: "Chapter 2: A Pragmatic Approach"
description: "Notes on DRY, orthogonality, reversibility, tracer bullets, prototypes, domain languages, and estimation."
tags:
  - books
  - pragmatic-programmer
  - software-design
  - dry
  - estimation
aliases:
  - A Pragmatic Approach
draft: false
---

# Chapter 2: A Pragmatic Approach

These notes are my summarized understanding and reflections, not a replacement for the chapter.

## One-line takeaway

Good software design is built by reducing duplication, keeping things independent, staying flexible, learning through feedback, and estimating honestly.

## What this chapter is about

This chapter moves from mindset to practical design habits. It explains how pragmatic programmers approach systems so they remain understandable, changeable, and useful.

The chapter covers:

- The Evils of Duplication
- Orthogonality
- Reversibility
- Tracer Bullets
- Prototypes and Post-it Notes
- Domain Languages
- Estimating

## Key ideas

### 1. DRY: do not repeat knowledge

DRY does not only mean avoiding copied lines of code. It means every piece of knowledge should have one clear representation in the system.

Duplication can happen in many forms:

- The same rule written in two services.
- The same validation repeated in the frontend and backend with no shared source of truth.
- Comments that repeat what the code says, then become outdated.
- Documentation that describes behavior differently from the implementation.
- Database rules, API rules, and UI rules that drift apart.

Duplication is dangerous because changing one place is easy, but remembering every related place is hard. The more duplicated knowledge exists, the more expensive change becomes.

### 2. Make reuse easy

Reuse does not happen just because code exists. People reuse code when it is easy to find, easy to understand, and easier than writing a new version.

A reusable component should have:

- A clear name.
- A clear purpose.
- A simple interface.
- Good tests or examples.
- Low coupling to unrelated details.

If reuse is painful, developers will duplicate instead.

### 3. Orthogonality

Orthogonality means unrelated things should not affect each other. In software, this means a change in one part of the system should not create surprise changes in another part.

A system is more orthogonal when modules have focused responsibilities and clean boundaries.

Benefits:

- Easier testing.
- Easier debugging.
- Easier replacement of parts.
- Fewer hidden side effects.
- More confidence when changing code.

A practical test is to ask: if I change this feature, how many unrelated files must also change?

### 4. Reversibility

The chapter warns against treating decisions as permanent. Requirements, tools, databases, APIs, architectures, and business needs can change.

The goal is not to predict the future perfectly. The goal is to avoid designing in a way that makes change impossible.

Examples of reversible thinking:

- Hide database details behind interfaces.
- Keep business rules away from framework-specific code.
- Avoid hardcoding policies that may change.
- Make configuration external when suitable.
- Delay irreversible decisions until there is enough information.

### 5. Tracer bullets

Tracer bullets are small, real, end-to-end implementations that help the team find the target. They are not throwaway experiments. They are thin working slices of the real system.

A tracer bullet might connect the UI, API, database, and deployment pipeline with a very small feature. The value is that it proves the architecture path early and gives feedback from reality.

This is different from building a huge design in isolation and discovering late that the pieces do not fit.

### 6. Prototypes

A prototype is built to learn something. It can be rough, incomplete, and disposable. The important thing is to define what question the prototype is answering.

A prototype can explore:

- A UI idea.
- A risky library.
- A database model.
- A performance concern.
- A workflow with users.

The danger is accidentally turning a prototype into production code. If it was built only for learning, it should not silently become the foundation of the real system.

### 7. Domain languages

A domain language lets the solution speak closer to the problem domain. Instead of forcing every rule into low-level code, some systems benefit from a small language, configuration format, or expression style that matches how users think.

The point is not to make everything complex. The point is to make important rules clear and close to the language of the problem.

### 8. Estimation

Estimation is not guessing to satisfy pressure. It is a skill based on understanding, assumptions, feedback, and iteration.

A useful estimate should include:

- What is included.
- What is excluded.
- What assumptions are being made.
- What risks may change the number.
- How accurate the estimate is expected to be.

Estimates should improve as the code and understanding improve.

## Tips from this chapter

- DRY: do not repeat yourself.
- Make it easy to reuse.
- Eliminate effects between unrelated things.
- There are no final decisions.
- Use tracer bullets to find the target.
- Prototype to learn.
- Program close to the problem domain.
- Estimate to avoid surprises.
- Iterate the schedule with the code.

## My understanding

This chapter is about designing for change. Duplication makes change dangerous. Coupling makes change expensive. Final decisions make change scary. Tracer bullets and prototypes reduce uncertainty by making ideas real earlier.

The biggest practical lesson for me is that design quality is measured by how safely the system can change. A clean system is not only one that works today. It is one that can survive tomorrow's new requirement.

## How I can apply this

- When I copy code, I should ask what knowledge I am duplicating.
- Before adding a dependency between two classes, I should ask if they really need to know about each other.
- For risky features, I should create a small end-to-end slice early.
- For unclear features, I should prototype to learn before committing to the design.
- When estimating, I should explain assumptions instead of giving a fake exact number.

## Questions to ask myself

- Is this rule represented in more than one place?
- Can I change this module without touching unrelated modules?
- Am I making a decision that will be hard to reverse?
- Do I need a tracer bullet or a prototype?
- What assumptions are hidden inside my estimate?

## Related notes

- [[01-a-pragmatic-philosophy|Chapter 1: A Pragmatic Philosophy]]
- [[05-bend-or-break|Chapter 5: Bend, or Break]]
- [[07-before-the-project|Chapter 7: Before the Project]]
