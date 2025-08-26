+++
title = "SU-CS254B APR302025"
author = ["Houjun Liu"]
draft = false
+++

<div class="theorem"><span>

H\*: there's a language \\(A\\) such that...

1.  \\(A \in \text{TIME}\qty(2^{O\qty(n)})\\)
2.  \\(\exists  \delta >0\\) such that if \\(C\_{n}\\) is a n-var circuit of size \\(\leq 2^{\delta n}\\) we have \\(\text{Pr}\qty[ C\_{n}\qty(x) = A\_{n}\qty(x)] \leq \frac{1}{2} + 2^{-\delta n}\\)

</span></div>


## stretching randomness {#stretching-randomness}

Goal: take \\(S \sim \qty {\pm 1}^{l}\\), we want to stretch this randomness \\(\qty {\pm 1}^{n}\\) where \\(n = 2^{\theta\qty(l)}, l = \theta \qty(\log n)\\).

Two main parts:

1.  combinatorial designs
2.  [Yao's Next-Bit Prediction Lemma]({{< relref "KBhyao_s_next_bit_prediction_lemma.md" >}})

We can choose sufficiently small \\(l\\), in particular to be \\(l = c \log  n\\), because then we can iterate over all seeds in time \\(2^{l} = n^{c}\\).
