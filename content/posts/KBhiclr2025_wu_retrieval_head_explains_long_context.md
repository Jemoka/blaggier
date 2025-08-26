+++
title = "ICLR2025 Wu: Retrieval Head Explains Long Context"
author = ["Houjun Liu"]
draft = false
+++

## Motivation {#motivation}

Previous works contain "heads" that perform some specific mechanism from context retrieval.


## Retrieval Head {#retrieval-head}

Authors shows that [Retrieval Head](#retrieval-head)s exist in transformers: using Needle in a Haystack framework.


## Key Insight {#key-insight}

There exists certain heads which performs retrieval, as measured by the [retrieval score](#measuring-retrieval-behavior).


## Methods {#methods}


### Measuring Retrieval Behavior {#measuring-retrieval-behavior}

"retrieval score": how often does a head engage in copy-paste behavior.

1.  **token inclusion**: current generated token \\(w\\) is in the edle
2.  **maximal attention**: same token gives the maximum attenion score
