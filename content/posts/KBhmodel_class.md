+++
title = "model class"
author = ["Houjun Liu"]
draft = false
+++

Goal: we need to find a model that is "expressive enough": we need to have enough [parameter]({{< relref "KBhparameter.md" >}})s to help match the shape of the data we collect. to help match the shape of the data we collect.


## constituents {#constituents}


## requirements {#requirements}


## additional information {#additional-information}


### selecting parameters {#selecting-parameters}

see [model fitting]({{< relref "KBhmodel_fitting.md" >}})


### increasing expressiveness {#increasing-expressiveness}


#### mixure model {#mixure-model}

We could mix distributions into a . See [Gaussian mixture model]({{< relref "KBhgaussian_mixture_model.md" >}}).


#### transforming distributions {#transforming-distributions}

Suppose you start with:

\begin{equation}
Z \sim \mathcal{N}\qty(0,1)
\end{equation}

we can sample \\(k\\) points \\(k \sim Z\\), and then transform them across a function \\(x\_{j}=f(k\_{j})\\). We now want to know the destruction of \\(x\_{j}\\). Turns out, if \\(f\\) is invertible and differential, we have:

\begin{equation}
p\_{x}\qty(x) = p\_{z}\qty(g(x)) | g'(x) |
\end{equation}

where \\(g(x) = f^{-1}\qty(x)\\).

This new \\(p\_{x}\\) is now the [PDF]({{< relref "KBhprobability_density_function.md" >}}) of our transformed distribution.

<!--list-separator-->

-  ...but how do you pick \\(f\\)

    [Normalizing Flow!]({{< relref "KBhnormalizing_flow.md" >}})


#### generative model {#generative-model}

see [generative model]({{< relref "KBhgenerative_model.md" >}})
