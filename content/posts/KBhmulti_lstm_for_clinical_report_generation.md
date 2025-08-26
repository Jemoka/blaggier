+++
title = "Multi-LSTM for Clinical Report Generation"
author = ["Houjun Liu"]
draft = false
+++

Take X-Rays and generate clinical reports.


## Method {#method}

**encoder decoder architectures**


### Encoder {#encoder}

**ConViT**: convolutional vision transformer. Special thing: we swap out the attention


#### Double Weighted Multi-Head Attention {#double-weighted-multi-head-attention}

We want to force the model to focus on one thing, so we modulate the model based on the weights of other: if one head is big, we make the other head small.

where \\(w\_{\cos i} = \frac{\sum\_{i}^{} \cos \qty (att\_{a}, att\_{base})}{N}\\)

\begin{equation}
w = w\_{a} \cdot (1- w\_{\cos i})
\end{equation}

meaning:

\begin{equation}
att\_{dwma} = w \cdot att
\end{equation}


### Decoding {#decoding}

Goood ol' **Hierarchical-Decoder**
