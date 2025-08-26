+++
title = "state"
author = ["Houjun Liu"]
draft = false
+++

[Lambda Calculus]({{< relref "KBhsu_cs242_oct032024.md#lambda-calculus" >}}) with state:

\begin{equation}
e \to (x | \lambda x . e | e e | i | \text{new} | {!e} | e := e)
\end{equation}

where:

-   \\(new\\) allocate a new memory location \\(x\\) and return pointer (initialize \\(x\\) to \\(0\\))
-   \\(!e\\) deref a pointer
-   \\(e := e\\), which is assigning the pointee of the memory location at the first argument to the second argument


## new {#new}

\begin{equation}
\frac{l \not \in dom(S)}{E,S \vdash \text{new} \to  l, S[l=0]}
\end{equation}

that is, we need to return to ourselves a new place in memory


## dereference {#dereference}

\begin{equation}
\frac{E, S\_0 \vdash  e \to l, S\_1}{E, S\_0 \vdash !e \to S\_{1}(l), S\_1}
\end{equation}


## assignment {#assignment}

\begin{equation}
\frac{\begin{align}
&E, S\_0 \vdash e\_1 \to  I, S\_1 \\\\
&E, S\_1 \vdash e\_2 \to v, S\_2
\end{align}}{
E, S\_0 \vdash e\_1 := e\_2 \to v, S\_2[I=v]}
\end{equation}


## store {#store}

a _store_ is a mapping from memory locations to values---

\begin{equation}
S = [l\_1 = 1, l\_2 = 42]
\end{equation}

where, \\(1\\) is stored at location \\(l\_{1}\\), and \\(42\\) is stored at location \\(l\_2\\)

importantly! locations are **first class**---we can return pointers


### some observations {#some-observations}

-   the store is an extra argument in the environment
-   the store is never copied: no evaluation step uses more than one store, and every store is modified at most once
-   the state is unstructured; the whole store is passed to every step of the evaluation even if only a part is used


### semantics is very costly {#semantics-is-very-costly}

-   sequential order of evaluation must be defined (otherwise your state will be inconsistent)
-   there are uncontrolled amount of aliasing of names
-   unstructured states exposes too much since we only look up a few things at a time
