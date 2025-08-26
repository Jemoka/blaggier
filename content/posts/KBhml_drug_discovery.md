+++
title = "ML COVID Drug Discovery"
author = ["Houjun Liu"]
draft = false
+++

Focus on [protease]({{< relref "KBhprotease.md" >}}): inhibition helps inhibit viral replication; and **it is conserved across most coronaviruses**; so good point to start working in drug development.

-   Take smaller binding fragments covering the binding site, and combine them together
-   Try to combine these fragments together into a molecule that fits well with the binding site

[protease]({{< relref "KBhprotease.md" >}}) inhibition is usually achieved with a covalent peptide bond, but this crowd-sourcing effort showed that


## machine-learning rapid library synthesis {#machine-learning-rapid-library-synthesis}

1.  begin with some guess for the model molecule
2.  then, use ML to perform modifications to the molecule really quickly by scanning though ("ML-prioritized rapid library synthesis") a bunch of changes to the molecule
3.  pick and repeat


## Molecular Transformer {#molecular-transformer}

THROW THE FUCKING REACTION INTO AN LLM, as WORDS

_I desire death_

So; taking reactants + reagents as input; guess the product.

as input; guess the product.


## SABER {#saber}

1.  decompose molecule into building blocks
2.  make biostesters of the building blocks
3.  change crap


## limitations {#limitations}

ML can't extrapolate into unknown search space and it could come up with bullshit; so to fix:

1.  using physics to create correct docking structures
2.  use ML to perform last mile optimization