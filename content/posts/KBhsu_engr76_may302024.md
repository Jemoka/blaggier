+++
title = "SU-ENGR76 MAY302024"
author = ["Houjun Liu"]
draft = false
+++

Consider a mapping between \\(X \in \\{0,1\\}\\), and output \\(Y \in \\{0,1\\}\\), with a chance of error of probability \\(p\\). So we have four outcomes:

| X | Y | p   |
|---|---|-----|
| 0 | 0 | 1-p |
| 1 | 1 | 1-p |
| 0 | 1 | p   |
| 1 | 0 | p   |

Writing this out:

-   \\(P(y=1|x=0) = p\\)
-   \\(P(y=0|x=1) = p\\)
-   \\(P(y=0|x=0) = 1-p\\)
-   \\(P(y=1|x=1) = 1-p\\)

Recall chain rule:

\begin{equation}
P(X,Y|A) = P(X|Y,A) P(Y|A)
\end{equation}

---

Consider some input output pair:

\begin{equation}
p(y=10 | x = 00) = p(y\_1=1 | x\_1=0, x\_2=0)p(y\_2=0| y\_1=1, x\_1=0, x\_2=0)
\end{equation}

A memoryless channel becomes[^fn:1]

\begin{equation}
p(y\_1=1 | x\_1=0, x\_2=0)p(y\_2=0| y\_1=1, x\_1=0, x\_2=0) = p(y\_1=1 | x\_1=0)p(y\_2=0|x\_2=0)
\end{equation}

This means[^fn:2]

\begin{equation}
p(y=r\_1 \dots r\_{n} | x = t\_1 \dots t\_{k}) = p(r\_1|t\_1) p(r\_2|t\_2) \dots p(r\_{n}|t\_{n})
\end{equation}


## Shannon's Channel-Coding Theorem {#shannon-s-channel-coding-theorem}

For any communication channel (characterized by \\(p(y|x)\\), for a pair of input and output), there exists a way to construct an encoder/decoder pair that make it possible to send information over this channel at some rate \\(R\\) (bits/channel use) while making the probability of error arbitrarily small as long as \\(R < C\\).

Conversely, trying to send information at rate \\(R > C\\) bits/channel use, errors are inevitable.

\begin{equation}
C = \max\_{\text{dist}(X)} I (x:y)
\end{equation}

the capacity of a channel is the maximum mutual information that could be given any choice of input distribution. you should choose the input that induces the maximum mutual information between the input and output of a channel. where \\(I\\) is the [mutual information]({{< relref "KBhmutual_information.md" >}}).


## Law of Large Numbers {#law-of-large-numbers}

The average value of many, independent repeated trials is close to the true expectation.

Because the law of large numbers (<a href="#citeproc_bib_item_1">Wolf et al. 2020</a>), the we can transmit the number of bit flips over a binary substitution channel with probability \\(Lp\\).

So: design a code with very long codewords \\(L \gg 0\\) that can correct \\(L(p+\epsilon)\\) bitflips for some small choice of \\(\epsilon > 0\\).

[^fn:1]: test foonote
[^fn:2]: its true though it may not