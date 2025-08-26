+++
title = "inner product"
author = ["Houjun Liu"]
draft = false
+++

## constituents {#constituents}

-   \\(V\\) a [vector space]({{< relref "KBhvector_space.md" >}})
-   \\((u,v)\\), an _ordered_ pair of [vector]({{< relref "KBhvector.md" >}})s in \\(V\\) (its not commutative!)


## requirements {#requirements}

We define \\(\langle u, v \rangle \in \mathbb{F}\\) as the [inner product]({{< relref "KBhinner_product.md" >}}) of \\((u,v)\\) **in that order!**. It carries the following properties:

1.  **positivity**: \\(\langle v, v\rangle \geq 0, \forall v \in V\\)
2.  **definiteness**: \\(\langle v, v\rangle = 0\\) IFF \\(v = 0\\)
3.  **additivity in the first slot**: \\(\langle u+v, w\rangle = \langle u, w \rangle + \langle v, w \rangle\\)
4.  **homogeneity in the first slot**: \\(\langle \lambda u, v \rangle = \lambda \langle u, v \rangle\\)
5.  **conjugate symmetry**: \\(\langle u,v \rangle = \overline{\langle v,u \rangle}\\)


## additional information {#additional-information}


### Inner Product Space {#inner-product-space}

An [Inner Product Space](#inner-product-space) is a [vector space]({{< relref "KBhvector_space.md" >}}) with a well-defined [inner product]({{< relref "KBhinner_product.md" >}}). For instance, \\(\mathbb{F}^{n}\\) has the canonical [inner product]({{< relref "KBhinner_product.md" >}}) named [Euclidean Inner Product](#euclidean-inner-product) (see below, a.k.a. [dot product]({{< relref "KBhdot_product.md" >}}) for reals). The existence of such a well-defined [inner product]({{< relref "KBhinner_product.md" >}}) makes \\(\mathbb{F}^{n}\\) an [Inner Product Space](#inner-product-space).

Rare Axler moment, instead of "well-defined", he says we want a [vector space]({{< relref "KBhvector_space.md" >}}) with an [inner product]({{< relref "KBhinner_product.md" >}}) "lurking nearby"; james bond style.


### properties of inner product {#properties-of-inner-product}

1.  For a fixed \\(u \in V\\), the function takes \\(v\\) to \\(\langle v,u \rangle\\) is a [Linear Map]({{< relref "KBhlinear_map.md" >}}) \\(V \to \mathbb{F}\\)
2.  \\(\langle 0,u \rangle = 0\\)
3.  \\(\langle u,0 \rangle = 0\\)
4.  \\(\langle u,v+w \rangle = \langle u,v \rangle + \langle u,w \rangle\\)
5.  \\(\langle u,\lambda v \rangle = \bar{\lambda}\langle u,v \rangle\\)

Proof:

1.  Inheriting the additivity and homogeneity of the definition of [inner product]({{< relref "KBhinner_product.md" >}})s
2.  Set \\(u\\) to be the fixed element for 1), set \\(0\\) to be the input, linear maps take \\(0\\) to \\(0\\)
3.  Apply conjugate symmetry to 2)
4.  Apply conjugate symmetry, [inner product]({{< relref "KBhinner_product.md" >}}) additivty, then conjugate back
5.  Apply conjugate symmetry, [inner product]({{< relref "KBhinner_product.md" >}}) homogeneity in the first slot, then conjugate back (of course leaving \\(\lambda\\) out conjugated)


### Euclidean Inner Product {#euclidean-inner-product}

For \\(x,y \in \mathbb{F}^{n}\\), one can define a pretty well-defined [inner product]({{< relref "KBhinner_product.md" >}}) by

\begin{equation}
x \cdot y = x\_1 \bar{y\_{1}} + ... + x\_{n} \bar{y\_{n}}
\end{equation}

