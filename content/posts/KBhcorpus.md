+++
title = "corpus"
author = ["Houjun Liu"]
draft = false
+++

usually we use \\(N\\) to denote the number of [token]({{< relref "KBhtokenization.md" >}})s, and \\(V\\) the "vocab" or set of [word type]({{< relref "KBhtokenization.md" >}})s.

Corpora is usually considered in context of:

-   specific writers
-   at specific time
-   for specific varieties
-   of specific languages
-   for a specific function

Particularly hard: code switching, gender, demographics, variety, etc.


## Herdan's Law {#herdan-s-law}

\begin{equation}
|V| = kN^{\beta}
\end{equation}

with \\(\beta\\) being a constant between \\(0.67 < \beta < 0.75\\).

The vocab size is roughly proportional to the number of tokens.
