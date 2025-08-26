+++
title = "yet another flowchart abstraction"
author = ["Houjun Liu"]
draft = false
+++

yafa!


## Syntax {#syntax}

[ (Circle) -&gt; [square] -&gt; (Circle) | (Circle) ]

[ (circle) ]

[ &lt;lt1&gt;(self loop) -&gt; &lt;lt1&gt; ]

```bison
EXPRESSION = EXPRESSION' ARROW NODE | EXPRESSION' ALTERNATION NODE | STRING
EXPRESSION' = EXPRESSION' ARROW NODE | EXPRESSION' ALTERNATION NODE | NODE

NODE = SQUARE | CIRCLE | ANCHOR
SQUARE = "[" EXPRESSION "] | ANCHOR "[" EXPRESSION "]
ANCHOR = "<" LABEL ">"

ALTERNATION = "|"
ARROW = SARROW | DARROW
SARROW = "->"
DARROW = "=>"

LABEL = r"[\w\d]+"
STRING = LABEL | "\"" ".*" "\""

```


## Semantics {#semantics}
