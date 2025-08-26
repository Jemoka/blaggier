+++
title = "Immunogen Design"
author = ["Houjun Liu"]
draft = false
+++

Using a bunch of signals to create a 3d representation of the system


## features {#features}

-   [cyro-EM]({{< relref "KBhcyro_em.md#manifold-embedding" >}})
-   x-ray
-   tomo
-   glynomics/libidomics
-   genetics


## studying large-scale viron surface protein behavior using MD {#studying-large-scale-viron-surface-protein-behavior-using-md}

"we are so biased by what we can see experimentally, so do MD"


### "breathing" motion {#breathing-motion}

-   proteins of specific virons "breath": oning and closing an entire backbone group; this is not yet quantified in physical modeling
-   when its open, the "breathing open" motion causes the virus to be vunerable
-   so some antibodies jam into the open position


### "head tilting" motion {#head-tilting-motion}

-   when its tilted, there is an [epitope]({{< relref "KBhepitophs.md" >}}) that becomes exposed
-   this is a site that's possible for introduction of what's needed


### overall architecture {#overall-architecture}

-   use conventional MD
-   discover regions of instability (see above for examples) for possible binding surfaces
-   bam inhibition!

maybe at some point run a [cyro-EM]({{< relref "KBhcyro_em.md#manifold-embedding" >}}) to experimentally run some