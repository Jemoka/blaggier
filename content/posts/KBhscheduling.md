+++
title = "scheduling"
author = ["Houjun Liu"]
draft = false
+++

[scheduling]({{< relref "KBhscheduling.md" >}}) is the tool to figure out which thread can run. Because [thread]({{< relref "KBhmultithreading.md#thread" >}})s exist in different [thread state]({{< relref "KBhprocess_control_block.md#id-b4b86ccc-70f3-4d30-b437-2f5fff63b0e6-thread-state" >}})s:

1.  **running**
2.  **blockde** - waiting for an event like disk, network, etc.
3.  **ready** - able to run, but not on CPU yet

a scheduler needs to do the task of ordering ready threads to run, moving running threads to ready when it has ran for enough time. Possible pathways:

1.  ready =&gt; running
2.  blocked =&gt; running
3.  blocked =&gt; ready =&gt; running

You can't go from **ready** to **blocked** because you have to _do something_ to know you are blocked.


## [scheduling]({{< relref "KBhscheduling.md" >}}) "ready" threads {#scheduling--kbhscheduling-dot-md--ready-threads}

The following assumes one core.

Tradeoffs:

1.  minimize time to a useful result---(**assumption**: a "useful result" = a thread blocking or completes)
2.  using resources efficiently (keeping cores/disks busy)
3.  fairness (multiple users / many jobs for one users)

Typically, we focus on (1); approaches that maximize useful results quickly is unfair beacuse you are prioritizing. We can measure this based on "average completion time": tracking the average time elapsed for a particular queue based on the start of scheduling that queue to the time when each thread ends.


### first-come first-serve {#first-come-first-serve}

-   keep all threads in ready in a **queue**
-   run the first thread on the front until it finishes/it blocks for however long
-   repeat

**Problem**: a thread can run away with the entire system, accidentally, through infinite loops


### round robin {#round-robin}

-   keep all threads in a **round robin**
-   each thread can run for a set amount of time called a [time slice](#round-robin) (10ms or so)
-   if a thread terminates before that time, great; if a thread does not, we swap it off and put it to the end of the round robin

**Problem**: what's a good [time slice](#round-robin)?

-   too small: the overhead of context switching is higher than the overhead of running the program
-   too large: threads can monopolize cores, can't handle user input, etc.

Linux uses 4ms. Generally, you want 5-10ms range.

You can think about this as dividing each time slot by time slices, and add as fcfs


### shortest remaining processing time {#shortest-remaining-processing-time}

Run first the thread in queue that will finish the **most quickly** and run it **fully to competition**.

It **gives preference to those that need it the least**: a good side effect is that it gives preference to [I/O Bound Thread]({{< relref "KBhprocess_control_block.md#io-vs-dot-cpu-bound" >}}) first, so we can wait on them during disk operations while [CPU Thread]({{< relref "KBhprocess_control_block.md#io-vs-dot-cpu-bound" >}})s run after the [I/O Bound Thread]({{< relref "KBhprocess_control_block.md#io-vs-dot-cpu-bound" >}}) has ran.

THIS IS **not implementable**----we can't build this beacuse we have to know which thread will finish the most quickly, which we can't because you have to solve the halting problem to know.

Our goal, then is to get as close as possible to the performance of [SRPT](#shortest-remaining-processing-time).

**Problem**:

1.  we don't know which one will finish the most quickly
2.  if we have many threads and one long-running thread, the long running thread won't be able to run ever


### priority based scheduling {#priority-based-scheduling}

Key idea: **behavior tends to be consistent in a thread**. We build multiple **priority queues** to address this.

[priority based scheduling](#priority-based-scheduling) is an approximation of [SRPT](#shortest-remaining-processing-time), using the past performance of the thread to estimate the running time of the thread. Over time, [thread]({{< relref "KBhmultithreading.md#thread" >}})s will move between priority queues, and we **run the topmost thread from the highest priority queue**

1.  threads that aren't using much CPU stay in higher priority queue
2.  threads that are using much CPU gets bumped down to lower priority queues

Similar to [SRPT](#shortest-remaining-processing-time), this also has the good property of **giving preference to those that need it the least**: a good side effect is that it gives preference to [I/O Bound Thread]({{< relref "KBhprocess_control_block.md#io-vs-dot-cpu-bound" >}}) first, so we can wait on them during disk operations while [CPU Thread]({{< relref "KBhprocess_control_block.md#io-vs-dot-cpu-bound" >}})s run after the [I/O Bound Thread]({{< relref "KBhprocess_control_block.md#io-vs-dot-cpu-bound" >}}) has ran.


#### implement based on [time slice](#round-robin) usage {#implement-based-on-time-slice--org7470572--usage}

a [thread]({{< relref "KBhmultithreading.md#thread" >}}) always enters in the **highest** priority queue

1.  if the [thread]({{< relref "KBhmultithreading.md#thread" >}}) uses all of its [time slice](#round-robin) and didn't exit, bump them down a priority queue
2.  if a [thread]({{< relref "KBhmultithreading.md#thread" >}}) blocked before it used all of its [time slice](#round-robin), bump them up a priority queue


#### implement based on aggregate time used: fixing neglect {#implement-based-on-aggregate-time-used-fixing-neglect}

a [thread]({{< relref "KBhmultithreading.md#thread" >}}) has a number for "how much time did you use on the CPU recently"? The priories are sorted by that value, and the smallest time use will be ran.
