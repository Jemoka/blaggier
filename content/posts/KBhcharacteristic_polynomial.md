+++
title = "characteristic polynomial"
author = ["Houjun Liu"]
draft = false
+++

The polynomial given by the determinant of:

\begin{equation}
det(A-\lambda I)
\end{equation}

for some [Linear Map]({{< relref "KBhlinear_map.md" >}}) \\(A\\). Solutions for \\(\lambda\\) are the [eigenvalue]({{< relref "KBheigenvalue.md" >}})s. This is because something is an [eigenvalue]({{< relref "KBheigenvalue.md" >}}) IFF \\((A-\lambda I)v = 0\\) for some \\(\lambda, v\\), so we need \\((A-\lambda I)\\) to be singular.

Characteristic [polynomial]({{< relref "KBhpolynomial.md" >}}) of a 2x2 matrix is given by \\(\lambda^{2}-tr(A)\lambda + det(A)\\).
