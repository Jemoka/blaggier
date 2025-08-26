+++
title = "clock algorithm"
author = ["Houjun Liu"]
draft = false
+++

in [demand paging]({{< relref "KBhdemand_paging.md" >}}), if we have to kick out a page, which one do we kick?


## possible basic approaches {#possible-basic-approaches}

-   random page (this works surprisingly well)
-   throw out the page that's the longest in memory (this is BAD because if a page is there for a long time, its probably accessed a lot)
-   oracle (pick the page whose next accesses is farest in the future... we can't predict the future)
-   LRU (replace the page that's accessed **longest time ago**)

**LRU** sounds decently good, but recall that \\(2^{36}\\) wall times to store wall time for each page are needed which is bad


## clock algorithm {#clock-algorithm}

**rotate through all pages until we find one that hasn't been referenced since last time**

1.  we add a **reference bit** to the [page table]({{< relref "KBhvirtual_memory.md#paging" >}})---its set to \\(1\\) if the program wrote or read each page, otherwise its set to \\(0\\)
2.  when page kick is needed, clock algorithm starts where it left off before and scan through physical pages
    1.  each page it checks with reference bit 1, it sets the **reference bit** as 0
    2.  if it checked a page and its reference bit is 0, we kick it out (because we've gone through two )

We now **save the position of the hand**---we want to begin checking with the page that hasn't been checked for the longest time.

If every page has a **reference bit** is one, running this algorithm doesn't break because it would set its immediately next bit of memory.


## page replacement model {#page-replacement-model}


### per-process replacement {#per-process-replacement}

**THIS IS NOT USED**: we only kick out our own pages (but... how would we know how many pages we allocate max per process before we start kicking?).


### global replacement {#global-replacement}

**THIS IS USED**: a page fault in one process can kick out a page from another process. all pages from all processes in a single pool.


## recall: demand paging {#recall-demand-paging}

get space:

1.  pick a page to kick out
2.  write it to disk
3.  mark the old page map entry as "not present"
4.  update the new page map entry for the new process + point to our reused page

---

restore kicked page:

1.  trigger page fault
2.  check swap (if it isn't present, page fault end)
3.  get a new physical page by kicking another page out
4.  load the data from disk into that reused page
5.  update page map yet again
