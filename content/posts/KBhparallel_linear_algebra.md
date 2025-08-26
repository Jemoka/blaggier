+++
title = "affine subset"
author = ["Houjun Liu"]
draft = false
+++

an [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}}) of \\(V\\) is a subset of \\(V\\) that is the [sum of a vector and one of its subspace]({{< relref "KBhsum_of_vector_and_subspace.md" >}}); that is, an [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}}) of \\(V\\) is a subset of \\(V\\) of the form \\(v+U\\) for \\(v \in V\\) and [subspace]({{< relref "KBhsubspace.md" >}}) \\(U \subset V\\).

for \\(v \in V\\) and \\(U \subset V\\), an [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}}) \\(v+U\\) is said to be [parallel]({{< relref "KBhparallel_linear_algebra.md" >}}) to \\(U\\).

that is, an [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}}) for \\(U \subset V\\) and \\(v \in V\\):

\begin{equation}
v + U = \\{v+u : u \in U\\}
\end{equation}


## additional information {#additional-information}


### two [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}})s [parallel]({{< relref "KBhparallel_linear_algebra.md" >}}) to \\(U\\) are either equal or disjoint {#two-affine-subset--kbhparallel-linear-algebra-dot-md--s-parallel--kbhparallel-linear-algebra-dot-md--to-u-are-either-equal-or-disjoint}

Suppose \\(U\\) is a [subspace]({{< relref "KBhsubspace.md" >}}) of \\(V\\); and \\(v,w \in V\\), then, if one of the following is true all of them are true:

1.  \\(v-w \in U\\)
2.  \\(v+U = w+U\\)
3.  \\((v+U) \cap (w+U) \neq \emptyset\\)


#### \\(1 \implies 2\\) {#1-implies-2}

Given \\(v-w \in U\\)....

For an element in \\(v+U\\), we have that \\(v+u = (w-w)+v+u = w+((v-w)+u) \in w + U\\). This is because \\(U\\) is closed so adding \\(v-w \in U\\) and \\(u\\) will remain being in \\(U\\). \\(w-w=0\\) just by everything being in \\(V\\).

We now have \\(v+u \in w+U\ \forall u \in U\\); we now can reverse the argument to argue in a similar fashion that \\(w+u \in v+U\ \forall u \in U\\). So, we have that \\(v+U \subset w+U\\) and \\(w+U \subset v+U\\). So \\(v+U = w+U\\), as desired.


#### \\(2 \implies 3\\) {#2-implies-3}

By definition of \\(v+U=w+U\\) as long as \\(v+U\\) and \\(w+U\\) is not empty sets, which they can't be because \\(U\\) is a [vector space]({{< relref "KBhvector_space.md" >}}) so guaranteed nonempty.


#### \\(3\implies 1\\) {#3-implies-1}

Given \\((v+U) \cap (w+U) \neq \emptyset\\), we have that there exists some \\(u\_1, u\_2 \in U\\) such that \\(v+u\_1 = w+u\_2\\). Because everything here is in \\(V\\), we can add their respective inverses ("move them around") such that: \\(v-w = u\_2-u\_1\\). Therefore \\(u\_2-u\_1 \in U \implies v-w \in U\\).