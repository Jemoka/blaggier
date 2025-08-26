+++
title = "cross entropy loss"
author = ["Houjun Liu"]
draft = false
+++

[Cross Entropy Method]({{< relref "KBhcross_entropy_method.md" >}}) is a "conditional [MLE]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}})" objective; whereby we try to maximize:

-   the log prob
-   of the true y labels in the training data
-   given the observations


## Derivation {#derivation}

Recall the [Bernoulli distribution]({{< relref "KBhbernoulli_random_variable.md" >}}), and specifically:

\begin{equation}
P(Y=y) = p^{y} (1-p)^{1-y}
\end{equation}

Meaning, we want to maximize:

\begin{equation}
\log P(y=y) = y \log p + (1-y)\log (1-y)
\end{equation}

specifically, we'd like to **minimize**:

\begin{equation}
-[y \log p + (1-y)\log (1-y)]
\end{equation}


## Intuition {#intuition}

This function should be

-   smaller when the model estimate is close to correct
-   bigger if the model is confused or wrong
