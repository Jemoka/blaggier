+++
title = "tokenization"
author = ["Houjun Liu"]
draft = false
+++

Every NLP task involve some kind of text normalization.

1.  tokenizing words
2.  normalizing word formats (lemmatize?)
3.  sentence and paragraph segmentation

For Latin, Arabic, Cyrillic, Greek systems, spaces can usually be used for tokenization. Other writing systems can't do this. See [morpheme]({{< relref "KBhmorpheme.md" >}})


## Subword Tokenization {#subword-tokenization}

Algorithms for breaking up tokens using [corpus]({{< relref "KBhcorpus.md" >}}) statistics which acts on lower-than-word level.

-   [BPE]({{< relref "KBhbpe.md" >}})
-   Unigram Language Modeling tokenization
-   WordPiece

They all work in 2 parst:

-   a token **learner**: takes training corpus and derives a vocabulary set
-   a token **segmenter** that tokenizes text according to the vocab

See also [Downsides of Subword Tokenization]({{< relref "KBhiclr2025_tokenizer_free_approaches.md#downsides-of-id-ea3f9d36-0439-436e-96c1-f31ed3004346-subword-tokenization" >}})


## tr {#tr}

For those languages, you can use these systems to perform tokenization.

```bash
tr -sc "A-Za-z" "\n" < input.txt
```

this takes every form which is not text (`-c` is the complement operator) and replaces it with a newline. `-s` squeezes the text so that there are not multiple newlines.

This turns the text into one word per line.

Sorting it (because `uniq` requires it) and piping into `uniq` gives word count

```bash
tr -sc "A-Za-z" "\n" < input.txt | sort | uniq
```

We can then do a reverse numerical sort:

```bash
tr -sc "A-Za-z" "\n" < input.txt | sort | uniq | sort -r -n
```

which gives a list of words per frequency.

This is a **BAD RESULT** most of the time: some words have punctuation with meaning that's not tokenizaiton: `m.p.h.`, or `AT&T`, or `John's`, or `1/1/12`.


## What to Tokenize {#what-to-tokenize}

"I do uh main- mainly business data processing"

-   `uh`: filled pause
-   `main-`: fragments

Consider:

"Seuss's cat in the cat is different from other cats!"

-   `cat` and `cats`: same [lemma]({{< relref "KBhtokenization.md" >}}) (i.e. stem + part of speech + word sense)
-   `cat` and `cats`: different [wordform]({{< relref "KBhtokenization.md" >}})s

We usually consider a [token]({{< relref "KBhtokenization.md" >}}) as distinct [wordform]({{< relref "KBhtokenization.md" >}}), counting duplicates; whereas, we usually consider [word type]({{< relref "KBhtokenization.md" >}})s as unique, non-duplicated distinct [wordform]({{< relref "KBhtokenization.md" >}})s.


### clitics {#clitics}

`John's`: word that doesn't stand on its own.
