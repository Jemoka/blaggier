+++
title = "Kolomogorov Complexity"
author = ["Houjun Liu"]
draft = false
+++

[Kolomogorov Complexity]({{< relref "KBhkolomogorov_complexity.md" >}}) is a "universal theory of information". "how much information is contained in a [string]({{< relref "KBhalphabet.md" >}})"

The [Kolomogorov Complexity]({{< relref "KBhkolomogorov_complexity.md" >}}) of a string \\(x\\) is the length of the [shortest description](#shortest-description), \\(|d(x)|\\)


## information as description {#information-as-description}

****Key idea****: the more we can compress a [string]({{< relref "KBhalphabet.md" >}}), the more [information]({{< relref "KBhsu_engr76_apr042024.md#information" >}}) it contains. The amount of information in a string \\(x\\) is the length of the shortest description of \\(x\\).


### aside {#aside}

For some \\((M,w)\\), we are about to write short strings of it; how do we encode it?

Well, we need some encoding such that \\(Z = (M,w)\\) iff \\(\pi\_{1}(Z) = M\\), \\(\pi\_{2}(Z) = w\\).

Let us define:

\begin{equation}
(M,w) := 0^{|M|} 1 M w
\end{equation}

"give the length of \\(M\\) and so then we can break \\(Mw\\)".


### description {#description}

A [description](#description) of \\(x\\) is a string \\(M, w\\) such that \\(M\\) on the input \\(w\\) halts with only \\(x\\) in its tape


### shortest description {#shortest-description}

shortest [description](#description) of \\(x\\), written as \\(d(x)\\), is the lexicographically shortest string \\(M, w\\) such that \\(M(w)\\) halts with only \\(x\\) on its tape.


## additional information {#additional-information}


### unprovable komogorov complexity {#unprovable-komogorov-complexity}

For every interesting consistent \\(\mathcal{F}\\), there is a \\(t\\) such that for all \\(x\\), \\(K(x) > t\\) is unprovable in \\(\mathcal{F}\\).

To do this, let's define an \\(M\\) that treats all of its input as a integer, whereby:

\\(M(k)\\) searches over all strings \\(x\\) and proofs \\(P\\) for a proof \\(P\\) in \\(\mathcal{F}\\) that \\(K(x) >k\\); output \\(x\\) if found. If \\(M(k)\\) halts, it must print \\(x'\\); whereby \\(K(x') \leq  c + \log k\\). However, \\(k \leq c + \log k\\) is only true for small \\(k\\); choose \\(t\\) for which this is _not_ the case. Notice this makes \\(K(x) > t c + \log k\\), meaning \\(M\\) can't halt.

Therefore, \\(K(x) > t\\) has no proof in this language.


#### random unprovable truths {#random-unprovable-truths}

For every [interesting]({{< relref "KBhmathematics.md#interesting" >}}) [consistent]({{< relref "KBhmathematics.md#consistent" >}}) \\(\mathcal{F}\\), there is a \\(t\\) such that for all \\(x\\), we have \\(K(x) > t\\) is unprovable in \\(\mathcal{F}\\).

Yet, for randomly chosen \\(x\\) of length \\(t + 100\\), we have that \\(K(x) > t\\) is true with probability at least \\(1 - \frac{1}{2^{100}}\\). So, we have thees exceedingly likely to be true statements which are unprovable.


### determining compressibility {#determining-compressibility}

for some

\begin{equation}
COMPRESS = \qty {(x,c) | K(x) \leq c}
\end{equation}

is actually undecidable.

Proof idea: if decidable, we could just print the first incompressible string of length \\(n\\); but then; that actually describes our supposedly "incompressible" string through our constant machine size and \\(n\\) in binary; and then we reach contradiction.


#### Atm is ****STILL**** not decidable {#atm-is-still-not-decidable}

because \\(COMPRESS\\) is reducible to ATM.

Define \\(M\_{x,c}\\): on input \\(w\\), for all pairs \\((M', w')\\) with \\(|(M', w') |\leq c\\), simulate \\(M'\\) on \\(w'\\) in parallel; if some \\(M'\\) halts and prints \\(x\\), accept. Meaning, \\(K(x) \leq c \Leftrightarrow M\_{x,c}\\) accepts \\(\varepsilon\\).

Meaning this reduces to the set \\(A\_{TM}\\).


### interpreter {#interpreter}

an **interpreter** is a semi-computable function:

\begin{equation}
p: \Sigma^{\*} \to  \Sigma^{\*}
\end{equation}

which takes programs as input, and _may_ print their outputs. In particular let \\(x \in \qty {0,1}^{\*}\\), the shortest description of \\(x\\) under \\(p\\), called \\(d\_{p}(x)\\), is the lexicographically shortest string \\(w\\) for which \\(p(w)=x\\)

Let \\(K\_{p}\\) complexity of \\(x\\) be \\(K\_{p}(x) := |d\_{p}(x)|\\)

Theorem: for interpreter \\(p\\), there is a fixed \\(c\\) so that for all \\(x \in \qty {0,1}^{\*}\\), there is \\(K(x) \leq K\_{p}(x) + c\\)

Proof:

let's define \\(M(w)\\) for which on \\(w\\), we simulate \\(p(w)\\) and write its outputs to the tape. Meaning, \\((M, d\_{p}(x))\\) is a [description](#description) of \\(x\\). Notice that the \\(K(x) \leq  2|M|+ K\_{p}(X) + 1 \leq  c + K\_{p}(x)\\).


### incompressible strings {#incompressible-strings}

For every \\(n\\), there is as string \\(x \in \qty {0,1}^{n}\\) such that \\(K(x) \geq n\\). "there are incompressible strings of every length".

Number of binary strings of length \\(n\\) is \\(2^{n}\\), yet the number of descriptions that could result in \\(K(x) < n\\) is the number of descriptions of length \\(< n\\)  which is bounded by the number of binary strings \\(< n\\) meaning \\(2^{n-1}\\); there are therefore less "sufficiently-short" descriptions than strings we want to describe; so there's at least one \\(n\\) bit string on \\(x\\) that doesn't have a description \\(<n\\)


### random strings is incompressible {#random-strings-is-incompressible}

the probably of a random string having [Kolomogorov Complexity]({{< relref "KBhkolomogorov_complexity.md" >}}) is lower-bounded:

for all \\(n\\) and \\(c > 1\\), we have:

\begin{equation}
P\_{x \in \qty {0,1}^{n}} \qty[K(x) \geq n-c] \geq  1- \frac{1}{2^{c}}
\end{equation}

proof uses the same thing as [incompressible strings](#incompressible-strings); the number of descriptions of length \\(<n-c\\) is \\(2^{n-c}-1\\); so the probability that a random string satisfies this is at most \\(\frac{(2^{n-c}-1)}{2^{n}} < \frac{1}{2^{c}}\\)


### simple upper bound {#simple-upper-bound}

There's a fixed \\(c\\) so that all \\(x\\) in \\(\qty {0,1}^{\*}\\), there exists:

\begin{equation}
K(x) \leq |x|+c
\end{equation}

"the amount of information in \\(x\\) isn't much more than \\(|x|\\)". Because we can always define a [turing machine]({{< relref "KBhturing_machinea.md" >}}), for which "on input \\(w\\), halt". Meaning, for any string \\(x\\), \\(M(x)\\) halts with \\(x\\) on its tape (i.e. immediate).

So, \\((M,x)\\) is a [description](#description) of \\(x\\), and by the paring given above, we have \\(2|M| + |x| + 1 \leq |x|+c\\) .


### repetitive strings {#repetitive-strings}

there's a fixed constant \\(c\\) so that for all \\(n\geq 2\\), and all \\(x \in \qty {0,1}^{\*}\\), we have \\(K(x^{n}) \leq K(x) + c \log n\\).

Because we can define the Turing machine \\(N=(n, (M,w))\\)  for which we write \\(x = M(w)\\) and "print \\(x\\) for \\(n\\) times"

So, for \\(K(x^{n}) \leq K((N, (n, (M,w))) \leq 2|N| + d \log n + K(x) \leq c \log n + K(x)\\)


### Recall [Church-Turing thesis]({{< relref "KBhchurch_turing_thesis.md" >}}) {#recall-church-turing-thesis--kbhchurch-turing-thesis-dot-md}

see [Church-Turing thesis]({{< relref "KBhchurch_turing_thesis.md" >}})

hypothesis: "Everyone's intuitive notion of algorithms is a Turing-machine"
