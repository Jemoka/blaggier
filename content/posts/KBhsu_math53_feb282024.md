+++
title = "SU-MATH53 FEB282024"
author = ["Houjun Liu"]
draft = false
+++

more on [Fourier Series]({{< relref "KBhfourier_series.md" >}}).

---


## decomposition of functions to even and odd {#decomposition-of-functions-to-even-and-odd}

Suppose we have any function with period \\(L\\) over \\([-\frac{L}{2}, \frac{L}{2}]\\), we can write this as a sum of even and odd functions:

\begin{equation}
f(x) = \frac{1}{2} (f(x) - f(-x)) + \frac{1}{2} (f(x) + f(-x))
\end{equation}

And because of this fact, we can actually take each part and break it down individually as a [Fourier Series]({{< relref "KBhfourier_series.md" >}}) because [sin and cos are even and odd parts]({{< relref "KBhfourier_series.md#sin-and-cos-are-even-and-odd-parts" >}}).

So we can take the first part, which is odd, and break it down using \\(a\_{n} \sin (k\omega x)\\).

We can take the second part, which is odd, and break it down using \\(b\_{n} \cos (k\omega x)\\).

If you then assume periodicity over the interval you care about \\(L\\), suddenly you can decompose it to a [Fourier Series]({{< relref "KBhfourier_series.md" >}}).
