+++
title = "minimum edit distance"
author = ["Houjun Liu"]
draft = false
+++

"[minimum edit distance]({{< relref "KBhminimum_edit_distance.md" >}})" is one approach to solving the problem of "how similar are these two strings"? [minimum edit distance]({{< relref "KBhminimum_edit_distance.md" >}}) is defined by the smallest number of editing operations (insertion, deletion, substitution) needed to transform one string into another.

There are two technical definitions. Both definitions are grounded upon "minimum number of operations it takes to transform a string into another, where"

[edit distance with DP]({{< relref "KBhedit_distance_with_dp.md" >}})

DP costs \\(O(nm)\\), backtrace costs \\(O(n+m)\\).


## Standard Edit Distance {#standard-edit-distance}

insertion, deletion, and substitution cost 1


## Levenshtein Distance {#levenshtein-distance}

insertion and deletion cost 1; substitution cost 2


## Example {#example}

For instance: "graffe". Is...

1.  graf
2.  graft
3.  grail
4.  giraffe

the closest?


## Common Use {#common-use}

1.  machine translation + speech recognition uses edit distance to evaluate output quality
2.  coreference and NER uses edit distance as a baseline check
