+++
title = "Non-deterministic Finite Automata"
author = ["Houjun Liu"]
draft = false
+++

[NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}}) is a relaxation of [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}}), but which is allowed to make non-deterministic "verified guesses".

this is basically a [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}}), but our new machine accepts a string if there exists _some path_ that reaches _some accept state_ from _some start state_.

at each state, we can have any number of out arrows for some letter \\(\sigma \in \Sigma\\), **including** for the empty string \\(\varepsilon\\). meaning we can move between states without doing anything.

we (Omer) allows **multiple [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}}) start states** (Spiser only allows one). we can convert between these easily just by having an epsilon (empty string) transition stuck between the "single" start state and the multiple start states.


## constituents {#constituents}

A NFA is a five-tuple \\(N = (Q, \Sigma, \delta, Q\_{0}, F)\\), whereby:

-   \\(Q\\) is the finite set of all states
-   \\(\Sigma\\) is the [alphabet]({{< relref "KBhalphabet.md" >}})
-   \\(\delta: Q \times \Sigma\_{\varepsilon} \to 2^{Q}\\) (where \\(\Sigma\_{\varepsilon} = (\Sigma \cup \\{\varepsilon\\})\\), with \\(\varepsilon\\) being the empty string); the output is a boolean assignment of whether or not we can reach each state, because note you are now allowed multiple edges between states
-   \\(Q\_0 \subseteq Q\\) which is the set of start states
-   \\(F \subseteq Q\\) remains the set of accept states


## requirements {#requirements}


### accept {#accept}

Let \\(w\_1, ..., w\_{n} \in \Sigma\\), and \\(w = w\_1 ... w\_{n} \in \Sigma^{\*}\\), \\(M\\) **accepts** \\(w\\) if there exists \\(r\_0, ..., r\_{n} \in Q\\) such that:

-   \\(r\_{0} \in Q\_{0}\\)
-   \\(r\_{i+1} \in \delta(r\_{i}, w\_{i+1})\\) for all \\(i=0, ..., n-{1}\\), and
-   \\(r\_{n} \in F\\)


## additional information {#additional-information}


### NFAs are usually simpler than DFAs {#nfas-are-usually-simpler-than-dfas}

...because you don't have to specify all edges; non-specified transitions means the can be automatically rejected


### [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}})s are equivalent to [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}})s {#dfa--kbhdeterministic-finite-automata-dot-md--s-are-equivalent-to-nfa--kbhnondeterministic-finite-automata-dot-md--s}

we want to show that [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}})s recognize the same set of languages as [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}})s. in other words, does not add power for finite automata... "finite memory is very robust".

---

we want to define the [subset construction](#dfa--kbhdeterministic-finite-automata-dot-md--s-are-equivalent-to-nfa--kbhnondeterministic-finite-automata-dot-md--s); tho goal here is that given a particular [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}}) named \\(N\\), we desire to find a particular [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}}) named \\(M\\) which recognizes the same [language]({{< relref "KBhalphabet.md" >}}).

insight: [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}}) and [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}})s are markovian! instead of monitoring all the different paths you take, we only monitor all the possible states you could have reached---this is, then, only exponential in the number of states.

we therefore do computation in parallel on the set of all possible states that could be reached thus far. at each step, then, a [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}}) you defined from an [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}}) has a state space of \\(Q' = 2^{Q}\\). Each of your states, then, is some subset of possible states in the original [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}}).

---


#### epsilon closure {#epsilon-closure}

to deal with epsilon steps (i.e. steps where you do nothing and advance), you have to first define the [epsilon closure](#dfa--kbhdeterministic-finite-automata-dot-md--s-are-equivalent-to-nfa--kbhnondeterministic-finite-automata-dot-md--s):

for a subset of states \\(S \subseteq Q\\), the \\(\varepsilon\\) closure of \\(S\\) is:

\begin{equation}
\varepsilon (S) = \qty {q | q\ \text{reachable from some}\ s \in S\ \text{by taking one or more $\varepsilon$ transitions}}
\end{equation}

and now, onto the construction that [DFAs are equivalent to NFAs](#dfa--kbhdeterministic-finite-automata-dot-md--s-are-equivalent-to-nfa--kbhnondeterministic-finite-automata-dot-md--s)


#### proof {#proof}

-   \\(Q'=2^{Q}\\)
-   \\(\delta': Q' \times \Sigma \to Q'\\), specifically \\(\bigcup \varepsilon \qty(\delta\qty(r, \sigma)), r\in R\\), where \\(R \in Q'\\) is one of our conjoined-states
    -   that is, we apply every transition we can on the states that we have, and union all of their results together
-   \\(F' = \qty {R \in Q' | f \in R\ \text{for some}\ f \in F}\\), that is, the subset of the conjoined states for which there is a single member in the conjoined state that's active that is also an accept state
-   \\(q\_0' = \varepsilon (q\_0)\\)


## [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}}) also recognizes exactly regular languages {#nfa--kbhnondeterministic-finite-automata-dot-md--also-recognizes-exactly-regular-languages}

that is, [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}}) and [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}}) recognizes the same types of languages
