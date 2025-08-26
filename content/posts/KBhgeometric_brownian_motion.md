+++
title = "Geometric Brownian Motion"
author = ["Houjun Liu"]
draft = false
+++

A [Geometric Brownian Motion]({{< relref "KBhgeometric_brownian_motion.md" >}}) is a [Brownian Motion]({{< relref "KBhbrownian_motion.md" >}}) with a drift.

It is determined by:

\begin{equation}
\dd{S\_{t}} = \mu S\_{t} \dd{t} + \sigma \dd{S\_{t}} \dd{W\_{t}}
\end{equation}

where, \\(S\_{t}\\) is a [Geometric Brownian Motion]({{< relref "KBhgeometric_brownian_motion.md" >}}), \\(\mu\\) is its drift, \\(\sigma\\) the volatility, and \\(W\_{t}\\)  a centered [Brownian Motion]({{< relref "KBhbrownian_motion.md" >}}).