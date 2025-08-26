+++
title = "Guo 2021"
author = ["Houjun Liu"]
tags = ["ntj"]
draft = false
+++

DOI: 10.3389/fcomp.2021.642517


## One-Liner {#one-liner}

Used WLS data to augment [CTP]({{< relref "KBhctp.md" >}}) from [ADReSS Challenge]({{< relref "KBhadress_challenge.md" >}}) and trained it on a BERT with good results.


## Novelty {#novelty}

-   Used WLS data with [CTP]({{< relref "KBhctp.md" >}}) task to augment ADReSS [DementiaBank]({{< relref "KBhdementiabank.md" >}}) data


## Notable Methods {#notable-methods}

WLS data is not labeled, so authors used [Semantic Verbal Fluency]({{< relref "KBhsemantic_verbal_fluency.md" >}}) tests that come with WLS to make a presumed conservative diagnoses. Therefore, control data is more interesting:


## Key Figs {#key-figs}


### Table 2 {#table-2}

{{< figure src="/ox-hugo/2022-06-25_11-27-14_screenshot.png" >}}

Data-aug of [ADReSS Challenge]({{< relref "KBhadress_challenge.md" >}}) data with WSL controls (no presumed AD) trained with a BERT. As expected the conservative control data results in better ferf


## New Concepts {#new-concepts}

-   [ADReSS Challenge]({{< relref "KBhadress_challenge.md" >}}) is small so use WLS to augment it