+++
title = "Big Data"
author = ["Houjun Liu"]
draft = false
+++

[Big Data]({{< relref "KBhbig_data.md" >}}) is a term for datasets large enough that traditional data processing applications are inadequate. i.e. when non-parallel processing is inadequate.

That is: "[Big Data]({{< relref "KBhbig_data.md" >}})" is when Pandas and SQL is inadequate. To handle big data, its very difficult to sequentially go through and process stuff. To make it work, you usually have to perform parallel processing under the hood.


## Rules of Thumb of Datasets {#rules-of-thumb-of-datasets}

-   1000 Genomes (AWS, 260TB)
-   CommonCraw - the entire web (On PSC! 300-800 TB)
-   GDELT - <https://www.gdeltproject.org/> a dataset that contains everything that's happening in the world right now in terms of news (small!! 2.5 TB per year; however, there is a LOT of fields: 250 Million fields)


## Evolution of Big Data {#evolution-of-big-data}


### Good Ol' SQL {#good-ol-sql}

1.  schemas are too set in stone ("not a fit for [Agile]({{< relref "KBhsoftware_development_methodologies.md#agile" >}}) development" --- a research scientist)
2.  SQL sharding, when working correctly, is


### KV Stores {#kv-stores}

And this is why we gave up and made Redis (or Amazon DynamoDB, Riak, Memcached) which keeps only Key/Value information. We just make the key really really complicated to support structures: `GET cart:joe:15~4...`

But the problem with key-value stores isn't good at indexing at all: if we want like to get all of Joe's cart, you can't just `GET cart:joe` because you can't compare partial hashes.


### Document Stores {#document-stores}

[And something something mongo's document stores but something its bad about those too but CMU can't do tech and the speakers died]


### Wide Column Stores {#wide-column-stores}

Google BigTable type thing

Just have a wide column of arbitrary width with no schema:

| Cart | Joe     | 15~4 |              |
|------|---------|------|--------------|
| Cart | Robert  | 15~3 | More Things! |
|      | Chicken | 15~2 |              |

Etc. No idea how you query this but google does it and CMU's speakers died again good on them.


### Graphs! {#graphs}

Neo4j: don't store triples, and have better schemes for encoding. You can then use nice graph query schemes.

-   Hard to visualize
-   VERY hard to serialize
-   Queries are hard


### And so: {#and-so}

And sooooo. Introducing [Spark]({{< relref "KBhspark.md" >}}). We don't want to do parallel programming, we want to use traditional databases, so we just make someone else do it on an adapter and just query boring databases with lots of parallel connections.
