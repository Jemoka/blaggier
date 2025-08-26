+++
title = "prime"
author = ["Houjun Liu"]
draft = false
+++

An [integer]({{< relref "KBhinteger.md" >}}) \\(p > 1\\) is [prime]({{< relref "KBhprime.md" >}}) if it has no positive [divisor]({{< relref "KBhdivide.md" >}})s other than \\(1\\) and itself.

No even [number]({{< relref "KBhnumber.md" >}}), except \\(2\\), is prime. Because 2


## additional information {#additional-information}


### There are infinitely many primes {#there-are-infinitely-many-primes}

Credit: Euler.

Proof:

Assume to the contrary that there are finitely many [prime]({{< relref "KBhprime.md" >}})s. \\(p\_1, ..., p\_{n}\\). We desire to make a new prime to reach contradiction.

Consider:

\begin{equation}
N = p\_1 \times  \dots \times  p\_{n} + 1
\end{equation}

Note that \\(p\_1 \times ... \times p\_{n}\\) is divisible by each of the \\(p\_{j}\\). If some \\(p\_i |N\\), \\(p\_{i}|1\\), which is impossible as \\(1\\) is not divisible by anything. So, no \\(p\_{i}\\) divides \\(N\\).

If \\(N\\) is now prime, we are done as it is not in the list of \\(p\_{j}\\). If not, pick any [prime]({{< relref "KBhprime.md" >}}) divisor \\(p\\) of \\(N\\). We will note that given no \\(p\_{j}\\) divides \\(N\\), therefore any [prime]({{< relref "KBhprime.md" >}}) divisor is a new prime.

Having made a new prime, we reach contradiction. \\(\blacksquare\\)


### coprime {#coprime}

Two integers \\(a, b\\) is considered [coprime](#coprime) if \\(\gcd (a,b) = 1\\). Therefore, because [greatest common divisor is a linear combination]({{< relref "KBhgreatest_common_divisor.md#greatest-common-divisor-is-a-linear-combination" >}})
