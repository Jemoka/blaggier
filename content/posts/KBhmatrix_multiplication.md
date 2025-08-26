+++
title = "matrix multiplication"
author = ["Houjun Liu"]
draft = false
+++

[matrix multiplication]({{< relref "KBhmatrix_multiplication.md" >}}) is defined such that the expression \\(\mathcal{M}(ST) = \mathcal{M}(S)\mathcal{M}(T)\\) holds:

\begin{equation}
(AC)\_{j,k} = \sum\_{r=1}^{n}A\_{j,r}C\_{r,k}
\end{equation}

While matrix multiplication is [distributive]({{< relref "KBhdistributivity.md" >}}) and [associative]({{< relref "KBhassociative.md" >}}), it is ****NOT****!!!!!!!!!!! [commutative]({{< relref "KBhcommutivity.md" >}}). I hope you can see that \\(ST\neq TS\\).


## memorization {#memorization}

-   its always row-by-column, move down rows first then columns
-   multiply element-wise and add (row times column and add)


## other ways of thinking about [matrix multiplication]({{< relref "KBhmatrix_multiplication.md" >}}) {#other-ways-of-thinking-about-matrix-multiplication--kbhmatrix-multiplication-dot-md}

-   it is "row times column": \\((AC)\_{j,k} = A\_{j, .} \cdot C\_{., k}\\)
-   it is "matrix times columns": \\((AC)\_{. , k} = A C\_{., k}\\)


## matrix as a linear combinator {#matrix-as-a-linear-combinator}

Suppose \\(A\\) is an \\(m\\) by \\(n\\) matrix; and \\(c = \mqty(c\_1\\\ \vdots\\\ c\_{0})\\) is an \\(n\\) by \\(1\\) matrix; then:

\begin{equation}
Ac = c\_1 A\_{., 1} + \dots  + c\_{n} A\_{., n}
\end{equation}

(i.e. you can use a vector to linearly combinate the column vectors.)


## linear maps are like matrix multiplication {#linear-maps-are-like-matrix-multiplication}

\begin{equation}
\mathcal{M}(Tv) = \mathcal{M}(T)M(v)
\end{equation}

"the [matrix of a vector]({{< relref "KBhmatricies.md#id-7a09bc5f-6de2-485f-8c29-b94999299cc6-matrix-of-a-vector" >}}) formed by applying some [Linear Map]({{< relref "KBhlinear_map.md" >}}) \\(T\\) onto \\(v\\) is the same as the product of the [matrix]({{< relref "KBhmatricies.md" >}}) of \\(T\\) and the [matrix of a vector]({{< relref "KBhmatricies.md#id-7a09bc5f-6de2-485f-8c29-b94999299cc6-matrix-of-a-vector" >}}) of \\(v\\)"

Proof:

Let \\(v\_1 \dots v\_{n}\\) be a [basis]({{< relref "KBhbasis.md" >}}) of \\(v\\).

So, we have that \\(Tv = c\_1Tv\_{1} + \dots + c\_{n}T v\_{n}\\) by the additivity and [homogeneity]({{< relref "KBhhomogeneity.md" >}}) of \\(T\\).

Then, converting it all to [matricies]({{< relref "KBhmatricies.md" >}}):

\begin{align}
\mathcal{M}(Tv) &= c\_1 \mathcal{M}(Tv\_{1}) + \dots + c\_{n} \mathcal{M}(Tv\_{n})   \\\\
&= c\_1 \mathcal{M}(T)\_{.,1} + \dots + c\_{n}\mathcal{M}(T)\_{.,n}
\end{align}

because the columns of a [matrix]({{< relref "KBhmatricies.md" >}}) represent where each [basis]({{< relref "KBhbasis.md" >}}) [vector]({{< relref "KBhvector.md" >}}) gets taken in the new space.

You will notice now that \\(c\_1 \dots c\_{n}\\) are the scalars needed to construct \\(v\\), and that \\(\mathcal{M}(T)\_{.,1} \dots\\) are the [vector]({{< relref "KBhvector.md" >}})s needed to construct \\(\mathcal{M}(T)\\).

So:

\begin{equation}
c\_1 \mathcal{M}(T)\_{.,1} + \dots + c\_{n}\mathcal{M}(T)\_{.,n} = \mathcal{M}(T) \mathcal{M}(v) = \mathcal{M}(Tv)
\end{equation}

as desired. \\(\blacksquare\\)