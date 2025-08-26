+++
title = "abstract syntax tree"
author = ["Houjun Liu"]
draft = false
+++

[abstract syntax tree]({{< relref "KBhabstract_syntax_tree.md" >}}) is what happens when [CFG]({{< relref "KBhcontext_free_grammars.md" >}})s is applied to text (i.e., the parser traces the AST in time).


## Building an AST {#building-an-ast}

Generally, each production will have an _action_, which is the relevant computation.

```bison
X -> Y1... Yn { action }
```

Each symbol `X` admits an attribute `X.val`

-   for each terminal, `val` is the associated lexeme
-   for non-terminals, `val` is the expression's value (i.e., from the values of the subexpressions)

you job is to compose the subexpressions' values and stick it into `X.val`. Notably, cycles are not allowed because we typically parse bottom-up, left ot right.


### actually doing it {#actually-doing-it}

For instance, consider:

```haskell
E -> int { E.ast = mkleaf(int.lexval) }
   | E1 + E2 { E.ast = mkplus(E.ast, E2.ast) }
   | E.ast = E1.ast
```


### s-attribute {#s-attribute}

...or synthesized attributes, are calculated from attributes of descendent in the parse tree. For instance, `E.val` is a synthesized attribute

[inherited-attribute](#s-attribute), which is rarer, is attributes parsed from teh parent.


### declarative vs imperative style {#declarative-vs-imperative-style}

Two parsing ordering styles...


#### Declarative style {#declarative-style}

-   resolution is not specified
-   parser figures it out


#### Imperative style {#imperative-style}

-   evalution is fixed
-   suppose action manipulates global state


### an example {#an-example}

Consider the grammar

```haskell
E -> Int | E + E | (E)
```

For instance:

```haskell
E -> int { E.val = int.val }
   | E1 + E2 { E.val  = E1.val + E2.val }
   | ( E1 ) = { E.val = E1.val }
```


## example {#example}

```haskell
E -> int | (E) | E + E
```

and the string

```haskell
5 + (2 + 3)
```

We would draw a tree

{{< figure src="/ox-hugo/2025-04-17_11-03-19_screenshot.png" >}}

and crunch that into a data structure (where exprs can point to other structures.)

{{< figure src="/ox-hugo/2025-04-17_11-05-54_screenshot.png" >}}
