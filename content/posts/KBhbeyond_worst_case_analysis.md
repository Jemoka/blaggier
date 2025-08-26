+++
title = "Beyond Worst-Case Analysis"
author = ["Houjun Liu"]
draft = false
+++

There is no polynomial time algorithm \\(A\\) such that for all 3CNF \\(\varphi\\), \\(A\qty(\varphi)\\) accepts if and only if \\(\varphi\\) is satisfiable.

How do we relax this?

1.  we can say "for most" 3CNF formulas, which means that we have to name a distribution
2.  we can say to satisfy "most" \\(\varphi\\), meaning we can satisfy most clauses of \\(\varphi\\)
3.  allow more than poly-time (SoTA is at \\(1.34\dots^{n}\\)).


## PCP Theorem {#pcp-theorem}

<div class="theorem"><span>

\\(P \neq NP\\) implies no polynomial time algorithm that finds \\(x\\) that satisfies \\(99.9\\%\\) of clauses. In particular, no polytime algorithm that finds \\(x\\) that satisfies \\(\geq \frac{7}{8} + \varepsilon\\) fraction of the clauses.

</span></div>


## Min-Bisection {#min-bisection}

Given a graph \\(G\\), split the vertices into two such that, with \\(S \subseteq V\\), \\(| S | = \frac{n}{2}\\), such that the number of edges \\(s \leftrightarrow \bar{s}\\) is minimized.
