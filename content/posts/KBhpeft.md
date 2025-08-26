+++
title = "PEFT"
author = ["Houjun Liu"]
draft = false
+++

[PEFT]({{< relref "KBhpeft.md" >}}) is parameter efficient fine-tuning.


## LoRA {#lora}

Consider some matrix:

\begin{equation}
W\_0 \in \mathbb{R}^{d \times k}
\end{equation}

Key intuition: **gradient matricies have low intrinsic rank**. We consider the following update:

\begin{equation}
W\_0 + \Delta W = W\_0 + \alpha BA
\end{equation}

where \\(B \in \mathbb{R}^{d \times r}, A \in \mathbb{R}^{r \times k}\\), and \\(r \ll \min(d,k)\\).

where \\(\alpha\\) is the trade off between pre-trained knowledge and task specific knowledge.
