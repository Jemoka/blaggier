+++
title = "ICLR2025 Neitemeier: Hierachical Autoregressive Transformers"
author = ["Houjun Liu"]
draft = false
+++

"A Byte Level transformer, with some compression"

**Key insight**: use a [CLS] token in front of every word to train a small "tokenizer", and then do a normal transformer on the [CLS] tokens, and then autoregressive decode out the single bytes.


## Method {#method}


### Hierarchical Autoregressive Transformers {#hierarchical-autoregressive-transformers}

We put a [cls] in front of every word. So the input looks like

```nil
[CLS] M y _ [CLS] n a m e _ [CLS] i s
```

We then run a small encoder over each sequence. And then you take the encoded [CLS], and run


### Dynamically Allocating Compute {#dynamically-allocating-compute}

You can dynamically allocate [CLS] tokens.
