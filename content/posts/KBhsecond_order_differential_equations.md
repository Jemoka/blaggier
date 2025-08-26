+++
title = "second order differential equation"
author = ["Houjun Liu"]
draft = false
+++

## the trick {#the-trick}

Here is a pretty ubiquitous trick to solve [differential equation]({{< relref "KBhdiffeq_intro.md" >}})s of the [second order differential equations]({{< relref "KBhsecond_order_differential_equations.md" >}}). It is used to change a [second order differential equation]({{< relref "KBhsecond_order_differential_equations.md" >}}) to a [First-Order Differential Equations]({{< relref "KBhlinear_non_seperable_equation.md#solving-differential-equations" >}}).

If you have a [differential equation]({{< relref "KBhdiffeq_intro.md" >}}) of the shape:

\begin{equation}
x^{''} = f(x,x')
\end{equation}

that, the second derivative is strictly a function between the first derivative value and the current value.

We are going to define a notation \\(x' = v\\), which makes sense.

So, we will describe:

\begin{equation}
x^{''} = \dv{v}{t} = \dv{v}{x} \dv{x}{t} = v\dv{v}{x}
\end{equation}

So therefore, we have:

\begin{equation}
x^{''} = v\dv{v}{x} = f(x,v)
\end{equation}

So turns out, the original input \\(t\\) is, given a specific equation above, we have no need to know it.

To actually go about solving it, see [solving homogeneous higher-order differential equations]({{< relref "KBhsecond_order_linear_differential_equation.md#solving-homogeneous-higher-order-differential-equations" >}}).