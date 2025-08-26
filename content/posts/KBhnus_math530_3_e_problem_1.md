+++
title = "3.E Problem 1"
author = ["Houjun Liu"]
draft = false
+++

Suppose \\(T\\) is a function from \\(V\\) to \\(W\\). Let the "graph" of \\(T\\) be the subset of \\(V \times W\\) such that:

\begin{equation}
graph\ T = \\{(v,Tv) \in V \times W \mid v \in  V\\}
\end{equation}

Show that \\(T\\) is a linear map IFF the graph of \\(T\\) is a subspace of \\(V \times W\\).


## Review: A Linear Map {#review-a-linear-map}

Recall that a function \\(T: V \to W\\) is called a linear map if it is a map that...

1.  is **additive**: so \\(Tv + Tu = T(v+u): v,u \in V\\)
2.  is **homogeneous**, so \\(\lambda Tv = T\lambda v: \lambda \in \mathbb{F}, v \in V\\)


## Given Graph is Subspace {#given-graph-is-subspace}

Given the graph of \\(T\\) is a subspace of \\(V \times W\\), we desire that the function \\(T\\) is a linear map and therefore additive and homogeneous.

By declaration before, \\(graph\ T\\) is a subspace, meaning it would be closed under adddition and scalar multiplication. We will use this fact to show that \\(T\\) follows the properties of a linear map.


### Additivity {#additivity}

We first desire that \\(T\\) is additive, that is, for \\(v,u \in V\\), we desire \\(Tv + Tu = T(v+u)\\).

Let \\(v,u \in V\\), and let \\(a,b \in graph\ T\\) declared as follows:

\begin{equation}
\begin{cases}
a = (v,Tv) \in V \times W \\\\
b = (u,Tu) \in V \times W
\end{cases}
\end{equation}

We are given that \\(graph\ T\\) is a subspace of \\(T\\). As such, it is closed under addition; meaning, the sum of two elements from the space must remain in the space. Therefore:

\begin{equation}
(v, Tv) + (u,Tu) = (v+u, Tv+Tu) \in graph\ T
\end{equation}

And now, the latter being in \\(graph\ T\\) implies that \\(\exists\\) some \\(c \in graph\ T\\), \\(n \in V\\) such that:

\begin{equation}
c := (n, Tn) = (v+u, Tv+Tu)
\end{equation}

Taking the latter equivalence and solving for \\(n\\), we have that \\(n = v+u\\). And so, we have that:

\begin{equation}
(v+u, T(v+u)) = (v+u, Tv+Tu)
\end{equation}

Therefore, \\(T(v+u) = Tv+Tu\\), as desired.


### Homogeneity {#homogeneity}

We now desire that \\(T\\) is homogeneous. That is, for \\(v \in V, \lambda \in \mathbb{F}\\), we desire \\(\lambda Tv = T\lambda v\\).

Let \\(v \in  V\\), \\(\lambda \in \mathbb{F}\\), and \\(a \in graph\ T\\) declared as follows:

\begin{equation}
a = (v, Tv) \in V \times W
\end{equation}

By the same logic before, \\(graph\ T\\) is closed under scalar multiplication; meaning, the product of en element from the space to a scalar remain in the space. Therefore:

\begin{equation}
\lambda (v,Tv) = (\lambda v, \lambda Tv) \in graph\ T
\end{equation}

The latter being in \\(graph\ T\\) implies that \\(\exists\\) some \\(c \in graph\ T\\), \\(n \in V\\) such that:

\begin{equation}
c :=(n,Tn) = (\lambda v, \lambda Tv)
\end{equation}

Taking the latter equivalence and solving for \\(n\\), we have \\(n = \lambda v\\). And so, we have:

\begin{equation}
(\lambda v, T \lambda v) = (\lambda v, \lambda Tv)
\end{equation}

And therefore, \\(T\lambda v = \lambda Tv\\), as desired.

Having shown that \\(T\\) is now both additive and homogeneous, we have that \\(T\\) is a linear map, as desired.


## Given \\(T\\) is a Linear Map {#given-t-is-a-linear-map}

We will essentially prove the previous condition backwards.

We are given that the graph of \\(T\\) is a subset of \\(V \times W\\), and that \\(T: V \to W\\) is a linear map. We desire that the graph of \\(T\\) is a subspace of \\(V \times W\\).

Recall that to show that a subset is a subspace, on simply has to show that it has closed operations and that it contains the additive identity.


### Additive Identity {#additive-identity}

Recall that the additive identity in \\(V \times W\\) is the tuple that's identically \\((0,0) \in V \times W\\).

As \\(V\\) is a vector space, \\(0 \in V\\). Any linear map will send \\(0\\) to \\(0\\). Therefore, \\(T 0 = 0\\).

Therefore, construct \\(a \in graph\ T\\):

\begin{equation}
a = (0, T 0) \in V \times W = (0, 0)
\end{equation}

By construction, we have shown that the additive identity of \\(V \times W\\) is in \\(graph\ T\\).


### Closure of Addition {#closure-of-addition}

Given WLOG \\(a,b \in graph\ T\\), we desire that \\(a+b \in graph\ T\\).

Let \\(v,u \in V\\), and let \\(a,b \in graph\ T\\) declared as follows:

\begin{equation}
\begin{cases}
a = (v,Tv) \in V \times W \\\\
b = (u,Tu) \in V \times W
\end{cases}
\end{equation}

Now:

\begin{equation}
a+b = (v,Tv) + (u+Tu) = (v+u, Tv+Tu)
\end{equation}

Given \\(T\\) is a linear map, we have WLOG \\(Tv+Tu = T(v+u)\\). And therefore:

\begin{equation}
a+b = (v,Tv) + (u+Tu) = (v+u, Tv+Tu) = (v+u, T(v+u)) \in \\{(v,Tv) \mid v \in V\\}
\end{equation}

Hence, \\(graph\ T\\) is closed under addition.


### Closure of Scalar Multiplication {#closure-of-scalar-multiplication}

Given WLOG \\(a \in graph\ T, \lambda \in \mathbb{F}\\), we desire that \\(\lambda a \in graph\ T\\).

Let \\(v \in V, \lambda \in \mathbb{F}\\), and let \\(a \in graph\ T\\) declared as follows:

\begin{equation}
a = (v,Tv) \in V \times W
\end{equation}

Now:

\begin{equation}
\lambda a = \lambda (v,Tv) = (\lambda v, \lambda Tv)
\end{equation}

Given \\(T\\) is a linear map, we have WLOG \\(\lambda Tv = T\lambda v\\). And therefore:

\begin{equation}
\lambda a = \lambda (v,Tv) = (\lambda v, \lambda Tv) = (\lambda v, T \lambda v)\in \\{(v,Tv) \mid v \in V\\}
\end{equation}

Hence, \\(graph\ T\\) is closed under scalar multiplication.

Having shown \\(graph\ T\\) to be closed under addition and scalar multiplication, as well as containing the additive identity, we see that it is a subspace of \\(V \times W\\) of which it is a subset.

Having shown both directions of the proof, \\(\blacksquare\\)