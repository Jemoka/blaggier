+++
title = "SU-ENGR76 APR162024"
author = ["Houjun Liu"]
draft = false
+++

## Non-IID Sequence Can Have Smaller Entropy {#non-iid-sequence-can-have-smaller-entropy}

For sequences that are not [IID]({{< relref "KBhindependently_and_identically_distributed.md" >}}), we may have:

\begin{equation}
H(X\_1, \dots, X\_{n)} \ll \sum\_{j=1}^{n} H(X\_{j})
\end{equation}

This means that for very dependent sequences:

\begin{equation}
\lim\_{n \to \infty} \frac{H(X\_1, \dots, X\_{n})}{n} \ll \sum\_{j=1}^{n}H(x\_{j})
\end{equation}

so to measure how good our compression is, we should use this.


## signal {#signal}

a [signal](#signal) is, mathematically, just a function.

\begin{equation}
f: \mathbb{R}^{n} \to \mathbb{R}^{m}
\end{equation}

whereby the input is space (time, coordinates, etc.) and the output is the "signal" (pressure, level of gray, RGB, etc.)

here's a sidebar:


### sinusoid {#sinusoid}

\begin{equation}
y\_{f}(t) = A \sin \qty(2 \pi f t + \phi)
\end{equation}

we make a whole rotation in \\(\frac{1}{f}\\) time, and we start at \\(\phi\\), and we will go to \\(A\\) height.

Recall sinusoids are [L-periodic]({{< relref "KBhsu_math53_feb252024.md#l-periodicity" >}}).

The units for [sinusoid](#sinusoid)s: \\(t\\) is seconds, \\(f\\) is \\(\frac{1}{s}\\), and amplitude is some unit.


### [L-periodic]({{< relref "KBhsu_math53_feb252024.md#l-periodicity" >}}) {#l-periodic--kbhsu-math53-feb252024-dot-md}

See [L-periodic]({{< relref "KBhsu_math53_feb252024.md#l-periodicity" >}}) and the [period]({{< relref "KBhsu_math53_feb252024.md#l-periodicity" >}}) of the function.


### triangle wave {#triangle-wave}

we can construct a triangle wave by creating an [Fourier Series]({{< relref "KBhfourier_series.md" >}}) of the shape:

\begin{equation}
y(t) = \sum\_{j}^{} A\_{j} \sin \qty(2 \pi f\_{j} t)
\end{equation}

where:

\begin{equation}
A\_{j} = \frac{1}{j}
\end{equation}

and:

\begin{equation}
f\_{j} = 2 j
\end{equation}

This creates a tringle of height \\(1.5\\) at \\(t = 0\\)
