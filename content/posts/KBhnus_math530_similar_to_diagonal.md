+++
title = "NUS-MATH530 Similar to Diagonal"
author = ["Houjun Liu"]
draft = false
+++

Prove but \\(T\\) is [diagonalizable]({{< relref "KBhdiagonal_matrix.md#properties-of-diagonal-matrices" >}}) if and only if the matrix of \\(T\\) is similar to a diagonal matrix.

Try 2.

---

Given similarity:

So we have that:

\begin{equation}
D = S^{-1} A S
\end{equation}

where, \\(D\\) is diagonal. We apply \\(S\\) to both sides to yield:

\begin{equation}
SD = AS
\end{equation}

Now, note that \\(S\\) is invertible. This means that its column s are linearly independent (as it is an operator, which means it is injective, and hence has a zero null space; that indicates that the dimension of its range is that of the whole space: indicating its columns vectors are spanning; there is \\(dim\ V\\) such columns, so it is a basis and hence linearly independent).

Let \\(S = [v\_1 | \dots | v\_{n}]\\); now, \\(SD = [\lambda\_{1} v\_1 | \dots | \lambda\_{n} v\_{n}]\\).

By that same definition above course, \\(A[v\_1 | \dots | v\_{n}] = [\lambda\_{1} v\_1 | \dots | \lambda\_{n} v\_{n}]\\).

Finally, then, by definition, \\(v\_1 \dots v\_{n}\\) are eigenvectors of \\(A\\). Note again that, per the above, this is \\(n\\) linearly independent eigenvectors in a space of \\(\dim n\\) --- this makes them a basis of \\(V\\). Having made a basis of eigenvectors of \\(A\\), it is diagonalizable.

---

Given diagonalizability:

Construct \\(S= [v\_1 | \dots | v\_{n}]\\), a basis of eigenvectors of \\(A\\) which is diagonalizable. Now, \\(AS\\) would send each of the vectors to their corresponding scales, meaning: \\(AS = [\lambda\_{1} v\_{1} | \dots | \lambda\_{n} v\_{n}]\\).

Lastly, applying \\(S^{-1}\\) again would send each vector to each of the standard basis encoded in the original space given homogeneity of the \\(\lambda\\); leaving the vector of \\(\lambda\_{j}\\) scaled by the identity: creating a diagonal \\(D\\) matrix. \\(\blacksquare\\)
