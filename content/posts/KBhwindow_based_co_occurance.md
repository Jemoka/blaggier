+++
title = "window-based co-occurance"
author = ["Houjun Liu"]
draft = false
+++

[window-based co-occurance]({{< relref "KBhwindow_based_co_occurance.md" >}}) is a matrix whereby we increment the value where each row is the center word, and each column is the number of occurrences of that other word next to a window of that word.

This approach is fine (not great), but if your vocabulary is HUGE, your word vectors will be exactly that length---bad. Therefore, we take this matrix and we [SVD]({{< relref "KBhsingular_value_decomposition.md" >}}) it; then, we chop off the smaller singular values to create a low dimensional approximation of our matrix.

This approach is extended in an approach called COALS (using person's correlations, using ramped windows, and normal SVD)---which also demonstrated linear meaning.
