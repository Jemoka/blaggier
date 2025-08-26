+++
title = "Non-Linear ODE"
author = ["Houjun Liu"]
draft = false
+++

Suppose we analyze first order non-linear system:

\begin{equation}
x' = F(t,x)
\end{equation}

We can actually turn this into an autonomous system:

\begin{equation}
x\_0 = t
\end{equation}

\begin{equation}
x\_0' = 1
\end{equation}

meaning suddenly we have an autonomous system:

\begin{equation}
\begin{cases}
x\_0' = 1 \\\\
x\_1' = F(x\_0, x\_1)
\end{cases}
\end{equation}

General strategy:

1.  Find zeros of the right side (which are the stationary solutions)
2.  Analyze near-stationary solutions through eigenvalues of the linearized Jacobian matrix: if both eigenvalues are zero
3.  Away from stationary solutions: basically guessing


## Three Examples that are Hopeless to Solve {#three-examples-that-are-hopeless-to-solve}


### Lotha-Volterra Prey-Predictor Equation {#lotha-volterra-prey-predictor-equation}

\begin{equation}
\begin{cases}
x\_1' = 2x\_1-x\_1x\_2 \\\\
x\_2' = x\_1x\_2 - 3x\_2
\end{cases}
\end{equation}

By default, if either \\(x\_1\\) or \\(x\_2\\) goes down, the system dies quickly.


### Example {#example}

\begin{equation}
\begin{cases}
x\_1' = r\_1x\_1 \qty(1- \frac{x\_1 + h\_{12} x\_2}{k\_1})\\\\
x\_2' = r\_2x\_2 \qty(1- \frac{x\_2 + h\_{21} x\_1}{k\_2})
\end{cases}
\end{equation}


### Example {#example}

\begin{equation}
\begin{cases}
x\_1' = x\_2 \\\\
x\_2' = -\sin x\_1 - \gamma x\_2
\end{cases}
\end{equation}


## Strategy to Analyze when its Hopeless {#strategy-to-analyze-when-its-hopeless}

1.  find a stationary solutions: \\(x(t) = a\\): where \\(x' = F(a) = 0\\) and draw them as points on the \\(x\_1\\) and \\(x\_2\\) plane
2.  near each equilibrium point, approximate through [Linearilzation]({{< relref "KBhode_linearilzation.md" >}})
3.  study the [mesoscopic region]({{< relref "KBhmesoscopic_region.md" >}})

So, see [ODE linearilzation]({{< relref "KBhode_linearilzation.md" >}}).


## Phase Portrait {#phase-portrait}

[Phase Portrait](#phase-portrait) is a figure in the \\(x\_1, x\_2\\) plane where each solution exists as a curve on the figure.


## monotone function {#monotone-function}

for [linearilzation]({{< relref "KBhode_linearilzation.md" >}}) systems that are marginal (zero, negative real parts, one or more fully imaginary), we can't use [linearilzation]({{< relref "KBhode_linearilzation.md" >}}) itself to analyze the system.

Therefore, we have to use a function for which \\(\dv t V(y(t)) \geq 0\\) or \\(\dv V(y(t)) \leq 0\\) for all \\(t\\) called a [monotone function](#monotone-function), which could give us hints about the function's behavior.

Meaning:

\begin{align}
\dv t V(y(T) &= \nabla V(y(t)) \cdot y'(t)  \\\\
&= \nabla V(y(t)) \cdot F(y(t))
\end{align}

The gradient of \\(V\\) is always perpendicular to the level curve of \\(V\\), and---when dotted with \\(F\\) the vector field of $y$---we obtain a value that's either positive or negative. When positive, the angle between the vector field \\(F\\) and \\(V\\) would be less than \\(\frac{\pi}{2}\\), meaning the vector field point "outwards" from the level sets. Otherwise, it would be more than \\(\frac{\pi}{2}\\), meaning the vector field point "inwards".


## conserved function {#conserved-function}

its like a [monotone function](#monotone-function), but \\(\dv{V}{t} = 0\\). any solution curve would **lie inside** a level curve of \\(V\\) (parts of the level curve). Its basically the intuition of a [monotone function](#monotone-function), but the solution curves instead of pointing inwards and outwards, it just get stuck.
