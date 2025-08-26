+++
title = "convolution"
author = ["Houjun Liu"]
draft = false
+++

For \\(f,g : \mathbb{R} \to \mathbb{C}\\), we have:

\begin{equation}
(f \* g)(x) = \int\_{\mathbb{R}} f(x-y) g(y) \dd{y} = \int\_{\mathbb{R}} f(y) g(x-y) \dd{y}
\end{equation}


## properties of convolution {#properties-of-convolution}

-   \\((g \* f) (x) = (f \* g) (x)\\)
-   \\(\mathcal{F}(f \* g) = \mathcal{F}(f)\mathcal{F}(g)\\)
-   \\(\mathcal{F}^{-1}(\hat{f} \hat{g}) = f \* g\\)
-   \\((f \* g)' = f \* g' = f' \* g\\)
-   \\(\lambda ( f \* g ) = (\lambda f) \* g = f \* (\lambda g)\\)

=&gt; "in a convolution, if **ANY ONE** of the two functions are [Differentiable]({{< relref "KBhuniqueness_and_existance.md#differentiable" >}}), both are [Differentiable]({{< relref "KBhuniqueness_and_existance.md#differentiable" >}})."; think about smoothing a jagged function using a [Gaussian]({{< relref "KBhgaussian.md" >}}).


## examples {#examples}


### rolling average {#rolling-average}

\begin{align}
U\_{L}(x) = \begin{cases}
L, |x| \leq \frac{1}{2L} \\\\
0, |x| > \frac{1}{2L}
\end{cases}
\end{align}

The width of the area for which the expression is positive is \\(2L\\), and the height is \\(L\\), so the area (integral) is \\(1\\).

So now let's consider:

\begin{equation}
(f \* U\_{L})(x)
\end{equation}

which is:

\begin{equation}
\int\_{\mathbb{R}} f(x-y) U\_{L}(y) \dd{y}
\end{equation}

meaning:

\begin{equation}
L \int\_{-\frac{1}{2}L}^{\frac{1}{2}L} f(x-y) \dd{y}
\end{equation}

You will note that we are sweeping something of window width \\(\frac{1}{L}\\) over the function, which averages the function \\(f\\) over the window \\(L\\).

So convolving with this function essentially smoothes function over a window \\(\frac{1}{L}\\); as \\(L\\) decreases, we are averaging over a greater interval; vise versa.


### signal compression {#signal-compression}

Write your signal in terms of its Fourier transform:

\begin{equation}
f(t) = \frac{1}{2\pi} \int\_{-\infty}^{\infty} e^{it\lambda} \hat{f}(\lambda) \dd{\lambda}
\end{equation}

We can write:

\begin{equation}
\hat{f}(\lambda) \cdot 1\_{J}(\lambda)
\end{equation}

whose inverse Fourier transform would be:

\begin{equation}
f(x) \* \mathcal{F}\qty(1\_{J}(\lambda))
\end{equation}


## motivation {#motivation}

What if we want the [Fourier Transform]({{< relref "KBhfourier_transform.md" >}}) of \\(\hat{f}(\lambda)\hat{g}(\lambda)\\) in terms of one expression?

Consider:

\begin{equation}
\hat{f}(\lambda) \hat{g}(\lambda) = \qty(\int\_{\mathbb{R}} f(x) e^{-i\lambda x} \dd{x}) \qty(\int\_{\mathbb{R}} g(y) e^{-i\lambda y} \dd{y})
\end{equation}

Notice that because neither integral have dependence on the other, we can actually:

\begin{equation}
\hat{f}(\lambda) \hat{g}(\lambda) = \int\_{\mathbb{R}} \int\_{\mathbb{R}} f(x) g(y) e^{-i\lambda (x+y)} \dd{x}\dd{y}
\end{equation}

writing this as a change of variable:

\begin{equation}
\begin{cases}
u = x+y \\\\
x = u-y \\\\
\dd{x} = \dd{u}
\end{cases}
\end{equation}

we can write:

\begin{equation}
\hat{f}(\lambda) \hat{g}(\lambda) = \int\_{\mathbb{R}} \qty(\int\_{\mathbb{R}} f(u-y) g(y) e^{-i\lambda (u)} \dd{u})\dd{y}
\end{equation}

Considering they the integrands are isolated and decaying, we can swap them, pulling out also \\(e^{-i\lambda(u)}\\) because it has no \\(y\\) dependence:

\begin{equation}
\hat{f}(\lambda) \hat{g}(\lambda) = \int\_{\mathbb{R}} \qty(\int\_{\mathbb{R}} f(u-y) g(y) \dd{y})e^{-i\lambda (u)} \dd{u}
\end{equation}

Notice! The inner part is a function, and the outer part is a Fourier transform! This is similar to a [convolution (probability)]({{< relref "KBhrandom_variables.md#adding-random-variables" >}})!

Meaning:

\begin{equation}
\hat{f}(\lambda) \hat{g}(\lambda) = \mathcal{F}(f \* g) = \mathcal{F}(f) \mathcal{F}(g)
\end{equation}

Operating on the inverse, we can obtain a similar result:

\begin{equation}
\mathcal{F}^{-1}(\hat{f} \hat{g}) = f \* g
\end{equation}
