+++
title = "utility elicitation"
author = ["Houjun Liu"]
draft = false
+++

[utility elicitation]({{< relref "KBhutility_elicitation.md" >}}) is the process to go from [Rational Preference]({{< relref "KBhrational_preference.md" >}})s to a [utility]({{< relref "KBhutility_theory.md" >}}) function. **Its a bad idea to use money to do this, because money is not linear.**

Consider the best and worst possible events:

\begin{equation}
\overline{S}, \underline{S}
\end{equation}

We assign the best event to have [utility]({{< relref "KBhutility_theory.md" >}}) \\(1\\), and worst to have utility \\(0\\):

\begin{equation}
\begin{cases}
U(\overline{S}) = 1 \\\\
U(\underline{S}) = 0
\end{cases}
\end{equation}

Given some test event now \\(S\\), we try to find the \\(p\\) such that we can set up a [lottery]({{< relref "KBhlottery.md" >}}):

\begin{equation}
S \sim [\overline{S}:p; \underline{S}:(1-p)]
\end{equation}

because the desirability of \\(S\\) is between the best and worst possible events, the [continuity]({{< relref "KBhuniqueness_and_existance.md#continuity" >}}) [von Neumann and Morgenstern Axiom]({{< relref "KBhrational_preference.md#von-neumann-and-morgenstern-axioms" >}}) states that this \\(p\\) exists.

Once this \\(p\\) has been figured, we then assign:

\begin{equation}
U(S) = p
\end{equation}
