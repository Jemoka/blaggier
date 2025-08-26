+++
title = "SU-ENGR76 APR092024"
author = ["Houjun Liu"]
draft = false
+++

## joint entropy {#joint-entropy}

Suppose we have two [information source]({{< relref "KBhsu_engr76_apr042024.md#information-source" >}})s; [joint entropy](#joint-entropy) is the measure of joint surprise when we are defined over more than one [information source]({{< relref "KBhsu_engr76_apr042024.md#information-source" >}}).

For a pair of random variables, \\(X, Y\\), their [joint entropy](#joint-entropy) is defined over a new random variable of \\(X \cup Y\\).

\begin{equation}
H(x,y) = \sum\_{i \in X}^{} \sum\_{j \in Y}^{} P(X=i, Y=j) \log\_{2} \qty(\frac{1}{P(X=i, Y=j)})
\end{equation}

If \\(X \perp Y\\), we can write \\(H(x,y) = H(x)+H(y)\\) (shown below.) Further, we have for all \\(X\\) and \\(Y\\), \\(H(x,y) \leq  H(x) + H(y)\\) because you can never be more surprised than if you got two completely independent pieces of information.


### joint entropy of independent events {#joint-entropy-of-independent-events}

Recall [independence]({{< relref "KBhprobability.md#independence" >}}); so if \\(X \perp Y\\), we can write \\(P(X=i, Y=j) = P(X=i) \cdot P(Y=j)\\) and plug in and chug.

Now, plugging that in and applying [log laws]({{< relref "KBhlog_laws.md" >}}):

\begin{align}
H(x,y) &= \sum\_{i \in X}^{} \sum\_{j \in Y}^{} P(X=i)P(Y=j) \qty(\log\_{2} \frac{1}{P(X=i)}+\log\_{2} \frac{1}{P(Y=j)})  \\\\
&= \sum\_{i \in X}^{} \sum\_{j \in Y}^{} P(X=i)P(Y=j) \log\_{2} \frac{1}{P(X=i)}+ \sum\_{i \in X}^{} \sum\_{j \in Y}^{} P(X=i)P(Y=j) \log\_{2} \frac{1}{P(Y=j)}   \\\\
&= \sum\_{i \in X}^{} P(X=i)\log\_{2}\frac{1}{P(X=i)}\sum\_{j \in Y}^{} P(Y=j)  + \sum\_{i \in X}^{}P(X=i) \sum\_{j \in Y}^{} P(Y=j) \log\_{2} \frac{1}{P(Y=j)}   \\\\
&= \sum\_{i \in X}^{} P(X=i)\log\_{2}\frac{1}{P(X=i)} 1  + 1 \sum\_{j \in Y}^{} P(Y=j) \log\_{2} \frac{1}{P(Y=j)}  \\\\
&= H(X) + H(Y)
\end{align}

Where we can factor the \\(P(Y=j)\\) out and the \\(P(X=j)\\) out on the left and right sides because they don't depend on the other argument in the summation. After which, recall \\(\sum\_{k}^{}P(K=k)=1\\), so each factored out term reduces to \\(1\\); multiplying in, we result in the [entropy]({{< relref "KBhsu_engr76_apr042024.md#information-value" >}}) expressions for each random variable.


## Source Coding {#source-coding}

A (source) code is a mapping from symbol set \\(X\\) to the set of binary sequence \\(c(x)\\) which corresponds to each \\(x \in X\\).

For [lossless compression]({{< relref "KBhlossless_compression.md" >}}), we need a [uniquely decodeable](#uniquely-decodeable) encoding.


### non-singular code {#non-singular-code}

for all \\(x, x' \in X\\) where \\(x \neq x'\\), a [non-singular code](#non-singular-code) assigns \\(c(x) \neq c(x')\\).

Though [lossless compression]({{< relref "KBhlossless_compression.md" >}}) requires [non-singular code](#non-singular-code), having it alone does **NOT** guarantee lossless encoding. You will want an [uniquely decodeable](#uniquely-decodeable) encoding instead. For instance:

| X | Encoding |
|---|----------|
| A | 0        |
| T | 1        |
| C | 10       |
| G | 11       |

Is a [non-singular code](#non-singular-code), but 0110 could be ATTA or AGA or ...


### uniquely decodeable {#uniquely-decodeable}

a sequence being [uniquely decodeable](#uniquely-decodeable) means that any possible source **sequence** \\(x\_1, ..., x\_{n}\\) is mapped into a unique binary representation.

One simple scheme would be the [Prefix-Free](#prefix-free) scheme, which is [uniquely decodeable](#uniquely-decodeable) and [instantaneously decodable](#instantaneously-decodable). Not all [uniquely decodeable](#uniquely-decodeable) codes need to be [Prefix-Free](#prefix-free).


#### every [uniquely decodeable](#uniquely-decodeable) sequence is a [non-singular code](#non-singular-code) {#every-uniquely-decodeable--orgdd46e21--sequence-is-a-non-singular-code--org803d6f6}

Suppose an encoding is [uniquely decodeable](#uniquely-decodeable). We desire that it is also [non-singular code](#non-singular-code). Consider sequences of length 1, each with one symbol in it. Because the encoding is [uniquely decodeable](#uniquely-decodeable), each encoding of these sequences is unique. Now we can assign that sequence encoding to the corresponding symbol.


### instantaneously decodable {#instantaneously-decodable}

We do not need to perform lookaheads to decode the sequence; once we see a valid code we can decode it without lookahead.


### Prefix-Free {#prefix-free}

A [Prefix-Free](#prefix-free) codes is a coding scheme for which no codeword is a prefix of another codeword.


#### any prefix free code for a source has at least entropy length {#any-prefix-free-code-for-a-source-has-at-least-entropy-length}

any [Prefix-Free](#prefix-free) code for some source \\(X\\) satisfies that \\(\bar{l} \geq H(x)\\), where \\(\bar{l}\\) is the [Average Codeword Length](#average-codeword-length) of the resulting code and \\(H(x)\\) is the entropy of the source \\(X\\).


#### prefix-free code has the same codeword lengths as any code {#prefix-free-code-has-the-same-codeword-lengths-as-any-code}

If there exists a [uniquely decodeable](#uniquely-decodeable) code with codeword lengths \\(\\{l\_1, ..., l\_{n}\\}\\) from some source \\(X\\); then there exists a [Prefix-Free](#prefix-free) version of this code which has exactly the same codeword lengths \\(\\{l\_1, ..., l\_{n}\\}\\) --- so really we only need to generate the most optimal [Prefix-Free](#prefix-free) code for us to generate a good code.


### Average Codeword Length {#average-codeword-length}

For a specific code, we have a quality \\(\bar{\ell}\\). This is a quantity which is a probability-scaled average number of bits to encode each source symbol.

Consider, then, this code:

| X | Probability | Code |
|---|-------------|------|
| A | 1/2         | 0    |
| T | 1/4         | 10   |
| C | 1/8         | 110  |
| G | 1/8         | 111  |

Our average codeword length her, then is:

\begin{equation}
\frac{1}{2} + \frac{1}{4} \cdot 2 + \frac{1}{8} \cdot 3 + \frac{1}{8} \cdot 3 = 1.75
\end{equation}

which would be a bit better than using 2 bits to encode everything.


### Motivation {#motivation}

"communication" needs to happen by formalizing your data into a sequence of symbols \\(x\_1, x\_2, \dots\\), where \\(x \in X\\) in some symbol set. For instance, an image is a long sequence of pixels; words is a long sequence of letters, etc.

After which, we will need to convert our sequence of symbols into bits using some encoder; then, we will need some decoder to convert it back.


### Example {#example}

A DNA is a piece of information with four symbols: \\(X \in \\{A, T, C, G\\}\\).

The most trivial encoding could just be assign a 2-bit sequence to each symbol:

| X | Encoding ("Code Words") |
|---|-------------------------|
| A | 00                      |
| T | 01                      |
| C | 10                      |
| G | 11                      |

Our symbol/encoding mapping has to be non-singular; otherwise, we will be very sad.

How do we improve this code?


#### Counting by Frequency {#counting-by-frequency}

Suppose we got some empirical frequencies of the occurances:

| X | Probability |
|---|-------------|
| A | 1/2         |
| T | 1/4         |
| C | 1/8         |
| G | 1/8         |

We will encode each symbol by a number of bits inversely proportional to the frequency of its occurrence. So:

| X | Probability | Code |
|---|-------------|------|
| A | 1/2         | 0    |
| T | 1/4         | 10   |
| C | 1/8         | 110  |
| G | 1/8         | 111  |

This is actually [uniquely decodeable](#uniquely-decodeable) because its [Prefix-Free](#prefix-free).


## Block Coding {#block-coding}

Let's encode a block of symbols together!

Say we have a sequence:

\begin{equation}
X\_1, \dots, X\_{n}
\end{equation}

assuming all \\(X\_{j}\\) are independent of each other. We can devise a block code by coming with a code to encode pair of symbols together.

To calculate the [Average Codeword Length](#average-codeword-length), we have to now **divide** by the number of symbols each block includes.


### Shannon's Source-Coding Theorem {#shannon-s-source-coding-theorem}

the [entropy]({{< relref "KBhsu_engr76_apr042024.md#information-value" >}}) \\(H(X)\\) of an [information source]({{< relref "KBhsu_engr76_apr042024.md#information-source" >}}) \\(X\\) equals the minimum number of bits per source symbol necessary to encode [IID]({{< relref "KBhindependently_and_identically_distributed.md" >}}) sequences from that source.

Meaning: therefore, [entropy]({{< relref "KBhsu_engr76_apr042024.md#information-value" >}}) is the **limit**---the minimum [Average Codeword Length](#average-codeword-length)---of lossless information communication.

For a [Block Coding](#block-coding) scheme with block size \\(n\\), we have:

\begin{equation}
H(X\_j) \leq \frac{\bar{\ell}}{n} \leq H(X\_j) + \frac{1}{n}
\end{equation}


#### Entropy Rate of the Source {#entropy-rate-of-the-source}

An alternate formulation, whenever we are not drawing IID \\(X\_{j}\\), is that:

\begin{equation}
\lim\_{n \to \infty} \frac{H(X\_1, \dots, X\_{n})}{n} = \frac{\bar{\ell}\_{n}}{n}
\end{equation}

which is the average number of bits per symbol. This is call the "[Entropy Rate of the Source](#entropy-rate-of-the-source)". Most things in the world is not an [IID]({{< relref "KBhindependently_and_identically_distributed.md" >}}) sequence, so this makes sense.


#### Proof Sketch {#proof-sketch}

Assuming we have [IID]({{< relref "KBhindependently_and_identically_distributed.md" >}}) sequence of symbols \\(x\_1, x\_2, \ldots\\), suppose we applied the [Huffman Coding]({{< relref "KBhhuffman_coding.md" >}}) scheme with [Block Coding](#block-coding) block size \\(n\\). Recall that [Huffman Coding is Bounded]({{< relref "KBhhuffman_coding.md#huffman-coding-is-bounded" >}}), so our new bound for a block would be:

\begin{equation}
H(X\_1, \dots, X\_{n}) \leq \bar{\ell} \leq H(X\_1, \dots, X\_{n}) +1
\end{equation}

Recall now that [joint entropy of independent events](#joint-entropy-of-independent-events) is the sum, so we get:

\begin{equation}
\sum\_{j} H(X\_j) \leq \bar{\ell} \leq 1+ \sum\_{j} H(X\_j)
\end{equation}

For [IID]({{< relref "KBhindependently_and_identically_distributed.md" >}}) sequences, then, the sum is just multiplication by \\(n\\):

\begin{equation}
n H(X\_j) \leq \bar{\ell} \leq 1+ n H(X\_j)
\end{equation}

dividing by \\(n\\):

\begin{equation}
H(X\_j) \leq \frac{\bar{\ell}}{n} \leq H(X\_j) + \frac{1}{n}
\end{equation}

(now we are tracking per symbol because we average our large blocked codeword length over the block size number of symbols)

Now, this says that [Block Coding](#block-coding) gets more efficient with larger block size. HOWEVER! this is impractical because the number of blocks scales exponentially based on \\(M^{n}\\) for \\(M\\) instantiations of each symbol.
