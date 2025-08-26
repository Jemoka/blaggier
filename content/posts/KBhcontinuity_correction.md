+++
title = "continuity correction"
author = ["Houjun Liu"]
draft = false
+++

Because we want to including rounding during [continuity correction]({{< relref "KBhcontinuity_correction.md" >}}) to account for things discretized to certain values.

| Discrete     | Continuous                |
|--------------|---------------------------|
| P(X = 6)     | P( 5.5 &lt;= X &lt;= 6.5) |
| P(X &gt;= 6) | P (X &gt;= 5.5)           |
| P(X &gt; 6)  | P (X &gt;= 6.5)           |

basically "less than
