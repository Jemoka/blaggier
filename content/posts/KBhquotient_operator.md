+++
title = "quotient operator"
author = ["Houjun Liu"]
draft = false
+++

Suppose \\(T \in \mathcal{L}(V)\\), and \\(U \subset V\\), an [invariant subspace]({{< relref "KBhinvariant_subspace.md" >}}) under \\(T\\). Then:

\begin{equation}
(T / U)(v+U) = Tv+U, \forall v \in V
\end{equation}

where \\(T / U \in \mathcal{L}(V / U)\\)

"if you can [operator]({{< relref "KBhoperator.md" >}}) on \\(V\\), you can [operator]({{< relref "KBhoperator.md" >}}) on \\(V / U\\) in the same way." Yes I just verbed [operator]({{< relref "KBhoperator.md" >}}).


## [quotient operator]({{< relref "KBhquotient_operator.md" >}}) is well-defined {#quotient-operator--kbhquotient-operator-dot-md--is-well-defined}

Why is this not possible for any subspace of \\(V\\)? This is because we need \\(T\\) to preserve the exact structure of the [subspace]({{< relref "KBhsubspace.md" >}}) we are quotienting out by; otherwise our [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}}) maybe squished to various unexpected places. The technical way to show that this is well-defined leverages the property of two [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}})s being equal:

Suppose \\(v +U = w+U\\), we desire that \\(T / U (v+U) = T / U (w+U)\\). That is, we desire that \\(Tv +U = Tw +U\\).

If \\(v+U = w+U\\) , then, \\(v-w \in U\\). Now, this means that \\(T(v-w) \in U\\) **only because \\(U\\) is [invariant]({{< relref "KBhinvariant_subspace.md" >}}) under \\(T\\)** (otherwise it could be sent to anywhere in \\(V\\) as \\(T \in \mathcal{L}(V)\\) not \\(\mathcal{L}(U)\\)). Therefore, \\(Tv-Tw \in U\\), and so \\(Tv +U = Tw+U\\), as desired. \\(\blacksquare\\)