+++
title = "Getting Started with PyTorch"
author = ["Houjun Liu"]
tags = ["guide"]
draft = false
layout = "blank"
+++

(Py)Torch is a great C++/Python library to construct and train complex neural networks. It has [taken over academia](https://paperswithcode.com/trends) over the last few years and is slowly taking over industry. Let's learn about how it works!

****This document is meant to be read cover-to-cover. It makes NO SENSE unless read like that. I focus on building intuition about why PyTorch works, so we will be writing unorthodox code until the very end where we put all ideas together.****

The chapters below take you through large chapters in a machine-learning journey. But, to do anything, we need to import some stuff which we will need:

```python
import numpy as np
import torch
```


## Autograd {#autograd}

[source](https://pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html)

I believe that anybody learning a new ML framework should learn how its differentiation tools work. Yes, this means that we should first understand how it works with not a giant matrix, but with just two simple variables.

At the heart of PyTorch is the built-in gradient backpropagation facilities. To demonstrate this, let us create two such variables.

```python
var_1 = torch.tensor(3.0, requires_grad=True)
var_2 = torch.tensor(4.0, requires_grad=True)

(var_1, var_2)
```

```text
(tensor(3., requires_grad=True), tensor(4., requires_grad=True))
```

There is secretly a lot going on here, so let's dive in. First, just to get the stickler out of the way, `torch.tensor` (used here) is the generic variable creator, `torch.Tensor` (capital!) initializes a proper tensor---which you will **never** need.

What is a `tensor`? A `tensor` is simply a very efficient matrix that can updates its own values dynamically but keep the same variable name. The above commands creates two such `tensor`, both being `1x1` matrices.

Note that, for the initial values, I used _floats!_ instead of _ints_. The above code will crash if you use ints: this is because we want the surface on which the matrix changes value to be smooth to make things like gradient descent to work.

Lastly, we have an argument `requires_grad=True`. This argument tells PyTorch to keep track of the gradient of the `tensor`. For now, understand this as "permit PyTorch to change this variable if needed." More on that in a sec.

Naturally, if we have two tensors, we would love to multiply them!

```python
var_mult = var_1*var_2
var_mult
```

```text
tensor(12., grad_fn=<MulBackward0>)
```

Wouldyalookatthat! Another tensor, with the value \\(12\\).

Now. Onto the main event. Back-Propagation! The core idea of a neural network is actually quite simple: figure out how much each input parameter (for us `var_1`, `var_2`) influence the output, then adjust the inputs accordingly to get the output to be \\(0\\).

To see what I mean, recall our output `tensor` named:

```python
var_mult
```

```text
tensor(12., grad_fn=<MulBackward0>)
```

How much does changing `var_1` and `var_2`, its inputs, influence this output `tensor`? This is not immediately obvious, so let's write what we are doing out:

\begin{equation}
v\_1 \cdot v\_2 = v\_{m} \implies 3 \cdot 4 = 12
\end{equation}

with \\(v\_1\\) being `var_1`, \\(v\_2\\) being `var_2`, and \\(v\_{m}\\) being `var_mult`.

As you vary `var_1`, by **what factor** does the output change? For instance, if `var_1` (the \\(3\\)) suddenly became a \\(2\\), how much _less_ will `var_mult` be? Well, \\(2\cdot 4=8\\), the output is exactly \\(4\\) less than before less than before. Hence, `var_1` influences the value of `var_mult` by a factor of \\(4\\); meaning every time you add/subtract \\(1\\) to the value of `var_1`, `var_mult` gets added/subtracted by a value of \\(4\\).

Similarly, as you vary `var_2`, by what factor does the output change? For instance, if `var_2` (the \\(4\\)) suddenly became a \\(5\\), how much _less_ will `var_mult` be? Well, \\(3\cdot 3=5\\), the output is exactly \\(3\\) more than before less than before. Hence, `var_2` influences the value of `var_mult` by a factor of \\(3\\); meaning every time you add/subtract \\(1\\) to the value of `var_3`, `var_mult` gets added/subtracted by a value of \\(3\\).

Those of you who have exposure to Multi-Variable Calculus---this is indeed the same concept as a partial derivative of `var_mult` w.r.t. `var_1` and `var_2` for the previous two paragraphs respectively.

These relative-change-units (\\(4\\) and \\(3\\)) are called **gradients**: the factor by which changing any given variable change the output.

Now, gradient calculation is awfully manual! Surely we don't want to keep track of these tiny rates-of-change ourselves! This is where PyTorch autograd comes in. Autograd is the automated tool that helps you figure out these relative changes! It is built in to all PyTorch tensors.

In the previous paragraphs, we figured out the relative influences `var_1` and `var_2` on `var_multi`. Now let's ask a computer to give us the same result, in much less time.

First, we will ask PyTorch to calculate gradients for all variables that contributed to `var_mult`.

```python
var_mult.backward()
```

The `backward` function is a magical function that finds and calculates these relative-change-values of `var_multi` with respect to every variable that contributed to its values. To view the actual relative values, we will use `.grad` now on the actual variables:

```python
var_1.grad
```

```text
tensor(4.)
```

Recall! We used our big brains to deduce above that changing `var_1` by \\(1\\) unit will change `var_mult` by \\(4\\) units. So this works!

The other variables works as expected:

```python
var_2.grad
```

```text
tensor(3.)
```

Yayyy! Still what we expected.


## Gradient Descent {#gradient-descent}

Relative changes are cool, but it isn't all that useful unless we are actually doing some changing. We want to use our epic knowledge about the relative influences of `var_1` and `var_2`, to manipulate those variables such that `var_mult` is the value we want.

********THE REST OF THIS DOCUMENT IS IN CONSTRUCTION********

```python
import torch.optim as optim
```

To start an optimizer, you give it all the variables for which it should keep track of updating.

```python
optim = torch.optim.SGD([var_1, var_2], lr=1e-2, momentum=0.9)
```

And then, to update gradients, you just have to:

```python
optim.step()
# IMPORTANT
optim.zero_grad()
```

What's that `zero_grad`? That clears the gradients from the variables (after applying them with `.step()`) so that the next update doesn't influence the current one.


## Your First Neural Network {#your-first-neural-network}

```python
import torch.nn as nn
```


### Layers {#layers}

```python
m = nn.Linear(20, 30)
input = torch.randn(128, 20)
output = m(input)
output, output.size()
```

Explain what the \\(20, 30\\) means.

Ok one layer is just lame. What if you want a bunch of layers?

```python
m1 = nn.Linear(20, 30)
m2 = nn.Linear(30, 30)
m3 = nn.Linear(30, 40)
input = torch.randn(128, 20)

# function call syntax! Functions call from rigth to left!
output = m3(m2(m1(input)))
output, output.size()
```

And guess what? If you want to adjust the values here, you would just do:

```python
m1 = nn.Linear(20, 30)
m2 = nn.Linear(30, 30)
m3 = nn.Linear(30, 40)
input = torch.randn(128, 20)

# function call syntax! Functions call from rigth to left!
output = m3(m2(m1(input)))
(output.sum() - 12).backward()
```

```text
None
```

But wait! What are the options you give to your optimizer?

```python
optim = torch.optim.SGD([m1.weight, m1.bias ... ... ], lr=1e-2, momentum=0.9)
```

That's a _lot of variables!!_ Each linear layer has a \\(m\\) and a \\(b\\) (from \\(y=mx+b\\) fame), and you will end up with a bajillon one of those! Also, that function call syntax, chaining one layer after another, is so knarly! Can we do better? Yes.


### An Honest-to-Goodness Neural Network {#an-honest-to-goodness-neural-network}

PyTorch makes the `module` framework to make model creator's lives easier. This is the best practice for creating a neural network.

Let's replicate the example above with the new `module` framework:

```python
class MyNetwork(nn.Module):
    def __init__(self):
        # important: runs early calls to make sure that
        # the module is correct
        super().__init__()

        # we declare our layers. We don't use them yet.
        self.m1 = nn.Linear(20,30)
        self.m2 = nn.Linear(30,30)
        self.m3 = nn.Linear(30,40)

    # this is a special function that is called when
    # the module is called
    def forward(self, x):
        # we want to pass our input through to every layer
        # like we did before, but now more declaritively
        x = self.m1(x)
        x = self.m2(x)
        x = self.m3(x)

        return x
```

Explain all of this.

But now, we essentially built our entire network in own "layer" (actually we literally did, all =Layer=s are just =torch.Module=s) that does the job of all other layers acting together. To use it, we just:

```python
my_network = MyNetwork()
input = torch.randn(128, 20)

# function call syntax! Functions call from rigth to left!
output = my_network(input)
output
```

```text
tensor([[-0.1694,  0.0095,  0.4306,  ...,  0.1580,  0.2644,  0.1509],
        [-0.2346, -0.0269, -0.1191,  ...,  0.0229, -0.0819, -0.1452],
        [-0.4871, -0.2868, -0.2488,  ...,  0.0637,  0.1832,  0.0619],
        ...,
        [-0.1323,  0.2531, -0.1086,  ...,  0.0975,  0.0426, -0.2092],
        [-0.4765,  0.1441, -0.0520,  ...,  0.2364,  0.0253, -0.1914],
        [-0.5044, -0.3263,  0.3102,  ...,  0.1938,  0.1427, -0.0587]],
       grad_fn=<AddmmBackward0>)
```

But wait! What are the options you give to your optimizer? Surely you don't have to pass `my_network.m1.weight`, `my_network.m1.bias`, etc. etc. to the optimizer, right?

You don't. One of the things that the `super().__init__()` did was to register a special function to your network class that keeps track of everything to optimize for. So now, to ask the optimizer to update the entire network, you just have to write:

```python
optim = torch.optim.SGD(my_network.parameters(), lr=1e-2, momentum=0.9)
optim
```

```text
SGD (
Parameter Group 0
    dampening: 0
    differentiable: False
    foreach: None
    lr: 0.01
    maximize: False
    momentum: 0.9
    nesterov: False
    weight_decay: 0
)
```

TODO make students recall original backprop example, backprope and step and zero_grad with this new optim.

Look! Optimizing an entire network works in the _exact same way_ as optimizing two lone variables.


## Putting it together {#putting-it-together}

TODO

1.  training loop (zero first, call model, get diff/loss, .backward(), .step())
2.  best practices
3.  saving and restoring models
4.  GPU