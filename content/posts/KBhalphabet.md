+++
title = "alphabet"
author = ["Houjun Liu"]
draft = false
+++

see also in programming [string (C)]({{< relref "KBhstring.md" >}})

-   an [alphabet]({{< relref "KBhalphabet.md" >}}) \\(\Sigma\\) is a finite set
-   a finite-sequence of elements in \\(\Sigma\\) is called a [string]({{< relref "KBhalphabet.md" >}})
-   the set of all [string]({{< relref "KBhalphabet.md" >}})s in \\(\Sigma\\) is called \\(\Sigma^{\*}\\), which includes the empty string
-   for a particular string \\(x\\), the length of it is \\(|x|\\)
-   the [string]({{< relref "KBhalphabet.md" >}}) of length zero is called \\(\varepsilon\\)
-   a [language]({{< relref "KBhalphabet.md" >}}) is a subset of \\(\Sigma^{\*}\\), meaning its a set of [string]({{< relref "KBhalphabet.md" >}})s

Omer seems to call [string]({{< relref "KBhalphabet.md" >}})s "words" sometimes.


## languages are boolean function over strings {#languages-are-boolean-function-over-strings}

For every language \\(L\\) over \\(\Sigma\\) corresponds to a unique function \\(f: \Sigma^{\*} \to  \\{0,1\\}\\), whereby if \\(f(x) = 1\\), then \\(x \in L\\); otherwise, if \\(f(x) = 0\\), \\(x \not \in L\\).
