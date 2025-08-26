+++
title = "fundamental theorem of arithmetic"
author = ["Houjun Liu"]
draft = false
+++

## factorization motivator {#factorization-motivator}

If \\(p\\) is [prime]({{< relref "KBhprime.md" >}}) and \\(p | ab\\), then \\(p|a\\) or \\(p|b\\).

If \\(p|a\\), we are done.

Consider the case where \\(p|ab\\) yet \\(a\\) is not divisible by \\(p\\). Then, \\(a\\) and \\(p\\) are [coprime]({{< relref "KBhprime.md#coprime" >}}). This means that, we have:

\begin{equation}
\gcd (a,p) = 1 = s a + tp
\end{equation}

We note that:

\begin{align}
b &= 1 \cdot b  \\\\
&= (sa+tp) b  \\\\
&= sab + tpb  \\\\
&= s(ab) + tb(p)
\end{align}

Notice that both of these elements are [divisible]({{< relref "KBhdivide.md" >}}) by \\(p\\) (\\(p|ab\\) and of course \\(p|p\\)). Therefore, \\(p|b\\) as desired.


## statement of the theorem {#statement-of-the-theorem}

Every integer greater than \\(1\\) is a [prime]({{< relref "KBhprime.md" >}}) or a product of primes. This factorization is unique.


## Proof {#proof}


### Existence {#existence}

Let \\(S\\) be the list of [integer]({{< relref "KBhinteger.md" >}})s bigger than \\(1\\) which are [prime]({{< relref "KBhprime.md" >}}) or are products of primes. Consider the set \\(T\\) which is all [integer]({{< relref "KBhinteger.md" >}})s bigger than \\(1\\) which isn't [prime]({{< relref "KBhprime.md" >}}) or are products of primes:

\begin{equation}
T = \\{2, 3, \dots, \\}  \setminus S
\end{equation}

We desire \\(T\\) to be empty.

Assume for the sake of contradiction that \\(T\\) isn't empty. By [WOP]({{< relref "KBhprinciple_of_induction.md#well-ordering-principle" >}}), take some smallest element of \\(t \in T\\).

\\(t\\) is not in \\(S\\), so it mustn't be [prime]({{< relref "KBhprime.md" >}}). This means:

\begin{equation}
t = ab
\end{equation}

Though.... \\(a\\) and \\(b\\) must be smaller than \\(t\\) (otherwise their product wouldn't make \\(t\\), as we are working with only positive numbers ([integer]({{< relref "KBhinteger.md" >}})s greater than \\(1\\)) here). So \\(a\\) and \\(b\\) must be in $S$---meaning they are [prime]({{< relref "KBhprime.md" >}})s or product of primes. This makes \\(t\\) a prime or product of primes, reaching contradiction.


### Uniqueness {#uniqueness}

We show this by induction. We see that: \\(2 = 2\\). Now, suppose a unique prime factorization holds for all integers smaller than \\(n\\). Let:

\begin{equation}
n =  p\_1 \dots p\_{r} = q\_1 \dots q\_{s}
\end{equation}

Let us order it such that \\(p\_1 \leq ... \leq p\_{r}\\), \\(q\_1 \leq ... \leq q\_{s}\\).

By the [factorization motivator](#factorization-motivator), each \\(p\_{j}|n\\) implies that \\(p\_{j}|q\_{i}\\) (you can see this by treating \\(n = q\_1 ... q\_{s}\\), so \\(p\_{j}|n \implies p\_{j}|(q\_1 \cdot \dots \cdot q\_{s})\\) so \\(p\_{j}\\) should be divisible by some \\(q\_{j}\\).)

Now, this condition implies \\(p\_{j} = q\_{i}\\), because primes are not divisible by anything except themselves and \\(1\\) (and \\(1\\) is not considered [prime]({{< relref "KBhprime.md" >}})).

Consider, then, two such equivalences:

\begin{equation}
p\_{1} = q\_{j}
\end{equation}

\begin{equation}
q\_{1} = p\_{k}
\end{equation}

Now, this means that:

\begin{equation}
p\_{1} \leq p\_{k} = q\_{1} \leq  q\_{j} = p\_{1}
\end{equation}

Therefore, the only way this can work (the fact that \\(q\_1\\) is sandwiched on both ends --- by \\(p\_1\leq q\_1 \leq p\_1\\)) is that \\(p\_1 = q\_1\\).

Therefore, we now have:

\begin{equation}
\frac{n}{p\_1} = p\_{2} \cdot  \dots  \cdot p\_{n} = q\_{2} \cdot \dots \cdot q\_{n}
\end{equation}

You will note \\(\frac{n}{p\_1} < n\\). Now, we can invoke induction. \\(\blacksquare\\)
