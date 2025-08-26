+++
title = "Time Complexity"
author = ["Houjun Liu"]
draft = false
+++

Time complexity \\(t(n): \mathbb{N} \to  \mathbb{N}\\), and:

\begin{equation}
\text{TIME}\qty(t(n)) = \qty {\text{languages } L \mid\ \exists  \text{TM that decides $L$ in $O(t(n))$ steps} }
\end{equation}

notice! the [Big-oh]({{< relref "KBhamortized_analysis.md" >}}) is backed into the definition. And we write:

\begin{equation}
P = \bigcup\_{c \in \mathbb{N}} \text{TIME}\qty(n^{c})
\end{equation}

we call this "efficient" vs. "feasible".

\begin{equation}
EXP = \bigcup\_{c \in \mathbb{N}} \text{TIME}\qty(2^{n^{c}})
\end{equation}

and adding in [non-determinism]({{< relref "KBhnon_deterministic_computation.md" >}}), we have:

\begin{equation}
\text{NTIME}\qty(t(n)) = \qty {L : \exists\ \text{NTM that decides L in O(t(n)) steps}}
\end{equation}

and so:

\begin{equation}
NP = \bigcup\_{c \in \mathbb{N}} \text{NTIME}\qty(n^{c})
\end{equation}


## [turing machine]({{< relref "KBhturing_machinea.md" >}}) [Time Complexity]({{< relref "KBhtime_complexity.md" >}}) {#turing-machine--kbhturing-machinea-dot-md--time-complexity--kbhtime-complexity-dot-md}

We measure a [turing machine]({{< relref "KBhturing_machinea.md" >}})'s time complexity via number of steps it takes for a [turing machine]({{< relref "KBhturing_machinea.md" >}}) to halt.

Let \\(M\\) be a turing machine that halts on all inputs; we will only consider for now [decidable]({{< relref "KBhturing_machinea.md#decidable" >}}) languages. We define:

the **running time** or [Time Complexity]({{< relref "KBhtime_complexity.md" >}}) of the machine \\(M\\) is a function \\(T : \mathbb{N} \to \mathbb{N}\\), such that \\(T(n)\\) is the maximum number of steps taken by \\(M\\) over all inputs of length \\(n\\) (the "worst case complexity").


### Time-Bounded Complexity {#time-bounded-complexity}

Let us define:

