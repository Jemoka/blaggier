+++
title = "SU-CS224N APR302024"
author = ["Houjun Liu"]
draft = false
+++

## Subword {#subword}

We use SUBWORD modeling modeling to deal with:

1.  combinatorial morphology (resolving word form and infinitives) --- "a single word has a million forms in Finnish" ("transformify")
2.  misspelling
3.  extensions/emphasis ("gooooood vibessssss")

You mark each actual word ending with some of combine marker.

To fix this:


### [Byte-Pair Encoding]({{< relref "KBhbpe.md" >}}) {#byte-pair-encoding--kbhbpe-dot-md}

"find pieces of words that are common and treat them as a vocabulary"

1.  start with vocab containing only characters and EOS
2.  look at the corpus, and find the most common pair of adjacent characters
3.  replace all instances of the pair with the new subword
4.  repeat 2-3 until vecab size is big enough


## Writing Systems {#writing-systems}

-   phonemic (directly translating sounds, see Spanish)
-   fossilized phonemic (English, where sounds are whack)
-   syllabic/moratic (each sound syllable written down)
-   ideographic (syllabic, but no relation to sound instead have meaning)
-   a combination of the above (Japanese)


## Whole-Model Pretraining {#whole-model-pretraining}

-   all parameters are initalized via pretraining
-   don't even bother training word vectors


## MLM and NTP are "Universal Tasks" {#mlm-and-ntp-are-universal-tasks}

Because in different circumstances, performing well MLM and NLP requires {local knowledge, scene representations, language, etc.}.


## Why Pretraining {#why-pretraining}

-   maybe local minima near pretraining weights generalize well
-   or maybe, because the outputs are sensible, gradients propagate nicely because they are modulated well


## Types of Architecture {#types-of-architecture}


### Encoders {#encoders}

-   bidirectional context
-   can condition on the future


#### Bert {#bert}

1.  replace input word with [mask] 80% of time
2.  replace **input word** with a **RANDOM WORD** 10% of the time
3.  leaving the word unchanged 10% of the time

i.e. BERT will then need to resolve a proper sentence representation from lots of noise

Original BERT _also_ pretrained on top a next sentence prediction loss in addition to MLM, but that ended up being unnecessary.

<!--list-separator-->

-  Bertish

    1.  RoBERTa - train on longer context
    2.  SpanBert - mask a span


### Encoder/Decoder {#encoder-decoder}

-   do both
-   pretraining maybe hard


#### T5 {#t5}

Encoder/Decoder model. Pretraining task: blank inversion:

"Thank you for inviting me to your party last week"

"Thank you &lt;x&gt; to your &lt;y&gt; last week" =&gt;
"&lt;x&gt; for inviting &lt;y&gt; party &lt;z&gt;

This actually is BETTER than the LM training objective.


### Decoder {#decoder}

-   general LMs use this
-   nice to generate from + cannot condition no future words


### In-Context Learning {#in-context-learning}

-   really only very capable at hundreds of billion parameters
-   uses no gradient steps----repeat and attend to examples
