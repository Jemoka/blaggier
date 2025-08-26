+++
title = "SU-CS361 APR022024"
author = ["Houjun Liu"]
draft = false
+++

## Formal Formulation of Optimization {#formal-formulation-of-optimization}

If we want to write down an optimization problem...

\begin{align}
\min\_{x} f(x)  \\\\
s.t: x \in \mathcal{X}
\end{align}

where:

-   \\(x\\): "[design point](#formal-formulation-of-optimization)" (usually a vector representing the thing you are trying to optimize)
    -   which is an assignment of "[design variable](#formal-formulation-of-optimization)" to values (width, height, etc.)
-   \\(\mathcal{X}\\): a [feasible set](#formal-formulation-of-optimization) of [design point](#formal-formulation-of-optimization)s that satisfy the constraint
-   \\(f: \mathcal{X} \to \mathbb{R}\\): the objective function, which
-   \\(x^{\*}\\): the [minimizer](#formal-formulation-of-optimization)---one (or many) points that satisfy the minimization scheme

Conventionally, we **minimize**.


## constraint {#constraint}

Frequently, the [feasible set](#formal-formulation-of-optimization) consists of some linear expressions which forces the correct constraints; for instance:

\begin{align}
\min\_{x\_1, x\_2} &\ f(x\_1, x\_2) \\\\
s.t. &\begin{cases}
x\_1 \geq 0 \\\\
x\_2 \geq  0 \\\\
x\_1 + x\_2 \leq 1
\end{cases}
\end{align}

You can then shade out the areas of the entire problem space which doesn't satisfy the consraints, individually.
