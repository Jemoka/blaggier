+++
title = "SU-CS254 FEB262025"
author = ["Houjun Liu"]
draft = false
+++

We are here to prove a theorem.

<div class="theorem"><span>

The number of satisfying assignments is a problem solvable in [IP(k)]({{< relref "KBhinteractive_proof.md" >}}).

</span></div>

---

<div class="example"><span>

Consider some 3SAT formula:

\begin{equation}
\phi\qty(x) = \qty(x\_1 \vee x\_3 \vee \neg x\_9) \wedge \qty(\neg x\_2 \vee \neg x\_5 \vee x\_{50}) \wedge \dots
\end{equation}

where \\(\phi\qty(x)\\) has exactly \\(k\\) satisfying assignments. This expression has \\(n\\) variables and \\(m\\) clauses. Notice that: \\(x\_1 \vee x\_3 \vee \neg x\_{9}\\) if and only if \\(x\_1 = 0, x\_3 = 0, x\_{9} = 1\\). This has the following properties:

-   \\(\qty(1 - x\_1) \qty(1 - x\_3) x\_{9} = 1\\) if \\(x\_1 \vee x\_3 \vee \neg x\_{9}\\) false
-   \\(1-\qty(1 - x\_1) \qty(1 - x\_3) x\_{9} = 1\\) if \\(x\_1 \vee x\_3 \vee \neg x\_{9}\\) true

This is a [polynomialization]({{< relref "KBhsu_cs254_feb262025.md" >}}) of \\(\phi\\)

</span></div>

We can now say the following things; for \\(\phi\\) , we have:

<div class="theorem"><span>

For a [polynomialization]({{< relref "KBhsu_cs254_feb262025.md" >}}) \\(q\qty(x)\\) of \\(\phi\\), we have

\begin{equation}
\forall x \in \qty {0,1}^{n}, q\qty(x) =1, \text{if x SAT } \phi, q\qty(x) = 0
\end{equation}

</span></div>

<div class="corollary"><span>

the degree of \\(q\\) is at most \\(3m\\) for \\(m\\) clauses

</span></div>

<div class="corollary"><span>

...so any poly-time machine can build \\(q\\) itself

</span></div>

But! Using \\(q\\) is actually hard for a poly-time machine; to compute the number of satisfying assignments for \\(n\\) variables, we can try everything:

\begin{equation}
q\_{\\#sat} = \sum\_{b\_1=0}^{1} \sum\_{b\_2=0}^{1} \dots \sum\_{b\_2=k}^{1} q\qty(b\_1, b\_2, \dots, b\_{n}) = k
\end{equation}

but this is exptime. Now, consider the computation above, with prime \\(p\\) with at least \\(2n\\) many digits:

<div class="theorem"><span>

\\(q\_{\\#SAT}\\) is true IFF \\(q\\) is true mod \\(p\\)

</span></div>

<div class="proof"><span>

because

</span></div>

Now, consider the following BIG BRAIN move:

consider the univariate polynomial:

\begin{equation}
r\qty(x\_1) = \sum\_{b\_2 = 0}^{1} \sum\_{b\_3 = 0}^{1} \dots \sum\_{b\_n = 0}^{1} q\qty(x\_1, b\_2, \dots, b\_{n})
\end{equation}

<div class="theorem"><span>

\\(q\_{\\# \text{SAT}} \ \text{mod}\ p\\) is true IFF \\(r\qty(0) + r\qty(1) = k \ \text{mod}\ p\\)

</span></div>

Can we evaluate this, then? As is, no, but notice that

<div class="corollary"><span>

\\(r\\) is a urinary polynomial of degree \\(\leq 3m\\), and hence has an expression of the form:

\begin{equation}
r' \qty(x\_1) = c\_0 + c\_1 x\_1  + c\_2 x\_1^{2} + \dots
\end{equation}

</span></div>

by just expanding \\(q\\), we get a univariate expression one to expand to \\(n\\). The beneficent is that we don't have to factor the whole thing out, we just have to plug in values.

So suppose our prover generates an \\(r'\\) of this shape, send \\(\ \text{mod}\  p\\) of it back (since otherwise coefficients may get too large), our prover must show that \\(r'\\) behaves just like \\(r\\).

That is, "if you claim that \\(r'\\) is \\(r\\), then you must be claiming that": \\(r\qty(a) = r'\qty(a)\\).

---

clearly there is an accepting strategy, but if the original \\(q\_{\\# \text{SAT}}\\) is false,
