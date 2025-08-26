+++
title = "atoms as qubits"
author = ["Houjun Liu"]
draft = false
+++

You can use atoms as many different types of [qubits]({{< relref "KBhqubits.md" >}}).


## manipulating physical qubits {#manipulating-physical-qubits}

To make [physical qubits]({{< relref "KBhphysical_qubits.md" >}}) go to different states, we will again use something in the ancillary states. Rotating it to \\(z\\) --- leverage one lazer to make it fall; \\(rx\\), \\(ry\\), we leverage combinations of two light.


## various qubit implementations {#various-qubit-implementations}

Implementations of [physical qubits]({{< relref "KBhphysical_qubits.md" >}})

| Type                                                    | Superconductor                | Ions                 | Atoms                 |
|---------------------------------------------------------|-------------------------------|----------------------|-----------------------|
| Company                                                 | Google, IBM, Rigetti          | IonQ, Honeywell      | Atom Computing, QuEra |
| Nature                                                  | Artifical                     | Natural              | Natural               |
| Calibration                                             | Individual calibration        | Naturally calibrated | Naturally calibrated  |
| [Coherence Time]({{< relref "KBhcoherence_time.md" >}}) | Short                         | Long                 | Long                  |
| Connectivity                                            | Adjacent connectivity         | All-to-all           | More than adjacent    |
| Scalability                                             | Compatible with existing tech | Not easily scalable  | Potentially scalable  |
| Speed                                                   | Fast gates                    | Kinda fast           | Untested              |


## possible uses for qubits {#possible-uses-for-qubits}

Here are some possible uses for [physical qubits]({{< relref "KBhphysical_qubits.md" >}})

-   Traveling salesman
-   Research + simulations
-   Cryptography