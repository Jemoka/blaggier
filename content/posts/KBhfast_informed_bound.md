+++
title = "Fast Informed Bound"
author = ["Houjun Liu"]
draft = false
+++

One [alpha vector]({{< relref "KBhalpha_vector.md" >}}) per action:

\begin{equation}
\alpha^{(k+1)}\_{a}(s) = R(s,a) + \gamma \sum\_{o}^{} \max\_{a'} \sum\_{s'}^{} O(o|a,s')T(s'|s,a) \alpha\_{a'}^{k}(s')
\end{equation}

time complexity:  \\(O(|S|^{2}|A|^{2}|O|)\\)
