+++
title = "runtime monitoring"
author = ["Houjun Liu"]
draft = false
+++

**Goal**: flags situations that might be hazardous when they occur to trigger some fallback mechanism.

Three steps:

1.  check if you are even in the design: [operational design domain monitoring](#operational-design-domain-monitoring)
2.  even if you are, check how certain you are: [uncertainty quantification](#uncertainty-quantification)
3.  once you know what your model is going to do: [failure monitoring](#failure-monitoring)


## operational design domain monitoring {#operational-design-domain-monitoring}

"Out of distribution detection." Insight: if we operate outside of the ODD, our validation results may no longer be valid, so we should monitor whether or not we are in the operational design monitor whether or not we are in the operational design domain.


### Step 1: represent the design domain {#step-1-represent-the-design-domain}

-   requires domain knowledge: hand-design some constraints
-   requires data: take a data driven approach to interpolate one


#### data driven approach {#data-driven-approach}

Take all of the states we saw during validation / in data, and call that "in domain."

We can do some extra interpolation: the set of states that are _near_ our collected states is also in domain---set ODD as the set of the point _near_ in the data set within a certain distance.

<!--list-separator-->

-  nearest neighbor approach

    Two parameters:

    -   threshold---how close does a region has to be to a point to be within domain?
    -   k---we have to be near how many neighbors to be in domain?

<!--list-separator-->

-  bounding set

    We can take a convex hull of the data, but it may be way too conservative. So, we can our data into a few bits (or perhaps cluster them), and then take a convex hull of each bit, and then union them all together.

<!--list-separator-->

-  superlevel set

    we partition our dataset into pieces, and the fit a function for whether or not things are in and out of the operational domain.

    drawback: we need to have data for out of the domain, which is hard. also, we will have to fit distributions, meaning distances needs to be good---often we need to run a PCA to reduce distances being wonky in large dimensions.

    <!--list-separator-->

    -  feature collapse

        You maybe tempted to use some kind of a projection, but then may get [feature collapse](#feature-collapse) whereby stuff that are out of the domain is squished down to something in domain.


## uncertainty quantification {#uncertainty-quantification}

-   output uncertainty: **single input, multiple different possible output** (aleatoric uncertainty / irreducable uncertainty)
-   model uncertainty: **model used to predict system behavior is bad** (epistemic uncertainty / educable uncertainty)

We can cast model uncertainty into output uncertainty by making hte model predict its own variance:


### Bayesian Model Averaging {#bayesian-model-averaging}

Take a Baysian approach averaging over all parameters

\begin{equation}
p\qty(y|x, D) = \int p\qty(y | x, \theta) p\qty(\theta | D) \dd{\theta}
\end{equation}

Say you have a discrete set of models:

\begin{equation}
p \qty(y | x, D) \approx \frac{1}{|\mathcal{M}|} \sum\_{\theta \in \mathcal{M}}^{} p\qty(y | x, \theta)
\end{equation}


## failure monitoring {#failure-monitoring}

just run a bunch of calculations; or perhaps just compute states where we may have a higher probability of failure.
