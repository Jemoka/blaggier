+++
title = "Maximum Likelihood Parameter Learning"
author = ["Houjun Liu"]
draft = false
+++

"We find the [parameter]({{< relref "KBhparameter.md" >}}) that maximizes the likelihood."

1.  for each \\(X\_{j}\\), sum
    1.  what's the [log-likelihood](#log-likelihood) of one \\(X\_{i}\\)
2.  take derivative w.r.t. \\(\theta\\) and set to \\(0\\)
3.  solve for \\(\theta\\)

(this maximizes the [log-likelihood](#log-likelihood) of the data!)

that is:

\begin{equation}
\theta\_{MLE} = \arg\max\_{\theta} P(x\_1, \dots, x\_{n}|\theta) = \arg\max\_{\theta} \qty(\sum\_{i=1}^{n} \log(f(x\_{i}|\theta))  )
\end{equation}

---

If your \\(\theta\\) is a vector of more than \\(1\\) thing, take the gradient (i.e. partial derivative against each of your variables) of the thing and solve the place where the gradient is identically \\(0\\) (each slot is \\(0\\)). That is, we want:

\begin{equation}
\mqty[\pdv{LL(\theta)}{\theta\_{1}} \\\ \pdv{LL(\theta)}{\theta\_{2}}  \\\ \pdv{LL(\theta)}{\theta\_{3}} \\\ \dots] = \mqty[0 \\\ 0 \\\0]
\end{equation}

-   [MLE for poisson distribution]({{< relref "KBhprobability_of_k_in_x_time.md#mle-for-id-58a7600a-5169-4473-8ddc-f286534fc1f4-poisson-distribution" >}})
-   [MLE for Bernouli]({{< relref "KBhbernoulli_random_variable.md#mle-for-bernouli" >}})
-   [MLE for Gaussian]({{< relref "KBhmle_for_gaussian.md" >}})

MLE is REALLY bad at generalizing to unseen data. Hence why MLE is good for big data where your MLE slowly converge to best parameters for your actual dataset.

---

We desire \\(\theta\\) parameter from some data \\(D\\). To do this, we simply optimize:

\begin{equation}
\hat{\theta} = \arg\max\_{\theta}P(D|\theta)
\end{equation}

, where:

\begin{equation}
P(D|\theta) = \prod\_{i} P(o\_{i}| \theta)
\end{equation}

for each \\(o\_{i} \in D\\).  and \\(P\\) is the [likelyhood]({{< relref "KBhlikelyhood.md" >}}): [PMF]({{< relref "KBhprobability_mass_function.md" >}}) or [PDF]({{< relref "KBhprobability_density_function.md" >}}) given what you are working with.

That is, we want the parameter \\(\theta\\) which maximizes the likelyhood of the data. This only works, of course, if each \\(o\_{i} \in D\\) is [independent]({{< relref "KBhprobability.md#independence" >}}) from each other, which we can assume so by calling the samples from data [IID]({{< relref "KBhindependently_and_identically_distributed.md" >}}) (because they are independent draws from the underlying distribution.)


## log-likelihood {#log-likelihood}

The summation above is a little unwieldy, so we take the logs and apply log laws to turn the multiplication into a summation:

\begin{equation}
\hat{\theta} = \arg\max\_{\theta} \sum\_{i} \log P(o\_{i}|\theta)
\end{equation}

"add the log probabilities of each of the outcomes you observed happening according to your unoptimized theta, and maximize it"


### argmax of log {#argmax-of-log}

This holds because [log]({{< relref "KBhlog_laws.md" >}}) is monotonic ("any larger input to a log will lead to a larger value"):

\begin{equation}
\arg\max\_{x} f(x) = \arg\max\_{x} \log f(x)
\end{equation}


### MLE, in general {#mle-in-general}

\begin{equation}
\theta\_{MLE} = \arg\max\_{\theta} \qty(\sum\_{i=1}^{n} \log(f(x\_{i}|\theta))  )
\end{equation}


## Example {#example}

Say we want to train a model to predict whether or not a plane will crash. Suppose our network is very simple:

\\(\theta\\) represents if there will be an midair collision. Therefore, we have two disconnected nodes:

\begin{equation}
P(crash) = \theta
\end{equation}

\begin{equation}
P(safe) = 1-\theta
\end{equation}

Now, suppose we observed that there was \\(m\\) flights and \\(n\\) midair collisions between them. We can then write then:

\begin{equation}
P(D|\theta) = \theta^{n}(1-\theta)^{m-n}
\end{equation}

because \\(\theta^{n}(1-\theta)^{m-n}\\) is the total probability of the data you are given occurring (\\(n\\) crashes, \\(m-n\\) non crashing flights).

Now, we seek to maximise this value---because the probability of \\(P(D)\\) occurring should be \\(1\\) because \\(D\\) actually occured.

Its mostly algebra at this point:

{{< figure src="/ox-hugo/2023-10-05_10-07-18_screenshot.png" >}}

Steps:

1.  we first compute the probability of each of the sample happening according to old \\(\theta\\) to get \\(P(D|\theta)\\)
2.  we then take the log of it to make it a summation
3.  we then try to maximize \\(\theta\\) to

What this tells us is...


## Generic Maximum Likelihood Estimate {#generic-maximum-likelihood-estimate}

Overall, its kind of unsurprising from the [Frequentist Definition of Probability]({{< relref "KBhprobability.md#frequentist-definition-of-probability" >}}), but:

\begin{equation}
\hat{\theta}\_{i} = \frac{n\_{i}}{\sum\_{j=1}^{k} n\_{j}}
\end{equation}

for some observations \\(n\_{1:k}\\).

and:

\begin{equation}
\sigma^{2} = \frac{\sum\_{}^{} (o\_{i} - \hat{u})^{2}}{m}
\end{equation}


## Problems with [Maximum Likelihood Parameter Learning]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}) {#problems-with-maximum-likelihood-parameter-learning--kbhmaximum-likelihood-parameter-learning-dot-md}

This requires a lot of data to make work: for instance---if we don't have any plane crashes observed in \\(n\\) files, this scheme would say there's no chance of plane crashes. This is not explicitly true.

Therefore, we use [Baysian Parameter Learning]({{< relref "KBhbaysian_parameter_learning.md" >}}).
