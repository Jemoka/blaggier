+++
title = "Cook-Levin Theorem"
author = ["Houjun Liu"]
draft = false
+++

[Cook-Levin Theorem]({{< relref "KBhcook_levin_theorem.md" >}}) states that [SAT]({{< relref "KBhnon_deterministic_turing_machines.md#boolean-formula-satisfiability" >}}) and [3SAT]({{< relref "KBhnon_deterministic_turing_machines.md#3cnf-formula" >}}) are NP-complete. That is, for NP language \\(L \in NP\\), we have \\(L \leq\_{p} SAT\\), meaning

exists a poly-computable function \\(R: \qty {0,1}^{\*} \to \qty {0,1}^{\*}\\) to perform the [polynomial time mapping reduction]({{< relref "KBhmapping_reduction.md#polynomial-time-mapping-reduction" >}}) \\(x \to  \phi\_{x}\\) such that:

\begin{equation}
x \in L \Leftrightarrow R(x) = \phi\_{x} \in \text{SAT}
\end{equation}


## \\(3SAT \in NP\\) {#3sat-in-np}

see [3cnf-formula]({{< relref "KBhnon_deterministic_turing_machines.md#3cnf-formula" >}})


## \\(3SAT\\) is \\(NP\\) hard {#3sat-is-np-hard}

We will give a [polynomial time mapping reduction]({{< relref "KBhmapping_reduction.md#polynomial-time-mapping-reduction" >}}).

For every string \\(w\\), we want to convert it to a [3cnf-formula]({{< relref "KBhnon_deterministic_turing_machines.md#3cnf-formula" >}}) such that \\(w \in A \in NP\\) IFF \\(f(w) = \phi \in 3SAT\\).

---

Proof:

Recall that for any \\(A \in NP\\), let \\(N\\) be a nondeterministic TM deciding \\(A\\) in \\(n^{k}\\). We will then define \\(\phi\\) to simulate \\(N\\) on \\(w\\).

\\(N\\) accepts \\(w\\) if and only if there is an accepting tableau for \\(N\\) on \\(w\\). So, given \\(w\\), we will construct \\(O\qty (|w|^{2k})\\) clause which describes the constraints imposed by the Tableau.

