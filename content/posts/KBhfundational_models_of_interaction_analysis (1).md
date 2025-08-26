+++
title = "Foundational Models of Interaction Analysis"
author = ["Houjun Liu"]
draft = false
+++

Problem: end-to-end analysis of biological interactions at all timescales is hard; womp womp. No relationship explicitly between sequence, crystallography, md, etc. Also, some of them have _time_, some of them are frozen, etc.

Solution: use ML to glue multiple scales' analysis together, using ML to


## proteins can be encoded as hierarchies {#proteins-can-be-encoded-as-hierarchies}

1.  protein functional behavior
2.  secondary structure/primary structure
3.  amino acids
4.  sequences!

Slicing through the embedding space of [GenSLMs]({{< relref "KBhgenslms.md" >}}) can be used to identify these larger scale things from just the sequence by looking at the "general area" it exists in the latest space.