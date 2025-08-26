+++
title = "SU-CS224N MAY092024"
author = ["Houjun Liu"]
draft = false
+++

## Floating Point {#floating-point}

4 bytes

\begin{equation}
(-1)^{B} + e^{E-127} \times \qty(1 + \sum\_{i=1}^{23} b\_{23-i}2^{-i})
\end{equation}

usually \\(E\\) is a 8 bytes, and 23 digits of \\(b\\).

With more \\(E\\), we will have more range, with more \\(b\\), we will have more precision.


## Mixed Precision Training {#mixed-precision-training}

1.  copy the model in FP32
2.  Run forward pass in FP16
3.  Scale loss to be large enough to not be rounded away
4.  Compute gradients in FP16
5.  Convert the gradients onto FP32
6.  Scale the gradients down
7.  apply to the model


### BFloat16 {#bfloat16}

To not need to scale, we can use a scheme that has less precision but the same amount of dynamic range (i.e. allocate the same \\(E\\), chop off \\(b\\)) ---no need to scale, just have more dynamic range.


## Distributed Data Parallel {#distributed-data-parallel}

-   every GPU has a copy of the model
-   each GPU


### all-reduce {#all-reduce}

reduce each copy of the weights down


## Deepspeed Zero {#deepspeed-zero}


### reduce-scatter {#reduce-scatter}

squish down and send each part tot the right GPU


### all gather {#all-gather}

-   send eveything over everybody else


### Stage 1 {#stage-1}

We cache a slice of the optimizer state on each GPU.


### Stage 2 {#stage-2}

-   perform a backwards pass
-   at each layer, compute gradient
-   look up who in the cluster is responsible for that layer


### Stage 3 {#stage-3}

-   divide the model parameters into FSDP units
-   shard each unit across multiple GPUs
-   run forward pass
-   run backward pass
-   each GPU updates its own shard using the full gradient from earlier

(unlike stages 1 and 2, you need to stream in your parameters---more communication overhead!)


## Lessons {#lessons}

-   always use mix precision training
-   always use bfloat16


## PEFT {#peft}

See [PEFT]({{< relref "KBhpeft.md" >}})
