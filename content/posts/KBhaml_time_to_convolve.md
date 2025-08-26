+++
title = "AML: Time to Convolve"
author = ["Houjun Liu"]
tags = ["writing", "aml"]
draft = false
layout = "nobrand"
+++

Welcome back! I think, over the last few days, we have been hyping up convolutional neural networks enough such that you are probably ready to dive right in. So... Let's, uh, motivate it first!


## Why do we use a CNN? {#why-do-we-use-a-cnn}

Let's think of a toy problem to play with. Given a pattern made using two colours (let's name them a and b, or perhaps black and white), let's classify whether it is the "zebra" pattern" or the "checkerboard" pattern.

Zebra---aligned stripes:

| a | b | a | b |
|---|---|---|---|
| a | b | a | b |
| a | b | a | b |
| a | b | a | b |

Checkerboard---alternating stripes:

| a | b | a | b |
|---|---|---|---|
| b | a | b | a |
| a | b | a | b |
| b | a | b | a |

We are already familiar with one neural-network architecture: stacked **linear** layers, also known as **deep neural networks**. If we are trying to process these two input samples for a linear layer, what would we do?

...

Well, we would take each of the figures, and flatten it into a long row. Then, feed it into a layer of \\(4 \times 4 = 16\\) input neurons.

What would that look like? Well; let \\(a=0, b=1\\):

```python
zebra_sample = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]
chessboard_sample = [0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0]
```

Without looking very closely, those two _very_ different patterns seem to yield pretty similar input samples! A **dense neural network** need to fit very well to notice the numerical trick of checking if two \\(1\\) or two \\(0\\) are next. That's not good... A human can spot the difference in the original, 2D figure very obviously!

**ENTER CNNs**


## What is a CNN? {#what-is-a-cnn}

The take-home-message from the previous simple example is that _2D structures loose information when they are flattened_. So, **CNNs**---ultimately---offer a way to process this 2D structural information with a **neural network** without flattening immediately. Generally, a **CNN** takes the following structure:

1.  2D-input fed into the model
2.  **convolutional layers** process small sections of the 2D input, projecting each section another section on a larger, 2D hidden grid; think about this as **upsampling** in images
3.  a **pooling layer** takes sections of the larger 2D grid of neurons then process each section into one value (usually by taking their maximum or average); think about this as **downsampling** in images
4.  Repeat steps 2-3
5.  a **flatten** layer takes the now _processed_ 2D grid and flattens it in the usual manner into a 1D tensor
6.  process the now information-rich, flat hidden representation as usual with a **dense neural-network**

I would pause and ponder the above outline a little bit; but, no worries if this does immediately make sense; hopefully, as the layers are introduced progressively, what they do on various inputs will start to make more sense.

I promise we will get to the actual layers soon, but before then, we have some vocabulary terms to go over.


## Vocab Time! {#vocab-time}


### kernel {#kernel}

Everything in the **CNN** world rests upon the idea of a **kernel**. A **kernel** is a sub-sample of the input of a certain fixed size (you can choose the size). Take our original checkerboard input:

| a | b | a | b |
|---|---|---|---|
| b | a | b | a |
| a | b | a | b |
| b | a | b | a |

An example \\((2 \times 2)\\) **kernel** on this input could be:

| a | b |
|---|---|
| b | a |

that is:

| a | b     | a     | b |
|---|-------|-------|---|
| b | **a** | **b** | a |
| a | **b** | **a** | b |
| b | a     | b     | a |

Tada! A \\((2 \times 2)\\) **kernel** is simply a \\((2\times 2)\\) sample of the input.


### convol-\* and stride {#convol-and-stride}

Convolving, convolutional, convoluting... What does that mean? For a **kernel size** (i.e. dimensions of the **kernel**) that's smaller than the size of the entire 2D input---which, if you want your **CNN** to perform better than a **DNN**, it has to be (challenge question: why?)---you need to move it around the input to capture the entirety of the input sample.

That movement is called **convolution**

Here's a \\((2\times 2)\\) **kernel**!

| **a** | **b** | a | b |
|-------|-------|---|---|
| **b** | **a** | b | a |
| a     | b     | a | b |
| b     | a     | b | a |

and... here it is **convolving** to the right!

| a | **b** | **a** | b |
|---|-------|-------|---|
| b | **a** | **b** | a |
| a | b     | a     | b |
| b | a     | b     | a |

Look! A moving **kernel**. That's **convolution**.

