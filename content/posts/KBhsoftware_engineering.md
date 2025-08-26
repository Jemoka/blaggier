+++
title = "Software Engineering Index"
author = ["Houjun Liu"]
tags = ["index"]
draft = false
+++

## process of Engineering: chronological order {#process-of-engineering-chronological-order}

-   [User Interviews]({{< relref "KBhuser_interviews.md" >}}) + [User Stories]({{< relref "KBhuser_interviews.md#user-story" >}})
-   [Requirements Analysis]({{< relref "KBhrequirements_analysis.md" >}})
-   [Documentation and Specification]({{< relref "KBhdocumentation_and_specification.md" >}})
-   Build the damned thing
    -   [Project Management and Development Methodology (SDLC)]({{< relref "KBhsoftware_development_methodologies.md" >}})
    -   [Task Estimation]({{< relref "KBhtask_estimation.md" >}})
    -   [Software Design and Architecture Patterns]({{< relref "KBhsoftware_design_and_architecture_patterns.md" >}})
    -   [Testing]({{< relref "KBhtesting.md" >}})
-   Build and Release engineering (TODO)


## Other topics {#other-topics}

-   Query optimization (TODO)


## Fucking acronyms to know {#fucking-acronyms-to-know}

-   [AAA Method]({{< relref "KBhtesting.md#arrange-act-assert" >}})
-   [SOLID principles]({{< relref "KBhsoftware_design_and_architecture_patterns.md#solid-principles" >}})
-   STAR method: state behaviorals in Situation, Task, Action, Results


## fundamental trade-off of [Software Engineering]({{< relref "KBhsoftware_engineering.md" >}}) {#fundamental-trade-off-of-software-engineering--kbhsoftware-engineering-dot-md}

The [MIT vs. New Jersey](#fundamental-trade-off-of-software-engineering--kbhsoftware-engineering-dot-md) problem: in [Software Engineering]({{< relref "KBhsoftware_engineering.md" >}}), you can only choose one of FAST or ROBUST.

| Problem    | Fast ("Bell Labs/NJ")   | Robust ("MIT")                                            |
|------------|-------------------------|-----------------------------------------------------------|
| Specs      | Whatever it looks like  | screens, states, UI elements documented; transitions      |
| Time       | "whenever"              | precise projections, track work and dependencies          |
| Testing    | "ran it + didn't crash" | black, white box, code overage, edge/adv. cases           |
| Modular    | Giant function          | object/data model, grouped function, abstraction barriers |
| Failure    | Unpredictable + silent  | Graceful, noisy, error reporting + logging                |
| Language   | Scripting, high level   | Low-level, assembly/bare metal, control, can be difficult |
| Proto.     | Many/Quickly            | Few/Slowly                                                |
| Being Done | Now                     | Later                                                     |

Source: [here](https://www.dreamsongs.com/RiseOfWorseIsBetter.html).


### how to choose? {#how-to-choose}

Which is the better approach? There isn't one. However, here are some critical questions for you to answer:

-   Deadline: what happens if you don't finish today?
-   Release cycle: if you ship a bug, how long can you fix it?
-   Consequences: if the software malfunctions, how bad is it?
-   Life-cycle: how long will the software get used?

{{< figure src="/ox-hugo/2022-09-07_13-00-47_screenshot.png" >}}

So---

As consequences for deadline gets worse, trend towards fast; as consequences for failure gets worse, trend towards robust.
