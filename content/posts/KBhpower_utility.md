+++
title = "power utility"
author = ["Houjun Liu"]
draft = false
+++

[power utility]({{< relref "KBhpower_utility.md" >}}), or [isoelastic utility]({{< relref "KBhpower_utility.md" >}}), is a [financial econometric]({{< relref "KBhfinancial_markets_intro.md" >}}) is a utility that results absolute, constant relative risk aversion. i.e.: you tell me how risk averse you are exogenously, I tell you how much utility some consumption is.


## constituents {#constituents}

-   some relative risk coefficient \\(\gamma \in (0,1)\\), higher more risk averse
-   consumption of some asset \\(C\\)


## requirements {#requirements}

Utility \\(U( C)\\) is defined by:

\begin{equation}
U( C) = \frac{c^{1-\gamma}-1}{1-\gamma}
\end{equation}


## additional information {#additional-information}

As you can see, the higher \\(\gamma\\), the lower utility some consumption brings.


### log utility {#log-utility}

[log utility](#log-utility) is a special case of [power utility]({{< relref "KBhpower_utility.md" >}}) whereby:

\begin{equation}
U(x) = \log x
\end{equation}

which converges to [power utility]({{< relref "KBhpower_utility.md" >}}) where \\(\lambda \to 1\\).
