+++
title = "Linear Map"
author = ["Houjun Liu"]
draft = false
+++

A [Linear Map]({{< relref "KBhlinear_map.md" >}}) (a.k.a. [Linear Transformation]({{< relref "KBhlinear_map.md" >}})) is a [function]({{< relref "KBhfunction.md" >}}) which maps elements between two [vector space]({{< relref "KBhvector_space.md" >}}) that follows linear properties.


## constituents {#constituents}

-   [vector space]({{< relref "KBhvector_space.md" >}})s \\(V\\) and \\(W\\) (they <span class="underline">don't</span> have to be [subspace]({{< relref "KBhsubspace.md" >}})s)
-   A [function]({{< relref "KBhfunction.md" >}}) \\(T: V \to W\\) (when we put something in, it only goes to one place)


## requirements {#requirements}

\\(T\\) is considered a [Linear Map]({{< relref "KBhlinear_map.md" >}}) if it follows... (properties of "linearity")


### additivity {#additivity}

\begin{equation}
T(u+v) = Tu+Tv,\ \forall u,v \in V
\end{equation}


### [homogeneity]({{< relref "KBhhomogeneity.md" >}}) {#homogeneity--kbhhomogeneity-dot-md}

\begin{equation}
T(\lambda v) = \lambda (Tv),\ \forall \lambda \in \mathbb{F}, v \in V
\end{equation}


## additional information {#additional-information}


### note on notation {#note-on-notation}

The "application" of a [Linear Map]({{< relref "KBhlinear_map.md" >}}) \\(T\\) on a vector \\(V\\) is written as:

\begin{equation}
\begin{cases}
Tv \\\\
T(v)
\end{cases}
\end{equation}

both are acceptable.


### \\(\mathcal{L}(V,W)\\) {#mathcal-l--v-w}

The set of all [Linear Map]({{< relref "KBhlinear_map.md" >}})s from \\(V\\) to \\(W\\) is denoted as \\(\mathcal{L}(V,W)\\).


### some fun linear maps {#some-fun-linear-maps}


#### [zero]({{< relref "KBhzero.md" >}}) {#zero--kbhzero-dot-md}

There is, of course, the [Linear Map]({{< relref "KBhlinear_map.md" >}}) that maps everything to the \\(0\\) --- as the [zero]({{< relref "KBhzero.md" >}}) exists in all [vector space]({{< relref "KBhvector_space.md" >}})s.

That is:

\begin{equation}
0 \in \mathcal{L}(V,W) \implies 0v = 0, v\in V
\end{equation}

<!--list-separator-->

-  additivity

    Let \\(v\_1+v\_2= v \in V\\).

    \begin{equation}
    0(v\_1+v\_2) = 0(v) = 0 = 0+0 = 0v\_1+0v\_2
    \end{equation}

<!--list-separator-->

-  [homogeneity]({{< relref "KBhhomogeneity.md" >}})

    Let \\(\lambda v = u \in V\\).

    \begin{equation}
    0(\lambda v) = 0(u) = 0 = \lambda 0 = \lambda 0v
    \end{equation}


#### [identity]({{< relref "KBhidentity.md" >}}) {#identity--kbhidentity-dot-md}

Another classic. \\(I\\), the [identity]({{< relref "KBhidentity.md" >}}) map, is denoted as (for some \\(v \in V\\) and \\(I \in \mathcal{L}(V,V)\\)):

\begin{equation}
Iv = v
\end{equation}

i.e. it does nothing

<!--list-separator-->

-  additivity

    Let \\(v\_1,v\_2 \in V\\):

    \begin{equation}
    I(v\_1+v\_2) = v\_1+v\_2 = Iv1+Iv2
    \end{equation}

<!--list-separator-->

-  [homogeneity]({{< relref "KBhhomogeneity.md" >}})

    \begin{equation}
    I(\lambda v) = \lambda v = \lambda Iv
    \end{equation}


#### any map from \\(\mathbb{F}^{n}\\) to \\(\mathbb{F}^{m}\\) {#any-map-from-mathbb-f-n-to-mathbb-f-m}

turns out any map that follows a specific pattern of [polynomial]({{< relref "KBhpolynomial.md" >}})s between two [vector space]({{< relref "KBhvector_space.md" >}})s are [Linear Map]({{< relref "KBhlinear_map.md" >}})s.

Define some two [vector space]({{< relref "KBhvector_space.md" >}})s \\(\mathbb{F}^{n}\\) and \\(\mathbb{F}^{m}\\), some set of scalars \\(a\_{jk} \in \mathbb{F}: j=1, \dots m; k=1, \dots n\\).

We construct \\(T \in \mathcal{L}(\mathbb{F}^{n}, \mathbb{F}^{m})\\) by: \\(T(x\_1, \dots x\_{n}) = a\_{11} x\_1+ \cdots + a\_{1n} x\_{n}, \dots, a\_{m1} x\_1 + \cdots + a\_{mn} x\_{n}\\) (i.e. a combination of [linear combination]({{< relref "KBhlinear_combination.md" >}})s).

<!--list-separator-->

-  additivity

    Let \\(x,y \in \mathbb{F}^{n}\\), with \\(x\_{j}\\) being each [coordinate]({{< relref "KBhlists_over_fields.md" >}}) of \\(x\\) and the same goes for \\(y\\).

    \begin{align}
    T((x\_1, \dots x\_{n}) + (y\_1, \dots y\_{n}))) &= T(x\_1+y\_1 \dots x\_{n}+y\_{n})  \\\\
    &= a\_{11}(x\_1+y\_1) + \cdots, \dots, \cdots + a\_{mn} (x\_{n} + y\_{n})  \\\\
    &= (a\_{11}x\_1 + a\_{11}y\_{1}) + \cdots, \dots, \cdots + (a\_{mn} x\_{n} + a\_{mn} y\_{n})  \\\\
    &= (a\_{11}x\_1 + \cdots) + (a\_{11}y\_{1}+ \cdots ), \dots, (\cdots + a\_{mn}x\_n) + (\cdots + a\_{mn}y\_{n}) \\\\
    &= ((a\_{11}x\_1 + \cdots), \dots, (\cdots + a\_{mn}x\_n)) =  ((a\_{11}y\_{1}+ \cdots ), \dots,(\cdots + a\_{mn}y\_{n}))   \\\\
    &= T (x\_1, \dots, x\_{n}) + T (y\_1, \dots, x\_{n})
    \end{align}

