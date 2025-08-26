+++
title = "complex number"
author = ["Houjun Liu"]
draft = false
+++

A [complex number]({{< relref "KBhcomplex_number.md" >}}) is a type of [number]({{< relref "KBhnumber.md" >}}). They are usually written as \\(a+bi\\).

Formally---

\begin{equation}
    \mathbb{C} = \left\\{a+bi\ \middle |\ a,b \in \mathbb{R} \right\\}
\end{equation}

This set generates solutions to every single polynomial with unique solutions. Its plane looks like \\(\mathbb{R}^{2}\\).


## constituents {#constituents}

an order pair of two elements \\((a,b)\\) where \\(a,b\in \mathbb{R}\\).


## properties of complex arithmetic {#properties-of-complex-arithmetic}

there are 6. For all statements below, we assume \\(\alpha = a+bi\\) and \\(\beta=c+di\\), \\(\lambda = e+fi\\), where \\(a,b,c,d,e,f \in \mathbb{R}\\) and therefore \\(\alpha, \beta,\lambda \in \mathbb{C}\\).


### [commutativity]({{< relref "KBhcommutivity.md" >}}) {#commutativity--kbhcommutivity-dot-md}

\\(\alpha + \beta = \beta + \alpha\\) and \\(\alpha\beta = \beta\alpha\\) for all \\(\alpha,\beta \in \mathbb{C}\\).


#### Proof of [complex number]({{< relref "KBhcomplex_number.md" >}}) [commutativity]({{< relref "KBhcommutivity.md" >}}) {#proof-of-complex-number--kbhcomplex-number-dot-md--commutativity--kbhcommutivity-dot-md}

We desire \\(\alpha + \beta = \beta + \alpha\\).

\begin{align}
    \alpha + \beta &= (a+bi)+(c+di) \\\\
&=(a+c)+(b+d)i \\\\
&=(c+a)+(d+b)i \\\\
&=(c+di) + (a+bi) \\\\
&=\beta+\alpha\ \blacksquare
\end{align}

leveraging the [commutativity]({{< relref "KBhcommutivity.md" >}}) inside [real number]({{< relref "KBhreal_number.md" >}})s.

<!--list-separator-->

-  Insights: combining and splitting

    This proof has the feature of combining, operating (commuting, here), the splitting.


### [associativity]({{< relref "KBhassociative.md" >}}) {#associativity--kbhassociative-dot-md}

\\((\alpha +\beta) + \lambda = \alpha + (\beta +\lambda)\\) and \\((\alpha\beta) \lambda = (\alpha \beta) \lambda\\)

Proven via the same trick from last time


### [identities]({{< relref "KBhidentity.md" >}}) {#identities--kbhidentity-dot-md}

\\(\lambda + 0 = \lambda\\), \\(\lambda 1 = \lambda\\)


#### Proof of [complex number]({{< relref "KBhcomplex_number.md" >}}) [additive identity]({{< relref "KBhadditive_identity.md" >}}) {#proof-of-complex-number--kbhcomplex-number-dot-md--additive-identity--kbhadditive-identity-dot-md}

We desire that \\(\lambda + 0 = 0\\).

\begin{align}
    \lambda + 0 &= (e+fi) + (0+0i) \\\\
&= (e+0) + (f+0)i \\\\
&= e+fi\ \blacksquare
\end{align}

[multiplicative identity]({{< relref "KBhmultiplicative_identity.md" >}}) is proven in the same way


### additive [inverse]({{< relref "KBhinverses.md" >}}) {#additive-inverse--kbhinverses-dot-md}

\\(\forall \alpha \in \mathbb{C}, \exists !\ \beta \in \mathbb{C}: \alpha + \beta = 0\\)


#### Proof of [complex number]({{< relref "KBhcomplex_number.md" >}}) additive [inverse]({{< relref "KBhinverses.md" >}}) {#proof-of-complex-number--kbhcomplex-number-dot-md--additive-inverse--kbhinverses-dot-md}

We desire to claim that \\(\forall \alpha \in \mathbb{C}, \exists !\ \beta \in \mathbb{C}: \alpha + \beta = 0\\), specifically that there _is_ a _unique_ \\(\beta\\) which is the additive [inverse]({{< relref "KBhinverses.md" >}}) of every \\(\alpha\\).

Take a number \\(\alpha \in \mathbb{C}\\). We have that \\(\alpha\\) would then by definition be some \\((a+bi)\\) where \\(a,b \in \mathbb{R}\\).

Take some \\(\beta\\) for which \\(\alpha + \beta = 0\\); by definition we again have \\(\beta\\) equals some \\((c+di)\\) where \\(c,d \in \mathbb{R}\\).

-   \\(\because \alpha + \beta =0\\), \\(\therefore (a+bi) + (c+di) = 0\\).
-   \\(\therefore (a+c) + (b+d)i = 0\\)
-   \\(\therefore a+c = 0, b+d = 0\\)
-   \\(\therefore c = -a, d = -b\\)

