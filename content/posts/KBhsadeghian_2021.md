+++
title = "Sadeghian 2021"
author = ["Houjun Liu"]
tags = ["ntj"]
draft = false
+++

DOI: 10.3389/fcomp.2021.624594

(<a href="#citeproc_bib_item_1">Sadeghian, Schaffer, and Zahorian 2021</a>)


## One-Liner {#one-liner}

Using a [genetic algorithm]({{< relref "KBhgenetic_algorithum.md" >}}), picked features to optimize fore; achieved \\(94\\%\\) with just [MMSE]({{< relref "KBhmmse.md" >}}) data alone (ok like duh me too). Developed [ASR]({{< relref "KBhasr.md" >}}) tool to aid.


## Novelty {#novelty}

-   Developed an [ASR]({{< relref "KBhasr.md" >}}) methodology for speech, complete with punctuations
-   Used a [genetic algorithm]({{< relref "KBhgenetic_algorithum.md" >}}) to do feature selection; NNs performed worse because "space is smaller???"


## Notable Methods {#notable-methods}


### Used a GRU to insert punctuations {#used-a-gru-to-insert-punctuations}

{{< figure src="/ox-hugo/2022-06-23_23-44-59_screenshot.png" >}}

The paper leveraged the nuke that is a bidirectional GRU, ATTENTION,


## Key Figs {#key-figs}

{{< figure src="/ox-hugo/2022-06-24_00-00-56_screenshot.png" >}}

Fully automated ANN transcript does pretty well in terms of classifier AD/NL.


## New Concepts {#new-concepts}

-   [fusion]({{< relref "KBhfusion.md" >}})
-   [genetic algorithm]({{< relref "KBhgenetic_algorithum.md" >}})
-   [MMSE]({{< relref "KBhmmse.md" >}})


## Notes {#notes}

very confusing (too many things going on at once)