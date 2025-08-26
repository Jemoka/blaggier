+++
title = "Unique-SAT"
author = ["Houjun Liu"]
draft = false
+++

Consider UNIQUE-SAT:

for each version of SAT, UNIQUE-SAT has the property that we have either...

1.  no satisfying assignments
2.  exactly one satsifying assignments

We thought that this was esaier than norm SAT, but turns out its exactly as hard.


## Valiant-Vazirani {#valiant-vazirani}

Insights: UNIQUE-SAT isn't actually easier than SAT (if randomness is allowed). That is:

\begin{equation}
\exists \text{rand. poly reduction } \text{SAT} \to \text{UNIQUE-SAT}
\end{equation}

<div class="theorem"><span>

Given a n-variable circuit C where our goal is to decide if \\(#C \geq 1\\) , we can efficiently produce circuits \\(C^{(1)},..., C^{(t)}\\) such that...

a. if \\(C\\) is UNSAT, then \\(C\_1, ..., C\_{t}\\) are all unsat
b. if \\(#c \geq 1\\), then with probability \\(\geq \frac{2}{3}\\), $&exist; j &isin; \qty [] $

</span></div>

<div class="proof"><span>

For possiblity of \\(\\#C\\) organized into the following bucket  \\(\qty [2^{k}, 2^{k+1}-1] = 0, 1, 2\to 3, 4\to 7, ..., 2^{k} \to  2^{k+1}-1, 2^{k}\\), chosoe a random hash from a pairwise indenedent hash family:

\begin{equation}
\mathcal{H} = \qty {h: \qty {0,1}^{h} \to  \qty {0,1}^{k+2}}
\end{equation}

Assume for now \\(\\#c \geq 1\\), and call the "correct" bucket (i.e., \\(#c\\) lives in) \\([2^{k}, 2^{k+1}-1]\\). Consider now the cricuit:

\begin{equation}
C^{(k)} \qty(x) = C\qty(x) \wedge \mathbb{1}\qty [h\_{k}\qty(x) = 0]
\end{equation}

Look! \\(C^{(k)}\\) have fewer satsifiying assignments than \\(C\\). Each statsfying assignment stays satsified with probability \\(\qty(\frac{1}{2})^{k+2} = p\\).

The expected number of satsifying assignments of \\(C^{(k)}\\) is:

\begin{equation}
\mathbb{E}\_{h\_{k} \sim \mathcal{H}\_{k}}  \qty [#C^{(k)}] = p |s| = \qty [\frac{1}{4}, \frac{1}{2}]
\end{equation}

Now, let us consider the following lemma

<div class="lemma"><span>

</span></div>

\#+begin_proof
Consider the following facts:

\begin{align}
&amp;\mathbb{1}\qty [#c<sup>(k)</sup> &ge; 1] &le;  &sum;<sub>x &isin; S</sub><sup>nil</sup> \mathbb{1}\qty [x\text{ survives}] <br />
&amp;\text{Pr} \qty [#C<sup>(k)</sup> &ge;1 a &le; p |S|]
\end{equation}


## snoatehu {#snoatehu}


## 1sntoaeu {#1sntoaeu}

1.  snteoauh
2.  oanetuh
3.  oeanuth

</span></div>

\#+end_proof


### Randomized Reduction {#randomized-reduction}

...see above
