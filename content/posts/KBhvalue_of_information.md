+++
title = "value of information"
author = ["Houjun Liu"]
draft = false
+++

[VOI]({{< relref "KBhvalue_of_information.md" >}}) is a measure of how much observing something changes your action if you are a rational agent.

The [value of information]({{< relref "KBhvalue_of_information.md" >}}) a measure for how much observing an additional variable is expected to **increase** our [utility]({{< relref "KBhutility_theory.md" >}}). [VOI]({{< relref "KBhvalue_of_information.md" >}}) can never be negative, and does not take into account the **COST** of performing the observation.


## constituents {#constituents}

-   \\(o\\): an observation
-   \\(O'\\): a possible observation to run which yield \\(o'\_{j}\\) different outcomes


## requirements {#requirements}

\begin{equation}
VOI(O'|o) = (\sum\_{o'} P(o'|o) EU^{\*}(o, o')) - EU^{\*}(o)
\end{equation}

where, \\(EU^{\*}(o\_{1} \dots o\_{n})\\) is the [maximum expected utility]({{< relref "KBhutility_theory.md#maximum-expected-utility-principle" >}}) given observations \\(o\_1, ..., o\_{n}\\), that is:

\begin{equation}
EU^{\*}(o\_1, \dots, o\_{n}) = \max\_{a} EU(o\_1, \dots, o\_{n})
\end{equation}

"the value of an observation is the sum of the [MEU]({{< relref "KBhutility_theory.md#maximum-expected-utility-principle" >}}) of each possible outcome from that new observation, time their probability of occurance, subtracted by the [MEU]({{< relref "KBhutility_theory.md#maximum-expected-utility-principle" >}}) of the current observation"


## additional information {#additional-information}


### process of observation selection {#process-of-observation-selection}

Here's how you would select what variables to observe.

1.  make observation
2.  determine [value of information]({{< relref "KBhvalue_of_information.md" >}}) of anything you haven't observed yet
3.  select the next feature to observe
4.  repeat 1-3
5.  wait until its no longer beneficial to observe any more variables
6.  make decision based on observations

This is not the true optimum: its only a heuristic!