<!--list-separator-->

-  [homogeneity]({{< relref "KBhhomogeneity.md" >}})

    Proof left to the reader. Pretty much just expand and more algebra.


### [matricies]({{< relref "KBhmatricies.md" >}}) to encode [Linear Map]({{< relref "KBhlinear_map.md" >}}) {#matricies--kbhmatricies-dot-md--to-encode-linear-map--kbhlinear-map-dot-md}

we can use [matricies]({{< relref "KBhmatricies.md" >}}) to represent [Linear Map]({{< relref "KBhlinear_map.md" >}})s. See [matrix of Linear Map]({{< relref "KBhmatricies.md#matrix-of-id-17f3b01c-4945-4268-8da4-9887d960596b-linear-map" >}})


### "[basis of domain]({{< relref "KBhbasis_of_domain.md" >}})" {#basis-of-domain--kbhbasis-of-domain-dot-md}

This result tells us that we can find a [Linear Map]({{< relref "KBhlinear_map.md" >}}) for wherever we want to take the [basis]({{< relref "KBhbasis.md" >}}) of a [vector space]({{< relref "KBhvector_space.md" >}}), and that a [Linear Map]({{< relref "KBhlinear_map.md" >}})'s behavior on [basis]({{< relref "KBhbasis.md" >}}) uniquely determines that [Linear Map]({{< relref "KBhlinear_map.md" >}}).

See [basis of domain]({{< relref "KBhbasis_of_domain.md" >}}).


### addition and scalar multiplication on \\(\mathcal{L}(V,W)\\) {#addition-and-scalar-multiplication-on-mathcal-l--v-w}

Suppose \\(S,T \in \mathcal{L}(V,W); \lambda \in \mathbb{F}\\).

"Sum" and "Product" are defined in the way that one would expect:

\begin{equation}
(S+T)(v) = Sv+Tv
\end{equation}

and

\begin{equation}
(\lambda T)(v) = \lambda (Tv)
\end{equation}

for all \\(v \in V\\).

These two operations make \\(\mathcal{L}(V,W)\\) a [vector space]({{< relref "KBhvector_space.md" >}}) (\\(1Tv = Tv\\), \\(0+Tv=Tv\\), \\(Tv + (-1)Tv = 0\\), associativity, commutativity, distributive inherits from \\(V\\).)


### linear maps take \\(0\\) to \\(0\\) {#linear-maps-take-0-to-0}

We desire that \\(T(0) = 0\\) for any linear map \\(T\\)

Proof:

