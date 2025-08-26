+++
title = "NUS-MATH530 Geometric Multiplicity"
author = ["Houjun Liu"]
draft = false
+++

Let \\(\lambda\_{m}\\) be an eigenvalue for \\(T\\) an operator on complex finite-dimensional \\(V\\). Let \\(m\\) be the geometric multiplicity of \\(\lambda\_{m}\\). We desire that the algebraic multiplicity is at least \\(m\\). Let \\(\dim v = n\\).

We have that \\(m\\) is the geometric multiplicity of \\(\lambda\_{m}\\), meaning:

\begin{equation}
\dim E(\lambda\_{m}, T) =  m
\end{equation}

This means we can take \\(m\\) linearly independent eigenvectors from \\(V\\). Extend this list now to a basis of \\(V\\) with \\(v\_1, ...v\_{m}, u\_{1}, u\_{n-m}\\).

Construct a matrix via this basis. By construction, the first \\(m \times m\\) of this matrix would appear diagonal (as each \\(Tv = \lambda v\\)). Furthermore, the diagonal of this sub-matrix would simply contain \\(\lambda\\) repeated \\(m\\) times.

Take now \\(A = \mathcal{M}(T)-\lambda I\\).

Take the determinant of this matrix \\(A\\) now against the first column, yielding a characteristic polynomial with at least \\(m\\) factors with \\(\lambda\\). Hence, the algebraic multiplicity of \\(\lambda\_{m}\\) is at least \\(m\\), as desired. \\(\blacksquare\\)
