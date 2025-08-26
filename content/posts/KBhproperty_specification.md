+++
title = "System Specification"
author = ["Houjun Liu"]
draft = false
+++

## Metric {#metric}

Sometimes we can just get a specification easily from just a metric, like ("the aircraft can't be more than 50 meters apart")


### value at risk {#value-at-risk}

see [value at risk]({{< relref "KBhvalue_at_risk.md#value-at-risk" >}})


### composite metrics {#composite-metrics}


#### weighted sum method {#weighted-sum-method}

depends on how you care about each value, perform weighted sum and optimizes over a single metric \\(\sum\_{i=1}^{n} w\_{i}f\_{i}\qty(\tau) = w^{T}f\qty(\tau)\\)

But, coming up with the weights is a bit hard! So we get them by asking pairwise questions with [Preference Elicitation]({{< relref "KBhpreference_elicitation.md" >}})


#### goal distance metric {#goal-distance-metric}

pick a [Utopia Point]({{< relref "KBhsu_cs361_apr302024.md#utopia-point" >}}), and find distances from that point \\(\norm\mid f\qty(\tau) - f\_{\text{goal}} \norm\_{p}\\)


## logical specification {#logical-specification}


### propositional logic {#propositional-logic}

a proposition is a statement that evaluates to either true or false; an atomic proposition is a proposition that can't be broken down further.

For instance, consider "not":

{{< figure src="/ox-hugo/2025-01-16_13-58-31_screenshot.png" >}}


#### example {#example}

"If the agent is in \\(S\\), then agent is not in \\(C\\)"

\begin{equation}
S \to \neg C
\end{equation}


### first-order logic {#first-order-logic}

First order logic adds **variables**, **predicates**, and **quantifiers** to [propositional logic](#propositional-logic).

-   **predicate**: a function that evaluates propositions over variables
-   **variables**: objects in a domain
-   **quantifiers**: evaluate propositions over a collection of variables
    -   **universal quantifier**: allows us to evaluates propositions over a collection of variables \\(\forall\\)
    -   **existential quantifier**: allows us to evaluate positions over any one of the variables \\(\exists\\)


#### example {#example}

**variables**: state \\(x\\)

**predicates**

\begin{equation}
O(x): x \text{ is an obstable}
\end{equation}

\begin{equation}
G(x): x \text{ is an goal}
\end{equation}

"an agent must reach a goal state and avoid the obstacle state

\begin{equation}
\qty(\forall x \neg O\qty(x)) \wedge \qty(\exists x G(x))
\end{equation}


### temporal logic {#temporal-logic}

[temporal logic](#temporal-logic) specifies logic in time


#### linear temporal logic {#linear-temporal-logic}

**always**:

\begin{equation}
\square P
\end{equation}

this means "\\(P\\) is true at **all time stamps** in the future (including the current timestamp)"

**eventually**:

\begin{equation}
\lozenge P
\end{equation}

this means "\\(P\\) is true at **some timestamps** in the future (including the current timestamp)"

**until**

\begin{equation}
P \mathcal{U} Q
\end{equation}

"\\(Q\\) is true at **some timestamp** in the future and \\(P\\) is true **at least until** \\(Q\\) becomes true"

this lasts the lifetime until \\(Q\\) becomes no longer true.

<!--list-separator-->

-  example

    "eventually reaches the goal after passing through the checkpoint and always avoids the obstacle"

    Three predicates: \\(F\\) the obstacle, \\(G\\) the goal, \\(C\\) the checkpoint

    \begin{equation}
    \lozenge G \wedge \neg G \mathcal{U} C \wedge \square \neg F
    \end{equation}


#### signal temporal logic {#signal-temporal-logic}

[signal temporal logic]({{< relref "KBhsignal_temporal_logic.md" >}}) extends [linear temporal logic](#linear-temporal-logic) to real-valued signals

1.  allows us to specify properties over a time interval \\(\qty [a, b]\\), so we have \\(\lozenge\_{[a,b]} P\\) (the "eventually" need to hold starting at \\(a\\) and until \\(b\\))
2.  allows us to to map real-valued signals to truth values \\(\mu\_{c}\qty(s\_{t})\\) is true if \\(\mu\qty(s\_{t}) > c\\)

<!--list-separator-->

-  robustness (logic)

    "robustness" is the amount by which achieve/miss a particular value; the bigger the magnitude, the "more" we did something; that is, very negative means super

    {{< figure src="/ox-hugo/2025-01-16_14-30-52_screenshot.png" >}}

    The above predicate could be computed for the formulae above using \\(\rho \qty(s\_{t}, P) = \mu\_{t} \qty(s\_{t}) - c\\)

    To calculate robustness to various predicates...

    -   \\(\rho\qty(s\_{t}, \neg P) = - \rho \qty(s\_{t}, P)\\)
    -   \\(\rho\qty(s\_{t}, P \wedge Q) = \min \qty(\rho \qty(s\_{t}, P), \rho \qty(s\_{t}, Q))\\)
    -   \\(\rho\qty(s\_{t}, P \vee Q) = \max \qty(\rho \qty(s\_{t}, P), \rho \qty(s\_{t}, Q))\\)
    -   \\(\rho\qty(s\_{t}, P \to Q) = \max \qty(-\rho \qty(s\_{t}, P), \rho \qty(s\_{t}, Q))\\)

<!--list-separator-->

-  gradient of robustness

    Binary values can't be taken derivatives of. But, to take temporal derivatives, we instead take the softmin/softmax.

    {{< figure src="/ox-hugo/2025-01-16_14-48-25_screenshot.png" >}}

    {{< figure src="/ox-hugo/2025-01-16_14-48-10_screenshot.png" >}}

    {{< figure src="/ox-hugo/2025-01-16_14-47-24_screenshot.png" >}}
