+++
title = "Space Complexity"
author = ["Houjun Liu"]
draft = false
+++

We define [Space Complexity]({{< relref "KBhspace_complexity.md" >}}) as the **largest tape index reached** during computation.

Let \\(M\\) be a deterministic Turing Machine; the space complexity of \\(M\\) is the function \\(S: \mathbb{N} \to  \mathbb{N}\\), where \\(S(n)\\) is the largest number of **work tape cells** accessed by \\(M\\) on \\(X\\); we will consider the **input tape as read-only** but also it is free (because if we didn't do this, our space complexity would be trivially \\(\geq n\\) and that's kinda lame).

\begin{equation}
\text{SPACE}\qty(S(n)) = \qty {A \mid A \text{ is decidable by TM with $O(S(n))$ space}}
\end{equation}

these classes involve computations with bounded memory


## constituents {#constituents}


## requirements {#requirements}


## additional information {#additional-information}


### L {#l}

See [Space Class L]({{< relref "KBhspace_class_l.md" >}})


### upper-bounding space complexity with time complexity {#upper-bounding-space-complexity-with-time-complexity}

\begin{equation}
\text{TIME}\qty(t\qty(n)) \subseteq \text{SPACE}\qty(t\qty(n))
\end{equation}

If a TM runs in time \\(\leq t\\), it can only touch \\(\leq t\\) cells.

-   \\(P \subseteq \text{PSPACE}\\)
-   \\(\text{NP} \subseteq \text{PSPACE}\\)


### upper-bounding time complexity with space complexity {#upper-bounding-time-complexity-with-space-complexity}

\begin{equation}
\text{SPACE} \qty(s \qty(n)) \subseteq \text{TIME}\qty(2^{O\qty(s\qty(n))})
\end{equation}

For \\(L \in \text{SPACE}\qty(S(n))\\), what is its upper-bounded time complexity? Consider the number of configurations of our system:

-   work tape contents (content of each tape slot): \\(2^{O\qty(\sqrt{n})}\\)
-   current state: \\(O(1)\\)
-   worktape head: \\(O\qty(s\qty(n))\\)
-   input tape haed position: \\(O\qty(n)\\)

assuming \\(S\qty(n) \geq \log n\\) (which gives us \\(O \qty(n) \cdot 2^{O(s\qty({n}))} = 2^{O\qty(s \qty(n))}\\)), we have that there is only \\(2^{O \qty(s \qty(n))}\\) configurations.

**Observe**: since \\(M\\) never loops, no [configuration]({{< relref "KBhturing_machinea.md#configuration" >}}) appears twice. Hence, the runtime of \\(m\\) must be smaller than the number of distinct configurations.


#### PSPACE {#pspace}

let

\begin{equation}
\text{PSPACE} = \bigcup\_{k \in \mathbb{N}} \text{SPACE} \qty(n^{k})
\end{equation}

and recall

\begin{equation}
\text{EXPTIME} = \bigcup\_{k \in \mathbb{N}} \text{TIME} \qty(2^{n^{k}})
\end{equation}

then we can write:

\begin{equation}
\text{PSPACE} \subseteq \text{EXPTIME}
\end{equation}

because of the upper-bounding enlargement above


#### P, NP is in PSPACE {#p-np-is-in-pspace}

\begin{equation}
P \subseteq \text{PSPACE}
\end{equation}

this is because the space is bounded by time---because if all you did was to go right, you will still do so by polynomial space

\begin{equation}
NP \subseteq \text{PSPACE}
\end{equation}

because you can use the same space to enumerate each of your choices

\begin{equation}
NP^{NP} \subseteq \text{PSPACE}
\end{equation}

Because the algorithm only takes \\(PSPACE\\) (since its \\(NP\\)), and the Oracle can be simulated out in \\(PSPACE\\)


#### hierarchy of space and time {#hierarchy-of-space-and-time}

\begin{equation}
\text{P} \subseteq \text{NP} \subseteq \text{PSPACE} \subseteq \text{EXPTIME}
\end{equation}

Notice that \\(P \neq \text{EXPTIME}\\), because of the [time hierarchy theorem]({{< relref "KBhtime_complexity.md#time-hierarchy-theorem" >}})---more time buys you more things to solve.


### space hierarchy theorem {#space-hierarchy-theorem}

\begin{equation}
\text{SPACE}\qty(s(n)) \not \subseteq  \text{SPACE}\qty(S(n))
\end{equation}

if \\(\frac{s(n)}{S(n)} \to 0\\) (i.e. \\(S(n)\\) is asymptotically larger than \\(s(n)\\))

argument sketch: nationalization; make a machine \\(M\\) which uses \\(S(n)\\) and does the opposite of every \\(s(n)\\) space machines on at least one input.

Note that \\(L(M)\\) is in \\(\text{SPACE}\qty(S(n))\\) but not \\(\text{SPACE}\qty(s(n))\\), because if it was it would've then had a contradiction


### nondeterministic space classes {#nondeterministic-space-classes}

Let \\(N\\) be a nondeterministic Turing machine which halts on all inputs in all possible branches. The space complexity of \\(N\\) is function \\(f\\) where \\(f(n)\\) is the **furthest** tape cell reached by all computation paths, over all inputs of length \\(n\\).

\begin{equation}
\text{NSPACE}\qty(s(n)) = \qty {L \mid \text{all things decided using $O(s(n))$ space complexity with a non-deterministic TM}}
\end{equation}


### examples {#examples}

\begin{equation}
\text{3SAT} \in \text{SPACE}\qty(n)
\end{equation}

Because we can try all assignments of \\(n\\) variables by length \\(n\\), this is in exponential time, but trying each only requires you to write down assignments of each which is in \\(O(n)\\).

\begin{equation}
\text{NTIME}\qty(t(n)) \in \text{SPACE}(t(n))
\end{equation}

because the witness is at most \\(t(n)\\) (or at least you can truncate it as such since checking it only takes \\(t(n)\\) steps), and you need at most some factor against \\(t(n)\\) to check.


### space complexity is tricky... {#space-complexity-is-tricky-dot-dot-dot}

We cannot reuse time, but we **can** reuse space. There are many, many counter-intuitive results.

Also, there are many counter-intuitive results: we **will** resolve space analogues \\(\text{P} =^{?} \text{NP}\\) and \\(\text{NP} =^{?} \text{coNP}\\) (in fact, in the opposite direction as expected!)
