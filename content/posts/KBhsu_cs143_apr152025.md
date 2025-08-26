+++
title = "SU-CS143 APR152025"
author = ["Houjun Liu"]
draft = false
+++

## Another review of the compiler {#another-review-of-the-compiler}


### Compiler Front End {#compiler-front-end}

Lexer =&gt; Parser =&gt; Semantic Analysis; usually language specific.


### Compiler Mid End {#compiler-mid-end}

Optimizer; usually shared across many languages.


### Compiler Back End {#compiler-back-end}

Codegen


## parser {#parser}

[parser](#parser) does [parsing]({{< relref "KBhcompiler.md#parsing" >}})

[parser](#parser): takes sequence of tokens from the lexer and produce AST of the program. General goal is to distinguish between valid and invalid strings of tokens.

Importantly, we don't really emit errors from parsing; instead we just do it at the layer below and above.

NOTE: FORM of the CFGs is very important.

We use [Context-Free Grammars]({{< relref "KBhcontext_free_grammars.md" >}})


### example {#example}

Consider:

```java
if x = y then 1 else 2 fi
```

parser gets

```nil
IF ID = ID THEN INT ELSE INT FI
```

parser makes

{{< figure src="/ox-hugo/parse_tree.svg" >}}


### Chomsky Hierarchy {#chomsky-hierarchy}

Levels of languages, in increasing amounts of difficulty.

1.  regular languages
2.  CFGs (pushdown automatas)---they have a stack
3.  CSGs (context sensitive grammars)
4.  Recursively Enumerable languages (undecidable languages)
