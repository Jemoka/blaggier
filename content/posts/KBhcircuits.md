+++
title = "circuit"
author = ["Houjun Liu"]
draft = false
+++

A [circuit]({{< relref "KBhcircuits.md" >}}) is a new model of computation, like [turing machine]({{< relref "KBhturing_machinea.md" >}})s. [circuit]({{< relref "KBhcircuits.md" >}}) are defined in terms of boolean logic, with components \\(\text{AND}, \text{OR}, \text{NOT}\\).

Most important quirk


## constituents {#constituents}

-   sequence of \\(n\\) true/false inputs \\(x\_1, ..., x\_{n}\\)
-   a graph with nodes belled AND/OR/NOT combining these things pairwise boolean gates
-   a single output true/false


## complexity measures of circuits {#complexity-measures-of-circuits}


### size (circuits) {#size--circuits}

number of gates---corresponds roughly to "time complexity"


### depth (circuits) {#depth--circuits}

length of the longest part from the output gate to inputs---roughly "parallel time complexity"


## additional info {#additional-info}


### contrasts with TMs {#contrasts-with-tms}

in contrast with [turing machine]({{< relref "KBhturing_machinea.md" >}})s...

circuits have fixed input length \\(n\\), so to decide a [language]({{< relref "KBhalphabet.md" >}}), we need a [circuit family](#circuit-family).


### circuit family {#circuit-family}

A [circuit family](#circuit-family) \\(\qty {C\_{n}}\_{n \in \mathbb{N}}\\) where \\(C\_{n}\\) has \\(n\\) inputs---every [circuit family](#circuit-family) decides a language \\(L \subseteq \qty {0,1}^{\*}\\). "time complexity" is more formally then the rate at which a [circuit family](#circuit-family) grows in [size](#size--circuits) based on length of \\(n\\).


### uniform (complexity theory) {#uniform--complexity-theory}

A Turing Machine is a [uniform](#uniform--complexity-theory) type of computation---we have a single algorithm for all \\(n\\); circuits are a non-[uniform](#uniform--complexity-theory) model since a [circuit family](#circuit-family) can contain different algorithms for different size.


#### issue! {#issue}

The [size complexity](#size-complexity) does **not** take into account the time taken to generate the circuit! Just because the circuit is small does **not** mean we have taken into account the complexity of generating the circuit.

So...

<!--list-separator-->

-  p-uniform

    a circuit family is [p-uniform](#p-uniform) if there exists a polytime algorithm for generating the \\(n\\) th circuit.

    this notion corresponds to the "one-time pre-procesing cost" for all inputs of the same length.

    <!--list-separator-->

    -  [p-uniform](#p-uniform) [P/poly](#p-poly) is exactly [P]({{< relref "KBhtime_complexity.md#polynomial-time" >}})

        \\(\subseteq\\) given \\(x\\), get the length of your input \\(n = |x|\\), create nth circuit \\(C\_{n}\\) in poly-time and then run it in poly-time.

        \\(\supseteq\\) given [Cook-Levin Theorem]({{< relref "KBhcook_levin_theorem.md" >}}), [Cook-Levin Theorem]({{< relref "KBhcook_levin_theorem.md" >}}) givens a circuit such that \\(x \in L \Leftrightarrow \exists y \text{ s.t. } C\qty(x,y) = 1\\) in poly time. Now, for \\(x \in L \in P\\), then, \\(y\\) doesn't matter so we just have a poly-time circuit.


### size complexity {#size-complexity}

[size complexity](#size-complexity) is the analogue of [Time Complexity]({{< relref "KBhtime_complexity.md" >}}) for [circuit]({{< relref "KBhcircuits.md" >}})

\begin{equation}
s \qty(n) : \mathbb{N} \to  \mathbb{N}, \text{Size}\qty(C\_{n}) \leq S\qty(n), \forall n \in \mathbb{N}
\end{equation}

This gives us:

\begin{equation}
\text{SIZE} \qty(s \qty(n)) = \qty {L :L\text{ has a family of size O(S(n))}}
\end{equation}


### P/poly {#p-poly}

\begin{equation}
P/poly = \text{SIZE}\qty(\text{poly}\qty(n))
\end{equation}

{{< figure src="/ox-hugo/2025-02-19_15-11-46_screenshot.png" >}}


#### for all languages, it is in SIZE(2^O(n)) {#for-all-languages-it-is-in-size--2-on}

Because we can just build a circuit for a truth table for \\(n\\):

\begin{equation}
C\_{n}\qty(x) = \bigvee\_{y \in L} \bigwedge\_{i=1}^{n} x\_{i} = y\_{i}
\end{equation}


#### p/poly contains [undecidable]({{< relref "KBhturing_machinea.md#decidable" >}}) languages {#p-poly-contains-undecidable--kbhturing-machinea-dot-md--languages}

every unary language \\(L \subseteq \qty {0,1}^{\*}\\) such that \\(L \subseteq \qty {1^{n} : n \in \mathbb{N}}\\) is in P/poly. Yet, we can just create a circuit that ANDs the \\(n\\) inputs for those that we accept and \\(0\\) for those that we don't.

and there are unary decidable languages---such as \\(1^{\langle M,n \rangle}\\) such that \\(\langle M,n \rangle \in \text{HALT}\\).


#### expanding P towards P/poly {#expanding-p-towards-p-poly}

an [advice-taking TM](#expanding-p-towards-p-poly) is, given an input \\(x\\), we get a read-only tape with an advice string of length \\(poly\qty(|x|)\\) which depends **solely on \\(|x|\\) and not \\(x\\) itself**

an alternative definition of p/poly:

\begin{equation}
L \in p poly \implies x \in L \Leftrightarrow M(x, y\_{|x|})\text{ accepts}
\end{equation}

notably, this is different from [NP]({{< relref "KBhnon_polynomial_time.md" >}}) since our machine is not obligated to reject all \\(M\qty(x, y), \forall y, x \not \in L\\) as does NP. We just want this to work for some particular choices of \\(y\\).

---

all that's left is to prove that the definition above is equaivalent to the original one for p/poly

\\(\Rightarrow\\) for every size \\(n\\), we just dump the circuit's code into the "advice".

\\(\Leftarrow\\) we do the [Cook-Levin Theorem]({{< relref "KBhcook_levin_theorem.md" >}}) thing from [p-uniform P/poly is exactly P](#p-uniform--org4f2c0f5--p-poly--orgffe6a74--is-exactly-p--kbhtime-complexity-dot-md), and hard code the advice into a unique circut for each of the code and then reduce to a poly circuit.
