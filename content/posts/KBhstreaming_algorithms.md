+++
title = "Streaming Algorithm"
author = ["Houjun Liu"]
draft = false
+++

[Streaming Algorithms]({{< relref "KBhstreaming_algorithms.md" >}}) are computation that grow with the size of the input at a "small"(?) rate. The memory of these systems is not large---they grow roughly logarithmically or poly-logorithmically against the size of the system.

Every so often as we process our system, we have to output a symbol that tells us about the stream we saw so far.


## streaming vs FA {#streaming-vs-fa}

[Streaming Algorithms]({{< relref "KBhstreaming_algorithms.md" >}}) is a superset of [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}})s: things that [Streaming Algorithms]({{< relref "KBhstreaming_algorithms.md" >}}) can't do can't also be done with [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}})s. Their memory doesn't grow too large against the sizes of strings.


## [communication]({{< relref "KBhsu_engr76_may072024.md#communication" >}}) {#communication--kbhsu-engr76-may072024-dot-md}

we lastly consider [communication]({{< relref "KBhsu_engr76_may072024.md#communication" >}}), as a limited-resource thing that [Streaming Algorithms]({{< relref "KBhstreaming_algorithms.md" >}}) can solve. we also consider impossibility results from [communication]({{< relref "KBhsu_engr76_may072024.md#communication" >}}) to give us impossibilities with [Streaming Algorithms]({{< relref "KBhstreaming_algorithms.md" >}}).


## examples {#examples}


### ones vs zeros {#ones-vs-zeros}

a streaming algorithm to measure if a [language]({{< relref "KBhalphabet.md" >}}) has more \\(1\\) than \\(0\\).

\begin{equation}
L = \qty {x \mid x\text{ has more 1s than 0s}}
\end{equation}

