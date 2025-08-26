+++
title = "probability"
author = ["Houjun Liu"]
draft = false
+++

[probability]({{< relref "KBhprobability.md" >}}) of an event is the proportion of times the event occurs in many repeated trials. It is  "our belief that an event \\(E\\) occurs".

"the probability of a outcome is a number between 0-1 which highlights how likely the outcome is likely to occur realtive to other outcomes"


## Frequentist Definition of Probability {#frequentist-definition-of-probability}

That is, it is a number between \\(0-1\\). Whereby:

\begin{equation}
P(E) = \lim\_{n \to \infty} \frac{n(E)}{n}
\end{equation}

"frequentist definition of probability"

probability is the ratio between the number of times \\(E\\) occurring \\(n(E)\\) divided by the number of times you did the thing \\(n\\). This system converge because of the [law of large numbers]({{< relref "KBhlaw_of_large_numbers.md" >}}).


## [uncertainty]({{< relref "KBhuncertainty.md" >}}) and [probability]({{< relref "KBhprobability.md" >}}) {#uncertainty--kbhuncertainty-dot-md--and-probability--kbhprobability-dot-md}

Say you are training some kind of model. When it says \\(0.8\\) for motorcycle, its not that there are \\(80\\%\\) chance that there's a motorcycle there. Its that the model is \\(80\\%\\) confident that there's a motorcycle.

****Probability can not only represent the world, but our understanding of the world****


## axiom of probability {#axiom-of-probability}

-   \\(0 \leq P(E) \leq 1\\)
-   \\(P(S) = 1\\), where \\(S\\) is the [sample space]({{< relref "KBhsample_space.md" >}})
-   if \\(E\\) and \\(F\\) are mutually exclusive, \\(P(E) + P(F) = P(E \cup F)\\)

This last axiom can be chained

---

This results in three correlaries:

-   \\(P(E^{C}) = 1- P(E)\\)

Proof:
We know that \\(E^{C}, E\\) are mutually exclusive.

\begin{equation}
P(E^{C} \cup E) = P(E) + P(E^{C})
\end{equation}

Now, recall the fact that something happening OR not happening is \\(1\\).

So we have:

-   \\(P(E \cup F) = P(E) + P(F) - P(E \cap F)\\)
-   if \\(E \subset F\\), \\(P(E) \leq  P(F)\\)


## conditional probability {#conditional-probability}

"What is the new belief that something \\(E\\) happened, conditioned upon the fact that we know that \\(F\\) already happened."

Written as: \\(P(E|F)\\).

Furthermore, we have:

\begin{equation}
P (X, Y) = P(X\mid Y) \cdot P(Y)
\end{equation}

In this case, we call \\(Y\\) the "evidence". this allows us to find "what is the chance of \\(x\\) given \\(y\\)".

We can continue this to develop the [probability chain rule](#conditional-probability):

\begin{equation}
P(A\_1, A\_2 \dots, A\_{n}) = P(A\_{n} \mid A\_1, A\_2 \dots A\_{n-1})P(A\_1, A\_2 \dots A\_{n-1})
\end{equation}

and so:

\begin{equation}
P(E\_1) \cdot P(E\_2 | E\_1) \cdot E(E\_3 | E\_1E\_2) \cdot P(E\_4 | E\_1E\_2E\_3) \cdot \dots \cdot
\end{equation}

and so on.

If you are performing the chain rule on something that's already conditioned:

\begin{equation}
P(X,Y|A)
\end{equation}

you can break it up just remembering that \\(A\\) needs to be preserved as a condition, so:

\begin{equation}
P(X,Y|A) = P(X|Y,A) P(Y|A)
\end{equation}

Now:

\begin{equation}
\sum\_{x}^{} p(x \mid y) = 1
\end{equation}

because this is **still** a probability over \\(x\\).


## law of total probability {#law-of-total-probability}

say you have two variables \\(x, y\\).

"what's the probablity of \\(x\\)"

\begin{equation}
P(x) = \sum\_{Y} P(x,y)
\end{equation}

a.k.a.:

\begin{equation}
p(x) = p(x|y\_1)p(y\_1) + \dots + p(x|y\_{n})y\_{n}
\end{equation}

by applying [conditional probability](#conditional-probability) formula upon each term

This is because:

\begin{align}
p(x) &= p(x|y\_1)p(y\_1) + \dots + p(x|y\_{n})y\_{n}  \\\\
&= p(x, y\_1) + \dots  + p(x, y\_{n})
\end{align}

If its not conditional, it holds too:

\begin{equation}
p(AB^{C}) + p(AB)
\end{equation}


## Bayes rule {#bayes-rule}

See: [Bayes Theorem]({{< relref "KBhbayes_theorem.md" >}})


## independence {#independence}

If \\(X\\) and \\(Y\\) are independent (written as \\(X \perp Y\\)), we know that \\(P(x,y) = P(x)P(y)\\) for all \\(x, y\\).

Formally:

\begin{equation}
P(A) = P(A|B)
\end{equation}

if \\(A\\) and \\(B\\) is [independent](#independence). That is, \\(P(AB) = P(A) \cdot P(B)\\). You can check either of these statements (the latter is usually easier).

[Independence](#independence) is bidirectional. If \\(A\\) is independent of \\(B\\), then \\(B\\) is independent of \\(A\\). To show this, invoke the [Bayes Theorem]({{< relref "KBhbayes_theorem.md" >}}).

This is generalized:

\begin{equation}
P(x\_1, \dots, x\_n) = P(x\_1) \dots p(x\_{n})
\end{equation}

and this tells us that subset of \\(x\_{j}\\) is independent against each other.
