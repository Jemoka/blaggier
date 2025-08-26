+++
title = "homogeneity"
author = ["Houjun Liu"]
draft = false
+++

## [statistic]({{< relref "KBhstastistic.md" >}})al context {#statistic--kbhstastistic-dot-md--al-context}

[Homogeneity]({{< relref "KBhhomogeneity.md" >}}) is a measure of how similar many things are.


## [Linear Algebra]({{< relref "KBhlinear_algebra_index.md" >}}) context {#linear-algebra--kbhlinear-algebra-index-dot-md--context}


### ...of linear maps {#dot-dot-dot-of-linear-maps}

[homogeneity]({{< relref "KBhhomogeneity.md" >}}) is a property of [Linear Map]({{< relref "KBhlinear_map.md" >}})s to describe the ability to "factor out" scalars


### ...of linear equations {#dot-dot-dot-of-linear-equations}

A [homogenous]({{< relref "KBhhomogeneity.md" >}}) linear equation is one which the constant term on the right of the equations are \\(0\\).


#### [homogenous]({{< relref "KBhhomogeneity.md" >}}) system with more variables than equations has nonzero solutions {#homogenous--kbhhomogeneity-dot-md--system-with-more-variables-than-equations-has-nonzero-solutions}

Proof:
You can imagine the system as a [matrix]({{< relref "KBhmatricies.md" >}}) equation:

\begin{equation}
Av = 0
\end{equation}

where, \\(v\\) is a list of input variables, and \\(A\\) is a [coefficient]({{< relref "KBhpolynomial.md" >}}) [matrix]({{< relref "KBhmatricies.md" >}}). Note that \\(A = \mathbb{F}^{n} \to  \mathbb{F}^{m}\\), where \\(n\\) is the number of variables, and \\(m\\) the number of equations.

Now, the input variables \\(v\\) of the above expression is in the [null space]({{< relref "KBhnull_space.md" >}}) of \\(A\\). The question of "whether is there non-zero solutions" can be rephrased as given \\(Av=0\\), does \\(v=0\\)?" Otherwise known as "is \\(null\ A=\\{0\\}\\)?": that is, "is \\(A\\) [injective]({{< relref "KBhinjectivity.md" >}})?"

Given the fact that [map to smaller space is not injective]({{< relref "KBhlinear_map.md#map-to-smaller-space-is-not-id-e3ff3c90-e719-4c5b-afc4-efcec3169fb2-injective" >}}), if \\(m <n\\), the map is not going to be [injective]({{< relref "KBhinjectivity.md" >}}). Therefore, we want \\(m<n\\), meaning we want more variables (\\(n\\)) than equations (\\(m\\)) to have non-zero solutions.


#### in[homogenous]({{< relref "KBhhomogeneity.md" >}}) system with more equations than variables has no solutions for an arbitrary set of constants {#in-homogenous--kbhhomogeneity-dot-md--system-with-more-equations-than-variables-has-no-solutions-for-an-arbitrary-set-of-constants}

Proof:
You can imagine the system as a [matrix]({{< relref "KBhmatricies.md" >}}) equation:

\begin{equation}
Av = C
\end{equation}

where, \\(v\\) is a list of input variables, and \\(A\\) is a [coefficient]({{< relref "KBhpolynomial.md" >}}) [matrix]({{< relref "KBhmatricies.md" >}}). Note that \\(A = \mathbb{F}^{n} \to  \mathbb{F}^{m}\\), where \\(n\\) is the number of variables, and \\(m\\) the number of equations.

Now, a valid solution of the above expression means that \\(Av=C\\) for all \\(v\\) (as they are, of course, the variables.) If we want the expression to have a solution for all choices of \\(C\\), we desire that the [range]({{< relref "KBhrange.md" >}}) of \\(A\\) to equal to its codomain---that we desire it to be [surjective]({{< relref "KBhsurjectivity.md" >}}).

Given the fact that [map to bigger space is not surjective]({{< relref "KBhlinear_map.md#map-to-bigger-space-is-not-id-1af529ce-e2fb-43a4-8f13-aee1dc743b5f-surjective" >}}), if \\(m > n\\), the map is not going to be [surjective]({{< relref "KBhsurjectivity.md" >}}). Therefore, we want \\(m>n\\), meaning we want more equations (\\(m\\)) than variables (\\(n\\)) to have no solutions for arbitrary \\(C\\).