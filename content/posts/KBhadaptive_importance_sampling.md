+++
title = "adaptive importance sampling"
author = ["Houjun Liu"]
draft = false
+++

Some more improvements to [Importance Sampling]({{< relref "KBhimportance_sampling.md" >}}).


## [Cross Entropy Method]({{< relref "KBhcross_entropy_method.md" >}}) {#cross-entropy-method--kbhcross-entropy-method-dot-md}

1.  draw initial samples
2.  fit a new distribution with the subset that failed: weight each sample by

\begin{equation}
w\qty(\tau) = \frac{p\qty(\tau) \qty {\tau \not \in \psi}}{q\qty(\tau)}
\end{equation}

**problem**: what if, immediately on the first proposal, we never got any failures? Then the weight of everything is zero and then life is bad.


## adaptive cross entropy method with adaptive importance sampling {#adaptive-cross-entropy-method-with-adaptive-importance-sampling}

Pick a notion of "distance to failure" \\(f\qty(\tau)\\)

We will ask that \\(f\qty(\tau) \leq 0\\), for failure trajectories---so that we have \\(p\qty(\tau | \tau \not \in \psi) = p\qty(\tau | f\qty(\tau) \leq 0)\\).

---

1.  draw samples from current proposal
2.  compute \\(f\qty(\tau)\\) for each sample and pick top \\(m\_{\text{elite}}\\) samples
3.  set a threshold \\(\gamma\\) to be the **highest** (i.e. worst) \\(f\qty(\tau)\\) of the samples---remember to **cap at minimum of 0**, otherwise we'll start chopping off the failure region
4.  compute the next proposal by minimizing the cross entropy of the distribution with \\(p\qty(\tau | f\qty(\tau) \leq \gamma)\\); we use the threshold instead of binary failure.
