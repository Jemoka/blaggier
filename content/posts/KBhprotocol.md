+++
title = "protocol"
author = ["Houjun Liu"]
draft = false
+++

a [protocol]({{< relref "KBhprotocol.md" >}}) for a function \\(f\\) is a pair of functions \\(A,B:\qty {0,1}^{\*} \times \qty {0,1}\* \to [0,1,STOP]\\) whereby:

-   on input \\((x,y)\\), we initialize round counter \\(r=0\\), and initial (empty) message \\(b\_0 = \epsilon\\)
-   while \\(b\_{r} \neq STOP\\)
    -   \\(r++\\)
    -   if \\(r\\) is odd, then Alice sends \\(b\_{r} = A\qty(x, b\_1 \cdots b\_{r-1})\\)
    -   else Bob sends \\(b\_{r} = B\qty(y, b\_{1} ... b\_{r-1})\\)
-   our function output \\(b\_{r-1}\\), and we call \\(r-1\\) the number of rounds


## protocol cost {#protocol-cost}

the cost of a protocol \\(P\\) for \\(f\\) on \\(n\\) bit strings is:

\begin{equation}
\max\_{x,y \in \qty {0,1}^{n}}  \text{number of rounds in P required to compute $f(x,y)$}
\end{equation}

i.e: what is the input that could make running this protocol the longest? (remember we call \\(r-1\\) the number of rounds)


## Communication Complexity {#communication-complexity}

the [Communication Complexity](#communication-complexity) of \\(f\\) on \\(n\\) bit strings is the minimum [protocol cost](#protocol-cost) over all possible protocols for \\(f\\) on n bit strings.

the range of communication complexity is $[2, 2n]$---the former because each party has to say something to communicate, the latter because...


### trivial protocol {#trivial-protocol}

there is always a "trivial" protocol: Alice can always just send her the bits of her \\(x\\) in the odd rounds, and Bob can send his bits of his \\(y\\) in the even rounds, and after \\(2n\\) we just communicated the input entirely and tada the end and they can compute \\(f(x,y)\\) and be done.


## examples {#examples}


### parity {#parity}

Consider:

\begin{equation}
PARITY(x,y) = \qty(\sum\_{i}^{}x\_{i} + \sum\_{i}^{} y\_{i}) \ \text{mod}\ 2
\end{equation}

-   Alice sends \\(b\_1 = \qty(\sum\_{i}^{}x\_{i} \ \text{mod}\ 2)\\)
-   Bob send \\(b\_2 = \qty(b\_{1} + \sum\_{i}^{}y\_{i}\ \text{mod}\ 2)\\)

the end! because mods can distribute to each part of the sum. hence, the [Communication Complexity](#communication-complexity) of PARITY is 2---this is a minimal communication (2 round communication)


### majority {#majority}

Consider:

what is the most frequent bit in \\(xy\\)?

-   Alice sends \\(N\_{x}\\), the number of \\(1\\) in \\(x\\)
-   Bob computes \\(N\_{y}\\), the number of \\(1\\) in \\(y\\)
    -   Bob sends \\(1\\) IFF \\(N\_{x}+N\_{y}\\) is greater than \\(\frac{\qty(|x|+|y|)}{2} = n\\)

hence, we need to send at least \\(\log\_{2}(n)\\) bits where Alice is sending over the number of $1$s.


### equals {#equals}

\begin{equation}
\text{EQUALS}(x,y) = 1 \text{ IFF } x =y
\end{equation}


#### complexity of EQUALS {#complexity-of-equals}

The communication complexity of EQUALS is \\(\theta (n)\\). Every protocol for EQUALS needs \\(\geq n\\) bits of communication. This also results in that every streaming algorithm for EQUALS needs \\(cn\\) bits of memory, for some constant \\(c>0\\).

Let's define the _communication pattern_ to be the sequence of bits that are set. Assume for the sake of contradiction that there is a protocol for which communicating EQUALS only takes \\(\leq  n-1\\) bits.

That means that there's only \\(2^{n-1}\\) possible communication patterns to communicate this protocol. By pigeonhole, there's something of length \\(n\\) exactly for which on \\((x,x)\\) and \\((y,y)\\) uses the same communication pattern when \\(x \neq y\\) (because there are \\(2^{n}\\) such pairs \\((x,x)\\), so it should produce correspondingly \\(2^{n}\\) such patterns).

Notice! This means that the communication pattern of \\((x,y)\\) is also going to be the same (we induce this by noticing that each turn, if the pattern is the same, each party is going to see the same inputs and will return the same outputs.)

This is contradiction because the protocol outputs the same bit for both \\((y,y)\\) and \\((x,y)\\), which is not good.

<!--list-separator-->

-  getting better results with randomized protocols

    general idea: after applying some error correcting code, a single-bit error will result in errors in many-many bits; we then can send just a few random bits and then be able to be fairly sure that the underlying strings are roughly the same.

    1.  Alice picks a random prime number
    2.  She sends \\(p\\) to Bob, and sends \\(x \ \text{mod}\ p\\) to bob \\(O(\log n)\\) bits to send
    3.  bob checks whether \\(y = x\ \text{mod}\ p\\)


## [protocol]({{< relref "KBhprotocol.md" >}})s, [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}}), [Streaming Algorithms]({{< relref "KBhstreaming_algorithms.md" >}}), [Communication Complexity](#communication-complexity) {#protocol--kbhprotocol-dot-md--s-dfa--kbhdeterministic-finite-automata-dot-md--streaming-algorithms--kbhstreaming-algorithms-dot-md--communication-complexity--org4ac384b}

Let \\(L \subseteq \qty{0,1}^{\*}\\), let \\(f\_{L}: \qty {0,1}^{\*} \times \qty {0,1}^{\*} \to  \qty {0,1}\\)

for \\(x,y\\) with \\(|x| = |y|\\) written as:

\begin{equation}
f\_{L}(x,y) = 1 \Leftrightarrow xy \in L
\end{equation}

for instance, if we had a language:

\begin{equation}
L = \qty { x x \mid x \in {0,1}^{\*}}
\end{equation}

this is equal to the function EQUALS above.


### bounded [Communication Complexity](#communication-complexity) {#bounded-communication-complexity--org4ac384b}

if \\(L\\) has a [Streaming Algorithms]({{< relref "KBhstreaming_algorithms.md" >}}) using \\(\leq s\\) bits of space, then the communication complexity of \\(f\_{L}\\) is at most \\(O(s)\\).


#### Proof {#proof}

Alice can run the streaming algorithm \\(A\\) on \\(x\\); Alice sends the memory of \\(A\\) after doing that: this uses \\(s\\) bits of space. And then Bob loads the memory, and runs it from there.

If accept, then return a \\(1\\); otherwise, no.


#### Corollary {#corollary}

For every regular language, the communication complexity of \\(f\_{L}\\) is \\(O(1)\\). Because we can just send our state ID over.
