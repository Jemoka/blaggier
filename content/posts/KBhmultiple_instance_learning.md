+++
title = "Multiple Instance Learning"
author = ["Houjun Liu"]
draft = false
+++

\begin{equation}
B = \qty[(x\_1, y\_1), \dots, (x\_{n}, y\_{n})]
\end{equation}

where the labels would be:

\begin{equation}
C(b) = \begin{cases}
0, if \sum\_{i}^{}y\_{i} = 0 \\\\
1, \text{otherwise}
\end{cases}
\end{equation}

and then we maxpool


## MILFormer {#milformer}

[MILFormer](#milformer) is a multiple-instance learning scheme which makes predictions over input patches whose output predictions are weighted as multi-distirbution.