We have created a unique definition of \\(c,d\\) and therefore \\(\beta\\) given any \\(\alpha\\), implying both uniqueness and existence.

<!--list-separator-->

-  Insights: construct then generalize

    In this case, the cool insight is the construct and generalize pattern. We are taking a single case \\(\alpha\\), manipulating it, and wrote the result we want in terms of the constituents of \\(\alpha\\). This creates both an existence and uniqueness proof.


### multiplicative inverse {#multiplicative-inverse}

\\(\forall \alpha \in \mathbb{C}, \alpha \neq 0, \exists!\ \beta \in \mathbb{C} : \alpha\beta =1\\)

This is proven exactly in the same way as before.


### distributive property {#distributive-property}

\\(\lambda(\alpha+\beta) = \lambda \alpha + \lambda \beta\ \forall\ \lambda, \alpha, \beta \in \mathbb{C}\\)


#### Proof of [complex number]({{< relref "KBhcomplex_number.md" >}}) distributive property {#proof-of-complex-number--kbhcomplex-number-dot-md--distributive-property}

We desire to claim that \\(\lambda(\alpha+\beta) = \lambda \alpha + \lambda \beta\\).

\begin{align}
    \lambda(\alpha+\beta) &= (e+fi)((a+bi)+(c+di))\\\\
&=(e+fi)((a+c)+(b+d)i)\\\\
&=((ea+ec)-(fb+fd))+((eb+ed)+(fa+fc))i\\\\
&=ea+ec-fb-fd+(eb+ed+fa+fc)i\\\\
&=ea-fb+ec-fd+(eb+fa+ed+fc)i\\\\
&=(ea-fb)+(ec-fd)+((eb+fa)+(ed+fc))i\\\\
&=((ea-fb)+(eb+fa)i) + ((ec-fd)+(ed+fc)i)\\\\
&=(e+fi)(a+bi) + (e+fi)(c+di)\\\\
&=\lambda \alpha + \lambda \beta\ \blacksquare
\end{align}

<!--list-separator-->

-  Insights: try to remember to go backwards

    At some point in this proof I had to reverse complex addition then multiplication, which actually tripped me up for a bit ("how does `i` distribute!!!", etc.) Turns out, there was already a definition for [addition and multiplication of complex numbers](#addition-and-multiplication-of-complex-number--kbhcomplex-number-dot-md--s) so we just needed to use that.


## additional information {#additional-information}


### addition and multiplication of [complex number]({{< relref "KBhcomplex_number.md" >}})s {#addition-and-multiplication-of-complex-number--kbhcomplex-number-dot-md--s}

\begin{align}
    (a+bi) + (c+di) &= (a+c)+(b+d)i \\\\
(a+bi)(c+di) &= (ac-bd)+(ad+bc)i
\end{align}

where, \\(a,b,c,d\in\mathbb{R}\\).


### subtraction and division of [complex number]({{< relref "KBhcomplex_number.md" >}})s {#subtraction-and-division-of-complex-number--kbhcomplex-number-dot-md--s}

Let \\(\alpha, \beta \in \mathbb{C}\\), and \\(-a\\) be the additive inverse of \\(\alpha\\) and \\(\frac{1}{\alpha}\\) be the multiplicative inverse of \\(\alpha\\).

-   ****subtraction****: \\(\beta-\alpha = \beta + (-\alpha)\\)
-   ****division****: \\(\frac{\beta}{\alpha} = \beta\frac{1}{\alpha}\\)

Simple enough, [subtraction and division of complex numbers](#subtraction-and-division-of-complex-number--kbhcomplex-number-dot-md--s) is just defined by applying the inverses of a number to a different number.


### [complex number]({{< relref "KBhcomplex_number.md" >}})s form a [field]({{< relref "KBhfield.md" >}}) {#complex-number--kbhcomplex-number-dot-md--s-form-a-field--kbhfield-dot-md}

See [properties of complex arithmetic](#properties-of-complex-arithmetic), how we proved that it satisfies a [field]({{< relref "KBhfield.md" >}}).


### complex conjugate {#complex-conjugate}

The [complex conjugate](#complex-conjugate) of a [complex number]({{< relref "KBhcomplex_number.md" >}}) is defined as

\begin{equation}
\bar{z} = \text{Re}\ z - (\text{Im}\ z)i
\end{equation}

i.e. taking the complex part to be negative. Say, \\(z = 3+2i\\), then \\(\bar{z}=3-2i\\).


### absolute value ([complex number]({{< relref "KBhcomplex_number.md" >}})s) {#absolute-value--complex-number-kbhcomplex-number-dot-md--s}

The [absolute value (complex numbers)](#absolute-value--complex-number-kbhcomplex-number-dot-md--s) of a [complex number]({{< relref "KBhcomplex_number.md" >}}) is:

\begin{equation}
|z| = \sqrt{{(\text{Re}\ z)^{2} + (\text{Im}\ z)^{2}}}
\end{equation}
