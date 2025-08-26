+++
title = "asymtotic analysis"
author = ["Houjun Liu"]
draft = false
+++

Intuition:

-   \\(O\\): \\(\leq\\)
-   \\(\theta\\): \\(=\\)
-   \\(\Omega\\): \\(\geq\\)

Definitions:

-   \\(f(n) = O(g(n)) \implies \exists n\_{0}: \forall n > n\_0, f(n) \leq c (g(n))\\)
-   \\(f(n) = \Omega(g(n)) \implies \exists n\_{0}: \forall n > n\_0, f(n) \geq c (g(n))\\)
-   \\(f(n) = \theta(g(n)) \implies \exists n\_{0}: \forall n > n\_0, f(n) \geq 1 (g(n)), f(n) \leq c (g(n))\\)


## ~ {#4c761f}

Given functions \\(f(n)\\) and \\(g(n)\\), if:

\begin{equation}
    \lim\_{n\to \infty} \left(\frac{f(n)}{g(n)}\right) = 1
\end{equation}

we say that \\(f \sim g\\).

That -- the relationship between \\(f\\) and \\(g\\) grows in a similar fashion as \\(n\\) increases. For instance:

-   \\(f(n) = n+1\\)
-   \\(g(n) = n+2\\)

Therefore:

\begin{equation}
   f\sim g = \lim\_{n\to \infty} \frac{f(n)}{g(n)} = \lim\_{n\to \infty} \frac{n+1}{n+2} = 1
\end{equation}

The \\(\sim\\) operator is _commutative_ (\\(f \sim g \Rightarrow g\sim f\\)) and _transitive_ (\\(f\sim g, g\sim h \Rightarrow f \sim h\\)).


## o(n) {#o--n}

Given two functions \\(f(n)\\), \\(g(n)\\), if their relationship shows:

\begin{equation}
   \lim\_{n \to \infty} \frac{f(n)}{g(n)} = 0
\end{equation}

we can write it as

\begin{equation}
  f = o(g)
\end{equation}

This tells us that if \\(n\\) becomes very large, \\(g\\) becomes much larger than \\(f\\). \\(f\\) does not grow nearly as fast as \\(g\\).

The operation is _not_ commutative, but is _transitive_ (\\(f = o(g), g = o(h) \Rightarrow f = o(h)\\))


## O(n) {#o--n}

Given two functions \\(f(n)\\), \\(g(n)\\).

\begin{equation}
   \lim\_{n \to \infty} \frac{f(n)}{g(n)} < \infty
\end{equation}

that the relationship between \\(f(n)\\) and \\(g(n)\\) is countable as \\(n\\) trends to infinity.

We can also say that, given \\(n\\), \\(n\_0\\), and some \\(c\\) which \\(\forall n, n > n\_0\\), there is:

\begin{equation}
   |f(n)| < |cg(n)|
\end{equation}

This tells us that \\(f(n)\\) does not grow much much faster than \\(g(n)\\).

Therefore:

-   If \\(f \sim g\\), \\(f = O(g)\\) (as they grow together, \\(f\\) is not much faster)
-   If \\(f = o(g)\\), \\(f=O(g)\\) (as \\(f\\) does not grow at all, \\(f\\) is not faster)


## \\(\theta\\)(n) {#theta--n}

\\(f=\theta(g)\\) IFF \\(f=O(g)\\) and \\(g=O(f)\\), its essentially \\(\sim\\) but without the strict requirement of a 1:1 ratio.


## \\(\omega\\)(n) and \\(\Omega\\)(n) {#omega--n--and-omega--n}

The inverses of \\(O\\) and \\(o\\):

-   \\(f(n) = O(g(n)) \Rightarrow g(n) = \omega(f(n))\\)
-   \\(f(n) = o(g(n)) \Rightarrow g(n) = \Omega(f(n))\\)
