+++
title = "Fourier Series"
author = ["Houjun Liu"]
draft = false
+++

[Fourier Series]({{< relref "KBhfourier_series.md" >}}) and how to find them.

For a function given at some interval of length \\(l\\), then the function can be written at:

\begin{equation}
f(x) = \sum\_{k=1}^{\infty} a\_{k} \sin \qty( \frac{k\pi x}{l})
\end{equation}

or

\begin{equation}
f(x) = \sum\_{k=1}^{\infty} b\_{k} \cos \qty( \frac{k\pi x}{l})
\end{equation}

Recall that because [sin and cos are even and odd parts](#sin-and-cos-are-even-and-odd-parts), the functions above force an even and oddness to your expansions. They will be particularly helpful for [Dirichlet Conditions]({{< relref "KBhsu_math53_feb232024.md#dirichlet-conditions" >}}) and [Neumann Conditions]({{< relref "KBhsu_math53_feb232024.md#neumann-conditions" >}}).

But, in general, you can use a linear combination of the two by doubling the frequency over your interval \\(l\\):

\begin{equation}
f(x) = a\_0 + \sum\_{k=1}^{\infty} \qty( a\_{k} \cos(k \omega x) + b\_{k} \sin(k \omega x))
\end{equation}

where  \\(\omega = \frac{2\pi}{L}\\).


## Statement {#statement}

Suppose we have a function that satisfies:

Recall that each \\(\cos(\dots)\\)  and \\(\sin (...)\\) are [orthogonal]({{< relref "KBhorthogonal.md" >}}), we can then use the [Fourier formula]({{< relref "KBhlearn_more.md" >}}) to figure the coefficients \\(a\_{k}\\), \\(b\_{k}\\).

---

Aside: why is \\(a\_0\\) also orthogonal?

\begin{equation}
a\_0 = a\_0 \cos (0 \omega x) = a\_0 \cdot 1  = a\_0
\end{equation}


### General Fourier Decomposition {#general-fourier-decomposition}

Therefore, by the [Fourier formula]({{< relref "KBhlearn_more.md" >}}), we expect that:

\begin{equation}
a\_0 = \frac{\langle f, 1 \rangle}{ \langle 1,1 \rangle} = \frac{1}{L} \int\_{0}^{L} f(x) \dd{x}
\end{equation}

\begin{equation}
a\_{k} = \frac{\langle f, \cos (k\omega x) \rangle}{\langle \cos (k\omega x), \cos (k\omega x) \rangle} = \frac{2}{L} \int\_{0}^{L} f(x) \cos (k\omega x) \dd{x}
\end{equation}

\begin{equation}
b\_{k} = \frac{\langle f, \sin (k\omega x) \rangle}{\langle \sin (k\omega x), \sin (k\omega x) \rangle} = \frac{2}{L} \int\_{0}^{L} f(x) \sin (k\omega x) \dd{x}
\end{equation}

When computing this, recall that:

\begin{equation}
\omega = \frac{2\pi}{L}
\end{equation}

where \\(L\\) the period of your \\(L\\) periodic function.


### Odd and Even Break {#odd-and-even-break}

If you have an even or odd \\(f(x)\\), we can refine the series even more into simply a sine or cosine only series.

For even \\(f(x)\\), we can write:

\begin{equation}
a\_{0} + \sum\_{k=1}^{\infty} a\_{k} \cos (k\omega x)
\end{equation}

where:

\begin{equation}
a\_0 = \frac{1}{L / 2} \int\_{0}^{\frac{L}{2}} f(x) \dd{x}
\end{equation}

\begin{equation}
a\_{k} = \frac{2}{L / 2} \int\_{0}^{\frac{L}{2}} f(x) \cos (k \omega x) \dd{x}
\end{equation}

Whereas for odd \\(f(x)\\), we write:

\begin{equation}
\sum\_{k=1}^{\infty} b\_{k} \sin (k\omega x)
\end{equation}

\begin{equation}
b\_{k} = \frac{2}{L / 2} \int\_{0}^{L / 2} f(x) \sin (k\omega x) \dd{x}
\end{equation}


### over any function {#over-any-function}

Suppose we have a function with two roots:

\begin{equation}
f(0) = 0 = f(l)
\end{equation}

then, we can write it in terms of a [Fourier Series]({{< relref "KBhfourier_series.md" >}}) by odd-extending the function to the negative direction (see "odd extensions below").

This makes us be able to write \\(f\\) over \\([0,l]\\) as:

\begin{equation}
f(x) = \sum\_{n=1}^{\infty} b\_{n} \sin \qty( \frac{n\pi}{l} x)
\end{equation}

where:

\begin{equation}
b\_{n} = \frac{2}{l} \int\_{0}^{l} f(x) \sin \qty( \frac{n \pi}{l} x) \dd{x}
\end{equation}

this is just the \\(l\\) extension function above, but with small \\(l\\) as the function is odd to one side.

Here's the motivation:


#### sin and cos are even and odd parts {#sin-and-cos-are-even-and-odd-parts}

<!--list-separator-->

-  odd extensions

    Important note: this function seems to vanish at endpoints \\(0\\) and \\(l\\), and not all functions do that.

    So, instead, let's consider the odd extension of \\(f\\):

    \begin{equation}
    \hat{f}(x) = f(x), x \geq 0
    \end{equation}

    and

    \begin{equation}
    \hat{f}(x) = -f(-x), x < 0
    \end{equation}

    There will therefore be a discontinuous jump at \\(0\\).

    Using the \\(\sin\\) function, which are odd, recall that [Fourier Series Converges with \\(L\\) Periodic Function](#fourier-series-converges-with-l-periodic-function), so at \\(0\\) given [Gibbs Phenomena](#fourier-series-converges-with-l-periodic-function), the jump will average the discontinouity down to \\(0\\) (given our extensions are odd).

<!--list-separator-->

-  even extensions

    instead, if you want to use \\(\cos\\), you can make an even extension:

    \begin{equation}
    \hat{f}(x) = f(x), x \geq 0
    \end{equation}

    and

    \begin{equation}
    \hat{f}(x) = f(-x), x < 0
    \end{equation}

    which shouldn't be discontinuous at \\(0\\) at all.


## Additional Informatino {#additional-informatino}


### Fourier Series Converges with \\(L\\) Periodic Function {#fourier-series-converges-with-l-periodic-function}

Suppose \\(f(x)\\) is an \\(L\\) periodic function with at most jump discountinuty, and \\(f'\\) continuous everywhere. Then, the associated [Fourier Series]({{< relref "KBhfourier_series.md" >}}) converges everywhere and coincides with \\(f\\) except for jump discontinuances, where the values are the average of limits from either side. This is called the [Gibbs Phenomena](#fourier-series-converges-with-l-periodic-function)


### shifted sum of sinusoids {#shifted-sum-of-sinusoids}

see [Fourier Series as exactly a shifted sum of sinusoids]({{< relref "KBhsu_engr76_apr182024.md#fourier-series--kbhfourier-series-dot-md--as-exactly-a-shifted-sum-of-sinusoids" >}})


## Background {#background}


### [Fourier formula]({{< relref "KBhlearn_more.md" >}}) {#fourier-formula--kbhlearn-more-dot-md}

Consider some [orthogonal]({{< relref "KBhorthogonal.md" >}}) basis \\(v\_1, ... v\_{n}\\), recall that if we have:

\begin{equation}
v = c\_1 v\_1 + \dots + c\_{n} v\_{n}
\end{equation}

we can write:

\begin{equation}
c\_{j} = \frac{v \cdot v\_{j}}{ v\_{j} \cdot v\_{j}}
\end{equation}

(this is similar to [Writing a vector as a linear combination of orthonormal basis]({{< relref "KBhorthonormal_basis.md#writing-a-vector-as-a-linear-combination-of-orthonormal-basis" >}}), but recall the \\(v\_{j}\\) are **orthogonal** and not **orthonormal**, so we have to divide by the square of the norm of \\(v\\). [learn more]({{< relref "KBhlearn_more.md" >}}))


### [inner product of \\(L\\) periodic functions]({{< relref "KBhinner_product.md#inner-product-of-l-periodic-functions" >}}) {#inner-product-of-l-periodic-functions--kbhinner-product-dot-md}

For \\(f,g : [0,L] \to \mathbb{R}\\), which are [L-periodic]({{< relref "KBhsu_math53_feb252024.md#l-periodicity" >}}), we write:

\begin{equation}
\langle f,g \rangle := \frac{1}{L} \int\_{0}^{L} f(x) g(x) \dd{x}
\end{equation}


#### properties worth noting {#properties-worth-noting}

for continuous functions \\([0,L]\\) \\(g\_1, g\_2, h\_1, h\_2, g, h\\), the [inner product]({{< relref "KBhinner_product.md" >}}) rules hold, which gives

-   \\(\langle c\_1 g\_1 + c\_2 g\_2, h \rangle = c\_1 \langle g\_1, h \rangle + c\_2 \langle g\_2, h \rangle\\)
-   \\(\langle g, c\_1h\_1 + c\_2h\_2 \rangle = c\_1 \langle g, h\_1 \rangle + c\_2 \langle g, h\_2 \rangle\\)
-   \\(\langle h,g \rangle = \langle g,h \rangle\\), as the functions are over the reals
-   \\(\langle g,g \rangle\\) is zero only when \\(g\\) is zero


#### \\(L\\) periodic sinusoids are orthogonal {#l-periodic-sinusoids-are-orthogonal}

Recall that we have two basic [L-periodic]({{< relref "KBhsu_math53_feb252024.md#l-periodicity" >}}) sinusoids:

-   \\(\sin \qty(\frac{2\pi k }{L}x)\\)
-   \\(\cos \qty(\frac{2\pi k }{L}x)\\)

Let's write:

\begin{equation}
\omega = \frac{2\pi}{L}
\end{equation}

then, for any distinct integer \\(k\_1 \neq k\_2, k\_1, k\_2 > 0\\), we see that:

\begin{equation}
\int\_{0}^{L} \cos (k\_1 \omega x) \cos (k\_2 \omega x) = \int\_{0}^{L} \sin (k\_1 \omega x) \sin (k\_2 \omega x) = 0
\end{equation}

and further for any \\(k\\):

\begin{equation}
\int\_{0}^{L} \cos (k\_1 \omega x) \sin (k\_2 \omega x) = 0
\end{equation}

Meaning, every pair of \\(\langle \\{\sin, \cos\\} (k\_1 \omega x), \\{\sin, \cos\\} (k\_1 \omega x) \rangle\\) are orthogonal.

Further, for the same \\(k\\),

\begin{equation}
\langle \cos (k\omega x), \cos (k \omega x) \rangle = \langle \sin (k\omega x), \sin (k \omega x) \rangle = \frac{L}{2}
\end{equation}

in partiular:

\begin{equation}
\int\_{0}^{\frac{L}{2}} \sin (k \omega x) \sin (k \omega x) = \frac{L}{4}
\end{equation}

if \\(k\\) are equal.
