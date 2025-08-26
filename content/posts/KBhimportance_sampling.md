+++
title = "Importance Sampling"
author = ["Houjun Liu"]
draft = false
+++

Key insight: suppose you have some fairly rare event and you want the likelihood of it. We can do this by drawing normal samples and **reweighing them**.

Suppose we want \\(p\_{\text{fail}}\\); and we have \\(q\\) the proposal distribution and \\(p\\) the nominal distribution:

\\(\tau \sim q\qty(\cdot)\\), \\(p\_{\text{fail}} = \int 1 \qty {\tau \not\in  \psi} p\qty(\tau) \dd{\tau }\\)

What if we define a weird \\(1\\) such that:

\begin{equation}
1 = \frac{q\qty(\tau)}{q\qty(\tau)}
\end{equation}

let's see:

\begin{align}
\int 1 \qty {\tau \not\in  \psi} p\qty(\tau) \dd{\tau } &=  \int \frac{q\qty(\tau)}{q\qty(\tau)}1 \qty {\tau \not\in  \psi} p\qty(\tau) \dd{\tau }  \\\\
&= \int q\qty(\tau) \qty(\frac{p\qty(\tau)}{q\qty(\tau)} \mathbb{1}\qty{\tau \not \in \psi}) \dd{\tau}  \\\\
&= \mathbb{E}\_{\tau \sim q\qty(\cdot)} \qty [\frac{p\qty(\tau)}{q\qty(\tau)} \mathbb{1}\qty{\tau \not \in \psi}]
\end{align}

we can now estimate this by using an average of what we observed:

\begin{equation}
\hat{p}\_{\text{fail}} = \frac{1}{m}\sum\_{i=1}^{m} \frac{p\qty(\tau\_{i})}{q\qty(\tau\_{i})} \mathbb{1} \qty {\tau\_{i}\not \in \psi}
\end{equation}

---

Suppose you have a function \\(f(s)\\) which isn't super well integrate-able, yet you want:

\begin{equation}
\mu = \mathbb{E}(f(s)) = \int\_{0}^{1} f(s)p(s) \dd{s}
\end{equation}

how would you sample various \\(f(s)\\) effectively such that you end up with \\(\hat{\mu}\\) that's close enough?

Well, what if you have an [importance distribution]({{< relref "KBhimportance_sampling.md" >}}) \\(q(s): S \to \mathbb{R}^{[0,1]}\\), which tells you how "important" to the expected value of the distribution a particular state is? Then, we can formulate a new, better normalization function called the "[importance weight]({{< relref "KBhimportance_sampling.md" >}})":

\begin{equation}
w(s) = \frac{p(s)}{q(s)}
\end{equation}

Therefore, this would make our estimator:

\begin{equation}
\hat{\mu} = \frac{\sum\_{n} f(s\_{n}) w(s\_{n})}{\sum\_{n}  w(s\_{n})}
\end{equation}


## Theoretic grantees {#theoretic-grantees}

So, there's a distribution over \\(f\\):

\begin{equation}
q(s) = \frac{b(s)}{w\_{\pi}(s)}
\end{equation}

where

\begin{equation}
w(s) = \frac{\mathbb{E}\_{b} \qty( \sqrt{[\mathbb{E}(v|s, \pi )]^{2} + [Var(v|s, \pi )]})}{[\mathbb{E}(v|s, \pi )]^{2} + [Var(v|s, \pi )]}
\end{equation}

which measures how important a state is, where \\(\pi\\) is the total discounted reward.
