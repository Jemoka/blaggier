+++
title = "Common Spark Transformations"
author = ["Houjun Liu"]
draft = false
+++

-   `map(func)`: apply a function on all functions
-   `filter(func)`: filter based on function
-   `flatMap(func)`: flatten returned lists into one giant list
-   `union(rdd)`: create a union of multiple RDD0
-   `subtract(rdd)`: subtract RDDs
-   `cartesian(rdd)`: cartesian product of rdd
-   `parallelize(list)`: make an RDD from list


## Special transformations for [Pair RDD]({{< relref "KBhrdd.md#pair-rdd" >}})s {#special-transformations-for-pair-rdd--kbhrdd-dot-md--s}

-   `reduceByKey(func)`: key things
-   `groupByKey(func)`: key things
-   `sortByKey(func)`: key things

See also [Database "Join"]({{< relref "KBhdatabase_join.md#database-join" >}})
