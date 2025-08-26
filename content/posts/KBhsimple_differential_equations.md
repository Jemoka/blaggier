+++
title = "Simple Differential Equations"
author = ["Houjun Liu"]
draft = false
+++

Here is the most simple [Differential Equation]({{< relref "KBhdiffeq_intro.md" >}}) one could imagine:

\begin{equation}
\dv{x}{t} = f(t,x)
\end{equation}

Or, perhaps, we have a second order [differential equation]({{< relref "KBhdiffeq_intro.md" >}}) which is the same thing but in the second degree:

\begin{equation}
\dv[2]{x}{t} = f\qty(t,x,\dv{x}{t})
\end{equation}

Then in which case, we have that the first most simple type of [differential equation]({{< relref "KBhdiffeq_intro.md" >}}) to be as follows:

\begin{equation}
\dv{x}{t} = x(t)
\end{equation}

If we can solve this, we can generalize this to most of other [First-Order Differential Equations]({{< relref "KBhlinear_non_seperable_equation.md#solving-differential-equations" >}}).

where, the function \\(f(t,x)=x(t)\\).

\begin{align}
& \dv{x}{t} = x(t) \\\\
\Rightarrow\ & \frac{1}{x(t)}\dd{x} = \dd{t}
\end{align}

At this point, you may ask yourself, why not construct it such that we have \\(\dd{x} = x(t)\dd{t}\\)? Well, its because our \\(x\\) is a variable in \\(t\\), so if we constructed it that way we'd have to integrate a function \\(\dd{t}\\) with usub and the reverse chain rule, etc. etc. If we are instead integrating it on \\(\dd{x}\\), it becomes much easier because our variable of interest no longer considers the \\(t\\).

Continuing on, then:

\begin{align}
&\frac{1}{x(t)}\dd{x} = \dd{t} \\\\
\Rightarrow\ &\int \frac{1}{x(t)}\dd{x} = \int \dd{t}  \\\\
\Rightarrow\ & \ln (x(t)) = t  \\\\
\Rightarrow\ & x(t) = e^{t}
\end{align}

Awesome. It should't be hard also to see that, generally:

\begin{equation}
x(t) = e^{ct}
\end{equation}

is the solution to all equations \\(\dv{x}{t} = cx\\).

Turns out (not proven in the book), this holds for complex valued equations as well. So, we have some:

\begin{align}
&x(t) = e^{it} \\\\
\Rightarrow\ & \dv{x}{t} = ix
\end{align}

Of course, from elementary calculus we also learned the fact that \\(e^{x}\\) can be represented as a [power series]({{< relref "KBhpower_series.md" >}}); so check that out for now we connect it.

---

This equation leads us to solve:

\begin{equation}
\dv{x}{t} + ax = b(t)
\end{equation}

In order to do this, we neeed to find a replacement of the property that:

\begin{equation}
\dv t\qty(e^{at}x) = e^{at}\qty(\dv{x}{t} +at)
\end{equation}

A more general result of the above form is

\begin{equation}
\dv{x}{t} + a(t)x = b(t)
\end{equation}

This is fine, but now we need to leverage to chain rule to have \\(\dv t a(t)\\) would be simply changing the above result to \\(a'(t)\\).

But anyways through this we will end up with the same solution we get from [solving differential equations]({{< relref "KBhlinear_non_seperable_equation.md#solving-differential-equations" >}}).