Variables of \\(\phi\\) will encode a Tableau; each \\(\qty(n^{k})^{2}\\) entries of a tableau is a cell containing value in \\(C = Q \cup \Gamma \cup \qty {\\#}\\); now:

Let's define cell[i,j] = value of the cell at row \\(i\\) and column \\(j\\), meaning the \\(j\\) th symbol in the \\(i\\) th configuration.

For every \\(i\\) and \\(j\\) (\\(1 \leq i, j \leq  n^{k}\\)) and for every \\(s \in C\\), we have a Boolean variable \\(x\_{i,j,s} \in \phi\\). Since size of \\(C\\) is constant (its just our variables and symbol set), the total number of variables we have is \\(|C|n^{2k}\\).

We write \\(x\_{i,j,s} = 1 \Leftrightarrow \text{cell}[i,j] = s\\).

Key idea: make \\(\phi\\) so that every satisfying assignment to \\(x\_{i,j,s}\\) corresponds to an accepting tableau for \\(N\\) on \\(w\\) (an in particular an accepting \\(cell[i,j]\\) assignment of the tableau); in particular, we write:

\begin{equation}
\phi = \phi\_{cell} \wedge \phi\_{start} \wedge \phi\_{accept} \wedge \phi\_{move}
\end{equation}

whereby we constrain cells to be only one choice, that the first configuration is starting, the second configuration, and move the transition function.

in particular:


### cell {#cell}

\\(\phi\_{cell}\\): for all \\(i,j\\) there is a unique \\(s \in C\\) with \\(x\_{i,j,s} = 1\\), meaning we can't have two values for a cell

{{< figure src="/ox-hugo/2024-11-11_20-37-48_screenshot.png" >}}

the length of this formula is \\(O\qty (n^{2k})\\)


### start {#start}

the first row of the table equals the start configuration of \\(N\\) on \\(w\\); we just have to program it, and this is of length \\(O(n)\\)

{{< figure src="/ox-hugo/2024-11-11_20-41-07_screenshot.png" >}}


### end {#end}

the last row of the table has an accept state

{{< figure src="/ox-hugo/2024-11-11_20-41-39_screenshot.png" >}}

we only care about the last row, and we want one of our cells to say \\(q\_{accept}\\).


### move {#move}

Transitions are a bit subtle. In particular: if one yields the next row, at most three cells change: that is, your play head can move (1 cell), you can change a symbol under your playhead (1 cell), you can move your playhead (1 cell)

The idea now is to check every 2x3 window of cells for their legality. The key lemma here is that

-   **if** every 2x3 window on the tableau is legal, and top row is the start configuration
-   **then** each row of the tableau is a configuration that yields the next row of the tableau

we show this by strong induction; essentially, assuming that the first \\(k\\) rows are legal, and the next row is illegal, then there MUST be a window which is illegal (because if something went wrong, something wrong must have happened somewhere).

Now, to actually write the boolean formula, notice that \\((i,j)\\) window of a tableau is a tuple \\(\qty(a\_1, \dots, a\_{6}) \in C^{6}\\) of a grid of symbols.

In particular, we AND every window together and check that its legal, either by ORing all of the legal windows together, or ANDING all illegal windows together and say we want none of them:

{{< figure src="/ox-hugo/2024-11-11_21-09-29_screenshot.png" >}}


### [3SAT]({{< relref "KBhnon_deterministic_turing_machines.md#3cnf-formula" >}})ify {#3sat--kbhnon-deterministic-turing-machines-dot-md--ify}

Currently, we have just some polynomial size formula. We now need to turn it into [3SAT]({{< relref "KBhnon_deterministic_turing_machines.md#3cnf-formula" >}}); to do this, introduce new variables \\(z\_{j}\\), and notice that for all \\(a\_{j}\\), the expression

\begin{equation}
\qty(a\_1 \vee a\_2 \vee z\_{1}) \wedge \qty(\neg z\_1 \vee a\_{3} \vee z\_{2}) \wedge \qty (\neg z\_{2} \vee a\_{4} \vee z\_3) \dots  \wedge \qty(\neg z\_{t-3} \vee a\_{t-1} \vee a\_{t})
\end{equation}

is equivalent to

\begin{equation}
\qty (a\_{1} \vee a\_{2} \vee \dots)
\end{equation}

because the letters \\(z\_{j}\\) essentially act as "surrogate" for groups of \\(a\_{j}\\)


### finally, finishing {#finally-finishing}

-   \\(\phi\_{cell} = O\qty(n^{2k})\\) -- deal with the whole tableau
-   \\(\phi\_{start} = O\qty(n^{k})\\) -- deal with the first row
-   \\(\phi\_{accept} = O\qty(n^{k})\\) -- deal with the first row
-   \\(\phi\_{move} = O\qty(n^{2k})\\) -- there is order \\(n^{2k}\\) such entire grid in groups of six

and so this is a polynomial time reduction in 3SAT. We gave a generic method to reduce \\((N,w)\\) to a \\(3CNF\\) formula \\(\phi\\) such that satisfying assignments to \\(\phi\\) directly corresponded to accepting computation histories.


### aside: Tableau {#aside-tableau}

A tableau for \\(N\\) on \\(w\\) is an \\(n^{k}\times n^{k}\\) table, whose rows are configurations of some possible computation history of \\(N\\) on \\(w\\).

Whereby, each row of this Tableau represents some possible configuration, with the first row being the initial configuration. We know this table in \\(n^{k}\\) wide at most because we know this system is verifiable in \\(n^{k}\\), so we can move \\(n^{k}\\) slots to the right before we halt.

We call a **tableau** accepting if the last row of the tableau is accepting.


## Corollary {#corollary}

\begin{equation}
3SAT \in P \text{ IFF } P=NP
\end{equation}

meaning, we don't know if we can solve 3SAT in polynomial time.


## Alternative proof {#alternative-proof}

Luca Trevisan's notes

-   define CIRCUT-SAT: given a circuit \\(C(y)\\), compute if there's an input \\(a\\) such that \\(C(a) = 1\\)
-   CIRCUIT_SAT is NP-hard (simulate a tableau using logical circut with \\(O\qty (n^{2k})\\) gates)
-   Reduce CIRCUIT-SAT to 3SAT in polynomial time
-   Therefore, 3SAT is NP hard
-   we know 3SAT is in NP, so 3SAT in NP complete


## Quasi-Linear Cook-Levin {#quasi-linear-cook-levin}

<div class="lemma"><span>

\\(\text{SAT}\\) is complete for \\(\text{NTIME}\qty( n \text{poly} \log n)\\)

</span></div>
