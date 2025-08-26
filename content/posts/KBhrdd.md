+++
title = "Resilient Distributed Dataset"
author = ["Houjun Liu"]
draft = false
+++

Importantly, we have to keep our data under something that can be called ****[RDD]({{< relref "KBhspark.md#rdd-api" >}})****: "Resilient Distributed Dataset"; it is a theoretical dataset, but you don't actually load it.

[RDD]({{< relref "KBhrdd.md" >}})s are has a single vector datastore under, but there are special [RDD]({{< relref "KBhrdd.md" >}})s that store key-value info. For [Spark]({{< relref "KBhspark.md" >}}), [RDD]({{< relref "KBhrdd.md" >}})s are stored as operational graphs which is backtraced eventually during computational steps.


## Pair RDD {#pair-rdd}

A [Pair RDD](#pair-rdd) is an [RDD]({{< relref "KBhrdd.md" >}}) that stores two pairs of [vector]({{< relref "KBhvector.md" >}})s: you have a key and you have an value per entry.
