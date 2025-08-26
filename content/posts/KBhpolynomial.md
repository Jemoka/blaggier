+++
title = "polynomial"
author = ["Houjun Liu"]
draft = false
+++

A [polynomial]({{< relref "KBhpolynomial.md" >}}) is a [polynomial]({{< relref "KBhpolynomial.md" >}})


## constituents {#constituents}

-   a function \\(p: \mathbb{F} \to \mathbb{F}\\)
-   [coefficient]({{< relref "KBhpolynomial.md" >}}) \\(a\_0, \dots, a\_{m} \in \mathbb{F}\\)


## requirements {#requirements}

A polynomial is defined by:

\begin{equation}
p(z)=a\_0+a\_1z+a\_2z^{2}+\dots +a\_{m}z^{m}
\end{equation}

for all \\(z \in \mathbb{F}\\)


## additional information {#additional-information}


### degree of a polynomial \\(\deg p\\) {#degree-of-a-polynomial-deg-p}

A [polynomial]({{< relref "KBhpolynomial.md" >}})'s [degree](#degree-of-a-polynomial-deg-p) is the value of the highest non-zero exponent. That is, for a polynomial:

\begin{equation}
p(z) = a\_0+a\_1z+\dots +a\_{m}z^{m}
\end{equation}

with \\(a\_{m} \neq 0\\), the [degree](#degree-of-a-polynomial-deg-p) of it is \\(m\\). We write \\(\deg p = m\\).

A polynomial \\(=0\\) is defined to have degree \\(-\infty\\)

Of course, a polynomial with [degree](#degree-of-a-polynomial-deg-p) \\(n\\), times a [polynomial]({{< relref "KBhpolynomial.md" >}}) of degree \\(m\\), has degree \\(mn\\). We see that:

\begin{equation}
x^{n}x^{m} = x^{n+m}
\end{equation}


### \\(\mathcal{P}(\mathbb{F})\\) {#mathcal-p--mathbb-f}

\\(\mathcal{P}(\mathbb{F})\\) is the set of all [polynomial]({{< relref "KBhpolynomial.md" >}})s with [coefficient]({{< relref "KBhpolynomial.md" >}})s in \\(\mathbb{F}\\).


### \\(\mathcal{P}(\mathbb{F})\\) is a vector space over \\(\mathbb{F}\\) {#mathcal-p--mathbb-f--is-a-vector-space-over-mathbb-f}

We first see that [polynomial]({{< relref "KBhpolynomial.md" >}})s are functions from \\(\mathbb{F}\to \mathbb{F}\\). We have shown previously that [F^s is a Vector Space Over F]({{< relref "KBhfs_is_a_vector_space.md" >}}).

Therefore, we can first say that \\(\mathcal{P}(\mathbb{F}) \subset \mathbb{F}^{\mathbb{F}}\\).

Lastly, we simply have to show that \\(\mathcal{P}(\mathbb{F})\\) is a [subspace]({{< relref "KBhsubspace.md" >}}).

-   [zero]({{< relref "KBhzero.md" >}}) exists by taking all \\(a\_{m} = 0\\)
-   [addition]({{< relref "KBhadding.md" >}}) is [closed]({{< relref "KBhclosed.md" >}}) by inheriting [commutativity]({{< relref "KBhcommutivity.md" >}}) and [distributivity]({{< relref "KBhdistributivity.md" >}}) in \\(\mathbb{F}\\)
-   [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) is [closed]({{< relref "KBhclosed.md" >}}) by [distributivity]({{< relref "KBhdistributivity.md" >}})

Having satisfied the conditions of [subspace]({{< relref "KBhsubspace.md" >}}), \\(\mathcal{P}(\mathbb{F})\\) is a [vector space]({{< relref "KBhvector_space.md" >}}). \\(\blacksquare\\)


### \\(\mathcal{P}\_{m}(\mathbb{F})\\) {#mathcal-p-m--mathbb-f}

For \\(m\geq 0\\), \\(\mathcal{P}\_{m}(\mathbb{F})\\) denotes the set of all [polynomial]({{< relref "KBhpolynomial.md" >}})s with [coefficient]({{< relref "KBhpolynomial.md" >}})s \\(\mathbb{F}\\) and degree at most \\(m\\).


### [product of polynomials]({{< relref "KBhproduct_of_polynomial.md" >}}) {#product-of-polynomials--kbhproduct-of-polynomial-dot-md}

see [product of polynomials]({{< relref "KBhproduct_of_polynomial.md" >}})


### [polynomial of operator]({{< relref "KBhpolynomial_operator.md" >}}) {#polynomial-of-operator--kbhpolynomial-operator-dot-md}

see [polynomial of operator]({{< relref "KBhpolynomial_operator.md" >}})
