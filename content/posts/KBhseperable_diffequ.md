+++
title = "seperable diffequ"
author = ["Houjun Liu"]
draft = false
+++

\begin{equation}
\dv{y}{t} = a(t)f(y)
\end{equation}

are a class of functions are called [seperable]({{< relref "KBhseperable_diffequ.md" >}}). We can solve them using the [division method](#division-method)


## division method {#division-method}

the [division method](#division-method) involves solving [autonomous ODEs]({{< relref "KBhautonomous_odes.md" >}}) by dividing and treating it normally:

\begin{equation}
y' = 8y
\end{equation}

\begin{equation}
\frac{y'}{8} = y
\end{equation}

we now write something fishy:

\begin{equation}
\frac{\dd{y}}{y} = 8 \dd{t}
\end{equation}

we now take the antiderivative of this:

\begin{equation}
\int \frac{1}{y} \dd{y} = \int  8 \dd{t}
\end{equation}

We will get that:

\begin{equation}
\ln |y| = 8t + C
\end{equation}

we finally get:

\begin{equation}
|y| = e^{C} e^{8t}
\end{equation}

getting rid of that absolute value:

\begin{align}
y &= \pm e^{C} e^{8t}  \\\\
&= K e^{8t}
\end{align}


### places where this breaks down {#places-where-this-breaks-down}

-   sometimes, \\(\frac{1}{f(y)}\\) may not have a nice antiderivative
-   sometimes, \\(G(y)\\), the antidepressant, may not be nicely invertible


### general solution to y'(t) = ry(t) {#general-solution-to-y--t--ry--t}

generally, for \\(r \in \mathbb{R}\\), the solution to \\(y'(t) = ry(t)\\) is at \\(y(t)=y\_0e^{rt}\\), where \\(y\_0 = y(0)\\).

---

for [autonomous ODEs]({{< relref "KBhautonomous_odes.md" >}}) for which \\(ry(t) = f(y)\\), we have that:

\begin{equation}
\dv{y}{x} = ry(x)
\end{equation}

which means:

\begin{equation}
\frac{1}{y(x)} \dd{y} = r\dd{x}
\end{equation}

and so:

\begin{equation}
\ln \qty| y(x) | = rx +C
\end{equation}

and hence:

\begin{equation}
y(x) = K e^{rx}
\end{equation}

plugging in \\(x=0\\), yields \\(y(0) = Ke^{0} = K\\).
