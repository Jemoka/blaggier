+++
title = "Martingale Model"
author = ["Houjun Liu"]
draft = false
+++

The [Martingale Model]({{< relref "KBhmartingale_model.md" >}}) states: if we observed the closing price of the market yesterday, we expect that the market is going to open at the close price yesterday.

Formally:

\begin{equation}
E\qty [X\_{k}|X\_{k-1}, X\_{k-2},\ldots] = X\_{k-1}
\end{equation}

"irrespective of what you know, no matter how long the history, the best expectation of today's price is yesterday's price."

This is not a _for sure!_ modeling statement: this is simply the expected value!! That means, after \\(\infty\\) times of re-running the universe starting "yesterday", the new opening price will converge to the last closing price.

Two important conclusions:

1.  If we know the closing price yesterday (it is observed), the price today will be DETERMINED and not!!! a [random variable]({{< relref "KBhrandom_variables.md" >}})
2.  If the closing price yesterday is a [random variable]({{< relref "KBhrandom_variables.md" >}}), the price today will be IN-DETERMINED and also a [random variable]({{< relref "KBhrandom_variables.md" >}})

Therefore, the "randomness is fair", and therefore the "market is not drifting in favor/against you."

The [Martingale Model]({{< relref "KBhmartingale_model.md" >}}) comes from the idea that "true gambling is true equal conditions (money, opponents, bystanders, situations, die, and dice.)" Therefore, any amount of bias towards one direction/party is advantageous for that person.

In fact, it was theorized that an efficient market should follow exactly this behavior.


## changes in history {#changes-in-history}

Of course, the difference between the expression:

\begin{equation}
E\qty [X\_{k}|X\_{k-1}, X\_{k-2},\ldots] = X\_{k-1}
\end{equation}

versus

\begin{equation}
E\qty [X\_{k}|X\_{k-1}] = X\_{k-1}
\end{equation}

is pretty big. The two will only be the same if the markets is assumed to be a [markovian process]({{< relref "KBhmarkovian_process.md" >}}).


## [Martingale]({{< relref "KBhmartingale_model.md" >}}) historical conditioning {#martingale--kbhmartingale-model-dot-md--historical-conditioning}

Ok, if we are told that the process is [Martingale]({{< relref "KBhmartingale_model.md" >}}), but we only have two days ago, what do we have?

i.e. what if we want to know:

\begin{equation}
E\qty [X\_{k} | X\_{k-2}] = ?
\end{equation}

Turns out, there's a small trick you can do. Without even [Martingale]({{< relref "KBhmartingale_model.md" >}}), we can claim that:

\begin{equation}
E\qty [X\_{k} | X\_{k-2}] = \sum\_{x} E\qty [X\_{k} | X\_{k-1}, X\_{k-1} = x] \cdot Pr \qty(X\_{k-1}=x|X\_{k-2})
\end{equation}

That, the price today is just the sum of all possible prices for day \\(k-1\\) we name small \\(x\\) times the probability \\(Pr\\) that it actually happens given the existing \\(k-2\\) observation.

Of course, given the [Martingale Model]({{< relref "KBhmartingale_model.md" >}}) now, given some possible price in day \\(k-1\\) named \\(x\\), price in \\(k\\) is also \\(x\\). Therefore:

\begin{equation}
E[X\_{k}|X\_{k-1},X\_{k-1} = x] =x
\end{equation}

Applying this, then, we have

\begin{equation}
\sum\_{x} E\qty [X\_{k} | X\_{k-1}, X\_{k-1} = x] \cdot Pr \qty(X\_{k-1}=x|X\_{k-2}) = \sum\_{x} x \cdot Pr \qty(X\_{k-1}=x|X\_{k-2})
\end{equation}

The right sum, then, is just the expected value of \\(X\_{k-1}\\) given \\(X\_{k-2}\\)!! Meaning:

\begin{equation}
\sum\_{x} x \cdot Pr \qty(X\_{k-1}=x|X\_{k-2}) = E[X\_{k-1} | X\_{k-2}]
\end{equation}

Now, we are in a [Martingale Model]({{< relref "KBhmartingale_model.md" >}}). Therefore:

\begin{equation}
\sum\_{x} x \cdot Pr \qty(X\_{k-1}=x|X\_{k-2}) = E[X\_{k-1} | X\_{k-2}] = X\_{k-2}
\end{equation}

And so, putting it all together, we have:

\begin{align}
E\qty [X\_{k} | X\_{k-2}] &= \sum\_{x} E\qty [X\_{k} | X\_{k-1}, X\_{k-1} = x] \cdot Pr \qty(X\_{k-1}=x|X\_{k-2})  \\\\
&= \sum\_{x} x \cdot Pr \qty(X\_{k-1}=x|X\_{k-2})  \\\\
&= E[X\_{k-1} | X\_{k-2}]  \\\\
&= X\_{k-2}
\end{align}

Amazing. So [Martingale]({{< relref "KBhmartingale_model.md" >}}) holds over time