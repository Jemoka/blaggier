+++
title = "ACL2025 Li: TokAlign Token Alignment"
author = ["Houjun Liu"]
draft = false
+++

Method to adapt tokenization across models.


## Notable Methods {#notable-methods}

1.  use pairwise cosine similarity between token embeddings to create a grid of alignment
2.  initialize new adapted embeddings for each id's most similar tokens
3.  tune
