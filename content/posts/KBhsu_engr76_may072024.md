+++
title = "SU-ENGR76 MAY072024"
author = ["Houjun Liu"]
draft = false
+++

Welcome to Unit 2.


## Fundamental Problem of Communication {#fundamental-problem-of-communication}

"The fundamental task of communication is that of reproducing at one point either exactly or approximately a message selected at another point"

Now: all communication signals are subject to some noise, so we need to design systems to responds to them.

Most designs center around changing transmitter and receiver, sometimes you can change the channel but often not.


## communication {#communication}


### analog communication {#analog-communication}

1.  convert sound waves into continuous-time electrical signal \\(s(t)\\)
2.  apply \\(s(t)\\) directly to the voltage of my channel
3.  on the other end, decode \\(s'(t)\\), a noisy version of the original signal
4.  speak \\(s'(t)\\)


### digital communication {#digital-communication}

1.  convert sound waves into continuous-time electrical signal \\(s(t)\\)
2.  sample \\(s(t)\\) at a known sampling rate
3.  quantize the results to a fixed number of levels, turning them into discrete symbols
4.  use [Huffman Coding]({{< relref "KBhhuffman_coding.md" >}}) to turn them into bits
5.  generate a continuous-time signal of voltage using the bits
6.  communicate this resulting signal over the cable
7.  get the noisy result signal and recovering from bits from it
8.  decode that by using interpolation + codebook
9.  speak data

this format allows us to generalize all communication as taking on type (Bits =&gt; Bits), i.e. we only have to design Tx and Rx. This could be much more flexible than [Analog Communication]({{< relref "KBhanalog_vs_digital_signal.md#analog-communication" >}}).

communicating bits, too, can allow for control of distortion because it bounds the codomain of the output signal into bits which one cloud filter out, unlike [Analog Communication]({{< relref "KBhanalog_vs_digital_signal.md#analog-communication" >}}).

Tx and Rx maps **boolean [signal]({{< relref "KBhsu_engr76_apr162024.md#signal" >}})** and map it into something that can be transmitted across a channel, meaning it usually converts binary symbols into continuous time signal to be played back.


## digital encoding {#digital-encoding}

"how do we map a sequence of bits 0100100.... and map it to a continuous time signal \\(X(t)\\)?"


### [sinc digital encoding]({{< relref "KBhsu_engr76_may092024.md#sinc-digital-encoding" >}}) {#sinc-digital-encoding--kbhsu-engr76-may092024-dot-md}

see [sinc digital encoding]({{< relref "KBhsu_engr76_may092024.md#sinc-digital-encoding" >}})


### on-off keying {#on-off-keying}

in brief: its like [sinc digital encoding]({{< relref "KBhsu_engr76_may092024.md#sinc-digital-encoding" >}}), but we interpolate using the indicator function:

\begin{equation}
X(t) = \sum\_{m=1}^{\infty} X[m] F \qty( \frac{t-mT}{T})
\end{equation}

where:

\begin{equation}
F = \begin{cases}
1, |x| < \frac{1}{2} \\\\
0
\end{cases}
\end{equation}

The spectrum of this type of signal would be:

\begin{equation}
\left| \text{sinc} \left (\frac{1}{T} \pi x \right) \right|
\end{equation}

We consider this signal "approximately bandwidth limited" to roughly \\(\frac{1}{T}\\), which is usually fine. The other concern with this is that, because unlike [sinc function]({{< relref "KBhsinc_function.md#sinc-function" >}}) where you can sample for twice the function bandwidth, you have to sample at the function bandwith meaning you communicate less info. of course, you can change the voltage for your signal at each \\(X[m]\\) (i.e. "pulse-amplitude modulation") to encode your signal to speed up communication.

---

choose some voltage \\(V\\). Assign 1-bit voltage \\(V\\), assign 0-bit voltage \\(0\\), and simply play a voltage for a set amount of time \\(t\\) and move on to the next symbol for encoding.

To decode, we sample midpoints, shifted forward by \\(\frac{T}{2}\\).

Two parameters:

-   \\(V\\): the voltage for the active signal
-   \\(T\\): the time to communicate each symbol

Each symbol \\(T\\), if held for a smaller amount of time, communicating would take a smaller amount of time.

However, if too small, the bandwidth of the communication will increase (it will spike faster)---this is bad because...

1.  channels can be frequency-selective (i.e. too high frequencies may not have the same propagation schemes, such as a speaker/microphones)
2.  channels may have frequency restriction (FCC may give you a certain band, that is, you may only be licensed to communicate a band)
3.  you may not be able to sample fast enough


#### High-Passing {#high-passing}

because you are almost never allowed to just give [Baseband Signal]({{< relref "KBhsu_engr76_may022024.md#passband-signal" >}}), we also need to be able to communicate these bits with a [Bandwidth]({{< relref "KBhsu_engr76_apr252024.md#bandwidth" >}}) limit both below and above.
