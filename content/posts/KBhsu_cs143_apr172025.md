+++
title = "SU-CS143 APR172025"
author = ["Houjun Liu"]
draft = false
+++

and also [abstract syntax tree]({{< relref "KBhabstract_syntax_tree.md" >}}) and [top-down parsing]({{< relref "KBhbuilding_a_parser.md" >}})


## error handling {#error-handling}

Recall! Our compiler should detect non-valid programs and to translate valid ones.

| Error Kind  | Example                         | Detected by... |
|-------------|---------------------------------|----------------|
| Lexical     | $ &lt;- doesn't exist           | lexer          |
| Syntax      | x \* % &lt;- doesnt' make sense | parser         |
| Semantic    | int x; x(3) &lt;- doesn't check | type checker   |
| Correctness |                                 | you!           |

Good error handler should report errors accurately and clearly; recovering from an error quickly, and not slow down compilation of valid code.

Error handling ranges from....

-   panic mode
-   error productions
-   automatic local/global correction

Not all parser generators support this.


### panic mode {#panic-mode}

Consider:

```java
( 1 + + 2 ) + 3
```

[panic mode](#panic-mode) recovery involves skipping to the next integer and then continue

For instance, our CFG could be:

```haskell
E -> int | E + E | (E ) | error int | (error)
```

The goal here is to just fast forwarding through the entire error until you see an int.


### error production {#error-production}

This is how one could get really specific error messages. We will predict some known mistakes and then report them. For instance, people may write `5 x` instead of `5*x`. We can detect this as a [production]({{< relref "KBhcontext_free_grammars.md#productions" >}}) and just handle it explicitly.


### local and global correction {#local-and-global-correction}

Idea: find the locally correct "nearby" program. Where we try token insertions and deletions until it works, possibly exhaustively.

-   hard to implement
-   slow down complitaion, etc...
