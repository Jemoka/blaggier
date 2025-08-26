+++
title = "Pipes are so bad"
author = ["Houjun Liu"]
tags = ["writing", "fireside"]
draft = false
+++

I, for sure, spend equal if not time writing the data flywheel code compared to architectural changes.

This has been bugging me for awhile, but I haven't had time to sit down and write about it until now. In my mind there are three things that makes coming up with a good take about this (and also implementing it) hard:

1.  This may be a problem that's solved in much of the frontier labs (I would argue more because of workflow optimizations that sidestep the problem, see below)
2.  The "solution" to the problem also seem extremely person-dependent, so it seems hard to make an overall suggestion.
3.  Many people write it off as "necessary engineering"

I don't purport to have a solution to the pipes problem here, but I want to spend a little time now to reflect about what I have been thinking about while spending days at the office writing pipes.


## Pipes and Tasks {#pipes-and-tasks}

First, some words of encouragement/contemplation.

The discussions above about how pipes are bad and probably not an issue actually may discourage the initial reader to give up on thinking about this. Despite this, I will say, that these types of complaints actually map one-to-one to another issue that many people including are passionate about---[todo lists]({{< relref "KBhtodo_lists.md" >}}):

| Property                | Pipes | Todo Lists                     |
|-------------------------|-------|--------------------------------|
| Solved in Corporate     | Y?    | Y (sometimes badly i.e., Jira) |
| Infinitely Personalized | Y     | Y                              |
| "Necessary"             | Y     | Y?                             |

yet it seems to me that there's an [infinitely](https://www.omnigroup.com/omnifocus/) [large](https://www.relay.fm/cortex/) [market](https://www.reddit.com/r/productivity/comments/1hvbee1/fck_your_productivity_system_seriously/) for fiddling with todo lists, and I've even [tried](https://www.condution.com/) [twice](https://github.com/shabang-Systems/cao), which allows for at least some degree of innovation in the field---

Where's my [productivity p\*n](https://calebschoepp.com/blog/2022/productivity-porn/) equivalent pipes p\*n? Pandas was 2008, Spark was 2009, and I really haven't seen anyone with a podcast about better pipes.

What gives?


## What, exactly, are pipes? {#what-exactly-are-pipes}

Perhaps the thing to do, before discussing how we can fix pipes, is to think about what pipes are.

I will first prefix this by saying that these definitions are a [lub]({{< relref "KBhsu_cs143_may062025.md#lub" >}}) of the types of issues I faced while writing pipes for [ASTPrompter](https://arxiv.org/abs/2407.09447), [Stanza](https://stanfordnlp.github.io/stanza/), [simon](https://simon.shabang.io/), and a few other non-public projects. Your mileage may vary based on what the shape of problems you work on.


## Why are pipes hard? {#why-are-pipes-hard}


## What should we do? {#what-should-we-do}
