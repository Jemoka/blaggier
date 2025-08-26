+++
title = "Inference for Gaussian Models"
author = ["Houjun Liu"]
draft = false
+++

If we know that \\(a,b\\) are both [Gaussian distribution]({{< relref "KBhprobability_distributions.md#gaussian-distribution" >}})s, then we have that:

\begin{equation}
\mqty[a \\\ b] \sim \mathcal{N} \qty(\mqty[\mu\_{a} \\\\mu\_{b}], \mqty[A & C \\\ C^{T} & B])
\end{equation}

whereby:

-   \\(A\\) is the [covariance]({{< relref "KBhcovariance.md" >}}) of each element of \\(A\\)
-   \\(B\\) is the [covariance]({{< relref "KBhcovariance.md" >}}) of each element of \\(B\\)
-   \\(C\\) is the [covariance]({{< relref "KBhcovariance.md" >}}) of \\(A\\) against \\(B\\)

To perform inference:

\begin{equation}
p(a|b) = \mathcal{N}(a | \mu\_{a|B}, \Sigma\_{a|b})
\end{equation}

wherby:

\begin{equation}
\mu\_{a|b} = \mu\_{a} + CB^{-1}(b-\mu\_{b})
\end{equation}

\begin{equation}
\Sigma\_{a|b} = A - CB^{-1}C^{T}
\end{equation}

Its a closed form solution. Tada.

We know that \\(B\\) is positive semidefinite, and that its invertible, from the fact that its a [covariance]({{< relref "KBhcovariance.md" >}}).
