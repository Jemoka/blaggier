+++
title = "SU-ENGR76 MAY142024"
author = ["Houjun Liu"]
draft = false
+++

## High Frequency Signal {#high-frequency-signal}

Frequency content of a signal would be symmetric around a target frequency \\(f\_{c}\\), and most of the energy will go from \\(f\_{c} \pm \frac{1}{T}\\). Strictly speaking, you maybe leaking some energy outside the band.


### energy of signal {#energy-of-signal}

\begin{equation}
\varepsilon\_{1} = \frac{1}{T} \int\_{0}^{T} y^{2}(t) \dd{t}
\end{equation}

if \\(\varepsilon\_{s} > \varepsilon\_{T}\\), then decode \\(1\\). Otherwise, \\(\epsilon\_{1} < \epsilon\_{T}\\), decode \\(0\\).


## Hamming Distance {#hamming-distance}

the [Hamming Distance](#hamming-distance) between two sequences is the number of positions in which these two sequences differ from each other


## error-correction code {#error-correction-code}

an [error-correction code](#error-correction-code) is a collection of binary strings called "codewords"

1.  size of the code: numer of codewords \\(M\\) (\\(M=2\\) for [repetition codes](#repetition-code)), we want this to be large because --- the number of bits that the code can encode is \\(\log\_{2} M\\), because that's the number of combinations of a binary bit \\(\log\_{2} M\\) which you can encode with a thing of size \\(M\\)
2.  length of the code: the length of each codeword \\(L\\) (\\(M =3\\) for [repetition codes](#repetition-code)), we want this to be small to be efficient
3.  minimum distance of the code: the minimum distance between any two codewords in the code \\(d\_{c}\\) (measure by [Hamming Distance](#hamming-distance), [repetition codes](#repetition-code) its 3), we want this high


### minimum codeword size {#minimum-codeword-size}

Key question: \*assume we want to correct \\(t\\) bit flips; what is the minimum distance \\(d\_{c}\\) we will need?

Note that if we had \\(t\\) bit flips, we would have a [Hamming Distance](#hamming-distance) of \\(t\\) bitflips. So, we will need at least \\(d\_{c} = 2t + 1\\) away to disambiguate exactly (if you have a distance of just \\(t+1\\), you will not be able to tell a code that's exactly in line with your error, \\(t+1\\) away, if your code error had a [Hamming Distance](#hamming-distance) of \\(t\\)).

formally:

-   an error correction code can correct \\(t\\) errors its minimum distance is \\(d\_{c} \geq 2t+1\\); meaning if you have a code error \\(d\_{c}\\), we can correct up to \\(t = \left\lfloor \frac{d\_{c}-1}{2}\right\rfloor\\)
-   a code can **detect** \\(t\\) errors \\(d\_{c} \geq t+1\\), meaning we can't accidentally end up with a random codeword


### linear code {#linear-code}

In a [linear code](#linear-code), if you XOR two codes, you will get another codeword.


### rate (error correction code) {#rate--error-correction-code}

\begin{equation}
R = \frac{\log\_{2} M}{L}
\end{equation}

We want the rate to be as high as possible.


### repetition code {#repetition-code}

Literally send it multiple times

| Message | Code  |
|---------|-------|
| 0       | 0 0 0 |
| 1       | 1 1 1 |

Then, you look at the three received bits and try to see what the most nearest legitimate codeword is.

By doing nearest neighbor (closest value) decoding, we
