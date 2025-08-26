+++
title = "divide"
author = ["Houjun Liu"]
draft = false
+++

Let integer \\(a,b \in \mathbb{Z}\\), where \\(b \neq 0\\). We say \\(b\\) [divide]({{< relref "KBhdivide.md" >}})s \\(a\\) (i.e. \\(b|a\\)) if there's some \\(m \in \mathbb{Z}\\) such that \\(a = bm\\).


## additional information {#additional-information}


### division algorithm {#division-algorithm}

Let \\(a,b \in \mathbb{Z}\\), \\(b > 0\\). Then, there exists, uniquely, some \\(q,r \in \mathbb{Z}\\) such that \\(a = bq + r\\) with \\(0 \leq r <b\\).

"division with remainder"

You will note that, if \\(a < b\\), we can just say \\(q = 0\\).

Proof:


#### Existence {#existence}

Let us define some:

\begin{equation}
S = \\{a - bk: k \in \mathbb{Z}, a-bk \geq 0\\}
\end{equation}

We will note that this set is definitely non-empty:

-   If \\(a \geq 0\\), then \\(a = a-b\cdot 0 \in S\\)
-   If \\(a < 0\\) , then \\(a-b(2a) = a(1-2b)\\), we note that \\(a < 0\\) and since \\(b >0\\), \\((1-2b) <0\\), so \\(a(1-2b) > 0\\) and so \\(a(1-2b) \in S\\)

So by the [WOP]({{< relref "KBhprinciple_of_induction.md#well-ordering-principle" >}}), \\(S\\) has a smallest element. Let us, by [WOP]({{< relref "KBhprinciple_of_induction.md#well-ordering-principle" >}}), define \\(r\\) to be the smallest element in \\(S\\).

Therefore, we can make some \\(r = a-bq \in S\\). We also know that \\(r\\) is non-negative, as that is the constraint of \\(S\\). Finally, we have to ensure that \\(r\\) is the actual remainder, we have to ensure that \\(r < b\\).

Assume for contradiction \\(r \geq b\\). Then, \\(r-b = (a-qb)-b = a-(q+1)b \geq 0\\). Therefore, \\(r-b \in S\\). Yet, we said that \\(r\\) was the smallest element, reaching contradiction. Therefore, \\(r<b\\) . \\(\blacksquare\\)


#### Uniqueness {#uniqueness}

Let us have:

\begin{equation}
a = bq+r = bq' + r'
\end{equation}

Recall that, \\(0 \leq r < b\\). We desire that \\(q = q'\\), \\(r = r'\\).

WLOG let \\(r \leq  r'\\). So, \\(0 \leq r' - r\\). Both \\(r'\\) and \\(r\\) are remainders after dividing by \\(b\\), so \\(r' < b\\) and \\(r < b\\). Therefore, we have:

\begin{equation}
0 \leq  r' - r < b
\end{equation}

Now, recall that:

\begin{align}
&bq+r = bq' + r'\\\\
\Rightarrow\ &b(q-q') = r' - r
\end{align}

Now, we have that \\(b|(r' - r)\\). Hence, we have some positive \\(r' - r\\), which is smaller than b, but which is divisible by \\(b\\). This forces us to conclude that \\(r' - r = 0\\).

Given \\(r' = r\\), now, we can see that \\(q = q'\\). \\(\blacksquare\\)