similar to [dot product]({{< relref "KBhdot_product.md" >}}) for the reals. This is called the [Euclidean Inner Product](#euclidean-inner-product) and has the nice parallelity properties we saw.


### Matrix-scaled inner product {#matrix-scaled-inner-product}

****THIS DOESN'T SATISFY THE INNER PRODUCT PROPERTIES****

 \begin{equation}
\langle u, v \rangle\_{A} = u \cdot Av = u^{T} Av
\end{equation}

consider \\(\langle v,v \rangle\_{A}\\), \\(v \in \text{null}\ A\\), then \\(\langle v,v \rangle =0 \not \implies v = 0\\) .

But it does transpose:

\begin{equation}
\qty(\langle u,v \rangle\_{A})^{T}  = \qty(u^{T} Av)^{T} = v^{T}A^{T}u = \langle v,v \rangle\_{A^{T}}
\end{equation}


### [complex number]({{< relref "KBhcomplex_number.md" >}}) shenanigans that motivate the [inner product]({{< relref "KBhinner_product.md" >}}) {#complex-number--kbhcomplex-number-dot-md--shenanigans-that-motivate-the-inner-product--kbhinner-product-dot-md}

...as both relevant and more general than the [dot product]({{< relref "KBhdot_product.md" >}}), but also different in key areas.

[First, review complex numbers]({{< relref "KBhthoughts_on_axler_4.md#first-review-id-7c982e7e-b8be-4053-a71e-fc0dba7a5da5-complex-number-s" >}}) from our discussion in chapter 4. The main problem here is this:

for \\(z = (z\_1, \dots, z\_{n}) \in \mathbb{C}^{n}\\), simply squaring each slot to take the [norm]({{< relref "KBhnorm.md" >}}) may cause us to take a square root of a negative number (as each slot would then be \\(a^{2}-b^{2}\\) for a complex number). That's no bueno because we want \\(\\|z\\|\\) to be real and non-negative.

This, therefore, suggests something similar for our [inner product]({{< relref "KBhinner_product.md" >}}) definition; to make sure that each slot end up being a real and non-negative number, we simply [conjugate]({{< relref "KBhcomplex_number.md#complex-conjugate" >}}) the second value:

\begin{equation}
x \cdot y = x\_1 \bar{y\_{1}} + ... + x\_{n} \bar{y\_{n}}
\end{equation}

Also, note that this definition give us an important result: if we reverse \\(x\\) and \\(y\\), we would be conjugating the other element! And so, we have that:

\begin{equation}
x \cdot y = \bar{{y \cdot x}}
\end{equation}

derived by following the usual rules of [complex conjugation]({{< relref "KBhcomplex_number.md#complex-conjugate" >}}). Note that none of these elementwisethings (the \\(x\_{n}y\_{n}\\) business) are actually in the definition of the [inner product]({{< relref "KBhinner_product.md" >}}), as it is the rules of an [Euclidean Inner Product](#euclidean-inner-product).


### inner product of \\(L\\) periodic functions {#inner-product-of-l-periodic-functions}

For \\(f,g : [0,L] \to \mathbb{R}\\), which are [L-periodic]({{< relref "KBhsu_math53_feb252024.md#l-periodicity" >}}), we define:

\begin{equation}
\langle f,g \rangle := \frac{1}{L} \int\_{0}^{L} f(x) g(x) \dd{x}
\end{equation}

Recall that [L-periodic]({{< relref "KBhsu_math53_feb252024.md#l-periodicity" >}}) functions can be shifted without changing periodicity. But if for some reason you want to base it off of any two numbers with distance \\(L\\) in between:

\begin{equation}
\langle f,g \rangle\_{[a,b]} := \frac{1}{b-a} \int^{b}\_{a} f(x) g(x) \dd{x}
\end{equation}

The work of checking this is a well-formed [inner product]({{< relref "KBhinner_product.md" >}}) is left to absolutely nobody.


### [inner product over complex-valued functions]({{< relref "KBhcomplex_exponential.md#id-650c9b2b-2e99-4e47-b61f-36d45fcedcd0-inner-product-over-complex-valued-functions" >}}) {#inner-product-over-complex-valued-functions--kbhcomplex-exponential-dot-md}

see [inner product over complex-valued functions]({{< relref "KBhcomplex_exponential.md#id-650c9b2b-2e99-4e47-b61f-36d45fcedcd0-inner-product-over-complex-valued-functions" >}})
