+++
title = "permutation"
author = ["Houjun Liu"]
draft = false
+++

A [permutation]({{< relref "KBhpermutation.md" >}}) \\(\pi\\) of some \\(\\{1,2,..., n\\}\\) is a rearrangement of this list. There are \\(n!\\) different permutations of this set.

A [permutation]({{< relref "KBhpermutation.md" >}}) is an **ORDERED** arrangement of objects.


## permutation with indistinct objects {#permutation-with-indistinct-objects}

What if you want to order a set with sub-set of indistinct objects? Like, for instance, how many ways are there to order:

\begin{equation}
10100
\end{equation}

For every permutation of \\(1\\) in this set, there are two copies being overcounted.

Let there are \\(n\\) objects. \\(n\_1\\) objects are the indistinct, \\(n\_2\\) objects are indistinct, ... \\(n\_{r}\\) objects are the same. The number of permutations are:

\begin{equation}
\frac{n!}{{n\_1}!{n\_2}! \dots  {n\_r}!}
\end{equation}

You can use iterators to give you permutations.
