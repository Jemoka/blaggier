+++
title = "(Realistic) LLMs are not super powerful"
author = ["Houjun Liu"]
draft = false
+++

## Introduction {#introduction}

Large language models (LLMs) have transformed much of the field of natural language processing (NLP) (<a href="#citeproc_bib_item_10">Radford et al., n.d.</a>; <a href="#citeproc_bib_item_12">Vaswani et al. 2017</a>; <a href="#citeproc_bib_item_3">Devlin et al. 2019</a>; <a href="#citeproc_bib_item_11">Raffel et al. 2023</a>), the study of human languages. Its success, in some sense, is a little surprising: humans essentially have made for themselves a general "reasoning" algorithm (albeit a pretty bad one as of right now) using entirely inexact Bayesian modeling approaches. Exactly since LLMs developed from literature in the Bayesian modeling community, "formal" questions about what an LLM can or cannot do---the complexity-theoretic elements of LLMs as models---are comparatively understudied. Even now, we have very little idea of what an LLM is even learning, let alone trying to understand how to steer them or bound their behavior (<a href="#citeproc_bib_item_13">Wu et al. 2025</a>)---which, for a purported thinking machine, is a thing we probably want.

In the next few pages, we hope to convince you for why you should care about using complexity theory to analyze LLMs---even if they didn't come with any theoretical guarantees in the first place. We will be focusing on the Transformer (<a href="#citeproc_bib_item_12">Vaswani et al. 2017</a>), the most common model for human languages and dedicate most of our time formally analyzing them using the method given by Merrill and Sabbarwal 2023 (<a href="#citeproc_bib_item_8">Merrill and Sabharwal 2023</a>). Using this analysis, we will then motivate practical problems we may see as we explore transformers and what guidance we maybe able to learn from this analysis.

Before we get started on the gritty details, let's whet our palates with a bird's eye overview of what's about to come. Don't worry if some of the concepts below are unfamiliar, we will define them carefully throughout the rest of the article.

It turns out, "practical" (log precision floating point) Transformers reduce to uniform constant depth majority circuits with unbounded fan in, meaning its power is upper-bounded by uniform \\(\text{TC}^{0}\\). We will show this in three broad steps:

1.  In \Cref{sec:transformers}, we will give a formal definition of the transformer language model which fits a complexity-theoretic treatment of them. This section brings the key insight that allows us to perform this analysis: we relate the floating-point precision of a function with its space complexity---a computation with less precision means we need less space to store its values---creating a notion of "p-precision computation" that allows us to apply realistic bounds to transformer behavior.
2.  Then, in \Cref{sec:non-uniform}, we extend a result given by Hao et. al 2022 (<a href="#citeproc_bib_item_5">Hao, Angluin, and Frank 2022</a>) to see that a non-uniform \\(\text{TC}^{0}\\) circuit can emulate the transformer definition we gave in \Cref{sec:transformers}; in particular, a transformer with depth \\(d\\) can be simulated by a threshold circuit of constant depth depending only on the number of transformer layers --- in particular not the length of the input to the transformer, making this a constant depth threshold circuit and fitting the languages solved by Transformers in non-uniform \\(\text{TC}^{0}\\).
3.  Finally, in \Cref{sec:uniform}, we will dedicate much of the rest of our time in describing a \\(O\qty(\log n)\\) space Turing machine that can generate the transformer emulation circuit given in the previous step, making the bound given above a uniform one.

Being in \\(\text{TC}^{0}\\) allows us to say some very interesting things about transformers:

-   If we believe that adding a circuit's depth increases computational power---that \\(\text{TC}^{0} \subset \text{NC}^{1}\\) is a strict containment, then **Transformers can't solve all classification problems on regular expressions** (since, assuming \\(\text{TC}^{0} \subset \text{NC}^{1}\\), \\(\text{TC}^{0}\\) doesn't contain all regular languages).
-   A problem of great interest to the LLM community is getting them to do arithmetic, which turns out to be surprisingly hard (<a href="#citeproc_bib_item_7">Liu and Low 2023</a>); yet, integer division is in uniform \\(\text{TC}^{0}\\), meaning that, despite the challenges of getting them to do it, **Transformers are theoretically capable of handling division**!
-   As a corollary of all of the above, bounding any model of computation with in \\(\text{TC}^{0}\\) (which is highly parallel, since it has fixed depth no matter the input) results also in deduction to their expressiveness---indicating that **we may need to construct models that are _less_ parallelizable to gain more expressive power**.

At \Cref{sec:takaways} near the end of this article, we will spend some time to comment on each of these points, and some practical implications they have for us about modeling human languages. Let's dive in!


## Circuit Complexity Zoo {#circuit-complexity-zoo}

We should begin our exploration for first defining the complexity class we are trying to bound our transformer in. Recall that, in circuit complexity, the _size_ of a circuit is the number of gates it has, and the _depth_ describes the length of the longest path from the output gate to inputs.

<div class="definition"><span>

\\(\text{TC}^{i}\\) is the class of decision problems which, given an input of size \\(n\\), can be solved with polynomial size, de-in 2) AND, OR, and MAJ gates (which returns if a majority of its input is on).

</span></div>

In particular, since \\(\log^{0} n = 1\\), we see that \\(\text{TC}^{0}\\) is the class of _constant depth_ (i.e., with length that in input invariant) majority circuits.

