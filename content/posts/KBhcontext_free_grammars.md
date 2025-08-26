+++
title = "Context-Free Grammar"
author = ["Houjun Liu"]
draft = false
+++

We use [CFG]({{< relref "KBhcontext_free_grammars.md" >}})s to highlight the recursive structure in expressions.

A CFG consists of

-   Non-Recursed Terminals (`if`, `else`, etc.) \\(T\\)
-   Non-Terminals (`expr`, `stmt`, etc.) \\(N\\)
-   Start symbol (i.e., `program`) \\(S \in N\\)
-   Set of [productions](#productions)


## generative semantics {#generative-semantics}

Let \\(G\\) be an CFG with start symbol \\(S\\); the language of \\(G\\) is...

\begin{equation}
\qty {a\_1, \dots, a\_{n} | S \to^{\*} a\_{1}, a\_{n}}
\end{equation}

with each \\(a\_{j}, \forall j\\) being terminals.

That is, the "language of a CFG" is just the set of languages that could be produced by as many moves as needed until we obtain the output.


## productions {#productions}

\begin{equation}
X \to Y\_1, Y\_2, \dots, Y\_{n}
\end{equation}

whereby \\(X \in N\\), \\(Y\_{i} \in T \cup N \cup \qty {\varepsilon}\\). Notably, we could replace a non-terminal with nothing.


## derivation {#derivation}

a [derivation](#derivation) is a sequence of productions which leads to a string of only terminals

A derivation can be drawn as a tree---

-   start symbol is the root
-   for production \\(X \to Y\_1, ..., Y\_{n}\\), add children \\(Y\_1, ..., Y\_{n}\\) to note \\(X\\)


## stratification {#stratification}

[stratification](#stratification) allows us to deal with the PEMDAS (/associativity) of the operations. Consider an addition and multiplication world:

```haskell
E = E+E | E*E | (E) | id
```

how do we parse `id * id + id`.

We can just have a "multiplication world" E' language, whereby after en counting an multiplication, we are not allowed to do addition anymore unless we encounter a parentheses.

```haskell
E = E' + E | E'
E' = id * E' | id | (E) * E' | (E)
```


## dangling if problem {#dangling-if-problem}

Consider the following ambiguous grammar:

```haskell
E -> if E then E
   | if E then E else E
   | ....
```

Consider:

```java
if something then if something then something else something
```

Is the else the first or the second expression?~:w

to fix this, we need to make a world of "matched if expression"

```haskell
E -> MIF -- all "then" are matched
   | UIF -- some "then" is unmatched

UIF -> if E then E
     | if E then MIF else UIF

{- "we don't allow unmatched if expressions in then branches" -}
MIF -> if E then MIF else MIF
     | OTHER
```

Most tools, like flex/bison, will allow you to control precedence.


## conventions {#conventions}

-   non-terminals in upper case
-   terminals in lower case
-   start symbol is the non-terminal of the first production

-   membership in a language is a "yes"/"no"
-   we must handle errors gracefully
-   bison could help us actually implement the parser


## example {#example}

```haskell
EXPR -> if EXPR then EXPR else EXPR fi
      | while EXPR loop EXPR pool
      | id
```
