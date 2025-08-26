+++
title = "RoseTTAFold2"
author = ["Houjun Liu"]
draft = false
+++

[RoseTTAFold2]({{< relref "KBhrosettafold2.md" >}}) is a three-track folding tool, which also handles multimer!

1.  inputs: amino acid sequence + CHEMICAL structure (WOAH! how?)
2.  "RF2 all-atom embedding"
3.  fold!

The model does really well!


## application: de-novo luciferase design {#application-de-novo-luciferase-design}

1.  come up with the correct shaped scaffolds
2.  use old [Rosetta]({{< relref "KBhrosetta.md" >}}) to jam a residue sequence into the scaffold
3.  refold


## application: [RoseTTAFold2]({{< relref "KBhrosettafold2.md" >}}) in-painting {#application-rosettafold2--kbhrosettafold2-dot-md--in-painting}

Train the model to recover the missing bits of sequence from the overall structure (i.e. training backwards), and