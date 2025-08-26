+++
title = "Computational Task"
author = ["Houjun Liu"]
draft = false
+++

A [Computational Task]({{< relref "KBhcomputational_task.md" >}}):


## Decision problems {#decision-problems}

1.  a decision problem: \\(\Sigma^{\*} \to  \qty {\text{no}, \text{yes}}\\)
2.  we often associate the "yes" instances of this decision problem as a \\(L \subseteq \Sigma^{\*}\\) [language]({{< relref "KBhalphabet.md" >}})

"Given boolean formula \\(\varphi\\), accept IFF \\(\varphi\\) is SAT"


## Function problems {#function-problems}

Give me a particular case of:

\begin{equation}
f(w) : \Sigma^{\*} \to  \Sigma^{\*}
\end{equation}

note that there is a unique answer.

"Give a formula \\(\varphi\\), output lex first satisfying assignments/number of satisfying assignments"


## Search problem {#search-problem}

Given some input \\(w \in \Sigma^{\*}\\), return me zero, one, or many possible answers

"Given boolean formula \\(\varphi\\), give a satisfying assignment if there is one, otherwise output \\(\bot\\)"
