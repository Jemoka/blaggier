+++
title = "Floyd's Invariant Method"
author = ["Houjun Liu"]
draft = false
+++

To prove properties on [Finite State Machine]({{< relref "KBhfinite_state_machine.md" >}})s, we can construct a proof:

-   stating an invariant
-   proving that the invarient is true for all states
-   for all transitions: assume invarient is true before transition and prove that its true after

So, essentially induction.