+++
title = "SU-CS224N MAY072024"
author = ["Houjun Liu"]
draft = false
+++

## Benchmark tradeoffs {#benchmark-tradeoffs}

-   baseline too high: no one can beat it
-   baseline too low: no differentiation


## Close-ended evaluation {#close-ended-evaluation}

-   do standard ML ("accuracy")
-   because there's one of a few known answers
-   types of tasks: SST, IMDP, Yelp; SNLI

Most common multi-task benchmark: SuperGLUE


### Difficult {#difficult}

-   what metrics do you choose?
-   how to aggregate across metrics (average?)
-   label statistics
-   spurious correlations


## Open-ended evaluations {#open-ended-evaluations}

-   long generations with too many correct answers (can't directly apply classic ML)
-   there are better and worse answers (relative)


### Content Overlap Metrics {#content-overlap-metrics}

compare lexical similarity between generated and gold text:


#### usually n-gram overlap metrics {#usually-n-gram-overlap-metrics}

(BLEU (usually considered a precision metric), ROUGE (usually considered a recall metric), METEOR, CIDEr, etc.)

-   doesn't consider semantic relatedness
-   but is fast!


#### Semantic metrics {#semantic-metrics}

-   BERTSCORE: get contextual embeddings of a sequence using a Bert, do some contextual smart averaging things
-   Word Embeddings: averaging all the embeddings and compare them
-   BLEURT: pretrain Bert, continual pretrain a Bert on BLEU, then fine tune on human annotation data


### Model Based Metrics {#model-based-metrics}

AlpacaEval and MT-Bench: asking GPT4 to scoring a particular sample.

-   self bias worries
-   length normalization


### Humans! {#humans}

automatic evaluations need to compared against what humans could have. "ask humans to evaluate some axis ("fluency", "coherence", etc.)"

-   slow
-   expensive
-   inter-annotator disagreement
-   intra-annotator (time) disagreement
-   not reproducable
-   is a measure of precision, not recall
