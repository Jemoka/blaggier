+++
title = "SU-CS254B MAY072025"
author = ["Houjun Liu"]
draft = false
+++

## hardcore lemma {#hardcore-lemma}

Goal: can we find a single set of \\(x \in \qty {\pm 1}^{h} = H\\) where \\(|H| \geq \frac{\delta}{2}\\), such that for \\(f : \qty {\pm 1 }^{h} \to  \qty {\pm 1}\\), for all circuits of size \\(S\\), commuting \\(f\\) on inputs in \\(H\\) is hopelessly hard (i.e., the \\(\mathbb{Pr}\_{x \in H} \qty [f\qty(x) =c\qty(x)] \leq  \frac{1}{2} + \frac{\varepsilon}{2} \implies \mathbb{E}\_{x \sim H} \qty [f\qty(x) c\qty(x)] \leq \varepsilon\\).

<div class="theorem"><span>

\\(H\\), the "hardcore set" of circuit \\(S\\), exists!

If \\(f\\) is such that \\(\text{corr}\qty(f,s) \leq 1- \delta\\), a "hardcore set" \\(H \subseteq \qty {\pm 1}^{n}\\) of size \\(\geq  \frac{\delta}{2} 2^{n}\\) always exists.

</span></div>

This is a **certificate for hardness!**

In particular: \\(\text{corr}\_{H}\qty(f, S') \leq \varepsilon\\), where \\(S' = \frac{\epsilon^{\delta}}{\log \qty( ?)}S\\).


## yao's xor theorem {#yao-s-xor-theorem}

<div class="theorem"><span>

\begin{equation}
\text{cor}\qty(f, s) < 1-\delta \implies  \text{corr}\qty(f^{\oplus k}, s') \leq \qty(1 - \frac{\delta}{2})^{k} + \varepsilon
\end{equation}

where \\(S' = \frac{\varepsilon}{\log \qty(\frac{1}{\delta})} S\\)

</span></div>

where corr \\(a,b\\) where $&forall; \text{ckts, size $b$}, $Pr[f(x) &ne; c(x)]$$.
