+++
title = "SU-CS254B MAY192025"
author = ["Houjun Liu"]
draft = false
+++

## Partial SAT Algorithms {#partial-sat-algorithms}

1.  run very fast
2.  always give the right answer
3.  may time out (i.e., will give up on certain instances)

"Key question: can you make my algorithm fail?"


### our answer... {#our-answer-dot-dot-dot}

-   uniform random 3cnf instances
-   n: number of variables
-   \\(\triangle\\), "clause density": the number of clauses; where \\(\Delta = \frac{n}{m}\\).
-   output \\(\phi\\), \\(\Delta\\) n random clauses, independently chosen


### SAT or UNSAT {#sat-or-unsat}

Sampling \\(\phi \sim R\_{3}\qty(n, \triangle)\\) likely to be SAT or UNSAT? By your choice of \\(\Delta\\), as: \\(\Delta \geq 5.2 = \qty(\log\_{\frac{7}{8}} \qty(\frac{1}{2}))\\), then as \\(\lim\_{n\to \infty } \text{Pr}\_{\phi \sim R\_{3}\qty(n, \Delta)}\qty [\phi \text{SAT}] =0\\).


### 3-SAT Refuter {#3-sat-refuter}

A 3-SAT refuter is a polynomial time algorithm where:

-   given any 3CNF instance, it outputs SAT, UNSAT, or no-comment
-   never wrong: it won't say unsat for SAT, and converse
-   given random \\(\phi \sim R\_{3}\qty(n, \Delta)\\), we have \\(\text{Pr}[\text{alg}\qty(\ph) = \text{unset}] > 99.0\\%\\)


#### Feige's Hypothesis {#feige-s-hypothesis}

"for all constant \\(\triangle\\), a \\(\triangle\\) 3 sat refuters do not exist"

This implies  P != NP


## Planted Clique Problem {#planted-clique-problem}

In polytime, distinguish between:

1.  \\(G \sim G\qty(n, \frac{1}{2})\\)
2.  \\(G \sim G\qty(n, \frac{1}{2})\\) with a clique of size \\(k\\) planted randomly, where \\(b \gg 2 \log n\\)
