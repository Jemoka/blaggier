+++
title = "Robotics-Assisted Directed Evolution"
author = ["Houjun Liu"]
draft = false
+++

Make [PACE]({{< relref "KBhpace.md" >}}) better: no need to check the bacteriophage population in [PACE]({{< relref "KBhpace.md" >}}) yourself; just check it automatically! <https://github.com/dgretton/pyhamilton> <https://www.chorylab.com/>

1.  take a constant plate measurement of the culture
2.  check the growth grade
3.  use the grid of materials to test the environmental combinations; checking if certain factors worked better
4.  PyLabRobotic to automatically handle the materials

"run [PACE]({{< relref "KBhpace.md" >}}) sweeps, adjust parameters as needed to promote mutation replication"


## "cheaters" {#cheaters}

some molecules create specific increases in population without the need of any mutation at all, "cheating" the evolutionary process. We don't know why, and the lab seem to have given up on them until an in vivo test is needed.


## so actually applying the above {#so-actually-applying-the-above}

-   Given the changes in distribution of the replication process, measure schot
-   Adjust selection pressure to promote mutation