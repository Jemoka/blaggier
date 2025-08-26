+++
title = "grouping"
author = ["Houjun Liu"]
draft = false
+++

"Stuffing some stuff into buckets"

How many ways are there to sort \\(n\\) distinct objects to \\(r\\) buckets?

\begin{equation}
r^{n}
\end{equation}


## grouping with entirely indistinct objects {#grouping-with-entirely-indistinct-objects}

You can simply reframe the [grouping]({{< relref "KBhgrouping.md" >}}) problem as [permutation]({{< relref "KBhpermutation.md" >}}) of the objects with \\(r-1\\) dividers along with your old \\(n\\) objects.

i.e.: sort this thing ---

{{< figure src="/ox-hugo/2023-09-29_16-43-08_screenshot.png" >}}

So:

\begin{equation}
\frac{(n+r-1)!}{n! (r-1)!}
\end{equation}
