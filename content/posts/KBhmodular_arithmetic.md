+++
title = "modular arithmetic"
author = ["Houjun Liu"]
draft = false
+++

Clock math.

We say that \\(a\ \text{mod}\ b = r\\) if \\(a=bq+r\\), such that \\(b>0\\) and \\(0 \leq r <b\\). More specifically, we denote:

\begin{equation}
a \equiv a'\ \text{mod}\ b
\end{equation}

if \\(b|(a-a')\\).


## additional information {#additional-information}


### basic [modular arithmetic]({{< relref "KBhmodular_arithmetic.md" >}}) operations {#basic-modular-arithmetic--kbhmodular-arithmetic-dot-md--operations}

\begin{align}
(a+b)\ \text{mod}\ c &= ((a\ \text{mod}\ c) + (b\ \text{mod}\ c))\ \text{mod}\ c \\\\
(ab) \ \text{mod}\ c &= ((a\ \text{mod}\ c) (b \ \text{mod}\ c)) \ \text{mod}\ c
\end{align}


### examples of modular arithmetic {#examples-of-modular-arithmetic}

****If \\(a\ \text{mod}\ b = r\\), \\((-a)\ \text{mod}\ b = -r = b-r\\)****

****\\(2^{2}\equiv 4 \equiv -1 \ \text{mod}\ 5\\),  \\(2^{4}\equiv 1\ \text{mod}\ 5\\)****

****USPS's check digit is \\(a\ \text{mod}\ 9\\) because you can just add all the digits up****
Let \\(a \in \mathbb{Z}\\). Let \\(s\\) be the sum of all the digits in \\(a\\). \\(a \ \text{mod}\ 9 = s \ \text{mod}\ 9\\). Why? Not a very satisfying answer, but because \\(9\\) is \\(10-1\\), so for each \\(n \times 10^{k}\ \text{mod}\ 9\\) is always \\(-n\\) smaller. like how \\(10 = 9+1\\), \\(20 = 2 \times 9+2\\), etc.


### [subgroups]({{< relref "KBhsubgroup.md" >}}) {#subgroups--kbhsubgroup-dot-md}

Recall the real numbers: \\(\dots, -2, -1, 0, 1, 2, 3, \dots\\)

That's so many numbers! Instead, let's create a _circle_ of these values. For instance, what if you only want \\(5\\):

\begin{equation}
\mathbb{Z}\_{5} = \\{0,1,2,3,4\\}
\end{equation}

This is a [group]({{< relref "KBhgroup.md" >}}) under addition.


### humph: similarity between this and [affine subsets]({{< relref "KBhparallel_linear_algebra.md" >}}) {#humph-similarity-between-this-and-affine-subsets--kbhparallel-linear-algebra-dot-md}

-   \\(u/U = v/U\\) if \\(u-v \in U\\)
-   \\(u \equiv v\ \text{mod}\ b\\) if \\(b|u-v\\)


### Chinese Remainder Theorem {#chinese-remainder-theorem}

Suppose \\(a,b \in \mathbb{Z}\\), and \\(m,n \in \mathbb{N}\\), such that \\(\gcd (m,n) = 1\\) (that is, suppose \\(m,n\\) is [coprime]({{< relref "KBhprime.md#coprime" >}})). There is some \\(x \in \mathbb{Z}\\) such that:

\begin{equation}
x \equiv a \ \text{mod}\ m, x \equiv b\ \text{mod}\ n
\end{equation}

Furthermore, and importantly, \\(x\ \text{mod}\ (mn)\\) is unique.
