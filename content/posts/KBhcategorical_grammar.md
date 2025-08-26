+++
title = "categorical grammar"
author = ["Houjun Liu"]
draft = false
+++

[categorical grammar]({{< relref "KBhcategorical_grammar.md" >}}) is a [grammar]({{< relref "KBhgrammar.md" >}}) in the language of [categories]({{< relref "KBhcategory.md" >}}).


## constituents {#constituents}

-   \\(A\\), a [set]({{< relref "KBhset.md" >}}) of "expressions"
-   \\(C\\), a set of [categories]({{< relref "KBhcategory.md" >}}) of "syntax"
-   \\(\varphi: A \to Pow( C)\\), assigning each \\(a \in A\\) to a ****[set]({{< relref "KBhset.md" >}})**** of categories \\(c \subset C\\)
-   \\(G\\): a family of sets of n-place operations where \\(n=1, 2, \ldots\\) (what does a "3-place" op mean? idk)
-   \\(R\\): a set of rules encoded as tuples: \\((f; \\{c\_1, \dots c\_{k}\\}; c\_{k+1})\\), where \\(f\\) is a \\(k\\) place operation, and \\(c\_{j} \in C\\)


## requirements {#requirements}

The operations of this grammar behaves like so:

given a rule \\(r \in R\\), it tells you that given WLOG an expression in \\(c\_{1}, c\_2, \ldots c\_{k} \in C\\) (i.e. they were mapped to that set \\(\varphi\\)), \\(f\\) will map that set of expressions into the same new category \\(c\_{k+1}\\).


## additional information {#additional-information}


### a basic categorical grammar {#a-basic-categorical-grammar}

one implementation of a basic [categorical grammar]({{< relref "KBhcategorical_grammar.md" >}}) is as follows:
