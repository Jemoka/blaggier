+++
title = "there are non-recognizable languages"
author = ["Houjun Liu"]
draft = false
+++

Assuming the [Church-Turing thesis]({{< relref "KBhchurch_turing_thesis.md" >}}) holds, there are problems that no computing device can solve.

We can prove this using a counting argument: there are no [surjective]({{< relref "KBhsurjectivity.md" >}}) function from the set of all Turing Machines to the set of all languages over \\(\qty {0,1}\\).

That is: every mapping from \\(TM\\) to languages fails to cover some language.


## proof {#proof}

Suppose for contradiction all languages are recognizable, then for all \\(L\\), there is as truing machine \\(M\\) recognizing \\(L\\). Meaning, there's some surjection \\(R: TM \to L\\).

Recall, [Turing Machine Encoding]({{< relref "KBhuniversal_turing_machine.md#turing-machine-encoding" >}}) exists, so \\(TM \subseteq \qty {0,1}^{\* }\\); call this contained in \\(M\\). Languages over \\(\qty {0,1}\\) are **SETs** of strings over zeros and ones---notice, this is the POWER SET of \\(M\\), so its \\(2^{M}\\).

Now, [no surjection for power sets](#no-surjection-for-power-sets), so there is no such surjection \\(R\\). We have contradiction.


## no surjection for power sets {#no-surjection-for-power-sets}

Let \\(L\\) be a set and \\(2^{L}\\) be its power set. Meaning: no matter what the set \\(L\\) is, the power set \\(2^{L}\\) always has strictly larger cardinality.


### one proof {#one-proof}

Let \\(f: L \to 2^{L}\\); suppose \\(S = \qty {x \in L \mid x \not \in f(x)} \in 2^{L}\\) (that is, the set \\(S\\) contains the \\(x \in L\\) which isn't in the range of \\(f(x)\\).

For all \\(x \in L\\): if \\(x \in S\\), then \\(x \not \in f(x)\\) (by definition); if \\(x \not \in S\\), then \\(x \in f(x)\\). Therefore, \\(S \neq f(x)\\). In particular this means that \\(f\\) is not surjective because it doesn't map anything to the set \\(S \in 2^{L}\\).


### another proof {#another-proof}

{{< figure src="/ox-hugo/2024-10-21_21-45-56_screenshot.png" >}}


## Russell's Paradox {#russell-s-paradox}

Similar idea as here: suppose \\(X\\) is the universe of all possible sets.

Frege: Let \\(f: X \to \qty {0,1}\\), then \\(\qty {S \in X \mid f(S) = 1}\\) is a set (this makes sense, \\(f\\) is just the membership predicate of the set).

Define: \\(F = \qty {S \in X | S \not \in S}\\) --- because being in \\(S\\) is a predicate you can track.

Suppose now \\(F \in F\\), then, by the definition of \\(F\\), \\(F \not \in F\\). Contradiction --- this logical system is inconsistent.

This type of argument is called a [Diagonalization Arguments](#russell-s-paradox).