Knowing about \\(\text{TC}\\) or \\(\text{TC}^{0}\\) in isolation doesn't actually give us a lot of information about what exactly these classes do. To contextualize what the power of this class does for us---in particular to analyze some of the results of containment we will discuss in \Cref{sec:takaways} --- we should also know about two other complexity classes which bounds \\(\text{TC}^{0}\\).

<div class="definition"><span>

\\(\text{AC}^{i}\\) is the class of decision problems solvable by boolean circuits where, given an input of size \\(n\\), can be solved with polynomial size, depth \\(O\qty(\log^{i} n)\\) circuits with 1) unbounded fan-in and 2) AND, OR, and NOT gates.

</span></div>

<div class="definition"><span>

\\(\text{NC}^{i}\\) is the class of decision problems solvable by boolean circuits where, given an input of size \\(n\\), can be solved with polynomial size, depth \\(O\qty(\log^{i} n)\\) circuits with 1) **bounded fan-in of 2** and 2) AND, OR, and NOT gates.

</span></div>

These three complexity classes relate by the following relation:

<div class="theorem"><span>

\begin{equation}
\text{AC}^{0}  \subseteq \text{TC}^{0}\subseteq \text{NC}^{1}
\end{equation}

</span></div>

Through we will not formally prove this, we can see the first containment simply by definition, and the second containment based on the fact that adding \\(n\\) one bit numbers can be done in \\(\text{NC}^{1}\\) (since we have \\(O\qty(\log^{1} n)\\) depth, and we can combine pairwise two 1 bit numbers at time in parallel to reduce the problem). Hence, any problem in \\(\text{TC}^{0}\\) can be solved with only \\(O\qty(\log^{i} n)\\) size increase by \\(\text{NC}^{1}\\).

We will revisit these relations in \Cref{sec:takaways} when we discuss the implications of our result, but for now, we turn our focus to NLP.


## Language Modeling {#language-modeling}

What is a language model, anyways? Though we can't describe the entire field of NLP in one article---in particular, we will not discuss any of the interesting results in the study of learning that actually enables the training of these language models---we will give here a working definition of the _structure_ of language models which we can focus our mind around.

A fortunate property about our study of NLP is that, up to renaming some concepts, NLP' study of languages uses almost the same exact definitions as the study of languages in complexity theory. In particular:

<div class="definition"><span>

A **vocabulary** \\(\Sigma = \qty {w\_1, \dots, w\_{n}}\\) is a finite set of discrete symbols, each of which \\(w\_{j}\\) we call a **token**.

</span></div>

Note that before any human language modeling can start, we have likely some kind of "tokenizer" which takes text on the internet and separates them into tokens. This process is surprisingly involved (for your amusement, try to come up with a principled way to tokenize numbers and consider whether your method behaves reasonably against both the year 1991 versus the number 1991). We assume that your input is already processed into the tokens.

If we are going to process human languages, we should probably define what a language is. As with before, this definition nicely follows exactly the definition from complexity theory:

<div class="definition"><span>

A **language** for a particular vocabulary is any subset \\(L\\) of \\(\Sigma^{\*}= \qty {w\_1 \cdot \dots \cdot w\_{k} | k \geq 0, s\_{i} \in \Sigma}\\) --- the power set of zero or more repetitions of tokens in a vocabulary.

</span></div>

For instance, for \\(\Sigma\\), the set of all tokens on the internet, we may consider the language of "English" as defined by the subset of strings in \\(\Sigma^{ \*}\\) that combines some tokens \\(w\_{1} ... w\_{k}\\) in a way which follows the conventions of the English language.

We are now ready to define a language model; we give the below definition for completeness, but will mostly use a simpler decision variant of computation standard to complexity theory given in \Cref{computable} in the rest of this article.

<div class="definition"><span>

For an ordered sequence of tokens \\(w\_1, \cdots, w\_{k} \in \Sigma\\) and a language \\(L\\) using this vocabulary, a **language model** \\(T\qty(w\_1, \dots, w\_{k}| L)\\) is a probabilistic model that gives:

\begin{equation}
P\_{L}\qty(w\_{k} | w\_{1} \dots w\_{k-1})
\end{equation}

the probability that token \\(w\_{k}\\) follows all previous tokens \\(w\_1\\) up to \\(w\_{k}\\) within the language \\(L\\).

</span></div>

This definition in terms of conditional probabilities has a nice corollary.

<div class="corollary"><span>

By the definition of conditional probability, we can use a language model to score the probability of a string \\(w \in \Sigma^{\*}\\) of its membership in a language \\(L\\):

\begin{equation}
T\qty(w \mid L) = \prod\_{j=1}^{k} T\qty(w\_1, \dots, w\_{j} | L) = \prod\_{j=1}^{k} P\_{L}\qty(w\_{j} | w\_1, \dots, w\_{j-1}).
\end{equation}

</span></div>

As mentioned above, we can cast this probabilistic definition of language models into a much simpler decision-based definition, which we will use for the rest of this article:

<div class="definition"><span>

