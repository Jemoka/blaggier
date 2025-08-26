+++
title = "NeBula"
author = ["Houjun Liu"]
draft = false
+++

Framework for subsurface exploration: a DARPA challenge that explores unknown underground environments.

****Main Problem****: there is a high degree of uncertainty that comes from multiple different systems interacting:

-   sensing
-   environment
-   command execution
-   communication
-   mission state
-   health of systems and subsystems

---

[NeBula]({{< relref "KBhnebula.md" >}}) treats uncertainty between systems via a POMDP:

-   construct a simulation of the tasks to coordinate robots
-   solved using [Double Progressive Widening]({{< relref "KBhdouble_progressive_widening.md" >}})


## AISR [NeBula]({{< relref "KBhnebula.md" >}}) {#aisr-nebula--kbhnebula-dot-md}

[NeBula]({{< relref "KBhnebula.md" >}}) autonomy framework extrapolation on an active source seeking. For instance, combining with semantic understanding, we want to "find the red backpack".

-   multi-model semantic understanding
-   learning based mobility (vis a vi [NeBula]({{< relref "KBhnebula.md" >}}))
-   semantic aware source seeking ("finding the thing there")
