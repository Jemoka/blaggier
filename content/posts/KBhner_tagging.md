+++
title = "NER Tagging"
author = ["Houjun Liu"]
draft = false
+++

while [POS Tagging]({{< relref "KBhpos_tagging.md" >}}) assigns tags to each word, [NER Tagging]({{< relref "KBhner_tagging.md" >}}) tags the category of usage of multi-word spans.

[NER Tagging]({{< relref "KBhner_tagging.md" >}}) needs to label **spans** of text, which means that there is ambiguity in type.


## BIO Tagging {#bio-tagging}

[BIO Tagging](#bio-tagging) will tag each word: where \\(B\\) begins a span, \\(I\\), is inside a span, and \\(O\\) outside a span. So tags per word still apply, but we can extract span information as well.

(job - gender + gender ) = job
(captial - country + country) = captial
