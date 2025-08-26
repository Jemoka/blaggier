+++
title = "explainability"
author = ["Houjun Liu"]
draft = false
+++

<div class="definition"><span>

Explainability is the study of, when stuff breaks, understanding why it does.

</span></div>

Here are a set of explainability techniques!


## policy visualization {#policy-visualization}

<div class="definition"><span>

Roll your system out and look at it

</span></div>

Some common strategies that people use to do this:

-   plot the policy: look at what the agent says to do at each state (if you have too many dimensions, just plot slices!)
-   **slicing**: one way to deal with history-dependent trajectories is to then just count the number of actions that your system takes at each step, and plot the argmax of it


## feature importance {#feature-importance}

Our goal is still to understand the contribution of various features to the overall behavior of a system.


### sensitivity analysis {#sensitivity-analysis}

<div class="definition"><span>

[sensitivity analysis](#feature-importance) allows us to understand how a particular output changes when a single feature is changed

-   take a feature
-   screw with it
-   how does it contribute to the variance of the outcomes?

</span></div>

<div class="theorem"><span>

this is really slow

</span></div>

<div class="proof"><span>

....because preturbing each input sequentially is exponential in search space.

</span></div>

So instead, we could consider something like a

<div class="definition"><span>

take the gradient of the output with respect to the input, and measure what they produce

</span></div>

this doesn't really handle gradients that are saturated (i.e. the changes were big, but once you get big enough the function stops changing). So instead, we could consider [integrated gradients](#feature-importance):

<div class="definition"><span>

For function \\(f\\) under test, and feature perturbation \\(x \in [x\_0, x\_1]\\), we compute:

\begin{equation}
\frac{1}{x\_1 - x\_0} \int\_{x\_0}^{x\_1} f\qty(x) \dd{x}
\end{equation}

</span></div>


### shapley values {#shapley-values}

One problem with [sensitivity analysis](#feature-importance) is that competing feature effects neutralizes: that is, if \\(z = x \vee y\\), preturbing \\(x\\) or \\(y\\) alone will not have any influence on the value of \\(z\\). [shapley values](#shapley-values) helps us understand the subsets of features.

<div class="definition"><span>

The Shapley Value is the expectation of the difference across all possible subsets of features.

1.  randomly fix a subset and randomly sample values in the subset
2.  compute the target value
3.  repeat 1-2 with the feature under test included in the randomly sampled subset
4.  compute the difference between the case where you included and not included the target feature
5.  compute the expectation of 4

</span></div>


## surrogate models {#surrogate-models}

see
