+++
title = "power series"
author = ["Houjun Liu"]
draft = false
+++

a [power series]({{< relref "KBhpower_series_o.md" >}}) centered at \\(a\\) is defined with \\(c\_{n} \in \mathbb{R}\\), whereby:

\begin{equation}
f(x) = \sum\_{n=0}^{\infty} c\_{n}(x-a)^{n}
\end{equation}

meaning it is written as \\(c\_0 + c\_1(x-a) + c\_2(x-a)^{2} + c\_3 (x-a)^{3} + \cdots\\)


## radius of convergence {#radius-of-convergence}

-   there is a [radius of convergence](#radius-of-convergence) \\(R \geq 0\\) for any [power series]({{< relref "KBhpower_series_o.md" >}}), possibly infinite, by which the series is absolutely convergent where \\(|x-a| < R\\), and it does not converge when \\(|x-a| > R\\) , the case where \\(|x-a| = R\\) is uncertain
-   [ratio test](#radius-of-convergence): if all coefficients \\(c\_{n}\\) are nonzero, and some \\(\lim\_{n \to \infty} \left| \frac{c\_{n}}{c\_{n+1}} \right|\\) evaluates to some \\(c\\) --- if \\(c\\) is positive or \\(+\infty\\), then that limit is equivalent to the radius of convergence
-   [Taylor's Formula](#radius-of-convergence): a power series \\(f(x)\\) can be differentiated, integrated on the bounds of \\((a-R, a+R)\\), the derivatives and integrals will have radius of convergence \\(R\\) and \\(c\_{n} = \frac{f^{(n)}(a)}{n!}\\) to construct the series


## [linear combination]({{< relref "KBhlinear_combination.md" >}})s of [power series]({{< relref "KBhpower_series_o.md" >}}) {#linear-combination--kbhlinear-combination-dot-md--s-of-power-series--kbhpower-series-o-dot-md}

When \\(\sum\_{n=0}^{\infty} a\_{n}\\) and \\(\sum\_{n=0}^{\infty} b\_{n}\\) are **both convergent**, linear combinations of them can be described in the usual fashion:

\begin{equation}
c\_1 \sum\_{n=0}^{\infty} a\_{n}+ c\_2 \sum\_{n=0}^{\infty} b\_{n} = \sum\_{n=0}^{\infty}  c\_1 a\_{n} + c\_2 b\_{n}
\end{equation}


## some [power series]({{< relref "KBhpower_series_o.md" >}}) {#some-power-series--kbhpower-series-o-dot-md}


### geometric series {#geometric-series}

\begin{equation}
1 + r + r^{2} + r^{3} + \dots = \sum\_{n=0}^{\infty} r^{n} = \frac{1}{1-r}
\end{equation}

which converges \\(-1 < r < 1\\), and diverges otherwise.


### exponential series {#exponential-series}

\begin{equation}
1 + x + \frac{x^{2}}{2!} + \frac{x^{3}}{3!} + \dots = \sum\_{n=0}^{\infty} \frac{x^{n}}{n!} = e^{x}
\end{equation}

which converges for all \\(x \in \mathbb{R}\\).


## absolutely convergent {#absolutely-convergent}

If:

\begin{equation}
\sum\_{n=0}^{\infty} |a\_{n}|
\end{equation}

converges, then:

\begin{equation}
\sum\_{n=0}^{\infty} a\_{n}
\end{equation}

also converges.

This situation is called [absolutely convergent](#absolutely-convergent).
