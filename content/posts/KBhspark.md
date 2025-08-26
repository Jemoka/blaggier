+++
title = "Spark"
author = ["Houjun Liu"]
draft = false
+++

[Spark]({{< relref "KBhspark.md" >}}) is not a database. Importantly, its a "framework" of data:

-   Programming platform
-   Distributed file system
-   Prallel execution environment
-   Software ecosystem

It gives you the "parallel" search/sort needed to navigate a large database. It is based on the [Hadoop]({{< relref "KBhhadoop.md#hadoop" >}}) ecosystem. Spark operates on [RDD]({{< relref "KBhrdd.md" >}})s to do lazy-evaluation.


## Quickstart {#quickstart}

When we start up Spark Shell, it will build you a `sc` variable which is appropriate for your supercomputer; if you are not, you need to set up the context yourself using the 3 lines noted below to make `sc` variable:

```python
# build context, IF NOT in a SHELL
from myspark import SparkConf, SparkContext
conf = SparkConf().setMaster("local").setaAppName("Test_App")
sc = SparkContext(conf=conf)

# do shit "transform"
my_rdd = sc.textFile("whatever") # create an RDD from a datastore
filtered_rdd = my_rdd.filter(lambda Line: "hubble" in line) # perform action in rdd

# actually perform actions
filtered_rdd.count() # 47
filtered_rdd.first()
```

Then, you can submit this script. If you are in a shell its REPL so you don't.

```bash
spark-submit Test_App.py
```

Main types of files Spark can handle:

-   Text (CSV, XML, JSON, etc.)
-   SQL stuff
-   Other NoSQL Stuff
    -   Parquet
    -   Hive
    -   Hadoopy things
    -   JDBC, Cassandra, Mongo, etc. etc. etc.
-   Compressed files: tarballs, gzip

Main types of filesystems:

-   yours (local files)
-   HDFS
-   Lustre
-   AWS S3

See also [Common Spark Actions]({{< relref "KBhcommon_spark_actions.md" >}}), [Common Spark Transformations]({{< relref "KBhcommon_spark_transformations.md" >}})


## Spark RDD API {#spark-rdd-api}

The base level API of [Spark]({{< relref "KBhspark.md" >}}) is one which interacts with [vector]({{< relref "KBhvector.md" >}})s or tuples via [RDD]({{< relref "KBhrdd.md" >}})s. It deals with manipulating unordered sets (i.e. **not** dataframes).

1.  Create/Load [RDD]({{< relref "KBhrdd.md" >}})
2.  Transform [RDD]({{< relref "KBhrdd.md" >}})] (performing any operations _in theory, lazily, without loading data_)
3.  Apply some more transforms (filtering, etc.)
4.  Perform Actions (actually get data)

****Transformations**** move one [RDD]({{< relref "KBhrdd.md" >}}) to another, and ****Actions**** load the data from [RDD]({{< relref "KBhrdd.md" >}}).

Spark is smart to not do anything that's not needed; removing entire stores which isn't needed, caching, dynamically getting them back etc.

Spark can read from whole databases, text files, etc. and move them into an RDD.


### Tips and Tricks {#tips-and-tricks}

"kv" values are kinda like Pandas `.groupby` without groupyby. You can do most mapping operations by key instead, which means you can always do group.

-   if you want a certain form, use the `.map` function to turn it into something else; for instance, if you want to turn something into a kv pair, you can `thing.map(lambda x: x-key, x-value)`
-   if you need to work with KV data, you should think about swapping key and value if you so desire


#### Spark Anti-Patterns {#spark-anti-patterns}

-   You should never do heavy-duty compute in Python (i.e. if you end up with a for loop somewhere you are probably not using map reduce right)
-   You should never take an **action** until you absolutely, seriously, need all the data


#### Optimizations {#optimizations}

See [Optimizing Spark]({{< relref "KBhoptimizing_spark.md" >}})


## Spark DataFrame API {#spark-dataframe-api}

[DataFrame](#spark-dataframe-api)s are type-safe collections of tables built out of RDDs; they are collections of tuples, where columns have the same type

```python
row_rdd = sc.parallelize([("thing1", "thing2", 3), ("thing1", "thing2", 3)])
row_dataframe = spark.createDataFrame(row_rdd, ["col1", "col2", "col3"])

row_dataframe.show()
```

You can load entire structured data via:

```python
df = spark.read.json("jsonfile.json")
```

And it will create the right schema on your behalf in the DataFrame.


### DataFrame Limitations {#dataframe-limitations}

-   Unlike Pandas, you can't manipulate structured DataFrame well.
-   Hence, you should like. Go back to RDDs if you are manipulating specific data into unstructured form.
