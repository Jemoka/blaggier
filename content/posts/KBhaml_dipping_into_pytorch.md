+++
title = "AML: Dipping into PyTorch"
author = ["Houjun Liu"]
tags = ["writing", "aml"]
draft = false
layout = "nobrand"
+++

Hello! Welcome to the series of guided code-along labs to introduce you to the basis of using the PyTorch library and its friends to create a neural network! We will dive deeply into Torch, focusing on how practically it can be used to build Neural Networks, as well as taking sideroads into how it works under the hood.


## Getting Started {#getting-started}

To get started, let's open a [colab](https://colab.research.google.com/) and import Torch!

```python
import torch
import torch.nn as nn
```

The top line here import PyTorch generally, and the bottom line imports the Neural Network libraries. We will need both for today and into the future!


## Tensors and AutoGrad {#tensors-and-autograd}

The most basic element we will be working with in Torch is something called a **tensor**. A tensor is a **variable**, which holds either a single number (**scalar**, or a single **neuron**) or a list of numbers (**vector**, or a **layer** of neurons), that _can change_. We will see what that means in a sec.


### Your First Tensors {#your-first-tensors}

Everything that you are going to put through to PyTorch needs to be in a tensor. Therefore, we will need to get good at making them! As we discussed, a tensor can hold an number (scalar), a list (vector) or a (matrix).

Here are a bunch of them!

```python
scalar_tensor = torch.tensor(2.2)
vector_tensor = torch.tensor([1,3,4])
matrix_tensor = torch.tensor([[3,1,4],[1,7,4]])
```

You can perform operations on these tensors, like adding them together:

```python
torch.tensor(2.2) + torch.tensor(5.1)
```

```text
tensor(7.3000)
```

Vector and Matrix tensors work like NumPy arrays. You can add them pairwise:

```python
torch.tensor([[3,1,4],[1,7,4]]) + torch.tensor([[0,2,1],[3,3,4]])
```

```text
tensor([[ 3,  3,  5],
        [ 4, 10,  8]])
```


### Connecting Tensors {#connecting-tensors}

A single number can't be a neural network! ([citation needed]) So, to be able to actually build networks, we have to connect tensors together.

So, let's create two tensors, each holding a neuron, and connect them together!

Here are two lovely scalar tensors:

```python
var_1 = torch.tensor(3.0, requires_grad=True)
var_2 = torch.tensor(4.0, requires_grad=True)

var_1, var_2
```

```text
(tensor(3., requires_grad=True), tensor(4., requires_grad=True))
```

We initialized two numbers, `3`, which we named `var_1`, and `4`, which we named `var_2`.

The value `requires_grad` here tells PyTorch that these values can change, which we need it to do... very shortly!

First, though, let's create a **latent** variable. A "latent" value is a value that is the _result_ of operations on other non-latent tensors---connecting the activation of some neurons together with a new one. For instance, if I multiplied our two tensors together, we can create our very own latent tensor.

```python
my_latent_value = var_1*var_2
my_latent_value
```

```text
tensor(12., grad_fn=<MulBackward0>)
```

Evidently, \\(3 \cdot 4 = 12\\).


### Autograd {#autograd}

