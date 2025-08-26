+++
title = "AdaOPS"
author = ["Houjun Liu"]
draft = false
+++

How do you sample particle filters? This doesn't work for a continuous action space.


## Contributions {#contributions}

-   Uses KLD sampling---adaptive sampling of particple filters
-   "belief packing"---pack similar beliefs together, making observation tree smaller


## KLD Sampling {#kld-sampling}

[KLD Sampling](#kld-sampling) uses [KL Divergence]({{< relref "KBhkl_divergence.md" >}}) to approximate difference between two probability distributions:

\begin{equation}
N \approx \frac{k-1}{2\xi} \qty(1- \frac{2}{9(k-1)} + \sqrt{\frac{2}{9(k-1)}} z\_{1-\eta})^{3}
\end{equation}


## "Propagation" {#propagation}

We want to get a set of sampled observations from belief + action.


## Belief Packing {#belief-packing}

L1 norm between beliefs. If its too small consider them the same beliefs.
