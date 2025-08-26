+++
title = "SU-CS238 SEP282023"
author = ["Houjun Liu"]
draft = false
+++

## Notation {#notation}


### shorthand for probability {#shorthand-for-probability}

Take

\begin{equation}
P(X = 1) = \frac{1}{6}
\end{equation}

We can write this in short hand like:

\begin{equation}
P(X^{1}) = P(X=1) = \frac{1}{6}
\end{equation}


### \\(P\\) vs \\(p\\) {#p-vs-p}

Upper case \\(P\\) for [probability mass function]({{< relref "KBhprobability_distributions.md#probability-mass-function" >}}) (one shot chance), lower case \\(p\\) for [probability density functions]({{< relref "KBhprobability_distributions.md#probability-density-functions" >}}) (integral)


## New Concepts {#new-concepts}

-   [degrees of belief]({{< relref "KBhprobability_theory.md" >}}) and [describing them using the language of probability]({{< relref "KBhprobability_theory.md#language-of-probability" >}})
-   [discrete distribution]({{< relref "KBhdiscrete_distribution.md" >}}) and [continuous distribution]({{< relref "KBhcontinuous_distribution.md" >}}) and [joint probability distribution]({{< relref "KBhjoint_probability_distribution.md" >}})
    -   **important tools**:
        -   [parameters of a distribution]({{< relref "KBhparameter.md" >}})
        -   [probability density functions]({{< relref "KBhprobability_distributions.md#probability-density-functions" >}})
        -   [cumulative distribution function]({{< relref "KBhprobability_distributions.md#cumulative-distribution-function" >}})
        -   [quantile function]({{< relref "KBhprobability_distributions.md#quantile-function" >}})
-   fun [probability distributions]({{< relref "KBhprobability_distributions.md" >}})
    -   [Gaussian distribution]({{< relref "KBhprobability_distributions.md#gaussian-distribution" >}}) + [Truncated Gaussian distribution]({{< relref "KBhprobability_distributions.md#truncated-gaussian-distribution" >}})
    -   [uniform distribution]({{< relref "KBhprobability_distributions.md#uniform-distribution" >}})
-   [conditional probability]({{< relref "KBhprobability.md#conditional-probability" >}}) and  [Bayes Theorem]({{< relref "KBhbayes_theorem.md" >}})
    -   unique models that leverage [conditional probability]({{< relref "KBhprobability.md#conditional-probability" >}})
        1.  [conditional Gaussian models]({{< relref "KBhconditional_gaussian_models.md" >}})
        2.  [linear gaussian model]({{< relref "KBhlinear_gaussian_model.md" >}})
        3.  conditional linear Gaussian models: use your big brain to add up 1) and 2), with continuous [random variable]({{< relref "KBhrandom_variables.md" >}})s \\(X, Y\\), and a discrete \\(Z\\), where \\(p(x \mid y, z)\\).
        4.  [sigmoid model]({{< relref "KBhsigmoid.md" >}})
-   [Baysian Network]({{< relref "KBhbaysian_network.md" >}}) and [conditional independence]({{< relref "KBhbaysian_network.md#conditional-independence" >}})
    -   [d seperation]({{< relref "KBhbaysian_network.md#checking-for-conditional-independence" >}})


## Important Results / Claims {#important-results-claims}

-   [history and impact of decision making]({{< relref "KBhdecision_making_history.md" >}})
-   [law of total probability]({{< relref "KBhprobability.md#law-of-total-probability" >}})
-   fun axioms
    -   belief axioms:
        -   [universal comparability]({{< relref "KBhprobability_theory.md#universal-comparability" >}})
        -   [transitivity]({{< relref "KBhprobability_theory.md#transitivity" >}})
    -   probability axioms:
        -   [axiom of probability]({{< relref "KBhprobability.md#axiom-of-probability" >}})
-   [Methods of Compressing the Parameters of a Distribution]({{< relref "KBhprobability_distributions.md#methods-of-compressing-the-parameters-of-a-distribution" >}})
    -   assuming [independence]({{< relref "KBhprobability.md#independence" >}})
    -   using a [decision tree]({{< relref "KBhprobability_distributions.md#decision-tree" >}})
-   [checking for conditional independence]({{< relref "KBhbaysian_network.md#checking-for-conditional-independence" >}})


## Questions {#questions}