Now! The beauty of PyTorch is that we can tell it to set any particular latent variable to \\(0\\) (Why only \\(0\\), and \\(0\\) specifically? Calculus; turns out this limitation doesn't matter at all, as we will see), and it can update all of its constituent tensors with `required_grad` "True" such that the latent variable we told PyTorch to set to \\(0\\) indeed becomes \\(0\\)!

This process is called "automatic gradient calculation" and "backpropagation." (Big asterisks throughout, but bear with us. Find Matt/Jack if you want more.)

To do this, we will leverage the help of a special optimization algorithm called **stochastic gradient descent**.

Let's get a box of this stuff first:

```python
from torch.optim import SGD

SGD
```

```text
<class 'torch.optim.sgd.SGD'>
```

Excellent. By the way, from the `torch.optim` package, there's tonnes (like at least 20) different "optimizer" algorithms that all do the same thing ("take this latent variable to \\(0\\) by updating its constituents") but do them in important different ways. We will explore some of them through this semester, and others you can Google for yourself by looking up "PyTorch optimizers".

Ok, to get this SGD thing up and spinning, we have to tell it every tensor it gets to play with in a list. For us, let's ask PyTorch SGD to update `var_1` and `var_2` such that `my_latent_value` (which, remember, is var1 times var2) becomes a new value.

---

Aside: **learning rate**

Now, if you recall the neural network simulation, our model does not reach the desired outcome immediately. It does so in _steps_. The size of these steps are called the **learning rate**; the LARGER these steps are, the quicker you will get _close_ to your desired solution, but where you end up getting maybe farther away from the actual solution; and vise versa.

Think about the learning rate as a hoppy frog: a frog that can hop a yard at a time ("high learning rate") can probably hit a target a mile away much quicker, but will have a hard time actually hitting the foot-wide target precisely; a frog that can hop an inch at a time ("low learning rate") can probably hit a target a mile away.... years from now, but will definitely be precisely hitting the foot-wide target when it finally gets there.

So what does "high" and "low" mean? Usually, we adjust learning rate by considering the number of decimal places it has. \\(1\\) is considered a high learning rate, \\(1 \times 10^{-3} = 0.001\\) as medium-ish learning rate, and \\(1 \times 10^{-5}=0.00001\\) as a small one. There are, however, no hard and fast rules about this and it is subjcet to experimentation.

---

So, choose also an appropriate **learning rate** for our optimizer. I would usually start with \\(3 \times 10^{-3}\\) and go from there. In Python, we write that as `3e-3`.

So, let's make a SGD, and give it `var_1` and `var_2` to play with, and set the learning rate to `3e-3`:

```python
my_sgd = SGD([var_1, var_2], lr=3e-3)
my_sgd
```

```text
SGD (
Parameter Group 0
    dampening: 0
    differentiable: False
    foreach: None
    lr: 0.003
    maximize: False
    momentum: 0
    nesterov: False
    weight_decay: 0
)
```

Wonderful. Don't worry much about how many of these means for now; however, we will see it in action shortly.

Now! Recall that we allowed `my_sgd` to mess with `var_1` and `var_2` to change the value of `my_latent_value` (the product of `var_1` and `var_2`).

Current, `var_1` and `var_2` carries the values of:

```python
var_1, var_2
```

```text
(tensor(3., requires_grad=True), tensor(4., requires_grad=True))
```

And, of course, their product `my_latent_value` carries the value of:

```python
my_latent_value
```

```text
tensor(12., grad_fn=<MulBackward0>)
```

What if we want `my_latent_value` to be... \\(15\\)? That sounds like a good number. Let's ask our SGD algorithm to update `var_1` and `var_2` such that `my_latent_value` will be \\(15\\)!

Waaait. I mentioned that the optimizers can only take things to \\(0\\). How could it take `my_latent_value` to \\(15\\) then? Recall! I said SGD takes _a_ latent variable to \\(0\\). So, we can just build another latent variable such that, when `my_latent_value` is \\(15\\), our new latent variable will be \\(0\\), and then ask SGD optimize on that!

What could that be... Well, the _squared difference_ between \\(15\\) and `my_latent_value` is a good one. If `my_latent_value` is \\(15\\), the _squared difference_ between it and \\(15\\) will be \\(0\\), as desired!

So, similar to what we explored last semester, we use **sum of squared difference** as our **loss** because it will be able to account for errors of fit in both directions: a \\(-4\\) difference in predicted and actual output is just as bad as a \\(+4\\) difference.

Turns out, the "objective" for SGD optimization, the thing that we ask SGD to take to \\(0\\) on our behalf by updating the parameters we allowed it to update (again, they are `var_1` and `var_2` in our case here), is indeed the **loss** value of our model. **Sum of squared errors** is, therefore, called our **loss function** for this toy problem.

So let's do it! Let's create a tensor our loss:

```python
loss = (15-my_latent_value)**2
loss
```

```text
tensor(9., grad_fn=<PowBackward0>)
```

Nice. So our loss is at \\(3\\) right now; when `my_latent_value` is correctly at \\(15\\), our loss will be at \\(0\\)! So, to get `my_latent_value` to \\(15\\), we will ask SGD to take `loss` to \\(0\\).

To do this, there are three steps. **COMMIT THIS TO MEMORY**, as it will be basis of literally everything else in the future.

1.  Backpropagate: "please tell SGD to take this variable to \\(0\\), and mark the correct tensors to change"
2.  Optimize: "SGD, please update the marked tensors such that the variable I asked you to take to \\(0\\) is closer to \\(0\\)"
3.  Reset: "SGD, please get ready for step 1 again by unmarking everything that you have changed"

Again! Is it commited to memory yet?

1.  Backprop
2.  Optimize
3.  Reset

I am stressing this here because a _lot_ of people 1) miss one of these steps 2) do them out of order. Doing these in any other order will cause your desired result to not work. Why? Think about what each step does, and think about doing them out of order.

