+++
title = "SU-ENGR76 Unit 1 Index"
author = ["Houjun Liu"]
draft = false
+++

-   [Analog vs Digital Signal]({{< relref "KBhanalog_vs_digital_signal.md" >}})
-   [bit (signal processing)]({{< relref "KBhbit_signal_processing.md" >}})
    -   [Source-Channel Separation Theorem]({{< relref "KBhbit_signal_processing.md#source-channel-separation-theorem" >}})


## [information]({{< relref "KBhsu_engr76_apr042024.md#information" >}}) {#information--kbhsu-engr76-apr042024-dot-md}

-   [information source]({{< relref "KBhsu_engr76_apr042024.md#information-source" >}}) can be modeled as a random variable
-   [surprise]({{< relref "KBhsu_engr76_apr042024.md#surprise" >}})
-   [information value]({{< relref "KBhsu_engr76_apr042024.md#information-value" >}}) and [entropy]({{< relref "KBhsu_engr76_apr042024.md#information-value" >}})
    -   [joint entropy]({{< relref "KBhsu_engr76_apr092024.md#joint-entropy" >}})
        -   [joint entropy of independent events]({{< relref "KBhsu_engr76_apr092024.md#joint-entropy-of-independent-events" >}})


## [Source Coding]({{< relref "KBhsu_engr76_apr092024.md#source-coding" >}}) {#source-coding--kbhsu-engr76-apr092024-dot-md}

-   [non-singular code]({{< relref "KBhsu_engr76_apr092024.md#non-singular-code" >}})
-   [uniquely decodeable]({{< relref "KBhsu_engr76_apr092024.md#uniquely-decodeable" >}})
-   [Prefix-Free]({{< relref "KBhsu_engr76_apr092024.md#prefix-free" >}}) code, which is [uniquely decodeable]({{< relref "KBhsu_engr76_apr092024.md#uniquely-decodeable" >}}) and [instantaneously decodable]({{< relref "KBhsu_engr76_apr092024.md#instantaneously-decodable" >}})
    -   [any prefix free code for a source has at least entropy length]({{< relref "KBhsu_engr76_apr092024.md#any-prefix-free-code-for-a-source-has-at-least-entropy-length" >}})
    -   [prefix-free code has the same codeword lengths as any code]({{< relref "KBhsu_engr76_apr092024.md#prefix-free-code-has-the-same-codeword-lengths-as-any-code" >}})
-   [Average Codeword Length]({{< relref "KBhsu_engr76_apr092024.md#average-codeword-length" >}})
-   generating [Prefix-Free]({{< relref "KBhsu_engr76_apr092024.md#prefix-free" >}}) code with [Huffman Coding]({{< relref "KBhhuffman_coding.md" >}})
    -   [Huffman Coding is Bounded]({{< relref "KBhhuffman_coding.md#huffman-coding-is-bounded" >}})
-   [Block Coding]({{< relref "KBhsu_engr76_apr092024.md#block-coding" >}})
    -   [Boundedness of Block Coding]({{< relref "KBhsu_engr76_apr092024.md#shannon-s-source-coding-theorem" >}}) and why it saves space!
-   [Diadic Source]({{< relref "KBhsu_engr76_apr112024.md#diadic-source" >}})
-   [Shannon's Source-Coding Theorem]({{< relref "KBhsu_engr76_apr092024.md#shannon-s-source-coding-theorem" >}})
    -   [Entropy Rate of the Source]({{< relref "KBhsu_engr76_apr092024.md#entropy-rate-of-the-source" >}})
-   [Non-IID Sequence Can Have Smaller Entropy]({{< relref "KBhsu_engr76_apr162024.md#non-iid-sequence-can-have-smaller-entropy" >}}) (which is why we use [Entropy Rate of the Source]({{< relref "KBhsu_engr76_apr092024.md#entropy-rate-of-the-source" >}}) as the measure of how good a code is)


## [signal]({{< relref "KBhsu_engr76_apr162024.md#signal" >}}) {#signal--kbhsu-engr76-apr162024-dot-md}

-   [sinusoid]({{< relref "KBhsu_engr76_apr162024.md#sinusoid" >}}) and [Fourier Series]({{< relref "KBhfourier_series.md" >}})
    -   [Fourier Series as exactly a shifted sum of sinusoids]({{< relref "KBhsu_engr76_apr182024.md#id-40a9278a-e67e-44da-ac09-69ba3daa24bc-fourier-series-as-exactly-a-shifted-sum-of-sinusoids" >}})
    -   [General Fourier Decomposition]({{< relref "KBhfourier_series.md#general-fourier-decomposition" >}})
-   [L-periodic]({{< relref "KBhsu_math53_feb252024.md#l-periodicity" >}}) functions and [triangle wave]({{< relref "KBhsu_engr76_apr162024.md#triangle-wave" >}})
-   [Fourier Series components form a basis]({{< relref "KBhsu_engr76_apr232024.md#id-40a9278a-e67e-44da-ac09-69ba3daa24bc-fourier-series-components-form-a-basis" >}})
-   [Bandwidth]({{< relref "KBhsu_engr76_apr252024.md#bandwidth" >}})
    -   [Finite-Bandwidth Signal]({{< relref "KBhsu_engr76_apr252024.md#finite-bandwidth-signal" >}})
-   [Discrete Fourier Transform]({{< relref "KBhsu_engr76_apr252024.md#discrete-fourier-transform" >}})
-   [Lossless Sampling]({{< relref "KBhsu_engr76_apr302024.md#lossless-sampling" >}}) and [nyquist sampling theorem]({{< relref "KBhsu_engr76_may022024.md#id-74c84568-2d0e-4b3c-b7ac-1c3605e08574-nyquist-sampling-theorem" >}})
    -   [Finite-Bandwidth Signal]({{< relref "KBhsu_engr76_apr252024.md#finite-bandwidth-signal" >}})
    -   [Baseband Signal]({{< relref "KBhsu_engr76_may022024.md#passband-signal" >}}) and [Passband Signal]({{< relref "KBhsu_engr76_may022024.md#passband-signal" >}})
-   [Interpolation]({{< relref "KBhsu_engr76_may022024.md#interpolation" >}})
    -   [Zero-Hold Interpolation]({{< relref "KBhsu_engr76_may022024.md#zero-hold-interpolation" >}})
    -   best:  [Infinite-Degree Polynomial Interpolation]({{< relref "KBhsu_engr76_may022024.md#infinite-degree-polynomial-interpolation" >}}) (uses [sinc function]({{< relref "KBhsinc_function.md#sinc-function" >}}))
        -   [Shannon's Nyquist Theorem]({{< relref "KBhsu_engr76_may022024.md#shannon-s-nyquist-theorem" >}})
