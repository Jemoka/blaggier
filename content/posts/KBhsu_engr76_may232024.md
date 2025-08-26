+++
title = "SU-ENGR76 MAY232024"
author = ["Houjun Liu"]
draft = false
+++

## Convolutional Code {#convolutional-code}

A [Convolutional Code](#convolutional-code), at each time \\(j\\), takes bit \\(b\_{j}\\) and output two bits \\(p\_{2j-1}\\), \\(p\_{2j}\\), by using \\(b\_{j}\\) and the previous two its \\(b\_{j-1}\\) and \\(b\_{j-2}\\).


### Working Example {#working-example}

Consider that if you have \\(k\\) bits to communicate to the receiver:

\begin{equation}
b\_1, b\_2, \dots, b\_{k}
\end{equation}

Codewords/Output sequence:

\begin{equation}
p\_1,  p\_{2}, \dots
\end{equation}

Let we have some sequence of \\(k\\) input bits

\begin{equation}
j = 1, \dots, k
\end{equation}

then, for every input bit, we generate two output bits:

\begin{equation}
p\_{2j-1} = b\_{j} \oplus b\_{j-1} \oplus b\_{j-2}
\end{equation}

\begin{equation}
p\_{2j} = b\_{j} \oplus b\_{j-2}
\end{equation}

if we are at \\(j=1\\), then we assume that \\(b\_{j-1} = b\_{j-2} = 0\\).


### Shift Register {#shift-register}

So you can encode this in a streaming fashion, and shift them off as you go


### FST {#fst}

The [Convolutional Code](#convolutional-code), then, is essentially a **finite state machine**: whereby the last two bits are essentially the "state" of the machine used for the output. \\((b\_{j-1}, b\_{j-2})\\). The input would be \\(b\_{j}\\), and the output is \\(p\_{2j-1}, p\_{2j}\\).

During each action \\(b\_{j}\\), we essentially perform the "shift" operation.

Therefore, you can draw it in terms of a finite state diagram.

{{< figure src="/ox-hugo/2024-05-23_14-20-55_screenshot.png" >}}


### Trellis {#trellis}

Now, consider rolling out finite state machine over time: make a grid of \\(j\\) on the x axis, and state on y axis. Then, you can trace possible lines connecting everything.

We can encode any encoding process as a **PATH** is the rollout trellis.

This could also help us perform  decoding, because we can spot which edge our scheme traveled down.


### Viterbi Decoding {#viterbi-decoding}

bottom-up DP

1.  go through your edges, calculating [Hamming Distance]({{< relref "KBhsu_engr76_may142024.md#hamming-distance" >}}) of each edge of your trellis' decoding and the one you recieved; replace each edge with that distance
2.  edit distance minimize lol through the path to solve (i.e. run dijikstra on these edges)