One more time for good luck:

1.  Backprop!
2.  Optimize!
3.  Reset!

Let's do it.


#### Backprop! {#backprop}

Backpropergation marks the correct loss value to minimize (optimze towards being \\(0\\)), and marks all tensors with `requires_grad` set to True which make up the value of that loss value for update.

Secretly, this steps takes the **partial derivative** of our loss against each of the tensors we marked `requires_grad`, allowing SGD to "slide down the gradient" based on those partial derivatives. Don't worry if you didn't get that sentence.

To do this, we call `.backward()` on the loss we want to take to \\(0\\):

```python
loss.backward()
```

```text
None
```

This call will produce nothing. And that's OK, because here comes...


#### Optimize! {#optimize}

The next step is tell SGD to update all of the tensors marked for update in the previous step to get `loss` closer to \\(0\\). To do this, we simply:

```python
my_sgd.step()
```

```text
None
```

This call will produce nothing. But, if you check now, the tensors should updated.

Although... You should't check! Because we have one more step left:


#### Reset! {#reset}

```python
my_sgd.zero_grad()
```

```text
None
```

I cannot stress this enough. People often stop at the previous step because "ooo look my tensors updated!!!" and forget to do this step. THIS IS BAD. We won't go into why for now, but basically not resetting the update mark results in a tensor being updated twice, then thrice, etc. each time you call `.step()`, which will cause double-updates, which will cause you to overshoot (handwavy, but roughly), which is bad.


#### ooo look my tensors updated!!! {#ooo-look-my-tensors-updated}

```python
var_1, var_2
```

```text
(tensor(3.0720, requires_grad=True), tensor(4.0540, requires_grad=True))
```

WOAH! Look at that! Without us telling SGD, it figured out that `var_1` and `var_2` both need to be BIGGER for `my_latent_value`, the product of `var_1` and `var_2` to change from \\(12\\) to \\(15\\). Yet, the product of \\(3.0720\\) and \\(4.0540\\) is hardly close to \\(15\\).

Why? Because our step size. It was _tiny!_ To get `my_latent_value` to be properly \\(15\\), we have to do the cycle of 1) calculating new latent value 2) calculating new loss 3) backprop, optimize, reset, a LOT of times.


### Now do that a lot of times. {#now-do-that-a-lot-of-times-dot}

```python
for _ in range(100):
    my_latent_value = var_1*var_2
    loss = (15-my_latent_value)**2

    loss.backward() # BACKPROP!
    my_sgd.step() # OPTIMIZE!
    my_sgd.zero_grad() # RESET!

var_1, var_2
```

```text
(tensor(3.4505, requires_grad=True), tensor(4.3472, requires_grad=True))
```

Weird solution, but we got there! The product of these two values is indeed very close to \\(15\\)! Give yourself a pat on the back.


### So why the heck are we doing all this {#so-why-the-heck-are-we-doing-all-this}

So why did we go through all the effort of like 25 lines of code to get two numbers to multiply to \\(15\\)? If you think about Neural Networks as a process of _function fitting_, we are essentially asking our very basic "network" (as indeed, the chain of tensors to build up to our latent value, then to compute our loss, _is_ a network!) to achieve a measurable task ("take the product of these numbers to \\(15\\)"). Though the relationships we will be modeling in this class will be more complex than literal multiplication, it will be just using more fancy mechanics of doing the same thing---taking tensors values which was undesirable, and moving them to more desirable values to model our relationship.


## y=mx+b and your first neural network "module" {#y-mx-plus-b-and-your-first-neural-network-module}


### `nn.Linear` {#nn-dot-linear}