<computable>
A language \\(L\\) is **computable** by a language model \\(T\\) iff \\(T\qty(w) = 1, \forall w \in L\\), and \\(T\qty(w') = 0, \forall w' \not \in L\\).

</span></div>

In the NLP literature, we call this a "binary classification model."

Of course, we are here today to bound our language models in some circuit complexity class. So, the last basic definition we will need---this time in the language of the complexity literature instead of the NLP ones---relates to the traditional notion of computability above from the world of NLP into the world of circuit complexity:

<div class="definition"><span>

An language \\(L\\) is \\(\qty(S\qty(n), I\qty(n))\\) space uniformly **computable** by a circuit model \\(M\\) iff there exists a Turing Machine \\(N\\) that, \\(\forall n \geq 0\\), \\(N\\) uses at most \\(S\qty(n)\\) space to map some input string of length \\(n\\) (WLOG \\(1^{n}\\)) to an \\(M\\) family circuit deciding \\(L\\), meaning it acts as a language model (as in \Cref{computable}) for \\(L\\).

</span></div>


## (Log-Space) Transformers {#log-space--transformers}

<sec:transformers>

Now that we know what a language model is, let's define our language model of the day: transformers! Transformers are the key architecture that underpins most modern LLMs.


### P-precision computation {#p-precision-computation}

Due to transformers' massive scale, we often take shortcuts to ensure that they fit on a reasonable number of chips without loosing a large amount of expressibility.

A common "shortcut" to do this involves limiting the parameters of the LLM to a certain finite precision such as 16 bit floats. This property actually gives us the first piece of the puzzle we need to bound the expressibility of transformers:

<div class="definition"><span>

A function \\(f: x\_1, \ldots, x\_{k} \to y\\) is **p-precision** if \\(x\_1, \ldots, x\_{k}, y \in \qty {0,1}^{\leq p}\\) each have size at most \\(p\\) bits, and a \\(p\\) space Turing Machine can compute \\(f\\) using the input.
<def:p-precision>

</span></div>

This is analogous to our language model "fitting" on a GPU---indeed a computing device itself--of log-space size. This is actually quite a realistic limit (in fact, arguably a generous one). Since the GPUs we train our language models on are fixed, our language models technically live on "constant-space" machines. But, at scale, we are processing roughly petabytes of data using at most a few thousand GPUs that each have tens of gigabytes of memory. Hence, relative to the data bottleneck and the sizes of the data centers, we are in particle dealing with roughly log-space computational hardware on which our language models live.

This abstraction allows us to represent limited-precision floating point numbers:

<div class="definition"><span>

A floating point value \\(\phi\_{i}\\) is **p-precision** if it could be represented with two binary integers \\(m\_{j}, e\_{j}\\) such that \\(\phi\_{i} = \langle m\_{i}, e\_{i} \rangle\\) (for mantissa and exponent) for \\(m\_{j}, z\_{j} \in \qty {0,1}^{\leq p}\\).

</span></div>

We will need to do operations on these floating point numbers, which leads us to the following lemma which we state without proof:

<div class="lemma"><span>

Let \\(p \leq c\log n\\), and \\(\phi = \sum\_{i=1}^{k} \phi\_{i}\\), where each \\(\phi\_{i}\\) is a p-precision floating point value, then, the \\(p\\) precision approximation of \\(\phi\\) is computable by a constant-depth and uniform threshold circuit of size \\(\text{poly}(n)\\), and in particular can be generated in log space. That is, it lives in \\(\text{TC}^{0}\\).
<lem:lpadd>

</span></div>

The curious can refer to Appendix A of Merrill and Sabbarwal 2023 (<a href="#citeproc_bib_item_8">Merrill and Sabharwal 2023</a>) for the proof, which involves the padding the \\(\log n\\) floating point precision values with constant increase to integer size \\(\log n\\), and using XOR formulas which admits exponential size to iteratively add them, which takes a constant-depth circuit of size \\(\text{poly}\qty(n)\\). Keeping track of pairwise edges to connect for the DNFs takes \\(O\qty(\log \qty(n))\\) space for the generating Turing Machine on length-advised input WLOG \\(1^{n}\\), and printing the circuit requires at most polynomial space to the output tape which we don't count.

Now that we have defined our limited-precision operations, we can move onto the architecture itself!


### Transformers for Complexity Theorists {#transformers-for-complexity-theorists}

These definitions will differ the definitions common to the NLP community, as we are focusing on the algorithmic components of the system rather than how to parallelize it using matrices.

The problem of decision on \\(w \in \Sigma^{\*}\\) involves breaking \\(w\\) into a series of finite-precision "hidden embeddings", which we will call each as a p-precision sub-part of \\(w\\); namely, \\(w = h\_1, ..., h\_{n} \in \qty {0,1}^{p}\\). To process text, a transformer takes the sequence of these hidden embeddings at a particular layer \\(h\_{1}^{l}, \ldots, l\_{n}^{l}\\) and _transforms_ them into new embeddings \\(h\_{1}^{l+1}, \ldots, h\_{n}^{l+1}\\) (think of this task an analogous to the human language task of translation). After a series of such transformations, we will then cast the embeddings into a decision boundary using another p-precision function.

Let's now carefully define each part of the transformation computation:

<div class="definition"><span>

\begin{equation}
a\_{i}^{l+1} = \sum\_{j=1}^{n} \frac{s \qty(h^{l}\_{i}, h^{l}\_{j})}{\sum\_{j=1}^{n} s \qty(h^{l}\_{i}, h^{l}\_{j})} h\_{j}^{l}
\end{equation}

</span></div>

for some p-precision function \\(s\\) which computes a notion of "similarity" between its inputs; standard transforms typically choose some inner product, usually the dot product.

Notice that we have a bit of notation abuse here: \\(\sum\\) here is not exactly the standard sum operation---**it is a p-precision addition** operation (by definition, all \\(h\_{j}\\) are already only p-precision). Since all operations throughout our entire exploration will be only in **p-precision**, we can safely assume that all sums in the sequence is finite precision and in particular p-precision. We will soon see that a natural value of \\(p\\) to choose is \\(p = O\qty(\log n)\\).

Transformers typically have multiple "attention heads" performing the same computation, allowing different vectors' similarities to be expressed, we can roughly consider them as parameterizing \\(s\\)

<div class="definition"><span>

\begin{equation}
a\_{i}^{l+1, h} = \sum\_{j=1}^{n} \frac{s\_h \qty(h^{l}\_{i}, h^{l}\_{j})}{\sum\_{j=1}^{n} s\_h \qty(h^{l}\_{i}, h^{l}\_{j})} h\_{j}^{l}
\end{equation}

</span></div>

Now, having these attention values lying around doesn't do much. The next step of a transformer transformation is to cast each hidden embeddings using the "similarity information" we collected in \\(a\_{j}\\), namely:

<div class="definition"><span>

\begin{equation}
h^{l+1}\_{i} = f\qty(a^{l+1}\_{i,1} \dots a\_{i,k}^{l+1}, h\_{i}^{l})
\end{equation}

</span></div>

again with a **p-precision** function \\(f\\). We call this vector the **residual stream** of the Transformer, as our transformer's purpose is to iteratively refine this vector until the desired output is reached.

Note that we hid away most of the tricky parts of the transformer implementation in this function \\(f\\) since they are mostly relevant for stabilizing and regularizing learning of the transformer parameters instead of for adding expressive power to the transformer models. However, since all of this ultimately fits on standard, size-constrained computational hardware, we can bound it to be a finite p-precision computation.

We can now wrap all of the components of the transformer we described above into a "transformer layer", which we stack on top of each other (each processing the hidden embeddings of another) to process our input \\(w\\):

<div class="definition"><span>

\begin{equation}
L^{l+1} = \langle s\_1, \dots, s\_{k}, f \rangle
\end{equation}

<def:layer>

</span></div>

<div class="definition"><span>

\begin{equation}
T\qty(w) = \qty(L^{d} \cdot \dots \cdot L^{1}) \qty(\phi \qty(w))
\end{equation}

<def:transformer>

</span></div>

for some p-precision \\(\phi : \Sigma \times \mathbb{N} \to \qty {0,1}^{p}\\) which maps \\(w\\) into chunks of \\(p\\) precision hidden embeddings based on their position, and:

\begin{equation}
1 \leq i \leq n, \phi\_{i}\qty(w) = \phi\qty(w\_{i}, i)
\end{equation}

We call this a **depth \\(d\\) transformer**, as it contains an constant depth of \\(d\\) blocks invariant by the input.

Phew! We have now defined a transformer language model! Using this formalism, we can then prove how to simulate all of the above using constant depth circuits.


## Transformers is upper-bounded by \\(\text{TC}^{0}\\) {#transformers-is-upper-bounded-by-text-tc-0}

<sec:non-uniform>

We will begin to prove our ultimate results bounding log-precision transformers in _uniform_ \\(\text{TC}^{0}\\) by first giving a computation to simulate these transformers using constant depth majority circuits without concerning ourselves with how exactly to generate these circuits. After that, we will come back to the topic of generating our simulator circuits using Turing Machines (thus showing their uniformity) in \Cref{sec:uniform}.


### Detour: Bounded Output Functions {#detour-bounded-output-functions}

Before we dive right into arguing about transformers, notice that much of the functions used in our transformer compresses a lot of data (e.g., the inputs) into a constant number of values (e.g., through summation across attention heads).

<div class="lemma"><span>

For \\(f: \qty {0,1}^{\*} \to  \qty {0,1}^{m}\\), \\(\forall  c \in \mathbb{R}^{+}, n \in \mathbb{N}\\), we have an boolean AND/OR circuit of at most \\(n^{c} + c \log n + m\\) size and depth \\(3\\) that computes \\(f\\) on inputs of size at most \\(c \log  n\\). <lem:non-uniform>

</span></div>

<div class="proof"><span>

For an input of size \\(c\log n\\), we have at most \\(2^{c\log  n} = n^{c}\\) possible combinations of the inputs; make each of them exactly one term of a DNF formula, and add a layer of \\(m\\) gates which produces the actual output after the DNF formula judges which input state our input falls in. Combined with \\(c \log n\\) input gates for possible NOT judgments, this makes a circuit \\(n^{c} + c\log  n + m\\) size and depth 3.

</span></div>

We will now apply this result _quite liberally_ (basically to every attention head computation within every layer) to give our first bound of transformers.


### Simulating Transformers {#simulating-transformers}

<div class="theorem"><span>

Any \\(c \log n\\) precision depth \\(d\\) transformer processing inputs of at most \\(n\\) bits \\(w \in \Sigma^{n}\\) can be simulated by a threshold circuit family of depth dependent only on \\(d\\) <the:non-uniform>

</span></div>

<div class="proof"><span>

We can see this result through induction along each transformer layer (\Cref{def:layer} and each token position \\(h\_{j}\\)). We hold invariant that 1) the computation done by a transformer in each layer can be performed by a constant-depth, poly-size threshold circuit, and 2) that the hidden outputs \\(h^{i}\_{j}, \forall i, \forall j\\) can be represented with at most \\(c \log n\\) bits. These facts will imply a Transformer admits a constant-depth circuit for all inputs dependent only on the number of layers.

