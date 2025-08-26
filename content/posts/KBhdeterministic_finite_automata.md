+++
title = "Deterministic Finite Automata"
author = ["Houjun Liu"]
draft = false
+++

**Computational memory** of this type of model is fixed. In particular, the class of problems this type of automata solves ("languages it recognizes") is called [regular languages]({{< relref "KBhdeterministic_finite_automata.md" >}}).

We want to explore the **closure** properties of regular languages (does combining [regular languages]({{< relref "KBhdeterministic_finite_automata.md" >}}) result in [regular languages]({{< relref "KBhdeterministic_finite_automata.md" >}}))


## constituents {#constituents}

A DFA is a five-tuple \\(M = (Q, \Sigma, \delta, q\_{0}, F)\\).

-   \\(Q\\): finite set of all states
-   \\(\Sigma\\): the [alphabet]({{< relref "KBhalphabet.md" >}})
-   \\(\delta: Q \times \Sigma \to Q\\), the transition function
-   \\(q\_0 \in Q\\): the start state
-   \\(F \subseteq Q\\): the accept states, which means we accept the input string we got if after processing the string we ended up at one of these states


## requirements {#requirements}

if processing an input results in an accepting state, we accept the input; otherwise, we reject the input. this is the computation.


### accept {#accept}

Let \\(w\_1, ..., w\_{n} \in \Sigma\\), and \\(w = w\_1 ... w\_{n} \in \Sigma^{\*}\\), \\(M\\) **accepts** \\(w\\) if there exists \\(r\_0, ..., r\_{n} \in Q\\) such that:

-   \\(r\_{0} = q\_{0}\\)
-   \\(\delta(r\_{i}, w\_{i+1}) = r\_{i+1}\\) for all \\(i=0, ..., n-{1}\\), and
-   \\(r\_{n} \in F\\)


## additional information {#additional-information}


### L(M) {#l--m}

the set of all [string]({{< relref "KBhalphabet.md" >}})s that \\(M\\) **accepts** is called the "language recognized by \\(M\\)", or "the function computed by \\(M\\)".

important factoid: **empty language is _not_ the empty string, the empty language contains no strings, the empty string contains no content, which means you stay at \\(q\_0\\)**


### [regular language]({{< relref "KBhregular_language.md" >}}) {#regular-language--kbhregular-language-dot-md}

see [regular language]({{< relref "KBhregular_language.md" >}})


### [DFAs are equivalent to NFAs]({{< relref "KBhnondeterministic_finite_automata.md#id-4f5a240b-565b-4341-ab32-0b8b4540103f-dfa-s-are-equivalent-to-id-5520de84-0c82-4b31-97cb-51f7de4652dc-nfa-s" >}}) {#dfas-are-equivalent-to-nfas--kbhnondeterministic-finite-automata-dot-md}

see [DFAs are equivalent to NFAs]({{< relref "KBhnondeterministic_finite_automata.md#id-4f5a240b-565b-4341-ab32-0b8b4540103f-dfa-s-are-equivalent-to-id-5520de84-0c82-4b31-97cb-51f7de4652dc-nfa-s" >}})

[DFA]({{< relref "KBhdeterministic_finite_automata.md" >}})s recognize the same set of languages as [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}})s, that is, regular languages.


### [regular expression]({{< relref "KBhregex.md" >}})s {#regular-expression--kbhregex-dot-md--s}

see [regular expression]({{< relref "KBhregular_expression_complexity.md" >}})


## examples and factoids {#examples-and-factoids}


### why [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}})s? {#why-dfa--kbhdeterministic-finite-automata-dot-md--s}

-   constant size memory =&gt; **important**, dynamically adding memory does bring more computational power
-   read input once =&gt; **unimportant**, being able to go back and fourth doesn't add additional computational power

**original introduction of nondeterminism**


### Limitations of [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}})s {#limitations-of-dfa--kbhdeterministic-finite-automata-dot-md--s}

-   [pumping lemma]({{< relref "KBhpumping_lemma.md" >}})
-   [Myhill-Nerode]({{< relref "KBhmyhill_nerode.md" >}}) (entire characterization of [regular languages]({{< relref "KBhdeterministic_finite_automata.md" >}}))


### simple things to make and do with [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}})s because they are so simple {#simple-things-to-make-and-do-with-dfa--kbhdeterministic-finite-automata-dot-md--s-because-they-are-so-simple}

-   optimize [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}}): for a given [regular language]({{< relref "KBhdeterministic_finite_automata.md" >}}), what is the smallest [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}})?
-   learning [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}})


### examples {#examples}


#### proof: this language accepts an odd number of \\(1\\) {#proof-this-language-accepts-an-odd-number-of-1}

{{< figure src="/ox-hugo/2024-09-30_19-38-45_screenshot.png" >}}

We show this by induction on the string length.

-   base, this string has zero length, and we reject the string
-   suppose for a string of length \\(n\\), \\(M\\) accepts \\(n\\) IFF \\(n\\) has an odd number of \\(1\\)
-   now, consider a string of length \\(n+1\\), casework:
    -   we are at an accept state, and we got a \\(0\\): this means we still have an odd number of \\(1\\), we don't go anywhere, we can accept
    -   we are at an reject state, and we got a \\(1\\): this means we now have an odd number of \\(1\\), we go to \\(q\\), and we can accept
    -   ....


#### build a DFA that accepts at least strings that contain \\(001\\) {#build-a-dfa-that-accepts-at-least-strings-that-contain-001}

{{< figure src="/ox-hugo/2024-09-30_19-48-17_screenshot.png" >}}

this requires some thinking, and the trick is simply keeping track of what you saw in the states, and if you saw something contradictory backtrak if needed


#### constructing a binary addition system {#constructing-a-binary-addition-system}

{{< figure src="/ox-hugo/2024-10-01_11-42-54_screenshot.png" >}}


### [pumping lemma]({{< relref "KBhpumping_lemma.md" >}}) {#pumping-lemma--kbhpumping-lemma-dot-md}

see [pumping lemma]({{< relref "KBhpumping_lemma.md" >}})


### [Minimizing DFAs]({{< relref "KBhminimizing_dfas.md" >}}) {#minimizing-dfas--kbhminimizing-dfas-dot-md}

see [Minimizing DFAs]({{< relref "KBhminimizing_dfas.md" >}})


### Learning DFA {#learning-dfa}

See [PAC Learning]({{< relref "KBhpac_learning.md" >}})
