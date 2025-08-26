+++
title = "PRIMES"
author = ["Houjun Liu"]
draft = false
+++

"very prime has a succinct certificate"

\begin{equation}
\text{PRIMES} : \qty {A \mid A\text{ is prime}}
\end{equation}

The certificate?

\begin{equation}
A \text{ prime} \Leftrightarrow \exists 1 < b < A : B, B^{2}, \dots, B^{A\*2} \not \cong \ \text{mod}\ A
\end{equation}

So \\(\text{PRIMES} \in \text{NP}\\)

---

But actually [PRIMES]({{< relref "KBhprimes.md" >}}) is in \\(P\\)
