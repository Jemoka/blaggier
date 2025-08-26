+++
title = "SU-ENGR76 APR182024"
author = ["Houjun Liu"]
draft = false
+++

## [Fourier Series]({{< relref "KBhfourier_series.md" >}}) as exactly a shifted sum of sinusoids {#fourier-series--kbhfourier-series-dot-md--as-exactly-a-shifted-sum-of-sinusoids}

Key idea: **every periodic function with period \\(L\\) can be represented as a sum of sinusoids**

\begin{equation}
f(t) = A\_0 + \sum\_{i=1}^{\infty} B\_{j} \sin \qty(k \omega t + \phi\_{j})
\end{equation}

where \\(\omega = \frac{2\pi}{T}\\). notice! without the \\(A\_0\\) shift, our thing would integrate to \\(0\\) for every \\(L\\); hence, to bias the mean, we change \\(A\_0\\).

Now, we ideally really want to get rid of that shift term \\(\phi\\), applying the sin sum formula:

\begin{align}
f(t) &= A\_0 + \sum\_{i=1}^{\infty} B\_{j} \sin \qty(k\_{j} \omega t + \phi\_{j})  \\\\
&= A\_0 + \sum\_{j=1}^{\infty } A\_{j} \cos \qty(\phi\_{j}) \sin \qty(k\_{j}\omega t) + B\_{j} \sin \qty (\phi\_{j}) \cos \qty(k\_{j} \omega t)  \\\\
&= b\_0 + \sum\_{j=1}^{\infty} a\_{j} \sin \qty(\omega k\_{j} t) + \sum\_{j=1}^{\infty} b\_{j} \cos \qty(k \omega t)
\end{align}

we can move back and fourth before the representation as follows:

\begin{equation}
\begin{cases}
a\_{j} = A\_{j} \cos \qty(\phi\_{j}) \\\\
b\_{j} = A\_{j} \sin \qty(\phi\_{j})  \\\\
b\_{0} = A\_{0} \\\\
A\_{j}^{2} = a\_{j}^{2} + b\_{j}^{2} \\\\
\tan \qty(\phi\_{j}) = \frac{b\_{j}}{a\_{j}}
\end{cases}
\end{equation}

in a sense, this is a **polar** representation of the sum of sinusoids of system. Recall to get the actual coefficients, see [General Fourier Decomposition]({{< relref "KBhfourier_series.md#general-fourier-decomposition" >}}).


## [signal]({{< relref "KBhsu_engr76_apr162024.md#signal" >}}) representation {#signal--kbhsu-engr76-apr162024-dot-md--representation}

KEY IDEA: we can approximate all values of a function with just specifying the parameters of the sine function.

In particular, any signal \\(f\\) is uniquely specified by specifying only its Fourier representation:

\begin{equation}
\left\\{A\_{j}, \phi\_{j}\right\\}\_{0}^{\infty} \cup \\{A\_0\\}
\end{equation}

The smallest \\(f\_{1} = \frac{1}{T}\\), called the [fundamental frequency](#signal--kbhsu-engr76-apr162024-dot-md--representation) of this system, and any higher are harmonics; in particular, \\(f\_{j} = \frac{j}{T}\\) are called the jth [harmonic](#signal--kbhsu-engr76-apr162024-dot-md--representation).

To represent finite-duration signal, we just create the finite-periodic extension of this signal by coping it over and over.

Key thing to remember: **remember that odd/even extensions have period \*2T**!!!\*
