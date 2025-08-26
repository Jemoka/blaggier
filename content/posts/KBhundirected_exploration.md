+++
title = "Undirected Exploration"
author = ["Houjun Liu"]
draft = false
+++

base [epsilon-greedy]({{< relref "KBhundirected_exploration.md" >}}):

1.  choose a random action with probability \\(\epsilon\\)
2.  otherwise, we choose the action with the best expectation \\(\arg\max\_{a} Q(s,a)\\)


## epsilon-greedy exploration with decay {#epsilon-greedy-exploration-with-decay}

Sometimes, approaches are suggested to decay \\(\epsilon\\) whereby, at each timestamp:

\begin{equation}
\epsilon \leftarrow \alpha \epsilon
\end{equation}

whereby \\(\alpha \in (0,1)\\) is called the "decay factor."


## Explore-then-commit {#explore-then-commit}

Select actions uniformly at random for \\(k\\) steps; then, go to greedy and stay there
