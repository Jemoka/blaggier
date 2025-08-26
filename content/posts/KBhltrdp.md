+++
title = "LRTDP"
author = ["Houjun Liu"]
draft = false
+++

## Real-Time Dynamic Programming {#real-time-dynamic-programming}

[RTDP](#real-time-dynamic-programming) is a asynchronous value iteration scheme. Each [RTDP](#real-time-dynamic-programming) trial is a result of:

\begin{equation}
V(s) = \min\_{ia \in A(s)} c(a,s) + \sum\_{s' \in S}^{} P\_{a}(s'|s)V(s)
\end{equation}

the algorithm halts when the residuals are sufficiently small.


## Labeled [RTDP](#real-time-dynamic-programming) {#labeled-rtdp--org9a279ff}

We want to label converged states so we don't need to keep investigate it:

a state is **solved** if:

-   state has less then \\(\epsilon\\)
-   all reachable states given \\(s'\\) from this state has residual lower than \\(\epsilon\\)


### Labelled RTDP {#labelled-rtdp}

{{< figure src="/ox-hugo/2024-02-13_10-11-32_screenshot.png" >}}

We stochastically simulate one step forward, and until a state we haven't marked as "solved" is met, then we simulate forward and value iterate
