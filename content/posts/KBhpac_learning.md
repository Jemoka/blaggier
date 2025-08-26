+++
title = "PAC Learning"
author = ["Houjun Liu"]
draft = false
+++

probably approximately correct (PAC) [learning]({{< relref "KBhsu_cs205l_jan072025.md#learning" >}}) is a [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}}) learning scheme. Suppose you have a concept \\(c \in C\\). We desire to find a hypothesis \\(h \in H\\) which gets as close to the boundary between concepts as possible.

We want to minimize false positives and false negatives.


## constituents {#constituents}

-   Instance space \\(X\\)
-   Concept class \\(C\\) (functions over \\(X\\))
-   Hypothesis class \\(H\\) (functions over \\(X\\))
    -   "proper learning" \\(H=C\\) ---we are done
-   \\(A\\) PAC-learns \\(C\\) if
    -   \\(\forall c \in C, \forall D \sim X\\), when \\(A\\) gets inputs sampled from \\(D\\) and outputs \\(h \in H\\), we want...

\begin{equation}
P\_{A} [ P\_{x \in D}[h(x) \neq c(x)] > \delta] < \epsilon
\end{equation}

our learning scheme wants the probability of an error beyond a super large \\(\delta\\) to be small \\(< \epsilon\\).


## Occam's Razor {#occam-s-razor}

any algorithm \\(A\\) that outputs a small hypothesis \\(h\\) that works on the input, then \\(A\\) has PAC-learned and its likely to generalize (you have to get very unlucky to have a simple explanation to explain a large bunch of input because its quite hard to overfit).


## PAC-learn a DFA {#pac-learn-a-dfa}

[Occam's Razor](#occam-s-razor), we should just keep building a [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}}) until you get the right one starting from the smallest DFA.

butt... that's exponential. so:

let's define \\(L^{?}\\) such that either \\(w \in L^{?}\\), or \\(w \not \in L^{?}\\) , or we don't know. We want to say \\(L^{?}\\) distinguishes \\(x\\) and \\(y\\), then there exists some \\(z\\) such that \\(x z \in L^{?}\\) and \\(y z \not \in L^{?}\\) or vise versa.

this is not an equivalence relation, beause ther's  is no transitivityy.

you probably can't though, learn DFAs actively; you can learn automata actively.
