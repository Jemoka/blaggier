+++
title = "linear functional"
author = ["Houjun Liu"]
draft = false
+++

A linear map to numbers. Its very powerful because any [linear functional]({{< relref "KBhlinear_functional.md" >}}) can be represented as an [inner product]({{< relref "KBhinner_product.md" >}}) using [Riesz Representation Theorem](#riesz-representation-theorem)


## constituents {#constituents}

-   vector space \\(V\\)
-   a linear map \\(\varphi \in \mathcal{L}(V, \mathbb{F})\\)


## requirements {#requirements}

\\(\varphi\\) is called a [linear functional]({{< relref "KBhlinear_functional.md" >}}) on \\(V\\) if \\(\varphi: V \to \mathbb{F}\\). That is, it maps elements of \\(V\\) to scalars. For instance, every [inner product]({{< relref "KBhinner_product.md" >}}) is a [Linear Map]({{< relref "KBhlinear_map.md" >}}) to scalars and hence a [linear functional]({{< relref "KBhlinear_functional.md" >}}).


## additional information {#additional-information}


### Riesz Representation Theorem {#riesz-representation-theorem}

Suppose \\(V\\) is [finite-dimensional]({{< relref "KBhfinite_dimensional_vector_space.md" >}}), and \\(\varphi\\) is a [linear functional]({{< relref "KBhlinear_functional.md" >}}) on \\(V\\); then, there exists an **unique** \\(u \in V\\) such that:

\begin{equation}
\varphi(v) = \langle v,u \rangle
\end{equation}

\\(\forall v \in V\\). Kinda a mindblowing fact.

Proof:

[Every Inner Product Space has an orthonormal basis]({{< relref "KBhgram_schmidt.md#every-id-4a788e29-a3e9-4c13-8c97-08746878966e-inner-product-space-has-an-id-2a1eecb2-f23a-469f-a860-b561a9197906-orthonormal-basis" >}}); let \\(e\_1, ...e\_{n}\\) be an [orthonormal basis]({{< relref "KBhorthonormal_basis.md" >}}) of \\(V\\). Recall there's a specific way of [writing a vector as a linear combination of orthonormal basis]({{< relref "KBhorthonormal_basis.md#writing-a-vector-as-a-linear-combination-of-orthonormal-basis" >}}), that WLOG \\(v \in V\\):

\begin{equation}
v = \langle v, e\_1 \rangle e\_1 + \dots \langle v, e\_{n} \rangle e\_{n}
\end{equation}

Now:

\begin{equation}
\varphi(v) = \varphi(\langle v, e\_1 \rangle e\_1 + \dots \langle v, e\_{n} \rangle e\_{n})
\end{equation}

Given homogenity and addtivity, we then have:

\begin{align}
\varphi(v) &= \varphi(\langle v, e\_1 \rangle e\_1 + \dots \langle v, e\_{n} \rangle e\_{n})  \\\\
&= \langle v, e\_1 \rangle \varphi(e\_1) + \dots  + \langle v, e\_n \rangle \varphi(e\_n)
\end{align}

Now, shoving \\(\varphi\\) into the second slot (remember we have conjugate homogenity on the secon slot), and adding it all together (as inner products are additive in both slots):

\begin{align}
\varphi(v) &= \varphi(\langle v, e\_1 \rangle e\_1 + \dots \langle v, e\_{n} \rangle e\_{n})  \\\\
&= \langle v, e\_1 \rangle \varphi(e\_1) + \dots  + \langle v, e\_n \rangle \varphi(e\_n)  \\\\
&= \langle v, \overline{\varphi(e\_1)} e\_1 + \dots  + \overline{\varphi(e\_n)}e\_n \rangle
\end{align}

You will note now that the second slot to this [inner product]({{< relref "KBhinner_product.md" >}}) is **v-independent!** So as long as we know the [orthonormal basis]({{< relref "KBhorthonormal_basis.md" >}}) we can encode \\(\varphi\\) with:

\begin{equation}
u = \overline{\varphi(e\_1)} e\_1 + \dots  + \overline{\varphi(e\_n)}e\_n
\end{equation}

and:

\begin{equation}
\varphi(v) = \langle v, u \rangle
\end{equation}

Now, to show uniqueness, we probably do the same damned thing we have a million times:

Suppose:

\begin{equation}
\varphi(v) = \langle v,u\_1 \rangle = \langle v,u\_{2} \rangle
\end{equation}

holds for all \\(v \in V\\), as required by the theorem.

This means that:

\begin{equation}
\langle v, u\_1-u\_2 \rangle = 0
\end{equation}

For every \\(v \in V\\). Let \\(v = u\_1-u\_2\\). Now by definiteness we have \\(u\_1-u\_2=0\\) meaning \\(u\_1=u\_2\\) as desired. \\(\blacksquare\\)
