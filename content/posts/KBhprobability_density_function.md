+++
title = "probability density function"
author = ["Houjun Liu"]
draft = false
+++

[PDF]({{< relref "KBhprobability_density_function.md" >}})s is a function that maps continuous random variables to the corresponding probability.

\begin{equation}
P(a < X < b) = \int\_{x=a}^{b} f(X=x)\dd{x}
\end{equation}

note: \\(f\\) is no longer in units of [probability]({{< relref "KBhprobability.md" >}})!!! it is in units of [probability]({{< relref "KBhprobability.md" >}}) scaled by units of \\(X\\). That is, they are DERIVATIVES of probabilities. That is, the units of \\(f\\) should be \\(\frac{prob}{unit\ X}\\). So, it can be greater than \\(1\\).

We have two important properties:

-   if you integrate over any bounds over a [probability density function]({{< relref "KBhprobability_density_function.md" >}}), you get a [probability]({{< relref "KBhprobability.md" >}})
-   if you integrate over infinity, the result should be \\(1\\)


## getting exact values from [PDF]({{< relref "KBhprobability_density_function.md" >}}) {#getting-exact-values-from-pdf--kbhprobability-density-function-dot-md}

There is a calculus definition for \\(P(X=x)\\), if absolutely needed:

\begin{equation}
P(X=x) = \epsilon f(x)
\end{equation}


## mixing discrete and continuous random variables {#mixing-discrete-and-continuous-random-variables}

Let's say \\(X\\) is continuous, and \\(N\\) is discrete.

We desire:

\begin{equation}
P(N=n|X=x) = \frac{P(X=x|N=n)P(N=n)}{P(X=x)}
\end{equation}

now, to get a specific value for \\(P(X=x)\\), we can just multiply its [PMF]({{< relref "KBhprobability_mass_function.md" >}}) by a small epsilon:

\begin{align}
P(N=n|X=x) &= \lim\_{\epsilon \to 0} \frac{\epsilon f(X=x|N=n)P(N=n)}{\epsilon f(X=x)}  \\\\
&= \frac{f(X=x|N=n)P(N=n)}{f(X=x)}
\end{align}

this same trick works pretty much everywhere---whenever we need to get the probability of a continuous random variable with