\begin{equation}
\text{TIME}\qty(t(n)) = \qty {L' \mid \text{there's a TM $M$ with time complexity $O(t(n))$ so that $L' = L(M)$}}
\end{equation}

that is, \\(\text{TIME}(T(n))\\) a set of languages decided by _some_ TM with \\(O(t(n))\\) running time.


### Polynomial Time {#polynomial-time}

\begin{equation}
P = \bigcup\_{k \in N} \text{TIME}\qty(n^{k})
\end{equation}

"efficient"; and "robust": that is, [multi-tape TM theorem](#multi-tape-tm-theorem) (number of tapes, etc.) and [time hierarchy theorem](#time-hierarchy-theorem)


### [Extended Church-Turing Thesis]({{< relref "KBhextended_church_turing_thesis.md" >}}) {#extended-church-turing-thesis--kbhextended-church-turing-thesis-dot-md}

see [Extended Church-Turing Thesis]({{< relref "KBhextended_church_turing_thesis.md" >}})


### one-tape TM cannot decide some language \\(A\\) in less than \\(O(n \log n)\\) time {#one-tape-tm-cannot-decide-some-language-a-in-less-than-o--n-log-n--time}

For any

\begin{equation}
f(n) = O\qty( \frac{n \log n}{\alpha \qty (n)})
\end{equation}

where \\(\alpha(n)\\) is unbounded, we have that \\(TIME(f(n))\\) contains only [regular language]({{< relref "KBhregular_language.md" >}})s.


### two tapes could be more powerful than one tape {#two-tapes-could-be-more-powerful-than-one-tape}

...because you can do things in parallel (i.e. different models of computation can yield different run times, even if they are both [computable function]({{< relref "KBhmapping_reduction.md#computable-function" >}}))

in fact, something like \\(B = \qty { ww \mid w \in \qty {0,1}^{\*}}\\) has a quadratic gap


#### multi-tape TM theorem {#multi-tape-tm-theorem}

Let \\(t: \mathbb{N} \to  \mathbb{N}\\), which satisfies \\(t(n) \geq n\\), for all \\(n\\). Then, every \\(t(n)\\) time multi-tape TM has an equivalent \\(O\qty (t(n)^{2})\\) time one-tape TM.

Its transition function is:

\begin{equation}
\delta : Q \times \Gamma^{k} \to Q \times \Gamma^{k-1} \times \qty {L, R, S}^{k}
\end{equation}

....because you can just append the tapes in the style of multi-tape simulation by one tape and then just move across all of \\(n\\) each time to increment the next tape.

**correlary**: suppose language \\(A\\) can be decided by a multi-tape Turing Machine in \\(p(n)\\) steps for some polynomial \\(p\\), then \\(A\\) can be decided by a one-tape TM in \\(q(n)\\) steps, by some polynomial \\(q\\) (because we just squared in the example above).


### efficient universal Turing Machine {#efficient-universal-turing-machine}

there is a one-tape Turing Machine \\(U\\) which takes as input....

-   the code of an arbitrary Turing Machine \\(M\\)
-   an input string \\(w\\)
-   and a string of \\(t\\) 1s which represents the runtime where \\(t > |w|\\)

such that \\(U\qty (M,w, 1^{t})\\) halts in \\(O\qty (|M|^{2} t^{2})\\) steps and \\(U\\) accepts \\(\qty (M, w, 1^{t}) \Leftrightarrow M\\)  accepts \\(w\\) in \\(t\\) steps.

That is.... the universal Turning machine will **not** run forever; its a clock that goes to a certain amount of steps and gives up.

The idea to make this is to make a multi-tape TM \\(U'\\) that does the above, and run the multi-tape reduction.


#### time hierarchy theorem {#time-hierarchy-theorem}

"if you get more time to compute then you can solve strictly more problems"

254:

If \\(t(n), T(n)\\) are such that \\(t(n) \geq n\\) where \\(T(n) = \omega \qty(t(n) \log\qty(t(n)))\\), then \\(\text{TIME}\qty(t(n)) \subset \text{TIME} \qty(T(n))\\).

---

154:

For all reasonable ("constructible") \\(f,g: \mathbb{N} \to  \mathbb{N}\\) where for all \\(n\\), \\(g(n) > n^{2} f(n)^{2}\\), then \\(\text{TIME}(f(n)) \subset \text{TIME}(g(n))\\) strictly contain.

**proof idea**: [Diagonalization Arguments]({{< relref "KBhthere_are_non_recognizable_languages.md#russell-s-paradox" >}}) with a clock; make a Turing machine \\(N\\) on input \\(M\\); simulate \\(M\\) on input \\(M\\) for \\(f(|M|)\\) steps then flip the answer.

---

Proof:

let us define some machine \\(N(M)\\) which computes in \\(t = f(|M|)\\). Run \\(U\qty (M, M, 1^{t})\\), and output the opposite answer.

Assume for contradiction \\(L(N)\\) has time complexity \\(f(n)\\). By assumption, \\(N(N)\\) runs in \\(f(|N|)\\) time and outputs the opposite answer as \\(U\qty (N, N, 1^{f\qty (|N|)})\\). This is contradiction because \\(N(N)\\) outputting true means \\(U(N, N)\\) outputs false, etc. Tish is a contradiction.

This means that \\(L(N)\\) does not have time complexity \\(f(n)\\).

Recall however \\(U\qty (N, N, 1^{f\qty (|N|)})\\) halts in \\(O\qty (|M|^{2} t^{2})\\) steps, so let's set \\(g(|M|) > |M|^{2} f(|M|)^{2}\\) for all \\(M\\).

(This also holds for multiple Turing Machines).

---

**correlary**

\begin{equation}
\text{TIME}\qty(n) \subset \text{TIME}\qty(n^{2}) \subset \dots
\end{equation}

there are an infinite hierarchy of increasingly time-consuming problems


### example {#example}


#### same number {#same-number}

\begin{equation}
A = \qty {0^{k} 1^{k} \mid k \geq 0}
\end{equation}

for a [turing machine]({{< relref "KBhturing_machinea.md" >}}) on \\(A\\), on input of length \\(n\\), we....

1.  first pass: scan the tape and reject if the string is not of the form \\(0^{i}1^{j}\\)
2.  repeat if both $0$s and $1$s are an the tape
    1.  scan across the tape, crossing off a single \\(0\\) and a single \\(1\\)
3.  if \\(0\\) remain after all \\(1\\) crossed off, then reject. otherwise, accept

This has complexity of...

1.  single scan: \\(O(n)\\)
2.  crossing off left right: \\(O\qty (n^{2})\\)
3.  verifying: \\(O(n)\\)


#### actually, though, we can do this in \\(O(n \log n)\\) {#actually-though-we-can-do-this-in-o--n-log-n}

-   if \\(w\\) is not in the right shape \\(0^{\*}1^{\*}\\), reject
-   repeat until all bits of \\(w\\) are crossed out
    -   if parity (odd/evenness) of \\(0\\) is not parity of \\(1\\), reject
    -   cross out every other \\(0\\), cross out ever other \\(1\\)
-   if all bits crossed out, accept

There will be \\(\log n\\) crossings-out at most (since each divides by \\(2\\)), and each of such crossings-out, will check linearly.
