+++
title = "SU-CS254 MAR052025"
author = ["Houjun Liu"]
draft = false
+++

## Review! Probability {#review-probability}

Let \\(A\_1 ..., A\_{M}\\) be independent events, each with probability \\(p\\). Let \\(T = \sum\_{i=1}^{n} A\_{i}\\), meaning \\(T \sim \text{Bin}\qty(n,p)\\). \\(\mu = \mathbb{E}\qty[T] = np\\).

Two facts:


### Markov bound {#markov-bound}

<div class="theorem"><span>

\\(P\qty [X \geq k \mathbb{E}[x]] \leq \frac{1}{k}\\)

</span></div>

;


### Chebyshev's inequality {#chebyshev-s-inequality}

<div class="theorem"><span>

\begin{equation}
P\qty [T \not \in\mu \pm k \sigma] \leq  \frac{1}{k^{2}}
\end{equation}

</span></div>


## Pairwise Independence {#pairwise-independence}

<div class="definition"><span>

\begin{equation}
H = \qty {h: \qty {0,1}^{h} \to \qty {0,1}^{k}}
\end{equation}

</span></div>

<div class="theorem"><span>

properties of pairwise independence:

1.  **1 wise independent**: \\(\forall y, \forall a\\), \\(P\_{h \sim H}\qty [h\qty(y) = a] = 2^{-k}\\)
2.  **2 wise independent**: \\(\forall y \neq y'\\), \\(P\_{h \sim H}\qty [h\qty(y) = h\qty(y')] = 2^{-k}\\)

</span></div>

You will notice that this is not full randomness, just that there are some amount of randomness.

<div class="example"><span>

Let's pick \\(k\\) strings \\(r^{(1)} ... r^{(k)} \sim \qty {0,1}^{n}\\) uniform random things, and \\(k\\) bits \\(b\_{1}, ..., b\_{k} \sim \qty {0,1}\\) uniform random bits. This is \\(O\qty(kn)\\) bits of randomness.

\begin{equation}
h\qty(y) = \qty(r^{(1)}y + b\_1, r^{(2)} y + b\_2, \dots, r^{(k)} y + b\_{k})
\end{equation}

This is 1-wise random due to the randomness of \\(b\_{j}\\), since will shift into \\(2^{-k}\\) random. For 2 wise independenec

</span></div>


## Gouldwasser-Sipsr {#gouldwasser-sipsr}

<div class="theorem"><span>

Given circuit \\(C : \qty {0,1}^{n} \to \qty {0,1}\\) and some parameter \\(s\\), there is an AM (one-round interaction) protocol: if \\(\\#c > 2s\\), we will accept with probability \\(\geq \frac{2}{3}\\); if \\(#c \leq s\\), we will reject with probability \\(\geq \frac{2}{3}\\).

</span></div>

<div class="corollary"><span>

Note that the factor of \\(2\\) is not important---we can upgrade 64s vs. s protocol to a 2s vs. s protocol.

</span></div>

<div class="proof"><span>

**Notice**: given a circuit \\(C\\), construct \\(C^{\wedge 6}\qty(x^{(1)}, \dots, x^{(6)}) = C\qty(x^{(1)}) \wedge C\qty(x^{(2)})\\)  .... We can observe that, since the number of each of these sub-$C$s multiply, we have \\(\\#\qty(C^{\wedge 6}, )\\)

Consider a choice of \\(s = 2^{k}\\). Let's make a random hash function \\(h: \qty {0,1}^{n} \to  \qty {0,1}^{k+3}\\). Authur asks for an \\(x\\) such that \\(C\qty(x) = 1\\), and \\(h\qty(x) = 0\\).

</span></div>
