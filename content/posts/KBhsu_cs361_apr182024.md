+++
title = "SU-CS361 APR182024"
author = ["Houjun Liu"]
draft = false
+++

## [constraint]({{< relref "KBhsu_cs361_apr022024.md#constraint" >}}) {#constraint--kbhsu-cs361-apr022024-dot-md}

recall [constraint]({{< relref "KBhsu_cs361_apr022024.md#constraint" >}}); our general constraints means that we can select \\(f\\) within a [feasible set]({{< relref "KBhsu_cs361_apr022024.md#formal-formulation-of-optimization" >}}) \\(x \in \mathcal{X}\\).


## active constraint {#active-constraint}

an "[active constraint](#active-constraint)" is a constraint which, upon application, changes the solution to be different than the non-constrainted solution. This is always true at the equality constraint, and not necessarily with inequality constraints.


## types of constraints {#types-of-constraints}

We can write all types of optimization problems into two types of constraints; we will use these conventions EXACTLY:


### equality {#equality}

situations where:

\begin{equation}
h(\bold{x}) = 0
\end{equation}

"some transformation on \\(x\\) must result in \\(0\\)"

we can transform all constraints to this type trivially:

\begin{equation}
h(x) = \bold{1}\qty(x \not\in \mathcal{X}) = 0
\end{equation}


### inequality {#inequality}

situations where:

\begin{equation}
g(\bold{x}) \leq 0
\end{equation}

"some transformation on \\(x\\) must be non-positive"


## region-based constraints {#region-based-constraints}

if we want \\(x \in [a,b]\\), we can transform this into an unconstrained optimization problem by substituting the rescaled version into the input:

\begin{equation}
x\qty(\hat{x}) = \frac{b+a}{2} + \frac{b-a}{2} \qty( \frac{2 \hat{x}}{1+ \hat{x}^{2}})
\end{equation}

you can choose any transformation that keeps you into the you can choose any transformation that keeps you into the you can choose any transformation that keeps you into the you can choose any transformation that keeps you into the feasible set (say, sigmoid).


## Lagrange multiplier {#lagrange-multiplier}

"the gradient of the objective function has to be perpendicular to the gradient of the constraints"


### For Equality constraints {#for-equality-constraints}

Assume we only have an equality constraint:

\begin{align}
\min\_{x}&\ f(x)\\\\
s.t.&\ h(x) = 0
\end{align}

We are going to create a [Lagrangian]({{< relref "KBhlagrangian_mechanics.md" >}}) of this system:

\begin{equation}
\mathcal{L}(x, \lambda) = f(x) - \lambda h(x)
\end{equation}

Setting the gradient of this to \\(0\\):

\begin{equation}
\nabla \mathcal{L} = 0 = f'(x) - \lambda h'(x)
\end{equation}

meaning:

\begin{equation}
f'(x) = \lambda h'(x)
\end{equation}

We can now also recall that \\(h(x) = 0\\). We now have a system:

\begin{equation}
\begin{cases}
f'(x) = \lambda h'(x) \\\\
h(x) = 0
\end{cases}
\end{equation}

We can go now to solve for \\(x, \lambda\\).


### For Inequality constraints {#for-inequality-constraints}

\begin{align}
\min\_{x}&\ f(x)\\\\
s.t.&\ g(x) \leq 0
\end{align}

We have (we switched the signs, but it doesn't matter):

\begin{equation}
\mathcal{L}(x, \mu) = f(x) + \mu g(x)
\end{equation}


### Combined {#combined}

\begin{equation}
\mathcal{L}(x, \mu, \lambda) = f(x) + \mu g(x) + \lambda h(x)
\end{equation}


### Infinite step function {#infinite-step-function}

We now formulate this such that boundaries outside of the constraints is infinitely large; recall that our constraint have \\(g(x) \leq 0\\). Meaning:

\begin{equation}
f\_{\infty} = \max\_{\mu \geq 0} \mathcal{L}(x, \mu) = \max\_{\mu \geq 0} \qty(f(x) + \mu g(x))
\end{equation}

this uses the fact that, at feasible \\(g\\) (i.e. non-positive \\(g\\)), the most optimal choice of \\(\mu\\) is \\(0\\), whereas at non-feasible \\(g\\), the optimal is \\(\mu \to \infty\\).

Meaning, our problem becomes:


### primal problem {#primal-problem}

\begin{equation}
\min\_{x} \max\_{\mu \geq 0, \lambda} \mathcal{L}(x,\mu, \lambda)
\end{equation}


#### KKT Conditions {#kkt-conditions}

<!--list-separator-->

-  feasibility

    \begin{equation}
    \begin{cases}
    g(x^{\*}) \leq  0 \\\\
    h(x^{\*}) = 0
    \end{cases}
    \end{equation}

<!--list-separator-->

-  dual feasibility

    \begin{equation}
    \mu \geq 0
    \end{equation}

<!--list-separator-->

-  complementary slackness

    \begin{equation}
    u \cdot g = 0
    \end{equation}

<!--list-separator-->

-  stationarity

    objective function is tangent to each constraint

    \begin{equation}
    \nabla f(x) + \mu \nabla g(x) + \lambda \nabla h(x) = 0
    \end{equation}


#### dual form of the primal problem {#dual-form-of-the-primal-problem}

we can incorporate our active constraint term to write:

\begin{equation}
\mathcal{L}(x, \mu, \lambda) = f(x) + \mu \cdot g(x) + \lambda \cdot h(x)
\end{equation}

by the same principle above, we can write:

\begin{equation}
\min\_{x} \max\_{\mu \geq 0, \lambda} \mathcal{L}(x,\mu, \lambda)
\end{equation}

we now write the DUAL of this function:

\begin{equation}
\mathcal{D} = \max\_{\mu \geq 0, \lambda} \min\_{x} \mathcal{L}(x,\mu, \lambda)
\end{equation}

by the [min-max duality theorem](#min-max-duality-theorem), we now that solutions to this will bound the actual primal problem. The difference between \\(\mathcal{D}\\) and the primal problem is called the [duality gap](#dual-form-of-the-primal-problem).

<!--list-separator-->

-  min-max duality theorem

    \begin{align}
    \max\_{a} \min\_{b} f(a,b) \leq \min\_{b} \max\_{a} f(a,b)
    \end{align}

    for any function \\(f(a,b)\\). Therefore, the solution to the dual problem is a **lower bound** to the primal solution.


## Penalty Methods {#penalty-methods}

We use these methods if we are outside of the [KKT Conditions](#kkt-conditions), which will bring us into those conditinos. We can use the [Lagrange multiplier](#lagrange-multiplier) conditions to reshape a constrained problem into a unconstrained one to satisfy the [KKT Conditions](#kkt-conditions).

count penalty, quadratic penalty, and mixed penalty.

We just write it:

\begin{equation}
\min\_{x} f(x) + \rho p
\end{equation}

where \\(p\\) comes from

{{< figure src="/ox-hugo/2024-04-18_09-59-29_screenshot.png" >}}

over time for solving the function, we slowly rachet up \\(\rho\\) until \\(\rho \to \infty\\) until we reach it as a hard limit.


## Interior Point Method {#interior-point-method}

if we are within the feasible set already, we can do these to prevent us form getting out:

{{< figure src="/ox-hugo/2024-04-18_10-01-44_screenshot.png" >}}
