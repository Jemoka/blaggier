+++
title = "distributed algorithm"
author = ["Houjun Liu"]
draft = false
+++

[distributed algorithm]({{< relref "KBhdistributed_algorithum.md" >}}) is a type of algorithm that can be distributed across many modules.

There are a few core areas of research:


## failure-proofing nodes is a [distributed algorithm]({{< relref "KBhdistributed_algorithum.md" >}}) {#failure-proofing-nodes-is-a-distributed-algorithm--kbhdistributed-algorithum-dot-md}

-   What if one processor fails?


## communication in a [distributed algorithm]({{< relref "KBhdistributed_algorithum.md" >}}) {#communication-in-a-distributed-algorithm--kbhdistributed-algorithum-dot-md}

-   What if communication between processors fails?
-   What if timing fails?


## atomicity {#atomicity}

[atomicity](#atomicity) is a property of [distributed algorithm]({{< relref "KBhdistributed_algorithum.md" >}}) where, for a set of steps, a processor can only do _one_ or _all_ of the steps. i.e.: if you are asking a node to do something, it can either do all of the thing or be able to roll back as if the entire thing didn't happen.


## leader election (algorithms) {#leader-election--algorithms}

[leader election](#leader-election--algorithms) is the process by which a [distributed algorithm]({{< relref "KBhdistributed_algorithum.md" >}}) elects the driving node among similar nodes.


## consensus (algorithms) {#consensus--algorithms}

[consensus](#consensus--algorithms) is a mechanism in a [distributed algorithm]({{< relref "KBhdistributed_algorithum.md" >}}) where the solution requires multiple processes to do the same calculation to confirm.


## algorithms designed to be distributed {#algorithms-designed-to-be-distributed}

-   [MapReduce]({{< relref "KBhmapreduce.md" >}})