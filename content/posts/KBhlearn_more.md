+++
title = "Fourier formula"
author = ["Houjun Liu"]
draft = false
+++

For vector \\(v\\) in the [span]({{< relref "KBhspan.md" >}}) of [orthogonal]({{< relref "KBhorthogonal.md" >}}) basis \\(v\_1, ..v\_{n}\\):

\begin{equation}
v = c\_1 v\_1 + \dots + c\_{n} v\_{n}
\end{equation}

we can write:

\begin{equation}
c\_{j} = \frac{v \cdot v\_{j}}{ v\_{j} \cdot v\_{j}}
\end{equation}

---

Proof:

\begin{equation}
\langle v, v\_{j} \rangle = c\_{n} \langle v\_{1}, v\_{j} \rangle \dots
\end{equation}

which is \\(0\\) for all cases that's not \\(\langle v\_{j}, v\_{j} \rangle\\) as the \\(v\\) are orthogonal, and \\(\mid v\_{j} \mid^{2}\\) for the case where it is.

Hence, we see that:

\begin{equation}
\langle v, v\_{j} \rangle = c\_{j} \mid v\_{j}\mid^{2}
\end{equation}

Which gives:

\begin{equation}
c\_{j} = \frac{\langle v,v\_{j} \rangle}{\mid v\_{j}\mid^{2}}
\end{equation}

as desired.
