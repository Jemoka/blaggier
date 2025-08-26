+++
title = "SU-CS143 MAY152025"
author = ["Houjun Liu"]
draft = false
+++

"If \\(B\\) is a subclass of \\(A\\), then an object of \\(B\\) can be used wherever \\(A\\) is expected."

To do this, we will lay out:

the pointer `*` points to a method table


## Other Semantics than [structural operational semantics]({{< relref "KBhsu_cs242_oct152024.md#structural-operational-semantics" >}}) {#other-semantics-than-structural-operational-semantics--kbhsu-cs242-oct152024-dot-md}

1.  [denotational semantics]({{< relref "KBhsu_cs224n_apr022024.md#denotational-semantics" >}})
2.  [axiomatic semantics]({{< relref "KBhaxiomatic_semantics.md" >}})


## Runtime Errors {#runtime-errors}

We have to catch some runtime errors:

-   calling on voids
-   method dispatch problems


## What to track in context? {#what-to-track-in-context}

-   **environment**: where in memory a variable is stored? `Map<Symbol, void *>`
-   **store**: what is in memory? `Map<void *, Value>`

This means that a judgment is:

\begin{equation}
\text{self}, E, S \vdash e: V, S'
\end{equation}

that is, "given environment \\(E\\), store \\(S\\), we have that \\(e\\) evaluates to \\(V\\), and \\(S\\) are side effects."

The reason why environments doesn't change is because we can't pass globals up, so scoping always travels down.


### assignments {#assignments}

As you would expect:

\begin{equation}
\frac{so,E, S \vdash  e : v, S\_1 | E\qty(id) = I\_{id} | S\_2=S\_1[v / I\_{id}]}{so, E, S \vdash  id \leftarrow e: v, S\_2}
\end{equation}

Notice! we have side effects that are **CHAINED**; if evaluating \\(e\\) has side effects, we carry them into our evaluation in the side effects \\(S \to S\_1 \to S\_2\\).


### loops {#loops}

We use recursion!

\begin{equation}
\frac{\begin{align}&so, E, S \vdash e\_1: true, S\_1 \\\ &so, E, S\_1, \vdash  S\_2 : v, S\_2 \\\ &so, E, S\_2 \vdash \text{ while } e\_1 \text{ loop } e\_2 \text{ pool } : void, S\_3\end{align}}{so, E, S  \vdash \text{ while } e\_1 \text{ loop } e\_2 \text{ pool } : void, S\_3}
\end{equation}


### how do we allocate new spaces? {#how-do-we-allocate-new-spaces}

We can use the syntax

\begin{align}
&l\_{new} = \text{newloc}\qty(S\_1) \\\\
&so, E[l\_{new} / id], S\_1[v\_1 / l\_{new}] \vdash \dots
\end{align}


### how do we allocate new objects? {#how-do-we-allocate-new-objects}


### ...what about `self`? {#dot-dot-dot-what-about-self}

\begin{equation}
\frac{}{\text{so}, E, S \vdash \text{self}: \text{so}, S}
\end{equation}


## errors to check {#errors-to-check}

-   dispatch on void
-   division by zero
-   substring out of range
-   heap overflow

generally we need to exit gracefully
