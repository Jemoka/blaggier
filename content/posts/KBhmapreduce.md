+++
title = "MapReduce"
author = ["Houjun Liu"]
draft = false
+++

[MapReduce]({{< relref "KBhmapreduce.md" >}}) is an [distributed algorithm]({{< relref "KBhdistributed_algorithum.md" >}}).

{{< figure src="/ox-hugo/2023-07-31_11-58-49_screenshot.png" >}}

<https://www.psc.edu/wp-content/uploads/2023/07/A-Brief-History-of-Big-Data.pdf>

-   Map: \\((in\\\_key, in\\\_value) \Rightarrow list(out\\\_key, intermediate\\\_value)\\).
-   Reduce:
    -   Group map outputs by \\(out\\\_key\\)
    -   \\((out\\\_key, list(intermediate\\\_value)) \Rightarrow list(out\\\_value)\\)


## example of [MapReduce]({{< relref "KBhmapreduce.md" >}}) {#example-of-mapreduce--kbhmapreduce-dot-md}

Say, if you want to count word frequencies in a set of documents.

-   Map: \\((document\\\_name, document\\\_contents) \Rightarrow list(word, #\ occurrences)\\)

You can see that this can be distributed to multiple processors. You can have each processor count the word frequencies in a _single_ document. We have now broken the contents into divide and conquerable groups.

-   Reduce: \\((word, list\ (occurrences\\\_per\\\_document)) \Rightarrow (word,sum)\\)

We just add up the occurrences that each of the nodes' output for word frequency.