The power of neural networks actually comes when a BUNCH of numbers gets multiplied together, all at once! using... VECTORS and MATRICIES! Don't remember what they are? Ask your friendly neighborhood Matt/Jack.

Recall, a **matrix** is how you can transform a **vector** from one space to another. Turns out, the brunt of everything you will be doing involves asking SGD to move a bunch of matricies around (like we did before!) such that our input vector(s) gets mapped to the right place.

A **matrix**, in neural network world, is referred to as a **linear layer**. It holds a whole _series_ of neurons, taking every single value of the input into account to producing a whole set of output. Because of this property, it is considered a **fully connected layer**.

Let's create such a fully-connected layer (matrix) in PyTorch! When you ask PyTorch to make a matrix for you, you use the `nn` sublibrary which we imported before. Furthermore, and this is confusing for many people who have worked with matricies before, you specify the **input dimension first**.

```python
my_matrix_var_1 = nn.Linear(3, 2)
my_matrix_var_1
```

```text
Linear(in_features=3, out_features=2, bias=True)
```

`my_matrix_var_1` is a linear map from three dimensions to two dimensions; it will take a vector of three things as input and spit out a vector of two.

Note! Although `my_matrix_var_1` _is_ a tensor under the hood just like `var_1`, we 1) didn't have to set default values for it 2) didn't have to mark it as `requires_grad`. This is because, unlike a raw Tensor which often does not require to be changed (such as, for instance, the input value, which you can't change), a matrix is basically ALWAYS a tensor that encodes the **weights** of a model we are working with---so it is always going to be something that we will ask SGD to change on our behalf.

So, since you are asking SGD to change it anyways, PyTorch just filled a bunch of random numbers in for you and set `requires_grad` on for you to `my_matrix_var_1`. If you want to see the actual underlying tensor, you can:

```python
my_matrix_var_1.weight
```

```text
Parameter containing:
tensor([[-0.2634,  0.3729,  0.5019],
        [ 0.2796,  0.5425, -0.4337]], requires_grad=True)
```

As you can see, we have indeed what we expect: a tensor containing a \\(2\times 3\\) matrix with `requires_grad` on filled with random values.

How do we actually optimize over this tensor? You can do all the shenanigans we did before and pass `my_matrix_var_1` to SGD, but this will _quickly_ get unwieldy as you have more parameters. Remember how we had to give SVG a list of EVERYTHING it had to keep track of? `var_1` and `var_2` was simple enough, but what if we had to do `var_1.weight`, `var_2.weight`, `var_3.weight`... ... ... _ad nausium_ for every parameter we use on our large graph? GPT3 has 1.5 billion parameters. Do you really want to type that?

No.

There is, of course, a better way.


### `nn.Module` {#nn-dot-module}

This, by the way, is the standard of how a Neural Network is properly built from now on until the industry moves on from PyTorch. You will want to remember this.

Let's replicate the example of our previous 3=&gt;2 dimensional linear map, but with a whole lot more code.

```python
class MyNetwork(nn.Module):
    def __init__(self):
        # important: runs early calls to make sure that
        # the module is correct
        super().__init__()

        # we declare our layers. we will use them below
        self.m1 = nn.Linear(3,2)

    # this is a special function that you don't actually call
    # manually, but as you use this module Torch will call
    # on your behalf. It passes the input through to the layers
    # of your network.
    def forward(self, x):
        # we want to pass whatever input we get, named x
        # through to every layer. right now there is only
        # one fully-connected layer
        x = self.m1(x)

        return x
```

What this does, behind the scenes, is to wrap our matrix and all of its parameters into one giant **module**. (NOTE! This is PyTorch-specific language. Unlike all other vocab before, this term is specific to PyTorch.) A module is an operation on tensors which can retain gradients (i.e. it can change, i.e. `requires_grad=True`).

Let's see it in action. Recall that our matrix takes a vector of 3 things as input, and spits out a vector of 2 things. So let's make a vector of three things:

```python
three_vector = torch.tensor([1.,2.,3.])
three_vector
```

```text
tensor([1., 2., 3.])
```

By the way, notice the period I'm putting after numbers here? That's a shorthand for `.0`. So `3.0 = 3.`. I want to take this opportunity to remind you that the tensor operations all take FLOATING POINT tensors as input, because the matrices themselves as initialized with random floating points.

Let's get an instance of the new `MyNetwork` module.

```python
my_network = MyNetwork()
my_network
```

```text
MyNetwork(
  (m1): Linear(in_features=3, out_features=2, bias=True)
)
```

And apply this operation we designed to our three-vector!

```python
my_network(three_vector)
```

```text
tensor([0.3850, 1.4120], grad_fn=<AddBackward0>)
```

Woah! It mapped our vector tensor in three dimensions to a vector tensor in two!

The above code, by the way, is how we actually use our model to run **predictions**: `my_network` is _transforming_ the input vector to the desired output vector.

Cool. This may not seem all that amazing to you... yet. But, remember, we can encode _any number_ of matrix operations in our `forward()` function above. Let's design another module that uses two matricies---or two **fully-connected layers**, or **layers** for short (when we don't specify what kind of layer it is, it is fully connected)---to perform a transformation.

