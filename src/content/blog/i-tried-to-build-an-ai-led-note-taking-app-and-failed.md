---
title: "I tried to build an AI-led note-taking app and failed."
description: "I have ADHD and my brain processes much more information than people usually do."
pubDate: 2026-11-10
lang: en
draft: false
---

Backstory short: I have ADHD and my brain processes much more information than people usually do. This led to the fact that I generate a big load of ideas, which I store on note-taking apps like Google Keep or Apple Notes. The issue is: my notes are messy as my brain.

Imagine you make a snap of what’s inside your brain, and then after storing it, you can’t find it. Never. The obvious solution would be to organize notes by tags, dates, themes, life periods, etc. But that requires a lot of patience and immunity towards routine, which people with ADHD don’t have. So storing works like a pathetic version of a library. You saved the data, but can’t find it, remember it and even worse: use it. Which is the point.

For me, notes were always a useful tool for thinking, brainstorming, planning, building, etc. I store business ideas, concepts, philosophy, knowledge, economic factors and I use it all daily for creativity, the job and business stuff.   
  
So I thought, why not have such an app, which organizes notes for me? At first, I went to find apps which already exist, ‘cause I thought, well that’s an obvious idea, someone pretty sure put his hands on it. I scrolled through Reflect, Mem, Notion, plugins for Obsidian and all of them worthless. Basically they use AI to generate notes, transcript calls, but not to organize the place, so the process is always manual and up to the owner.

This is how we started. My partner and I started brainstorming and we ended up vibecoding a concept of the perfect app.

(picture)

At first, we tried an auto-tagging scheme, where AI drops tags on notes, and the app sorts notes based on the tags connected to folders (exactly like Apple Notes Smart Folders work). But we ended up with too many tags, and design started to fall under them. It’s just not convenient to navigate through hundreds of tags. So we dropped the idea.

After a couple of iterations, we changed the approach totally. We won’t reinvent the wheel with the UI until we get proper results from AI with note-sorting. That’s how we setup the entire note-taking application right in the cursor.

(picture)

This is how it worked.

We’ve connected the OpenAI API and established 7-9 various organizing methods for notes. The idea was to escort the note through each method and see how AI handles organizing.

We needed to check for correctness. To do so, we showed the model definition of good. How? By adding notes to the folder as we think of it. Manually. And to check correctness, we simply compared where we put the notes and where each AI-led organizing method did so. That’s how we got the error rate.

And that’s how we got our first problem.

AI made a lot of mistakes. Shorter the note, less understandable the context, more mistakes the model does. Our error rate across various methods was around 30%. So in 30% of cases the model is wrong and the note ends up in the wrong place. We couldn’t fix it. It was the model limitation.

But I thought, well if it’s a valuable job, to automatically organize notes, we’ll find the audience, we’re gonna sell the idea, implement better models, new methods. So I went to look for the audience. That was the second issue. I looked through hundreds of chats, asking for beta users for AI-driven note-taking app, but nobody replied. So the demand for such solution was near 0. Those who already established their massive note-taking systems said: It’s just a feature. there is no value in organizing methods.   
  
It was sad, but we learned a lot from the experience. Sometimes external limitations will block your way out and you can only wait for another moment, for new technology, trying to ship stuff again.
