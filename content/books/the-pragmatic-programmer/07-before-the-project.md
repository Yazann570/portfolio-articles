---
title: "Chapter 7: Before the Project"
description: "Notes on requirements, impossible puzzles, readiness, specifications, and formal methods."
tags:
  - books
  - pragmatic-programmer
  - requirements
  - planning
  - design
aliases:
  - Before the Project
draft: false
---

# Chapter 7: Before the Project

These notes are my summarized understanding and reflections, not a replacement for the chapter.

## One-line takeaway

Before building, dig for the real problem, learn the user's world, question constraints, and avoid treating specifications or tools as substitutes for thinking.

## What this chapter is about

This chapter focuses on the work that happens before coding starts. It explains that requirements are discovered, not simply collected. It also warns against starting too early, over-trusting specifications, and letting diagrams or tools replace judgment.

The chapter covers:

- The Requirements Pit
- Solving Impossible Puzzles
- Not Until You're Ready
- The Specification Trap
- Circles and Arrows

## Key ideas

### 1. Requirements are discovered

Users often describe solutions, habits, or current processes instead of the real requirement. A developer has to dig deeper to find the need behind the request.

For example, a user may ask for a button, report, screen, or export file. The real requirement may be faster decision-making, fewer errors, or better visibility.

Good requirements work means asking:

- What problem are we solving?
- Who has this problem?
- What happens if we do nothing?
- What does success look like?
- What constraints are real?
- What assumptions are hidden?

### 2. Work with users to think like users

A developer cannot build good software from the developer's viewpoint only. The chapter emphasizes learning the user's language, workflow, frustrations, and goals.

This means spending time with users, asking questions, watching how work happens, and building a shared vocabulary.

The project glossary is important because different people may use the same word differently or different words for the same concept. Confused language creates confused software.

### 3. Abstractions last longer than details

Details change faster than core abstractions. A good requirement should capture the deeper business concept, not only the current implementation detail.

For example:

- "Students need to understand available course options" is more stable than "show this exact table layout."
- "The system must verify identity" is more stable than "use this exact login screen."

This does not mean details are unimportant. It means the design should recognize which ideas are stable and which are likely to change.

### 4. Solve impossible puzzles by finding the box

When a problem feels impossible, the hidden issue is often an assumed constraint. The chapter suggests identifying the actual boundaries of the problem instead of blindly accepting every limitation.

Useful questions:

- Is this constraint real or assumed?
- Who created this rule?
- Can the requirement be reframed?
- Is there another way to satisfy the goal?
- What would happen if this constraint was removed?

This is a powerful problem-solving habit because many hard problems become easier when the real constraints are understood.

### 5. Start when you are ready

The chapter warns against starting only because the schedule says so. If there are serious doubts, unclear goals, or unresolved risks, those signals should be taken seriously.

This does not mean procrastinating. It means listening to professional intuition and clarifying before building the wrong thing.

### 6. Avoid the specification trap

Specifications are useful, but they can become harmful when treated as perfect truth. A document cannot capture every nuance of a real system. Over-specifying can also remove room for judgment and discovery.

The goal is enough specification to guide the work, not so much that it becomes a rigid substitute for collaboration.

### 7. Tools and diagrams do not design for you

Formal methods, diagrams, and expensive tools can help, but they do not automatically create good design. A clean diagram can still represent a bad system.

The pragmatic view is to use tools when they clarify thinking, not to use them as proof that thinking happened.

## Tips from this chapter

- Do not gather requirements, dig for them.
- Work with a user to think like a user.
- Abstractions live longer than details.
- Use a project glossary.
- Do not think outside the box, find the box.
- Listen to nagging doubts, start when you are ready.
- Some things are better done than described.
- Do not be a slave to formal methods.
- Expensive tools do not produce better designs.

## My understanding

This chapter changes the idea of requirements from passive collection to active discovery. Users may know their pain very well, but they may not always know the best software shape for solving it. The developer's job is to understand the real goal, not just copy the first requested interface.

The most useful idea for me is the project glossary. Clear words create clear code. If the team does not agree on names, the codebase will probably show the confusion later.

## How I can apply this

- Ask why a feature is needed before deciding how to build it.
- Write down domain terms and keep names consistent in code.
- Separate stable business ideas from changeable UI details.
- Challenge constraints respectfully when a task feels impossible.
- Avoid starting major implementation while core doubts are unresolved.
- Use diagrams as thinking tools, not decoration.

## Questions to ask myself

- Is this a real requirement or a proposed solution?
- Do I understand the user's workflow?
- What words need to be in the project glossary?
- What hidden constraint is making this look impossible?
- Are we specifying enough to build, or too much to think?

## Related notes

- [[01-a-pragmatic-philosophy|Chapter 1: A Pragmatic Philosophy]]
- [[02-a-pragmatic-approach|Chapter 2: A Pragmatic Approach]]
- [[08-pragmatic-projects|Chapter 8: Pragmatic Projects]]