Consider first the base case of token \\(i\\) in layer \\(0\\) (i.e. before the input gets processed by the transformer, during the pre-processing \\(\phi\\) described in \Cref{def:transformer}). We have \\(\phi\qty(w): \Sigma \times N \to \qty {0,1}^{p}\\) , and so, by \Cref{lem:non-uniform}, we have that this will be computable with a polynomial size depth-3 AND/OR circuit. We are given that our transformer is \\(c\log n\\) precision, meaning that the output of \\(\phi\\), which is a \\(c \log n\\) - precision function, is of size \\(c\log  n\\).

Consider now token \\(i\\) in layer \\(l+1\\). By the inductive hypothesis our previous layer outputs \\(h^{l}\_{i}\\) is of \\(c \log n\\) size. Consider now the attention operation; recall:

\begin{equation}
a\_{i}^{l+1, h} = \sum\_{j=1}^{n} \frac{s\_h \qty(h^{l}\_{i}, h^{l}\_{j})}{\sum\_{j=1}^{n} s\_h \qty(h^{l}\_{i}, h^{l}\_{j})} h\_{j}^{l}
\end{equation}

\Cref{lem:non-uniform} gives that \\(s\_{h}\\) can be computed using a depth three poly-size circuit, and \Cref{lem:lpadd} gives that the summation operations can be done in \\(\text{TC}^{0}\\) since we are adding \\(c\log n\\) precision items together (as \\(s\_{h}\\) are all \\(c \log  n\\) precision functions since the whole model is \\(c\log  n\\) precision). These two operations combined still gives a constant depth, poly-size circuit since they are chained sequentially.

