+++
title = "Complex Exponential"
author = ["Houjun Liu"]
draft = false
+++

Recall that [Euler's Equation]({{< relref "KBheuler_s_equation.md" >}}) exists:

\begin{equation}
f(x) = e^{i k \omega x} = \cos (k\omega x) + i \sin(k\omega x)
\end{equation}

and, for \\(\omega = \frac{2\pi}{L}\\), this is **still** \\(L\\) periodic!

Next up, we make an important note:

\begin{equation}
e^{ik\omega x}, e^{-i k \omega x}
\end{equation}

is [linearly independent]({{< relref "KBhlinear_independence.md" >}}) over \\(x\\).


## [inner product]({{< relref "KBhinner_product.md" >}}) over complex-valued functions {#inner-product--kbhinner-product-dot-md--over-complex-valued-functions}

recall all of the [inner product]({{< relref "KBhinner_product.md" >}}) properties. Now, for functions periodic over \\([0,L]\\) (recall we have double this if the function is period over \\([-L, L]\\):

\begin{equation}
\langle f, g \rangle = \frac{1}{L} \int\_{0}^{L} f(x) \overline{g(x)} \dd{x}
\end{equation}

similar to all other [inner product]({{< relref "KBhinner_product.md" >}})s, \\(\langle f,f \rangle = 0\\) IFF \\(f = 0\\), and \\(\langle f,g \rangle = 0\\) implies that \\(f\\) and \\(g\\) are orthogonal.


## complex exponentials are orthonormal {#complex-exponentials-are-orthonormal}

For \\(L > 0\\), and \\(\omega = \frac{2\pi}{L}\\), consider:

\begin{equation}
\langle e^{ik\_{1} \omega x}, e^{ik\_{2} \omega x} \rangle
\end{equation}

Importantly, we have the property that:

-   \\(\langle e^{ik\_{1} \omega x}, e^{ik\_{2} \omega x} \rangle = 0\\) if \\(k\_1 \neq  k\_2\\)
-   \\(\langle e^{ik\_{1} \omega x}, e^{ik\_{2} \omega x} \rangle = 1\\) if \\(k\_1 = 1\\)
