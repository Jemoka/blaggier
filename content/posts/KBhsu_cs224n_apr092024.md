+++
title = "SU-CS224N APR092024"
author = ["Houjun Liu"]
draft = false
+++

Neural Networks are powerful because of **self organization** of the intermediate levels.


## Neural Network Layer {#neural-network-layer}

\begin{equation}
z = Wx + b
\end{equation}

for the output, and the activations:

\begin{equation}
a = f(z)
\end{equation}

where the activation function \\(f\\) is applied element-wise.


## Why are NNs Non-Linear? {#why-are-nns-non-linear}

1.  there's no representational power with multiple linear (though, there is better learning/convergence properties even with big linear networks!)
2.  most things are non-linear!


## Activation Function {#activation-function}

We want **non-linear** and **non-threshold** (0/1) activation functions because it has a _slope_---meaning we can perform gradient-based learning.


### [sigmoid]({{< relref "KBhsigmoid.md" >}}) {#sigmoid--kbhsigmoid-dot-md}

[sigmoid]({{< relref "KBhsigmoid.md" >}}): it pushed stuff to 1 or 0.

\begin{equation}
\frac{1}{1+e^{-z}}
\end{equation}


### tanh {#tanh}

\begin{equation}
tanh(z) = \frac{e^{z}-e^{-z}}{e^{z}+e^{-z}}
\end{equation}

this is just rescaled logistic: its twice as steep (tanh(z) = 2sigmoid(2z)-1)


### hard tanh {#hard-tanh}

tanh but funny. because exp is hard to compute

\begin{equation}
HTanh = \begin{cases}
-1, if x < -1 \\\\
0, if -1 \leq x \leq  1 \\\\
1, if x > 1\\\\
\end{cases}
\end{equation}

this motivates ReLU


### [relu]({{< relref "KBhneural_networks.md#relu" >}}) {#relu--kbhneural-networks-dot-md}

slope is 1 so its easy to compute, etc.

\begin{equation}
ReLU(z) = \max(z,0)
\end{equation}


### Leaky ReLU {#leaky-relu}

"ReLU like but not actually dead"

\begin{equation}
LeakReLU = \begin{cases}
x, if x>0 \\\\
\epsilon x, if x < 0
\end{cases}
\end{equation}

or slightly more funny ones

\begin{equation}
swish = x \sigma(x)
\end{equation}

(this is relu on positive like exp,  or a negative at early bits)

---


## Vectorized Calculus {#vectorized-calculus}

Multi input function's gradient is a vector w.r.t. each input but has a single output

\begin{equation}
f(\bold{x}) = f(x\_1, \dots, x\_{n})
\end{equation}

where we have:

\begin{equation}
\nabla f = \pdv{f}{\bold{x}} = \qty [ \pdv{f}{x\_1}, \pdv{f}{x\_2}, \dots]
\end{equation}

if we have multiple outputs:

\begin{equation}
\bold{f}(\bold{x}) = \qty[f\_1(x\_1, \dots, x\_{n}), f\_2(x\_1, \dots, x\_{n})\dots ]
\end{equation}

\begin{equation}
\nabla \bold{f} = \mqty[ \nabla f\_1 \\\ \nabla f\_2 \\\ \dots] = \mqty[ \pdv{f\_1}{x\_1} & \dots & \pdv{f\_1}{x\_{n}} \\\ \nabla f\_2 \\\ \dots]
\end{equation}


### Transposes {#transposes}

Consider:

\begin{equation}
\pdv u \qty(u^{\top} h) = h^{\top}
\end{equation}

but because of shape conventions we call:

\begin{equation}
\pdv u \qty(u^{\top} h) = h
\end{equation}


### Useful Jacobians! {#useful-jacobians}

{{< figure src="/ox-hugo/2024-04-09_17-04-39_screenshot.png" >}}


#### Why is the middle one? {#why-is-the-middle-one}

Because the activations \\(f\\) are applied elementwise, only the **diagonal** are values and the off-diagonals are all \\(0\\) (because \\(\pdv{h(x\_1)}{x\_2} = 0\\)).


### Shape Convention {#shape-convention}

We will always by **output shape** as the same shape of the **parameters**.

{{< figure src="/ox-hugo/2024-04-09_17-10-15_screenshot.png" >}}

-   **shape convention**: derivatives of matricies are the shape
-   **Jacobian form**: derivatives w.r.t. matricies are row vectors

we use the first one


## Actual Backprop {#actual-backprop}

-   create a [topological sort]({{< relref "KBhtopological_sort.md" >}}) of your computation graph
-   calculate each variable in that order
-   calculate backwards pass in reverse order


## Check Gradient {#check-gradient}

\begin{equation}
f'(x) \approx \frac{f(x+h) - f(x-h)}{2h}
\end{equation}
