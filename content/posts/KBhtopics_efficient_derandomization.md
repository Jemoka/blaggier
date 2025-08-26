+++
title = "If P != NP, then BPP in P"
author = ["Houjun Liu"]
draft = false
+++

We really really want to prove:

\begin{equation}
\text{BPP} \subseteq \text{P}
\end{equation}

which will give \\(\text{P} = \text{BPP}\\).

---

How about we replace the truly random bits on the random tape \\(r \in \qty {0,1}^{\text{poly}\qty(|x|)}\\) with "pseudo-randomness" bits and prove that \\(M\\) can't tell the difference.

Namely, a thing that is "pseudo-random" is easier to brute force over. So, we ideally can brute force over \\(\text{poly}\qty(n)\\) many outcomes instead of \\(2^{\text{poly}\qty(n)}\\) in the case of true randomness.

We see that if we believe \\(P \neq NP\\), then we can execute this plan above. In particular, since \\(M\\) is just a normal Turing Machine \\(\in P\\), if \\(P \neq NP\\), then we think there's surely there's a way to fool \\(M\\) by taking up the gap.

---

Assume a pseudorandom generator (which takes a small input, because that's nicely brute forcable):

\begin{equation}
G : \qty {0,1}^{\log n}  \to  \qty {0,1}^{n}
\end{equation}

Naively doing this is certainty doesn't result in a uniform output distribution; because \\(G\\) is wildly not [surjective]({{< relref "KBhsurjectivity.md" >}}) --- there are \\(2^{\log n} = n\\) possible input values, and \\(2^{n}\\) possible outputs.

We want \\(M\\) to not be able to tell the difference, in particular meaning we want \\(G\\) to be scrambly enough o that \\(M\\) can't tell the diffidence between these two pictures.

We can't technically do this but we need to construct \\(G\\) mapping \\(G:  \qty {0,1}^{\log n} \to  \qty {0,1}^{n}\\) with...

1.  \\(G\\) is computer poly \\(\qty(n)\\) (in particular \\(n^{3}\\) time---i.e. more time than the underlying turing machine)
2.  for all randomized \\(n^{2}\\) time, turing machine, \\(\forall  x \in \qty {01}^{\*}\\), we desire:

\begin{equation}
Pr\_{r \sim \qty {0,1}^{n}}, \qty [M \qty(x,r), \text{accept}] = Pr\qty [M\qty(x, G\qty(s)))] \pm 0.1
\end{equation}

i.e. it's "fooled" by \\(G\\)

**insight**: randomness derives from the inability for \\(M\\) to compute harder than \\(n^{2}\\). "Randomness is in the eye of the beholder."
