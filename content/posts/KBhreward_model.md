+++
title = "reward model"
author = ["Houjun Liu"]
draft = false
+++

feed both accepted and rejected into your model, and get two scalars out \\(r\_{\text{rejected}}\\), and \\(r\_{\text{chosen}}\\):

\begin{equation}
\mathcal{L}\_{RM} = \log \qty(1 + e^{r\_{\text{rejected}}-r\_{\text{chosen}}})
\end{equation}

1.  train only for one epoch
2.  you should be getting low accuracy scores
3.  you may need to ensemble, margin loss

---

-   ppo gets the best model
-
