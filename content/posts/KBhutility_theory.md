+++
title = "utility theory"
author = ["Houjun Liu"]
draft = false
+++

[utility theory]({{< relref "KBhutility_theory.md" >}}) is a set of theories that deals with rational decision making through maximizing the **expected utility**.

[utility theory]({{< relref "KBhutility_theory.md" >}}) can be leveraged to choose the right actions in the [observe-act cycle]({{< relref "KBhobserve_act_cycle.md" >}}) in a graphical network via [decision networks]({{< relref "KBhdecision_networks.md" >}})


## additional information {#additional-information}


### never have a utility function that's infinite {#never-have-a-utility-function-that-s-infinite}

If something has infinite utility, doing two of the good things is the same as doing one good thing, which is wrong.

Say going to a Taylor concert has \\(+\infty\\) utility. Then, you would be indifferent to the difference between Taylor + Harry vs. Taylor only. However, the former case clearly has higher utility as long as Harry concert doesn't have negative utility.


### [utility elicitation]({{< relref "KBhutility_elicitation.md" >}}) {#utility-elicitation--kbhutility-elicitation-dot-md}

see [utility elicitation]({{< relref "KBhutility_elicitation.md" >}})


### expected utility {#expected-utility}

[expected utility](#expected-utility) is the utility we expect from taking an action \\(a\\) at a state \\(o\\). To compute it based on transition probabilities:

\begin{equation}
EU(a|o) = \sum\_{s'} p(s' | a,o) U(s')
\end{equation}

the expected [utility]({{< relref "KBhutility_theory.md" >}}) of taking some action \\(a\\) at an observation \\(o\\) is the [probability]({{< relref "KBhprobability.md" >}}) of any given next state \\(s'\\) happening times the [utility]({{< relref "KBhutility_theory.md" >}}) of being in that state \\(U(s')\\).

See also [expected utility of wealth]({{< relref "KBhexpected_utility_of_wealth.md" >}}).


### maximum expected utility principle {#maximum-expected-utility-principle}

[MEU](#maximum-expected-utility-principle) states that a rational agent should choose an action which maximizes [expected utility](#expected-utility). That is,

\begin{equation}
a^{\*} = \arg\max\_{a} EU(a|o)
\end{equation}

Notably, this is **not always the best action**. This action maximizes [utility]({{< relref "KBhutility_theory.md" >}}) **NOT** outcome.


### utility of [Rational Preference]({{< relref "KBhrational_preference.md" >}}) {#utility-of-rational-preference--kbhrational-preference-dot-md}

For rational values, for two situations, \\(A, B\\), we have, with [utility]({{< relref "KBhutility_theory.md" >}}) function \\(U\\):

\begin{equation}
U(A) > U(B) \iff A \succ B
\end{equation}

\begin{equation}
U(A) = U(B) \iff A \sim B
\end{equation}

and this \\(U\\) is unique up to the same [affine transformation]({{< relref "KBhaffine_transformation.md" >}})


### [risk aversion]({{< relref "KBhexpected_utility_of_wealth.md" >}}) {#risk-aversion--kbhexpected-utility-of-wealth-dot-md}

see [risk aversion]({{< relref "KBhexpected_utility_of_wealth.md" >}})


### common utility functions {#common-utility-functions}

see [utility function]({{< relref "KBhutility_theory.md" >}})
