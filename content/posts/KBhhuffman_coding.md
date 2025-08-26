+++
title = "Huffman Coding"
author = ["Houjun Liu"]
draft = false
+++

The [Huffman Coding]({{< relref "KBhhuffman_coding.md" >}}) scheme is a coding scheme which gives the **best [Prefix-Free]({{< relref "KBhsu_engr76_apr092024.md#prefix-free" >}}) code** (with the smallest [Average Codeword Length]({{< relref "KBhsu_engr76_apr092024.md#average-codeword-length" >}})) for any source with any arbitrary distribution.


## Huffman Coding is Bounded {#huffman-coding-is-bounded}

the [Huffman Coding]({{< relref "KBhhuffman_coding.md" >}}) has the property that:

\begin{equation}
\bar{l} \leq H(x) +1
\end{equation}

So, recall that [any prefix free code for a source has at least entropy length]({{< relref "KBhsu_engr76_apr092024.md#any-prefix-free-code-for-a-source-has-at-least-entropy-length" >}}); this gives:

\begin{equation}
H(x) \leq  \bar{\ell} \leq H(x)+1
\end{equation}

for source \\(X\\), and entropy of \\(X\\) given by \\(H(X)\\), and a [Average Codeword Length]({{< relref "KBhsu_engr76_apr092024.md#average-codeword-length" >}}) returned by [Huffman Coding]({{< relref "KBhhuffman_coding.md" >}}) \\(\bar{\ell}\\).


## Example {#example}

Suppose we have a distribution of a source sequence:

| X | P(x) |
|---|------|
| A | 1/2  |
| T | 1/4  |
| C | 1/8  |
| G | 1/8  |

We iteratively generate a tree by "merging" two sources of the smallest probability into one node.

So after one merge:

| X    | P(x)            |
|------|-----------------|
| A    | 1/2             |
| T    | 1/4             |
| C, G | 1/8 + 1/8 = 1/4 |

Doing that again:

| X         | P(x)            |
|-----------|-----------------|
| A         | 1/2             |
| T, (C, G) | 1/4 + 1/4 = 1/2 |

Doing that again:

| X              | P(x)          |
|----------------|---------------|
| A, (T, (C, G)) | 1/2 + 1/2 = 1 |

This now creates a binary tree where each symbol is a leaf!

```S
     .
A         .
       T      .
            C    G
```

We now assign \\(0\\) to left edge and \\(1\\) to the right edge

```S
     .
  0    1
A         .
         0  1
       T      .
             0  1
            C    G
```

To get the actual codes, we can just traverse to each leaf to get the code:

| X | Code  |
|---|-------|
| A | 0     |
| T | 1 0   |
| C | 1 1 0 |
| G | 1 1 1 |

Notice how this is prefix free!
