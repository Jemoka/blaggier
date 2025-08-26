+++
title = "morpheme"
author = ["Houjun Liu"]
draft = false
+++

A morpheme is the smallest meaning-bearing unit of a language. "er", or "ist", etc. It contains:

-   **stems**: core meaning-bearing units, and
-   **affexes**: parts that adhere to stems

---

For non space-delineated languages, [tokenization]({{< relref "KBhtokenization.md" >}}) happens with [morpheme]({{< relref "KBhmorpheme.md" >}}) ("词").

Consider:

姚明进入总决赛

Is yao/ming first and last names seperated. Is zong combined with juesai? (i.e. ADJ vs. NOUN).

Commonly, Chinese performs word level tokenization if you don't want to deal with it. Typically, this usuals neural sequence models.
