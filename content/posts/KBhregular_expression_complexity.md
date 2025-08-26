+++
title = "regular expression (complexity)"
author = ["Houjun Liu"]
draft = false
+++

[Regular expression]({{< relref "KBhregular_expression_complexity.md" >}})s express computation as a simple, logical discretion, through closure properties (such as [properties of regular languages]({{< relref "KBhregular_language.md#properties-of-id-a8a2a1e4-9bb8-4a06-8218-5002136bab87-regular-language-s" >}})). a family of languages which satisfy closure properties of [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}}) [regular languages]({{< relref "KBhdeterministic_finite_automata.md" >}}), which turns out to be exactly the set of languages that [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}}) and [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}}) both recognize.

"What is the complexity of **describing** the strings in a language?"


## definition {#definition}

Let \\(\Sigma\\) be an alphabet, we define the [regular expression]({{< relref "KBhregular_expression_complexity.md" >}})s over \\(\Sigma\\):

-   for all \\(\sigma \in \Sigma\\), \\(\sigma\\) is a regexp
-   \\(\varepsilon\\) (empty string) is a regexp
-   \\(\emptyset\\) (empty set) is a regexp

If \\(R\_1\\), \\(R\_2\\) are regexps, then:

-   \\(R\_1 \cdot R\_2\\) (concat) is a regexp
-   \\(R\_1 + R\_2\\) (plus) is a regexp
-   \\((R\_1)^{\*}\\) (set of all subsets)

Operator precidence:

-   then . then +


## additional information {#additional-information}


### regexp representing [language]({{< relref "KBhalphabet.md" >}})s {#regexp-representing-language--kbhalphabet-dot-md--s}

The regexp \\(\sigma \in \Sigma\\) represents the language \\(\qty {\sigma}\\), the regexp \\(\varepsilon\\) represents the language \\(\qty {\epsilon }\\), the regexp \\(\emptyset\\) represents the language \\(\emptyset\\).

for \\(R\_1, R\_2\\) being [regular expression]({{< relref "KBhregular_expression_complexity.md" >}})s representing a particular [regular language]({{< relref "KBhregular_language.md" >}}) \\(L\_1, L\_2\dots\\)

-   \\((R\_1 \cdot R\_2)\\) represents concatenation \\(L\_2 \cdot L\_2\\) in the language
-   \\((R\_1 + R\_2)\\) represents union \\(L\_1 \cup L\_2\\) in the language
-   \\((R\_1)^{\*}\\) represents the clean star of \\(L\_1\\) in the language


#### L(R) {#l--r}

we refer \\(L( R)\\) to be the language that \\(R\\) represents.


#### accept {#accept}

a string \\(w \in \Sigma\\) is **accepted** by \\(R\\) ("w **matches** R") if \\(w \in L( R)\\).


### regular expressions are equivalent to regular languages {#regular-expressions-are-equivalent-to-regular-languages}

another double containment


#### any regexp can be an NFA {#any-regexp-can-be-an-nfa}

given any regexp \\(R\\), we will construct an [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}}) such that \\(N\\) accepts exactly that in \\(R\\).

**base cases**: \\(R\\) has length \\(1\\); \\(R = \sigma\\), \\(R = \varepsilon\\), and \\(R = \emptyset\\), each of which has a [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}}) (only one symbol, directly to the accept state, or no accept state at all)

**invariant**: every regexp of length \\(k\\) represents some [regular language]({{< relref "KBhregular_language.md" >}})

**induction**: consider \\(R\\) of length \\(k+1\\); here are the three possibilities: \\(R = R\_1 + R\_2\\), \\(R = R\_1R\_2\\), and \\(R = (R\_{1})^{\*}\\), where all \\(|R\_{j}| \leq |k|\\). note that this means that each of the mappings map directly to a [properties of regular languages]({{< relref "KBhregular_language.md#properties-of-id-a8a2a1e4-9bb8-4a06-8218-5002136bab87-regular-language-s" >}}) (union theorem, concatenation theorem, clean star) respectively.


#### any NFA can be a regexp {#any-nfa-can-be-a-regexp}

remove states and re-labeling arcs with regular expressions---meaning we can then read substrings at a time; this operation gives us a [Generalized NFA](#any-nfa-can-be-a-regexp)---

{{< figure src="/ox-hugo/2024-09-30_23-30-27_screenshot.png" >}}

each edge can read not just a single symbol, but any string that corresponds to a regular expression

proof idea: constructions

{{< figure src="/ox-hugo/2024-09-30_23-34-36_screenshot.png" >}}

-   add unique start and accept states
-   for every path of length 2 that goes between the unique start and end states, pick and internal state, rip it out, and re-label arrows
