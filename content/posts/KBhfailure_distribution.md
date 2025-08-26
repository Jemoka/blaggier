+++
title = "Failure Distribution"
author = ["Houjun Liu"]
draft = false
+++

For a trajectory \\(p\qty(\tau)\\), the **failure distribution** is $p \qty(&tau; | &tau; &not; &isin;&psi;)$---the probability of a particular trajectory given that its a failure:

\begin{equation}
p \qty( \tau \mid \tau \not \in \psi) = \frac{\mathbb{1}\qty {\tau \not \in \psi} p\qty(\tau)}{ \int \mathbb{1}\qty {\tau \not \in \psi} p\qty(\tau) \dd{\tau}}
\end{equation}

This bottom integral could be very difficult to compute; but the **numerator** may take a bit more work to compute!

---

So ultimately we can also give up and don't normalize (and then use systems that allows us to draw samples from unnormalized probability densities:

\begin{equation}
\hat{p} \qty( \tau \mid \tau \not \in \psi) = {\mathbb{1}\qty {\tau \not \in \psi} p\qty(\tau)}
\end{equation}

so we can implicitly represents the failure distirbution using the drawn samples.


## some ways of sampling from failure distribution {#some-ways-of-sampling-from-failure-distribution}

-   [Rejection Sampling]({{< relref "KBhrejection_sampling.md" >}})
-   [Markov Chain Monte-Carlo]({{< relref "KBhmarkov_chain_monte_carlo.md" >}})
