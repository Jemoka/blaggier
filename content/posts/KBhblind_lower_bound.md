+++
title = "blind lower bound"
author = ["Houjun Liu"]
draft = false
+++

To evaluate the lower bound:

\begin{equation}
\alpha\_{a}^{k+1} (s) = R(s,a) + \gamma \sum\_{s'}^{} T(s'|s,a) \alpha\_{a}^{k}(s')
\end{equation}

we are essentially sticking with an action and do [conditional plan evaluation]({{< relref "KBhconditional_plan.md#id-6f19368f-74b5-4606-a882-ec9bc5619873-conditional-plan-evaluation" >}}) of a policy that do one action into the future
