+++
title = "logistic regression"
author = ["Houjun Liu"]
draft = false
+++

[Naive Bayes]({{< relref "KBhnaive_bayes.md" >}}) acts to compute \\(P(Y|X)\\) via the [Bayes rule]({{< relref "KBhbayes_theorem.md" >}}) and using the [Naive Bayes assumption]({{< relref "KBhnaive_bayes.md#id-6cdf74a2-2451-47d1-8a62-62aa6dff62c6-naive-bayes-assumption" >}}). What if we can model the value of \\(P(Y|X)\\) directly?

With \\(\sigma\\) as the [sigmoid]({{< relref "KBhsigmoid.md" >}}) function:

\begin{equation}
P(Y=1|X=x) = \sigma (\theta^{\top}x)
\end{equation}

and we tune the parameters of \\(\theta\\) until this looks correct.

We always want to introduce a BIAS parameter, which acts as an offset; meaning the first \\(x\\) should always be \\(1\\), which makes the first value in \\(\theta\\) as a "bias".

For optimizing this function, we have:

\begin{equation}
LL(\theta) = y \log \sigma(\theta^{\top} x) + (1-y) \log (1- \theta^{\top} x)
\end{equation}

and if we took the derivative w.r.t. a particular parameter slot \\(\theta\_{j}\\):

\begin{equation}
\pdv{LL(\theta)}{\theta\_{j}} = \sum\_{i=1}^{n} \qty[y^{(i)} - \sigma(\theta^{\top}x^{(i)})] x\_{j}^{(i)}
\end{equation}


## logistic regression assumption {#logistic-regression-assumption}

We assume that there exists that there are some \\(\theta\\) which, when multiplied to the input and squashed by th [sigmoid]({{< relref "KBhsigmoid.md" >}}) function, can model our underlying [probability]({{< relref "KBhprobability.md" >}}) distribution:

\begin{equation}
\begin{cases}
P(Y=1|X=x) = \sigma (\theta^{\top}x) \\\\
P(Y=0|X=x) = 1- \sigma (\theta^{\top}x) \\\\
\end{cases}
\end{equation}

We then attempt to compute a set of \\(\theta\\) which:

\begin{equation}
\theta\_{MLE} = \arg\max\_{\theta} P(y^{(1)}, \dots, y^{(n)} | \theta, x\_1 \dots x\_{n})
\end{equation}


## Log Likelihood of Logistic Regression {#log-likelihood-of-logistic-regression}

To actually perform [MLE]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}) for the $&theta;$s, we need to do [parameter learning]({{< relref "KBhparameter_learning.md" >}}). Now, recall that we defined, though the [logistic regression assumption](#logistic-regression-assumption):

\begin{equation}
P(Y=1|X=x) = \sigma (\theta^{\top}x)
\end{equation}

essentially, this is a Bernouli:

\begin{equation}
(Y|X=x) \sim Bern(p=\sigma(\theta^{\top}x))
\end{equation}

We desire to maximize:

\begin{equation}
P(Y=y | \theta, X=x)
\end{equation}

Now, recall the continous [PDF]({{< relref "KBhprobability_distributions.md#probability-density-function" >}}) of Bernouli:

\begin{equation}
P(Y=y) = p^{y} (1-p)^{1-y}
\end{equation}

we now plug in our expression for \\(p\\):

\begin{equation}
P(Y=y|X=x) = \sigma(\theta^{\top}x)^{y} (1-\sigma(\theta^{\top}x))^{1-y}
\end{equation}

for all \\(x,y\\).


## Logistic Regression, in general {#logistic-regression-in-general}

For some input, output pair, \\((x,y)\\), we map each input \\(x^{(i)}\\)  into a vector of length \\(n\\) where \\(x^{(i)}\_{1} ...  x^{(i)}\_{n}\\).


### Training {#training}

We are going to learn weights \\(w\\) and \\(b\\) using stochastic gradient descent; and measure our performance using cross-entropy loss


### Test {#test}

Given a test example \\(x\\), we compute \\(p(y|x)\\) for each \\(y\\), returning the label with the highest probability.


## Logistic Regression Text Classification {#logistic-regression-text-classification}

Given a series of input/output pairs of text to labels, we want to assign a predicted class to a new input fair.

We represent each text in terms of features. Each feature \\(x\_{i}\\) comes with some weight \\(w\_{i}\\), informing us of the importance of feature \\(x\_{i}\\).

So: input is a vector \\(x\_1 ... x\_{n}\\), and some weights \\(w\_1 ... w\_{n}\\), which will eventually gives us an output.

There is usually also a bias term \\(b\\). Eventually, classification gives:

\begin{equation}
z = w \cdot x + b
\end{equation}

However, this does **not** give a probability, which by default this does not. To fix this, we apply a squishing function \\(\sigma\\), which gives

\begin{equation}
\sigma(z) = \frac{1}{1+\exp(-z)}
\end{equation}

which ultimately yields:

\begin{equation}
z = \sigma(w \cdot x+ b)
\end{equation}

with the [sigmoid]({{< relref "KBhsigmoid.md" >}}) function.

To make this sum to \\(1\\), we write:

\begin{equation}
p(y=1|x) = \sigma(w \cdot x + b)
\end{equation}

and

\begin{equation}
p(y=0|x) = 1- p(y=1|x)
\end{equation}

Also, recall that \\(\sigma(-x) = 1- \sigma(x)\\), this gives:

\begin{equation}
p(y=0|x) = \sigma(-w\cdot x-b)
\end{equation}

the probability at which point we make a decision is called a [decision boundary](#logistic-regression-text-classification). Typically this is 0.5.

We can featurize by counts from a lexicon, by word counts, etc.

For instance:

{{< figure src="/ox-hugo/2024-01-26_19-26-16_screenshot.png" >}}


### logistic regression terms {#logistic-regression-terms}

-   **feature representation**: each input \\(x\\) is represented by a vectorized lit of feature
-   **classification function**: \\(p(y|x)\\), computing \\(y\\) using the estimated class
-   **objective function**: the loss to minimize (i.e. cross entropy)
-   **optimizer**: SGD, etc.
-   **decision boundary**: the threshold at which classification decisions are made, with \\(P(y=1|x) > N\\).


### binary cross entropy {#binary-cross-entropy}

\begin{equation}
\mathcal{L} = - \qty[y \log \sigmoid(w \cdot x + b) + (1-y) \log (1- \sigmoid(w \cdot x + b))]
\end{equation}

or, for neural networks in general:

\begin{equation}
\mathcal{L} = - \qty[y \log \hat{y} + (1-y) \log (1- \hat{y})]
\end{equation}


### Weight gradient for logistic regresison {#weight-gradient-for-logistic-regresison}

\begin{equation}
\pdv{L\_{CE}(\hat(y), y)}{w\_{j}} = \qty[\sigma\qty(w \cdot x + b) -y] x\_{j}
\end{equation}

where \\(x\_{j}\\) is feature \\(j\\).
