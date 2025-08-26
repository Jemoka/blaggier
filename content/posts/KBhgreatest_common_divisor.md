+++
title = "greatest common divisor"
author = ["Houjun Liu"]
draft = false
+++

Let \\(a,b \in \mathbb{Z}\\), not both zero. \\(\gcd (a,b)\\) is the greatest value \\(d\\) such that \\(d|a\\), \\(d|b\\).


## greatest common divisor is a linear combination {#greatest-common-divisor-is-a-linear-combination}

We can write \\(\gcd (a,b)  = as+bt\\) for some \\(s,t \in \mathbb{Z}\\).

Let us define:

\begin{equation}
S = \\{am + bn: m,n \in \mathbb{Z}, am+bn > 0\\}
\end{equation}

We will first check that \\(S\\) is non-empty. To do so, let \\(a\\) be negative and \\(b\\) be positive. Then, set \\(m = -1\\), \\(n = 1\\). We can see that \\(am + bn > 0\\), satisfying the conditions of the set. In a similar manner, we can demonstrate that regardless of the choice of \\(a, b\\), \\(S\\) is non-empty.

Furthermore, integral linear combinations are integers, so \\(S\\) is a non-empty subset of \\(\mathbb{Z}\\).

We can now invoke [WOP]({{< relref "KBhprinciple_of_induction.md#well-ordering-principle" >}}). There is some smallest \\(d \in S\\). Let's call \\(d = as +dt\\). We desire that \\(d\\) is actually \\(\gcd (a,b)\\).


### \\(d\\) is a common divisor of \\(a,b\\) {#d-is-a-common-divisor-of-a-b}

WLOG write some:

\begin{equation}
a = dq + r
\end{equation}

using [division algorithm]({{< relref "KBhdivide.md#division-algorithm" >}}). Because \\(d \in S\\), we can write now:

\begin{equation}
a = (as+bt) q + r
\end{equation}

We desire that now \\(r = 0\\) so that we can write \\(d|a\\). We can write:

\begin{equation}
r = a-dq
\end{equation}

(notice! \\(a\\) is a linear combination of \\(a,b\\), and \\(d\\) is given to be such)

\begin{equation}
r = a-dq = (1a + 0b) - (as+bt)q  = a(1-qs) + b(-tq)
\end{equation}

Recall that \\(r < d\\) because \\(r\\) is a remainder. And of course \\(r\\) is defined to be positive or \\(0\\) by the [division algorithm]({{< relref "KBhdivide.md#division-algorithm" >}}).

So:

\begin{equation}
0 \leq a(1-qs) + b(-tq) <d
\end{equation}

Now, you will note this middle thing, which is equal to \\(r\\), is itself a positive [linear combination]({{< relref "KBhlinear_combination.md" >}}) of \\(a,b\\). Furthermore, it is smaller than \\(d\\). We already have that \\(d\\) is the smallest element of \\(S\\), which means the only other value \\(r\\) can take on is \\(0\\).

This leads to conclude:

\begin{equation}
a = dq + 0
\end{equation}

so \\(d|a\\), WLOG \\(d|b\\).


### \\(d\\) is the greatest common divisor {#d-is-the-greatest-common-divisor}

Proof:

Let \\(d'\\) be a common divisor of \\(a,b\\). This means there are some \\(m', n'\\) such that:

\begin{align}
a &= d' m' \\\\
b &= d' n'
\end{align}

Recall that \\(d = as + bt\\). This means:

\begin{equation}
d = as + bt = (d' m')s + (d' n')t =  d' (m' s + n' t)
\end{equation}

This means that \\(d' | d\\). Now, \\(d \in  S\\), and everything in \\(S\\) is positive. Therefore, \\(d\\) must be the [greatest common divisor]({{< relref "KBhgreatest_common_divisor.md" >}}) because it is divisible (and therefore bigger in magnitude than) any \\(d'\\).

Which means that \\(d\\) must be the [greatest common divisor]({{< relref "KBhgreatest_common_divisor.md" >}})
