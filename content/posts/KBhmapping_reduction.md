+++
title = "mapping reduction"
author = ["Houjun Liu"]
draft = false
+++

A language \\(A\\) is mapping reducible to language \\(B\\), written as \\(A \leq\_{m} B\\), if there is a computable function \\(f: \Sigma^{\*} \to \Sigma ^{ \*}\\) such that for every \\(w\\), \\(w \in A \Leftrightarrow f(w) \in B\\).

This is sometimes called a "many-to-one" reduction because often times you want to have multiple \\(w\\) mapping to the same \\(f(w)\\).

We remember this as "A is weaker ("not stronger") than B"; or "A is reducable to B"


## Recipe {#recipe}

For some \\(A \leq\_{M} B\\), we have three mechanical parts:

there exists some [computable function](#computable-function) \\(f\\) from \\(\Sigma^{\*} \to  \Sigma^{\*}\\) which should take \\(x \in A \Leftrightarrow f(x) \in B\\)


## General idea {#general-idea}

prove a language \\(L\\) is undecidable by proving that if \\(L\\) is decidable, so is \\(A\_{TM}\\). In particular, we reduce \\(A\_{TM}\\) to the language \\(L\\) (i.e. make a machine for \\(A\_{TM}\\) from \\(L\\) --- \\(A\_{TM} \leq\_{M} L\\)).


## computable function {#computable-function}

a function \\(f: \Sigma^{\*} \to \Sigma^{ \*}\\) is a [computable function](#computable-function) if there is a [turing machine]({{< relref "KBhturing_machinea.md" >}}) \\(M\\) which halts with just \\(f(w)\\) written on its tape, for every input \\(w\\). the function returns the tape after \\(M\\) halts.


## additional info {#additional-info}


### polynomial time mapping reduction {#polynomial-time-mapping-reduction}

[polynomial time mapping reduction](#polynomial-time-mapping-reduction) is a mapping reduction!

\begin{equation}
f: \Sigma^{\*} \to \Sigma^{\*}
\end{equation}

but we also say that \\(f\\) is both computable **AND** polynomial: that there exists a [Polynomial Time]({{< relref "KBhcomputational_complexity_theory.md#polynomial-time" >}}) [turing machine]({{< relref "KBhturing_machinea.md" >}}) \\(M\\) that, on every input, halts with \\(f(w)\\) on the tape within a polynomial number of steps on \\(w\\).

If \\(w \in A \Leftrightarrow f(w) \in B\\), we have that \\(f\\) is a polynomial time mapping reduction. Note that since \\(M\\) is bounded by a polynomial number of steps, we also have \\(|f(w)| \leq |w|^{k}\\) by some polynomial number of steps since the machine \\(M\\) can't take more steps than polynomial so it can't generate super long strings.

Note, that this is still a normal [mapping reduction]({{< relref "KBhmapping_reduction.md" >}}), that is, we have reduced the problem of deciding \\(w \in A\\) to that of decidnig \\(f(w) \in B\\).

The usual rules of [mapping reduction]({{< relref "KBhmapping_reduction.md" >}}) still applies:

if \\(A \leq\_{p} B\\), and \\(B \leq\_{p} C\\), we have \\(A \leq\_{p} C\\)

The important properties about this is that if some string \\(n \in A\\), after all the reduction we still have a polynomial time strings \\(f(f(n))\\) would be length \\(n^{cd}\\) which would be a polynomially bounded computation with also bounded output length.


#### timing properties of reduction {#timing-properties-of-reduction}

\begin{equation}
A \leq\_{p} B, B \in P \implies A \in P
\end{equation}

because you can solve \\(A\\) by sending a string through \\(f\\), decide it with \\(B\\), then you have decided \\(A\\) since \\(w \in A \Leftrightarrow f(w) \in B\\); if \\(B\\) is decidable in \\(P\\) and \\(f(w)\\) is computable in \\(P\\), well then \\(A\\) have just been decided in \\(P\\)

same idea

\begin{equation}
A \leq\_{p} B, B \in NP \implies A \in NP
\end{equation}

and of course the contrapositives:

\begin{equation}
A \leq\_{p} B, A \not\in NP \implies B \not\in NP
\end{equation}

\begin{equation}
A \leq\_{p} B, A \not\in P \implies B \not\in P
\end{equation}


### mapping reductions are transitive {#mapping-reductions-are-transitive}

if \\(A \leq\_{m} B\\), and \\(B \leq\_{m} C\\), we have \\(A \leq\_{m} C\\)


### examples {#examples}


#### halting problem {#halting-problem}

\begin{equation}
HALT\_{TM} = \qty {(M,w) \mid M\text{ is a TM \hat{t} halts on the string } w}
\end{equation}

This is undecidable!

Assume for contradiction that there is some \\(H\\) for which it decides \\(HALT\_{TM}\\). Now: we can actually use this property to construct a TM that decides \\(A\_{TM}\\), which we have already seen that [there are non-recognizable languages]({{< relref "KBhthere_are_non_recognizable_languages.md" >}}) so that's not possible.

In particular, we check if \\(H(M, w)\\); then, we run \\(M\\) on \\(w\\) until it halts---if accept, return accept; if reject, return reject; if \\(H(M,w)\\) says it won't halt, then reject.

Then, we just made a machine that decides \\(A\_{TM}\\), yet [\\(A\_{TM}\\) is recognizable but not decidable]({{< relref "KBhuniversal_turing_machine.md#a-tm-is-recognizable-but-not-decidable" >}}).

With a reduction, we see that [halting problem](#halting-problem) is undecidable.


### if A &lt;= B, B is decidable, then A is decidable {#if-a-b-b-is-decidable-then-a-is-decidable}

To decide \\(A\\), we build a machine \\(M'\\), where by we first:

1.  Compute \\(f(w)\\) on some given string \\(w\\)
2.  Then, run \\(M\\) (which decides \\(B\\)) on \\(f(w)\\), return its results

\\(w \in A \Leftrightarrow f(w) \in B\\), so if \\(M\\) accepts \\(f(w)\\) we know \\(w \in A\\)

\\(w\not \in A\\), then we will have \\(f(w) \not \in B\\), and so \\(M'\\) will reject \\(w\\)


### if A &lt;= B, B is recognizable, then A is recognizable {#if-a-b-b-is-recognizable-then-a-is-recognizable}

same as above---if you get the answer, let \\(m'\\) return it. otherwise, we run forever.


### contrapositives of the above {#contrapositives-of-the-above}

-   if A &lt;= B, if A is undecidable, then B is undecidable
-   if A &lt;= B, if A is unrecognizable, then B is unrecognizable

"A gives a lower bound on the difficulty of B"


### Atm &lt;= HaltTM {#atm-halttm}

[halting problem](#halting-problem)


### things to map to {#things-to-map-to}

-   Atm is recognizable but not decidable
-   not ATM is not recognizable because ATM is not decidable
-   HALT_TM is recognizable but not decidable
-   EmptyTM is not recognizable
-   EqualTM (if a pair of TM is equal) is not recognizable
-   if A &lt;= B, if A is undecidable, then B is undecidable
-   if A &lt;= B, if A is unrecognizable, then B is unrecognizable
-   if A &lt;= B, B is decidable, then A is decidable
-
