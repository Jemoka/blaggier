+++
title = "NUS-MATH530 5.C Problem 7"
author = ["Houjun Liu"]
draft = false
+++

---

Suppose \\(T \in \mathcal{L}(V)\\) has a diagonal matrix \\(A\\) w.r.t. some basis of \\(V\\), and that \\(\lambda \in \mathbb{F}\\). Prove that \\(\lambda\\) appears on the diagonal of \\(A\\) precisely \\(\dim E(\lambda, T)\\) times.

---


## Aside: "to appear on the diagonal \\(n\\) times" {#aside-to-appear-on-the-diagonal-n-times}

We want to begin by giving a description for what "appearing on the diagonal" of a diagonal matrix implies.

A diagonal matrix is a special-case upper-triangular matrix, so a value being on its diagonal implies it to be an eigenvalue.

Furthermore, let \\(v\_1, ... v\_{n}\\) be the eigenvector-basis which gives the diagonal matrix aforementioned for \\(A\\). By calculation (i.e. properties of multiplying some all-but-one-zero "one hot" vector to the diagonal representation of \\(A\\)), if \\(\lambda\\) appears \\(j\\) times on the diagonal representation of \\(A\\), \\(j\\) basis vectors of \\(V\\) will belong to the same eigenvector \\(j\\) as they all will produce \\(Tv = \lambda v\\) when applied to the diagonal representation of \\(A\\)).

And finally, because basis vectors are linearly independent, we have that if a value \\(\lambda\\) appears on the diagonal of a diagonal matrix of \\(A\\) \\(n\\) times, it implies that \\(A\\) has \\(n\\) linearly independent eigenvectors all belonging to \\(\lambda\\) which forms the basis for which the diagonal matrix is built.


## Proof {#proof}

To complete the proof, we now perform casework.


### \\(\lambda\\) appears \\(0\\) times {#lambda-appears-0-times}

Per our discussion above, this implies that there are \\(0\\) (trivially linearly independent) eigenvectors for which \\(\lambda\\) serves as its eigenvalue. Namely, that means \\(\lambda\\) is not an eigenvalue of \\(A\\). And therefore, we have that \\(T - \lambda I\\) is injective, and hence \\(null (T - \lambda I) = {0}\\). Recall that \\(E(\lambda, T) = null(T-\lambda I)\\). We now have \\(\dim\ E(\lambda, T) = 0\\), as desired.


### \\(\lambda\\) appears \\(n\\) times {#lambda-appears-n-times}

Again from above, we have \\(n\\) linearly-independent eigenvectors belonging to the same eigenvalue \\(\lambda\\) which forms the basis out of which the diagonal matrix is built. Therefore, one can take at least \\(n\\) linearly independent vectors from \\(E(\lambda, T)\\) as \\(null(T- \lambda I)\\) is the space of all eigenvectors belonging to \\(\lambda\\) and the zero vector. This makes \\(\dim E(\lambda, T)\\) at least \\(n\\).

To show that \\(\dim E(\lambda, T)\\) to be exactly \\(n\\), let's suppose the contrary. Let \\(v\\) be another eigenvector belonging to \\(\lambda\\) linearly independent to the previous \\(n\\) already discussed. \\(v\\) would be linearly independent to all other members of the eigenvector-basis of \\(V\\): as eigenvectors from distinct eigenvalues are linearly independent and we hypothesized that \\(v\\) is linearly independent to the other eigenvectors belonging to \\(\lambda\\).

Yet, this is not possible: \\(v \in V\\) cannot create a linearly independent list conjoined to a basis of \\(V\\). Reaching contraction, we see that \\(\dim E(\lambda, T) = n\\) as desired. \\(\blacksquare\\)
