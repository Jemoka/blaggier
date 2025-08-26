+++
title = "Point-Based Value Iteration"
author = ["Houjun Liu"]
draft = false
+++

we keep track of a bunch of [alpha vector]({{< relref "KBhalpha_vector.md" >}})s and [belief]({{< relref "KBhbelief.md" >}}) samples (which we get from [point selection]({{< relref "KBhpoint_selection.md" >}})):

\begin{equation}
\Gamma = \\{\alpha\_{1}, \dots, \alpha\_{m}\\}
\end{equation}

and

\begin{equation}
B = \\{b\_1, \dots, b\_{m}\\}
\end{equation}

To preserve the lower-boundedness of these [alpha vector]({{< relref "KBhalpha_vector.md" >}})s, one should seed the [alpha vector]({{< relref "KBhalpha_vector.md" >}})s via something like [blind lower bound]({{< relref "KBhblind_lower_bound.md" >}})

We can estimate our [utility]({{< relref "KBhutility_theory.md" >}}) function at any belief by looking in the set for the most optimal:

\begin{equation}
U^{\Gamma}(b) = \max\_{\alpha \in \Gamma} \alpha^{\top}b
\end{equation}

We now define a function named `backup` (see [PBVI Backup](#pbvi-backup)), and call it on all of our [belief]({{< relref "KBhbelief.md" >}})s to generate a new set of [alpha vector]({{< relref "KBhalpha_vector.md" >}})s:

\begin{equation}
\Gamma^{t+1} = \\{backup(\Gamma, b) | b \in B\\}
\end{equation}

where:

\begin{equation}
\alpha \leftarrow backup(\Gamma, b)
\end{equation}

therefore we call backup on each \\(b\\).


## PBVI Backup {#pbvi-backup}

`backup` procedure given \\(\Gamma\\) and $b$---

we want to mint a single new [alpha vector]({{< relref "KBhalpha_vector.md" >}}) by selecting the highest-valued one from the set of good alpha-vectors, one for each action:

\begin{equation}
\alpha = \arg\max\_{\alpha\_{a}} \alpha\_{a}^{\top} b
\end{equation}

now, we define each \\(\alpha\_{a}\\) as:

\begin{equation}
\alpha\_{a}(s) = R(s,a) + \gamma \sum\_{s',o}^{} O(o|a,s')T(s'|s,a)\alpha\_{a,o} (s')
\end{equation}

where we obtain the old \\(\alpha\_{a,o}\\) by computing vector which currently provides the highest value estimate, which we compute over all actions and observations \\(a,o\\) given our \\(\Gamma\\):

\begin{equation}
\alpha\_{a,o} = \arg\max\_{\alpha \in \Gamma} \alpha^{\top} update(b,a,o)
\end{equation}


## Randomized [PBVI]({{< relref "KBhpoint_based_value_iteration.md" >}}) {#randomized-pbvi--kbhpoint-based-value-iteration-dot-md}

see [Perseus]({{< relref "KBhperseus.md" >}})
