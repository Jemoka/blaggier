+++
title = "What Happens if P=NP?"
author = ["Houjun Liu"]
draft = false
+++

...what can we solve efficiently?


## the "easy" cases {#the-easy-cases}

by definition all NP/NP Complete problems...

-   SAT
-   3COL
-   [Hamiltonian path problem]({{< relref "KBhnon_deterministic_turing_machines.md#hamiltonian-path-problem" >}})
-   and also anything in coNP because [if \\(\text{P}= \text{NP}\\), then \\(\text{NP} = \text{coNP}\\)]({{< relref "KBhconp.md#if-text-p-text-np-then-text-np-text-conp" >}})
    -   UNSAT
    -   NOT-3COL
    -   ...


## review: certificates definition of NP, coNP {#review-certificates-definition-of-np-conp}

\\(L \in \text{NP}\\) IFF \\(\exists\\) polytime verifier \\(V\\) such that \\(x \in L \Leftrightarrow \exists  w \in \qty {0,1}^{\text{poly}\qty(|x|)}, V\qty(x,w) = 1\\)

\\(L \in \text{coNP}\\) IFF \\(\exists\\) polytime verifier \\(V\\) such that \\(x \in  L \Leftrightarrow \forall w \in \qty {0,1}^{\text{poly}\qty(|x|)} V\qty(x,w) = 1\\)

**notice how this difference exists only between existential vs universal quantifier** (we got here to the expression coNP above by thinking of it as \\(x \not \in L \Leftrightarrow \exists w \qty {0,1}^{\text{poly}\qty(|x|)} V\qty(x,w)=1\\), and the negating this statement)
