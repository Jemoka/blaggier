+++
title = "SU-CS238V FEB112025"
author = ["Houjun Liu"]
draft = false
+++

## Key Sequence {#key-sequence}


## Notation {#notation}

-   [Linear Dynamical System]({{< relref "KBhlinear_dynamical_system.md#linear-dynamical-system" >}})
-   [set operations]({{< relref "KBhset_operations.md" >}})


## New Concepts {#new-concepts}

-   [reachability analysis]({{< relref "KBhreachability_analysis.md#reachability-analysis" >}})
-   [Set Propagation Techniques](#set-propagation-techniques)


## Important Results / Claims {#important-results-claims}


## Questions {#questions}

---


## Set Propagation Techniques {#set-propagation-techniques}

Now, how exactly do we compute the [reachable set]({{< relref "KBhreachability_analysis.md#reachability-analysis" >}}).


### ...for [Linear Dynamical Systems]({{< relref "KBhlinear_dynamical_system.md#linear-dynamical-system" >}}) {#dot-dot-dot-for-linear-dynamical-systems--kbhlinear-dynamical-system-dot-md}

Let's consider writing \\(s'\\) as a function of \\(s, x\\). For a linear system, we have:

\begin{equation}
s' = \qty(T\_{s}+T\_{a}\Pi\_{o}O\_{s})s + T\_{a}\Pi\_{o}x\_{o} + T\_{a}x\_{a} + x\_{s}
\end{equation}

our goal is to then **write this** for **sets** of initial \\(s\\). Write this in terms of [Set Propagation Techniques](#set-propagation-techniques):

\begin{equation}
\mathcal{S}' = \qty(T\_{s} + T\_{a}\Pi\_{o}O\_{s}) \mathcal{S} \oplus T\_{a}\Pi\_{o}\mathcal{X}\_{o} \oplus T\_{a}\mathcal{X}\_{a} \oplus \mathcal{X}\_{s}
\end{equation}

We can then build out the reachable set over time by continuously applying this expression, namely:

\begin{equation}
\mathcal{R}\_{d} = \qty(T\_{s} + T\_{a}\Pi\_{o}O\_{s}) \mathcal{S}\_{d-1} \oplus T\_{a}\Pi\_{o}\mathcal{X}\_{o} \oplus T\_{a}\mathcal{X}\_{a} \oplus \mathcal{X}\_{s}
\end{equation}

Now, to bound our reachable set for horizon up to \\(t\\), we can write:

\begin{equation}
\mathcal{R}\_{1:t} = \bigcup\_{d=1}^{t} \mathcal{R}\_{d}
\end{equation}

Now, if you want to bound your reachable set up to infinite horizon, we have to show for **SOME** \\(d\\) we have:

\begin{equation}
\mathcal{R}\_{d} \subseteq \mathcal{R}\_{d-1}
\end{equation}

(why some but not all? because once this happens once, you are forever trapped into the set \\(\mathcal{R}\_{d-1}\\) at least  (since the next one is smaller) and so will be bounded forever.)


## set representations {#set-representations}

1.  finite representations: specify all points in the set without enumerating all systems
2.  **convex** tend to be nice: a set \\(\mathcal{P}\\) is convex if \\(\alpha p + \qty(1-\alpha) p \in \mathcal{P}\\), for all \\(p,q \in \mathcal{P}\\) and \\(\alpha \in [0,1]\\)


### polytope {#polytope}

We are most interested in [polytope](#polytope): a bounded intersection of half-spaces---a series of inequality \\(a^{T}x \leq b\\).

Two types of polytopes:


#### H polytopes {#h-polytopes}

a set of half-spaces: \\(Ax \leq b\\) for matrices \\(A, b\\), which are a series of things that are specified.


#### V polytope {#v-polytope}

the convex hull of a set of vertices: \\(\text{conv}\qty(\mathcal{V})\\) --- i.e. give a set of vertices at the edges of the hull.

[set operations]({{< relref "KBhset_operations.md" >}}) for \\(\mathcal{V}\\) polytopes:

\begin{equation}
A\mathcal{P} = \text{conv}\qty(A v \midv \in\mathcal{V})
\end{equation}

\begin{equation}
\mathcal{P} \oplus \mathcal{Q} = \text{conv}\qty(\qty{v\_1 + v\_2 \mid v\_1 \in \mathcal{V}\_{p}, v\_2 \in \mathcal{V}\_{q}})
\end{equation}

^ computing this convex hull is **wayyyy** to expensive as verticies scale; we can solve this with one of two ways.

1.  use a [zonotope](#zonotope) instead
2.  overapproximate: "bound it with a box"---which do not loose our safety guarantees if it does **not** intersect with the avoid set; if it **does** intersect with the avoid set, we can't make any conclusions. see [overapproximation]({{< relref "KBhoverapproximation.md#overapproximation" >}})


### zonotope {#zonotope}

A [zonotope](#zonotope) is a symmetric [polytope](#polytope). A [zonotope](#zonotope) is a subset of [polytope](#polytope) that's easy to parametrize.

-   a set of vector generators \\(g\\)
-   a center point \\(c\\)

for any ordering of \\(g\\), \\(g\_{j}\\), we maintain a set of active verticies \\(\qty {c}\\) in the beginning and concatenate one of the remaining $g<sub>j</sub>$s into each vertex and also in the negative direction. And then, get a convex hull.

that is:

\begin{equation}
\mathcal{Z} = \qty {c + \sum\_{i=1}^{m} \alpha\_{i} g\_{i} \mid \alpha\_{i} \in \qty {-1, 1}}
\end{equation}

[set operations]({{< relref "KBhset_operations.md" >}}) for [zonotope](#zonotope)

\begin{equation}
A \mathcal{L} = \qty (Ac, \langle Ag\_{i\_1:m} \rangle)
\end{equation}

\begin{equation}
\mathcal{L} \oplus \mathcal{L} = \qty(c+c', \langle g\_{1:m}, g'\_{1:m} \rangle)
\end{equation}
