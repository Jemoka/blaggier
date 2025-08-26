+++
title = "SU-CS143 APR242025"
author = ["Houjun Liu"]
draft = false
+++

## Bottom-Up Parsing {#bottom-up-parsing}

[Bottom-Up Parsing](#bottom-up-parsing) is more general than top-down parsing (i.e., it doesn't require left factorization, etc.)

This is generally the preferred method. Key insight: **we reduce strings into increasingly higher level symbols**


### Sketch {#sketch}

Because of the [Properties of Bottom-Up Parsing](#properties-of-bottom-up-parsing--orgf7cb876), we can....


#### initialization {#initialization}

-   split the string into two pieces
-   right substring has terminals, not yet examined
-   left substring has terminals and non-terminals

We begin by splitting to the left since we begin with no non-terminals.

|                  |
|------------------|
| x1 x2 x3 .... xn |


#### moves {#moves}

Shift / Reduce

-   shift: move | one place to the right --- shifts a terminal to the left string
-   reduce: apply an inverse production at the right end of the left string (i.e., take a substring closest to the bar, and reduce it)

Think: left string is a stack. **top**: is the |; **push**: the "shift" operation to push a terminal onto the stack; **reduce**: pop something onto the stack.


#### conflict {#conflict}

When Shift/Reduce are both legal, that's a "shift reduce" conflict; if multiple reductions are possible, that's a "reduce reduce" conflict.


#### deciding moves {#deciding-moves}

<!--list-separator-->

-  handle

    We want to reduce only if the result can _still_ be reduced to the starting symbol.

    A [handle](#handle) is a single production in a legal sequence coming from \\(S\\) which can be reduced into a single nonterminal. Consider:

    \begin{equation}
    S \to^{\*} \alpha X \omega \to \alpha \beta \omega
    \end{equation}

    then \\(X \to \beta\\) in the position after \\(\alpha\\) is a [handle](#handle) of \\(\alpha \beta \omega\\). We reduce at [handle](#handle)s.

    The handles are always top of the stack, otherwise it'd not be a rightmost derivation in reverse.

<!--list-separator-->

-  SLR

    Simple Left-to-right Rightmost derivation is a class of [CFG]({{< relref "KBhcontext_free_grammars.md" >}})s for which we have simple heuristics for detecting [handle](#handle)s.

<!--list-separator-->

-  heuristics

    <!--list-separator-->

    -  item

        An item is a production with "." somewhere on the RHS, denoting a focus point. For instance, \\(T \to .(E)\\).

        The only item for \\(X \to \epsilon\\) is $X &rarr; .$

        We also call these LR(0) items.

    <!--list-separator-->

    -  viable prefix

        \\(\alpha\\) is a "viable prefix" if there exists \\(\omega\\) such that \\(\alpha | \omega\\) is a state of a shift-reduce parser.

        -   a viable prefix doesn't extend beyond the right end of handle
        -   its a variable prefix because its a possible prefix of a handle
        -   as long as a parser has viable prefixes on the stack, no parsing error

    <!--list-separator-->

    -  detecting [viable prefix](#viable-prefix)s

        We us an [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}})!

        1.  add a new start production \\(S' \to S\\) to the grammar
        2.  the NFA states are [item](#item)s of the grammar
        3.  For item \\(E \to \alpha . X \beta\\) add the transition \\([E \to \alpha . X \beta] \to^{x} [E \to \alpha X . \beta]\\)
        4.  For item \\(E \to \alpha . X \beta\\) and production \\(X \to \gamma\\), add the transition \\([E \to  \alpha . X \beta] \to^{\epsilon} [X \to . \gamma]\\)

        every state is an accepting state, start state is \\(S' \to .S\\)

    <!--list-separator-->

    -  LR(0) Parsing

        Suppose stack contains \\(\alpha\\), next input is \\(t\\). DFA on input \\(\alpha\\) terminated it state \\(s\\).

        -   **Reduce** by \\(X \to \beta\\) if \\(s\\) contains item $X &rarr; &beta; .$
        -   **Shift** if \\(s\\) contains item \\(X \to  \beta .t\omega\\) (that is, there's a transition labeled \\(t\\)

        We will get reduce/reduce conflicts if one state contains $X &rarr;  &beta; .$ and $Y &rarr; &omega; .$; we will get shift/reduce conflict if $X &rarr; &beta;.$ and \\(Y \to  \omega .t \gamma\\)

    <!--list-separator-->

    -  LR(0) to SLR

        Exactly the same process, but!

        Suppose stack contains \\(\alpha\\), next input is \\(t\\). DFA on input \\(\alpha\\) terminated it state \\(s\\).

        -   **Reduce** by \\(X \to \beta\\) if \\(s\\) contains item $X &rarr; &beta;. $; and if \\(t \in \text{Follow}\qty(X)\\)
        -   **Shift** if \\(s\\) contains item \\(X \to  \beta .t\omega\\) (that is, there's a transition labeled \\(t\\)

        If there are conflicts under these rules, then you don't have an SLR grammar.

        Remember to keep (symbol, DFA state) on the stack.


### Properties of [Bottom-Up Parsing](#bottom-up-parsing) {#properties-of-bottom-up-parsing--orgf7cb876}

1.  bottom-up parser traces a rightmost derivation in reverse
2.  in shift-reduce strategy, [handle](#handle)s appear only at the top of the stack, never inside the stack
3.  for any SLR grammar, the set of viable prefixes is a [regular language]({{< relref "KBhregular_language.md" >}})!
4.  Let \\(\alpha \beta \omega\\) be a step of bottom up parse, assume the next reduction is \\(X \to \beta\\), then \\(\omega\\) should already have been a string of terminals (since we go rightmost first)


### Example {#example}

```nil
int * int + int | T -> int
int * T + int | T -> int * T
T + int | T -> int
T + T | E -> T
T + E | E -> T + E
E
```

Weird! It somehow starts in the middle.

Generally, the parsing strategy expands non-terminals bottom-up in the rightmost first.
