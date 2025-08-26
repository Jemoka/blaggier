+++
title = "SU-ENGR76 MAY282024"
author = ["Houjun Liu"]
draft = false
+++

## [Convolutional Code]({{< relref "KBhsu_engr76_may232024.md#convolutional-code" >}}) {#convolutional-code--kbhsu-engr76-may232024-dot-md}

The output sequences of [Convolutional Code]({{< relref "KBhsu_engr76_may232024.md#convolutional-code" >}}) behaves like a five bit difference in Hamming Distance.


### Decoding {#decoding}

-   **brute force decoding**: precompute, for a sequence length of \\(k\\), compute \\(2^{k}\\) sequneces and what they should correspond to in our target code --- of course, this is not computationally feasible
-   [Virtirbi Algorithm]({{< relref "KBhhidden_markov_model.md#decoding" >}}): time complexity --- \\(4(k+2)\\), \\(8(k+2)\\) 4 possible blocks of 2, and 8 comparisons for [Hamming Distance]({{< relref "KBhsu_engr76_may142024.md#hamming-distance" >}}): in general \\(k\_0\\)


### in general {#in-general}

-   \\(k\_0\\) of source symbols entering the decoder
-   \\(n\_0\\) of symbols produced by decoder at each step
-   constrain length \\(m\_0\\), how many bits are considered

for the [Convolutional Code]({{< relref "KBhsu_engr76_may232024.md#convolutional-code" >}}) setup we discussed, we have \\(k\_0=1\\), \\(n\_0=2\\), and \\(m\_0 = 3\\) (one bit produces 2 bits, and we consider 3 bits per step.)


## Comparison of Codes {#comparison-of-codes}

| Code                                                                                | Rate | M  | L | dmin      |
|-------------------------------------------------------------------------------------|------|----|---|-----------|
| [repetition code]({{< relref "KBhsu_engr76_may142024.md#repetition-code" >}})       | 1/3  | 2  | 3 | 3         |
| [Hamming Code]({{< relref "KBhsu_engr76_may162024.md#hamming-code" >}})             | 4/7  | 16 | 7 | 3         |
| [Convolutional Code]({{< relref "KBhsu_engr76_may232024.md#convolutional-code" >}}) | 1/2  |    |   | &asymp; 5 |


## Bit Error Rate {#bit-error-rate}

**KEY GOAL**: if I hand you an error rate of the uncoded transmission, what would be the bit error rate of a given resulting [error-correction code]({{< relref "KBhsu_engr76_may142024.md#error-correction-code" >}})?