All that's left is to show that the computation of \\(h\_{i}^{l+1}\\) similarly preserves circuit size and residual stream size. recall:

\begin{equation}
h^{l+1}\_{i} = f\qty(a^{l+1}\_{i,1} \dots a\_{i,k}^{l+1}, h\_{i}^{l})
\end{equation}

Now, \\(f\\) again is responsible for constructing a new residual stream of \\(c \log n\\) size (since all of its inputs are that size, and \\(f\\) is \\(c \log n\\) precision per definition). This means, by \Cref{lem:non-uniform}, we can again say that a depth three poly-size circuit could compute the function \\(f\\).

Combining the two constant depth poly size \\(\text{TC}^{0}\\) circuits from attention computation, and the constant depth poly size circuit from \\(f\\), we conclude that computation at layer \\(l+1\\) is also constant depth and poly size.

We stack \\(d\\) layers of such computations together to create a whole transformer; in particular, this value is not dependent on \\(h\\). By induction that we see a \\(c \log n\\) precision depth \\(d\\) transformer can be simulated by a \\(\text{TC}^{0}\\) circuit with depth dependent only on \\(d\\).

</span></div>

<div class="corollary"><span>

By definition of \\(\text{TC}^{0}\\), \Cref{the:non-uniform} implies that log-precision transformers upper-bounded by \\(\text{TC}^{0}\\), possibly non-uniformly, since the circuit depth isn't dependent on the input size.

</span></div>

At this point we have shown that possibly-non-uniform \\(\text{TC}^{0}\\) circuits can do the job of transformers---meaning we are on the home stretch! However, this is not entirely satisfying: non-uniform computation can even recognize undecidable things, which may them not super great as a model of computation. To make this upper-bound actually realistic, we must also show that transformers also live in _uniform_ \\(\text{TC}^{0}\\).


## Transformers upper-bounded by uniform \\(\text{TC}^{0}\\) {#transformers-upper-bounded-by-uniform-text-tc-0}

<sec:uniform>

To actually show the uniformity of the computations in \Cref{sec:non-uniform}, we must roll up our sleeves and actually program a Turing Machine to generate the circuits. The key insights of \\(p\\) precision computation we used from before all related to the _sizes_ of input and output, but notice that we have another constraint: from \Cref{def:p-precision}, \\(p\\) precision computation isn't just size limited, but also _space_ limited---they must be computable using a Turing Machine in \\(p\\) space.

We will use this fact very liberally to show the uniformity of our computation.

<div class="lemma"><span>

For \\(f: \qty {0,1}^{\*} \to  \qty {0,1}^{m}\\) computable in linear space, \\(\forall  c \in \mathbb{R}^{+}, n \in \mathbb{N}\\), there is a Turing machine that uses at most \\(c \log  n + \log  m\\) space to generate \\(f\\) that behaves like in \Cref{lem:non-uniform}, in particular maps input \\(1^{n}\\) to a circuit computing \\(f\\) for inputs of size at most \\(c \log  n\\). <lem:uniform>

</span></div>

<div class="proof"><span>

Recall that our formula from \Cref{lem:non-uniform} is three layers large, where the first layer was the input and its negations of size \\(c\log n\\), the second layer was \\(2^{c\log n} = n^{c}\\) size of the DNF formulas representing each outcome of \\(f\\), and finally the \\(m\\) nodes. All we will do here is to just print it using a space-constrained Turing machine.

