+++
title = "cryo-electron microscopy"
author = ["Houjun Liu"]
draft = false
+++

[cyro-EM]({{< relref "KBhcyro_em.md" >}}) is a structure determination system of a **solution** (Dutta, M. 2018. J indian inst sci 98) to analyze a structural population of particles from TEM; the resulting 3-D structures obtained can be analyzed and classified.

"The Resolution Revolution": much better structures to analyze because of high-fidelity [cyro-EM]({{< relref "KBhcyro_em.md" >}})


## cyro-EM vs x-ray crystallography {#cyro-em-vs-x-ray-crystallography}

[cyro-EM]({{< relref "KBhcyro_em.md" >}}) can identify heterogeneous motions throughout the structure, instead of averaging out multiple structural combinations; instead of the "general" structure on average, we can get a collection of various states the particle can be in.


## manifold embedding {#manifold-embedding}

[manifold embedding](#manifold-embedding) is set of methods using [diffusion map]({{< relref "KBhdiffusion_map.md" >}})s to analyze the primary dynamics behavior, not sure what exactly are the methods

<https://cryosparc.com/>


## ensemble reweighting {#ensemble-reweighting}

<http://arxiv.org/abs/2212.05320>

-   take MD =&gt; create "fake" [cyro-EM](#manifold-embedding) images
-   [something happens I didn't catch for cyro-em]
-   then, project back to MD. misfolded elements would then be removed

CHARMM-GUI