+++
title = "Myhill-Nerode Theorem"
author = ["Houjun Liu"]
draft = false
+++

entire characterization of [regular languages]({{< relref "KBhdeterministic_finite_automata.md" >}}): provide necessary and sufficient conditions for [regular languages]({{< relref "KBhdeterministic_finite_automata.md" >}})

Statement: **a language \\(L\\) is regular [IFF]({{< relref "KBhequivalence.md" >}}) the number of equivalence classes of \\(\equiv\_{L}\\) is finite**


## corollary {#corollary}

\\(L\\) is not regular IFF there are infinitely many equivalance classes of \\(\equiv\_{L}\\), meaning there are infinitely many strings $w_1, w_2, ...$ such that \\(w\_{i} \neq w\_{j}\\) and those strings are also distinguishable to \\(L\\) meaning, there is at least one \\(z \in \Sigma^{\*}\\) such that exactly one of \\(w\_{i}z\\) and \\(w\_{j}z\\) is in \\(L\\).


## proof {#proof}

let's define \\(x \sim\_{M} y\\),

\begin{equation}
\Delta (q\_0, x) = \Delta(q\_0, y)
\end{equation}


### regular languages have finite \\(\equiv\_{L}\\) {#regular-languages-have-finite-equiv-l}

**claim**: we say \\(\sim\_{M}\\) is an equivalence relation with at most \\(|Q|\\) classes (this is true because we only have \\(|Q|\\) states to reach, so anything beyond those would be within those \\(Q\\) states).

next, we want to show if \\(x \sim\_{M} y\\), then \\(x \equiv\_{L} y\\). Suppose \\(xz\\) is accepted by \\(M\\), then if \\(x \sim\_{M} y\\), then \\(yz\\) would reach the same state and also be accepted. Vise versa.

this means that the number of equivalence classes in \\(\equiv\_{L}\\) is also at most \\(Q\\).


### finite \\(\equiv\_{L}\\) means regular {#finite-equiv-l-means-regular}

the idea is to build a DFA.

let's define a DFA where \\(Q\\) is the set of equivalance classes of \\(\equiv\_{L}\\), \\(q\_0 = [\varepsilon]\_{L}\\) (the equivalance class to the empty string), \\(\delta([x], \sigma) = [x \sigma]\\) (because all we care is closure); and \\(F = {[x] | x \in L}\\).

\\(M\\) accepts \\(x\\) [IFF]({{< relref "KBhequivalence.md" >}}) \\(x \in L\\)


## language equivalence class {#language-equivalence-class}

we want to define an equivalence relation **over strings and languages**.

Let \\(L \subseteq \Sigma^{\*}\\), and \\(x, y \in \Sigma^{\*}\\). We say \\(x \equiv\_{L} y\\) if for all \\(z \in \Sigma^{\*}\\), we have that \\(xz \in L \Leftrightarrow yz \in L\\). That is, the machine that accepts \\(L\\) doesn't care if you have \\(x\\) or \\(y\\). We call this \\(x\\) and \\(y\\) are indistinguishable to \\(L\\).
