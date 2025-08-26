+++
title = "degrees of belief"
author = ["Houjun Liu"]
draft = false
+++

[degrees of belief]({{< relref "KBhprobability_theory.md" >}}) help us quantify how much we believe some event \\(A\\) is more/less plausible than some event \\(B\\).

Let us take two statements:

-   \\(A\\) Taylor gets Nobel Prize in Literature
-   \\(B\\) Han shot first

For instance, if we want to express "I think its more likely that Taylor gets the prize than Han shot first":

\begin{equation}
A \succ B
\end{equation}


## axioms of [degrees of belief]({{< relref "KBhprobability_theory.md" >}}) {#axioms-of-degrees-of-belief--kbhprobability-theory-dot-md}


### universal comparability {#universal-comparability}

for two statements \\(A, B\\), only three states can exist:

-   \\(A \succ B\\) (A more likely)
-   \\(A \prec B\\) (B more likely)
-   \\(A \sim B\\) (equally likely)


### transitivity {#transitivity}

if \\(A \succeq B\\) and \\(B \succeq C\\), then \\(A \succeq C\\)


### language of probability {#language-of-probability}

using this framework, we can then describe the events in terms of [probability]({{< relref "KBhprobability.md" >}})

-   \\(P(A) > P(B) \Leftrightarrow A \succ B\\)
-   \\(P(A) = P(B) \Leftrightarrow A \sim B\\)

See also [axiom of probability]({{< relref "KBhprobability.md#axiom-of-probability" >}})
