+++
title = "Complex ODE System"
author = ["Houjun Liu"]
draft = false
+++

\begin{equation}
\begin{cases}
x\_1' = 5x\_1 - 5x\_2 \\\\
x\_2' = 2x\_1 -x\_2
\end{cases}
\end{equation}

This gives rise to:

\begin{equation}
A = \mqty(5 & -5 \\\ 2 &-1)
\end{equation}

Solving the [characteristic polynomial]({{< relref "KBhcharacteristic_polynomial.md" >}}) gives:

\begin{equation}
(5-\lambda)(-1-\lambda) + 10 = \lambda^{2} - 4\lambda +5
\end{equation}

Therefore, our solutions are **imaginary!**

\begin{equation}
\lambda\_{1}, \lambda\_{2} = 2 \pm i
\end{equation}

---

Aside: we only need to deal with one

Notably, anything that satisfies the original polynomial, its conjugates also satisfies:

\begin{equation}
\bar{\lambda^{2}-4\lambda +5} = 0= {\bar{\lambda}}^{2} - 4\bar{\lambda} + 5
\end{equation}

Further, for some:

\begin{equation}
Av = \lambda v
\end{equation}

we have:

\begin{equation}
A \bar{v} = \lambda \bar{v}
\end{equation}

meaning if we just figured the eigenvector of one of the lambdas we are good

---

Now, let us consider the case before with \\(\lambda = 2 +i\\). We therefore have:

\begin{equation}
\mqty(3-i & -5 \\\ 2 & -3-i) \mqty(a \\\ b) = \mqty(0 \\\ 0)
\end{equation}

This gives one particular null space, such as:

\begin{equation}
v = \mqty(5 \\\ 3-i)
\end{equation}

This gives rise to:

\begin{equation}
u' = (2+i)u
\end{equation}

which means:

\begin{equation}
u(t) = ce^{(2+i)t}
\end{equation}

finally, resulting in:

\begin{equation}
x(t) = ce^{(2+i)t} \mqty(5 \\\ 3-i)
\end{equation}

which is a particular solution. Now, the general solution would tack on a complex conjugate, which doesn't actually add any new information.

Instead, we can actually use Euler to break this into two, independent, and equally valid solutions:

\begin{equation}
x(t) = e^{2t} \qty(\cos t + i \sin t) \qty( \mqty(5 \\\3) - i \mqty(0 \\\ 1))
\end{equation}

finally, we obtain:

\begin{equation}
x(t) = e^{2t} \qty( \cos t \mqty(5 \\\ 1) + \sin t \mqty(0 \\\1)) + i e^{2t} \qty( \sin t \mqty(5 \\\ 1) - \cos t \mqty(0 \\\1))
\end{equation}

each of which individual is a solution:

\begin{equation}
x\_1(t) =e^{2t} \qty( \cos t \mqty(5 \\\ 1) + \sin t \mqty(0 \\\1))
\end{equation}

and:

\begin{equation}
x\_2(t) = e^{2t} \qty( \sin t \mqty(5 \\\ 1) - \cos t \mqty(0 \\\1))
\end{equation}
