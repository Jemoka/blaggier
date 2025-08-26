+++
title = "fundamental theorem of linear maps"
author = ["Houjun Liu"]
draft = false
+++

The [dimension]({{< relref "KBhdimension.md" >}}) of the [null space]({{< relref "KBhnull_space.md" >}}) plus the [dimension]({{< relref "KBhdimension.md" >}}) of the [range]({{< relref "KBhrange.md" >}}) of a [Linear Map]({{< relref "KBhlinear_map.md" >}}) equals the [dimension]({{< relref "KBhdimension.md" >}}) of its domain.

This also implies that both the [null space]({{< relref "KBhnull_space.md" >}}) (but this one's trivial b/c the [null space]({{< relref "KBhnull_space.md" >}}) is a [subspace]({{< relref "KBhsubspace.md" >}}) of the already [finite-dimensional]({{< relref "KBhfinite_dimensional_vector_space.md" >}}) domain) and the **[range]({{< relref "KBhrange.md" >}})** as well is [finite-dimensional]({{< relref "KBhfinite_dimensional_vector_space.md" >}}).


## constituents {#constituents}

-   \\(T \in \mathcal{L}( V,W )\\)
    -   [finite-dimensional]({{< relref "KBhfinite_dimensional_vector_space.md" >}}) \\(V\\) (otherwise [commenting]({{< relref "KBhdocumentation_and_specification.md#commenting" >}}) on computing its [dimension]({{< relref "KBhdimension.md" >}}) doesn't make sense)


## requirements {#requirements}

\begin{equation}
\dim V = \dim null\ T + \dim range\ T
\end{equation}

for \\(T \in \mathcal{L}(V,W)\\)


## proof {#proof}

We desire that \\(\dim V = \dim null\ T + \dim range\ T\\) for \\(T \in \mathcal{L}(V,W)\\).

Let us construct a [basis]({{< relref "KBhbasis.md" >}}) of the [null space]({{< relref "KBhnull_space.md" >}}) of \\(T\\), \\(u\_1, \dots u\_{m}\\). This makes \\(\dim null\ T = m\\).

We can extend this list to a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\), the domain, with some vectors \\(v\_1, \dots v\_{n}\\). This makes the \\(\dim V = m+n\\).

We now desire that \\(\dim range\ T = n\\). We show this by showing \\(Tv\_{1}, \dots Tv\_{n}\\) is a [basis]({{< relref "KBhbasis.md" >}}) of \\(range\ T\\).

Recall that \\(u\_1, \dots u\_{m}, v\_1, \dots v\_{n}\\) is a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\) the domain of \\(T\\). This means that any element that _can_ go into \\(T\\) takes the shape of:

\begin{equation}
v = a\_1u\_1+ \dots +a\_{m}u\_{m} + b\_{1}v\_1 + \dots + b\_{n}v\_{n}
\end{equation}

Recall also that the definition of the [range]({{< relref "KBhrange.md" >}}) of \\(T\\) is that:

\begin{equation}
range\ T = \\{Tv: v \in V\\}
\end{equation}

Therefore, every element of the [range]({{< relref "KBhrange.md" >}}) of \\(T\\) takes the shape of \\(Tv\\): meaning:

\begin{equation}
Tv = a\_1Tu\_1+ \dots +a\_{m}Tu\_{m} + b\_{1}Tv\_1 + \dots + b\_{n}Tv\_{n}
\end{equation}

by additivity and homogeneity of [Linear Map]({{< relref "KBhlinear_map.md" >}})s.

Now, \\(Tu\_{j}=0\\), because each \\(u\_{j}\\) is a [basis]({{< relref "KBhbasis.md" >}}) (and so definitely at least an element of) the [null space]({{< relref "KBhnull_space.md" >}}) of \\(T\\). This makes the above expression:

\begin{equation}
Tv = 0 + b\_{1}Tv\_1 + \dots + b\_{n}Tv\_{n} = b\_{1}Tv\_1 + \dots + b\_{n}Tv\_{n}
\end{equation}

Ok. Given that all elements of the [range]({{< relref "KBhrange.md" >}}) can be constructed by a [linear combination]({{< relref "KBhlinear_combination.md" >}}) of \\(Tv\_{1} \dots Tv\_{n}\\), we declare that the list [span]({{< relref "KBhspan.md" >}})s the [range]({{< relref "KBhrange.md" >}}) of \\(T\\). Notably, as \\(V\\) is [finite-dimensional]({{< relref "KBhfinite_dimensional_vector_space.md" >}}) and \\(v\_1, \dots v\_{n}\\) is a sublist of its [basis]({{< relref "KBhbasis.md" >}}), \\(n < \infty\\) and so the [range]({{< relref "KBhrange.md" >}}) of \\(T\\) is also [finite-dimensional]({{< relref "KBhfinite_dimensional_vector_space.md" >}}).

To finish showing \\(Tv\_{1}, \dots, Tv\_{n}\\) to be a [basis]({{< relref "KBhbasis.md" >}}) of \\(range\ T\\), we have to show that its [linearly independent]({{< relref "KBhlinear_independence.md" >}}).

Suppose:

\begin{equation}
c\_1Tv\_{1} + \dots + c\_{n}Tv\_{n} = 0
\end{equation}

By [homogeneity]({{< relref "KBhhomogeneity.md" >}}) and additivity, we have that:

\begin{equation}
T(c\_1v\_{1} + \dots + c\_{n}v\_{n}) = 0
\end{equation}

this makes \\(c\_1v\_1 + \dots\\)  a member of the [null space]({{< relref "KBhnull_space.md" >}}) of \\(T\\). Recall that \\(u\_1, \dots u\_{m}\\) were a [basis]({{< relref "KBhbasis.md" >}}) thereof, this means that the [linear combination]({{< relref "KBhlinear_combination.md" >}}) of \\(v\_{j}\\) can be written as a [linear combination]({{< relref "KBhlinear_combination.md" >}}) of \\(u\_{j}\\):

\begin{equation}
c\_1 v\_1 + \dots + c\_{n}v\_{n} = d\_1 u\_{1} + \dots + d\_{m} u\_{m}
\end{equation}

Of course, the list \\(u\_1, \dots u\_{m}, v\_1, \dots v\_{n}\\) is [linearly independent]({{< relref "KBhlinear_independence.md" >}}) as it is a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\). This makes \\(c\_{j}=d\_{j}=0\\) (to see this, move all the \\(d\_{j}u\_{j}\\) to the left and apply definition of [linear independence]({{< relref "KBhlinear_independence.md" >}})).

We have therefore shown that, given

\begin{equation}
c\_1Tv\_{1} + \dots + c\_{n}Tv\_{n} = 0
\end{equation}

\\(c\_1 = \dots = c\_{n} =0\\), satisfying the definition of [linear independence]({{< relref "KBhlinear_independence.md" >}}) of the list of \\(Tv\_{j}\\).

Having shown that \\(Tv\_{j}\\) to be a [linearly independent]({{< relref "KBhlinear_independence.md" >}}) [spanning]({{< relref "KBhspan.md#spans" >}}) list of \\(range\ T\\), we can conclude that it is indeed a [basis]({{< relref "KBhbasis.md" >}}) of \\(range\ T\\).

This makes the \\(\dim range\ T = n\\), as desired. \\(\blacksquare\\)