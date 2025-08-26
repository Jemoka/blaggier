+++
title = "Markov Chain"
author = ["Houjun Liu"]
draft = false
+++

A [Markov Chain]({{< relref "KBhmarkov_chain.md" >}}) is a chain of \\(N\\) states, with an \\(N \times N\\) transition matrix.

1.  at each step, we are in exactly one of those states
2.  the matrix \\(P\_{ij}\\) tells us \\(P(j|i)\\), the probability of going to state \\(j\\) given you are at state \\(i\\)

And therefore:

\begin{equation}
\sum\_{j=1}^{N} P\_{ij} = 1
\end{equation}


## Ergotic Markov Chain {#ergotic-markov-chain}

a markov chain is [Ergotic](#ergotic-markov-chain) if...

1.  you have a path from any one state to any other
2.  for any start state, after some time \\(T\_0\\), the probability of being in any state at any \\(T > T\_0\\) is non-zero

Every [Ergotic Markov Chain](#ergotic-markov-chain) has a long-term visit rate:

i.e. a steady state visitation count exists. We usually call it:

\begin{equation}
\pi = \qty(\pi\_{i}, \dots, \pi\_{n})
\end{equation}


### Computing steady state {#computing-steady-state}

Fact:

let's declare that \\(\pi\\) is the steady state to a transition matrix \\(T\\); recall that the FROM states are the rows, which means that \\(\pi\\) has to be a row vector; \\(\pi\\) being a steady state makes:

\begin{equation}
\pi T = \pi
\end{equation}

This is a left e.v. with [eigenvalue]({{< relref "KBheigenvalue.md" >}}) \\(1\\), which is the principle [eigenvector]({{< relref "KBheigenvalue.md" >}}) of \\(T\\) as transition matricies always have [eigenvector]({{< relref "KBheigenvalue.md" >}}) eigenvalue to \\(1\\).
