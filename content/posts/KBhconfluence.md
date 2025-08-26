+++
title = "confluence"
author = ["Houjun Liu"]
draft = false
+++

Could a different choice of evaluation order change the **terminating result** of the program; note that this says nothing about whether or not particular evaluation order terminates.


## constituents {#constituents}


## requirements {#requirements}

A set of rewrite rules is _confluent_ if for any expression \\(E\_0\\), should \\(E\_0 \to^{\* } E\_1\\) and \\(E\_0 \to^{\* } E\_2\\), then there exists some \\(E\_3\\) such that \\(E\_1 \to^{\*} E\_3\\) and \\(E\_2 \to^{ \*} E\_3\\)

Why this instead of saying we will end up at one state after all evaluations? Suppose a particular system never terminates, we have to specify a particular confluent state because otherwise the notion of `all` is bad.


## additional information {#additional-information}


### one-step diamond property {#one-step-diamond-property}

if for all \\(A\\), \\(A\to B\\) and \\(A \to C\\) implies that there exists some \\(D\\) such that \\(B \to  D\\) and \\(C \to  D\\), this system exhibit a [one-step diamond property](#one-step-diamond-property).

If some system has [one-step diamond property](#one-step-diamond-property), then that system is confluent. This is a **sufficient but _not necessary_** property.

---

Proof: induction

go build a grid using the one step diamond property

{{< figure src="/ox-hugo/2024-10-01_09-49-32_screenshot.png" >}}


### SKI exhibits [one-step diamond property](#one-step-diamond-property) {#ski-exhibits-one-step-diamond-property--org19aa3ca}

We can't naively apply [one-step diamond property](#one-step-diamond-property).

We have to first define a new relation \\(\gg\\) for [SKI Calculus]({{< relref "KBhcombinator_calculus.md" >}}), which deals with the fact that \\(Sxyz \to (xz) (yz) \to (xz') (yz')\\) isn't one step because expanding \\(z\\) before and after results in a different number steps.

we define \\(X \gg Y\\), if...

1.  \\(X \to  Y\\) via a rewrite at the root node
2.  \\(X = A B, Y = A' B'\\) and \\(A \gg A'\\), \\(B \gg  B'\\)

we allow multiple rewrites if they are in _independent subtrees_

{{< figure src="/ox-hugo/2024-10-01_10-08-46_screenshot.png" >}}


#### Ix {#ix}

{{< figure src="/ox-hugo/2024-10-01_10-15-31_screenshot.png" >}}


#### Kxy {#kxy}

{{< figure src="/ox-hugo/2024-10-01_10-16-07_screenshot.png" >}}


#### Sxyz {#sxyz}

{{< figure src="/ox-hugo/2024-10-01_10-16-19_screenshot.png" >}}
