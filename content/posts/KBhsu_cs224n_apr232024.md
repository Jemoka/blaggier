+++
title = "SU-CS224N APR232024"
author = ["Houjun Liu"]
draft = false
+++

## Evaluating Machine Translation {#evaluating-machine-translation}


### BLEU {#bleu}

Compare machine vs. multiple-human reference translations. Uses [N-Gram]({{< relref "KBhn_grams.md" >}}) geometric mean---the actual n gram size isn't super special.

Original idea to have **multiple reference translations**---but maybe people to do this only one reference translation---good score **in expectation**.


#### Limitations {#limitations}

-   good translation can get a bad BLEU because it has low n gram overlap
-   penalty to too-short system translations (i.e. translating only easy sentences isn't a good metric)
-   you really can't get to 100 in BLEU because of variations in text


## attention {#attention}

Given a vector of **values**, a vector **query**, attention is a technique to compute a weighted sum of the values depending on the query.


### motivation {#motivation}

machine translation problem---naive [LSTM]({{< relref "KBhsu_cs224n_apr182024.md#lstm" >}}) implementation has to stuff the entire information about a sentence into a single ending vector.

-   improves performance
-   more human like model for the MT
-   solves the bottleneck problem
-   helps solving [Vanishing Gradients]({{< relref "KBhsu_cs224n_apr182024.md#vanishing-gradients" >}})
-   interoperability --- provides soft phrase-level alignments, and know what is being translated


### implementation {#implementation}

**each step of the decoder, we will insert direct connections to the encoder to look at particular parts of the input source sequence**

dot every output state against every input state, softmax and add against the source sequence input.

with encoder \\(h\_{j}\\) and decoder \\(s\_{k}\\):


#### dot product attention {#dot-product-attention}

\begin{align}
e\_{i} = s^{T} h\_{i}
\end{align}

**limitation**: LSTM latent layers are a little bit too busy---some of the information is not as useful as others---also forces everything to have dimension-to-dimension match


#### multiplicative attention {#multiplicative-attention}

"learn a map from encoder vectors to decoder vectors---working out the right place to pay attention by learning it"

\begin{equation}
e\_{i} = s^{T} W h\_{i}
\end{equation}

**limitation**: lots of parameters to learn in \\(W\\) for no good reason


#### reduced-rank multiplicative attention {#reduced-rank-multiplicative-attention}

\begin{equation}
e\_{i} = s^{T} Q R h\_{i} = (Q s^{T})^{T} (R h\_{i})
\end{equation}

essentially, why don't we project \\(s\\) and \\(h\\) down to smaller dimensions before the dot product is taken?

this motivates also transformers


#### additive attention {#additive-attention}

\begin{equation}
e\_{i} = v^{T} \text{tanh} \qty(W\_1 h\_{i} + W\_{2} s)
\end{equation}

where \\(v\\) and \\(W\_{j}\\) are learned.
