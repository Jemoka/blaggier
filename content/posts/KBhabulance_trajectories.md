+++
title = "Ambulance Trajectories"
author = ["Houjun Liu"]
draft = false
+++

Problem: **current ambulance routing don't optimize significantly on the contextual cases for stroke patients**

Stroke hospitals: PSC is smaller than a CSC.


## Previous work {#previous-work}

Routing methods---

-   route all patient to nearest PSC, which is worse than
-   route high risk patient to CSC, which is worse than
-   always route to CSC

This is counter-intuitive. How do we solve, given a stroke condition, available PSC/CSC locations, traffic, etc., for where and how to route a patient?


## Ambulance MDP formulation {#ambulance-mdp-formulation}

-   \\(S\\): (location, symptom onset, known stroke type, stroke type)
-   \\(A\\):
    -   route to clinic, route to [specific] PSC, route to [specific] CSC
    -   will never be downrouted (for instance, if you are at a PSC you will always either stay or go to CSC)
-   \\(T(s'|s,a)\\):
    -   location changes
    -   distance
-   \\(R(s,a)\\):
    -   "probability of patient outcome" \\(P(success|time)\\) (Holodinsky, et. al. 2018)
    -   if stroke type is unknown, its a weighted average


## Solving {#solving}

[Forward Search]({{< relref "KBhforward_search.md" >}}), depth of 2: patient will either get transported or bounced and transported.


## Results {#results}

-   status quo: people near Stanford hospital/ChanZuck are better
-   MDP: smoother gradient