Now, how _much_ the **kernel** moves at each step is called the **stride**, or the **stride size**. For a 2D input sample, this is usually specified as a 2D tuple: \\((x,y)\\), with \\(x\\) representing how much the kernel moves per step in the \\(x\\) direction, and \\(y\\) representing how much the kernel moves per step in the \\(y\\) direction.


### filter {#filter}

So far we are doing nothing with the **kernel**: we are just taking **convolving** sub-samples, and doing a grand total of nothing with the array of subsamples. **Filters** are responsible of doing the actual processing.

Each time a **kernel** is sampled, it is sent through a weight-matrix (just like what is stuck between two **linear** layers) which is called a **filter**. The output of this matrix is then reassembled into a 2D array after the sample kernel from each **convolution** is passed through the same filter, ready for more processing!


### channel {#channel}

Here's a little-known secret about the world: humans see colors! The toy example conveniently ignored this important fact: each pixel was simply a number, which---in the real world---would represent only one hue (think shades of gray). That's an alright assumption to make if we are only encoding checkerboards or zebras, but not great if we want to recognize anything complicated. How would we represent colors in our input?

_Multiple **channels** to the rescue!_

A "2D" sample actually contains three dimensions: `(channel_size, height, width)`. Namely, each **convolutional** layer actually take multiple of those grids we discussed above as input, each representing the saturation of a specific color at each pixel. Those separate grids representing the same input are called **channels**.

A conventional "image", then, is actually three samples masquerading as one:

1.  a grid of the concentrations of the red **channel**
2.  a grid of the concentrations of the green **channel**
3.  a grid of the concentrations of the blue **channel**

Say, a sample image is square and has side-length \\(20\\). Can you guess the actual dimensions of one "sample" tensor?

...

\\((3, 20,20)\\): three channels RGB, height, width.


## Let's get convolving {#let-s-get-convolving}

Throughout this workbook, we are never actually going to build a neural network. You already know how to do that! In this section, let's go through each of the _layers_ discussed above that a CNN consists of, and we will leave you with the task of putting them together in the workbook challenge. Don't worry, we will be here to help you through that process.

Either way, however, let's get PyTorch going:

```python
import torch
import torch.nn as nn
```


### sampling images {#sampling-images}

We went through all this talk about images, but we never actually dealt with one. So, before we can actually do anything with CNNs, let's see how we can actually turn an image into the numbered pixel-grid we discussed in the toy example above.

To do this, we will use the PythonImageLibrary (PIL), whose currently implementation is cutely named "Pillow". If the following line does not work because you are not running Colab, run `pip install pillow` on your machine and you will be off to the races.

```python
from PIL import Image
```

Let's open an example image!

```python
img = Image.open("./beesnees.png")
img
```

```text
<PIL.PngImagePlugin.PngImageFile image mode=RGBA size=938x1436 at 0x12B293FD0>
```

Nice. We just opened a local image on my computer, of size \\(938 \times 1436\\), named "beesnees.png".

---

Aside: **loading images**

What? You don't just conveniently have a file named "beesnees" located on your Colab instance? Well... Let's load it.

Locate on the left side of your Colab window the left sidebar, where the fourth icon down is the "file" folder icon. Tap on that, and---in the "files" pane that opens---tap on the first of the four icons, shaped like a page with an arrow, below the word "files". Select your file, and you are off to the races.

Oh, and here's [beesnees.jpg](https://haha.business/business.jpg)

---

Anyways, now that we have an image, what can we do with it? Well, for starters, we can ask `numpy` to make an array out of it.

```python
import numpy as np
arr = np.array(img)

arr
```

```text
[[[ 10  10   8 255]
  [ 10  10   8 255]
  [ 10  10   8 255]
  ...
  [  7   7   5 255]
  [  7   7   5 255]
  [  7   7   5 255]]

  ...

 [[  3   3   3 255]
  [  3   3   3 255]
  [  3   3   3 255]
  ...
  [ 12  16  21 255]
  [ 12  16  21 255]
  [ 12  16  21 255]]]
```

Interested in what shape it is?

```python
arr.shape
```

```text
(1436, 938, 4)
```

Hmmm... We know that it is a \\((1436 \times 938)\\) image, and apparently `numpy` encoded each of the pixels with all the channels instead of separating them into one channel per grids. That's all fine and good, but why are there \\(4\\) channels for an RGB image?

Turns out, `png` images by default are RGB\*A\*---the last channel being transparency. Staring at the array above, we can see that every single pixel's fourth channel is \\(255\\), meaning this image is not transparent anywhere.

Transparency info is not super useful info for most models, so let's slice it apart: leaving us with \\((1436 \times 938 \times 3)\\):

