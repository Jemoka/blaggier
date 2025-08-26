+++
title = "polynomial interpolation"
author = ["Houjun Liu"]
draft = false
+++

## constituents {#constituents}

\\(m\\) data points \\(\qty(x\_i,y\_{i})\\)


## requirements {#requirements}

we desire \\(c\_{j}\\) such that:

\begin{equation}
y = c\_1 + c\_{2} x + c\_3 x^{2} + \dots
\end{equation}

Given our set of basis functions \\(\phi\_{j}(x)\\) for input \\(x\\), our goal is:

\begin{equation}
y = c\_1 \phi\_{1} + c\_2 \phi\_{2} + \dots + c\_{n}\phi\_{n}
\end{equation}

the \\(\phi\\) are the [model function]({{< relref "KBhmodel_function.md#model-function" >}}) which determines our [neural network]({{< relref "KBhdeep_learning.md" >}})s.


## additional information {#additional-information}


### Monomial basis and vandermonde Matrix {#monomial-basis-and-vandermonde-matrix}

to do this, we put stuff in matrix form following forms, called the matrix of [monomial basis]({{< relref "KBhpolynomial_interpolation.md" >}}):

\begin{equation}
\mqty(1 & x\_1 & x\_1^{2} \\\ 1 & x\_2 & x\_2^{2} \\\ & \dots &) \mqty(c\_1 \\\ c\_2 \\\ c\_3) = \mqty(y\_1 \\\ y\_2 \\\ y\_3)
\end{equation}

inverting this matrix gives us the answer; this is the [Vandermonde]({{< relref "KBhpolynomial_interpolation.md" >}}) matrix. See [problem with Vandermonde martix](#problem-with-vandermonde--kbhpolynomial-interpolation-dot-md--martix)


### Lagrange Basis {#lagrange-basis}

\begin{equation}
\phi\_{k} \qty(x) = \frac{\prod\_{i\neq k}^{} x-x\_{i}}{\prod\_{i \neq k}^{} x\_{k}- x\_{i}}
\end{equation}

notice this gives a \\(A\\) as an identity, but evaluation time is more expensive because you have to do all the multiplication in sequence.

This also has no problem of being ill-conditioned unlike the [Vandermonde]({{< relref "KBhpolynomial_interpolation.md" >}}) matrix.

However, each term is now quadratic.


### Newton Basis {#newton-basis}

\begin{equation}
\phi\_{k} \qty(x) = \prod\_{i=1}^{k-1} x - x\_{i}
\end{equation}

the first entry is \\(1\\), the second entry is quadratic, and so on. This is now only quadratic in one term up to \\(k=3\\).


### overfitting {#overfitting}

For \\(m\\) data points, you can draw a unique \\(m-1\\), polynomial which fits the lines exactly.

[overfitting]({{< relref "KBhoverfitting.md" >}}) can occur, so we perform [regularization]({{< relref "KBhregularization.md" >}})

We do this as long as they are not **degenerate**: your points can't be on a line.


### problem with [Vandermonde]({{< relref "KBhpolynomial_interpolation.md" >}}) martix {#problem-with-vandermonde--kbhpolynomial-interpolation-dot-md--martix}

at higher powers, the squared results tend to be more parallel: this is bad because then small parameter adjustments will require humongous parameter values

-   and if two columns of the matrix are parallel, our rank would be at most \\(n-1\\)
-   ...meaning we don't span \\(\mathbb{R}^{n}\\)
-   ...we may not have a solution! because some target output in \\(\mathbb{R}^{n}\\) may not be hit, or could be hit many times by manipulating the parallel vectors

in general: if any columns become linearly dependent, they maybe combined in infinite number of ways; that is, we want our Vandermode matrix to have full rank.


#### near-singular matrix problem {#near-singular-matrix-problem}

**importantly**: if its even _close_ to being singular, we will have this problem.

-   with limited precision, we will struggle when columns/linear combinations of columns are too close to being parallel
-   they may not be computationally invertible
-   [condition number]({{< relref "KBhrobustness.md" >}})s can help judge how close our matrix is about to be non-invertible
