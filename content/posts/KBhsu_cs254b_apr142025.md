+++
title = "SU-CS254B APR142025"
author = ["Houjun Liu"]
draft = false
+++

## Some motivations {#some-motivations}

-   time and space are usually considered as independent resources
-   but now... consider them as joint (dependent) resources!

**question!**: what are simultaneous time _and_ space efficient systems? Our interest: time space trade-offs.


## Time-Space Tradeoffs {#time-space-tradeoffs}

Consider the case that a single TM does something time and space efficiently.

<div class="definition"><span>

\begin{equation}
\text{TISP}\qty(t\qty(n), s \qty(n)) = \qty {L: \exists \text{TM that decides $L$ in time $O(t(n))$, and space $O\qty(s \qty(n))$}}
\end{equation}

</span></div>


### Some theorems {#some-theorems}

<div class="theorem"><span>

No algorithm that solves SAT in \\(O\qty(n)\\) time and \\(O\qty(\log n)\\) space simultaneously. That is, \\(\text{SAT} \not \in \text{TISP}\qty(n, \log n)\\).

</span></div>

We have three competingly high lower bound:

<div class="theorem"><span>

\begin{align}
\text{SAT} \not \in \text{TISP} \qty(n^{\sqrt{2}}, n^{o\qty(1)})
\end{align}

</span></div>

where \\(n^{o\qty(1)} \approx n^{0.00000001}\\). This is followed up by:

<div class="theorem"><span>

\begin{equation}
\text{SAT}\not \in \text{TISP}\qty(n^{\phi = 1.618}, n^{o\qty(1)})
\end{equation}

</span></div>

finally, using computed aided search, we have:

<div class="theorem"><span>

\begin{equation}
\text{SAT}\not \in \text{TISP}\qty(n^{2 \cos \qty(\frac{\pi}{7})}, n^{o\qty(1)})
\end{equation}

</span></div>

In fact, this is optimal. We have a barrier result!

<div class="theorem"><span>

\\(n^{1.8}\\) is optimal among all possible compos of the "ingredients" (TODO define later) we will see.

</span></div>


### SAT is complete for n poly log n {#sat-is-complete-for-n-poly-log-n}

Rather than SAT, we will prove an equivalent statement about:

\begin{equation}
\text{NTIME}\qty(n \text{poly} \log n) \not \subseteq \text{TIMP}\qty(n^{c}, n^{o\qty(1)})
\end{equation}

This is because:

<div class="lemma"><span>

\\(\text{SAT}\\) is complete for \\(\text{NTIME}\qty( n \text{poly} \log n)\\)

</span></div>

The proof for this is essentially just a souped up version of [Cook-Levin Theorem]({{< relref "KBhcook_levin_theorem.md" >}}). To prove this, we need [Quasi-Linear Cook-Levin]({{< relref "KBhcook_levin_theorem.md#quasi-linear-cook-levin" >}}). In fact, we will even prove a harder thing:

<div class="lemma"><span>

\begin{equation}
\text{NTIME}\qty(n) \not \in \text{TISP}\qty(n^{c}, n^{o\qty(1)})
\end{equation}

</span></div>

Let's get started


#### Proof {#proof}

We need two ingredients we will need.

<!--list-separator-->

-  Time hierarchy theorems for \\(\Sigma\_{k}\\) and \\(\pi\_{k}\\)

    This is the same proof as the regular [time hierarchy theorem]({{< relref "KBhtime_complexity.md#time-hierarchy-theorem" >}}).

    <div class="theorem"><span>

    \begin{equation}
    \text{TIME}\qty(o\qty(t\qty(n))) \not \subseteq \Sigma\_{k} \text{TIME}\qty(t\qty(n))
    \end{equation}

    </span></div>

    ditto for \\(\pi\_{k}\\). We are going to assume this for now.

<!--list-separator-->

-  TISP speed-ups by adding quantifiers

    <div class="theorem"><span>

    \begin{equation}
    \text{TISP}\qty(t,s) \subseteq \Sigma\_{2} \text{TIME}\qty(\sqrt{t} \sqrt{s}) \text{ if } s \geq \log n
    \end{equation}

    </span></div>

    <div class="proof"><span>

    Let \\(L \in \text{TISP}\qty(t\qty(n), \sqrt{n})\\), and \\(M\\) be corresponding \\(TM\\).

    The configuration of \\(M\\) on input \\(x\\) at time \\(l\\) will give you everything you need; this tableau includes....

    -   \\(O\qty(s)\\) worktape contents
    -   \\(O\qty(\log s)\\) worktape heads
    -   \\(O\qty(\log n)\\) input tape head
    -   \\(O\qty(1)\\) state

    in total this is going to be \\(O\qty(s)\\).

    Shown: \\(L \in \Sigma\_{2} \text{TIME}\qty( \frac{t}{r} s + \log  \qty(\frac{t}{r})  tr)\\). In particular the thing in the parentheses gives \\(O\qty( \frac{t}{r} s + r )\\).

    </span></div>
