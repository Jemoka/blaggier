+++
title = "compiler"
author = ["Houjun Liu"]
draft = false
+++

A [compiler]({{< relref "KBhcompiler.md" >}}) complies code!


## parts of compilers {#parts-of-compilers}


### lexical analysis {#lexical-analysis}

make stuff tokens --- "identifying words"


#### an example! {#an-example}

```nil
if x == y then z = 1; else z = 2;
```

-   if: keyword
-   " ": white space
-   x: identifier
-   ==: relation

... and so on


### parsing {#parsing}

[abstract syntax tree]({{< relref "KBhabstract_syntax_tree.md" >}})ifying the tokens --- "identifying sentences".

See [parser]({{< relref "KBhsu_cs143_apr152025.md#parser" >}}).

{{< figure src="/ox-hugo/parse.svg" >}}


### semantic analysis {#semantic-analysis}

[semantic analysis]({{< relref "KBhsemantic_analysis.md#semantic-analysis" >}})


### optimization {#optimization}

make the IR faster --- "editing".


#### goals {#goals}

-   run faster
-   use less memory
-   generally, conserve resources


#### tricky tricky! {#tricky-tricky}

Can this be optimized to `x=0`?

```c
x = y * 0
```

Its tricky. `y` may not be numeric; `y` maybe float, then in which can `nan * 0 = nan`.


### code generation {#code-generation}

generate machine code --- "translation." Consider: register layout, etc.


## other stuff {#other-stuff}


### intermediate representation {#intermediate-representation}

compliers typically translate between multiple intermediate languages.

-   all but the first and last representations are called [intermediate representations]({{< relref "KBhcompiler.md" >}})
-   IRs are generally ordered in descending levels of abstraction

<!--listend-->

```dot
digraph {
rankdir=LR;
graph [bgcolor=transparent];
node [fontcolor=white, color=white, shape=none];
edge [fontcolor=white, color=white];

ir1 [label="ir"]

source -> ir -> "..." -> ir1 -> {assembly, ir1}
}
```

{{< figure src="/ox-hugo/ir.svg" >}}


### issues {#issues}

many pitfalls:

-   your copmiler maybe slow
-   may not be able to error nous inputs
-   language design is important -- determines what is ambiguous (hence what is easy / hard to compile)
-   tradeoffs! in language design
