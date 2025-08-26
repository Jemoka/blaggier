+++
title = "dot product"
author = ["Houjun Liu"]
draft = false
+++

The [dot product]({{< relref "KBhdot_product.md" >}}) is a property of [real vector space]({{< relref "KBhvector_space.md#vector-space-over-fields" >}})s which is a simplified version of an [inner product]({{< relref "KBhinner_product.md" >}}); specifically, it obviates the need to complex-conjugate anything because, well, \\(\bar{n} = n, n \in \mathbb{R}\\). The dot-product also yield a real number.


## constituents {#constituents}

-   \\(x, y \in \mathbb{R}^{n}\\) (NOTE the realness)
    -   where, \\(x = (x\_1, \dots, x\_{n})\\) and \\(y = (y\_1, ..., y\_{n})\\)


## requirements {#requirements}

As we are familiar with, element-wise product and sum

\begin{equation}
x\cdot y = x\_1y\_1 + \dots + x\_{n}y\_{n}
\end{equation}


## additional information {#additional-information}


### properties of the dot product {#properties-of-the-dot-product}

1.  For fixed \\(y \in \mathbb{R}^{n}\\), the dot product map that sends \\(x\\) to \\(x \cdot y\\) is linear (inheriting add. and homo. from algebra)
2.  \\(x \cdot x = 0\\) IFF \\(x =0\\) (no negs allowed (above), so every slot has to have a zero to multiply to 0)
3.  \\(x \cdot x > 0\\) for all \\(x \in \mathbb{R}^{n}\\) (neg times neg is pos)
4.  \\(x \cdot y = y \cdot x\\) for reals; by inheriting from each element's [field]({{< relref "KBhfield.md" >}})


### orthogonality test {#orthogonality-test}

The [dot product]({{< relref "KBhdot_product.md" >}}) is an [orthogonality test](#orthogonality-test). If the [dot product]({{< relref "KBhdot_product.md" >}}) between the two vectors is \\(0\\), they are definitely orthogonal.


### geometric interpretation of the [dot product]({{< relref "KBhdot_product.md" >}}) {#geometric-interpretation-of-the-dot-product--kbhdot-product-dot-md}

Well, we have some shape between two vectors; then, we can first write out the [law of cosines]({{< relref "KBhlaw_of_cosines.md" >}}). Then, we can see that, for two vectors from the same origin, we can say that the projection of vector \\(\vec{A}\\) onto \\(\vec{B}\\) is written as:

\begin{equation}
|\vec{A}||\vec{B}|\cos \theta
\end{equation}

where, \\(\theta\\) is the angle between the two vectors.
