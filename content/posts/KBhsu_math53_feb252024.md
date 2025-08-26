+++
title = "SU-MATH53 FEB252024"
author = ["Houjun Liu"]
draft = false
+++

## Fourier Decomposition {#fourier-decomposition}

Main idea, any induction \\(f(x)\\) on an interval \\([0, L]\\) can be written as a sum:

\begin{equation}
f(x) = a\_0 + \sum\_{k=1}^{\infty} a\_{k} \cos \qty( \frac{2\pi k}{L} x) + \sum\_{k=1}^{\infty} b\_{k} \sin \qty( \frac{2\pi k}{L} x)
\end{equation}


## L-periodicity {#l-periodicity}

A function is $L$-periodic if \\(f(x+L) = f(x)\\) for nonzero \\(L\\) for all \\(x\\). The **smallest** \\(L > 0\\)  which satisfies this property is called the [period](#l-periodicity) of the function.

$L$-periodicity is preserved across...


### translation {#translation}

we are just moving it to the right/left


### dilation {#dilation}

Suppose \\(f(x)\\) is \\(L\\) periodic and let \\(g(x) = f(kx)\\), then, \\(g\\) is also \\(L\\) periodic.

Proof:

\\(g(x+L) = f(k(x+L)) = f(kx + kL) = f(kx) = g(x)\\). So \\(g\\) would also be \\(L\\) periodic. However, importantly, \\(g\\) would also be \\(\frac{L}{k}\\) periodic (verified by using the same sketch as before)


### linear combinations {#linear-combinations}

Suppose \\(f,g\\) are \\(L\\) periodic and \\(h(x) = af(x) + bg(x)\\), then \\(h\\) is also \\(L\\) periodic.

Proof:

\begin{equation}
h(x+L) = af(x+L) + bg(x+L) = af(x) + bg(x) = h(x)
\end{equation}


## [Fourier Series]({{< relref "KBhfourier_series.md" >}}) {#fourier-series--kbhfourier-series-dot-md}

see [Fourier Series]({{< relref "KBhfourier_series.md" >}})