```python
arr = arr[:,:,:-1]
arr.shape
```

```text
(1436, 938, 3)
```

---

Aside: **woah! what is that syntax?**

In the example code above, we used **array slicing notation**: `arr[:,:,:-1]`. This is an extension on Python list slicing only valid on Numpy arrays and PyTorch tensors. To come up with your own, here are the rules:

1.  separate each dimension with a comma, from outer to inner
2.  on each dimension, slice the dimension normally with Python slice syntax, remembering that it has a fencepost problem on the end index: `[startIndex]:[endIndex+1]`; recall that negative numbers loop around (i.e. `-1` means the end of the list)
3.  recall that, if you want to start from the beginning or end at the end of an array, you can leave that side blank: `:5` means "give me the first 5 elements 0,1,2,3,4"
4.  if you want to keep the entirety of a dimension, type an colon and move on

So, decoding what we just typed: `arr[:,:,:-1]`:

-   `arr` (the Numpy array we are slicing)
-   `[` (slice!)
-   `:,` (keep all of the H dimension)
-   `:,` (keep all of the W dimension)
-   `:-1` (keep everything in the channels dimension except until the last element, hence removing that)
-   `]` (end slice)

---

One more change before moving on. The `arr` matrix right now has shape \\(H \times W \times C\\), where \\(C\\) is the number of channels. However, recall that PyTorch (more reasonably, in my opinion), expects \\(C \times H \times W\\): where channels are the first dimension to show that each channel is an independent grid of pixels representing that color.

So, we need to swap the inner and outer dimensions of our array to separate the three **channels** into grids of \\(H \times W\\).

```python
arr = arr.swapaxes(0,2)
arr.shape
```

```text
(3, 938, 1436)
```

Excellent. We have now swapped the axes of the image such that each **channel** is by itself. Although... we also messed up the orientation of the image: it is now \\(938 \times 1436\\) instead of \\(1436 \times 938\\). Turns out, this does not matter much---your machine learning model does not care about what orientation things are _as long as they are consistent between the images and labels_ (challengeish question: why is that?).

Usually, when we deal with image inputs, we end up with color values between \\(0\\) and \\(255\\). Yet, as you probably saw already, neural networks are exceptionally bad at dealing with large integers such as \\(255\\). As such, we will squish the input into a matrix of small numbers by just reporting pixel values in terms of "brightness", also known as "percentage until 255", which would nicely normalize the input

```python
brightness_arr = arr/255
brightness_arr
```

```text
[[[0.03921569 0.03921569 0.03921569 ... 0.01176471 0.01176471 0.01176471]
  ...
  [0.02745098 0.02745098 0.02745098 ... 0.04705882 0.04705882 0.04705882]]

 [[0.03921569 0.03921569 0.03921569 ... 0.01176471 0.01176471 0.01176471]
  ...
  [0.02745098 0.02745098 0.02745098 ... 0.0627451  0.0627451  0.0627451 ]]

 [[0.03137255 0.03137255 0.03137255 ... 0.01176471 0.01176471 0.01176471]
  ...
  [0.01960784 0.01960784 0.01960784 ... 0.08235294 0.08235294 0.08235294]]]
```

One last step before we go forward: `arr` in as numpy array, which can't be fed through Torch-accelerated objects. To get it to do things in a neural network, we need it to be a **tensor**:

```python
img_tsr = torch.tensor(brightness_arr).float()
img_tsr
```

```text
tensor([[[0.0392, 0.0392, 0.0392,  ..., 0.0118, 0.0118, 0.0118],
         ...,
         [0.0275, 0.0275, 0.0275,  ..., 0.0471, 0.0471, 0.0471]],

        [[0.0392, 0.0392, 0.0392,  ..., 0.0118, 0.0118, 0.0118],
         ...,
         [0.0275, 0.0275, 0.0275,  ..., 0.0627, 0.0627, 0.0627]],

        [[0.0314, 0.0314, 0.0314,  ..., 0.0118, 0.0118, 0.0118],
         ...,
         [0.0196, 0.0196, 0.0196,  ..., 0.0824, 0.0824, 0.0824]]])
```

For kicks, let's also put it in a batch of \\(1\\) (as, recall, layers take an _array_ of samples for input, so we just need to create a batch containing one element). `.unsqueeze(dim)` does this on a tensor; it just surrounds the desired dimension with another set of "brackets" (i.e. add a dimension of \\(1\\)).

```python
img_tsr = img_tsr.unsqueeze(0)
img_tsr.shape
```

```text
torch.Size([1, 3, 938, 1436])
```

