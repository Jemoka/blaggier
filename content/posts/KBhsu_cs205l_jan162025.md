+++
title = "SU-CS205L JAN162025"
author = ["Houjun Liu"]
draft = false
+++

Random properties of eigenthings...


## Hermitian Matrix {#hermitian-matrix}

A [matrix]({{< relref "KBhmatricies.md" >}}) such that:  \\(A^{\*^{T}} = A\\)

\begin{equation}
v^{\*^{T}} A = \lambda^{\*} v^{\*^{T}}
\end{equation}

Meaning; \\(Av = \lambda v \implies  \qty(v^{\*^{T}} A v = v^{\*^{T}} \lambda v) \implies  \lambda^{\*} = \lambda\\)

Symmetric matrices have this property.


## vector deformation {#vector-deformation}

Suppose \\(v\\) are the eigenvectors of \\(A\\), some vector \\(c = \sum\_{k}^{} a\_{k} v\_{k}\\) (as long as they are from different eigenvalues), and so, applying \\(A\\):

\begin{equation}
Ac = \sum\_{k}^{} a\_{k} A v\_{k} = \sum\_{k}^{} \qty(a\_{k} \lambda\_{k}) v\_{k}
\end{equation}

"you are rotating the vector towards the large eigenvalues, and away from the vectors corresponding to the small eigenvalues"


## spacial deformation {#spacial-deformation}

When one eigenvalue is very big, and the other is very small: you are squashing a unit sphere in the space into an "ellipse" which is dependent on one of the eigenvector's direction.

Hence, its possible for small perturbations in input to change the scales of outputs.


## [singular value decomposition]({{< relref "KBhsingular_value_decomposition.md" >}}) {#singular-value-decomposition--kbhsingular-value-decomposition-dot-md}

see [singular value decomposition]({{< relref "KBhsingular_value_decomposition.md" >}})

Factorization:

\begin{equation}
A = U \Sigma V^{T}
\end{equation}

for \\(A: m \times n\\), \\(\Sigma: m \times n\\), \\(V: n \times n\\)

Notice---we "amplify errors" given by \\(\Sigma\\), but \\(U\\) and \\(V\\) are both orthonormal so errors don't propagate there.

Columns of \\(V\\) are eigenvectors of \\(A^{T}A\\), columns of \\(U\\) are eigenvectors of \\(A A^{T}\\). Singular values are the non-negative square roots of the

You can approximate a matrix by throwing away rows/columns which has zero/small singular values. In this case, we can throw away stuff that's close enough for \\(0\\).


### Notes on Rectangular Diagonal Matrix {#notes-on-rectangular-diagonal-matrix}

\begin{equation}
\mqty(5 & 0 \\\ 0 & 2 \\\ 0 & 0) \mqty(c\_1 \\\ c\_2) = \mqty(10 \\\ -1 \\\ \alpha)
\end{equation}

notice how this system has no solution at \\(\alpha \neq 0\\); when \\(\alpha \approx 0\\), we run into trouble numerically.


### rank deficient {#rank-deficient}

If a matrix is rank-deficient, then there will be a \\(0\\) as a singular value.


### notes {#notes}

{{< figure src="/ox-hugo/2025-01-16_18-12-08_screenshot.png" >}}


### tip {#tip}

an orthonormal matrix has determinant \\(\pm 1\\), if \\(v\\) had an reflection, the determinant would be \\(-1\\), so just flipping it until its \\(+1\\) we'd be fine.
