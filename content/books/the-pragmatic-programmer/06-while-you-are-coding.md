---
title: "Chapter 6: While You Are Coding"
description: "Notes on deliberate programming, algorithm speed, refactoring, testable code, and generated code."
tags:
  - books
  - pragmatic-programmer
  - coding
  - refactoring
  - testing
aliases:
  - While You Are Coding
draft: false
---

# Chapter 6: While You Are Coding

These notes are my summarized understanding and reflections, not a replacement for the chapter.

## One-line takeaway

Code deliberately: understand why it works, estimate its cost, refactor early, design for testing, and do not rely on code you do not understand.

## What this chapter is about

This chapter focuses on what happens during coding. It warns against accidental success and encourages deliberate thinking, measurement, refactoring, testing, and skepticism toward generated code.

The chapter covers:

- Programming by Coincidence
- Algorithm Speed
- Refactoring
- Code That's Easy to Test
- Evil Wizards

## Key ideas

### 1. Do not program by coincidence

Programming by coincidence means code seems to work, but the developer does not fully understand why. This can happen when we change random lines until the error disappears, copy code without understanding it, or rely on behavior that is not guaranteed.

The danger is that accidental code is fragile. It may pass one test but fail in another context because the real reason it worked was never understood.

Deliberate programming means:

- Know what the code is supposed to do.
- Understand the assumptions.
- Avoid random changes.
- Test the behavior.
- Read documentation when needed.
- Simplify instead of stacking guesses.

### 2. Estimate algorithm speed

Performance is not only about hardware. The shape of the algorithm matters. The chapter encourages developers to estimate the order of algorithms and understand how work grows as input grows.

Examples:

- Constant time: does not grow with input size.
- Linear time: grows directly with input size.
- Quadratic time: grows much faster as input size increases.
- Exponential time: becomes impractical very quickly.

The practical lesson is to ask how the code will behave when data becomes bigger. A solution that works for 20 items may fail for 20,000.

### 3. Test performance estimates

Theoretical estimates are useful, but real measurement is still necessary. Profiling and timing can reveal where the system actually spends time.

Good performance work should avoid guessing. Measure first, change intentionally, then measure again.

### 4. Refactor early and often

Refactoring means improving the structure of code without changing its external behavior. It is not a rewrite for fun. It is maintenance of design quality.

Reasons to refactor:

- Duplication appears.
- A function becomes too long.
- A class has too many responsibilities.
- Naming no longer matches behavior.
- A design choice becomes awkward.
- Tests are hard to write.

The chapter encourages refactoring before the mess becomes too expensive. Small improvements are safer than waiting until a full rewrite feels necessary.

### 5. Design code to be testable

Testability is a design quality. Code that is hard to test is often too coupled, too hidden, or doing too many things at once.

Testable code usually has:

- Clear inputs and outputs.
- Small functions.
- Limited global state.
- Dependency injection where useful.
- Separated business logic.
- Predictable behavior.

Writing tests is not just for finding bugs. It also pressures the design to become cleaner.

### 6. Test your software, or your users will

If developers do not test, the users become the testers. That means bugs are discovered later, in a more expensive and embarrassing place.

Testing should be part of development, not an afterthought.

### 7. Do not use wizard code you do not understand

Generated code and framework wizards can save time, but they can also create hidden complexity. If a tool generates code that the team cannot understand, maintain, or debug, the team becomes dependent on magic.

A pragmatic programmer can use tools, but should not blindly trust them.

## Tips from this chapter

- Do not program by coincidence.
- Estimate the order of your algorithms.
- Test your estimates.
- Refactor early, refactor often.
- Design to test.
- Test your software, or your users will.
- Do not use wizard code you do not understand.

## My understanding

This chapter is about staying awake while coding. It is easy to keep typing because the code compiles or because one example works. The pragmatic approach is to understand the reason behind the behavior.

Refactoring and testing are connected. When code is hard to test, that is often a design smell. Instead of blaming the test, I should inspect the design.

## How I can apply this

- Avoid changing random things when debugging.
- Explain why my solution works before considering it done.
- Think about input size when choosing algorithms.
- Refactor as soon as duplication or confusion appears.
- Design functions and services with testing in mind.
- Be careful with generated code and framework shortcuts.

## Questions to ask myself

- Do I know why this code works?
- What assumptions does this code depend on?
- How does this algorithm grow with input size?
- What would make this easier to test?
- Am I using generated code as a tool or as magic?

## Related notes

- [[03-the-basic-tools|Chapter 3: The Basic Tools]]
- [[04-pragmatic-paranoia|Chapter 4: Pragmatic Paranoia]]
- [[08-pragmatic-projects|Chapter 8: Pragmatic Projects]]