\begin{equation}
T(0) = T(0+0)
\end{equation}

Then, by additivity:

\begin{equation}
T(0) = T (0 + 0) = T (0) + T (0)
\end{equation}

Given \\(\mathcal{L}(V,W)\\) is a [vector space]({{< relref "KBhvector_space.md" >}}) for any \\(V,W\\), \\(\exists -T(0)\\) such that \\(T(0)+(-T(0)) = 0\\). Applying that here:

\begin{equation}
T(0) = T(0)+T(0) \implies T(0) -T(0) = T(0)+T(0)-T(0) \implies 0 = T(0)
\end{equation}


### Product of Linear Maps {#product-of-linear-maps}

See [Product of Linear Maps]({{< relref "KBhproduct_of_linear_maps.md" >}})


### "sizes" of maps {#sizes-of-maps}


#### map to smaller space is not [injective]({{< relref "KBhinjectivity.md" >}}) {#map-to-smaller-space-is-not-injective--kbhinjectivity-dot-md}

Suppose \\(V,W\\) are [finite-dimensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}})s, and \\(\dim V > \dim W\\). Then, all \\(T \in \mathcal{L}(V,W)\\) are **not** [injective]({{< relref "KBhinjectivity.md" >}}).

We first have that:

\begin{align}
&\dim V = \dim null\ T + \dim range\ T \\\\
\Rightarrow\ &  \dim null\ T  = \dim V - \dim range\ T
\end{align}

recall at this point that \\(\dim range\ T \leq \dim W\\) (the [range]({{< relref "KBhrange.md" >}}) is a [subspace]({{< relref "KBhsubspace.md" >}}) of the codomain.) Therefore, subtracting a bigger value means that the value will be smaller. So we have that:

\begin{align}
&  \dim null\ T  = \dim V - \dim range\ T   \\\\
\Rightarrow\ & \dim null\ T  \geq   \dim V - \dim W
\end{align}

Now, recall that \\(\dim V > \dim W\\). Therefore, \\(\dim V - \dim W\\) is strictly bigger than \\(0\\). So:

\begin{align}
 \dim null\ T  &\geq   \dim V - \dim W \\\\
 &>   0
\end{align}

And so, the [dimension]({{< relref "KBhdimension.md" >}}) of the [null space]({{< relref "KBhnull_space.md" >}}) of \\(T\\) is not \\(0\\). Therefore, the [null space]({{< relref "KBhnull_space.md" >}}) of \\(T\\) can't have been \\(\\{0\\}\\) because that does have [dimension]({{< relref "KBhdimension.md" >}}) \\(0\\). This makes the map not [injective]({{< relref "KBhinjectivity.md" >}}) because [injectivity implies that null space is \\(\\{0\\}\\)]({{< relref "KBhinjectivity.md#injectivity-implies-that-id-767a441d-4931-4fad-aa8e-c6b001e8b507-null-space-is-0" >}})


#### map to bigger space is not [surjective]({{< relref "KBhsurjectivity.md" >}}) {#map-to-bigger-space-is-not-surjective--kbhsurjectivity-dot-md}

Its basically the same thing as the one above. Suppose \\(V,W\\) are [finite-dimensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}})s, and \\(\dim V < \dim W\\). Then, all \\(T \in \mathcal{L}(V,W)\\) are **not** [injective]({{< relref "KBhinjectivity.md" >}}).

We first have that:

\begin{align}
&\dim V = \dim null\ T + \dim range\ T \\\\
\Rightarrow\ &  \dim range\ T  = \dim V - \dim null\ T
\end{align}

Because the [dimension]({{< relref "KBhdimension.md" >}}) of \\(null\ T\\) is larger than \\(0\\) (or, for that matter, the [dimension]({{< relref "KBhdimension.md" >}}) of anything), \\(\dim V - \dim\ null\ T \leq  \dim\ V\\). Hence:

\begin{align}
&  \dim range\ T  = \dim V - \dim null\ T   \\\\
\Rightarrow\ & \dim range\ T  \leq \dim V
\end{align}

Now, recall that \\(\dim V < \dim W\\).

\begin{align}
&  \dim range\ T  = \dim V - \dim null\ T   \\\\
\Rightarrow\ & \dim range\ T  \leq \dim V < \dim W
\end{align}

Given the [range]({{< relref "KBhrange.md" >}}) of \\(T\\) is smaller than the codomain of \\(T\\), they cannot be equal spaces. So, \\(T\\) is not [surjective]({{< relref "KBhsurjectivity.md" >}}).