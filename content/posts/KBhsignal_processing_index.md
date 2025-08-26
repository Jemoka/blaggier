+++
title = "Signal Processing Index"
author = ["Houjun Liu"]
draft = false
+++

## Some Ideas {#some-ideas}

-   Error Correction Codes
-   Sampling + Quantization
-   Compression Algorithms
-   Frequency Domain Technologies


## Two Main Goals {#two-main-goals}

1.  **Unit 1**: Efficient Representation of Signal (i.e. compression)---we ideally want the smallest sequence of bits to encode the raw signal
2.  **Unit 2**: Preserving Information of Signal (i.e. communication)---we ideally want to communicate our bits while not sacrificing information despite all communication channels being noisy


## Unit 1 outline {#unit-1-outline}

-   compress the same exactly information into less space ([lossless compression]({{< relref "KBhlossless_compression.md" >}}))
    -   what is information (_probability and entropy_)
    -   compression and limits of compression ([Huffman Coding]({{< relref "KBhhuffman_coding.md" >}}))
-   removing irrelevant/uninteresting information ([lossy compression]({{< relref "KBhlossy_compression.md" >}}))
    -   key idea: "frequency domain can be aggressively compressed"
    -   signals, frequency representation, bandwidth (_discrete cosine transform_)
    -   quantization, sampling, reconstruction (_encoding analog signal into digital signal_)


## Unit 2 outline {#unit-2-outline}

-   communication basics (_channels and noise_)
-   representing bits for physical/analogue communication ([modulation]({{< relref "KBhmodulation.md" >}})---_encoding digital signal into analog signal_)
-   bandwidth, spectrum shaping/sharing ([frequency-domain filtering]({{< relref "KBhfrequency_domain_filtering.md" >}}))
-   fundamental limits (_channel capacity_)
-   separation of compression and communication ([separation principle]({{< relref "KBhseperating_principle.md" >}}))
-   adding redundancy to communication schemes ([error-correcting codes]({{< relref "KBherror_correcting_codes.md" >}}))


## Lectures {#lectures}


### Unit 1 {#unit-1}

[SU-ENGR76 Unit 1 Index]({{< relref "KBhcompression.md" >}})

-   [SU-ENGR76 APR022024]({{< relref "KBhsu_engr76_apr0202024.md" >}})
-   [SU-ENGR76 APR042024]({{< relref "KBhsu_engr76_apr042024.md" >}})
-   [SU-ENGR76 APR092024]({{< relref "KBhsu_engr76_apr092024.md" >}})
-   [SU-ENGR76 APR112024]({{< relref "KBhsu_engr76_apr112024.md" >}})
-   [SU-ENGR76 APR162024]({{< relref "KBhsu_engr76_apr162024.md" >}})
-   [SU-ENGR76 APR232024]({{< relref "KBhsu_engr76_apr232024.md" >}})
-   [SU-ENGR76 APR252024]({{< relref "KBhsu_engr76_apr252024.md" >}})
-   [SU-ENGR76 APR302024]({{< relref "KBhsu_engr76_apr302024.md" >}})
-   [SU-ENGR76 MAY022024]({{< relref "KBhsu_engr76_may022024.md" >}})


### Unit 2 {#unit-2}

[SU-ENGR76 Unit 2 Index]({{< relref "KBhsu_engr76_unit_2_index.md" >}})

-   [SU-ENGR76 MAY072024]({{< relref "KBhsu_engr76_may072024.md" >}})
-   [SU-ENGR76 MAY142024]({{< relref "KBhsu_engr76_may142024.md" >}})
-   [SU-ENGR76 MAY162024]({{< relref "KBhsu_engr76_may162024.md" >}})
-   [SU-ENGR76 MAY232024]({{< relref "KBhsu_engr76_may232024.md" >}})
-   [SU-ENGR76 MAY282024]({{< relref "KBhsu_engr76_may282024.md" >}})
-   [SU-ENGR76 MAY302024]({{< relref "KBhsu_engr76_may302024.md" >}})
-   [SU-ENGR76 JUN042024]({{< relref "KBhsu_engr76_june042024.md" >}})
