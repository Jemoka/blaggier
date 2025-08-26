+++
title = "programatically compiling RegEx to DFA"
author = ["Houjun Liu"]
draft = false
+++

A high level sketch:

{{< figure src="/ox-hugo/compiling_regexp.svg" >}}


## Another High Level Sketch {#another-high-level-sketch}


### Step 1: Write some RegExps {#step-1-write-some-regexps}

Do that.


### Step 2: Construct R {#step-2-construct-r}

For regular expressions you have defined for keywords, identifies, numbers, etc... We want to construct an uber union regular expression:

\begin{align}
R &= \text{Keyword} + \text{Identifier} + \text{Number} + \dots   \\\\
&= R\_1 | R\_2 | R\_3 | \dots
\end{align}


### Step 3: Tokenization {#step-3-tokenization}

For input \\(x\_1, ..., x\_{n}\\), for \\(i \in 1 ...n\\) inclusive, we check:

\begin{equation}
x\_1 \dots x\_{i} \stackrel{?}{\in} L\qty( R)
\end{equation}

Upon success for some \\(i\\), we know that \\(x\_{1}, ..., x\_{i} \in L\qty(R\_{j})\\) for some \\(j\\). We can then send \\(x\_1, ..., x\_{i}\\) to the parser and then continue lexing for input \\(x\_{i+1}...x\_{n}\\).


#### ambiguity {#ambiguity}

-   **multiple matches, different lengths**: we pick the longest possible substring
-   **multiple matches, same length**: pick the first rule
-   **nothing matches**: we just put a catch all rule in the bottom


## How exactly does "matching" mean? {#how-exactly-does-matching-mean}

[DFA]({{< relref "KBhdeterministic_finite_automata.md" >}})s, [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}})s, [subset construction]({{< relref "KBhnondeterministic_finite_automata.md#id-4f5a240b-565b-4341-ab32-0b8b4540103f-dfa-s-are-equivalent-to-id-5520de84-0c82-4b31-97cb-51f7de4652dc-nfa-s" >}})! Conventions used in this class:

-   \\(\Sigma\\) alphabet
-   \\(S\\) states
-   \\(n\\) start
-   \\(F \subseteq S\\) accepting states
-   \\(S \to^{x} S\\) transition

and recall [regular expressions are equivalent to regular languages]({{< relref "KBhregular_expression_complexity.md#regular-expressions-are-equivalent-to-regular-languages" >}}). When you attempt to take a transition that doesn't exist in NFAs, you end into nothing.


### algorithm for casting RegExp to NFA {#algorithm-for-casting-regexp-to-nfa}

By convention every NFA will have a single starting state and a single ending state. We will then compose every composition's machine together.


#### concatenation {#concatenation}

For parser of \\(A\\) and \\(B\\), we compose them by composing the accept state of \\(A\\) with an \\(\epsilon\\) move to \\(B\\), and make \\(A\\) no longer an accepting state.

{{< figure src="/ox-hugo/2025-04-10_11-29-39_screenshot.png" >}}


#### union {#union}

We make an epsilon move from the starting state to both \\(A\\) and \\(B\\). And then when you hit the accepting state of either \\(A\\) or \\(B\\) you epsilon move to the accepting state.

{{< figure src="/ox-hugo/2025-04-10_11-29-32_screenshot.png" >}}


#### kleene star {#kleene-star}

{{< figure src="/ox-hugo/2025-04-10_11-29-27_screenshot.png" >}}


### implementing DFAs as a table {#implementing-dfas-as-a-table}

-   columns: alphabet
-   rows: states

the way you implement this is to just look up the (state, symbol) pair, take the transition, and look up the new state, symbol, etc.

|   | 0 | 1 |
|---|---|---|
| a | a | b |
| b | a | b |

is

{{< figure src="/ox-hugo/2025-04-10_11-47-48_screenshot.png" >}}

and so on. To construct this table, you just read off the transition function.
