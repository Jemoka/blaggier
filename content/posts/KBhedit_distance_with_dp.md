+++
title = "edit distance with DP"
author = ["Houjun Liu"]
draft = false
+++

Goal: search for a path (sequence of edits) from start to final string, whereby:

-   **initial state** is the word we are transforming
-   **operators**: insert, delete, substitute
-   **goal state**: the word we end up at
-   **path cost**: cost of the path we are trying to minimize

Sequence of all edits is huge! so DP.

---

For two strings, let's define:

-   \\(X\\) of length \\(n\\)
-   \\(Y\\) of length \\(m\\)

we define some \\(D(i,j)\\) as the edit distance between substring \\(X[1:i]\\) and \\(Y[1:j]\\).

Let:

-   \\(D(i,0) = i, \forall i\\)
-   \\(D(0,j) = j, \forall j\\)

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
