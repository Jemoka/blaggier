+++
title = "Uniqueness and Existance"
author = ["Houjun Liu"]
draft = false
+++

Questions of [Uniqueness and Existance]({{< relref "KBhuniqueness_and_existance.md" >}}) are important elements in [Differential Equations]({{< relref "KBhdiffeq_intro.md" >}}).

Here's a very general form of a differential equations. First, here's the:


## function behavior tests {#function-behavior-tests}


### continuity {#continuity}

Weakest statement.

A function is [continuous](#continuity) if and only if:

\begin{equation}
\lim\_{x \to y} f(x) =f(y)
\end{equation}


### Lipschitz Condition {#lipschitz-condition}

Stronger statement.

{{< figure src="/ox-hugo/2024-04-09_09-18-47_screenshot.png" >}}

The [Lipschitz Condition](#lipschitz-condition) is a stronger test of [Continuity](#continuity) such that:

\begin{equation}
|| F(t,x)-F(t,y)||  \leq L|| x- y||
\end{equation}

for all \\(t \in I\\), \\(x,y \in \omega\\), with \\(L \in  (0,\infty)\\), named "[Lipschitz Constant](#lipschitz-condition)", in the **dependent** variable \\(x\\).

Reshaping this into linear one-dimensional function, we have that:

\begin{equation}
\left | \frac{F(t,x)-F(t,y)}{x-y} \right | \leq L < \infty
\end{equation}

The important thing  here is that its the same \\(L\\) of convergence \\(\forall t\\).  However, \\(L\\) may not be stable---in can oscillate


### Differentiable {#differentiable}

We finally have the strongest statement.

\begin{equation}
\lim\_{x \to y} \frac{f(x)-f(y)}{x-y} = C
\end{equation}

To make something [Differentiable](#differentiable), it has to not only converge but converge to a constant \\(C\\).


## Existence and Uniqueness Check for [differential equation]({{< relref "KBhdiffeq_intro.md" >}}) {#existence-and-uniqueness-check-for-differential-equation--kbhdiffeq-intro-dot-md}

Assume some \\(F:I \times \omega  \to \mathbb{R}^{n}\\) (a function \\(F\\) whose domain is in some space \\(I \times \omega\\)) is **bounded** and **continuous** and **satisfies the [Lipschitz Condition](#lipschitz-condition)**, and let \\(x\_{0} \in  \omega\\), then, there exists \\(T\_{0} > 0\\) and a unique solution for \\(x(t)\\) that touches \\(x\_{0}\\) to the standard [First-Order Differential Equation]({{< relref "KBhlinear_non_seperable_equation.md#solving-differential-equations" >}}) \\(\dv{x}{t} = F(t,x), x(t\_{0}) = t\_{0}\\) for some \\(|t-t\_{0}| < T\_{0}\\).

To actually check that \\(F\\) satisfies [Lipschitz Condition](#lipschitz-condition), we pretty much usually just go and take the partial derivative w.r.t. \\(x\\) (****dependent**** variable, yes its \\(x\\)) of \\(F\\) on \\(x\\), which---if exists on some bound---satisfies the [Lipschitz condition](#lipschitz-condition) on that bound.


### Proof {#proof}

So we started at:

\begin{equation}
\dv{x}{t} = F(t,x), x(t\_{0}) = x\_{0}
\end{equation}

We can separate this expression and integrate:

\begin{align}
& \dv{x}{t} = F(t,x) \\\\
\Rightarrow\ & \dd{x} = F(t,x)\dd{t} \\\\
\Rightarrow\ & \int\_{x\_{0)}}^{x(t)} \dd{x} = \int\_{t\_{0}}^{t} F(s,x(s)) \dd{s} \\\\
\Rightarrow\ & x(t)-x\_{0}= \int\_{t\_{0}}^{t} F(s,x(s)) \dd{s}
\end{align}

At this point, if \\(F\\) is [seperable]({{< relref "KBhlinear_constant_coefficient_equation.md#solving-separable-differential-equations" >}}), we can then seperate it out by \\(\dd{t}\\) and taking the right integral. However, we are only interested in existance and uniquness, so we will do something named...


#### Picard Integration {#picard-integration}

[Picard Integration](#picard-integration) is a inductive iteration scheme which leverages the [Lipschitz Condition](#lipschitz-condition) to show that a function integral converges. Begin with the result that all [First-Order Differential Equations]({{< relref "KBhlinear_non_seperable_equation.md#solving-differential-equations" >}}) have shape (after forcibly separating):

\begin{equation}
x(t)-x\_{0}= \int\_{t\_{0}}^{t} F(s,x(s)) \dd{s}
\end{equation}

We hope that the inductive sequence:

\begin{equation}
x\_{n+1}(t) = x\_{0} + \int\_{t\_{0}}^{t} F(s,x\_{n}(s)) \dd{s}
\end{equation}

converges to the same result above (that is, the functions \\(x\_{n}(s)\\) stop varying and therefore we converge to a solution \\(x(s)\\) to show existance.

This is hard!

---

Here's a digression/example:

if we fix a time \\(t=10\\):

we hope to say that:

\begin{equation}
\lim\_{n \to \infty } G\_{n}(10) = G(10)
\end{equation}

\\(\forall \epsilon > 0\\), \\(\exists M < \infty\\), \\(\forall n>M\\),

\begin{equation}
|G\_{n}(10)-G(10)| < \epsilon
\end{equation}

Now, the thing is, for the integral above to converge uniformly, we hope that \\(M\\) stays fixed \\(\forall t\\) (that all of the domain converges at once after the same under of the iterations.

---

Taking the original expression, and applying the following page of algebra to it:

{{< figure src="/ox-hugo/2022-09-13_13-34-58_screenshot.png" >}}

Finally, we then apply the [Lipschitz Condition](#lipschitz-condition) because our setup is that \\(F\\) satisfies the [Lipschitz Condition](#lipschitz-condition), we have that:

\begin{equation}
||x\_{n+1}(t)-x\_{n}(t)|| \leq L\int\_{x\_{0}}^{t} ||x\_{n}(s)-x\_{n-1}(s)||ds
\end{equation}
