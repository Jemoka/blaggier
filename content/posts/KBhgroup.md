+++
title = "group"
author = ["Houjun Liu"]
draft = false
+++

## components {#components}

-   a set of constituent [object]({{< relref "KBhobjects.md" >}})s
-   an [operation]({{< relref "KBhoperation.md" >}})


## requirements for group {#requirements-for-group}

-   [closed]({{< relref "KBhclosed.md" >}}): if \\(a,b \in G\\), then \\(a \cdot b \in G\\)
-   existence of [identity]({{< relref "KBhidentity.md" >}}): there is \\(e \in G\\) such that \\(e\cdot a= a\cdot e = a\\), for all \\(a \in G\\)
-   existence of [inverses]({{< relref "KBhinverses.md" >}}): there is \\(b \in G\\) for all \\(a \in G\\) such that \\(a\cdot b = b\cdot a = e\\)
-   [associative]({{< relref "KBhassociative.md" >}}): \\((a\cdot b)\cdot c = a\cdot (b\cdot c)\\) for all \\(a,b,c \in G\\)


## additional information {#additional-information}

[identity]({{< relref "KBhidentity.md" >}}) in [group]({{< relref "KBhgroup.md" >}}) [commutates]({{< relref "KBhcommutivity.md" >}}) with everything (which is the only [commutattion]({{< relref "KBhcommutivity.md" >}}) in groups


### Unique identities and inverses {#unique-identities-and-inverses}

-   the [identity]({{< relref "KBhidentity.md" >}}) is unique in a group (similar idea as [additive identity is unique in a vector space]({{< relref "KBhadditive_identity_is_unique_in_a_vector_space.md" >}}))
-   for each \\(a \in G\\), its inverse in unique (similar ideas as [additive inverse is unique in a vector space]({{< relref "KBhadditive_inverse_is_unique_in_a_vector_space.md" >}}))


### cancellation policies {#cancellation-policies}

if \\(a,b,c \in G\\), \\(ab = ac \implies b = c\\) ([left cancellation]({{< relref "KBhgroup.md" >}}))

\\(ba = ca \implies b = c\\) ([right cancellation]({{< relref "KBhgroup.md" >}}))


### sock-shoes property {#sock-shoes-property}

if \\(a,b \in G\\), then \\((ab)^{-1} = b^{-1}a^{-1}\\)
