+++
title = "belief"
author = ["Houjun Liu"]
draft = false
+++

[belief]({{< relref "KBhbelief.md" >}}) is a [probability distribution]({{< relref "KBhprobability_distributions.md" >}}) over your states.

"an informational state decoupled from motivational states"

\begin{equation}
b \leftarrow update(b,a,o)
\end{equation}

There are two main flavours of how to represent beliefs

-   **parametric**: belief distribution is fully represented over all states by a set of parameters (categorical, [gaussian]({{< relref "KBhgaussian_distribution.md" >}}), etc.)
-   **non-parametric**: belief is represented by a non-weighted list of possible locations of where you are; such as a [Particle Filter]({{< relref "KBhfilters.md#particle-filter" >}})

---

To update **parametric** beliefs, we can use a [discrete state filter]({{< relref "KBhfilters.md#discrete-state-filter" >}}) (for categorical belief distributions) or a [Kalman Filter]({{< relref "KBhfilters.md#kalman-filter" >}}) (for linear Gaussian). To update **non-parametric** beliefs, we can use a [Particle Filter]({{< relref "KBhfilters.md#particle-filter" >}}).

If we have an **parametric** belief that's not categorical nor linear Gaussian, we can use [Extended Kalman Filter]({{< relref "KBhfilters.md#extended-kalman-filter--kbhfilters-dot-md" >}}) or [Unscented Kalman Filter]({{< relref "KBhfilters.md#unscented-id-6800e7a8-729c-4654-adcc-e0f877079b6a-kalman-filter" >}}) to approximate a belief update.

---


## belief update {#belief-update}

-   To [update belief](#belief-update), we need to initialize it somehow.
    -   If you have no knowledge of the situation, you want to **diffuse** your initial distributions because you don't want to be overconfident
    -   For non-parametric situations, this may cause logistical problems; so, you may need to make many observations before you can be confident enough to seed a belief
-


## observation model {#observation-model}

\\(O(o|a,s')\\) is a model for what observations we may get if we are in a particular state/action.


### error model {#error-model}

there is some model which is a probability distribution over the state given observation:

{{< figure src="/ox-hugo/2023-11-09_10-01-10_screenshot.png" >}}

let orange \\(d\\) be state, the green would be the [error model](#error-model)


### [filters]({{< relref "KBhfilters.md" >}}) {#filters--kbhfilters-dot-md}

[filters]({{< relref "KBhfilters.md" >}}) are how [belief]({{< relref "KBhbelief.md" >}})s are updated from observation. "we want to perform localization"