Machine learning now awaits us...


### convolutional layer {#convolutional-layer}

Finally, it is convolutioning time. The main object we will be using will be `Conv2d`, the 2D convolutional layer. If you care about the behind-the-scenes math, [here it is](https://pytorch.org/docs/stable/generated/torch.nn.Conv2d.html): basically, it is the bias per channel, plus the weight of that channel (**filter**) times each **kernel** of that channel, cross-correlated across **convolutions**.

To instantiate a convolutional layer, here are what you need to figure out:

1.  input channels: _3_ for RGB, if you are not convolving across images, or your image is sepia or B&amp;W, etc., your mileage will vary
2.  output channels: the output dimension of your weight matrix, what your **convolving** **kernels** get projected to
3.  kernel size: the width of your **kernel**, it is usually square so one number suffices
4.  stride size: how much your **kernel** should move per **convolution** (i.e. **stride**), default is \\((1\times 1)\\)

So, here goes; I gave an arbitrary hidden size of \\(5\\) and a kernel size of \\(4 \times 4\\); we will talk about recommended topologies later.

```python
test_convolution_layer = nn.Conv2d(in_channels=3,
                                   out_channels=5,
                                   kernel_size=4,
                                   stride=(1,1))
test_convolution_layer
```

```text
Conv2d(3, 5, kernel_size=(4, 4), stride=(1, 1))
```

Now, passing our input through our single layer:

```python
net = test_convolution_layer(img_tsr)
net
```

```text
tensor([[[[-0.0296, -0.0288, -0.0296,  ..., -0.0249, -0.0249, -0.0249],
          [-0.0296, -0.0288, -0.0300,  ..., -0.0249, -0.0249, -0.0249],
          [-0.0290, -0.0282, -0.0293,  ..., -0.0249, -0.0249, -0.0249],
          ...,
          [ 0.0713,  0.0713,  0.0713,  ..., -0.0086, -0.0080, -0.0093],
          [ 0.0713,  0.0713,  0.0713,  ..., -0.0089, -0.0087, -0.0102],
          [ 0.0713,  0.0713,  0.0713,  ..., -0.0113, -0.0113, -0.0113]]]],
       grad_fn=<ConvolutionBackward0>)
```

Now, let's take a look at the shape of this nice output:

```python
net.shape
```

```text
torch.Size([1, 5, 935, 1433])
```

Look! Each of our kernels got projected from the \\(3\\) input **channels** into the \\(5\\) output **channels**; as our **convolutions** has **stride size** \\((1 \times 1)\\), our **kernel** moves across our image and the **filter** takes each kernel and spits out a vector of length \\(5\\) at each step, resulting in \\((935 \times 1433)\\) such steps and hence an output of \\((5 \times 935 \times 1433)\\).

---

Thinking break: **kernel sizes and steps!**

Now, recall that our input has size \\((938 \times 1436)\\), and yet our output has \\((935 \times 1433)\\) as the last two dimensions, meaning the kernel only took \\(935\\) steps in the first dimension and \\(1433\\) steps in the second. What happened? Our step size is \\(1\\), so shouldn't the steps span across the whole image?

Mess with the stride size and kernel size and figure this out. Shout a compelling answer in class before moving on.

Understanding this will be _critical_ to demonstrate your intuition of CNNs, _pleeeese don't move on until you think you have a good answer_.

---

Let's think about this in context of a larger network. Our convolutional layer just took our input image, and processed it such that it ended up with a more, for the lack of a better word, "nuanced" 2D representation of our image. Instead of RGB being our three **channels**, our five **channels** will, after good training, contain more complex information such as "edges" or "blocks" that downstream networks can process.


### maxpool/avgpool layer {#maxpool-avgpool-layer}

In traditional convolutional networks, each **kernel** is processed with a **filter**, projecting its channels into some larger space with its weights. What if instead, we took each **kernel** stride and squished it down into a single **number**?

That process is called **pooling**; correctly sequenced pooling layers acts as "information extraction" layers. Think of it as layers that asks question to the tune of "is anything in this sub-area of the image very bright?" or "what is the average color of this sub-area of the image?": giving us actually _more_ actionable information about the area than the pixels themselves.

There are two common pooling algorithms:

1.  MaxPool: take a **kernel**, squish it into one vector with one number each channel representing the maximum of the kernel in that channel
2.  AvgPool: take a **kernel**, squish it into one vector with one number each channel representing the average of the kernel in that channel

To instantiate such a pooling layer, you need to figure out:

1.  kernel size: the width of your squishification **kernel**
2.  stride size: how much your squishing **kernel** should move per **convolution** (i.e. **stride**), default is \\((1\times 1)\\)

So, instantiating a MaxPool layer:

```python
test_pooling_layer = nn.MaxPool2d(kernel_size=4,
                                  stride=(1,1))
test_pooling_layer
```

```text
MaxPool2d(kernel_size=4, stride=(1, 1), padding=0, dilation=1, ceil_mode=False)
```

Now, applying our layer:

```python
net = test_pooling_layer(net)
net
```

```text
tensor([[[[-0.0277, -0.0277, -0.0279,  ..., -0.0249, -0.0249, -0.0249],
          [-0.0271, -0.0277, -0.0279,  ..., -0.0249, -0.0249, -0.0249],
          [-0.0271, -0.0277, -0.0279,  ..., -0.0249, -0.0249, -0.0249],
          ...,
          [ 0.0713,  0.0713,  0.0713,  ..., -0.0064, -0.0041, -0.0041],
          [ 0.0713,  0.0713,  0.0713,  ..., -0.0064, -0.0041, -0.0041],
          [ 0.0713,  0.0713,  0.0713,  ..., -0.0083, -0.0064, -0.0061]]]],
       grad_fn=<MaxPool2DWithIndicesBackward0>)
```

```python
net.shape
```

```text
torch.Size([1, 5, 932, 1430])
```

---

Thinking break: **kernel sizes and steps, again!**

A very similar question as before. Why is it that, while pooling the input kernels (i.e. squishing every kernel of \\(4 \times 4 = 16\\) pixels into one value), our side length didn't, say, get divided by \\(4\\)? Why it is that our image is still almost as large?

---

I will leave you to infer the calling convention of `nn.AvgPool2d`.

Great, one more layer before we are off to the races.


### flatten {#flatten}

This one is _really_ simple. All the 2D convolution work we did before is fine and good, but eventually we need to fall back on dense neural-networks to do the work of, for example, classification. _Eventually_, we need to flatten these tensors.

Fortunately, PyTorch has a layer for that (it seems like when it doubt, this is usually true...)

```python
flat = nn.Flatten()
flat(net).shape
```

```text
torch.Size([1, 6663800])
```

Nice and flat, just the way we expect for a **dense-neural-network**.

---

Aside: **woah! that's awfully large!**

The natural next layer to this would be something like

```python
nn.Dense(6663800, 256)
```

which would result in us using a matrix to project this **GIGANTIC!** processed input into a comparatively _tiny_ output dimension. The whole point, as we discussed, of CNNs is to prevent the need to flatten an image right up front into giant, hard-to-process input vectors. How is this output serving that need?

We will discuss strategies of projecting large samples downwards very shortly, but even if we didn't, this large input vector is not at all the same thing as just flattening the raw input vector: it has been processed with many filters and a pooling layer already, which means that the information contained in it is probably much more readily accessible for a neural network.

---


## A Typical CNN {#a-typical-cnn}

It is always very hard to name what exact architecture will work for a problem. However, these guidelines can help you architect a good CNN:

1.  Start with convolutional layers that has a _tiny_ **kernel**, but projects the input into a _large_ amount of channels (i.e. hyper-dimensional **filters**); good candidates looks like \\(32\\) output channels, but with kernels of \\(2\times 2\\). Think of these as the "edge detection", "face detection", etc. layers as Grant outlined in his video we saw at the beginning of the class.
2.  **Gradually** _decrease_ the number of output channels (**filters**), but _increase_ your **kernel** size; good candidates look like \\(2\\) output channels, but with kernels of \\(32 \times 32\\). Think of these as the "structural" layers that detect large structures like "loops" or "shadows", etc.
3.  Put a pooling layer (which algorithm is to taste of the problem) between 3-5 convolutional layers

If you want to end up with a smaller sample, try taking larger **strides**. Always try to keep your **kernel size** larger then your **stride size**, or you will end up missing values in the data (thinking break: why?)


## Challenge + First Project {#challenge-plus-first-project}

Now that you have learned three new layers, its time to see them in action. Build a neural network to [classify tiny images](https://drive.google.com/drive/folders/1U7RUybsCGpZCTYejnGGzSB_6HnQetmlj?usp=sharing)! Use at least one **convolutional** layer, one **pooling** layer, and the typical architecture of the network that we discussed last time. No need to do a full write-up, just the model, explanation and the associated colab is fine.

Data: <https://drive.google.com/drive/folders/1U7RUybsCGpZCTYejnGGzSB_6HnQetmlj>
