+++
title = "SU-MATH53 FEB232024"
author = ["Houjun Liu"]
draft = false
+++

## Boundary Value Problem {#boundary-value-problem}

A [BVP](#boundary-value-problem) for an [ODE]({{< relref "KBhordinary_differential_equations.md" >}}) is defined at two different points \\(x\_0\\) and \\(x\_1\\) at two different values of \\(l\\), whereby we are given:

\begin{equation}
X\_0 = a, X(L) = b
\end{equation}

which we use to further specify a [PDE]({{< relref "KBhpartial_differential_equations.md" >}}). [BVP](#boundary-value-problem)s can either have **no** or **lots** of solutions.

To aid in the discovery of solutions, for:

\begin{equation}
X'' = \lambda X
\end{equation}

we have:

\begin{equation}
X = \begin{cases}
c\_1 e^{\sqrt{\lambda}x} + c\_2 e^{-\sqrt{\lambda}x}, \lambda > 0 \\\\
c\_1 x + c\_2, \lambda =0 \\\\
c\_1 \cos \qty(\sqrt{|\lambda|}x) +c\_2  \sin \qty(\sqrt{|\lambda|}x), \lambda < 0
\end{cases}
\end{equation}

Which specific solution arises out of which initial condition you use.


### Dirichlet Conditions {#dirichlet-conditions}

Initial conditions:

\begin{equation}
\begin{cases}
u(t,0) = 0  \\\\
u(t, l) = 0
\end{cases}
\end{equation}

This tells us that we are holding the ends of the rod at a constant temperature.


#### Solutions {#solutions}

For:

\begin{equation}
X'' = \lambda X
\end{equation}

in the vanishing Case (\\(X(0) = 0 = X(L)\\)):

\begin{equation}
X = c \sin \qty( \frac{k \pi x}{L})
\end{equation}

where \\(c \neq 0\\), and the solutions quantized \\(k = 1, 2, 3, \ldots\\).

which gives rise to:

\begin{equation}
\lambda = \frac{-n^{2}\pi^{2}}{L^{2}}
\end{equation}


### Neumann Conditions {#neumann-conditions}

\begin{equation}
\begin{cases}
\pdv{u}{x}(t,0) = 0  \\\\
\pdv{u}{x}(t, l) = 0
\end{cases}
\end{equation}

this tells us there is no heat [flux]({{< relref "KBhflux.md" >}}) across the boundary (i.e. heat doesn't escape).


#### Solutions {#solutions}

For:

\begin{equation}
X'' = \lambda X
\end{equation}

in the vanishing Case (\\(X'(0) = 0 = X'(L)\\)):

\begin{equation}
X = c \cos \qty( \frac{k \pi x}{L})
\end{equation}

where \\(c \neq 0\\), and the solutions quantized \\(k = 1, 2, 3, \ldots\\).

which gives rise to:

\begin{equation}
\lambda = \frac{-n^{2}\pi^{2}}{L^{2}}
\end{equation}


## Examples {#examples}

See [Heat Equation]({{< relref "KBhheat_equation.md" >}}), and its [worked solution]({{< relref "KBhheat_equation.md#solution-in-full" >}}).
