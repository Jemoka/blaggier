+++
title = "existence of eigenvalue of operators"
author = ["Houjun Liu"]
draft = false
+++

A result so important it gets a page.

Every [operator]({{< relref "KBhoperator.md" >}}) on a [finite-dimensional]({{< relref "KBhfinite_dimensional_vector_space.md" >}}), non-zero, [complex vector space]({{< relref "KBhvector_space.md#vector-space-over-fields" >}}) has an [eigenvalue]({{< relref "KBheigenvalue.md" >}}).

Proof:

Suppose \\(V\\) is a [complex vector space]({{< relref "KBhvector_space.md#vector-space-over-fields" >}}) with [dimension]({{< relref "KBhdimension.md" >}}) \\(n > 0\\), and \\(T \in \mathcal{L}(V)\\). Choose \\(v \in V, v\neq 0\\) (possible as \\(V\\) is non-zero):

Construct a list of \\(n+1\\) [vector]({{< relref "KBhvector.md" >}})s:

\begin{equation}
v, Tv, \dots T^{n} v
\end{equation}

because we managed to cram \\(n+1\\) [vector]({{< relref "KBhvector.md" >}})s into a [list]({{< relref "KBhlist.md" >}}) for a [vector space]({{< relref "KBhvector_space.md" >}}) with [dimension]({{< relref "KBhdimension.md" >}}) \\(n\\), that list is [linearly dependent]({{< relref "KBhlinear_independence.md#linearly-dependent" >}}).

And thus, by definition of [linearly dependence]({{< relref "KBhlinear_independence.md#linearly-dependent" >}}), exists a set of \\(a\_0, ... a\_{n} \in \mathbb{C}\\), which not all are \\(0\\), such that:

\begin{equation}
0 = a\_0 v + a\_1 T v + \dots + a\_{n} T^{n} v
\end{equation}

Note that, because \\(v \neq 0\\), \\(a\_{1} ... a\_{n}\\) can't all be \\(0\\) either because otherwise \\(a\_0 = 0\\) making all \\(a\_{j}=0\\).

Now, this [polynomial]({{< relref "KBhpolynomial.md" >}}) can be completely factored because of the [fundamental theorem of algebra]({{< relref "KBhfundamental_theorem_of_algebra.md" >}}) into linear factors, \\(a\_{0} + a\_{1}z + ... a\_{n}z^{n} = c(z-\lambda\_{1}) \dots (z- \lambda\_{m})\\). We have to invoke the [fundamental theorem of algebra]({{< relref "KBhfundamental_theorem_of_algebra.md" >}}) with complex factors \\(z\\) because we haven't shown it holds for [polynomial operator]({{< relref "KBhpolynomial_operator.md" >}})s yet.

However, the existence of such a complete [factoring]({{< relref "KBhthoughts_on_axler_4.md#factoring" >}}) over the [complex number]({{< relref "KBhcomplex_number.md" >}})s means that, with possibly [complex number]({{< relref "KBhcomplex_number.md" >}}) \\(\lambda\_{j}\\) values:

\begin{align}
0 &= a\_{0} v + a\_{1} Tv + \dots a\_{n} T^{n} v \\\\
&= (a\_{0} I + a\_{1} T + \dots a\_{n} T^{n}) v \\\\
&= c(T - \lambda\_{1} I) \dots (T- \lambda\_{m} I)v
\end{align}

note that \\(m\\) is not necessarily \\(n\\) because different multiplicities.

Now, \\(c\\) cannot be \\(0\\) because \\(a\_0 \neq 0\\), and multiplying everything out out... makes the ending not zero?

Given \\(c \neq 0\\), \\(v \neq 0\\), and yet the map maps \\(v\\) to \\(0\\), at least one of the maps has to be non-injective. And because the [properties of eigenvalues]({{< relref "KBheigenvalue.md#properties-of-id-7d742b39-4a4a-4a9d-a55b-07e2030dfdeb-eigenvalue-s" >}}), some \\((T- \lambda\_{j} I)\\) being non-injective for a [finite-dimensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}}) means that \\(\lambda\_{j}\\) is an [eigenvalue]({{< relref "KBheigenvalue.md" >}}) of \\(T\\). \\(\blacksquare\\)