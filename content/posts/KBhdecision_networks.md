+++
title = "decision network"
author = ["Houjun Liu"]
draft = false
+++

A [decision network]({{< relref "KBhdecision_networks.md" >}}) is a [Baysian Network]({{< relref "KBhbaysian_network.md" >}}) which is used to make decisions based on optimizing [utility]({{< relref "KBhutility_theory.md" >}}).

To solve a problem, we iterate through all possible decision parameters to find the one that maximizes utility.


## Nodes {#nodes}

1.  chance nodes: random variables --- some inputs we can observe, some are latent variables we can't observe --- circles
2.  action nodes: what we have control over --- squares
3.  [utility]({{< relref "KBhutility_theory.md" >}}) nodes: output, what the results would be; we typically sum utilities together if you have multiple of them --- diamonds


## Edges {#edges}

1.  conditional edge - arrows to chance nodes: conditional [probability]({{< relref "KBhprobability.md" >}}) edges
2.  informational edge - arrows to action nodes: this information is used to inform choice of action
3.  functional edge - arrows to utility nodes: computes how the action affects the world


## Example {#example}

{{< figure src="/ox-hugo/2023-10-12_12-27-32_screenshot.png" >}}

For \\(U\\), for instance, you can have a [factor]({{< relref "KBhfactor.md" >}}) that loks ilke:
