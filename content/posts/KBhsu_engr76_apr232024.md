+++
title = "SU-ENGR76 APR232024"
author = ["Houjun Liu"]
draft = false
+++

## [Fourier Series]({{< relref "KBhfourier_series.md" >}}) components form a basis {#fourier-series--kbhfourier-series-dot-md--components-form-a-basis}

Recall the definition of a [basis]({{< relref "KBhbasis.md" >}}), and in particular what an [orthonormal basis]({{< relref "KBhorthonormal_basis.md" >}}) is. In particular, recall that [writing a vector as a linear combination of orthonormal basis]({{< relref "KBhorthonormal_basis.md#writing-a-vector-as-a-linear-combination-of-orthonormal-basis" >}}) is a thing you can do very easily.


### Recall {#recall}

Importantly, the [Fourier Series]({{< relref "KBhfourier_series.md" >}}) is defined as:

\begin{equation}
f(x) = a\_0 + \sum\_{k=1}^{\infty} \qty( a\_{k} \cos(k \omega x) + b\_{k} \sin(k \omega x))
\end{equation}

where  \\(\omega = \frac{2\pi}{L}\\), and

\begin{equation}
a\_0 = \frac{\langle f, 1 \rangle}{ \langle 1,1 \rangle} = \frac{1}{L} \int\_{0}^{L} f(x) \dd{x}
\end{equation}

\begin{equation}
a\_{k} = \frac{\langle f, \cos (k\omega x) \rangle}{\langle \cos (k\omega x), \cos (k\omega x) \rangle} = \frac{2}{L} \int\_{0}^{L} f(x) \cos (k\omega x) \dd{x}
\end{equation}

\begin{equation}
b\_{k} = \frac{\langle f, \sin (k\omega x) \rangle}{\langle \sin (k\omega x), \sin (k\omega x) \rangle} = \frac{2}{L} \int\_{0}^{L} f(x) \sin (k\omega x) \dd{x}
\end{equation}


### Check: sinusoids forms an orthonormal basis {#check-sinusoids-forms-an-orthonormal-basis}

The functions:

\begin{align}
\sin \qty(\omega t), \cos \qty(\omega t), \sin \qty(\omega 2t), \cos \qty(\omega 2t), \dots
\end{align}

can be viewed as forming an orthonormal basis by defining an inner product of two \\(L\\) periodic functions as:

\begin{align}
\langle g,h \rangle = \frac{2}{L} \int\_{0}^{L} g(x)h(x) \dd{x}
\end{align}

this makes our basis above [orthonormal]({{< relref "KBhorthonormal.md" >}}).

Verifying that:

\begin{align}
\langle \sin \qty(2\pi k\_{i} \omega t), \sin \qty(k\_{j} \omega t) \rangle &= \frac{2}{L} \int\_{0}^{L} \sin \qty(\omega k\_{i} t) \sin \qty(\omega k\_{j} t) \dd{t}  \\\\
&= \frac{2}{L} \int\_{0}^{L} \frac{1}{2} \qty(\cos \qty(\omega t \qty(k\_{i}-k\_{j})) - \cos \qty(\omega t \qty(k\_{i}+k\_{j}))) \dd{t}
\end{align}

if \\(k\_{i} \neq k\_{j}\\), then we will be integrating an at-least \\(L\\) periodic (i.e. because \\(\omega = \frac{2\pi}{L}\\)) function in each term of the integral above by \\(L\\)  periods. This makes both terms \\(0\\).

if \\(k\_{i} = k\_{j}\\), then the first term would be \\(\cos \qty(0) = 1\\), and the second term would still be \\(0\\). This gives (after normalizing), \\(1\\).

This means that the sinusoids form an orthonormal basis. By substituting in the relevant double-angle formulas, we can obtain a similar results that checks for the orthonormality of this system. Key insight is that if \\(g = \sin\qty(\dots), h= \cos \qty(\dots)\\), the angle product formulas would give a difference in \\(\sin\\), whereby \\(\sin(0) = 0\\), so the whole thing evaluates to \\(0\\).


### Observation {#observation}

and because we have checked this function as being orthonormal, and we take by faith that the [Fourier Series]({{< relref "KBhfourier_series.md" >}}) spans, then we can figure our coefficients as needed. This essentially allow us to compute each of the coefficients.


### Overall cosine series collapses for odd/even functions {#overall-cosine-series-collapses-for-odd-even-functions}

this can be attributed to the fact that, say you had an even function that you are trying to take the cosine series of, we'll get intergrals of the shape:

\begin{equation}
\int y(t) \sin \qty(k\omega t) \dd{t}
\end{equation}

which is a multiplication of an even function to an odd function---making an **odd function** (\\(g(-x) \* f(-x) = -g(x) \* f(x) = -(g(x) \* f(x)\\)). The integral of this, then would give \\(0\\).
