+++
title = "regular language"
author = ["Houjun Liu"]
draft = false
+++

a language \\(L'\\) is a [regular language]({{< relref "KBhregular_language.md" >}}) if there exists some DFA \\(M\\) such that \\(L' = L(M)\\).


## additional information {#additional-information}


### a proper subset {#a-proper-subset}

a proper subset of a regular language isn't necessarily regular


### [regular expressions are equivalent to regular languages]({{< relref "KBhregular_expression_complexity.md#regular-expressions-are-equivalent-to-regular-languages" >}}) {#regular-expressions-are-equivalent-to-regular-languages--kbhregular-expression-complexity-dot-md}

see [regular expressions are equivalent to regular languages]({{< relref "KBhregular_expression_complexity.md#regular-expressions-are-equivalent-to-regular-languages" >}})


### properties of [regular language]({{< relref "KBhregular_language.md" >}})s {#properties-of-regular-language--kbhregular-language-dot-md--s}


#### union {#union}

union of two [language]({{< relref "KBhalphabet.md" >}})s includes all strings in a or b:

\begin{align}
A \cup B = \qty {w | w \in A\ OR\ w \in B }
\end{align}


#### intersection {#intersection}

union of two [language]({{< relref "KBhalphabet.md" >}})s includes all strings in a and b:

\begin{align}
A \cap B = \qty {w | w \in A\ AND\ w \in B }
\end{align}


#### complement {#complement}

complement of two [language]({{< relref "KBhalphabet.md" >}})s includes all strings which isn't in that language:

\begin{align}
\neg A = \qty {w \in \Sigma^{\*} | w \not \in A}
\end{align}


#### reverse {#reverse}

stuff said backwards!

\begin{align}
A^{R} = \qty {(w\_{1} \dots w\_{k}) | (w\_{k} \dots w\_{1}) \in A, w\_{j} \in \Sigma }
\end{align}


#### concatenation {#concatenation}

\begin{equation}
A \cdot B = \\{vw | v \in A, w \in B\\}
\end{equation}


#### clean star {#clean-star}

\begin{equation}
A^{\*} = \qty {s\_1 \cdot \dots \cdot s\_{k} | k \geq 0, s\_{i} \in A}
\end{equation}

note that, since \\(k\\) can \\(=0\\), \\(A^{\*}\\) always includes the empty string as that's nothing concatenated


### operations on [regular language]({{< relref "KBhregular_language.md" >}})s are regular {#operations-on-regular-language--kbhregular-language-dot-md--s-are-regular}

if \\(A, B\\) are [regular language]({{< relref "KBhregular_language.md" >}})s, their union, intersection, complement, reverse, concatenation, star are all [regular language]({{< relref "KBhregular_language.md" >}})s.

proof


#### union {#union}

we have:

\begin{align}
A \cup B = \qty {w | w \in A\ OR\ w \in B }
\end{align}

we desire that \\(A \cup B\\) is regular. Let's create two [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}}) for which \\(A\\) and \\(B\\) are valid languages; that is, \\(A \in L(M\_1)\\), \\(B \in L(M\_2)\\). we want to create some \\(M\\) that would recognize \\(A \cup B\\).

---

Idea: "run \\(M\_1\\) and \\(M\_2\\) 'in parallel'". For \\(M = (Q, \Sigma, \delta, q\_0, F)\\), let's define...

\begin{equation}
Q = Q\_1 \times Q\_2
\end{equation}

whereby each state is a tuple of states from \\(M\_1\\) and \\(M\_2\\).

\begin{equation}
q\_0 = \qty(q\_0^{(1)}, q\_0^{(2)})
\end{equation}

\begin{equation}
F = \qty {(q\_1, q\_2) | q\_1 \in F\_2\ OR\ q\_2 \in F\_2}
\end{equation}

for a new symbol in the alphabet \\(\sigma\\), we have:

\begin{equation}
\delta((q\_1,q\_2), \sigma) = (\delta\_{1}(q\_1, \sigma), \delta\_{2}(q\_2, \sigma))
\end{equation}


#### intersection {#intersection}

we have:

\begin{equation}
\begin{align}
A \cap B = \qty {w | w \in A\ AND\ w \in B }
\end{align}
\end{equation}

we desire \\(A \cap B\\) is regular.

---

Its the same proof as the union theorem above, we just need to change our accepting states

\begin{equation}
F = \qty {(q\_1, q\_2) | q\_1 \in F\_2\ AND\ q\_2 \in F\_2}
\end{equation}


#### complement {#complement}

we have:

\begin{align}
\neg A = \qty {w \in \Sigma^{\*} | w \not \in A}
\end{align}

we want to build an automata for which it will accept everything that's not in \\(A\\). We can do this by just flip accept and reject states: \\(F' = \\{q | q \not \in  F\\}\\).


#### reverse {#reverse}

this one will give us "a little bit of trouble"

\begin{align}
A^{R} = \qty {(w\_{1} \dots w\_{k}) | (w\_{k} \dots w\_{1}) \in A, w\_{j} \in \Sigma }
\end{align}