The first layer requires simply a enumeration of all input, taking at most \\(c\log n\\) space to keep track of what node you are printing and its parity (i.e., whether we are printing \\(x\\) or \\(\neg x\\)).

The second layer requires the computation of each \\(2^{c \log n} = n^{c}\\) input, each we can do using a subroutine that we are given only taken linear space. We again require \\(\log \qty(n^{c}) = c \log n\\) to keep track of which of the input sequence we are actually working with, and linear space (adding a constant factor to the \\(c\\)) to compute \\(f\\). Keeping track of both input and output of each edge takes \\(2c \log n\\) space.

For building the output nodes, we need to keep track of the index of the current edge we are working on, from the \\(2 \log n\\) nodes in the DNF to the \\(m\\) nodes in the output space of the function; this takes \\(c \log n + \log m\\) space.

The correctness argument of this printing follows directly from \Cref{lem:non-uniform}, since this argument only prints the circuit we already argued about there. This in particular shows that functions defined in this way can be computed in uniform, poly-space and depth 3 circuits.

</span></div>

At this point, we are practically "done"! Since the result in \Cref{the:non-uniform} gives an induction that proves the correctness of a \\(\text{TC}^{0}\\) circuit simulating transformer computation, all we need to do is to show that the circuit we desire actually can be generated uniformly with a Turing machine.

There really isn't a lot of insights at this point forward for this section. We are going to simply repeat the computation in \Cref{the:non-uniform}, and show that we can push through the proof while generating the circuit with a space-constrained Turing machine.

Let's do that:

<div class="theorem"><span>

Any \\(c \log n\\) precision depth \\(d\\) transformer processing inputs of at most \\(n\\) bits \\(w \in \Sigma^{n}\\) can be simulated by a logspace constructible uniform threshold circuit family of depth only depending on the number of layers \\(d\\) <the:uniform>

</span></div>

<div class="proof"><span>

We can see this result through induction along each transformer layer (\Cref{def:layer} and each token position \\(h\_{j}\\)). We hold invariant that 1) we are constructing the circuit given in \Cref{the:non-uniform}, and 2) the construction of each layer can be performed by a Turing Machine that uses \\(O\qty(\log n)\\) space which is length-advised (i.e. dependent only on \\(1^{n}\\) on an input of length \\(n\\)).

Consider first the base case of token \\(i\\) in layer \\(0\\) (i.e. before the input gets processed by the transformer, during the pre-processing \\(\phi\\) described in \Cref{def:transformer}). We desire a circuit representing \\(\phi\qty(w): \Sigma \times N \to \qty {0,1}^{p}\\) , and so, by \Cref{lem:uniform}, can be generated in log-space using a Turing machine.

Consider now token \\(i\\) in layer \\(l+1\\). We want to generate now:

\begin{equation}
a\_{i}^{l+1, h} = \sum\_{j=1}^{n} \frac{s\_h \qty(h^{l}\_{i}, h^{l}\_{j})}{\sum\_{j=1}^{n} s\_h \qty(h^{l}\_{i}, h^{l}\_{j})} h\_{j}^{l}
\end{equation}

\Cref{lem:uniform} gives that \\(s\_{h}\\) can be generated and computed as a subroutine in log-space. Note that we only have to generate \\(s\_{h}\\) once for each layer, and after which we can throw it away to reuse the space. This computation happens sequentially for all \\(1\leq j \leq n\\) and \\(1 \leq h \leq k\\). Notice now that the input to each \\(s\_{h}\\) is still \\(2 c \log n\\) precision, so by \Cref{sec:uniform}, we can compute this in only \\(2c \log n + \log m = O\qty(\log n)\\) space.

Applying \Cref{lem:lpadd} for generating the normalizing constant and outer sum can both be done in constant depth and log space (since the input is in \\(O\qty(\log n)\\) precision, namely they each can be represented in \\(O\qty(\log n)\\) bits). Keeping track of what indicies we are dealing with \\(h, j, n, l\\) all take only \\(O\qty(\log n)\\) bits.

The argument is similar to the per-layer computation \\(f\\), that:

\begin{equation}
h^{l+1}\_{i} = f\qty(a^{l+1}\_{i,1} \dots a\_{i,k}^{l+1}, h\_{i}^{l})
\end{equation}

Now, \\(f\\) again is responsible for constructing a new residual stream of \\(c \log n\\) size (since all of its inputs are that size, and \\(f\\) is \\(c \log n\\) precision per definition). By \Cref{sec:uniform}, we can again say that this can be constructed by a Turing machine in \\(\log n\\) space (though there are \\(k\\) attention heads and hence our input size is \\(ck \log n\\), notice that \\(k\\), the number of attention heads, is fixed for all inputs).

Repeating this by \\(1 \leq i \leq n\\), and for \\(1 \leq l \leq d\\), reusing space each time except for the \\(\log n\\) bits for our indecision, results in a Turing machine generating our circuit in \Cref{sec:non-uniform}

</span></div>

<div class="corollary"><span>

By definition of \\(\text{TC}^{0}\\), \Cref{the:uniform} implies that log-precision transformers upper-bounded by \\(\text{TC}^{0}\\), **uniformly**, since the circuit depth isn't dependent on the input size.

</span></div>


## Discussion: What does(n't) \\(\text{TC}^{0}\\) buy you? {#discussion-what-does--n-t--text-tc-0-buy-you}

