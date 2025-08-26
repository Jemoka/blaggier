+++
title = "Rejection Sampling"
author = ["Houjun Liu"]
draft = false
+++

## steps (coda) {#steps--coda}

for some unnormalized target failure density, which is our **target** (and nominal trajectory \\(p\qty(\tau)\\)):

\begin{equation}
\bar{p} \qty(\tau \mid \tau \not \in \psi) =  \mathbb{1}\qty {\tau \not  \in \psi} p\qty(\tau)
\end{equation}


### sample \\(\tau \sim q\qty(\cdot)\\) {#sample-tau-sim-q-qty--cdot}

where \\(q\\) is the **proposal distribution** where you start generating your samples; you want this to be as close as you can to the target failure distribution.


### reject if \\(cq\qty(\tau) r > \bar{p}\qty(\tau)\\) {#reject-if-cq-qty--tau--r-bar-p-qty--tau}

first, choose a normalizing constant \\(c\\) which makes

\begin{equation}
\bar{p} \qty(\tau) \leq  c q\qty(\tau)
\end{equation}

true. This allows us to rescale our **proposal distribution** to be at least as big as our target distribution.

In particular keep a sample of \\(\tau\\) if:

\begin{equation}
r < \frac{\bar{p}\qty(\tau)}{cq\qty(\tau)}
\end{equation}

where \\(c\\) is a constant that makes the inequality true; \\(\bar{p}\\) is the not normalized density (a la a [Failure Distribution]({{< relref "KBhfailure_distribution.md" >}})).


## drawbacks {#drawbacks}

1.  selecting an appropriate proposal distribution \\(\tau \sim q\qty(\cdot)\\) is hard
2.  selecting an appropriate value for \\(c\\)


## 109's definition {#109-s-definition}

Sample a ton; perform [factor conditioning]({{< relref "KBhfactor.md#factor-conditioning" >}}); then count the observation you'd like.

{{< figure src="/ox-hugo/2023-11-01_23-25-20_screenshot.png" >}}

by rejecting those who don't match
