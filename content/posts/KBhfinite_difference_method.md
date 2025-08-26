+++
title = "Finite Difference Method"
author = ["Houjun Liu"]
draft = false
+++

The [Finite Difference Method]({{< relref "KBhfinite_difference_method.md" >}}) is a method of solving partial [Differential Equations]({{< relref "KBhdiffeq_intro.md" >}}). It follows two steps:

1.  Develop discrete [difference equation]({{< relref "KBhdifference_equation.md" >}})s for the desired expression
2.  Algebraically solve these equations to yield stepped solutions

<https://www.youtube.com/watch?v=ZSNl5crAvsw>


## Follow Along {#follow-along}

We will try to solve:

\begin{equation}
\pdv{p(t,x)}{t} = \frac{1}{2}\pdv[2]{p(t,x)}{x}
\end{equation}

To aid in notation, let us:

\begin{equation}
p(t\_{i}, x\_{j}) := p\_{i,j}
\end{equation}

to represent one distinct value of our function \\(p\\).

Let's begin by writing our expression above via our new notation:

\begin{equation}
\pdv{p\_{i,j}}{t}= \frac{1}{2} \pdv[2]{p\_{i,j}}{x}
\end{equation}

Great. Now, let's think about the left side and try to turn it into a difference eqn:

What exactly is---

\begin{equation}
\pdv{p\_{i,j}}{t}
\end{equation}

as a finite difference? Well, it is just:

\begin{equation}
\frac{p\_{i+1,j}-p\_{i,{j}}}{\Delta t}
\end{equation}

What about second partials?

Well, what is---

\begin{equation}
\pdv[2]{p\_{i,j}}{x}
\end{equation}

It is:

\begin{equation}
\frac{\pdv{p\_{i,j+1}}{x}- \pdv{p\_{i,j}}{x}}{\Delta x}
\end{equation}

Expanding the top expressions even more difference expressions:

\begin{equation}
\frac{\frac{p\_{i,{j+2}}-p\_{i,{j+1}}}{\Delta x}- \frac{p\_{i,{j+1}}-p\_{i,{j}}}{\Delta x}}{\Delta x}
\end{equation}

This equals to:

\begin{equation}
\frac{\frac{p\_{i,{j+2}}-p\_{i,{j+1}} - p\_{i,{j+1}}+p\_{i,{j}}}{(\Delta x)^{2}}
\end{equation}

Finally, substitute this into our expression, then solve for some \\(p\_{{i+1}, j}\\) in terms of \\(p\_{i, ?}\\). We will treat the entire "row" of \\(p\_{i,?}\\) as our initial condition, then solve for the rest + propagate forward.