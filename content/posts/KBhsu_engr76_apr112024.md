+++
title = "SU-ENGR76 APR112024"
author = ["Houjun Liu"]
draft = false
+++

We want a way of generating a [Prefix-Free]({{< relref "KBhsu_engr76_apr092024.md#prefix-free" >}}) code for any [Source Coding]({{< relref "KBhsu_engr76_apr092024.md#source-coding" >}}) problem.


## [Huffman Coding]({{< relref "KBhhuffman_coding.md" >}}) {#huffman-coding--kbhhuffman-coding-dot-md}

See [Huffman Coding]({{< relref "KBhhuffman_coding.md" >}})


## Diadic Source {#diadic-source}

[Diadic Source](#diadic-source) is an [information source]({{< relref "KBhsu_engr76_apr042024.md#information-source" >}}) for which the probability of occurrence for each symbol is a member of \\(\frac{1}{2^{n}}\\) for integer \\(n\\).

That is, the probability of each symbol is in powers of \\(\frac{1}{2}\\).

In THESE sources, [Huffman Coding]({{< relref "KBhhuffman_coding.md" >}}) will always result in a code that communicates the information in the same number of bits as the [entropy]({{< relref "KBhsu_engr76_apr042024.md#information-value" >}}) of the source.
