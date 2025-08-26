+++
title = "Preference Elicitation"
author = ["Houjun Liu"]
draft = false
+++

For for instance, we need to figure a \\(w\\) such that:

\begin{equation}
f = w^{\top}\mqty[f\_1 \\\ \dots\\\f\_{N}]
\end{equation}

where weight \\(w \in \triangle\_{N}\\).

To do this, we essentially infer the weighting scheme by asking "do you like system \\(a\\) or system \\(b\\)".

1.  first, we collect a series of design variables \\((a\_1, a\_2, a\_3 ...)\\) and \\((b\_1, b\_2, b\_3...)\\) and we ask "which one do you like better"
2.  say our user WLOG chose \\(b\\) over \\(a\\)
3.  so we want to design a \\(w\\) such that \\(w^{\top} a < w^{\top} b\\)
4.  meaning, we solve for a \\(w\\) such that...

\begin{align}
\min\_{w}&\ \sum\_{i=1}^{n} (a\_{i}-b\_{i})w^{\top} \\\\
\text{such that}&\ \bold{1}^{\top} w = 1 \\\\
&\ w \geq 0
\end{align}

**unlike the rest of everything, we are MAXIMIZING here** idk why


## example {#example}

**assume**: if we prefer \\(a\\) to \\(b\\), then \\(w^{T} a > w^{T} b\\).

Let's say we had two bags, each with \\(a = \qty(1,3,6)\\) and \\(b = \qty(7,1,2)\\).

This means:

\begin{equation}
1 w\_1 + 3 w\_2 + 6 w\_3 > 7 w\_1 + w\_2 + 2 w\_3
\end{equation}

Doing algebra, this gives:

\begin{equation}
-6 w\_1 + 2 w\_2 + 4 w\_3 > 0
\end{equation}

Recall this is also a probability, so we have:

\begin{equation}
1 - w\_1 - w\_2 = w\_3
\end{equation}

Finally, solving this gives:

\begin{equation}
5w\_1 + w\_2 < 2
\end{equation}

This is what we call a [halfspace]({{< relref "KBhpreference_elicitation.md" >}}), which further bounds weights that are possible. Its a line which bounds the space of weights down. Combining each of the [halfspace]({{< relref "KBhpreference_elicitation.md" >}})s together gets a piecewise linear graph. Taking say the centroid of the remaining space will give you the desired result.
