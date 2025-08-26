+++
title = "NUS-MATH530 Plane and 1.B"
author = ["Houjun Liu"]
draft = false
+++

## Equation of a Plane {#equation-of-a-plane}

We want to determine all [point]({{< relref "KBhvector.md" >}})s on the plane formed by two vectors.

Let's take two vectors \\(\vec{u} \in V\\) and \\(\vec{v} \in V\\). The orthogonal vector to the both of them (i.e. the normal direction of the plane) is:

\begin{equation}
\vec{u}\times \vec{v}
\end{equation}

by the definition of the [cross product]({{< relref "KBhcross_product.md" >}}).

The [point]({{< relref "KBhvector.md" >}})s on the plane, therefore, have to be orthogonal themselves to this normal vector. This means that the [dot product]({{< relref "KBhdot_product.md" >}}) of the candidate vector against these vectors should be \\(0\\):

\begin{equation}
(\vec{u} \times \vec{v}) \cdot \begin{pmatrix}
x\_{1} \\\ \dots \\\ x\_{n}
\end{pmatrix} = 0
\end{equation}

This forms the final equation for a plane given two vectors in \\(\mathbb{F}^{n}\\).


## A.B Exercises {#a-dot-b-exercises}


### Double Negative {#double-negative}

We desire that \\(-(-v)=v \forall v \in V\\)

By [distributivity]({{< relref "KBhdistributivity.md" >}}) in vector spaces, and the fact that \\(0v=0\\), we have that:

\begin{equation}
v+(-1)v = (1-1)v = 0v = 0
\end{equation}

Therefore, \\((-1)v=-v\\).

We now have:

\begin{equation}
-(-v) = -((-1)v)
\end{equation}

The scalar multiple of \\(v\\), by definition, is also \\(\in V\\) if \\(v \in V\\). Therefore, it itself holds that:

\begin{equation}
(-1)((-1)v)
\end{equation}

By [associativity]({{< relref "KBhassociative.md" >}}):

\begin{equation}
(-1\cdot -1)v
\end{equation}

Finally:

\begin{equation}
(-1\cdot -1)v = (1v) = v\ \blacksquare
\end{equation}


### One of it is zero {#one-of-it-is-zero}

If \\(a \in \mathbb{F}\\), \\(v \in V\\), and \\(av=0\\), we desire that \\(a=0\\) or \\(v=0\\). We perform casework.

Case 1: \\(a=0\\) -- we are done.

Case 2: \\(a \neq 0\\):
As \\(a \in \mathbb{F}\\), and \\(a \neq 0\\), \\(\exists \frac{1}{a}: a\cdot \frac{1}{a}=1\\).

Therefore:

\begin{align}
&av = 0 \\\\
\Rightarrow\ & \frac{1}{a}av = \frac{1}{a} 0  \\\\
\Rightarrow\ & 1v = \frac{1}{a} 0  \\\\
\Rightarrow\ & 1v = 0 \\\\
\Rightarrow\ & v=0\ \blacksquare
\end{align}


### Existence and Uniqueness Given Equation {#existence-and-uniqueness-given-equation}

Given \\(v,w \in V\\), we desire a unique \\(x\in V: v+3x=w\\).

Let's first check existence. Take the expression:

\begin{equation}
n = \frac{1}{3} (w-v)
\end{equation}

As both \\(v,w \in V\\), subtraction ([addition]({{< relref "KBhadding.md" >}})) and [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) are defined. Therefore, \\(\forall w,v \in V\\), we can construct such an \\(n\\).

Supplying the expression into \\(v+3x\\) for the definition of \\(x\\):

\begin{align}
v+3x &= v+3\qty(\frac{1}{3}(w-v)) \\\\
&= v+(w-v)  \\\\
&= v+w-v \\\\
&= v-v+w \\\\
&= 0+w \\\\
&= w
\end{align}

by [distributivity]({{< relref "KBhdistributivity.md" >}}), [associativity]({{< relref "KBhassociative.md" >}}), and [commutativity]({{< relref "KBhcommutivity.md" >}}) in [vector space]({{< relref "KBhvector_space.md" >}})s, yielding \\(w\\) as desired.

Now let's check uniqueness.

Suppose \\(\exists x\_1, x\_2: v+3x\_1=w\\) and \\(v+3x\_2=w\\).

By transitivity:

\begin{equation}
v+3x\_1=v+3x\_2
\end{equation}

Applying \\(-v\\) to both sides:

\begin{equation}
3x\_1=3x\_2
\end{equation}

Finally, applying \\(\frac{1}{3}\\) to both sides:

\begin{equation}
x\_{1}= x\_2
\end{equation}

Therefore, there only exists one unique \\(x\\) which satisfies the expression. \\(\blacksquare\\)


### Empty Set is Not a Vector Space {#empty-set-is-not-a-vector-space}

The empty set is not a vector space as it doesn't have an [additive identity]({{< relref "KBhadditive_identity.md" >}}). \\(\blacksquare\\)


### Additive Inverse is also Zero Multiplication {#additive-inverse-is-also-zero-multiplication}

We first take the additive inverse expression:

\begin{equation}
\forall v \in V, \exists -v: v+(-v) = 0
\end{equation}

Take now:

\begin{equation}
0v
\end{equation}

We have that:

\begin{align}
0v &= (0+0)v \\\\
&= 0v + 0v
\end{align}

By [distributivity]({{< relref "KBhdistributivity.md" >}}).

As \\(0v \in V\\), \\(\exists -0v: 0v+(-0v)=0\\).

\begin{align}
&0v = 0v+0v \\\\
\Rightarrow\ & 0v-0v = 0v+0v-0v   \\\\
\Rightarrow\ & 0 = 0v
\end{align}

as desired. Now, we will start from this condition and work out way backwards.

Note that the statement for additive inverse condition is that:

\begin{equation}
\forall v \in V, \exists -v: v+(-v) = 0
\end{equation}

Let us begin with the expression that:

\begin{equation}
0=0v
\end{equation}

We have that:

\begin{equation}
0=(1-1)v
\end{equation}

Then, we have by [distributivity]({{< relref "KBhdistributivity.md" >}}):

\begin{equation}
0 = v + (-1)v
\end{equation}

[scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) is defined on a [vector space]({{< relref "KBhvector_space.md" >}}). Therefore, we have \\(-1v\\) to construct such an additive inverse \\(\forall v \in V\\). \\(\blacksquare\\)


### Weird Vector Space {#weird-vector-space}

All operations are defined as given.

Take scalars \\(t\_1, t\_2 \in \mathbb{R}\\).

\begin{equation}
(t\_1-t\_2)\infty  = \infty
\end{equation}

Yet, if we follow the rules of distribution:

\begin{equation}
(t\_1 -t\_2)\infty  = \infty -\infty =0
\end{equation}

Therefore, distribution doesn't hold on this new structure. It is not a vector space. \\(\blacksquare\\)