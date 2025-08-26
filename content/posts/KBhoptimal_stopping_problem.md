+++
title = "Optimal Stopping Problem"
author = ["Houjun Liu"]
draft = false
+++

1.  Shuffle cards
2.  Keep revealing cards
3.  "Stop" when there's &gt;50% chance the next card to be revealed is black

We can [Frequentist Definition of Probability]({{< relref "KBhprobability.md#frequentist-definition-of-probability" >}}) calculate the probability of a given card remaining is black:

\begin{equation}
pblack(b,r) = \frac{26-b}{52-(r+b)}
\end{equation}

now:

\begin{equation}
pwin(b,r) = \begin{cases}
0, b+r = 52 \\\\
\max \qty[ \begin{align}&pblack(p,r), \\\ &pblack(b,r)pwin(b+1,r) + (1-pblack(b,r)pwin(b, r+1) \end{align}]
\end{cases}
\end{equation}

"with the theory of the [Martingale]({{< relref "KBhmartingale_model.md" >}})s, this comes out to be 50%"
