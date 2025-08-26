+++
title = "Church-Turing thesis"
author = ["Houjun Liu"]
draft = false
+++

Anything that can be computed by a reasonable model of computation can also be computed by a [turing machine]({{< relref "KBhturing_machinea.md" >}}).

"Everyone's intuitive notion of algorithms is a Turing-machine"

Note that this is **not a theorem**: its just a scientific hypothesis because we have no formalization of the "intuitive notion".


## multi-tape machines {#multi-tape-machines}

Consider:

{{< figure src="/ox-hugo/2024-10-21_19-58-40_screenshot.png" >}}

would this give us something stronger? as in, we modify our transition function as simultaneously operating on all tapes

\begin{equation}
\delta : Q \times \Gamma^{k} \times \qty{L, R}^{k}
\end{equation}

theorem: every multi-tape TM is actually a single-tape TM.

-   lay your three inputs into your tape, separated by a sharp
-   duplicate your symbol set, each of which to include something which would mark "our head is here"
-   we simply now just run one move on each tape, and moving all the way to the left
