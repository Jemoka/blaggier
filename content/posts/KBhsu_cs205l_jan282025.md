+++
title = "SU-CS205L JAN282025"
author = ["Houjun Liu"]
draft = false
+++

[Line Search]({{< relref "KBhsu_cs361_apr092024.md#line-search" >}}) and [Steepest Design]({{< relref "KBhsu_cs205l_jan232025.md#steepest-design" >}})


## Gram-Schmidt For Matrix Orthogonality {#gram-schmidt-for-matrix-orthogonality}

You can use [Gram-Schmidt]({{< relref "KBhgram_schmidt.md" >}}) to find matrix orthogonality. In particular, for a series of vectors \\(s^{(j)}\\) forming a matrix \\(A\\):

\begin{equation}
s^{(q)} = s^{(q)}- \sum\_{q'=1}^{q-1} \frac{\langle s^{(q)}, s^{(q')} \rangle\_{A}}{\langle s^{(q')}, s^{(q')} \rangle\_{A}}s^{(q')}
\end{equation}

for [Conjugate Gradient]({{< relref "KBhsu_cs361_apr092024.md#conjugate-gradient" >}}), it works out such that only one such dot products is non-zero, so we can write:

\begin{equation}
s^{(q)} = r^{(q)} + \frac{r^{(q)}\cdot r^{(q)}}{r^{(q-1)}\cdot r^{(q-1)}} s^{(q-1)}
\end{equation}

for residual \\(r^{(q)}\\), and


## [Conjugate Gradient]({{< relref "KBhsu_cs361_apr092024.md#conjugate-gradient" >}}) {#conjugate-gradient--kbhsu-cs361-apr092024-dot-md}

For \\(Ac = b\\), let's write:

Start with \\(s^{(i)} = r^{(i)} = b - Ac^{(i)}\\)

Iteration:

-   \\(\alpha^{(q)} = \frac{r^{(q)}\cdot r^{(q)}}{\langle s^{(q)}, s^{(q)} \rangle}\_{A}\\)
-   \\(c^{(q+1)} = r^{(q)}- \alpha^{(q)} As^{(q)}\\)
-   \\(s^{(q+1)} = r^{(q+1)} + \frac{r^{(q+1)} \cdot r^{(q+1)}}{r^{(q)}\cdot r^{(q)}}\cdot s^{(q)}\\) (look! the term thing in the right is the only difference between this and gradient descent, by iteratively subtracting the residual iteratively, we compute in the number of steps equal to distinct eigenvalues)

If you metric is non-symmetric, none of this applies well and hence you should use other methods.


## Local Approximations {#local-approximations}

Taylor expansion: [Taylor Series]({{< relref "KBhsu_math53_feb122024.md#taylor-series" >}})


### well-resolved functions {#well-resolved-functions}

-   Regions of a function with less variations require lower sampling rates
-   Regions of a function with more variations require higher sampling rates


### worries {#worries}

-   sampling constantly doesn't capture function's **well-resolvedness** (amount of variation)
-   non-piecewise sampling + Taylor expansion breaks during **discontinuity**

piecewise analysis allows you to fix both of these problems


### splitting training dataset and averaging {#splitting-training-dataset-and-averaging}

-   split data between two pieces
-   train 2 separate neural networks in different pieces (suppose different distributions exist in what you are trying to model)
-   inference it separately

To interpolate: k means cluster the inputs together along some dimension (say color), and then try to make a network for each cluster, then we average weights the based on the distance to each cluster.
