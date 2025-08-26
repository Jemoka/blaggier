+++
title = "Euclidean Algorithm"
author = ["Houjun Liu"]
draft = false
+++

A corollary of [greatest common divisor]({{< relref "KBhgreatest_common_divisor.md" >}}) and [division]({{< relref "KBhdivide.md" >}}).

Say you have some \\(b|a\\) such that:

\begin{equation}
a = bq + r
\end{equation}

Now, \\(d|a,b \Leftrightarrow d|b,r\\) (because \\(d|b,r\\) implies there's some \\(x, x'\\) such that \\(a = (dx)q+dx'\\), and so \\(a = d(xq + x')\\) and so \\(d|a\\); the logic goes the other way too).

This finally implies that \\(\gcd (a,b)= \gcd (b,r)\\) because any divisor that works for one works for both.
