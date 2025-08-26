+++
title = "SARSOP"
author = ["Houjun Liu"]
draft = false
+++

Big problem: curse of **dimensionality** and the curse of **history**.

[PBVI]({{< relref "KBhpoint_based_value_iteration.md" >}}) and [HSVI]({{< relref "KBhhsvi.md" >}}) tries to sample the belief simplex generally. But instead we should try to sample **OPTIMAL REACHABLE SET**.


## Background {#background}

Recall [one-step lookahead in POMDP]({{< relref "KBhalpha_vector.md#one-step-lookahead-in-pomdp" >}}). The difficulty here is that the sum over all of the alpha-vectors is still very hard. So, in [PBVI]({{< relref "KBhpoint_based_value_iteration.md" >}}), we only do this to a small set of beliefs


## SARSOP {#sarsop}

-   sample \\(R^{\*}\\)
-   backup
-   prune


### Initialization {#initialization}

choose an initial belief, action, and observation using "suitable heuristics". Initialize a set of [alpha vector]({{< relref "KBhalpha_vector.md" >}})s corresponding to this belief.


### Sampling {#sampling}

-   compute \\(b' = update(b,a,o)\\)
-   add node \\(b'\\) to the tree

So far, this is just [PBVI]({{< relref "KBhpoint_based_value_iteration.md" >}}), [HSVI]({{< relref "KBhhsvi.md" >}}). The point is that we only want to update the reachable set.

To do this, we now take the new \\(b'\\), we give an upper bound via [FIB]({{< relref "KBhfast_informed_bound.md" >}}), and a lower bound with [blind lower bound]({{< relref "KBhblind_lower_bound.md" >}}) over the alpha vectors you already got.

Now:

{{< figure src="/ox-hugo/2024-01-27_22-11-41_screenshot.png" >}}

where \\(\mathcal{R}^{\*}\\) is a reachable space tree set from \\(b\_0\\).


### Backup {#backup}

[PBVI Backup]({{< relref "KBhpoint_based_value_iteration.md#pbvi-backup" >}}) on the beliefs you sampled to update your [alpha vector]({{< relref "KBhalpha_vector.md" >}})s.


### Pruning {#pruning}

We can prune anything that's suboptimal: every step, we perform [alpha vector pruning]({{< relref "KBhalpha_vector.md#id-a11af4cf-7e36-4b3f-876f-e6a26cf6817e-alpha-vector-pruning" >}}) at every step.


## Limitations {#limitations}

[HSVI]({{< relref "KBhhsvi.md" >}}) is better at handling systems with lower uncertainty.

-   Does not make an attempt at challenges of dimensionality
-   Make unproven theoretical claims
-   Don't compare to domain contraction
-   Compare algorithm to a single alternative
-   Compared to continuous state spaces
-   Subsection headings
