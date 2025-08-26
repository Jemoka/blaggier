+++
title = "SU-CS154 Week 8"
author = ["Houjun Liu"]
draft = false
+++

[NP-Complete]({{< relref "KBhnp_complete.md" >}}), [Cook-Levin Theorem]({{< relref "KBhcook_levin_theorem.md" >}}), and [coNP]({{< relref "KBhconp.md" >}})


## owo a chart! {#owo-a-chart}

{{< figure src="/ox-hugo/2024-11-11_23-51-18_screenshot.png" >}}


## Properties of NP Completeness {#properties-of-np-completeness}

for \\(NP\\) complete \\(A\\), \\(B\\), is \\(A\ \text{op}\ B\\) np complete?

| ^ | V | R | neg | . | \* |
|---|---|---|-----|---|----|
| n | n | y | ?   | n | n  |


## Properties of P and NP {#properties-of-p-and-np}

for \\(P\\) or \\(NP\\) \\(A\\), \\(B\\), is \\(A\ \text{op}\ B\\) np complete?

| Time | ^ | V | R | neg | . | \* |
|------|---|---|---|-----|---|----|
| P    | y | y | y | y   | y | y  |
| NP   | y | y | y | ?   | y | y  |
