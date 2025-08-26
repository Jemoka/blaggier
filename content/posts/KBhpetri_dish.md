+++
title = "petri dish"
author = ["Houjun Liu"]
draft = false
+++

Consider a family of bacterial:

\begin{equation}
P' = 2P
\end{equation}

this is a normal exponential growth situation. However, we know this isn't true. Because the nutrients in the petri dish has a finite amount of nutrients. Hopefully this rule succeeds when the population is small, and should stop when the growth is bounded.

For instance, say you can never have more than 100 bacteria:

\begin{equation}
P' = 2P(100-P)
\end{equation}

See [logistic equation]({{< relref "KBhlogistic_equations.md" >}}) for solution
