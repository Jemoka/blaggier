+++
title = "SU-CS254 JAN082025"
author = ["Houjun Liu"]
draft = false
+++

## Notation {#notation}


## New Concepts {#new-concepts}

-   [Church-Turing Thesis]({{< relref "KBhextended_church_turing_thesis.md" >}})
-   [turing machine]({{< relref "KBhturing_machinea.md" >}})
    -   [multi-tape TM theorem]({{< relref "KBhtime_complexity.md#multi-tape-tm-theorem" >}})
-   [Time Complexity]({{< relref "KBhtime_complexity.md" >}})
    -   [P]({{< relref "KBhtime_complexity.md#polynomial-time" >}})
    -   [NP]({{< relref "KBhnon_polynomial_time.md" >}}): [verifier formulation of NP]({{< relref "KBhnon_polynomial_time.md#verifier-formulation-of-np" >}})
-   [non-determinism]({{< relref "KBhnon_deterministic_computation.md" >}})


## Important Results / Claims {#important-results-claims}

-   [Turing Machine as a universal algorithm]({{< relref "KBhturing_machinea.md#turing-machine-as-a-universal-algorithm" >}})
-   [properties of turing machines]({{< relref "KBhturing_machinea.md#why-tm-is-awesome" >}})
-   [Church-Turing thesis as local steps]({{< relref "KBhturing_machinea.md#church-turing-thesis-as-local-steps" >}})
-   [time hierarchy theorem]({{< relref "KBhtime_complexity.md#time-hierarchy-theorem" >}})


## Why stuff is great {#why-stuff-is-great}

-   [why TM is awesome]({{< relref "KBhturing_machinea.md#why-tm-is-awesome" >}})
-   [why NP is awesome]({{< relref "KBhnon_deterministic_computation.md#why-np-is-awesome" >}})


## Questions {#questions}


## Scratch {#scratch}

Let \\(L \in P\\), and \\(M\\) be the polytime TM that decides \\(L\\). Define \\(M'\\) to be \\(M\\) with \\(q\_{\text{accept}}\\) and \\(q\_{\text{reject}}\\) swapped. Fact: \\(M'\\) decides \\(\neg L\\).
