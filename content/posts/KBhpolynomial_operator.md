+++
title = "p(T)"
author = ["Houjun Liu"]
draft = false
+++

We can use the scalars of a [polynomial]({{< relref "KBhpolynomial.md" >}}) to build a new [operator]({{< relref "KBhoperator.md" >}}), which scales copies of an [operator]({{< relref "KBhoperator.md" >}}) with the coefficients \\(a\_{j}\\) of the [polynomial]({{< relref "KBhpolynomial.md" >}}).


## constituents {#constituents}

-   \\(p(z) = a\_{0} + a\_{1}z + a\_{2}z^{2} + \cdots + a\_{m}z^{m}\\), a [polynomial]({{< relref "KBhpolynomial.md" >}}) for \\(z \in \mathbb{F}\\)
-   \\(T \in \mathcal{L}(V)\\)


## requirements {#requirements}

\\(p(T)\\) is an [operator]({{< relref "KBhoperator.md" >}}) refined by:

\begin{equation}
p(T) = a\_{0} I + a\_{1} T + a\_{2} T^{2} + \cdots + a\_{m} T^{m}
\end{equation}

where, \\(T^{m}\\) is the [power of operator]({{< relref "KBhraising_operators_to_powers.md" >}})


## additional information {#additional-information}


### \\(p(z) \to p(T)\\) is a linear [function]({{< relref "KBhfunction.md" >}}) {#p--z--to-p--t--is-a-linear-function--kbhfunction-dot-md}

-   additivity: \\((p\_{1} + p\_2)T = (a\_{0}+b\_{0})I ... = a\_{0} I + b\_{0} I ... = p\_{1}(T) + p\_{2}(T)\\)
-   homogeneity: \\((\lambda p)T = (\lambda a\_{0})I ... = \lambda (a\_{0} I  \dots)  = \lambda p(T)\\)


### [polynomial of operator]({{< relref "KBhpolynomial_operator.md" >}}) is commutative {#polynomial-of-operator--kbhpolynomial-operator-dot-md--is-commutative}

1.  \\((pq)T = p(T) q(T)\\)
2.  \\(p(T)q(T) = q(T)p(T)\\)

The first result can be shown because the [product of polynomial]({{< relref "KBhproduct_of_polynomial.md" >}})s are a result of rote [algebra]({{< relref "KBhalgebra.md" >}}), and when you come across \\(pq\\) trying to combine \\(z^{j+k}\\) at each FOIL part, you just swap that into \\(T^{j+k} = T^{j}T^{k}\\). Then, you re-split the constants towards either side (i.e. if the FOIL gave \\(a\_{j} b\_{k} T^{j+k} \implies  a\_{j} T^{j} b\_{k} T^{k}\\)), then you factor the sums out into two separate pieces to get to \\(p(T)\\) and \\(q(T)\\).

The second result: \\(p(T) q(T) = (pq)(T) = (qp)T = q(T) p(T)\\), with the middle [commutativity]({{< relref "KBhcommutivity.md" >}}) because \\(\mathbb{F}\\) commutes.
