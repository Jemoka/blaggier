+++
title = "ICLR2025 Yue: Inference Scaling for Long-Context RAG"
author = ["Houjun Liu"]
draft = false
+++

"RAG performance can scale almost linearly w.r.t. log inference FLOPs"


## Demonstration Based RAG (DRAG) {#demonstration-based-rag--drag}


### Method {#method}

Adding demonstrations as k in-context examples.

Prompt: documents, input query, final answer.

Parameters: number of documents, number of in context samples, number of iterations upper bound.


## Iterative Demonstration Based RAG (IterDRAG) {#iterative-demonstration-based-rag--iterdrag}


### Method {#method}

DRAG above, and then the model can generate a new sub-query. The model decides

Parameters: number of documents, number of in context samples, number of iterations upper bound.
