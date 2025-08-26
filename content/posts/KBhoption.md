+++
title = "Option (MDP)"
author = ["Houjun Liu"]
draft = false
+++

an [Option (MDP)]({{< relref "KBhoption.md" >}}) represents a high level collection of actions. Big Picture: abstract away your big policy into \\(n\\) small policies, and value-iterate over expected values of the big policies.


## Markov Option {#markov-option}

A [Markov Option](#markov-option) is given by a triple \\((I, \pi, \beta)\\)

-   \\(I \subset S\\), the states from which the option maybe started
-   \\(S \times A\\), the MDP during that option
-   \\(\beta(s)\\), the probability of the option terminating at state \\(s\\)


### one-step options {#one-step-options}

You can develop one-shot options, which terminates immediate after one action with underlying probability

-   \\(I = \\{s:a \in A\_{s}\\}\\)
-   \\(\pi(s,a) = 1\\)
-   \\(\beta(s) = 1\\)


### option value fuction {#option-value-fuction}

\begin{equation}
Q^{\mu}(s,o) = \mathbb{E}\qty[r\_{t} + \gamma r\_{t+1} + \dots]
\end{equation}

where \\(\mu\\) is some option selection process


### semi-markov decision process {#semi-markov-decision-process}

a [semi-markov decision process](#semi-markov-decision-process) is a system over a bunch of [option]({{< relref "KBhoptions.md" >}})s, with time being a factor in option transitions, but the underlying policies still being [MDP]({{< relref "KBhmarkov_decision_process.md" >}})s.

\begin{equation}
T(s', \tau | s,o)
\end{equation}

where \\(\tau\\) is time elapsed.

because option-level termination induces jumps between large scale states, one backup can propagate to a lot of states.


### intra option q-learning {#intra-option-q-learning}

\begin{equation}
Q\_{k+1} (s\_{i},o) = (1-\alpha\_{k})Q\_{k}(S\_{t}, o) + \alpha\_{k} \qty(r\_{t+1} + \gamma U\_{k}(s\_{t+1}, o))
\end{equation}

where:

\begin{equation}
U\_{k}(s,o) = (1-\beta(s))Q\_{k}(s,o) + \beta(s) \max\_{o \in O} Q\_{k}(s,o')
\end{equation}
