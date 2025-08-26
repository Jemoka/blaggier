+++
title = "SU-ENGR76 APR252024"
author = ["Houjun Liu"]
draft = false
+++

Every periodic function with period \\(T\\) can be written as a linear combination:

\begin{equation}
f(t) = b\_{0} + \sum\_{j=1}^{\infty}a\_{j} \sin  \qty( 2\pi \frac{j}{T} t) + b\_{j} \cos \qty(2\pi \frac{j}{T} t)
\end{equation}


## Finite-Bandwidth Signal {#finite-bandwidth-signal}

If the summation here is finite, we call this representation as **finite-bandwidth**. You can draw out two separate stem plots, representing the \\(\sin\\) term frequencies and the \\(\cos\\) term frequencies.


### Bandwidth {#bandwidth}

For a particular signal, identify the largest and smallest frequency corresponding to non-zero coefficients, then our **bandwidth** is defined by:

\begin{equation}
BW = f\_{\max} - f\_{\min}
\end{equation}

if there is a nonzero shift for a cosine series, we consider \\(f\_{\min} = 0\\).


## Discrete Fourier Transform {#discrete-fourier-transform}

To represent a sinusoidal sequence, we sample a point for every \\(\frac{t}{n}\\) times, obtaining a list of \\(n\\) samples of a sinusoid; with this, we obtain a sequence:

\begin{align}
[y(t\_0) \dots y(t\_1) \dots y(t\_{n-1})]
\end{align}

We'll then represent this sequence as a weighted sum of discrete time sinusoids **sampled** again \\(n\\) times:

\begin{equation}
\left\\{\sin \qty(2 \pi \frac{1}{n} k): k \in 0,1, \dots, n-1 \right\\}
\end{equation}

\begin{equation}
\left\\{\cos \qty(2 \pi \frac{1}{n} k): k \in 0,1, \dots, n-1 \right\\}
\end{equation}

Then, we slowly increase the sampling frequency:

\begin{equation}
\left\\{\sin \qty(2 \pi \frac{2}{n} k): k \in 0,1, \dots, n-1 \right\\}
\end{equation}

\begin{equation}
\left\\{\cos \qty(2 \pi \frac{2}{n} k): k \in 0,1, \dots, n-1 \right\\}
\end{equation}

notice how each of these frequencies yields a list of \\(n\\) values; by adding them all up together with appropriate coefficients, we can represent each element of our signal.

\begin{equation}
y(t\_{k}) = b\_0 + \sum\_{j=1}^{\infty} a\_{j} \sin \qty(2 \pi \frac{j}{n} k) + b\_{j} \cos \qty(2 \pi \frac{j}{n} k)
\end{equation}

for a discrete input list with \\(n\\) elements. IMPORTANTNLY, however:

\begin{equation}
\sin \qty(2\pi \frac{(j+n+i)}{n} k) = \sin \qty(2 \pi \frac{j}{n} k + 2\pi k + 2 \pi \frac{i}{n} k) = \sin \qty(2 \pi \frac{(j+i)}{n} k + 2\pi k)
\end{equation}

(and because \\(\sin\\) is \\(2\pi\\) periodic, that term goes away).

Because all things beyond \\(n\\) is a repeat of stuff below \\(n\\), as shown above:

\begin{equation}
y(t\_{k}) = b\_0 + \sum\_{j=1}^{n} a\_{j} \sin \qty(2 \pi \frac{j}{n} k) + b\_{j} \cos \qty(2 \pi \frac{j}{n} k)
\end{equation}

further, at \\(j=n\\), the sin term becomes \\(0\\) and the cos term becomes a constant, this allows us to write:

\begin{equation}
y(t\_{k}) = b\_0 + \sum\_{j=1}^{n-1} a\_{j} \sin \qty(2 \pi \frac{j}{n} k) + b\_{j} \cos \qty(2 \pi \frac{j}{n} k)
\end{equation}

---

Now, let's for a bit consider a sine-only series; let's break our \\(j\\) into:

\begin{equation}
j = 1, 2, 3 \dots, \frac{N-1}{2}, \frac{N-1}{2} + 1, \frac{N-1}{2} + 2 \dots N-1
\end{equation}

Consider the \\(\frac{N-1}{2} + 1\\) term, we have, for some \\(k\\):

\begin{equation}
\sin \qty(2 \pi \frac{\qty(\frac{N-1}{2}+1)}{N} k) = -\sin \qty(2 \pi \frac{\frac{N-1}{2}}{N} k)
\end{equation}

Meaning, it collapses in the **negative** of the previous term. This patterns continue:

\begin{equation}
\sin \qty(2 \pi \frac{\qty(\frac{N-1}{2}+2)}{N} k) = -\sin \qty(2 \pi \frac{\qty(\frac{N-1}{2}-1)}{N} k)
\end{equation}

this means that all terms after \\(\frac{N-1}{2}\\) is irrelevant!

---

The above actually holds for cosine as well. This gives:

\begin{equation}
y(t\_{k}) = b\_0 + \sum\_{j=1}^{\frac{n-1}{2}} a\_{j} \sin \qty(2 \pi \frac{j}{n} k) + b\_{j} \cos \qty(2 \pi \frac{j}{n} k)
\end{equation}

for \\(t\_{k} \in [0, ..., n-1]\\)

Notice! We have **FIXED** coefficients for all \\(n\\) times. This in total gives us \\(2\qty(\frac{n-1}{2}) + 1 = n\\) unknowns!

This is \\(n\\) equations and \\(n\\) unknowns, we can solve it as a linear system by collapsing it into a linear system:

for

\begin{equation}
Y = \mqty(y(t\_0) \\\ \dots \\\ y(t\_{n-1}))
\end{equation}

and formulate a map \\(F\\) of sinusoidal bases
