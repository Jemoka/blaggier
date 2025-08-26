+++
title = "Linear Non-Seperable Equation"
author = ["Houjun Liu"]
draft = false
+++

## general form of [First-Order Differential Equations](#solving-differential-equations) {#general-form-of-first-order-differential-equations--org9e796b5}

This will depend on both unknown function \\(x\\), and the independent variable \\(t\\). These could and could not be separable.

\begin{equation}
\dv{x}{t} = F(t,x),\ x(t\_{0}) = x\_{0}
\end{equation}

Let's imagine \\(F\\) is "bounded" and "continuous" on \\(I \times \omega\\), where \\(I\\) is an open interval about \\(t\_{0}\\) and \\(\omega\\) is an open subset of \\(\mathbb{R}^{n}\\), containing \\(x\_{0}\\). \\(F\\) is bounded; the results are bounded??


### functions embedded in [vector space]({{< relref "KBhvector_space.md" >}})s {#functions-embedded-in-vector-space--kbhvector-space-dot-md--s}

We understand that such [First-Order Differential Equations](#solving-differential-equations) will describe a subset of an infinite dimensional [vector space]({{< relref "KBhvector_space.md" >}}).

-   Given we are dealing with [First-Order Differential Equations](#solving-differential-equations), each function is a basis (if linear, otherwise, not quite the basis) of the subspace of the larger vector space; \\(+C\\) is how you create parametried variations
-   However, our function is not linear, not all functions would suffice here: non-linear equations are difficult to deal with beacuse the arc length follows a certain pattern


## General form of a first order ****linear**** differential equation {#general-form-of-a-first-order-linear-differential-equation}

A general linear, first-order, first-degree differential equation of the form:

\begin{equation}
    \dv{y}{x} + P(x)y = Q(x)
\end{equation}

has a solution:

\begin{equation}
y(x) = e^{-\int P\dd{x}}\int e^{\int P\dd{x}} Q(x) \dd{x}
\end{equation}

the more general solution (for definite integrals):

\begin{equation}
x(t) = e^{-A(t)}x\_{0} + e^{-A(t)}\int\_{t\_{0}}^{t}e^{A(s)}b(s)\dd{s}
\end{equation}

given the initial condition that \\(x(0) = 0\\). This is from the textbook.

Before you go ham and start solving, though, make sure that pesky \\(y\\) term is actually there. If its not, you maybe better served using the [seperable]({{< relref "KBhlinear_constant_coefficient_equation.md#solving-separable-differential-equations" >}}) methods to solve these things.


## this is bad {#this-is-bad}

This is difficult to deal with this! What?? How?? Why does this work?? See below.


## solving differential equations {#solving-differential-equations}

The following technique works for ALL first-order linear differential equations:

To solve, first put your equation into the standard form:

\begin{equation}
    \frac{dy}{dx} + P(x)y = Q(x)
\end{equation}

If you have an equation like:

\begin{equation}
    a(x) \dv{y}{x} + b(x)y = c(x)
\end{equation}

a good way to do this is to apply \\(\frac{1}{a(x)}\\) to both sides, resulting in:

\begin{equation}
\dv{y}{x} + \frac{b(x)}{a(x)} y = \frac{c(x)}{a(x)}
\end{equation}

And then you can carry on solving like its an equation in standard form.

To solve such a generic equation, we here are trying to UNDO the product rule.

We first multiply the entire expression by something called the [intergrating factor](#solving-differential-equations) \\(\rho(x)\\).

\begin{equation}
    \rho(x) \left(\frac{dy}{dx} + P(x)y\right) = \rho(x)Q(x)
\end{equation}

A note on how this \\(\rho(x)\\) works. This [intergrating factor](#solving-differential-equations) is actually defined with the following rule:

\begin{equation}
\log (\rho (x)) = \int P(x) \dd{x}
\end{equation}

(notably, \\(\log\\) is actually \\(\ln\\) in this case.)

Why so weird of an expression? This all springs from the fact that \\(\dv x e^{x} = e^{x}\\). See below on how this fact is stretched (to great lengths) to solve diffeqs.

From the above expression containing \\(\rho (x)\\), we naturally have that (based on the definition of the natural log, just expanding it out):

\begin{equation}
e^{\int P(x)\dd{x}} = \rho (x)
\end{equation}

Why is this useful? Remember, we are trying to _undo_ the product rule. Let's replace our new definition for \\(\rho (x)\\) into the above expression we are trying to solve and see what happens!

\begin{align}
&\rho (x)\qty (\dv{y}{x} + P(x)y) = \rho (x)Q(x) \\\\
\Rightarrow\ & e^{\int P\dd{x}} \qty (\dv{y}{x} + P(x)y) = e^{\int P\dd{x}} Q(x)
\end{align}

For a second now, let's just take an aside and deal with the left side. We are starting to _almost_ clearly see the product rule at play here. Let's finish the job by finishing up the rest of the product rule. Remember, we want to _go opposite_ the product rule at the next steps.

\begin{align}
e^{\int P\dd{x}} \qty (\dv{y}{x} + P(x)y) &= \dv{y}{x}e^{\int p\dd{x}} + yPe^{\int P\dd{x}} \\\\
&= \dv x \qty (ye^{\int P\dd{x}})
\end{align}

Woah! Now we have something clearly in the favor of \\(y\\) separated out. Let's put this back to our original expression.

\begin{align}
&e^{\int P\dd{x}} \qty (\dv{y}{x} + P(x)y) = e^{\int P\dd{x}} Q(x) \\\\
\Rightarrow\ & \dv x \qty (ye^{\int P\dd{x}}) = e^{\int P\dd{x}} Q(x)
\end{align}

Nice. Now, do you see the clear step to isolate \\(y\\) by itself? I do.

\begin{align}
&\dv x \qty (ye^{\int P\dd{x}}) = e^{\int P\dd{x}} Q(x) \\\\
\Rightarrow\ & \int \dv x \qty (ye^{\int P\dd{x}}) \dd{x}= \int e^{\int P\dd{x}} Q(x) \dd{x}\\\\
\Rightarrow\ & ye^{\int P\dd{x}} = \int e^{\int P\dd{x}} Q(x) \dd{x}
\end{align}

And finally, naturally and lastly, we divide the \\(e^{\int P\dd{x}}\\) to both sides.

\begin{align}
& ye^{\int P\dd{x}} = \int e^{\int P\dd{x}} Q(x) \dd{x}\\\\
\Rightarrow\ & y = e^{-\int P\dd{x}}\int e^{\int P\dd{x}} Q(x) \dd{x}\ \blacksquare
\end{align}

And there you have it. That's the general solution to our diffeq.