We will transform a vector from 3 dimensions to 2 dimensions, then from 2 dimensions to 5 dimensions:

```python
class MyNetwork(nn.Module):
    def __init__(self):
        # important: runs early calls to make sure that
        # the module is correct
        super().__init__()

        # we declare our layers. we will use them below
        self.m1 = nn.Linear(3,2)
        self.m2 = nn.Linear(2,5)

    # this is a special function that you don't actually call
    # manually, but as you use this module Torch will call
    # on your behalf. It passes the input through to the layers
    # of your network.
    def forward(self, x):
        # we want to pass whatever input we get, named x
        # through to every layer. right now there is only
        # one fully-connected layer
        x = self.m1(x)
        x = self.m2(x)

        return x
```

Of course, this network topology is kind of randomly tossed into the network.

Doing everything else we did before again, we should end up a vector in 5 dimensions, having been transformed twice behind the scenes!

```python
my_network = MyNetwork()
my_network
```

```text
MyNetwork(
  (m1): Linear(in_features=3, out_features=2, bias=True)
  (m2): Linear(in_features=2, out_features=5, bias=True)
)
```

And apply this operation we designed to our three-vector!

```python
my_network(three_vector)
```

```text
tensor([ 0.8241, -0.1014,  0.2940, -0.2019,  0.6749], grad_fn=<AddBackward0>)
```

Nice.

And here's the magical thing: when we are asking SGD to optimize this network, instead of needing to pass every darn parameter used in this network into SVG, we can just pass in:

```python
my_network.parameters()
```

```text
<generator object Module.parameters at 0x115214270>
```

This is actually a list of every single `tensor` that has `requires_grad=True` that we secretly created. No more typing out a list of every parameter to SGD like we did with `var_1` and `var_2`! We will see this in action shortly.


### How to Train Your ~~Dragon~~ Neural Network {#how-to-train-your-neural-network}

Note, the `MyNetwork` transformation is currently kind of useless. We know it maps the vector `[1,2,3]` to some arbitrary numbers above (i.e. `0.8241` an such). That's quite lame.

We want our network to model some relationship between numbers, that's why we are here. Let's, arbitrarily and for fun, ask SGD to update `my_network` such that it will return `[1,2,3,4,5]` given `[1,2,3]`.

By the way, from here on, I will use `MyNetwork` to refer to the model 3=&gt;2=&gt;5 network we made above generally, and `my_network` the specific _instantiation_ of `MyNetwork` whose parameters we will ask SGD to update.

Let's get a clean copy of `MyNetwork` first:

```python
my_network = MyNetwork()
my_network
```

```text
MyNetwork(
  (m1): Linear(in_features=3, out_features=2, bias=True)
  (m2): Linear(in_features=2, out_features=5, bias=True)
)
```

And, let's create a _static_ (i.e. SGD cannot change it) input and output vector pair which we will pass into our operation:

```python
my_input = torch.tensor([1.,2.,3.])
my_desired_output = torch.tensor([1.,2.,3.,4.,5.])

my_input,my_desired_output
```

```text
(tensor([1., 2., 3.]), tensor([1., 2., 3., 4., 5.]))
```

We will pass our input through the `my_network` operation, and figure out what our inputs currently map to:

