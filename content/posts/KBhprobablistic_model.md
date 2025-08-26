+++
title = "probablistic models"
author = ["Houjun Liu"]
draft = false
+++

## multinomial distribution {#multinomial-distribution}

A [probability]({{< relref "KBhprobability.md" >}}) distribution to model specific outcomes like a [binomial distribution]({{< relref "KBhbinomial_distribution.md" >}}) but for multiple variables.

like [binomial distribution]({{< relref "KBhbinomial_distribution.md" >}}), we have to assume independence and same probability per trial.

"what's the probability that you get some set of assignments xj=nj":

\begin{equation}
P(X\_1=c\_1, X\_2=c\_2, \dots, X\_{m}=c\_{m}) = {n \choose c\_1, c\_2, \dots, c\_{m} } p\_{1}^{c\_1} \cdot  \dots \cdot p\_{m}^{c\_{m}}
\end{equation}

where the big choose is a [multinomial coefficient]({{< relref "KBhmultinomial_coefficient.md" >}}), and \\(n\\) is the number of different outcomes, and \\(p\_{j}\\) is the probably of the $j$th outcome.

****IMPORTANT****: \\(\sum\_{j=0}^{m} c\_{j} = n\\): that is, you MUST provide an assignment for each type of outcome.
