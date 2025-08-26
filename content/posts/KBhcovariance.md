+++
title = "covariance (probability)"
author = ["Houjun Liu"]
draft = false
+++

\begin{equation}
   cov(x,y) = E[(X-E[X])(Y-E[Y])] = E[XY]-E[X]E[Y]
\end{equation}

(the derivation comes from FOIling the two terms and applying [properties of expectation]({{< relref "KBhexpectation.md#properties-of-id-24e5fb5b-b0b2-4872-adf2-398e91c3ee0e-expectation" >}}).

we want to consider: if a point goes way beyond its expectation, does the corresponding point change for another?

\begin{equation}
(x-E[x])(y-E[y])
\end{equation}

if both points are varying .

Instead of using this unbounded value, we sometimes use a normalized value named [correlation]({{< relref "KBhcovariance.md" >}}):

\begin{equation}
\rho(X,Y) =  \frac{Cov(X,Y)}{\sqrt{Var(X)Var(Y)}}
\end{equation}

we can express this in terms of a [covariance matrix]({{< relref "KBhcovariance_matrix.md" >}})
