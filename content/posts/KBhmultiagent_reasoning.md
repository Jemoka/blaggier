+++
title = "multiagent reasoning"
author = ["Houjun Liu"]
draft = false
+++

## simple games {#simple-games}


### constituents {#constituents}

-   agent \\(i \in X\\) the set of agents.
-   joint action space: \\(A = A' \times A^{2} \times ... \times A^{k}\\)
-   joint action would be one per agent \\(\vec{a} = (a\_{1}, ..., a\_{k})\\)
-   joint reward function \\(R(a) = R'(\vec{a}), ..., R(\vec{a})\\)


### additional information {#additional-information}


#### prisoner's dilemma {#prisoner-s-dilemma}

|           | Cooperate | Defect |
|-----------|-----------|--------|
| Cooperate | -1, -1    | -4, 0  |
| Defect    | 0, -4     | -3, -3 |


#### traveler's dilemma {#traveler-s-dilemma}

-   two people write down the price of their luggage, between 2-100
-   the lower amount gets that value plus 2
-   the higher amount gets the lower amount minus 2


## joint policy agent utility {#joint-policy-agent-utility}

for agent number \\(i\\)

\begin{equation}
U^{i} (\vec{\pi}) = \sum\_{a \in A}^{} R^{(i)}(\vec{a}) \prod\_{j}^{} \pi^{(j)}(a^{(j)})
\end{equation}

this is essentially the reward you get given you took


## response model {#response-model}

how would other agents respond to our system?

-   \\(a^{-i}\\): joint action except for agent \\(i\\)
-   \\(\vec{a} = (a^{i}, a^{-i})\\),
-   \\(R(a^{i}, a^{-i}) = R(\vec{a})\\)


### best-response {#best-response}

deterministic best response model for agent \\(i\\):

\begin{equation}
\arg\max\_{a^{i} \in A^{i}}  U^{i}(a^{i}, \pi^{-i})
\end{equation}

where the response to agent \\(a\\) is deterministically selected.

For [prisoner's dilemma](#prisoner-s-dilemma), this results in both parties defecting because that would maximise the utility.


### softmax response {#softmax-response}

its like [Softmax Method]({{< relref "KBhdirected_exploration.md#softmax-method" >}}):

\begin{equation}
\pi^{i}(a^{i}) \propto \exp\qty(\lambda U^{i}(a^{i}, \pi^{-1}))
\end{equation}


### fictitious play {#fictitious-play}

play at some kind of game continuously


## Dominant Strategy Equilibrium {#dominant-strategy-equilibrium}

The dominant strategy is a policy that is the best response to all other possible agent policies. Not all games have a [Dominant Strategy Equilibrium](#dominant-strategy-equilibrium), because there are games for which the best response is never invariant to others' strategies (rock paper scissors).


## Nash Equilibrium {#nash-equilibrium}

A [Nash Equilibrium](#nash-equilibrium) is a joint policy \\(\pi\\) where everyone is following their best response: i.e. no one is incentive to unilaterally change from their policy. This exists for every game. In general, [Nash Equilibrium](#nash-equilibrium) is very hard to compute: it is p-pad (which is unclear relationally to np-complete).
