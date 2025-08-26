+++
title = "factor"
author = ["Houjun Liu"]
draft = false
+++

in [probability]({{< relref "KBhprobability.md" >}}), a [factor]({{< relref "KBhfactor.md" >}}) \\(\phi\\) is a value you can assign to each distinct value in a [discrete distribution]({{< relref "KBhdiscrete_distribution.md" >}}) which acts as the [probability]({{< relref "KBhprobability.md" >}}) of that value occurring. They are considered [parameter]({{< relref "KBhparameter.md" >}})s of the [discrete distribution]({{< relref "KBhdiscrete_distribution.md" >}}).

If you don't have discrete variables, [factor]({{< relref "KBhfactor.md" >}})s allow you to state \\(p(x|y)\\) in terms of a function \\(\phi(x,y)\\).

See also [Rejection Sampling]({{< relref "KBhrejection_sampling.md" >}})


## factor operations {#factor-operations}


### factor product {#factor-product}

\begin{equation}
\phi\_{3} (x,y,z) = \phi\_{1} (x,y) \cdot \phi\_{2}(y,z)
\end{equation}


### factor marginalization {#factor-marginalization}

\begin{equation}
\phi(x) = \sum\_{y=Y} \phi(x,y)
\end{equation}


### factor conditioning {#factor-conditioning}

Removing any rows not consistent with evidence. Say you know \\(Y=1\\), remove all rows that say \\(Y=0\\).
