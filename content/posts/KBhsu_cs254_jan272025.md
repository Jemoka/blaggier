+++
title = "SU-CS254 JAN272025"
author = ["Houjun Liu"]
draft = false
+++

## Key Sequence {#key-sequence}


## Notation {#notation}

-   [A Library of Languages]({{< relref "KBha_library_of_languages.md" >}})


## New Concepts {#new-concepts}

-   [coNP]({{< relref "KBhconp.md" >}})
-   [UNSAT]({{< relref "KBhunsat.md" >}})
-   [coNP complete]({{< relref "KBhunsat.md#conp-complete" >}})
-   [NP intersect coNP]({{< relref "KBhnp_intersect_conp.md" >}})
-   some languages
    -   [PERFECT-MATCHING]({{< relref "KBha_library_of_languages.md#perfect-matching" >}})
    -   [PRIMES]({{< relref "KBha_library_of_languages.md#primes" >}})
    -   [FACTORING]({{< relref "KBha_library_of_languages.md#factoring" >}})


## Important Results / Claims {#important-results-claims}

-   [SAT is in NP]({{< relref "KBhsat_is_in_np.md" >}})
-   [if \\(\text{P}= \text{NP}\\), then \\(\text{NP} = \text{coNP}\\)]({{< relref "KBhconp.md#if-text-p-text-np-then-text-np-text-conp" >}}) (ARROW GOES ONE WAY)
    -   notice also the contrapositive \\(\text{NP} \neq \text{coNP} \implies P \neq NP\\).
-   [UNSAT is coNP-complete]({{< relref "KBhunsat.md#np-conp-iff-unsat-is-in-np" >}})
-   [Hall's Theorem]({{< relref "KBha_library_of_languages.md#hall-s-theorem" >}}) and [Not Hall's Theorem]({{< relref "KBha_library_of_languages.md#not-hall-s-theorem" >}})


## Interesting Factoids {#interesting-factoids}

-   \\(L\\) is NP complete IFF \\(\neg L\\) is coNP complete.
-   some open problems...
    -   does \\(\text{NP} = \text{coNP}\\)
    -   does [NP intersect coNP]({{< relref "KBhnp_intersect_conp.md" >}}) equal to [P]({{< relref "KBhtime_complexity.md#polynomial-time" >}})? (Does having efficiently checkable proofs for both pretense and absence in a set imply we can actually proof it efficiently.)


### Edmond's Conjectures {#edmond-s-conjectures}

-   \\(\text{NP} \neq \text{coNP}\\) "probably easy and not trilling" (which is very wrong)
-   \\(\text{NP} \cap \text{coNP} = P\\) "trilling" (which is true)
