---
title: "Software Entropy"
description: "Notes about software rot, broken windows, and keeping projects clean."
tags:
  - books
  - pragmatic-programmer
  - code-quality
  - software-maintenance
draft: false
---

# Software Entropy

## One-line takeaway

Small problems in a codebase become bigger when everyone accepts them as normal.

## Important ideas

- Bad code, bad design, and ignored bugs are like broken windows.
- If one problem is ignored, more problems become acceptable.
- Clean projects encourage people to keep them clean.
- Even a temporary fix is better than leaving damage invisible.

## My understanding

This section is about protecting the quality of a project. When I see messy code and ignore it, I help create a culture where mess is normal. I do not always need to fix everything perfectly, but I should at least make the problem visible or prevent it from spreading.

## Example

If I find a confusing function, I can:

- Rename variables.
- Add a clear comment.
- Create a TODO issue.
- Write a test before changing it.
- Refactor it if I have enough time.

## How I can apply this

In my projects, I should not leave obvious problems without action. Even small cleanup work helps keep the project healthy.

## Action item

When I see a small broken thing in my code, I will either fix it, document it, or create an issue for it.

## Related notes

- [[01-the-cat-ate-my-source-code]]
- [[03-stone-soup-and-boiled-frogs]]