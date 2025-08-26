+++
title = "RFDiffusion"
author = ["Houjun Liu"]
draft = false
+++

1.  Starting with random residue noise: coordinates + backbones
2.  Diffusion happens: train like diffusion, with the goal of increasing binding affinities
3.  Eventually resolves to valid protein structures given the binding environments

Basically, start with only the desired substraight, and the diffuse the sequence around that small sequence with the goal of higher affinity binding: i.e. allow only the binding site to stay and regenerating the rest.

[RFDiffusion]({{< relref "KBhrfdiffusion.md" >}}) is available starting THIS WEEK!


## advantages over [RoseTTAFold2]({{< relref "KBhrosettafold2.md" >}}) inpainting {#advantages-over-rosettafold2--kbhrosettafold2-dot-md--inpainting}

The starting point is random for diffusion, so if you do it multiple times you will get new results instead of the same thing.