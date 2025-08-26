+++
title = "Axler 3.A"
author = ["Houjun Liu"]
draft = false
+++

OMGOMGOMG its _Linear Maps_ time! "One of the key definitions in linear algebra."


## Key Sequence {#key-sequence}

-   We define these new-fangled functions called [Linear Maps]({{< relref "KBhlinear_map.md" >}}), which obey \\(T(u+v) = Tu+Tv\\) and \\(T(\lambda v) = \lambda Tv\\)
-   We show that the set of all linear maps between two [vector space]({{< relref "KBhvector_space.md" >}})s \\(V,W\\) is denoted \\(\mathcal{L}(V,W)\\); and, in fact, by defining [addition]({{< relref "KBhadding.md" >}}) and [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) of [Linear Map]({{< relref "KBhlinear_map.md" >}})s in the way you'd expect, \\(\mathcal{L}(V,W)\\) is a [vector space]({{< relref "KBhvector_space.md" >}})!
    -   this also means that we can use effectively the \\(0v=0\\) proof to show that [linear maps take \\(0\\) to \\(0\\)]({{< relref "KBhlinear_map.md#linear-maps-take-0-to-0" >}})
-   we show that [Linear Map]({{< relref "KBhlinear_map.md" >}})s can be defined uniquely by [where it takes the basis of a vector space]({{< relref "KBhbasis_of_domain.md" >}}); in fact, there exists a [Linear Map]({{< relref "KBhlinear_map.md" >}}) to take the [basis]({{< relref "KBhbasis.md" >}}) _anywhere_ you want to go!
-   though this doesn't usually make sense, we call the "composition" operation on [Linear Map]({{< relref "KBhlinear_map.md" >}})s their "product" and show that this product is [associative]({{< relref "KBhassociative.md" >}}), [distributive]({{< relref "KBhdistributivity.md" >}}), and has an [identity]({{< relref "KBhidentity.md" >}})


## New Definitions {#new-definitions}

-   [Linear Map]({{< relref "KBhlinear_map.md" >}}) --- additivity (adding "distributes") and homogeneity (scalar multiplication "factors")
    -   [\\(\mathcal{L}(V,W)\\)]({{< relref "KBhlinear_map.md#mathcal-l--v-w" >}})
    -   [any polynomial map from Fn to Fm is a linear map]({{< relref "KBhlinear_map.md#any-map-from-mathbb-f-n-to-mathbb-f-m" >}})
    -   [addition and scalar multiplication on \\(\mathcal{L}(V,W)\\)]({{< relref "KBhlinear_map.md#addition-and-scalar-multiplication-on-mathcal-l--v-w" >}}); and, as a bonus, \\(\mathcal{L}(V,W)\\) a [vector space]({{< relref "KBhvector_space.md" >}})!
    -   naturally (almost by the same \\(0v=0\\) proof), [linear maps take \\(0\\) to \\(0\\)]({{< relref "KBhlinear_map.md#linear-maps-take-0-to-0" >}})
-   [Product of Linear Maps]({{< relref "KBhproduct_of_linear_maps.md" >}}) is just composition. These operations are:
    -   associative
    -   distributive
    -   has an identity


## Results and Their Proofs {#results-and-their-proofs}

-   technically a result: [any polynomial map from Fn to Fm is a linear map]({{< relref "KBhlinear_map.md#any-map-from-mathbb-f-n-to-mathbb-f-m" >}})
-   [basis of domain of linear maps uniquely determines them]({{< relref "KBhbasis_of_domain.md" >}})


## Questions for Jana {#questions-for-jana}

-   why does the second part of the [basis of domain]({{< relref "KBhbasis_of_domain.md" >}}) proof make it unique?