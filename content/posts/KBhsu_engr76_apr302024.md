+++
title = "SU-ENGR76 APR302024"
author = ["Houjun Liu"]
draft = false
+++

## [Discrete Fourier Transform]({{< relref "KBhsu_engr76_apr252024.md#discrete-fourier-transform" >}}) {#discrete-fourier-transform--kbhsu-engr76-apr252024-dot-md}

The matrix operation is computationally intractable as it scales with \\(O(N^{2})\\). The complexity can be reduced via a Fast-Fourier Transform with \\(O(n\log n)\\) time.

We can compute the Fourier representation forward and backwards by inverting the Fourier matrix


## [Source Coding Review]({{< relref "KBhsu_engr76_apr092024.md#source-coding" >}}) {#source-coding-review--kbhsu-engr76-apr092024-dot-md}


### Basic Source {#basic-source}

We can just do [Huffman Coding]({{< relref "KBhhuffman_coding.md" >}}) directly.


### Continuous Real Source {#continuous-real-source}

We can quantize the continuous source, and then do [Huffman Coding]({{< relref "KBhhuffman_coding.md" >}}).


### Continuous-Time Source {#continuous-time-source}

Few strategies to get discrete symbols.

1.  sampling: to get discrete points
2.  quantization: to turn int continuous source symbols to discrete symbol-set
3.  compression: [Huffman Coding]({{< relref "KBhhuffman_coding.md" >}})


## Lossless Sampling {#lossless-sampling}

[sampling](#lossless-sampling) is the task of obtaining discrete time samples of a continuous time signals.

Suppose we have a finite-period signal \\(T\\). We know that we can extend it into a \\(T\\) periodic function model-able by an at-least infinite [Fourier Series]({{< relref "KBhfourier_series.md" >}}) by an repeated extension.

Moreover, **assume** that the spectrum of the signal can be represented by a **finite** sequence [Fourier Series]({{< relref "KBhfourier_series.md" >}})---essentially, we assume that our signal is a [Finite-Bandwidth Signal]({{< relref "KBhsu_engr76_apr252024.md#finite-bandwidth-signal" >}}), and moreover the \\(f\_{\min} = 0\\), and \\(f\_{\max} = B < \infty\\).

By making the assumption above, we know that our resulting Fourier series has a frequency bounded by \\(\frac{j}{T} \leq B \implies j \leq BT\\), meaning, this gives:

\begin{align}
&f(x) = b\_0 + \sum\_{k=1}^{\infty} \qty( a\_{k} \cos(k \omega x) + b\_{k} \sin(k \omega x))  \\\\
\Rightarrow\ & f(x) = b\_0 + \sum\_{k=1}^{BT} \qty( a\_{k} \cos(k \omega x) + b\_{k} \sin(k \omega x))
\end{align}

Now, let us consider what would happen if we tried to sample this signal every \\(S\\) second:

at \\(x=0\\)

\begin{equation}
y\_0 = b\_0 + \sum\_{j=1}^{BT} a\_{j} \sin 0 + b\_{j} \cos 0 = b\_0 + b\_1 + \dots + b\_{BT}
\end{equation}

at \\(x=S\\)

\begin{equation}
y\_{S} = b\_0 + \sum\_{j=1}^{BT} a\_{j} \sin \qty(2 \pi \frac{j}{T} S ) + b\_{j} \cos  \qty(2\pi \frac{j}{T} S)
\end{equation}

...

you will note that we have \\(2BT + 1\\) unknowns (\\(b\_0, b\_1, ..., b\_{BT}, a\_{1}..., a\_{BT}\\)). This means that we need to at least make \\(2BT+1\\) samples. This means that we need to choose our \\(S\\) such that:

\begin{equation}
\frac{T}{S} \geq 2BT + 1 \implies S \leq \frac{T}{2BT+1} \approx \frac{T}{2BT} = \frac{1}{2B}
\end{equation}

meaning we can reconstruct our whole function as long as our sampling is at least double the [Bandwidth]({{< relref "KBhsu_engr76_apr252024.md#bandwidth" >}}) of our signal. This is the [nyquist limit](#lossless-sampling).

We state this more formally in [nyquist sampling theorem]({{< relref "KBhsu_engr76_may022024.md#nyquist--org0419f3b--sampling-theorem" >}})
