+++
title = "SU-CS224N APR252024"
author = ["Houjun Liu"]
draft = false
+++

## [Transformers]({{< relref "KBhtransformers.md" >}}) {#transformers--kbhtransformers-dot-md}


### Motivation {#motivation}


#### Lower Sequence-Length Time Complexity {#lower-sequence-length-time-complexity}


#### Minimize Linear Interaction Distance {#minimize-linear-interaction-distance}

The interaction distances scale by \\(O(l)\\) with \\(l\\) sequence length---gradient is affected by linear interaction distance: linear order is baked in.


#### Maximize Parallelization {#maximize-parallelization}

Forward and backward passes require waiting (waiting for it to roll from left to right)----instead, you can compute attention in parallel.


### Key Advantage {#key-advantage}

1.  Maximum interaction distance is \\(O(1)\\) --- each word is connected to each other word
2.  Unparallizable operation does not increase by sequence length


### Self-Attention {#self-attention}

Self-attention is formulated as each word in a sequence attending to each word in the same sequence.


#### Calculating QKV {#calculating-qkv}

\begin{equation}
\begin{cases}
q\_{i} = W^{(Q)} x\_{i}\\\\
k\_{i} = W^{(K)} x\_{i}\\\\
v\_{i} = W^{(V)} x\_{i}\\\\
\end{cases}
\end{equation}

and then you have a standard good time using [reduced-rank multiplicative attention]({{< relref "KBhsu_cs224n_apr232024.md#reduced-rank-multiplicative-attention" >}}):

\begin{equation}
e\_{ij} = q\_{i} \cdot k\_{j}
\end{equation}

and normalize:

\begin{equation}
a\_{ij} = \text{softmax} (e\_{ij})
\end{equation}

to obtain:

\begin{equation}
O\_{i} = \sum\_{j}^{} a\_{ij} v\_{j}
\end{equation}

---

Vectorized:

\begin{equation}
\begin{cases}
Q = W^{(Q)} x\\\\
K = W^{(K)} x\\\\
V = W^{(V)} x\\\\
\end{cases}
\end{equation}

and

<!--list-separator-->

-  scale dot-product attention

    \begin{equation}
    Out = \text{softmax} \qty(\frac{QK^{\top}}{\sqrt{d\_{k}}}) V
    \end{equation}

    why divide by \\(\sqrt{d\_{k}}\\)? see [Tricks in Training](#tricks-in-training).


### Transformer Block {#transformer-block}

Naively having [Self-Attention](#self-attention) can be described as simply a rolling average. To introduce nonlinearity, we apply a linear layer with a ReLU after.


### Tricks in Training {#tricks-in-training}

1.  skip connections \\(x\_{l} = F(x\_{l-1})+x\_{l-1}\\)
2.  layernorm (normalize each layer to mean zero and standard deviation of one, so we protect against lower layer's distribution shifts) \\(x^{(l')} = \frac{x^{(l)}- \mu^{(l)}}{\sigma^{(l)} + \epsilon}\\) we use **population mean and population standard deviation**
    1.  mean of sum is sum of means, meaning after this the input would have mean \\(0\\) which is good
    2.  yet, the mean of variance is sum of variance, so for dimension \\(d\\), the resulting one-variant layer becomes d-variant. so, we normalize our attention by \\(d\_{k}\\)


### Word Order {#word-order}


#### Sinusoidal Position Embeddings {#sinusoidal-position-embeddings}

No one uses it lol. ABSOLUTE position doesn't really matter. See [Relative Position Embeddings](#relative-position-embeddings).


#### Relative Position Embeddings {#relative-position-embeddings}

Relative positions are LEARNED and added to the self-attention outputs.

so we learn embeddings


### Multi-Head Attention {#multi-head-attention}

Perform attention multiple times, get a series of SA embeddings and concatenate. For each single head, divide by number of heads (so you end up doing the same amonut of computation)


## Transformer Drawbacks {#transformer-drawbacks}

1.  quadratic compute of self-attention (computing pairs of interaction means that the computation grows **quadratic**) --- linformer, attempts to solve this
