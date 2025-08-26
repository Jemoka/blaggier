+++
title = "quotient group"
author = ["Houjun Liu"]
draft = false
+++

a [quotient group]({{< relref "KBhquotient_group.md" >}}) is a [group]({{< relref "KBhgroup.md" >}}) which is the product of mapping things out.


## [subgroup]({{< relref "KBhsubgroup.md" >}})s {#subgroup--kbhsubgroup-dot-md--s}

The set of integers \\(\mathbb{Z}\\) is obviously a [group]({{< relref "KBhgroup.md" >}}). You can show it to yourself that multiples of any number in the [group]({{< relref "KBhgroup.md" >}}) is a [subgroup]({{< relref "KBhsubgroup.md" >}}) of that group.

For instance:

\\(3 \mathbb{Z}\\), the set \\(\\{\dots -6, -3, 0, 3, 6, \dots\\}\\) is a [subgroup]({{< relref "KBhsubgroup.md" >}})


## actual [quotient group]({{< relref "KBhquotient_group.md" >}})s {#actual-quotient-group--kbhquotient-group-dot-md--s}

We can use the [subgroup]({{< relref "KBhsubgroup.md" >}}) above to mask out a [group]({{< relref "KBhgroup.md" >}}). The resulting product is **NOT** a [subgroup]({{< relref "KBhsubgroup.md" >}}), but its a new [group]({{< relref "KBhgroup.md" >}}) with individual elements being subsets of our original group.

For instance, the \\(\mod 3\\) quotient group is written as:

\begin{equation}
\mathbb{Z} / 3 \mathbb{Z}
\end{equation}

Each element in this new group is a set; for instance, in \\(\mathbb{Z} / 3\mathbb{Z}\\), \\(0\\) is actually the set \\(\\{\dots -6, -3, 0, 3, 6, \dots\\}\\) (i.e. the [subgroup]({{< relref "KBhsubgroup.md" >}}) that we were masking by). Other elements in the quotient space ("1", a.k.a. \\(\\{ \dots, -2, 1, 4, 7 \dots \\}\\), or "2", a.k.a. \\(\\{\dots, -1, 2, 5, 8 \dots \\}\\)) are called "cosets" of \\(3 \mathbb{Z}\\). You will notice they are not a [subgroup]({{< relref "KBhsubgroup.md" >}})s.
