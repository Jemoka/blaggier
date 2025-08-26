+++
title = "Stepwise Evolution"
author = ["Houjun Liu"]
draft = false
+++

To put some math behind that _very, extremely_ simple [Dyson's Model]({{< relref "KBhdyson_s_model_of_life.md" >}}), we will declare a [vector space]({{< relref "KBhvector_space.md" >}}) \\(K\\) which encodes the possible set of states that our "[cell]({{< relref "KBhcell.md" >}})" can be in. Now, declare a transition [matrix]({{< relref "KBhmatricies.md" >}}) \\(M \in \mathcal{L}(K)\\) which maps from one state to another.

Finally, then, we can define a function \\(P(k)\\) for the \\(k\\) th state of our [cell]({{< relref "KBhcell.md" >}}).

That is, then:

\begin{equation}
P(k+1) = M P(k)
\end{equation}

(as the "next" state is simply \\(M\\) applied onto the previous state).

Rolling that out, we have:

\begin{equation}
P(k) = M^{k} P(0)
\end{equation}
