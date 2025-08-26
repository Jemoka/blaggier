+++
title = "E-PCA"
author = ["Houjun Liu"]
draft = false
+++

We want to solve huge [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}) in the real world, but the belief states are huge. Notably, reachable beliefs are very small given an initial belief.


## Why is vanilla PCA bad {#why-is-vanilla-pca-bad}

PCA as a denoising procedure: the underlying data is some data which is normally noised. This is not strictly true, the points don't have normal noise.


## Better PCA: E-PCA {#better-pca-e-pca}

Instead of Euclidean distance, we use

\begin{equation}
L(U,V) = \mid X-UV\mid^{2}
\end{equation}

as a metric, where:

\\(U\\) the feature

specifically:

\begin{equation}
F(z) - yz + F^{\*}(y)
\end{equation}

where \\(F\\) is any convex objective that is problem specific that you choose,

**Bregman Divergence** forces the underlying matricies' bases to be non-negative


## Overall Methods {#overall-methods}

1.  collect sample beliefs
2.  apply the belifs into E-PCA
3.  Discretize the E-PCA'd belifs into a new state space \\(S\\)
4.  Recalculate R (\\(R(b) = b \cdot R(s)\\)) and T (we simply sample \\(b,o\\) and calculate \\(update(b,a,o)\\)) for that state space S; congratulations, you are now solving an MDP
5.  [value iteration]({{< relref "KBhvalue_iteration.md" >}})