we can do this by tracking \\(B\\) a majority bit (currently what's winning), and \\(C\\) how many more times that we saw \\(B\\) than \\(\neg B\\).

(we do this instead of two counters because storage efficiency).

Note that for strings of length \\(n\\), you need at most \\((1+\log\_{2}n)\\) bits of space to store counters \\(b\\) (which just flips) and \\(c\\) (because the counter would basically need to store, at most, the entire string in terms of all ones into the counter, which is \\(\log n\\).)


#### memory complexity of ones vs zeros {#memory-complexity-of-ones-vs-zeros}

every streaming algorithm for \\(L\\) (above) needs \\((\log\_{2}n)-1\\) bits of space.

WLO(most)G let \\(n\\) be oven, and \\(L\_{n} = \qty {0,1}^{n} \cap L\\). We will show a set \\(S\_{n}\\) such that each pair in \\(S\_{n}\\) is distinguishable in \\(L\_{n}\\) with length \\(\frac{n}{2}+1\\). Meaning for this language to be regular it has to have that many equivalence classes---and in particular every streaming algorithm on \\(L\\) needs at least \\((\log n) - 1\\) bits of memory.

---

Let \\(S\_{n} = \qty {0^{\frac{n}{2} -i} 1^{i} \mid i = 0, \dots, \frac{n}{2}}\\).

Select two strings from \\(S\\), we see that \\(x=0^{\frac{n}{2}-k}1^{k}\\) and \\(y = 0^{\frac{n}{2}-j}1^{j}\\) be from \\(S\_{n}\\), with \\(k > j\\). The distinguishing string here is \\(z = 0^{k-1}1^{\frac{n}{2}-(k-1)}\\) (through noticing the fact that \\(k>j\\)). Therefore, \\(x\\) and \\(y\\) are in different equivalence classes.

Hence, at least \\(| S\_{n}|\\)


### frequent items {#frequent-items}

given a count \\(k\\) and a string \\(x = x\_1 ... x\_{n} \in \Sigma^{n}\\), we want the set \\(S = \qty {\sigma \in \Sigma  \mid \sigma \text{ occurs } > \frac{n}{k}\text{ times in } x}\\).

We will be able to do this in a streaming algorithm in \\(O \qty(k \qty(\log |\Sigma| + \log n))\\) space (this is actually quite cool, because we somehow are about to not keep track of every symbol, instead just tracking \\(\log (\Sigma)\\)  of them instead.

---

-   Initialize a set \\(T \subseteq \Sigma \times \mathbb{N}\\). It contains a symbol and a counter.

-theorem Read a symbol \\(\sigma\\)

-   if \\((\sigma, m) \in T\\), then increment: \\((\sigma, m) \to (\sigma, m+1)\\) (remove and add)
-   else, if \\(|T| < k-1\\), then \\(T = T+ \qty {(\sigma, 1)}\\)
-   else, for all \\((\sigma', m') \in T\\), we decrement them all
    -   \\((\sigma', m') \to (\sigma', m'-1)\\)
    -   if \\(m' = 0\\), then we remove the pair \\((\sigma', m')\\) from \\(T\\)

notice that since each increase round increase results in \\(1\\) counters, but each decrease round decreases results in \\(k\\) counters. This means that there is at most \\(\frac{n}{k}\\) decrease rounds (because each round decreases \\(k\\) counters, by the \\(k\\) th decreasing round you have decreased all \\(n\\) of your counters.)

So, for a given symbol, it will stay in the list if its count is non-zero, meaning its occurrence count should be at least \\(\frac{n}{k}\\) (otherwise it won't stay in the list).

Finally, in a second pass, we solve this actual problem by counting all symbols in $T$---allowing us to have bounded memory. At the end, we tally and filter the counts as needed to output the symbols that output \\(\frac{n}{k}\\) times.


### number of distinct elements {#number-of-distinct-elements}

We have a stream of elements \\(x \in \qty {0,1, \dots 2^{k}}^{\*}\\), and in particular \\(2^{k} > |x|^{2}\\).  We want to know the number of distinct elements appearing in $x$---call that DE. There's a trivial solution is in \\(O(kn)\\) space (we can just remember the string, where each number is encoded in \\(k\\) bits).

---

Theorem: we can't do much better than that; the actual space requirement is $&Omega;(kn)$---\\(kn\\) up to a constant.

Let us define \\(x,y \in \Sigma^{\*}\\) as DE _distinguishable_ if there are some string \\(z \in \Sigma^{ \*}\\) such that \\(xz\\) and \\(yz\\) contain different numbers of distinct elements.

So, let \\(S \in \Sigma^{\*}\\) be such that every pair in \\(S\\) is DE-distinguishable; then, every streaming algorithm in DE needs \\(\geq \qty(\log\_{2}|S|)\\) bits of space (because we basically need to store which of those equivalence classes we have as an ID. (proof: pigeonhole, if we don't have enough space, we have two distinguishable strings for which our streaming algorithm will not be able to tell the difference).

For subset of symbols \\(T \subseteq \Sigma\\) of size \\(\frac{n}{2}\\); we define \\(x\_{T}\\) to be any concatenation of strings in \\(T\\). We can create this set \\(S\\) filled with such \\(x\_{T}\\) following the following rules:

1.  we claim that for \\(T\\) and \\(T'\\) being distinct (not necessarily disjoint), \\(x\_{T}\\) and \\(x\_{T'}\\) is distinguishable.
2.  Notice: \\(x\_{T}x\_{T}\\) contains \\(\frac{n}{2}\\) distinct elements, yet \\(x\_{T'}x\_{T}\\) contains more than \\(\frac{n}{2}\\) distinct elements.

There are \\(2^{\Omega(kn)}\\) such distinct subsets as long as where \\(2^{k} > n^{2}\\).


### number of distinct elements {#number-of-distinct-elements}

Let's now rephrase the number of distinct elements problem, but now into a randomized streaming algorithm.

There's a randomized streaming algorithm which approximates true DE up to \\(0.1\\%\\) error, using \\(O(k+\log n)\\) space.

Assuming the choice of strings in the vocabulary is uniform, by keeping track of the minimial element, we can infer the size of the vocabulary (because we think the minimal element times the number of samples is the total amount of symbols assuming uniform distribution).

Even if we didn't have a uniform distribution of symbols, we can force one by applying a random permutation \\(h\\) over \\(\qty{0,1, ..., 2^{k}}\\) and for each character we just randomly map it somewhere using it in the permutation. Thereby, as long as we draw the random names uniformly, we essentially are able to use the same minimal sampling trick from above.

To get a good estimate, we then choose a few of those \\(h\\) and run the algorithm.


### streaming vs DFA {#streaming-vs-dfa}

1.  streaming algorithms can output more than one bit
2.  and the memory or space of a streaming algorithm can slowly increase =&gt; and in particular it can recognize some irregular languages
3.  you could sometimes allow multiple passes over the data


#### a DFA is a streaming algorithm {#a-dfa-is-a-streaming-algorithm}

Suppose \\(L\\) can be recognized by a DFA \\(M\\) with \\(\leq 2^{p}\\) states. Then, \\(L\\) is computable by a streaming algorithm \\(A\\) using \\(\leq p\\) bits of space.

We do this by literally tracking what state we are at using our \\(p\\) bits of space; we binarize the state ID, and then just apply the transition function and update the stored state ID.

-   **initialize**: encode start state of \\(M\\) in memory
-   **each symbol**: use transition function, update \\(M\\) in memory
-   **on end**: output accept if current state \\(M\\) is a final state, reject otherwise


#### a streaming algorithm can be a DFA given bounded length {#a-streaming-algorithm-can-be-a-dfa-given-bounded-length}

Suppose \\(L \in \Sigma^{\*}\\); let us define a \\(L\_{n} = \qty {x \in L \mid |x | =  n}\\) and \\(L\_{\leq n} = \qty {x \in L \mid |x| \leq n}\\).

Suppose \\(L\\) is computable by a streaming algorithm \\(A\\) using \\(f(n)\\) bits of space for all strings up to \\(n\\), then there exists for all \\(n\\) a particular DFA with \\(\leq 2^{n}\\) states such that \\(L\_{\leq n} = L(M)\_{\leq n}\\).

Note that since \\(A\\) has \\(n\\) bits of memory, there is at most \\(2^{n}\\) configurations of \\(A\\)'s memory. The transition function, therefore, simply has to mimic how \\(A\\) updates its memory.
