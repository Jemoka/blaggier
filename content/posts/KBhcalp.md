+++
title = "CALP"
author = ["Houjun Liu"]
draft = false
+++

**Contraindicated** offline POMDP solver.

-   Contrained belief state MDP
-   Linear Programming
-   belief set generation
-   Approximate POMDP with Contrainst


## CPOMDPs are Hard {#cpomdps-are-hard}

-   Can't do DP with pruning: optimal policies may be stochastic
-   Minimax quadratically contained program: computational intractable
-   Contained [PBVI]({{< relref "KBhpoint_based_value_iteration.md" >}}) struggles with contraint satisfaction


## CALP Core Idea {#calp-core-idea}

Recast [CPOMDP]({{< relref "KBhcpomdp.md" >}}) as a contrained [belief-state MDP]({{< relref "KBhbelief_state_mdp.md" >}}).

We replace our state-space with our belief space:

-   \\(S = B\\)
-   \\(s\_0 = b\_0\\)

You essentially assume here that there is some finite belief space.
