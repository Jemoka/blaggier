+++
title = "variance"
author = ["Houjun Liu"]
draft = false
+++

[variance]({{< relref "KBhvariance.md" >}}) (also known as [second central moment]({{< relref "KBhvariance.md" >}})) is a way of measuring spread:

\begin{align}
Var(X) &= E[(X-E(X))^{2}] \\\\
&= E[X^{2}] - (E[X])^{2}  \\\\
&= \qty(\sum\_{x}^{} x^{2} p\qty(X=x)) - (E[X])^{2}
\end{align}

"on average, how far is the probability of \\(X\\) from its [expectation]({{< relref "KBhexpectation.md" >}})"

The expression(s) are derived below. Recall that [standard deviation]({{< relref "KBhstandard_deviation.md" >}}) is a square root of the [variance]({{< relref "KBhvariance.md" >}}).


## computing variance: {#computing-variance}

\begin{align}
Var(X) &= E[(X - \mu)^{2}]  \\\\
&= \sum\_{x}^{} (x-\mu)^{2} p(X)
\end{align}

based on the law of the [Unconscious statistician]({{< relref "KBhexpectation.md#unconscious-statistician" >}}). And then, we do algebra:

{{< figure src="/ox-hugo/2023-10-13_15-43-21_screenshot.png" >}}

So, for any random variable \\(X\\), we say:

\begin{align}
Var(X) &= E[X^{2}] - (E[X])^{2}  \\\\
&= \qty(\sum\_{x}^{} x^{2} p(X=x)) - (E[X])^{2}
\end{align}

based on the law of [Unconscious statistician]({{< relref "KBhexpectation.md#unconscious-statistician" >}}).


## Sum of Variance {#sum-of-variance}

\begin{equation}
Var(X + Y)=Var(X)+Var(Y)+2Cov(X+Y).
\end{equation}

\begin{equation}
Var\qty(\sum\_{j}^{} X\_{j}) = \sum\_{i}^{} \sum\_{j}^{} Cov\qty(X\_{i}, X\_{j})
\end{equation}
