+++
title = "SU-CS361 MAY092024"
author = ["Houjun Liu"]
draft = false
+++

## optimization uncertainty {#optimization-uncertainty}

-   irreducible uncertainty: [uncertainty]({{< relref "KBhuncertainty.md" >}}) inherent to a system
-   epistemic uncertainty: subjective lack of knowledge about a system from our standpoint

uncertainty can be presented as a vector of random variables, \\(z\\), where the designer has no control. Feasibility of a design point, then, depends on \\((x, z) \in \mathcal{F}\\), where \\(\mathcal{F}\\) is the feasible set of design points.


### set-based uncertainty {#set-based-uncertainty}

[set-based uncertainty](#set-based-uncertainty) treats uncertainty \\(z\\) as belonging to some set \\(\bold{Z}\\). Which means that we typically use minimax to solnve:

\begin{equation}
\min\_{x \in X} \max\_{z \in Z} f(x,z)
\end{equation}

we don't assume anything about the distribution of \\(z\\).


### probabilistic uncertainty {#probabilistic-uncertainty}


#### uncertainty expected value optimization {#uncertainty-expected-value-optimization}

Instead of \\(z \in Z\\) blindly, we assume some underlying distribution of \\(z\\). The most natural way to do this is to compute the expectation directly:

\begin{equation}
\min\_{x \in X} \mathbb{E}\_{z \sim P} [f(x,z)] = \min\_{x \in X}\int\_{Z} f(x,z) p(z) \dd{z}
\end{equation}

<!--list-separator-->

-  problem additive noise

    For a moment, let's assume that the noise is added directly:

    \begin{equation}
    f(x,z) = f(X) + z
    \end{equation}

    Also, let's consider \\(z \sim \mathcal{N}(0, \Sigma)\\).

    This means that:

    \begin{equation}
    \min\_{x \in X} \mathbb{E}\_{z \sim P} [f(x,z)] = \min\_{x \in X} \qty(\mathbb{E}\_{z \sim P} [f(x)] + \mathbb{E}\_{z \sim P}[z]) = \min\_{x \in X} \qty(f(x) + 0)
    \end{equation}

    meaning, in this specific case, optimizing for expected value is bad.


#### uncertainty variance optimization {#uncertainty-variance-optimization}

\begin{align}
\Var[f(x,z)] &= \mathbb{E}\_{z \in Z} \qty[\qty(f(x,z) - \mathbb{E}\_{z \in Z}\qty[f(x,z)])^{2}]   \\\\
&= \int\_{z \in Z} f(x,z)^{2}p(z) \dd{z} - \mathbb{E}\_{z \in Z} \qty[f(x,z)]^{2}
\end{align}

If you have a covariance matrix and a mean vector, you can formulate:

\begin{equation}
\min\_{x} x^{\top} u + \lambda x^{\top} \Sigma x
\end{equation}


#### feasible set approaches {#feasible-set-approaches}

<!--list-separator-->

-  statistical feasibility

    "the probability that a design point is feasible"

    \begin{equation}
    P((x,z) \in \mathcal{F}) = \int\_{z} ((x,z) \in \mathcal{F}) p(z) \dd{z}
    \end{equation}
