+++
title = "SU-CS205L JAN212025"
author = ["Houjun Liu"]
draft = false
+++

Insights to SVD: "ever matrix is a diagonal matrix, when viewed in the right space"

We can solve a linear system by moving it around:

\begin{align}
Ac = b  \\\\
\Rightarrow\ & U \Sigma V^{T} c = b  \\\\
\Rightarrow\ & U \qty(\Sigma V^{T} c) = b  \\\\
\Rightarrow\ & \Sigma V^{T} c = U^{T} b
\end{align}

(since \\(U\\) is orthonormal, we can just flip it to invert it)

Call \\(U^{T} b = \hat{b}\\), call \\(V^{T} c = \hat{c}\\). We now have:

\begin{equation}
\Sigma \hat{c} = \hat{b}
\end{equation}

notice the very nice diagonal system we have here! Easy to solve. To get \\(c\\) back, we just write \\(V \hat{c} = V \qty(V^{T} c) = c\\).

Also, by noticing this, even during zero singular values, we can nicely identify where zero solutions/infinite solutions lie, etc. because

\begin{equation}
\mqty(\sigma\_{1} & 0 \\\ 0 & \sigma\_{2}) \mqty(c\_1 \\\ c\_2) = \mqty(b\_1 \\\ b\_2)
\end{equation}

and we can like write \\(b\_1 = \sigma\_{1} c\_1\\), \\(b\_2 = \sigma\_{2} c\_2\\), and even if \\(\sigma\_{j}\\) is \\(0\\), we can choose certain \\(c\\) that makes it work and claim the rest doesn't work.


## norms {#norms}

Some norms:

\begin{equation}
\Vert c \Vert\_{1} = \sum\_{k}^{}| c\_{k}|
\end{equation}

\begin{equation}
\Vert c \Vert\_{2} = \sqrt{\sum\_{k}^{} c\_{k}^{2}}
\end{equation}

\begin{equation}
\Vert c \Vert\_{\infty} = \max\_{k} | c\_{k} |
\end{equation}

Though they are theoretically sound, they are not all the same---not everything is "ok". This is why the infinity norm is so important.


### matrix norms {#matrix-norms}

-   \\(\Vert A \Vert\_{1}\\) is the maximum absolute value column sum
-   \\(\Vert A \Vert\_{\infty}\\) is the maximum absolute value row sum
-   \\(\Vert A \Vert\_{2}\\) is the maximum eigenvalue of \\(A^{T} A\\) (that is, the maximum singular value of \\(A\\))

This means condition number....

\begin{equation}
\Vert A \Vert\_{2} \Vert A^{-1} \Vert\_{2}
\end{equation}


## special matrices and their solvers {#special-matrices-and-their-solvers}


### diagonal dominance {#diagonal-dominance}

The magnitude of each diagonal element is...

1.  strictly larger than the sum of the magnitudens of all the other elements of eah row
2.  strictly larger than the sum of the magnitudes of all other elements in its column

If this is true, then, its:

1.  strictly diagonally dominant: matrix is non-singular
2.  column diagonal dominance: pivoting is not required during LU factorization


### symmetric matrices {#symmetric-matrices}

Since:

\begin{equation}
A^{T} A = A A^{T} = A^{2}
\end{equation}

so \\(U\\) and \\(V\\) may have the same eigenvectors. That is:

\begin{equation}
A v\_{k} = \sigma\_{k} u\_{k} \implies A v\_{k} = \pm \sigma\_{k} v\_{k}
\end{equation}

"if you are ok with your singular value to be flipped, you could use \\(V\\) for both \\(U\\) and \\(V\\)". This is what we could write down:

\begin{equation}
A = V \Lambda V^{T}
\end{equation}

Whereby we could write down the eigenspaces of \\(A\\) directly:

\begin{equation}
AV = V \Delta
\end{equation}

We can convert a normal matrix to being "roughly symmetric" by writing:

\begin{equation}
\hat{A} = \frac{1}{2} \qty(A + A^{T})
\end{equation}


### also, [inner product]({{< relref "KBhinner_product.md" >}}) {#also-inner-product--kbhinner-product-dot-md}

see [inner product]({{< relref "KBhinner_product.md" >}}), and in particular [Matrix-scaled inner product]({{< relref "KBhinner_product.md#matrix-scaled-inner-product" >}})


### definiteness {#definiteness}

-   **positive definite** IFF \\(v^{T} av > 0, \forall  v \neq 0\\)
-   **positive semi-definite** IFF \\(\langle v,v \rangle\_{A} = V^{T} A v \geq 0, \forall v \neq 0\\)
-   **negative definite** IFF \\(v^{T} A v < 0, \forall v \neq 0\\)
-   **negative semi-definite**: \\(v^{T} A v \leq 0, \forall v \neq 0\\)

Symmetric PD matricies: all eignevalues &gt; 0
Symmetric PSD matricies: all EV &gt;= 0

Positive definite: we can decompose the matrix into \\(A = V\Sigma V^{T}\\), if so, singular values are eigenvalues

SPSD has at least one \\(\sigma\_{k} = 0\\) and a null space.


### Cholesky Factorization {#cholesky-factorization}

Symmetric Positive Definite matrix can be solved by factorizing into \\(A = LL^{T}\\).

{{< figure src="/ox-hugo/2025-01-21_13-09-25_screenshot.png" >}}


### Incomplete Cholesky PRedictioner {#incomplete-cholesky-predictioner}

[Cholesky Factorization](#cholesky-factorization) can be used to conduct a preconditioner for a roughly sparse matrix.


## Iterative Solvers {#iterative-solvers}

-   direct solver: closed form strategy---special forms, sgaussian eliminations with LU, etc. etc.---but are closed forms so are very domain specific
-   iterative solver: getting an initial guess, and then gradually improving the guess, terminate when the error is small
