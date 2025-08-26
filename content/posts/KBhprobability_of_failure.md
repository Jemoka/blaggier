+++
title = "Probability of Failure"
author = ["Houjun Liu"]
draft = false
+++

\begin{align}
p\_{\text{fail}}  &= \mathbb{E}\_{\tau \sim p\qty(\cdot)} \qty [1 \qty{\tau  \not \in \psi}]  \\\\
&= \int 1 \qty {\tau \not\in  \psi} p\qty(\tau) \dd{\tau }
\end{align}

that is, the [Probability of Failure]({{< relref "KBhprobability_of_failure.md" >}}) is just the **normalizing constant** of the [Failure Distribution]({{< relref "KBhfailure_distribution.md" >}}). Like with [Failure Distribution]({{< relref "KBhfailure_distribution.md" >}}) itself, computing this is quite intractable. We have a few methods to solve this, namely:

1.  [direct estimation]({{< relref "KBhdirect_estimation.md" >}}): directly approximate your failure probability from nominal distribution \\(p\\) --- \\(\tau\_{j} \sim p\qty(\cdot)\\), \\(\hat{p}\_{\text{fail}} = \frac{1}{m} \sum\_{i=1}^{m} 1\qty {\tau\_{i} \not \in \psi}\\)
2.  [Importance Sampling]({{< relref "KBhimportance_sampling.md" >}}): design a distribution to probe failure, namely proposal distribution \\(q\\), and then reweight by how different it is from \\(p\\) --- \\(\tau\_{j} \sim q\qty(\cdot)\\), \\(\hat{p}\_{\text{fail}} = \frac{1}{m}\sum\_{i=1}^{m} w\_{i} \mathbb{1} \qty {\tau\_{i}\not \in \psi}\\), call \\(w\_{i} = \frac{p\qty(\tau\_{i})}{q\qty(\tau\_{i})}\\) (the "[importance weight]({{< relref "KBhimportance_sampling.md" >}})")
3.  [adaptive importance sampling]({{< relref "KBhadaptive_importance_sampling.md" >}})
4.  [multiple importance sampling]({{< relref "KBhmultiple_importance_sampling.md" >}})
5.  [sequential monte-carlo]({{< relref "KBhsequential_monte_carlo.md#sequential-monte-carlo" >}})

How do you pick a [proposal distribution]({{< relref "KBhproposal_distribution.md" >}})? See [proposal distribution]({{< relref "KBhproposal_distribution.md" >}}).


## evaluating estimators {#evaluating-estimators}

-   **bias**: an estimator is unbiased if it predicts the true value in
    expectation; namely \\(\mathbb{E}\qty [\hat{p}\_{\text{fail}}] =
      p\_{\text{fail}}\\)
-   **consistency**: an estimator is consistent if it converges to infinity at infinite samples, namely that \\(\text{lim}\_{m \to \infty} \hat{p}\_{\text{fail}} = p\_{\text{fail}}\\)
-   **variance**: we want the variance of the estimates around the true value to be low


### evaluation of [direct estimation]({{< relref "KBhdirect_estimation.md" >}}) {#evaluation-of-direct-estimation--kbhdirect-estimation-dot-md}

\begin{equation}
\text{Var}\qty [\hat{p}] = \frac{p\_{\text{fail}} \qty(1-p\_{\text{fail}})}{m}
\end{equation}

1.  as the number of samples increases, the variance in the estimate decreases (yay!)
2.  as the probability of failure deceases, the variance in the failure actually **icreases!!!** baaaad vibes!
