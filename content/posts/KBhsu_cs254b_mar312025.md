+++
title = "SU-CS254B MAR312025"
author = ["Houjun Liu"]
draft = false
+++

## A Tour Through 254B's Complexity Theory {#a-tour-through-254b-s-complexity-theory}


### Chapter 1: No School like the Old School {#chapter-1-no-school-like-the-old-school}

6 lectures, 4 theorems from the 70s.


#### the \*relavitization barrier" to P vs. NP {#the-relavitization-barrier-to-p-vs-dot-np}

<div class="theorem"><span>

Diagonalization is doomed to fail at resolving P vs. NP

</span></div>

<!--list-separator-->

-  what _has_ diagonalization proved?

    It shows a lot of impossibilities ("x can't be applied to y")

    -   Cantor's theorem
    -   [Godel's incompleteness]({{< relref "KBhmathematics.md#godel-s-incompleteness" >}})
    -   [halting problem]({{< relref "KBhmapping_reduction.md#halting-problem" >}})
    -   time/space hierarchy theorems


#### Hopcroft-Paul-Valiant {#hopcroft-paul-valiant}

"On space versus time"

<div class="theorem"><span>

\begin{equation}
\text{TIME}\qty(t\qty(n)) \subseteq \text{SPACE}\qty(\frac{t}{\log  t})
\end{equation}

meaning, in particular,

\begin{equation}
\text{TIME}\qty(t\qty(n)) \subset \text{SPACE}\qty(t\qty(n))
\end{equation}

</span></div>

so [upper-bounding space complexity with time complexity]({{< relref "KBhspace_complexity.md#upper-bounding-space-complexity-with-time-complexity" >}}) is actually strict! We will do this using a "pebble game" reduction.


#### Time-Space Tradeoffs {#time-space-tradeoffs}

So far been studying time and space as separate resources; we ask: is there any tension between using time or space.

"if you want to be very time/space efficient your space/time explodes!"


#### Ladner's Theorem on "NP-intermediate Problems" {#ladner-s-theorem-on-np-intermediate-problems}

Two important types of problems in NP:

-   easy: those in \\(P\\)
-   hard: those that are NP-complete

<div class="theorem"><span>

If P != NP, then there exists a non-NP complete NP problem.

</span></div>


### Chapter 2: The Big Surprise {#chapter-2-the-big-surprise}

20 years' worth of one theorem---the hardness vs. randomness paradigm. "Hardness is in tension with randomness."

"If SAT is hard then randomness is useless." Formally:

<div class="theorem"><span>

If SAT requires exponential size circuits, then P = BPP.

</span></div>


#### ingredients {#ingredients}

-   "pesudorandom generators" (PRGs) and derandomization
-   to prove P = BPP, it suffices to design good PRGs
-   average-case hardness gives good PRGs
-   worst-case hardness can be made harder to average case harder ("hardness amplification")


### Chapter 3: The Research Frontier {#chapter-3-the-research-frontier}


#### beyond worst-case analysis {#beyond-worst-case-analysis}

typically, the standard definition of "solving a task" must be able to handle all possible instances, but we may be able to relax this.

-   **constant factors**: we may be able to find a "goodish" solution; for instance, solving sat in \\(1.8^{n}\\) is far better than \\(2^{n}\\)
-   **average case**: we can change "for all" to "for most", so we don't solve all of a problem but a distribution subpart of it
-   **approximate**: we can change the acceptance criteria to be weaker (for [SAT]({{< relref "KBhnon_deterministic_turing_machines.md#boolean-formula-satisfiability" >}}), for instance, we perhaps can relax it such that we only subset of clauses is satisfied)


#### hardness within P {#hardness-within-p}

So far, we think of all polynomial operations in [P]({{< relref "KBhtime_complexity.md#polynomial-time" >}}) as "efficient." \\(n^{3}\\), in reality, isn't that efficient. Often times, with large \\(n\\), even \\(n^{2}\\) is too slow.

<!--list-separator-->

-  dynamic programming problems

    Longest Common Subsequence --- whether or not there exists a possibly-not-continuous subsequence of an input sequence. Big open problem: does there exist an \\(O\qty(n^{1.99})\\) time algorithm.

    We'll see connections of this task to the [P vs. NP]({{< relref "KBhp_vs_np.md" >}}) problem! This is quite surprising. We can show the connection with \\(O\qty(n^{1.99})\\) and [P vs. NP]({{< relref "KBhp_vs_np.md" >}}) with a reduction!
