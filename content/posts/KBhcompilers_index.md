+++
title = "Compilers Index"
author = ["Houjun Liu"]
draft = false
+++

cs143.stanford.edu


## Lectures {#lectures}

-   [SU-CS143 APR012025]({{< relref "KBhsu_cs143_apr012025.md" >}})
-   [SU-CS143 APR032025]({{< relref "KBhsu_cs143_apr032025.md" >}})
-   [SU-CS143 APR152025]({{< relref "KBhsu_cs143_apr152025.md" >}})
-   [SU-CS143 APR172025]({{< relref "KBhsu_cs143_apr172025.md" >}})
-   [SU-CS143 APR242025]({{< relref "KBhsu_cs143_apr242025.md" >}})
-   [SU-CS143 APR292025]({{< relref "KBhsu_cs143_apr292025.md" >}})
-   [SU-CS143 MAY062025]({{< relref "KBhsu_cs143_may062025.md" >}})


### Lexing {#lexing}

-   What to do: [SU-CS143 APR082025]({{< relref "KBhsu_cs143_apr082025.md" >}})
-   How to implement it: [SU-CS143 APR102025]({{< relref "KBhsu_cs143_apr102025.md" >}})


## Logistics {#logistics}

-   programming assignments: myth
-   psets: gradescope
-   labs: myth.stanford.edu
    -   /afs/ir/class/cs143
-   finals and midterms

Textbook: the purple dragonbook


## Structure {#structure}

-   written assignments (2.5\*4 = 10%)
-   programming assignments (10+10+15+15 = 50%); 4 of them
    -   lexer
    -   parser
    -   semantic analysis parse
    -   code generator
-   midterm (15%)
-   final (25%)


## Compiler we will Build {#compiler-we-will-build}

-   lexer: strings -&gt; tokens
    -   built with Flex FSTs
    -   smallest part of the code
-   parser: tokens -&gt; AST
    -   built with Bison CFGs
    -   linear time parsing!
-   semantic analysis: AST
    -   C++
    -   check types + properties
    -   fill in types for expressions in the tree
-   [PA5: optimization - TBD]
-   code generation: AST -&gt; MIPS
    -   C++
    -   write MIPS
    -   yay!

Emphasis: **correctness** over performance.