```python
my_network_output = my_network(my_input)
my_network_output
```

```text
tensor([-1.4672, -0.7089, -0.2645, -0.0598,  0.1239], grad_fn=<AddBackward0>)
```

Ah, clearly not `[1,2,3,4,5]`. Recall we want these values to be the same as `my_output`, which they isn't doing right now. Let's fix that.

Can you guess what loss function we will use? ... That's right, the same exact thing as before! Squaring the difference.

```python
loss = (my_network_output-my_desired_output)**2
loss
```

```text
tensor([ 6.0869,  7.3380, 10.6571, 16.4821, 23.7766], grad_fn=<PowBackward0>)
```

Waiiiit. There's a problem. Remember, SGD can take a single latent value to \\(0\\). That's a whole lotta latent values in a vector! Which one will it take to \\(0\\)? Stop to think about this for a bit: we _want_ to take all of these values to \\(0\\), but we can take only a single value to \\(0\\) with SGD. How can we do it?

To do this, we just... add the values up using the `torch.sum` function!

```python
loss = torch.sum((my_network_output-my_desired_output)**2)
loss
```

```text
tensor(64.3406, grad_fn=<SumBackward0>)
```

Nice. We now have something to optimize against, let's actually create our optimizer! Remember that, instead of passing in every single parameter we want PyTorch to change manually, we just pass in `my_network.parameters()` and PyTorch will scan for every single parameter that lives in `MyNetwork` and give it all to SGD:

```python
my_sgd = SGD(my_network.parameters(), lr=1e-6)
my_sgd
```

```text
SGD (
Parameter Group 0
    dampening: 0
    differentiable: False
    foreach: None
    lr: 1e-06
    maximize: False
    momentum: 0
    nesterov: False
    weight_decay: 0
)
```

Just for running this model, we are going to run our network with more steps (\\(50,000\\)), but with smaller step sizes (\\(1 \times 10^{-6}\\)). We will not worry about it too much for now, and dive into discussing it further for network parameter tuning.

So, let's make the actual training loop now that will take the latent variable named `my_network_output`, created by applying `my_network` on `my_input`, to take on the value of `my_desired_output`! Can you do it without looking? This will be _almost_ the same as our first training loop, except we are asking our network to calculate the current latent output (instead of computing it from scratch each time.)

```python
for _ in range(50000):
    # calculate new latent variable
    my_network_output = my_network(my_input)
    # calculate loss
    loss = torch.sum((my_network_output-my_desired_output)**2)

    # Backprop!
    loss.backward()
    # Optimize!
    my_sgd.step()
    # Reset!
    my_sgd.zero_grad()

my_network(my_input)
```

```text
tensor([-0.9814,  0.4252,  1.8085,  2.7022,  3.5517], grad_fn=<AddBackward0>)
```

Not great! But---we are both _ordered_ correctly and --- if you just kept running this loop, we will eventually **converge** (arrive at) the right answer! For kicks, let's run it \\(50000\\) more times:

```python
for _ in range(50000):
    # calculate new latent variable
    my_network_output = my_network(my_input)
    # calculate loss
    loss = torch.sum((my_network_output-my_desired_output)**2)

    # Backprop!
    loss.backward()
    # Optimize!
    my_sgd.step()
    # Reset!
    my_sgd.zero_grad()

my_network(my_input)
```

```text
tensor([0.9975, 1.9986, 3.0006, 4.0026, 5.0052], grad_fn=<AddBackward0>)
```

Would you look at that! What did I promise you :)

Your network _learned_ something! Specifically, the skill of mapping \\([1,2,3]\\) to \\([1,2,3,4,5]\\)! Congrats!


## Challenge {#challenge}

Now that you know how to get the network to map a specific vector in three dimensions to a specific place in five dimensions, can you do that more generally? Can you generate and give your own network enough examples such that it will learn to do that for ALL vectors in three dimensions?

Specifically, generate a training set of in python and train your neural network now to perform the following operation:

Given a vector \\([a,b,c]\\), return \\([a,b,c,c+1,c+2]\\), for every integer \\([a,b,c]\\).

Hint: pass in many examples for correct behavior sequentially during each of your training loops, calculating loss and running the **optimization step** (i.e. back! optimize! reset!) after each example you give.
