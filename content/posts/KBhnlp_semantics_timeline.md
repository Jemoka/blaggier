+++
title = "NLP Semantics Timeline"
author = ["Houjun Liu"]
draft = false
+++

-   1990 static word embeddings
-   2003 neural language models
-   2008 multi-task learning
-   2015 attention
-   2017 transformer
-   2018 trainable contextual word embeddings + large scale pretraining
-   2019 prompt engineering


## Motivating Attention {#motivating-attention}

Given a sequence of embeddings: \\(x\_1, x\_2, ..., x\_{n}\\)

For each \\(x\_{i}\\), the goal of attention is to **produce a new embedding** of each \\(x\_{i}\\) named \\(a\_{i}\\) based its dot product similarity with all other words that are before it.

Let's define:

\begin{equation}
score(x\_{i}, x\_{j}) = x\_{i} \cdot x\_{j}
\end{equation}

Which means that we can write:

\begin{equation}
a\_{i} = \sum\_{j \leq i}^{} \alpha\_{i,j} x\_{j}
\end{equation}

where:

\begin{equation}
\alpha\_{i,j} = softmax \qty(score(x\_{i}, x\_{j}) )
\end{equation}

The resulting \\(a\_{i}\\) is the output of our attention.


## Attention {#attention}

From the above, we call the input embeddings \\(x\_{j}\\) the **values**, and we will create a separate embeddings called **key** with which we will measure the similarity. We call the word we want the target new embeddings for the **query** (i.e. \\(x\_{i}\\) from above).
