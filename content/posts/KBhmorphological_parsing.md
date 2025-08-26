+++
title = "morphological parsing"
author = ["Houjun Liu"]
draft = false
+++

recall [morpheme]({{< relref "KBhmorpheme.md" >}})s are the smallest meaningful units of a word.

[morphological parsing]({{< relref "KBhmorphological_parsing.md" >}}) is the act of getting morphemes: `cats` =&gt; =cat s=o

1.  stem +
2.  affix


## stemming {#stemming}

stemming just chops off the morpheme affixes; leaving the stems. "heights" =&gt; "heigh". without lemmatization.

This increases recall (more stuff is caught we want to catch) at he cost of precision (what we catch is probably lots of false positives).

Languages with complex cojugation or morphology, this can't work because you can't just chop.


### porter stemmer {#porter-stemmer}

A series of rewrite rules which performs stemming.
