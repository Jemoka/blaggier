+++
title = "MLib"
author = ["Houjun Liu"]
draft = false
+++

[MLib]({{< relref "KBhmlib.md" >}}) is a machine learning library built on top of [Spark]({{< relref "KBhspark.md" >}}).

```python
from pyspalk.mllib.clustering import KMeans

KMeans(rdd)
```

where you pass the `MLib` a PySpark [RDD]({{< relref "KBhrdd.md" >}})
