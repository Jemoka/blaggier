+++
title = "Gaussian elimination"
author = ["Houjun Liu"]
draft = false
+++

The point of [Gaussian elimination]({{< relref "KBhgaussian_elimination.md" >}}) is to solve/identiy-ify a linear equation. Take, if you have a matrix expression:

\begin{equation}
    Ax = b
\end{equation}

We can apply \\(A^{-1}\\) to both side, we then have:

\begin{equation}
    A^{-1}Ax = A^{-1} b
\end{equation}

Applying the definition of the identity:

\begin{equation}
    Ix = A^{-1}b
\end{equation}

Therefore, to solve for some \\(A^{-1}\\), which would yield \\(x\\).