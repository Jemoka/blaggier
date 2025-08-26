+++
title = "SU-CS109 DEC042023"
author = ["Houjun Liu"]
draft = false
+++

## Diffusion Models {#diffusion-models}

We can consider a model between random noise and trees.

For every step, we sample Gaussian noise and **add** it to the image. The original approach adds Gaussian to the pixels, and nowadays people replace the pixel.

Usually, there is a few thousand steps of noising.

Why is it that we can't have a one-step policy from noise to pictures? Because of a physics result that says the stability of diffusion becomes intractable at too large steps.


### loss function {#loss-function}

One way we can model our objective is as a [MLE]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}). Because we are continuously adding noise, we can assume that

\begin{equation}
y \sim \mathcal{N}(\mu = \hat{y}(\theta), \sigma^{2}=k)
\end{equation}

If you compute MLE over the choice of \\(\hat{y}(\theta)\\), you get the squared error.


### ELBO {#elbo}

A cool loss function that diffusion actually uses that leverages the fact above but considers the entire diffusion process.


### LSTMs {#lstms}

Big text generation flaw with LSTMs: the latent state vector has to contain information about the ENTIRE sentence and have the information propagated through recursion. Information


### Cross Entropy {#cross-entropy}

its MLE over a multinomials; the counts of everything that's not the one-hot thing just so happens to be 0.

We are essentially computing the derivative of:

\begin{equation}
\arg\max\_{p\_{correct}} p\_{correct}
\end{equation}

which is trying to maximize the categorical of only the correct element.
