+++
title = "Neural Networks"
author = ["Houjun Liu"]
draft = false
+++

## Neural Network Unit {#neural-network-unit}

A real-valued vector as input, each multiplied by some weights, summed, and squashed by some non-linear transform.

\begin{equation}
z = w\cdot x + b
\end{equation}

and then, we will squash this using it as an "activation"

\begin{equation}
y = \sigmoid(z)
\end{equation}

One common activation is [sigmoid]({{< relref "KBhsigmoid.md" >}}). So, one common formulation would be:

\begin{equation}
y = \frac{1}{1+\exp (- (w \cdot x + b))}
\end{equation}


## Tanh {#tanh}

\begin{equation}
y(z) = \frac{e^{z} - e^{-z}}{e^{z}+e^{-z}}
\end{equation}

This causes "saturation"---meaning derivatives to be \\(0\\) at high values


## relu {#relu}

\begin{equation}
y(z) = \max(z,0)
\end{equation}


## multi-layer networks {#multi-layer-networks}

Single computing units can't compute XOR. Consider a perceptron:

\begin{equation}
w\_1x\_1 + w\_2x\_2 + b = 0
\end{equation}

meaning:

\begin{equation}
x\_2 = \qty(\frac{-w\_1}{w\_2})x\_1 + \qty(\frac{-b}{w\_2})
\end{equation}

meaning, obtain a line that acts as a **decision boundary**---we obtain 0 if the input is on one side of the line, and 1 if on the other. XOR, unfortunately, does not have a single linear boundary, its not **linearly [seperable]({{< relref "KBhseperable_diffequ.md" >}})**.

[logistic regression]({{< relref "KBhlogistic_regression.md" >}}), for instance, can't compute XOR because it is linear until squashing.


## feed-forward network {#feed-forward-network}

we can think about [logistic regression]({{< relref "KBhlogistic_regression.md" >}}) as a one layer network, generalizing over [sigmoid]({{< relref "KBhsigmoid.md" >}}):

\begin{equation}
\text{softmax} = \frac{\exp(z\_{i})}{\sum\_{j=1}^{k} \exp(z\_{j})}
\end{equation}

and a multinomial [logistic regression]({{< relref "KBhlogistic_regression.md" >}}) which uses the above. This is considered a "layer" in the [feed-forward network](#feed-forward-network).

notation:

-   \\(W^{(j)}\\), weight matrix for layer \\(j\\)
-   \\(b^{(j)}\\), the bias vector for layer \\(j\\)
-   \\(g^{(j)}\\), the activation function at \\(j\\)
-   and \\(z^{(i)}\\), the output at \\(i\\) (before activation function)
-   \\(a^{(i)}\\), the activation at \\(i\\)

instead of bias, we sometimes add a dummy node \\(a\_{0}\\), we will force a value \\(1\\) at \\(a\_{0}\\) and use its weights as bias.


### embeddings {#embeddings}

We use [vector-space model]({{< relref "KBhranked_information_retrieval.md#vector-space-model" >}}) to feed words into networks: converting each word first into embeddings, then feeding it into the network

Fix length problems:

1.  sentence embedding (mean of all the embeddings)
2.  element wise max of all the word embeddings to create sentence embedding
3.  use the max length + pad

For [Language Model]({{< relref "KBhnlp.md#language-model" >}})s, we can use a "sliding window"; that is:

\begin{equation}
P(w\_{t}|w\_{1 \dots t-1}) \approx P(w\_{t} | w\_{t-N+1 \dots t-1})
\end{equation}


## Training {#training}

For every tuple \\((x,y)\\), we run a forward pass to obtain \\(\hat{y}\\). Then, we run the network backwards to update the weights.

A loss function calculates the negative of the probability of the correct labels.


### [backpropegation]({{< relref "KBhdeep_learning.md#backpropegation" >}}) {#backpropegation--kbhdeep-learning-dot-md}

[backprop]({{< relref "KBhdeep_learning.md#backpropegation" >}})