we desire \\(A^{R}\\) is also regular.

---

Insight: we need to build a [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}}) that reads its strings from right to left.

If \\(M\\) accepts some word \\(w\\), then \\(w\\) describes a directed path from start to accept state. How about we build a reverse path from the accept state to the start state? **Problem: doing this may not necessarily be a DFA! It may have many start states which have different paths; also, some states may have more than one outgoing edge for a particular character, or none at all**

To fix this, we say our new machine accepts a string if there exists _some path_ that reaches _some accept state_ from _some start state_. This is a [Nondeterministic Finite Automata]({{< relref "KBhnondeterministic_finite_automata.md" >}})!!

---

Proof (by construction):

1.  reverse the arrows of your [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}}) that you want to reverse
2.  flip the [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}})'s start and accept states
3.  you now have an [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}})
4.  use [subset construction]({{< relref "KBhnondeterministic_finite_automata.md#id-4f5a240b-565b-4341-ab32-0b8b4540103f-dfa-s-are-equivalent-to-id-5520de84-0c82-4b31-97cb-51f7de4652dc-nfa-s" >}}) to expand this [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}}) to a [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}})


#### concatenation {#concatenation}

\begin{equation}
A \cdot B = \\{vw | v \in A, w \in B\\}
\end{equation}

---

Proof idea:

treat your [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}}) as a [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}}), then glue ("add epsilon transitions between") the accept states from the first part to the start staates of the second part. then, turn the accept states in the first part into regular states.

then [subset construction]({{< relref "KBhnondeterministic_finite_automata.md#id-4f5a240b-565b-4341-ab32-0b8b4540103f-dfa-s-are-equivalent-to-id-5520de84-0c82-4b31-97cb-51f7de4652dc-nfa-s" >}}).


#### clean star {#clean-star}

\begin{equation}
A^{\*} = \qty {s\_1 \cdot \dots \cdot s\_{k} | k \geq 0, s\_{i} \in A}
\end{equation}

proof idea:

stick epsilon transitions between your accept states and your original start state; and---to deal with the empty set---also add an accept state as your start state, and add an epsilon transition from that to your actual start state

{{< figure src="/ox-hugo/2024-09-30_22-22-42_screenshot.png" >}}

---

proof (construction):

-   \\(Q' = Q\cup \qty {q\_0}\\), where \\(q\_0\\) is our new empty string acceptor; we relabel \\(q\_1\\) as pour original start vertex
-   \\(F' = F \cup \qty {q\_0}\\)

and transitions:

\begin{equation}
\delta'(q,a) =
\begin{cases}
\qty {\delta (q,a)}, q\in Q, a \neq \varepsilon \\\\
\qty {q\_1}, q \in F, a = \varepsilon \\\\
\qty {q\_1}, q &= q\_0, a = \varepsilon \\\\
\emptyset, q &= q\_0, a \neq  \varepsilon
\end{cases}
\end{equation}

we are going to show this in a standard double containment.

<!--list-separator-->

-  \\(L(N) \supseteq L^{\*}\\)

    Assume you have \\(w \in L^{\*}\\), by definition this means that \\(w\\) can be split into a series of \\(w\_1, ..., w\_{k}\\) each of which is in \\(L\\).

    we show that each \\(w\\) is accepted by induction; the base cases are \\(k=0\\), where its directly accepted, or \\(k=1\\), then since \\(w\_1 \in L\\), we are done.

    invariant is that our substring \\(k\\) so far is accepted.

    the inductive step: to concatenate one more, since string up to \\(k\\) is accepted, we are at an accept state; we use the epsilon steps to get to the start of \\(M\\); by definiton \\(w\_{k+1}\\) is also accepted, so we will end back at accept state, and we are done.

<!--list-separator-->

-  \\(L(N) \subseteq L^{\*}\\)

    assuming we have some string \\(w\\) accepted by \\(N\\); we desire that \\(w \in L^{\*}\\). This means that we can break \\(w\\) into substrings in \\(L\\).

    if \\(w = \varepsilon\\), then \\(w \in L^{\*}\\).

    induction again. IH: if \\(N\\) accepts \\(u\\) after at most \\(k\\) \\(\varepsilon\\) transitions, then \\(u \in L^{\*}\\).

    base: 0 epison transitions means you have the empty string, which is in the

    induction: we divide \\(w\\) as \\(uv\\), where \\(v\\) is the substring after the last \\(\varepsilon\\) transition. we can see that \\(u \in L(N)\\) because episode transitions only happen in our construction at accept states---by the inductive hypothesis, we have that \\(u \in L^{\*}\\). now, we have \\(v\\), which takes us from the last epsilon transition all they way to an accept state (because recall \\(w\\) is in \\(N\\)), meaning \\(v \in L\\) because by design we went from a start state to an accept state without taking any epsilon transitions. finally, since \\(u \in L^{ \*}\\), concatenating another thing in \\(L\\) to it also gives a thing in \\(L^{ \*}\\), so \\(uv \in L^{ \*}\\).
