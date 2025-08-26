+++
title = "compositional scene representation"
author = ["Houjun Liu"]
draft = false
+++

[compositional scene representation]({{< relref "KBhscene_representation.md" >}}) is the process of trying to represent a certain visual signal into its constituent parts.

Aim: unsupervised segmentation + representation

-   the model finds the most intuitive representations of the scene
-   train segmentation and representation together

Autoencoding segmentation! Segment =&gt; Represent =&gt; Resegment =&gt; etc.

[Gaussian Mixture Model]({{< relref "KBhgaussian_mixture_model.md" >}})???? over pixels: regularizes by taking [KL Divergence]({{< relref "KBhkl_divergence.md" >}}) between latent and predicted output, to force them to be similar.

**Loss: error in RECONSTRUCTION and KL-Divergence of latent space**