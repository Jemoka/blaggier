+++
title = "Self-Reference"
author = ["Houjun Liu"]
draft = false
+++

## There is a Self-Printing Turing Machine {#there-is-a-self-printing-turing-machine}


### Q {#q}

There's a [computable function]({{< relref "KBhmapping_reduction.md#computable-function" >}}) \\(q: \Sigma^{\*} \to  \Sigma ^{\*}\\) such that for every string \\(w\\), the computation \\(q(w)\\) produces the description of a Turing machine \\(P\_{w}\\) such that on every input, it spits out \\(w\\) and then accepts.


### B {#b}

For some [turing machine]({{< relref "KBhturing_machinea.md" >}}) code \\(m\\) making TM \\(M\\), the [computable function]({{< relref "KBhmapping_reduction.md#computable-function" >}}) \\(B\\) composes \\(P\_{m}\\) from above and \\(M\\) (that is, the composition of \\(P\_{m}\\) and \\(M\\) first disregards it input, prints \\(m\\), and give it to \\(M\\)).


### Self-printing Turing machine {#self-printing-turing-machine}

Consider now putting \\(B\\) through \\(B\\); we will then create a chain \\(P\_{B}\\) and then \\(B\\); \\(P\_{B}\\) on input will create the code for \\(B\\), and put it through \\(B\\), which will then make \\(P\_{B}\\) and \\(B\\) again, and so on.


## Recursion Theorem {#recursion-theorem}

For every Turing Machine, we can assume that it has access to some operation called "get your own code".

---

For every Turing Machine \\(T\\) computing a function \\(t: \Sigma^{\*} \times \Sigma^{\*} \to \Sigma^{\* }\\), there is a Turing machine \\(R\\) computing a function \\(r: \Sigma^{ \*} \to \Sigma^{\*}\\) such that for every string \\(w\\), we have \\(r(w) = t(R,w)\\).

That is, for every truing machine \\(T\\), there is another Turing Machine which can compute \\(T\\) where one of its slots is the source code for the \\(T\\) computation (i.e. \\(R\\)).


### ATM is undecidable {#atm-is-undecidable}

Yet another proof. Woah. Smh.

Assume \\(H\\) decides \\(A\_{TM}\\); Construct a machine \\(B\\) such that on input \\(w\\), we:

1.  obtain its own description \\(B\\) as in [Recursion Theorem](#recursion-theorem)
2.  runs \\(H(B,w)\\) and flips the output

i.e. running \\(B\\) on \\(w\\) will return the opposite of \\(B\\) according to ATM.

"i.e. there is free will" (jk)---no machine can predict the output of all others.
