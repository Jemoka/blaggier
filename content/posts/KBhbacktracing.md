+++
title = "backtracing"
author = ["Houjun Liu"]
draft = false
+++

we need to keep two sequences aligned; so in addition to [minimum edit distance]({{< relref "KBhminimum_edit_distance.md" >}}) we need to know how to transform one sequence into another.

To do this, we keep a pointer of what cell we came from.

This is similar to [edit distance with DP]({{< relref "KBhedit_distance_with_dp.md" >}}), but we keep a pointer of each cell of the action: point DOWN (less j) if inserting, point LEFT (less i) if deleting, and point diagonally if substituting.

For two strings, let's define:

-   \\(X\\) of length \\(n\\)
-   \\(Y\\) of length \\(m\\)

we define some \\(D(i,j)\\) as the edit distance between substring \\(X[1:i]\\) and \\(Y[1:j]\\).

Let:

-   \\(D(i,0) = i\\)
-   \\(D(0,j) = j\\)

<!--listend-->

```python
for i in range(1,M):
    for j in range(1,N):
        # deletion: ignoring one char of previous string
        d1 = D(i-1,j) + 1 # (cost)
        # insertion: insertion into string before using rest of j
        d2 = D(i,j-1) + 1 # (cost)
        # keep same if char is same or substitute current
        d3 = D(i-1,j-1) + (0 if X[i] == Y[j] else 2)

        # cache
        D(i,j) = min(d1, d2, d3)
```

---
