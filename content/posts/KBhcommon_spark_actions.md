+++
title = "Common Spark Actions"
author = ["Houjun Liu"]
draft = false
+++

-   `collect()`: get all of your data
-   `count()`: get a count of the elements in the RDD
-   `countByValue()`: list the times each value appears
-   `reduce(func)`: the [reduce]({{< relref "KBhreduce.md" >}}) part of [MapReduce]({{< relref "KBhmapreduce.md" >}})
-   `first(), take(n)`: return some number of elements
-   `top(n)`: return the highest n values in the list
