+++
title = "Shah 2021"
author = ["Houjun Liu"]
tags = ["ntj"]
draft = false
+++

DOI: 10.3389/fcomp.2021.624659


## One-Liner {#one-liner}

Multi-feature [late fusion]({{< relref "KBhfusion.md#late-fusion" >}}) of NLP results (by normalizing text and n-gram processing) with [OpenSMILE]({{< relref "KBhopensmile.md" >}}) embedding results.


## Novelty {#novelty}

NLP transcript normalization (see methods) and [OpenSMILE]({{< relref "KBhopensmile.md" >}}); otherwise similar to [Martinc 2021]({{< relref "KBhmartinc_2021.md" >}}). Same gist but different data-prep.


## Notable Methods {#notable-methods}

-   N-gram processed the input features
-   Used WordNet to replace words with roots


## Key Figs {#key-figs}

{{< figure src="/ox-hugo/2022-06-24_22-28-18_screenshot.png" >}}


## New Concepts {#new-concepts}

-   [OpenSMILE]({{< relref "KBhopensmile.md" >}})