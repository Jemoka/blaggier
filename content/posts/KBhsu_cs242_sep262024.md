+++
title = "SU-CS242 SEP262024"
author = ["Houjun Liu"]
draft = false
+++

MAIN IDEA: [Combinator Calculus]({{< relref "KBhcombinator_calculus.md" >}})


## [primitive recursion]({{< relref "KBhcombinator_calculus.md#natural-numbers" >}}) vs [general recursion]({{< relref "KBhcombinator_calculus.md#general-recursion" >}}) {#primitive-recursion--kbhcombinator-calculus-dot-md--vs-general-recursion--kbhcombinator-calculus-dot-md}

[primitive recursion]({{< relref "KBhcombinator_calculus.md#natural-numbers" >}}) is a form of recursion whereby you don't get to modify the amount of recursion after the loop is defined. [general recursion]({{< relref "KBhcombinator_calculus.md#general-recursion" >}}) have control flow.


## non-termination {#non-termination}

all forms of general recursion either


## rewrite system {#rewrite-system}

-   \\(\to\\) is a single rewrite
-   \\(\to^{\*}\\) stands for the reflexive, transitive closure of \\(\to\\) (i.e. zero or more rewrites---"we skipped the middle")
