+++
title = "GARCH"
author = ["Houjun Liu"]
draft = false
+++

The [GARCH]({{< relref "KBhgarch.md" >}}) model is a model for the [heteroskedastic]({{< relref "KBhheteroskedastic.md" >}}) variations where the changes in variance is assumed to be auto correlated: that, though the variance changes, it changes in a predictable manner.

It is especially useful to


## [GARCH]({{< relref "KBhgarch.md" >}}) 1,1 {#garch--kbhgarch-dot-md--1-1}

Conditional mean:

\begin{equation}
y\_{t} = x'\_{t} \theta + \epsilon\_{t}
\end{equation}

Then, the epsilon parameter:

\begin{equation}
\epsilon\_{t} = \sigma\_{t}z\_{t}
\end{equation}

where:

\begin{equation}
z\_{t} \sim \mathcal{N}(0,1)
\end{equation}

and:

conditional variance

\begin{equation}
{\sigma\_{t}}^{2} = \omega + \lambda {\sigma\_{t-1}}^{2} + \beta {\sigma\_{t-1}}^{2}
\end{equation}

Finally, with initial conditions:

\begin{equation}
w>0; \alpha >0; \beta >0
\end{equation}