+++
title = "LU-Factorization"
author = ["Houjun Liu"]
draft = false
+++

[Elimination Matricies]({{< relref "KBhelimination_matrix.md" >}}) can be used to derive a LU factorization:

First, this gives an upper triangular matrix

\begin{equation}
U = M\_{n-1, n-1} \dots M\_{22} M\_{11} A
\end{equation}

We can also create the inverses of each of these:

\begin{equation}
A = L\_{11} L\_{22} \dots L\_{n-1,n-1} \cdot M\_{n-1,n-1} \dots M\_{22} \cdot M\_{11} \cdot A
\end{equation}

The first half \\(L\_{j}\\) composes a lower triangular matrix; the second half \\(M\_{j}\\) which composes a upper triangular matrix.

---

Then, this helps solve:

\begin{equation}
Ac = b
\end{equation}

Because we can factor first to:

\begin{equation}
\qty(LU) c = b
\end{equation}

Then, this makes it really easy to solve, because we can.

\begin{equation}
\hat{c} = Uc
\end{equation}

then, we can solve \\(L\hat{c} = b\\) using forward substitution; then we can solve \\(Uc = \hat{c}\\) using back substitution.

Notice that for every new \\(b\\), we don't need to perform Gaussian elimination.
