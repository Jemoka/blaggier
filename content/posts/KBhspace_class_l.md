+++
title = "logspace"
author = ["Houjun Liu"]
draft = false
+++

\begin{equation}
L = \text{SPACE}\qty(\log n)
\end{equation}

For **time**, the gold standard for languages with \\(\geq n\\) to read input is \\(\text{TIME}\qty(n)\\)  or at best \\(\text{TIME}\qty(n^{k})\\).

For **space**, the gold standard for languages with \\(\geq n\\) characters is \\(\text{SPACE}\qty(\log n)\\), because to have pointers, store things, etc., will take this much.


## additional information {#additional-information}


### example {#example}

Here are some [logspace]({{< relref "KBhspace_class_l.md" >}}) algorithms.


#### 0 and 1 {#0-and-1}

\begin{equation}
A = \qty {0^{m}1^{m}: m \in \mathbb{N}}
\end{equation}


#### palendromes {#palendromes}

We can solve it by keeping track of length of input, and then check \\(x [i] = x[n-i+1]\\)
