+++
title = "LetsDrive"
author = ["Houjun Liu"]
draft = false
+++

Autonomously driving is really hard. How do we integrate planning + learning in a close-loop style. We'll start from the current belief, and construct a tree of all reachable belief state.

Recall [DESPOT]({{< relref "KBhdespot.md" >}}).


## Approach {#approach}

{{< figure src="/ox-hugo/2024-02-15_09-48-34_screenshot.png" >}}

1.  **learning** (b): a neural network which maps the driving history into a policy and value
2.  **planning** (a): we will use the neural network's derived policy and value to run [MCTS]({{< relref "KBhmonte_carlo_tree_search.md" >}})
3.  **execution** (e): execute the actions in a simulator

The data which is obtained using the simulator is used to train the neural network.


### learning {#learning}

The learning component is a supervised policy where a CNN takes a situation and map

{{< figure src="/ox-hugo/2024-02-15_09-50-19_screenshot.png" >}}


### planning {#planning}

its a [AR-DESPOT]({{< relref "KBhdespot.md#anytime-despot" >}}). We select actions by:

\begin{equation}
a^{\*} = \arg\max\_{a \in A}  \left\\{u(b,a) + c \pi\_{\theta}(a|x\_{b}) \sqrt{ \frac{N(b)}{N(b,a)+1}}\right\\}
\end{equation}

where \\(\pi\_{\theta}\\) is our policy network.

Every time we encounter a new node, use the learned value function as a lower bound.

Needed less depth in the [DESPOT]({{< relref "KBhdespot.md" >}}) than using it naively.
