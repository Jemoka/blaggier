+++
title = "turing machine (overview)"
author = ["Houjun Liu"]
draft = false
+++

turing machine is a computational system that has a memory tape, and can go through the input multiple times; they don't have to accept or reject states, turing machines can run forever and can have loops.

For the main topic, see [turing machine]({{< relref "KBhturing_machinea.md" >}})


## decidable vs. recognizable languages {#decidable-vs-dot-recognizable-languages}

-   there are not enough Turing Machines to compute every language (so there are non-recognizable/non-decidable languages)
-   halting problem and ATM, meaning strings where Turing Machines can't decide them
    -   "the [diagonalization argument]({{< relref "KBhdiagonalization_argument.md" >}})"
    -   [mapping reduction]({{< relref "KBhmapping_reduction.md" >}})
    -   [Rice's Theorem]({{< relref "KBhrice_s_theorem.md" >}})
    -   strong reduction: higher achy of hard problems


## self-reference {#self-reference}

-   turing Machines can view and produce its own code.
-   foundations of mathematics can be shown using these systems


## [Kolomogorov Complexity]({{< relref "KBhkolomogorov_complexity.md" >}}) {#kolomogorov-complexity--kbhkolomogorov-complexity-dot-md}

see [Kolomogorov Complexity]({{< relref "KBhkolomogorov_complexity.md" >}})


## Non-deterministic Turing Machine {#non-deterministic-turing-machine}

They are not really good computational system, non-determinism doesn't add that much power by normal Turing Machine.


## Encodeable Turing Machines {#encodeable-turing-machines}

For every Turing Machine, we can encode it into a [string]({{< relref "KBhalphabet.md" >}}). We can, for instance, use a turing machine to generate another turing machine.

This also allows us to make [universal turing machine]({{< relref "KBhuniversal_turing_machine.md" >}})s---using Turing machines to simulate anotherr turing machines.
