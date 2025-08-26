+++
title = "power series to solve differential equations"
author = ["Houjun Liu"]
draft = false
+++

We can now use [power series]({{< relref "KBhpower_series.md" >}}) to also solve [differential equation]({{< relref "KBhdiffeq_intro.md" >}})s.

\begin{equation}
\dv{x}{t} = 0; x(0)=1
\end{equation}

We wish to have a power-series solution of shape:

\begin{equation}
x(t) = \sum\_{k=0}^{\infty }a\_{k}t^{k}
\end{equation}

We want to find the coefficients \\(a\_{k}\\). If you can find such a function that fits this form, they both 1) converge and 20 behave the same way as \\(e^{x}\\) does in [Simple Differential Equations]({{< relref "KBhsimple_differential_equations.md" >}}).


## analytic functions {#analytic-functions}

Functions which can be described with a [power series]({{< relref "KBhpower_series.md" >}}) are called [analytic functions](#analytic-functions).
