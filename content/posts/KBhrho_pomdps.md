+++
title = "rho-POMDPs"
author = ["Houjun Liu"]
draft = false
+++

[POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}})s to solve [Active Sensing Problem]({{< relref "KBhrho_pomdps.md" >}}): where **gathering information** is the explicit goal and not a means to do something. Meaning, we can't train them using state-only reward functions (i.e. reward is based on belief and not state).

Directly reward the **reduction of uncertainty**: [belief]({{< relref "KBhbelief.md" >}})-based reward framework which you can just tack onto the existing solvers.

To do this, we want to define some reward directly over the belief space which assigns rewards based on uncertainty reduction:

\begin{equation}
r(b,a) = \rho(b,a)
\end{equation}

\\(\rho\\) should be some measure of uncertainty, like entropy.

**key question**: how does our [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}) formulations change given this change?


## Don't worry about the Value Function {#don-t-worry-about-the-value-function}

result: if **reward function** is convex, then Bellman updates should **preserve the convexity of the value function**

So, we now just need to make sure that however we compute our rewards the reward function \\(\rho\\) has to be piecewise linear convex.


## [PWLC]({{< relref "KBhrho_pomdps.md" >}}) rewards {#pwlc--kbhrho-pomdps-dot-md--rewards}

One simple [PWLC]({{< relref "KBhrho_pomdps.md" >}}) rewards are [alpha vector]({{< relref "KBhalpha_vector.md" >}})s:

\begin{equation}
\rho(b,a) = \max\_{\alpha in \Gamma} \qty[\sum\_{ss}^{} b(s) \alpha(s)]
\end{equation}

We want to use \\(R\\) extra alpha-vectors to compute the value at a state.

This makes our Belman updates:

{{< figure src="/ox-hugo/2024-02-25_19-56-49_screenshot.png" >}}


## non-[PWLC]({{< relref "KBhrho_pomdps.md" >}}) objectives {#non-pwlc--kbhrho-pomdps-dot-md--objectives}

As long as \\(\rho\\) is convex and stronger-than [Lipschitz continuous]({{< relref "KBhuniqueness_and_existance.md#lipschitz-condition" >}}), we can use a modified version of the Bellman updates to force our non [PWLC]({{< relref "KBhrho_pomdps.md" >}}) \\(\rho\\) into pretty much PWLC:

\begin{equation}
\hat{\rho}(b) = \max\_{b'} \qty[\rho(b') + (b-b') \cdot \nabla p(b')]
\end{equation}

Taylor never fails to disappoint.

Fancy math gives that the error in this would be bounded:

{{< figure src="/ox-hugo/2024-02-25_19-59-10_screenshot.png" >}}
