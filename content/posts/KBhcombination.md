+++
title = "combination"
author = ["Houjun Liu"]
draft = false
+++

A [combination]({{< relref "KBhcombination.md" >}}) is a choice task which shows that order does not matter.

\begin{equation}
\mqty(n \\\k) =  \frac{n!}{k!(n-k)!} = n! \times 1 \times \frac{1}{k!} \times \frac{1}{(n-k)!}
\end{equation}

This could be shown as follows: we first [permute]({{< relref "KBhpermutation.md" >}}) the group of people \\(n\\) (\\(n!\\)); take the first \\(k\\) of them (only 1 chose); we remove the overcounted order from the \\(k\\) subset chosen (\\(\frac{1}{k!}\\)),; we remove the overcounted order from the \\(n-k\\) subset (\\(\frac{1}{(n-k)!}\\)).

There are many ways of making this happen in code:

```python
n_choose_k = math.factorial(n) / (math.factorial(k) * math.factorial(n-k))
n_choose_k = math.comb(n,k)
n_choose_k = itertools.combinations(range(n), k)
```