<sec:takaways>

We explored together in this article the power of the transformer language model (<a href="#citeproc_bib_item_12">Vaswani et al. 2017</a>), and by using the analysis given by Merrill and Sabbharwal for p-precision attention (<a href="#citeproc_bib_item_8">Merrill and Sabharwal 2023</a>), we gave a formal analysis of the transformer which upper-bounds their computational power in \\(\text{TC}^{0}\\).

Often, observers from outside complexity theory ask why such a rigorous analysis is needed if so much of the research in learning methods haven't caught up to anywhere near asymptotic upper bounds, so in the closing of this article we hope to explore some useful insights that all of your hard work making it through this article earned you.

Recall that we got a transformer to be bounded in \\(\text{TC}^{0}\\), and so naturally we will show some "useful" statements about \\(\text{TC}^{0}\\) which maybe helpful to keep in mind as we learn more about transformers and conduct research in modifying its architecture. We won't endeavor to prove any of them in rigorous detail, and instead write this section to get you excited about what you earned by doing all the hard work above.

Generally, when we design a language model (for that matter, for models in general), we ideally want our model to...

-   be powerful: we want to create a model which, within reasonable bounds, lives in the largest complexity class as possible
-   be scalable: we want to create a model which maximizes the complexity class in which it lives (i.e., ideally, be able to solve complete problems within that class)

Though the second challenge falls much towards the domain of learning, we can make here a few comments regarding the first challenge.


### The Power of Transformers {#the-power-of-transformers}


#### Regular Langugaes and \\(\text{TC}^{0}\\) {#regular-langugaes-and-text-tc-0}

Here's something you feasibly want:

<div class="example"><span>

"Hey assistant, come up with a regular expression that'll match on this set of strings."

</span></div>

Yet, the result below hints that you may not be able to get it with current language models.

<div class="lemma"><span>

Suppose \\(\text{TC}^{0} \subset \text{NC}^{1}\\) is a strict containment, then \\(\text{TC}^{0}\\) doesn't contain all regular languages

</span></div>

Due to Barrington's Theorem (<a href="#citeproc_bib_item_1">Barrington 1989</a>), we have that the \\(S\_{5}\\) symmetric group is complete for non-uniform \\(\text{NC}^{1}\\). Namely, the set of all permutations that can be performed on a finite set of size 5 is complete for \\(\text{NC}^{1}\\).

Consider, then, a regular expression like:

\begin{equation}
\qty(\qty(a|b) \qty(ab^{\*} ab^{\*} ab^{\*} a | b))^{\*}
\end{equation}

which encodes a description of such a permutation that lives in \\(S\_{5}\\), where \\(a\\) encodes the unpermuted cycle within the group (i.e. the cycle \\(\qty(1,2,3,4,5)\\)), and \\(b\\) represents a permutation (i.e. the "swap" permutation \\(\qty (1,2)\\)).

Since the regular expression above is \\(\text{NC}^{1}\\) complete, assuming \\(\text{TC}^{0} \subset \text{NC}^{1}\\) is a strict subset, we can't even solve the decision task of whether a string matches a regular expression (i.e., if it lives in a regular language) for all regular expressions since we can't solve it for the example above.

Since the decision to search reduction gives that the identification task is at most polynomial as hard, this means our original prompt probably can't be solved by a standard Transformer if we believe  \\(\text{TC}^{0} \subset \text{NC}^{1}\\).


#### Division {#division}

Another thing we may want:

<div class="example"><span>

"Hey assistant, what's 35/12?"

</span></div>

In a breakthrough result, Hesse 2001 (<a href="#citeproc_bib_item_6">Hesse 2001</a>) shows that division is in \\(\text{TC}^{0}\\). So, despite the challenge of actually getting transformers to do division (<a href="#citeproc_bib_item_7">Liu and Low 2023</a>), it appears that it is not shown yet to be impossible.

This means one of two things: first, it is possible that our upper-bound is not tight---Hao, et. al., 2022 (<a href="#citeproc_bib_item_5">Hao, Angluin, and Frank 2022</a>) showed that transformers with "hard" attention (instead of the soft \\(p\\) precision scores we had here) lives in \\(\text{AC}^{0}\\), a rather small complexity class; or, second and more excitingly, that we haven't yet maximized the ability to actually get our model to learn the most its complexity class indicates it could learn.


### A Long (and probably not Parallel) Way to Go {#a-long--and-probably-not-parallel--way-to-go}

One classic use of \\(\text{TC}^{0}\\) is to describe neural networks: fan-in gates with majority does sound like an end-to-end, standard parallelize neural network with real-valued activations (in fact, it even looks like one).

The fact that, after all the shenanigans in the last 20 years of modeling research, we didn't create anything more powerful than the class of "conventional" neural networks may first be extremely disheartening. However, it is also true that, within these last 20 years, we managed to get a metal box to talk to us and do middle-school homework while never leaving $\text{TC}<sup>0</sup>$---indicating the shocking power of 1) randomness---as transformers are Bayesian algorithms and 2) learning.

Conversely, this approach makes us wonder about the tradeoff between the goals we highlighted early in this section. As we make more uniform computation---which naturally scales through being more parallelizable---we may be limiting ourselves to a form of computation that is much weaker than what even general Turing Machines can accomplish.

