+++
title = "GenSLMs"
author = ["Houjun Liu"]
draft = false
+++

[GenSLMs]({{< relref "KBhgenslms.md" >}}) are a LLM, but genome sequence

1.  Take genome sequence
2.  Throw transformers at it
3.  create "semantic embedding"
4.  autoregression happens

This is trained as a [foundational model]({{< relref "KBhfoundational_model.md" >}}) to organize the genomic sequence

Turns out, the embedding space above can be used to discover relations. See [proteins can be encoded as hierarchies]({{< relref "KBhfundational_models_of_interaction_analysis.md#proteins-can-be-encoded-as-hierarchies" >}})