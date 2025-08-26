+++
title = "SU-CS143 MAY062025"
author = ["Houjun Liu"]
draft = false
+++

-   The type of every attribute must be filled in the environment \\(O\\) before type checking can happen, because otherwise it may refer to an attribute defined later
-   best practice: store object and method tables separately


## lub {#lub}

the function \\(lub\qty(X,Y)\\), the least upper bound of \\(X\\) and \\(Y\\), is \\(Z\\) if:

\begin{equation}
X \leq Z \wedge Y \leq Z
\end{equation}

\\(X\\) is the [lub](#lub).

\begin{equation}
\forall Z', X \leq Z' \wedge Y \leq Z' \implies  Z \leq Z'
\end{equation}

both if statements and case statements uses the [lub](#lub).


## static type {#static-type}

The [static type](#static-type) given by the type system/complier maybe a super type of the actual type.

In modern type systems, the [dynamic type](#static-type) of an object may differ from the [static type](#static-type) to enable polymorphism.


### soundness {#soundness}

\begin{equation}
\forall E.\ \text{dynamic\\\_type}\qty(E) \leq \text{static\\\_type}\qty(E)
\end{equation}


## SELF-TYPE {#self-type}

SELF-TYPE is a static type: its not rendered until