Recent work in adaptive computation---transformers that can stretch its inputs exponentially through mechanisms like "forking", "thinking tokens", and "universal transformers" (<a href="#citeproc_bib_item_4">Hao et al. 2024</a>; <a href="#citeproc_bib_item_9">Muennighoff et al. 2025</a>; <a href="#citeproc_bib_item_2">Dehghani et al. 2018</a>)---is an exciting one. They break out of the "constant width" and "constant depth" assumptions we make in this argument, and allows us to place Transformers into a much larger complexity class. While these methods make models harder to parallelize, perhaps---through this computational lens---we may find that a less parallelizable language model is a more powerful one.


## Some Notes where Notation Differs {#some-notes-where-notation-differs}

-   whereas Merrill and Sabbarwal parametrizes transformer layers as \\(L = \langle H\_1, \dots, f \rangle\\), we do it in terms of the similarity function \\(L = \langle s\_1, \dots, f \rangle\\) since they didn't actually define \\(H\\)
-   we drop their notation of \\(\oplus\\) as "p-precision addition" since non p-precision operations are not used, and this notation confuses with XOR
-   Merrill and Sabbarwal gives an exact bound on the size of the circuits, which resulted in a lot more work in keeping track of indicies and padding the circuits---yet isn't super useful as the uniform \\(\text{TC}^{0}\\) argument holds without doing this and the model of transformers here isn't exact for the algorithms presented to be used in practice anyways; hence, we simplify their argument by simply showing that the depth of the circuits are dependent on \\(d\\) only---meaning they are constant with respect to the input---without arguing their exactly size



<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Barrington, David A. 1989. “Bounded-Width Polynomial-Size Branching Programs Recognize Exactly Those Languages in Nc1.” <i>Journal of Computer and System Sciences</i> 38 (1): 150–64. doi:<a href="https://doi.org/10.1016/0022-0000(89)90037-8">10.1016/0022-0000(89)90037-8</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Dehghani, Mostafa, Stephan Gouws, Oriol Vinyals, Jakob Uszkoreit, and Łukasz Kaiser. 2018. “Universal Transformers.” <i>arXiv Preprint arXiv:1807.03819</i>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>Devlin, Jacob, Ming-Wei Chang, Kenton Lee, and Kristina Toutanova. 2019. “BERT: Pre-Training of Deep Bidirectional Transformers for Language Understanding.” arXiv. <a href="http://arxiv.org/abs/1810.04805">http://arxiv.org/abs/1810.04805</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_4"></a>Hao, Shibo, Sainbayar Sukhbaatar, DiJia Su, Xian Li, Zhiting Hu, Jason Weston, and Yuandong Tian. 2024. “Training Large Language Models to Reason in a Continuous Latent Space.” <i>arXiv Preprint arXiv:2412.06769</i>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_5"></a>Hao, Yiding, Dana Angluin, and Robert Frank. 2022. “Formal Language Recognition by Hard Attention Transformers: Perspectives from Circuit Complexity.” <i>Transactions of the Association for Computational Linguistics</i> 10 (nil): 800–810. doi:<a href="https://doi.org/10.1162/tacl_a_00490">10.1162/tacl_a_00490</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_6"></a>Hesse, William. 2001. “Division Is in Uniform TC0.” In <i>International Colloquium on Automata, Languages, and Programming</i>, 104–14. Springer.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_7"></a>Liu, Tiedong, and Bryan Kian Hsiang Low. 2023. “Goat: Fine-Tuned Llama Outperforms Gpt-4 on Arithmetic Tasks.” <i>arXiv Preprint arXiv:2305.14201</i>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_8"></a>Merrill, William, and Ashish Sabharwal. 2023. “The Parallelism Tradeoff: Limitations of Log-Precision Transformers.” <i>Transactions of the Association for Computational Linguistics</i> 11 (nil): 531–45. doi:<a href="https://doi.org/10.1162/tacl_a_00562">10.1162/tacl_a_00562</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_9"></a>Muennighoff, Niklas, Zitong Yang, Weijia Shi, Xiang Lisa Li, Li Fei-Fei, Hannaneh Hajishirzi, Luke Zettlemoyer, Percy Liang, Emmanuel Candès, and Tatsunori Hashimoto. 2025. “S1: Simple Test-Time Scaling.” <i>arXiv Preprint arXiv:2501.19393</i>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_10"></a>Radford, Alec, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei, and Ilya Sutskever. n.d. “Language Models Are Unsupervised Multitask Learners.”</div>
  <div class="csl-entry"><a id="citeproc_bib_item_11"></a>Raffel, Colin, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang, Michael Matena, Yanqi Zhou, Wei Li, and Peter J. Liu. 2023. “Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer.” arXiv. <a href="http://arxiv.org/abs/1910.10683">http://arxiv.org/abs/1910.10683</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_12"></a>Vaswani, Ashish, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N Gomez, Łukasz Kaiser, and Illia Polosukhin. 2017. “Attention Is All You Need,” 11.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_13"></a>Wu, Zhengxuan, Aryaman Arora, Atticus Geiger, Zheng Wang, Jing Huang, Dan Jurafsky, Christopher D Manning, and Christopher Potts. 2025. “AXBENCH: Steering LLMs? Even Simple Baselines Outperform Sparse Autoencoders.” <i>arXiv Preprint arXiv:2501.17148</i>.</div>
</div>
