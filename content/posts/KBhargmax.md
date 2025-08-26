+++
title = "argmax"
author = ["Houjun Liu"]
draft = false
+++

function that returns the input that maximizes the expression.


## finding argmax {#finding-argmax}


### direct [optimization]({{< relref "KBhoptimization.md" >}}) {#direct-optimization--kbhoptimization-dot-md}

Typical maximization system. Take derivative, set it to 0, solve, plug in, solve. THis is pretty bad during times are not differentiable.


### gradient ascent {#gradient-ascent}

We take steps following the direction

\begin{equation}
\theta\_{1j} = \theta\_{0j} + \eta  \pdv{LL(\theta\_{0})}{\theta\_{0j}}
\end{equation}


## additional information {#additional-information}


### [argmax of log]({{< relref "KBhmaximum_likelihood_parameter_learning.md#argmax-of-log" >}}) {#argmax-of-log--kbhmaximum-likelihood-parameter-learning-dot-md}

see [argmax of log]({{< relref "KBhmaximum_likelihood_parameter_learning.md#argmax-of-log" >}})
