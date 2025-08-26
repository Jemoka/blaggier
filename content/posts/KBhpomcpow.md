+++
title = "POMCPOW"
author = ["Houjun Liu"]
draft = false
+++

POMDPs with continuous actions are hard. So [POMCP]({{< relref "KBhpomcp.md" >}}) or (belief update + [MCTS]({{< relref "KBhmonte_carlo_tree_search.md" >}})).

So instead, let's try improving that. Unlike just [POMCP]({{< relref "KBhpomcp.md" >}}), not only do we have \\(B(h)\\), we also have \\(W(h)\\), which is the weight of a specific state sampled. Naively applying [POMCP]({{< relref "KBhpomcp.md" >}}) on continuous states will give a wide-ass tree because each sampled state will not be the same as before.


## double progressive widening {#double-progressive-widening}

We want to use sampling to sample from observation. This will eventually lead to a suboptimal [QMDP]({{< relref "KBhqmdp.md" >}}) policy---this is because there are no state uncertainty?


## [POMCPOW]({{< relref "KBhpomcpow.md" >}}) {#pomcpow--kbhpomcpow-dot-md}

1.  get an action from ActionProgressiveWiden function
2.  Get an observation, if the observation we got has to many children we prune
3.  discard the observation and stick the next state onto previous observation weighted by the observation likelihood system \\(Z(o|s,a,s')\\)

\\(k, \alpha, C\\)


## PFTDTW {#pftdtw}

1.  MCTS
2.  Particle filters
3.  [Double Progressive Widening]({{< relref "KBhdouble_progressive_widening.md" >}})
