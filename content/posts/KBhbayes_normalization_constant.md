+++
title = "Bayes Normalization Constant"
author = ["Houjun Liu"]
draft = false
+++

For some [Baysian Network]({{< relref "KBhbaysian_network.md" >}}) situation, you will note that there's some bodge of values below:

\begin{equation}
P(A|M) = \frac{P(M|A)P(A)}{P(M)}
\end{equation}

if we are only interested in a function in terms of different values of \\(a\\), \\(P(M)\\) is not that interesting. Therefore, we can just calculate \\(A\\) for all \\(a\\), and then normalize it to sum to 1:

\begin{equation}
P(A|M) \propto P(M|A)P(A)
\end{equation}

and then, after calculating each \\(P(M|A)P(A)\\) , we just ensure that each thing sums to one.
