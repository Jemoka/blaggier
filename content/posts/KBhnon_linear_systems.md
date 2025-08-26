+++
title = "Non-Linear System"
author = ["Houjun Liu"]
draft = false
+++

"Chaotic Dynamics" Because the word is sadly nonlinear.


## motivating non-linearity {#motivating-non-linearity}

\begin{equation}
\dv t \mqty(x \\\ y) = f\qty(\mqty(x\\\y))
\end{equation}

This function is a function from \\(f: \mathbb{R}^{2}\to \mathbb{R}^{2}\\). All the work on [Second-Order Linear Differential Equations]({{< relref "KBhsecond_order_linear_differential_equation.md" >}}), has told us that the above system can serve as a "linearization" of a second order differential equation that looks like the follows:

\begin{equation}
\dv t \mqty(x \\\y) = A \mqty(x \\\ y) +b
\end{equation}

Actually going about deriving a solution to this requires powers of \\(A\\) to commute. If \\(A\\) has a independent variable in it, or if its a time-varying function \\(A(t)\\), you can't actually perform the linearization technique (raising diagonalized \\(A\\) to powers) [highlighted here]({{< relref "KBhsecond_order_linear_differential_equation.md#solving-homogeneous-higher-order-differential-equations" >}}).

So we need something new.


## Sudden Review of Vector Functions {#sudden-review-of-vector-functions}

Let's take some function:

\begin{equation}
f: \mathbb{R}^{2} \to  \mathbb{R}^{2}
\end{equation}

It will output a vector:

\begin{equation}
f(x,y) = \mqty(f\_1(x,y)\\\ f\_{2}(x,y))
\end{equation}


## Solving [Non-Linear Systems]({{< relref "KBhnon_linear_systems.md" >}}), actually {#solving-non-linear-systems--kbhnon-linear-systems-dot-md--actually}

Let's take a non-linear system:

\begin{equation}
\begin{cases}
\dv{x}{t} = F(x,y) \\\\
\dv{y}{t} = G(x,y)
\end{cases}
\end{equation}

****Overarching Idea****: To actually solve this, we go about taking a Taylor Series (i.e. linearize) the [function]({{< relref "KBhfunction.md" >}})s next to its critical points. Then, we use an epsilon-delta proof to show that the linearization next to those critical points are a good approximation.

So! Let us begin.

Let \\((x\*,y\*)\\) be a critical point of \\(F\\). Naturally, \\(d 0=0\\), so it is also a critical point of \\(G\\).

So we have:

\begin{equation}
F(x\*,y\*)=G(x\*,y\*) = 0
\end{equation}

Now, we will begin building the "slope" of this function to eliminate the independent variable wholesale---by dividing:

\begin{equation}
\dv{y}{x} = \dv{y}{t} / \dv{x}{t} = \frac{G(x,y)}{F(x,y)}
\end{equation}

---

a divergence into epsilon delta proof


### stable {#stable}

A critical point is considered "stable" because, for each \\(\epsilon >0\\), \\(\exists  \delta >0\\), such that:

\begin{equation}
|x\_0-x\*| < \delta \implies |x(t)-x\*| < \epsilon
\end{equation}


#### asymptotically stable {#asymptotically-stable}

For every trajectory that begins close to the critical point, it will end up at the critical point as time increases. That is, \\(\exists \delta >0\\) such that:

\begin{equation}
|x-x\*| < \delta \implies  \lim\_{t \to \infty } x(t)=x\*
\end{equation}

This is essentially epsilon delta, but the limit traces out the entire process descending so the critical point is [stable](#stable) through the whole descend.