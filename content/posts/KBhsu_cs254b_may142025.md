+++
title = "SU-CS254B MAY142025"
author = ["Houjun Liu"]
draft = false
+++

## Part 1 {#part-1}

-   [Relativization Barrier to P vs. NP]({{< relref "KBhbaker_gill_and_solovay.md" >}}): \\(\exists\\) oracles \\(A\\) such that \\(P^{A} = NP^{A}\\),
-   Space and Time: \\(\text{TIME}\qty(t) \subseteq \text{SPACE}\qty(\frac{t\qty(n)}{\log \qty(t\qty(n))} )\\)
    -   pebbling game (constant degree digraph, can only place if pebble adjacent): can be pebbled with \\(\leq O\qty( \frac{v}{\log v})\\) pebbles
-   Time Space Constraints:
    -   \\(\text{SAT} \not \in \text{TISP}\qty(n^{1.8}, n^{o\qty(1)})\\), no one machine can do both
-   [Ladner's Theorem]({{< relref "KBhsu_cs254b_apr212025.md#ladner-s-theorem" >}}): assuming P != NP, there are NP-intermediate languages


## Part 2 {#part-2}

Hardness vs. Randomness

<div class="theorem"><span>

If [SAT]({{< relref "KBhnon_deterministic_turing_machines.md#boolean-formula-satisfiability" >}}) requires \\(2^{\Omega\qty(n)}\\) circuits, then \\(\text{P} = \text{BPP}\\).

</span></div>

-   if you have an average-case hard problem, you can get a pseudo-random generator \\(\qty(H^{\*})\\) --- [Probabilistic Random Generator]({{< relref "KBhprobabilistic_random_generator.md" >}})
-   PRG generation from randomness
    -   [Yao's Next-Bit Prediction Lemma]({{< relref "KBhyao_s_next_bit_prediction_lemma.md" >}})
    -   combinatorial designs (for input size distributions)

**hardness amplification**:

-   worts-case hardness =&gt; average case hardness
-


## Frontier {#frontier}

-   beyond worst-case analysis
-   hardness within P
-   undirected [STCONN]({{< relref "KBhstconn.md" >}}) and expanded graphs


## Beyond Worst-Case {#beyond-worst-case}

[Beyond Worst-Case Analysis]({{< relref "KBhbeyond_worst_case_analysis.md" >}})
