+++
title = "Cross Entropy Method"
author = ["Houjun Liu"]
draft = false
+++

This method introduces a search distribution instead of discrete points:

\begin{equation}
p(\theta | \psi)
\end{equation}

We want to know how parameters \\(\theta\\) are distributed, given some input parameters \\(\psi\\) (for instance, we assume parameters are [gaussian]({{< relref "KBhgaussian_distribution.md" >}}) distributed such as the mean/variance).

1.  Given this distribution, we sample \\(m\\) samples of \\(\theta\\) from the distribution. Those are our starting candidate points.
2.  We then check its policy for its [utility]({{< relref "KBhutility_theory.md" >}}) via the [Roll-out utility]({{< relref "KBhpolicy_evaluation.md#roll-out-utility" >}})
3.  We want to take top \\(k\\) of our best performers, called "elite samples" \\(m\_{elite}\\)
4.  Use the set of \\(m\_{elite}\\) points, we fit a new distribution parameter \\(\psi\\) that describes those sample

This allows us to bound how many [Roll-out utilitie]({{< relref "KBhpolicy_evaluation.md#roll-out-utility" >}})s we are doing.

For each dimension, we should have 10x elite sample  points (1d should have 10 samples, 2d should have 20, etc.)
