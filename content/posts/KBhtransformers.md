+++
title = "old Transformers"
author = ["Houjun Liu"]
draft = false
+++

[Transformers]({{< relref "KBhtransformers.md" >}}) has replaced large pipelines into a single system.

"[Transformers]({{< relref "KBhtransformers.md" >}}) verticalized tasks in 2013 EMNLP; various domains"


## Process {#process}

1.  Multiple manual systems that talk to each other has been replaced by neurons talking to each other
2.  General word embeddings like Word2Vec
3.  Sequence to sequence modeling from those vecs that are more general: learning variable length representations
4.  From LSTMs to Encoder-Decoder architectures: Google Neural Machine Translation System 2016 (LSTM seq2seq SoTA)

So: big complicated pipelines turn into one homogeneous system.


### Big LSTM Problems and their Solutinos {#big-lstm-problems-and-their-solutinos}

LSTMs crush the entire sequence into one embedding, which is bad because there's no representation between inputs.

[Convolution]({{< relref "KBhrandom_variables.md#adding-random-variables" >}})s begin to solve this problem by looking at the local interactions to learn about the structure of the problem.

Self-attention does this massively: capturing token-to-token interactions in a parallelization fashion.


### Transformer Motivation {#transformer-motivation}

Motivation: convolutions allows parallelism, "can we read and write in parallel instead of left to right generation?"

no. decoding in parallel sucks apparently.

1.  the ordering is hard: we don't know how the outputs should be ordered; generating all at once assumes the output are conditionally independent
2.  each ordering selection narrows the posterior space and it makes generation easier

But we can still read in parallel unlike LSTMs which is BASED.

Self attention is actually faster too, because convolutions are \\(O(knd^{2})\\) but self attention happens without convolving with only \\(O(nd^{2})\\).

"Processing" happens through contractions/expansions like ResNet.


### Multi-Head Attention {#multi-head-attention}

Language modeling: "who did what to whom"?

A single self-attention only can capture one of those W relationships. The best in can do (because of softmax) is to do a weighted average of the inputs.


### Position encodings {#position-encodings}

Because adding is commutative, attention is permutation invariant so we have to add a positional encoding.

In theory we want length invariant models, which requires long term embeddings. Absolute embeddings, when generation length becomes too long, you end up with degration as length increases


## Next Steps {#next-steps}


### Long-Form Retrival {#long-form-retrival}

There are ways of doing "structured sparse attention", an input modulated sparse matrix for attention that saves a lot of flops. So, we can do long form contexts eventually by playing with this area of retrival.


### Liking Physics {#liking-physics}

"You want to make physics your friend"

Convolutions and self attention moves memory between GPU HBM and GPU SRAM a lot: four different move/load operations. That's not a FLOP problem. How do we fix that?

1.  multi-query/group query approach: reduce read heads: n&lt;d key and n&lt;d values; a bunch of queries attend to the same keys and values---loose fidelity but less loads
2.  Softmax improvements to improve performance
