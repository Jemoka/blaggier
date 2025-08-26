+++
title = "negative binomial distribution"
author = ["Houjun Liu"]
draft = false
+++

how many trials do you need to get r successes.

\begin{equation}
P(X=n) = {{n-1} \choose {r-1}} p^{r} (1-p)^{n-r}
\end{equation}

if the chance of individual success is \\(p\\), what's the [probability]({{< relref "KBhprobability.md" >}}) that it takes \\(n\\) trials to get \\(r\\) successes.

\begin{equation}
\mathbb{E}[x] = \frac{r}{p}
\end{equation}

\begin{equation}
Var[x] = r \frac{{1-p}}{r^{2}}
\end{equation}
