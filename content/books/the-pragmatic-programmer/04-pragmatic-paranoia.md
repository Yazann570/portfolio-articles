---
title: "Chapter 4: Pragmatic Paranoia"
description: "Notes on contracts, crashing early, assertions, exceptions, and resource management."
tags:
  - books
  - pragmatic-programmer
  - defensive-programming
  - exceptions
  - contracts
aliases:
  - Pragmatic Paranoia
draft: false
---

# Chapter 4: Pragmatic Paranoia

These notes are my summarized understanding and reflections, not a replacement for the chapter.

## One-line takeaway

Assume mistakes will happen, then design code that detects problems early, protects its assumptions, and cleans up after itself.

## What this chapter is about

This chapter is about defensive thinking. Pragmatic programmers know they cannot write perfect software, so they build systems that fail clearly, enforce expectations, and avoid hidden damage.

The chapter covers:

- Design by Contract
- Dead Programs Tell No Lies
- Assertive Programming
- When to Use Exceptions
- How to Balance Resources

## Key ideas

### 1. You cannot write perfect software

The chapter starts from a realistic idea: bugs will happen. Requirements can be misunderstood. Inputs can be invalid. Other modules can behave unexpectedly. External systems can fail.

Accepting imperfection does not mean accepting low quality. It means designing with the expectation that failures must be detected and handled intentionally.

The goal is to avoid silent corruption. A visible failure is usually easier to fix than a hidden failure that spreads bad data.

### 2. Design by Contract

Design by Contract means every function or module should have clear expectations:

- Preconditions: what must be true before it runs.
- Postconditions: what it guarantees after it runs.
- Invariants: what must always remain true.

This way of thinking makes responsibilities clear. The caller has responsibilities, and the callee has responsibilities.

Example:

- A function that withdraws money may require the amount to be positive.
- After the function succeeds, the balance should be updated correctly.
- The account should never have an invalid state.

Contracts help reduce vague behavior. They make incorrect use visible.

### 3. Crash early

A program that detects a serious problem early should fail clearly instead of continuing in a corrupted state. Continuing after impossible or invalid state can make debugging much harder and can damage data.

Crashing early is not about being careless. It is about refusing to pretend the system is fine when a core assumption has already failed.

This is especially important when a bug creates invalid data. The earlier the system stops, the easier it is to find the real cause.

### 4. Use assertions for impossible cases

Assertions are useful for checking conditions that should never be false if the program is correct. They document assumptions and catch programming mistakes early.

Good assertion examples:

- A supposedly non-null value is actually null.
- An enum state is outside expected transitions.
- A list expected to be sorted is not sorted.
- A branch believed unreachable is reached.

Assertions should not replace normal validation for user input. User input can be wrong in normal operation, so it needs proper handling. Assertions are more about catching developer assumptions that fail.

### 5. Use exceptions for exceptional problems

Exceptions should be used when normal control flow cannot continue. They should not become a replacement for ordinary if statements.

A practical rule:

- Expected business outcomes should be modeled normally.
- Unexpected or exceptional failures can use exceptions.

For example, "user entered wrong password" is usually expected behavior. A missing required configuration file at startup is more exceptional.

### 6. Balance resources

Code that opens, allocates, locks, or starts something should also be responsible for closing, freeing, unlocking, or stopping it.

Resources include:

- Files.
- Database connections.
- Network sockets.
- Locks.
- Memory.
- Threads.
- Transactions.

The rule is simple: finish what you start. Resource leaks often become production bugs because they may not appear immediately during development.

## Tips from this chapter

- You cannot write perfect software.
- Design with contracts.
- Crash early.
- If it cannot happen, use assertions to ensure that it will not.
- Use exceptions for exceptional problems.
- Finish what you start.

## My understanding

This chapter teaches that being careful means being realistic. A good developer does not assume everything will go right. A good developer makes wrong states hard to ignore.

The most important idea for me is that silent failure is dangerous. If code is in a state that should be impossible, continuing normally can make the final bug look unrelated to the real cause.

## How I can apply this

- Write clear validation at system boundaries.
- Think about preconditions and postconditions when designing functions.
- Use assertions for internal assumptions.
- Avoid using exceptions for normal business decisions.
- Always close or release resources reliably.
- Prefer clear failure over corrupted state.

## Questions to ask myself

- What does this function require before it runs?
- What does this function promise after it runs?
- What state should be impossible here?
- Is this exception truly exceptional?
- Who owns this resource, and who releases it?

## Related notes

- [[02-a-pragmatic-approach|Chapter 2: A Pragmatic Approach]]
- [[06-while-you-are-coding|Chapter 6: While You Are Coding]]
- [[08-pragmatic-projects|Chapter 8: Pragmatic Projects]]
