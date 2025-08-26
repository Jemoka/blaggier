+++
title = "norm"
author = ["Houjun Liu"]
draft = false
+++

The [norm]({{< relref "KBhnorm.md" >}}) is the "length" of a vector, defined generally using the [inner product]({{< relref "KBhinner_product.md" >}}) as:

\begin{equation}
\\|v\\| = \sqrt{\langle v,v \rangle}
\end{equation}


## additional information {#additional-information}


### properties of the norm {#properties-of-the-norm}

1.  \\(\\|v\\| = 0\\) IFF \\(v=0\\)
2.  \\(\\|\lambda v\\| = |\lambda|\\|v\\|\\)

Proof:

1.  By definition of an inner product, \\(\langle v,v \rangle = 0\\) only when \\(v=0\\)
2.  See algebra:

\begin{align}
\\|\lambda v\\|^{2} &= \langle \lambda v, \lambda v \rangle  \\\\
&= \lambda \langle v, \lambda v \rangle \\\\
&= \lambda \bar{\lambda} \langle v,v \rangle \\\\
&= |\lambda |^{2} \\|v\\|^{2}
\end{align}


### motivating the norm using actual numbers {#motivating-the-norm-using-actual-numbers}

In linear algebra, the [norm]({{< relref "KBhnorm.md" >}}) of a [vector]({{< relref "KBhvector.md" >}}) in a [real vector space]({{< relref "KBhvector_space.md#vector-space-over-fields" >}}) is defined as follows:

\begin{equation}
\\| x\\| = \sqrt{{{x\_1}^{2} + \dots + {x\_n}^{2}}}
\end{equation}

Note that, given the definition of [dot product]({{< relref "KBhdot_product.md" >}}), \\(\\| x \\|^{2} = x \cdot x\\).

---

The [norm]({{< relref "KBhnorm.md" >}}) in [complex vector space]({{< relref "KBhvector_space.md#vector-space-over-fields" >}}) requires taking the absolute value (for \\(a+bi\\), \\(|a+bi| = \sqrt{{a^{2}+b^{2}}}\\)) of each slot. That is, for [Euclidean Inner Product]({{< relref "KBhinner_product.md#euclidean-inner-product" >}}) spaces:

\begin{equation}
\\|z\\| = \sqrt{|z\_1|^{2} + \dots |z\_{n}|^{2}}
\end{equation}

otherwise, simply squaring the [complex number]({{< relref "KBhcomplex_number.md" >}}) (giving us \\(a^{2}-b^{2}\\)) may very well yield negative numbers, which means we'd have an imaginary norm!
