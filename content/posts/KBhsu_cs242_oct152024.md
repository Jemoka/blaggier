+++
title = "SU-CS242 OCT152024"
author = ["Houjun Liu"]
draft = false
+++

## [Lambda Calculus]({{< relref "KBhsu_cs242_oct032024.md#lambda-calculus" >}}), review {#lambda-calculus--kbhsu-cs242-oct032024-dot-md--review}

Grammar:

\begin{equation}
e \to (x | \lambda x.e | e e)
\end{equation}

and beta reductions:

\begin{equation}
(\lambda x . e\_1) e\_2 \to e\_1 [x := e\_2]
\end{equation}


## structural operational semantics {#structural-operational-semantics}

"why can't we have logical rules to explain how programs execute?"

**bold**


### type judgment {#type-judgment}

\begin{equation}
A \vdash  e :t
\end{equation}

"under environment \\(A\\) for the [free variables]({{< relref "KBhsu_cs242_oct032024.md#free-variables" >}}) of \\(e\\), the entirety of \\(e\\) has type \\(t\\)"


### value judgment {#value-judgment}

\begin{equation}
E \vdash  e \to v
\end{equation}

"under environment \\(E\\) assigning values to the [free variables]({{< relref "KBhsu_cs242_oct032024.md#free-variables" >}}) in \\(e\\), \\(e\\) will reduce to the value of \\(v\\)"


#### value {#value}

A [value](#value) in computation is a subset of programs that can't be further reduced. In particular, some pure lambda abstraction \\(\lambda x . e\\) is a _value_.


#### value judgment evaluations {#value-judgment-evaluations}

Under a call-by-value scheme---we will first reduce function arguments.

<!--list-separator-->

-  variables

    \begin{equation}
    \frac{}{E \vdash  x \to E(x)}
    \end{equation}

    (i.e. the value of a variable can just be looked up)

<!--list-separator-->

-  integer

    \begin{equation}
    \frac{}{E \vdash i \to i}
    \end{equation}

<!--list-separator-->

-  application

    \begin{equation}
    \frac{\begin{align}
    &E \vdash e\_1 \to < \lambda x . e\_0, E' > \\\\
    &E \vdash  e\_2 \to  v \\\\
    &E' [x:v] \vdash  e\_0 \to  v'
    \end{align}}{E \vdash e\_1 e\_2 \to  v'}
    \end{equation}

<!--list-separator-->

-  abstractions

    \begin{equation}
    \frac{}{E \vdash  \lambda x . e \to  < \lambda x . e, E >}
    \end{equation}


## state {#state}

OMG side effect smh

[state]({{< relref "KBhstate.md" >}})
