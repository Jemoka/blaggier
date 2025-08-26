+++
title = "ACL2025 Pagoni: Patches Scale Better Than Tokens"
author = ["Houjun Liu"]
draft = false
+++

## One-Liner {#one-liner}

"Patches in groups of tokenization scale better than tokens"


## Motivation / Novelty {#motivation-novelty}

-   typical byte-level LMs don't are very expensive because many tokens
-   its hard to go beyond 4-6 bytes per token: [Zipf's Law]({{< relref "KBhzipf_s_law.md" >}})
-   so, we model them as [token patch](#token-patch)es


## Notable Methods {#notable-methods}


### token patch {#token-patch}

"how do we segment the byte sequence into patches?" --- insight: group predicable tokens after every hard choice! i.e., once you train a model, there are "obvious"

patcher and unpatcher cross attend


## Key Figs {#key-figs}

-


## New Concepts {#new-concepts}

-


## Notes {#notes}
