+++
title = "interpolation"
author = ["Houjun Liu"]
draft = false
+++

[nyquist limit]({{< relref "KBhsu_engr76_apr302024.md#lossless-sampling" >}}) is great and all, but I really don't want to wait for all \\(T\\) to be able to sample all the necessary terms to solve for every \\(a\_{j},b\_{j}\\) before we can reconstruct our signal.

So, even if we got our sequence of \\(\frac{1}{2B}\\) length of points, we need an alternative way to reconstruct the signal as we go.

One way to reconstruction via interpolation is just to connect the dots; however, this is bad because it creates sharp corners.


## In General {#in-general}

Suppose you have a sampling period length \\(T\_{s}\\):

\begin{equation}
\hat{x}(t) = \sum\_{m=0}^{\infty} X\qty(mT\_{s}) F\qty( \frac{t-mT\_{s}}{T\_{s}}) = x(0) F \qty(\frac{t}{T\_{s}}) + x(T\_{s}) f\qty(\frac{t-T\_{s}}{T\_{s}}) + \dots
\end{equation}

where \\(F(t)\\) is some interpolation function such that:

\begin{equation}
\begin{cases}
F(0) = 1 \\\\
F(k) = 0, k \in \mathbb{Z} \backslash \\{0\\}
\end{cases}
\end{equation}

Notice the above is a [convolution]({{< relref "KBhconvolution.md" >}}) between \\(X\\) and \\(F\\), where \\(y\\) is fixed as a multiple \\(m\\) around \\(mT\_{s}\\) and the convolution is centered at \\(\frac{t}{T\_{s}}\\).

However, because we are finite valued, we just slide a window around and skip around.


### Consider now \\(\hat{x}\\) at \\(kT\_{s}\\) {#consider-now-hat-x-at-kt-s}

\begin{align}
\hat{x}(kT\_{s}) &= \sum\_{m=0}^{\infty} X(mT\_{s}) F \qty(\frac{kT\_{s}- mT\_{s}}{T\_{s}})  \\\\
&= \sum\_{m=0}^{\infty} X(mT\_{s}) F \qty(k-m)
\end{align}

now, recall that \\(F\\) is \\(0\\) for all non-zero integers, so each term will only be preserved once, precisely at \\(m = k\\). Meaning:

\begin{align}
\hat{x}(kT\_{s}) &= \sum\_{m=0}^{\infty} X(mT\_{s}) F \qty(k-m)  \\\\
&= X(kT\_{s}) 1  \\\\
&= X(kT\_{s})
\end{align}

so this is why we need \\(F(k) = 0, k \in \mathbb{Z} \backslash \\{0\\}\\)


## Zero-Hold Interpolation {#zero-hold-interpolation}

Choose \\(F\\) such that:

\begin{equation}
F = \begin{cases}
1, \text{if}\ |x| < \frac{1}{2} \\\\
0
\end{cases}
\end{equation}


## Infinite-Degree Polynomial Interpolation {#infinite-degree-polynomial-interpolation}

\begin{equation}
F(t) = (1-t) (1+t) \qty(1- \frac{t}{2}) \qty(1+ \frac{t}{2}) \dots = \text{sinc}(t) = \frac{\sin(\pi t)}{\pi t}
\end{equation}

This is the BEST interpolation; this is because it will be stretched such that every zero crossing matches eat \\(mT\_{s}\\), meaning we will recover a sum of sinusoids.

This gives a **smooth signal**; and if sampling was done correctly with the [nyquist limit]({{< relref "KBhsu_engr76_apr302024.md#lossless-sampling" >}}), interpolating with [sinc interpolation](#infinite-degree-polynomial-interpolation) will give you your original signal.


### Shannon's Nyquist Theorem {#shannon-s-nyquist-theorem}

Let \\(X\\) be a [Finite-Bandwidth Signal]({{< relref "KBhsu_engr76_apr252024.md#finite-bandwidth-signal" >}}) where \\([0, B]\\) Hz.

if:

\begin{equation}
\hat{X}(t) = \sum\_{m=0}^{\infty} X(mTs) \text{sinc} \qty( \frac{t-mTs}{Ts})
\end{equation}

where:

\begin{equation}
\text{sinc}(t) = \frac{\sin \qty(\pi t)}{\pi t}
\end{equation}

-   if \\(Ts < \frac{1}{2B}\\), that is, \\(fs > 2B\\), then \\(\hat{X}(t) = X(t)\\) (this is a STRICT inequality!)
-   otherwise, if \\(Ts > \frac{1}{2B}\\), then \\(\hat{X}(t) \neq X(t)\\), yet \\(\hat{X}(mTs) = X(mTs)\\), and \\(\hat{X}\\) will be bandwidth limited to \\([0, \frac{fs}{2}]\\).

This second case is callled "aliasing", or "strocoscopic effect".

---

Alternate way of presenting the same info:

\begin{equation}
\hat{X}(t) = \sum\_{m=0}^{\infty} X(mTs) \text{sinc} \qty( \frac{t-mT\_{s}}{T\_{s}})
\end{equation}

Let \\(X(t)\\), as before, be a continuous-time, bandwidth limited, signal with [Bandwidth]({{< relref "KBhsu_engr76_apr252024.md#bandwidth" >}}) \\(B\\); let \\(\hat{X}(t)\\) be the reconstruction of this signal with samples taken apart by \\(T\_{s} < \frac{1}{2B}\\); then \\(\hat{X}(t) = X(t)\\). Otherwise, if \\(T\_{s} > \frac{1}{2B}\\), then the reconstruction \\(\hat{X}(t) \neq X(t)\\), but the samples at \\(mT\_{s}\\) will still match (that is, \\(X(m T\_{s}) = \hat{X}(m T\_{s})\\)) and \\(\hat{X}(t)\\) will be a [Baseband Signal]({{< relref "KBhsu_engr76_may022024.md#passband-signal" >}}) whose spectrum is limited by \\([0, \frac{\frac{1}{T\_{s}}}{2}] = [0, \frac{F\_{s}}{2}]\\). This second case is callled "aliasing", or "strocoscopic effect".
