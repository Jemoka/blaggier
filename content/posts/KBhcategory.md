+++
title = "category"
author = ["Houjun Liu"]
draft = false
+++

A [category]({{< relref "KBhcategory.md" >}}) is an abstract collection of [object]({{< relref "KBhobjects.md" >}})s


## constituents {#constituents}

-   collection of [objects]({{< relref "KBhobjects.md" >}}), where if \\(X\\) is an [object]({{< relref "KBhobjects.md" >}}) of \\(C\\) we write \\(X \in C\\)
-   for a pair of objects \\(X, Y \in C\\), a set of [morphism]({{< relref "KBhmorphism.md" >}})s acting upon the objects which we call the [homset]({{< relref "KBhhomset.md" >}})


## additional information {#additional-information}


## requirements {#requirements}

-   there exists the [identity]({{< relref "KBhidentity.md" >}}) [morphism]({{< relref "KBhmorphism.md" >}}); that is, \\(\forall X \in C, \exists I\_{X}: X\to X\\)
-   [morphism]({{< relref "KBhmorphism.md" >}})s are always composable: given \\(f: X\to Y\\), and \\(g: Y\to Z\\), exists \\(gf: X \to Z\\)
-   the [identity]({{< relref "KBhidentity.md" >}}) [morphism]({{< relref "KBhmorphism.md" >}}) can compose in either direction: given \\(f: X \to Y\\), then \\(f I\_{x} = f = I\_{y} f\\)
-   [morphism]({{< relref "KBhmorphism.md" >}}) composition is [associative]({{< relref "KBhassociative.md" >}}): \\((hg)f=h(gf)\\)
