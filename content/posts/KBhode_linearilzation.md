+++
title = "linearilzation"
author = ["linearilzation"]
draft = false
+++

For some non-linear function, we can use its first Jacobian to create a linear system. Then, we can use that system to write the first order Taylor:

\begin{equation}
y' = \nabla F(crit)y
\end{equation}

where \\(crit\\) are critical points.


## [Phase Portrait]({{< relref "KBhsu_math53_feb072024.md#phase-portrait" >}}) stability {#phase-portrait--kbhsu-math53-feb072024-dot-md--stability}

-   if **all** \\(Re[\lambda] < 0\\) of \\(\qty(\nabla F)(p)\\) then \\(p\\) is considered **stable**---that is, points initially near \\(p\\) will exponentially approach \\(p\\)
-   if **at least one** \\(Re[\lambda] > 0\\) of \\(\qty(\nabla F)(p)\\) then \\(p\\) is considered **unstable**---that is, points initially near \\(p\\) will go somewhere else
-   if **all** \\(Re[\lambda] \leq  0\\) and **at least one** \\(\lambda\\) is pure imaginary of \\(\qty(\nabla F)(p)\\), then there are no conclusions and \\(p\\) is considered **marginal**

    If there are **no** purely imaginary values, then the solution paths of the ODE look like that of \\(y' = (\nambla F)(p) y\\).


## Worked Example {#worked-example}

Let's [Lotha-Volterra Prey-Predictor Equation]({{< relref "KBhsu_math53_feb072024.md#lotha-volterra-prey-predictor-equation" >}}) again as an example

\begin{equation}
\begin{cases}
x\_1' = 2x\_1-x\_1x\_2 \\\\
x\_2' = x\_1x\_2 - 3x\_2
\end{cases}
\end{equation}

we can stare at this (and factor \\(x\\) out) to understand that there are only two stationary points:

\begin{equation}
(x\_1,x\_2) = (0,0), (3,2)
\end{equation}

Let's analyze this function for [linearilzation]({{< relref "KBhode_linearilzation.md" >}}).

Let's write this expression in terms of the linear and non linear parts

\begin{equation}
\begin{cases}
x' = \mqty(2 & 0 \\\ 0 & -3) \mqty(x\_1 \\\ x\_2) + \mqty(-x\_1x\_2 \\\ x\_1 x\_2)
\end{cases}
\end{equation}


### Near \\((0,0)\\) {#near--0-0}

You will note that the right non-linear parts becomes very small near \\((0,0)\\), meaning we can analyze this in terms of a normal phase portrait.


### Near \\((3,2)\\) {#near--3-2}

We can translate this down:

Let:

\begin{equation}
y = x - \mqty(3 \\\2)
\end{equation}

meaning:

\begin{equation}
y' = x' = F\qty(y+\mqty(3 \\\ 2))
\end{equation}

we can use a Taylor expansion to get:

\begin{equation}
y' = x' = F\qty(y + \mqty(3\\\2)) + \qty(\nabla F)y + \dots
\end{equation}

Recall that \\(F\\) is given as:

\begin{equation}
\mqty(2x\_1 - x\_1x\_2 \\\ x\_1x\_2-3x\_2)
\end{equation}

meaning:

\begin{equation}
\nabla \mqty(2x\_1 - x\_1x\_2 \\\ x\_1x\_2-3x\_2) = \mqty(2-x\_2 & -x\_1 \\\ x\_2 & x\_1-3)
\end{equation}

plugging in \\((3, 2)\\) obtains:

\begin{equation}
y' = \mqty(0 & -3 \\\ 2 & 0) y
\end{equation}

which we can analyze in the usual manners.
