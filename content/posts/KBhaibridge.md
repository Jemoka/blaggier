+++
title = "AIBridge"
author = ["Houjun Liu"]
draft = false
+++

[AIBridge]({{< relref "KBhaibridge.md" >}}) is an introductory AI bootcamp developed and taught by [Prof. Xin Liu]({{< relref "KBhprof_xin_liu.md" >}}), yours truly, and Samuel Ren in collaboration with [AIFS]({{< relref "KBhaifs.md" >}}).


## AIBRidge Notes {#aibridge-notes}

-   Pause [more] to allow some time to see if people follow
-   did y'all not introduce pandas?

Closest to doing this without try/except:

-   slide 49: what is conc?
-   is this too much recap time? Haven't we been recapping for a long while already?
-   probably good to mention what is `/content/iris.data`, also, just opening from `./iris.data` should work and will be probably more ergonomic
-   read function confusion
    -   .read() =&gt; str
    -   .readlines() =&gt; [str]
    -   the pauses feel a tad ackward?
    -   speak up!

<!--listend-->

-   SSE squares and lines need to be darker: increase opacity 39
-   "very common metric" --- not a metric
-   motivate confidence value better; the "middle" question makes sense
-   I think its actually probably good to explain cross-entropy in the future
    -   (i.e. its not a lot of fancy math + I think it provides a lot of intuition w.r.t. one-hot encoding, probablitiy distributions, etc.)
-   Problem with how I made the old slides: multi-Class classification (1va, ava, etc.) needs better motivation before, otherwise throwing three classes on the screen is a tad confusing
-   motivate that the whole `random.seed` business is so that the whole class can compare answers more effectively
-   `LogReg = LogisticRegression()`, typically, name instance variables as lower snake case; so maybe call it `my_log_reg` or something
