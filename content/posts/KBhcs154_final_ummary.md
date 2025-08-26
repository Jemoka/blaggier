+++
title = "CS154 Final Summary"
author = ["Houjun Liu"]
draft = false
+++

## Finite Automata {#finite-automata}

[Deterministic Finite Automata]({{< relref "KBhdeterministic_finite_automata.md" >}}), [computability]({{< relref "KBhcomputability.md" >}}) (in particular [regular language]({{< relref "KBhregular_language.md" >}})s) and [Non-deterministic Finite Automata]({{< relref "KBhnondeterministic_finite_automata.md" >}}) (i.e. verified guessing)

[optimization]({{< relref "KBhoptimization.md" >}}) and [Learning DFA]({{< relref "KBhdeterministic_finite_automata.md#learning-dfa" >}})

we were then able to characterize hardness with [Streaming Algorithm]({{< relref "KBhstreaming_algorithms.md" >}}) and [Communication Complexity]({{< relref "KBhprotocol.md#communication-complexity" >}})


## Computability Theory {#computability-theory}

[turing machine]({{< relref "KBhturing_machinea.md" >}})s, and [Oracle Turing Machine]({{< relref "KBhoracle_reduction.md#oracle-turing-machine" >}}), and things that are [decidable]({{< relref "KBhturing_machinea.md#decidable" >}}) vs. [recognizable]({{< relref "KBhturing_machinea.md#recognizable" >}})

through [mapping reduction]({{< relref "KBhmapping_reduction.md" >}})s, we are then able to make [decidability]({{< relref "KBhturing_machinea.md#decidable" >}}) and [recognizablility]({{< relref "KBhturing_machinea.md#recognizable" >}}) claims for many languages

we learned about the hierarchy of hard problems through the notion of [SUPERHALT]({{< relref "KBhoracle_reduction.md#superhalt" >}}) in [Oracle Turing Machine]({{< relref "KBhoracle_reduction.md#oracle-turing-machine" >}})s

We tied mathematics and computation together, and showed [Godel's Theorem]({{< relref "KBhmathematics.md#limitations-of-mathematics" >}}) about the [Limitations of Mathematics]({{< relref "KBhmathematics.md#limitations-of-mathematics" >}})

We described the notion of information encoding though [Kolomogorov Complexity]({{< relref "KBhkolomogorov_complexity.md" >}})


## Complexity Theory {#complexity-theory}

We described [Time Complexity]({{< relref "KBhcomputational_complexity_theory.md#time-complexity" >}}), [P vs. NP]({{< relref "KBhp_vs_np.md" >}}), and [NP-Completeness]({{< relref "KBhnp_complete.md" >}}); nondeterminism came back fully. We then described [SAT]({{< relref "KBhnon_deterministic_turing_machines.md#boolean-formula-satisfiability" >}}) and [3SAT]({{< relref "KBhnon_deterministic_turing_machines.md#3cnf-formula" >}}), which were [NP-Complete]({{< relref "KBhnp_complete.md" >}})

We then using [polynomial time mapping reduction]({{< relref "KBhmapping_reduction.md#polynomial-time-mapping-reduction" >}}) to come up with [many, many NP-Complete things]({{< relref "KBhnp_complete.md#many-many-np-complete-things" >}}), and saw a hierarchy of harder problems through the idea of [Oracle Polynomial Time]({{< relref "KBhoracle_polynomial_time.md" >}}) and \\(NP^{NP^{{NP}^{\dots}}}\\)


## Other Ideas {#other-ideas}

-   if you assume you can't factor (i.e. that factoring is super hard), for instance, you made a **one-way function**; this means...
    -   could get random instances in SAT which are hard
    -   zero-knowledge proofs, because you can check the factor but not do the factoring
    -   you could deterministically increase entropy: "randomness is weak"
