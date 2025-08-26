+++
title = "mutual information"
author = ["Houjun Liu"]
draft = false
+++

[mutual information]({{< relref "KBhmutual_information.md" >}}) a measure of the dependence of two [random variable]({{< relref "KBhrandom_variables.md" >}})s in [information theory]({{< relref "KBhinformation_theory.md" >}}). Applications include [collocation extraction]({{< relref "KBhcollocation_extractio.md" >}}), which would require finding how two words co-occur (which means one would contribute much less entropy than the other.)


## constituents {#constituents}

-   \\(X, Y\\) [random variable]({{< relref "KBhrandom_variables.md" >}})s
-   \\(D\_{KL}\\) [KL Divergence function]({{< relref "KBhkl_divergence.md" >}})
-   \\(P\_{(X,Y)}\\) the joint distribution of \\(X,Y\\)
-   \\(P\_{X}, P\_{Y}\\) the marginal distributions of \\(X,Y\\)


## requirements {#requirements}

[mutual information]({{< relref "KBhmutual_information.md" >}}) is defined as

\begin{equation}
I(X ; Y) = D\_{KL}(P\_{ (X, Y) } | P\_{X} \otimes P\_{Y})
\end{equation}

which can also be written as:

\begin{equation}
I(X:Y) = H(X) + H(Y)  - H(X,Y)
\end{equation}

where \\(H\\) is [entropy]({{< relref "KBhsu_engr76_apr042024.md#information-value" >}}) (recall that \\(H(X,Y) \leq H(X)+H(Y)\\) always.

"[mutual information]({{< relref "KBhmutual_information.md" >}}) between \\(X\\) and \\(Y\\) is the additional information contributed by the "

{{< figure src="/ox-hugo/2023-03-05_23-07-58_screenshot.png" >}}


## additional information {#additional-information}


### mutual information and independence {#mutual-information-and-independence}

-   if \\(X \perp Y\\), then \\(H(X)+H(Y) = H(X,Y)\\), so \\(I(X:Y) = 0\\)
-   otherwise, we have \\(I(X:Y) > 0\\)

This is important because
