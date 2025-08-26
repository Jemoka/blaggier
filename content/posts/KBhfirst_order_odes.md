+++
title = "First Order ODEs"
author = ["Houjun Liu"]
draft = false
+++

[First Order ODEs]({{< relref "KBhfirst_order_odes.md" >}}) are [Differential Equations]({{< relref "KBhdiffeq_intro.md" >}}) that only takes one derivative.

Typically, by the nature of how they are modeled, we usually state it in a equation between three things:

\begin{equation}
t, y(t), y'(t)
\end{equation}

as in---we only take one derivative.

Sometimes the solution may not be analytic, but is well-defined:

\begin{equation}
y' = e^{-x^{2}}
\end{equation}

we know that, by the fundamental theorem of calculus, gives us:

\begin{equation}
y(x) = \int\_{0}^{x} e^{-s{2}} \dd{s}
\end{equation}

Indeed this function doesn't have an elementary integral, but still has a well defined result. Almost always differential equations doesn't have elementary solutions.


## Separated Equations {#separated-equations}

There is a very nice class of this type of first-order equations:

\begin{equation}
y' = f(t,y)
\end{equation}

A general function here are not these cases.

Mentally, we think of this structure on a \\(t,y\\) plane, where at each point \\((t,y)\\) the slope of the graph matches the slope given by \\(f(t,y)\\). To solve for the rest of the evolution, we consider an initial state of this system, say \\(y(1) = 3\\).

-   **symbolic methods**: generally, you are the happiest when you find specific formulas for \\(y(t)\\).
-   **qualitative methods**: for instance, slope fields


### [autonomous ODEs]({{< relref "KBhautonomous_odes.md" >}}) {#autonomous-odes--kbhautonomous-odes-dot-md}

This is a special case of these types of equations, called [autonomous ODEs]({{< relref "KBhautonomous_odes.md" >}})

\begin{equation}
y' = f(y)
\end{equation}

In most cases, this resolves into some \\(y(t) = T\_0+Ce^{-ht}\\).


### [seperable]({{< relref "KBhseperable_diffequ.md" >}}) {#seperable--kbhseperable-diffequ-dot-md}

\begin{equation}
y' = f(y)g(t)
\end{equation}

generally, this can be solved with [division algorithm]({{< relref "KBhdivide.md#division-algorithm" >}}).
