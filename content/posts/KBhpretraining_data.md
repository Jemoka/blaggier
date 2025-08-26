+++
title = "Pretraining Data"
author = ["Houjun Liu"]
draft = false
+++

## Problems of pre-training data {#problems-of-pre-training-data}

1.  pre-training influence downstream capabilities
2.  ...and therefore can escape into model generation
3.  real world users expect novelty


## Changes in Distribution {#changes-in-distribution}


### Big Pretraining Data {#big-pretraining-data}


#### GPT2 {#gpt2}

-   deduplicated data
-   Removed Wikipedia (to prevent data leak)
-   Heuristic based cleaning


#### GPT3 {#gpt3}

-   Deduplicated
-   based on leaked data


#### Llama {#llama}

the usual spheal

-   removed high perplexity data using wiki n-gram model
-   removed non-English
-   deduplicated


#### Llama 2 {#llama-2}

-   removed high volue of PII
-   Removed non-english


### Pretraining Curation Decisions {#pretraining-curation-decisions}

-   what to include
-   what is the timestamp being scraped
-   heuristic based cleaning? data cleaning? etc.
-   language filtering (only take English?)
-   PII removal
-   dedup
-   Toxicity + SafeURL filtering
-   "quality filtering"
-   sampling distributions


### Change in Model Age {#change-in-model-age}

Good alignment shown between validation year and pre-training year, even mixing in older data.

Implication: "fine-tuned T5 may still be worse than fine-tuned llama, because T5 was **pretrained** using older data---despite even if FTing is newer"


### Change in Toxicity {#change-in-toxicity}

Filtering toxicity made the model worst at spotting toxicity.


### Change in Data Distribution {#change-in-data-distribution}

out of domain answers do worse on out of domain results


## Reduce Memorization {#reduce-memorization}

1.  de-duplication using **approximate matching**
2.  think carefully for multiple-epoch training (what is ok to memorize?)
3.  remove sensitive memorization from pre-training data

Two iffy strategies:


### Check for memorization {#check-for-memorization}

Trivial style transfers can get around safety checks "do the [copyrighted thing] in French"; "do the [copyrighted thing] with double the spaces".


### Use RLHF or something {#use-rlhf-or-something}

"hide flaws, and not eliminate them"---edge case problems doesn't eliminate the underlying vulnerability.
