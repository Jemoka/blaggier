+++
title = "inference"
author = ["Houjun Liu"]
draft = false
+++

[inference]({{< relref "KBhinference.md" >}}) is the act of updating the distribution of a [random variable]({{< relref "KBhrandom_variables.md" >}}) based on distribution of actually observed variables:

\begin{equation}
P(X|Y)
\end{equation}

where \\(Y\\) is observed, and we want to know how likely \\(X\\) would therefore be.

We call the set \\(X\\) the "query variables", \\(Y\\) as "evidence varibales", and anything that we didn't use which connects the two variables as "hidden variables".

If things are not in the right order of \\(X\\) and \\(Y\\), consider the [Bayes rule]({{< relref "KBhbayes_theorem.md" >}}).


## Inference is Hard {#inference-is-hard}

-   mix of [continuous]({{< relref "KBhuniqueness_and_existance.md#continuity" >}}) and [discrete distribution]({{< relref "KBhdiscrete_distribution.md" >}})
-   results could be either a [PMF]({{< relref "KBhprobability_mass_function.md" >}}) or a [PDF]({{< relref "KBhprobability_distributions.md#probability-density-function" >}})


## Example {#example}

{{< figure src="/ox-hugo/2023-10-03_09-52-18_screenshot.png" >}}

Suppose we'd like to know \\(P(b^{1} | d^{1}, c^{1})\\), where \\(b^{1}\\) is considered a query variable, and \\(c^{1}\\) is considered evidence varibales. The definition of the [conditional probability]({{< relref "KBhprobability.md#conditional-probability" >}}) gives us:

\begin{equation}
p(b^{1} | d^{1}, c^{1}) = \frac{p(b^{1}, d^{1}, c^{1})}{p(d^{1}, c^{1})}
\end{equation}

To compute \\(p(b^{1}d^{1}c^{1})\\), we first compute:

\begin{equation}
p(b^{1}, d^{1}, c^{1}, E, S)
\end{equation}

and then, use the [law of total probability]({{< relref "KBhprobability.md#law-of-total-probability" >}}) to get:

\begin{equation}
p(b^{1}, d^{1}, c^{1}) = \sum\_{e=E} \sum\_{s=S} p(b^{1}, d^{1}, c^{1}, E, S)
\end{equation}

you will note this is very expensive computationally O(es) --- and if you have like a 1000 hidden variables you will die.

We therefore introduce [sum-product elimination](#sum-product-elimination).


## sum-product elimination {#sum-product-elimination}

You will note the summation in the example above has a lot of interlocking for loops. You can "factor them out" via the [sum-product elimination](#sum-product-elimination) algorithm.

Suppose you are interested in:

\begin{equation}
P(b | d', c')
\end{equation}


### Step 1: write down factors {#step-1-write-down-factors}

Write down all [factor]({{< relref "KBhfactor.md" >}})s associated with this computation:

\begin{equation}
\phi\_{1}(B), \phi\_{2}(S), \phi\_{3}(E,B,S), \phi\_{4}(D,E), \phi\_{5}(C,E)
\end{equation}

we have evidence at two variables: \\(D, C\\).


### Step 2: performing [factor conditioning]({{< relref "KBhfactor.md#factor-conditioning" >}}) for all evidence variables {#step-2-performing-factor-conditioning--kbhfactor-dot-md--for-all-evidence-variables}

Therefore, \\(\phi\_{4}\\) and \\(\phi\_{5}\\) can be replaced by the [factor conditioning]({{< relref "KBhfactor.md#factor-conditioning" >}}) as we observed \\(d, c\\), so we no longer need \\(d, c\\) as input because we know them:

now we have, to replace \\(\phi\_{4}, \phi\_{5}\\):

\begin{equation}
\phi\_{6}(E), \phi\_{7}(E)
\end{equation}


### Step 3: using the [law of total probability]({{< relref "KBhprobability.md#law-of-total-probability" >}}) and [factor product]({{< relref "KBhfactor.md#factor-product" >}}), get rid of hidden variables {#step-3-using-the-law-of-total-probability--kbhprobability-dot-md--and-factor-product--kbhfactor-dot-md--get-rid-of-hidden-variables}

We then choose an ordering of the [hidden variables]({{< relref "KBhinference.md" >}}) and apply a [factor product]({{< relref "KBhfactor.md#factor-product" >}}) using the [law of total probability]({{< relref "KBhprobability.md#law-of-total-probability" >}}) to get rid of them:

-   First get rid of any hidden variables
-   Then use [factor product]({{< relref "KBhfactor.md#factor-product" >}}) to combine results

\begin{equation}
\phi\_{8}(B,S) = \sum\_{E=e} \phi\_{3}(E,B,S) \phi\_{6}(e) \phi\_{7}(e)
\end{equation}

\begin{equation}
\phi\_{9}(B) = \sum\_{S=s} \phi\_{2}(s) \cdot  \phi\_{8}(B,S)
\end{equation}

We now only have two [factor]({{< relref "KBhfactor.md" >}})s left: \\(\phi\_{1}(B)\phi\_{9}(B)\\). We finally apply [factor product]({{< relref "KBhfactor.md#factor-product" >}}) again:

\begin{equation}
\phi\_{10} (B) = \phi\_{9}(B) \cdot \phi\_{1}(B)
\end{equation}


## Approximate Inference {#approximate-inference}

See [Approximate Inference]({{< relref "KBhapproximate_inference.md" >}})


## Gaussian Inference {#gaussian-inference}

See [Inference for Gaussian Models]({{< relref "KBhinference_for_gaussian_models.md" >}})
