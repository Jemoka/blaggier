+++
title = "Ordinary Differential Equation"
author = ["Houjun Liu"]
draft = false
+++

[ODE]({{< relref "KBhordinary_differential_equations.md" >}})s are [Differential Equations]({{< relref "KBhdiffeq_intro.md" >}}) in one independent variable: \\(y(x)\\).

Main Content:

-   [First-Order Differential Equations]({{< relref "KBhlinear_non_seperable_equation.md#solving-differential-equations" >}})
-   [Second-Order Linear Differential Equations]({{< relref "KBhsecond_order_linear_differential_equation.md" >}})
-   [Uniqueness and Existance]({{< relref "KBhuniqueness_and_existance.md" >}})


## Overarching Categories {#overarching-categories}


### order of equations {#order-of-equations}

the [order](#order-of-equations) of an equation is the highest derivative of an equation


### linear vs. non-linear differential equations {#linear-vs-dot-non-linear-differential-equations}

A solution of a differential equation is **linear** when solutions are [closed]({{< relref "KBhclosed.md" >}}) under linear operations.

We can spot an ODE by seeing that each of its derivatives are seperated or in separable terms, and only to the first power---because that ends up being a linear equation (i.e. any two solutions satisfying the equation can add and scale to another solution).

The RHS doesn't matter. For instance:

\begin{equation}
xy'' + e^{x}y' + (x^{2}-3)y = x^{2}-x
\end{equation}

is linear.


#### superposition principle {#superposition-principle}

any linear combination of a _homogeneous linear_ ODE is also a solution to the ODE.

<!--list-separator-->

-  functional linear independence

    Recall linear independence. If we have two solutions \\(y\_1\\), \\(y\_2\\), are [linearly independent]({{< relref "KBhlinear_independence.md" >}}) or "[independent]({{< relref "KBhprobability.md#independence" >}})", if

    \begin{equation}
    c\_1 y\_1(t) + c\_2y\_2(t) = 0
    \end{equation}

    implies \\(c\_1 = c\_2 = 0\\).


### homogeneous vs. inhomogeneous equations {#homogeneous-vs-dot-inhomogeneous-equations}

whether or not, isolating all the DEPENDENT variables to the left side, is the right side zero?


### linear systems {#linear-systems}

systems of ODEs are groups of ODEs. Linear systems can obtain you a vector-value function:

\begin{equation}
y'(x) = \mqty(3 & -2 \\\ -1 & 5) \vec{y}
\end{equation}
