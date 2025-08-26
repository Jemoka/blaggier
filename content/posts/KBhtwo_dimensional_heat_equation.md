+++
title = "two-dimensional heat equation"
author = ["Houjun Liu"]
draft = false
+++

what if heat, but plate

\begin{equation}
\pdv{u}{t} =  \pdv[2]{u}{x} + \pdv[2]{u}{y}
\end{equation}

For some heat distribution that has arbitrary shape, on some domain \\(\Omega \times [0, \infty]\_{t}\\) (i.e. argumentation of some space dimensions by time).

-   [Dirichlet Conditions]({{< relref "KBhsu_math53_feb232024.md#dirichlet-conditions" >}}): edges have heat \\(0\\)
-   OR [Neumann Conditions]({{< relref "KBhsu_math53_feb232024.md#neumann-conditions" >}}): normal derivative (flux) is \\(0\\) at the edge

If \\(\Omega\\) is a general blob, you are actually kinda fucked. Because the bounds on \\(x\\) depend on \\(y\\), and \\(y\\) on \\(x\\), so you can't just separate them into a product.

However, if we cut a rectangle, life is better.

---

{{< figure src="/ox-hugo/2024-02-28_22-57-25_screenshot.png" >}}

where:

\begin{equation}
0 \leq x \leq l\_1
\end{equation}

\begin{equation}
0 \leq y \leq l\_2
\end{equation}

where the Dirichlet condition is now described as the four line segments along the curve at \\(l\_1\\) and \\(l\_2\\) having constant (or vanishing) temperature.

Its general solution is:

\begin{equation}
u(t,x,y) = \sum\_{n\_1=1}^{\infty}\sum\_{n\_2=1}^{\infty} A\_{n\_1, n\_2} e^{-\qty(\qty( \frac{{n\_{1}}^{2}}{{l\_{1}}^{2}}) + ( \frac{{n\_{2}}^{2}}{{l\_{2}}^{2}})) \pi^{2}t} \sin \qty(\qty(n\_1 \frac{\pi}{l\_{1}})x )\sin \qty(\qty(n\_2 \frac{\pi}{l\_{2}})y )
\end{equation}

where:

\begin{equation}
\lambda = \lambda\_{1} + \lambda\_{2} = - \qty( \frac{{n\_{1}}^{2}}{{l\_1}^{2}} + \frac{{n\_{2}}^{2}}{{l\_2}^{2}}) \pi^{2}
\end{equation}


## solving {#solving}

\begin{equation}
U(t,x,y) = A(t)B(x)C(y)
\end{equation}

So now with much prayer and plugging:

\begin{equation}
A'(t) B(x) C(y) = A(t) B''(X)C(y) + A(t)B(x)C''(y)
\end{equation}

which gives:

\begin{equation}
\frac{A'(t)}{A(t)} = \frac{B''(x)}{B(x)} + \frac{C''(y)}{C(y)} = \lambda
\end{equation}

Which causes two problems to arise:

\begin{equation}
\begin{cases}
A'(t) = \lambda A(t) = 0 \\\\
\frac{B''(x)}{B(x)} + \frac{C''(y)}{C(y)} = \lambda
\end{cases}
\end{equation}

the second expression gives:

\begin{equation}
\frac{B''(X)}{B(X)} = \lambda - \frac{C''(y)}{C(y)}
\end{equation}

Meaning:

\begin{equation}
\frac{B''(X)}{B(X)} = \lambda - \frac{C''(y)}{C(y)} = \lambda\_{1}
\end{equation}

Meaning:

\begin{equation}
B''(x) - \lambda\_{1} B(x) = 0
\end{equation}

and:

\begin{equation}
C''(y) - \lambda\_{2} C = 0
\end{equation}

where \\(\lambda - \lambda\_{1} = \lambda\_{2}\\).

Now, recall our boundary conditions:

\begin{equation}
B(0) = B(l\_1) = 0
\end{equation}

and

\begin{equation}
C(0) = C(\lambda\_{2}) = 0
\end{equation}

So, for the expression in \\(B\\), we obtain:

\begin{equation}
\lambda\_{1} = \frac{-k\_{1}^{2}\pi^{2}}{l\_{1}^{2}}}
\end{equation}

