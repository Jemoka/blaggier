+++
title = "SU-ENGR76 MAY022024"
author = ["Houjun Liu"]
draft = false
+++

## [nyquist]({{< relref "KBhsu_engr76_apr302024.md#lossless-sampling" >}}) sampling theorem {#nyquist--kbhsu-engr76-apr302024-dot-md--sampling-theorem}

Formally, the [nyquist limit]({{< relref "KBhsu_engr76_apr302024.md#lossless-sampling" >}}) is states as:

for \\(X(t)\\) a continuous-time [signal]({{< relref "KBhsu_engr76_apr162024.md#signal" >}}) with bounded frequency representation which is bounded by \\([0, B]\\) Hz; if \\(X\\) is sampled every \\(T\\) seconds, then if \\(T < \frac{1}{2B}\\) (sampling interval is smaller than \\(1/2B\\)) or equivalently \\(\frac{1}{T} > 2B\\) (sampling frequency is larger than \\(2B\\)), then \\(X\\) can be reconstructed from its samples \\(X(0), X(T), X(2T), \ldots\\).

At every time, we can go back and fourth between \\(X\\) the samples and sinusoids via:

\begin{align}
X(t) &= b\_0 + \sum\_{j=0}^{BT} a\_{j} \sin \qty(2\pi \frac{j}{T}t) + b\_{j} \cos \qty(2\pi \frac{j}{T}t)  \\\\
&= A\_{0} + \sum\_{j=1}^{BT} A\_{j} \sin \qty(2\pi \frac{j}{T} t + \phi\_{j})
\end{align}

We use the second representation (in particular with \\(A\_{j} = \sqrt{a\_{j}^{2} + b\_{j}^{2}}\\) because its easy to actually visualize and recover.


## Passband Signal {#passband-signal}

What if our signal, instead of being a [Baseband Signal](#passband-signal) (\\(f \in [0,B]\\)), what if we have a [Passband Signal](#passband-signal) meaning \\(f \in [f\_{\min} > 0, f\_{\max}]\\)?

We actually _still_ only need \\(2(f\_{\max} - f\_{\min})\\)  worth of samples.

Its the same [nyquist limit]({{< relref "KBhsu_engr76_apr302024.md#lossless-sampling" >}}) argument due to degrees of freedom.
