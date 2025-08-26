+++
title = "NUS-MATH530 Some 6.A Problems"
author = ["Houjun Liu"]
draft = false
+++

Suppose \\(\mathbb{F} = \mathbb{R}\\), and \\(V \neq \\{0\\}\\). Replace the positivity condition with the condition that \\(\langle v,v \rangle > 0\\) for some \\(v \in V\\). Show that this change in definition does not change the set of functions from \\(V \times V\\) to \\(\mathbb{R}\\) that are inner products on \\(V\\).

---

We hope to show that \\(\langle v,v \rangle >0\\) for some \\(v \in V\\) implies that \\(\langle v,v \rangle \geq 0\\) for all \\(v \in V\\) in real vector spaces.

Take some \\(v\_0 \in V\\) such that \\(\langle v\_0,v\_0 \rangle >0\\). Now, WLOG let \\(v \in V\\) and \\(v = v\_0+w\\). So:

\begin{align}
0 &< \langle v\_0,v\_0 \rangle  \\\\
&= \langle v-w, v-w \rangle  \\\\
&= \langle v,v \rangle + \langle w,w \rangle - 2\langle v,w \rangle
\end{align}

Now, the last step is possible because symmetry becomes conjugate symmetry in reals.

We now have that:

\begin{equation}
2 \langle v,w \rangle - \langle w,w \rangle < \langle v,v \rangle
\end{equation}
