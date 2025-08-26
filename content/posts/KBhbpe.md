+++
title = "Byte-Pair Encoding"
author = ["Houjun Liu"]
draft = false
+++

[BPE]({{< relref "KBhbpe.md" >}}) is a common [Subword Tokenization]({{< relref "KBhtokenization.md#subword-tokenization" >}}) scheme.


## Training {#training}

1.  choose two symbols that are most frequency adjacent
2.  merge those two symbols as one symbol throughout the text
3.  repeat to step \\(1\\) until we merge \\(k\\) times

<!--listend-->

```python
v = set(corpus.characters())
for i in range(k):
    tl, tr = get_most_common_bigram(v)
    tnew = f"{tl}{tr}"
    v.push(tnew)
    corpus.replace((tl,tr), tnew)
return v
```

Most commonly, [BPE]({{< relref "KBhbpe.md" >}}) is not ran alone: it usually run **inside** space separation systems. Hence, after each word we usually put a special `_` token which delineates end of word.

Hence: "pink fluffy unicorn dancing on rainbows" becomes

```nil
p i n k _ f l u f f y _ u n i c o r n _ d a n c i n g _ o n _ r a i n b o w s
```


## Inference {#inference}

During inference time, we apply our stored merges **in the order we learned them**. As in, if we merged `er` first during training, we should do that first during inference before merging say `n er`.

Frequent subwords often ends up being [morpheme]({{< relref "KBhmorpheme.md" >}})s.
