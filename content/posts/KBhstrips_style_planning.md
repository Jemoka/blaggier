+++
title = "STRIPS-style planning"
author = ["Houjun Liu"]
draft = false
+++

This is a precursor to [MDP]({{< relref "KBhmarkov_decision_process.md" >}}) planning:

-   states: conjunction of "fluents" (which are state)
-   actions: transition between fulents
-   transitions: deleting of older, changed parts of fluents, adding new parts


## Planning Domain Definition Language {#planning-domain-definition-language}

A LISP used to specify a [STRIPS-style planning]({{< relref "KBhstrips_style_planning.md" >}}) problem.


## Hierarchical Task Network {#hierarchical-task-network}

1.  Decompose classical planning into a hierarchy of actions
2.  Leverage High level actions to generate a coarse plan
3.  Refine to smaller problems
