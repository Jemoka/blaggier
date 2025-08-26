+++
title = "applying eigenspace"
author = ["Houjun Liu"]
draft = false
+++

Show that:

\begin{equation}
\dv t e^{tA} = e^{tA}A
\end{equation}

We can apply the result we shown in [eigenvalue]({{< relref "KBheigenvalue.md" >}}):

\begin{equation}
\dv t \qty(e^{tA}) = \dv t \qty(I + \sum\_{k=1}^{\infty} \frac{t^{k}}{k!}A^{k}) = \qty(\sum\_{k=1}^{\infty }\frac{1}{k!}kt^{k-1}A^{k-1})A
\end{equation}

We do this separation because \\(k=0\\) would't make sense to raise \\(A\\) (\\(k-1=-1\\)) to as we are unsure about the [invertability]({{< relref "KBhmatricies.md#invertability" >}}) of \\(A\\). Obviously \\(\frac{1}{k!}k = \frac{1}{(k-1)!}\\). Therefore, we can shift our index back yet again:

\begin{equation}
\qty(\sum\_{k=1}^{\infty }\frac{1}{k!}kt^{k-1}A^{k-1})A  = \qty(\sum\_{j=0}^{\infty }\frac{1}{j!}t^{j}A^{j})A
\end{equation}

Awesome. So now we have the taylor series in \\(e^{tA}\\) back, times \\(A\\).

So therefore:

\begin{equation}
\qty(\sum\_{j=0}^{\infty }\frac{1}{j!}t^{j}A^{j})A = e^{tA}A
\end{equation}

---

Be forewarned:

\begin{equation}
e^{A}e^{B} \neq e^{A+B}
\end{equation}

mostly because matrix multiplication is not commutative..