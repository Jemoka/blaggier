+++
title = "principle of induction"
author = ["Houjun Liu"]
draft = false
+++

The [principle of induction]({{< relref "KBhprinciple_of_induction.md" >}}) is a technique used to prove the relationship between a smaller subset

The following three statements are equivalent.


## standard [induction]({{< relref "KBhprinciple_of_induction.md" >}}) {#standard-induction--kbhprinciple-of-induction-dot-md}

Suppose \\(S \subset \mathbb{N}\\), which is non-empty. If \\(S\\) is a non-empty subset such that \\(0 \in S\\), and for all \\(n \in \mathbb{N}\\), \\(n \in S \implies n+1 \in S\\). Then, \\(S = \mathbb{N}\\).


## [strong induction]({{< relref "KBhstrong_induction.md" >}}) {#strong-induction--kbhstrong-induction-dot-md}

Suppose \\(S \subset \mathbb{N}\\), which is non-empty. If \\(S\\) is a non-empty subset such that \\(0 \in S\\), and for all \\(n \in \mathbb{N}\\), \\(\\{0, \dots, n\\} \in S \implies n+1 \in S\\). Then, \\(S = \mathbb{N}\\).


## well-ordering principle {#well-ordering-principle}

If \\(S \subset \mathbb{N}\\) is non empty, then it has a smallest element


## PROOF: {#proof}


### assume [well-ordering principle](#well-ordering-principle), prove standard induction {#assume-well-ordering-principle--org0837e14--prove-standard-induction}

Given \\(S \in \mathbb{N}\\), such that \\(0 \in S\\), whenever \\(n \in S\\), then \\(n+1\\) is also in \\(S\\). We desire that that \\(S\\) is the [natural number]({{< relref "KBhnatural_numbers.md" >}})s.

Assume for the sake of contradiction \\(S \neq \mathbb{N}\\). Define \\(T = \mathbb{N} \setminus S\\).

Assume \\(T\\) is non-empty. The [WOP](#well-ordering-principle) tells us that \\(T\\) has a smallest element \\(t \in T\\). We know that \\(t \neq 0\\), because \\(0 \in S\\). Therefore, \\(t-1 \in \mathbb{N}\\). But, \\(t-1 < t\\), which means that \\(t-1 \in S\\). But by the statement of the givens, \\((t-1) \in S \implies (t-1)+1 = t \in S\\). Reaching contradiction. \\(\blacksquare\\)


### assuming [strong induction]({{< relref "KBhstrong_induction.md" >}}), proof [well-ordering principle](#well-ordering-principle) {#assuming-strong-induction--kbhstrong-induction-dot-md--proof-well-ordering-principle--org0837e14}

Assume \\(S\\) has no smallest element. Create some \\(T = \mathbb{N} \setminus S\\). Now, \\(0 \in T\\) because otherwise \\(0 \in S\\) would be the smallest element. Now, consider \\(0, 1, ... n \in T\\), we notice that \\(n+1\\) must be in \\(T\\) as well. By [strong induction]({{< relref "KBhstrong_induction.md" >}}), we have that \\(T = \mathbb{N}\\) and \\(S\\) is empty.