\begin{equation}
\lambda\_{2} = \frac{-k\_{2}^{2}\pi^{2}}{l\_{2}^{2}}}
\end{equation}

so:

\begin{equation}
\lambda = \lambda\_{1} + \lambda\_{2}
\end{equation}

All together, we obtain:

\begin{equation}
B(x) = \sin  \qty( \frac{k\_{1} \pi x}{l\_{1}})
\end{equation}

and:

\begin{equation}
C(y) = \sin  \qty( \frac{k\_{2} \pi y}{l\_{2}})
\end{equation}

finally, where:

\begin{equation}
A' + \qty( \frac{k\_{1}^{2}  \pi^{2}}{ l\_1^{2}} + \frac{k\_{2}^{2}  \pi^{2}}{ l\_2^{2}})A = 0
\end{equation}

which gives us:

\begin{equation}
A(t) = e^{-\qty( \frac{k\_{1}^{2}  \pi^{2}}{ l\_1^{2}} + \frac{k\_{2}^{2}  \pi^{2}}{ l\_2^{2}})t}
\end{equation}

so then multiply them together:

\begin{equation}
\sum\_{k\_1}^{} \sum\_{k\_2}^{}E\_{k\_1, k\_2}  e^{-\qty( \frac{k\_{1}^{2}  \pi^{2}}{ l\_1^{2}} + \frac{k\_{2}^{2}  \pi^{2}}{ l\_2^{2}})t}  \sin  \qty( \frac{k\_{2} \pi y}{l\_{2}}) \sin  \qty( \frac{k\_{1} \pi x}{l\_{1}})
\end{equation}

at \\(u(0,x,y)\\), we obtain:

\begin{equation}
u(0,x,y) = \sum\_{k\_1}^{} \sum\_{k\_2}^{}E\_{k\_1, k\_2}   \sin  \qty( \frac{k\_{2} \pi y}{l\_{2}}) \sin  \qty( \frac{k\_{1} \pi x}{l\_{1}})
\end{equation}

for every \\(f(x,y)\\), we can solve for \\(E\_{k\_1, k\_2}\\) by fixing \\(y\\), for instance, then writing a Fourier series as a function that depends on the coefficients you left out. This gives:

\begin{equation}
f(x,y) = \sum a\_{k\_1}(y) \sin  \qty( \frac{k\_1 \pi x}{l\_1})
\end{equation}

and then, each of **THESE** internal functions a function \\(a\_{k\_1}(y)\\) , which you can obtain over \\(y\\) and expand as a fourier series.

To solve for each, you do the susual:

\begin{equation}
a\_{k\_1}(y) = \frac{2}{l\_1} \int\_{0}^{l\_1} f(x,y) \sin \qty( \frac{k\_1 \pi x}{l\_1}) \dd{x}
\end{equation}

which you can expand:

\begin{equation}
E\_{k\_1, k\_2} = \frac{2}{l\_2} \int\_{0}^{l\_2} a\_{k\_1}(y) \sin  \qty( \frac{k\_1 \pi y}{l\_2}) \dd{y}
\end{equation}

which means that, substituting it in, the whole thing can be written together as:

\begin{equation}
E\_{k\_1, k\_2} = \frac{2}{l\_2} \int\_{0}^{l\_2} \frac{2}{l\_1} \int\_{0}^{l\_1} f(x,y) \sin \qty( \frac{k\_1 \pi x}{l\_1}) \dd{x} \sin  \qty( \frac{k\_1 \pi y}{l\_2}) \dd{y}
\end{equation}
