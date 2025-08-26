+++
title = "Dyson's Model of Life"
author = ["Houjun Liu"]
draft = false
+++

[Dyson's Model of Life]({{< relref "KBhdyson_s_model_of_life.md" >}}) is a [theory of origin of life]({{< relref "KBhliving.md#theories-of-origin-of-life" >}}):

1.  [cell]({{< relref "KBhcell.md" >}})s form as machines that perform tasks
2.  [gene]({{< relref "KBhgene.md" >}})s show up later as parasites, eventually forming symbiosis with [cell]({{< relref "KBhcell.md" >}})s

Read: and so, we can essentially ditch trying to find things characteristics of "[cell]({{< relref "KBhcell.md" >}})s" per-se like RNA, instead we can go about finding generic boxes of containers called "[cell]({{< relref "KBhcell.md" >}})s" and see how they evolve.

See also: [high chemical activity]({{< relref "KBhhigh_chemical_activity.md" >}}), [metabolism]({{< relref "KBhmetabolism.md" >}}), [Stepwise Evolution]({{< relref "KBhstepwise_evolution.md" >}}), and [Two Main Functions of Life]({{< relref "KBhliving.md#two-main-functions-of-life" >}})


## constituents {#constituents}

-   \\(x\\): percentage of [active]({{< relref "KBhhigh_chemical_activity.md" >}}) binding sites
-   \\(w\\): percentage of inactive binding sites
-   \\(z\\): percentage of "[empty binding site]({{< relref "KBhempty_binding_site.md" >}})s"
-   \\(p(k)\\): probability distribution for a site to be in any given state at time \\(k\\)
-   \\(\Psi(x)\\): rate of [activation]({{< relref "KBhhigh_chemical_activity.md" >}}) "efficiency in active monomers in acceleration monomer absorption"


## requirements {#requirements}

-   evidently, because percentages: \\(x+w+z = 1\\)
-   Active monomer absorption: \\(\Psi(x) \cdot p\\)
-   Inactive monomer absorption: \\(p\\)


## additional information {#additional-information}


### general intuition {#general-intuition}

1.  some kind of isolated droplet contains a population of molecules
2.  chemical reactions occur to the whole droplet such that its state changes

{{< figure src="/ox-hugo/2023-03-11_19-37-29_screenshot.png" >}}

Recall the [Two Main Functions of Life]({{< relref "KBhliving.md#two-main-functions-of-life" >}}): [metabolism]({{< relref "KBhmetabolism.md" >}}) and [replication]({{< relref "KBhreplication.md" >}}). So, if we want our [Dyson's Model]({{< relref "KBhdyson_s_model_of_life.md" >}}) to capture life, we should try to encode them into our model. Turns out, we can use the language of [Stepwise Evolution]({{< relref "KBhstepwise_evolution.md" >}}) to describe our model.

Therefore, let's declare that there is only two states to our system, in which our particle is quasi-stationary (it wiggles but doesn't go anywhere):

1.  "[high chemical activity]({{< relref "KBhhigh_chemical_activity.md" >}})", a.k.a. "[metabolism]({{< relref "KBhmetabolism.md" >}})" --- "ordered" state
2.  "low chemical activity" --- disordered state

Our transition \\(M\\), then, only has to encode transitions between these two states. Dyson claims that, in his model, this transition happens spontaneously when the circumstances is correct.