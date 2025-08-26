+++
title = "conjugate prior"
author = ["Houjun Liu"]
draft = false
+++

A [conjugate prior]({{< relref "KBhconjugate_prior.md" >}}) of a certain likelihood function \\(p\qty(x | \theta)\\) is a type of prior where the posterior distribution---

\begin{equation}
p\qty(\theta | x)
\end{equation}

is the same probability family as the prior \\(p\qty(\theta)\\).

This means that updating is very easy; if we can't do this, [probabilistic programming]({{< relref "KBhprobabilistic_programming.md" >}})!
