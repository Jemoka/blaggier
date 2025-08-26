+++
title = "machine learning"
author = ["Houjun Liu"]
draft = false
+++

**CS229**: instead of solving a problem, learn from data to find a model to solve the problem approximately.

**CS109**: [machine learning]({{< relref "KBhmachine_learning.md" >}}) is the act of using some input to come up with some prediction, where the model is parameterized via a bunch of [parameter]({{< relref "KBhparameter.md" >}})s. Hence, [parameter learning]({{< relref "KBhparameter_learning.md" >}}) approaches is how machine learning works.

**CS205L**: training data + model to estimate new data points with minimal error; the parallel is a "[knowledge based system]({{< relref "KBhsu_cs205l_jan072025.md#knowledge-based-system" >}})" with interpolation

---

[machine learning]({{< relref "KBhmachine_learning.md" >}}) excels when we don't know how to program a computer to solve a particular problem; but, what we can do with effort is to collect input, output pairs that demonstrate what we want our programs to do.

[machine learning]({{< relref "KBhmachine_learning.md" >}}) is a set of tools to learn programs from sets of data.


## concepts {#concepts}

-   [supervised learning]({{< relref "KBhsupervised_learning.md" >}})
-   [evaluation]({{< relref "KBhmachine_learning_evaluation.md" >}})


## philosophizing {#philosophizing}


### pros/cons {#pros-cons}

-   **advantage**: broadly applicable and can solve many programs
-   **disadvantage**: need (potentially a bunch) of data, and learned results are approximations
    -   learned programs can fail in unexpected ways
    -   approximate solutions maybe better than having no solution


### applications {#applications}

-   spam classification --- in: email, out: spam/not span
-   sign detection (stop signs, etc.) --- in: image, output: location of stop sign
-   [house price prediction]({{< relref "KBhhouse_price_prediction.md" >}}) --- in: house description, out: price


### types of ML {#types-of-ml}

our job is to do the things in the parentheses


#### supervised learning {#supervised-learning}

"collect training data with both input and output examples, and make a prediction"


#### unsupervised learning {#unsupervised-learning}

-   applies with data with **no labels**
-   allows us to find **structure in our data** (clustering)


#### reinforcement learning {#reinforcement-learning}

-   learn in an interactive environment (as opposed to static data)
-   controlling and games (chess, go)


### history of ML {#history-of-ml}

Samuel 1959: "some studies in machine learning using the game of checkers"

Rosenblatt 1958: perception --- **binary classification** (prediction with two possible outputs); implemented on a sota computer; and trained to perform simple **geometric pattern recognition**. 20x20 grid of photocells; output: is a square in the left or right half of the image.

Noticed a trend of the 50s? Why? [IBM704]({{< relref "KBhibm704.md" >}})!

Nothing then happened for many years. Then, ML started having impact again the last 15 years, especially the last 3 years: this is because we now have more **compute** and more **data**.


### Key Ideas of ML {#key-ideas-of-ml}

-   ML is largely guided by **benchmarks**
-   several key datasets for each task (image calssification, detection, etc.)
-   algorithmic/model innovations justified by (usually mulitple) benchmarks
-   very little math
-   rapid progress over the decade


#### a culture shift {#a-culture-shift}

-   2000-2010: emperical progress goes with theoretical results; emphassis on theory, no specialized hardware
-   2010-now: appreciable progress comes without theory, emphasis on benchmarks, large-scale purely experimental work


### examples {#examples}


#### addition {#addition}

-   make a 2D domain in \\(R^{2}\\), and a 1D range \\(R^{1}\\) in addition
-   take any pair, choose a number of inputs \\((x\_i, y\_{j})\\) and output \\(z=x\_{i} + y\_{j}\\)
-   our goal: find a model function \\(z = f(x,y)\\); in this case, \\(z = x+y\\), which means we only need 3 training points to determine a plane
    -   ....however, if the errors exist, generalizing very much out of distribution (extremely far away), the errors will increase


### ImageNet {#imagenet}

Large image classification dataset. **1.2 million train**, **1000** classes.


#### motivation {#motivation}

WordNet was at Princeton; and so why don't we have the same thing for images?

-   humans know thousands of visual categories
-   if we want human-like CV, we need correspondingly large datasets
-   goal: **let's populate all of WordNet with 1000 images, per node**


#### how? {#how}

"get a really really good grad student"

-   ...download all of the image in Flickr
-   ...then label them with MTurk
    -   (lots of work in task design, annotation, etc.)


#### ImageNet Large Scale Visual Recognition Challenge (ILSVRC) {#imagenet-large-scale-visual-recognition-challenge--ilsvrc}

-   1.2 million training images for 1,000 classes (roughly balanced)
-   50,000 images for 1,000 classes (exactly balanced)
-   150,000 images for 1,000 classes (exactly class-balanced, hidden labels)

top-5 accuracy: 5 predictions per image

<!--list-separator-->

-  AlexNet

    [AlexNet](#alexnet) beat [ImageNet](#imagenet) from 25 =&gt; 15% error

    Its a large CNN. Invented....

    1.  ReLU
    2.  Local Response Normalization (not really used anymore)
    3.  Training on GPUs (GTX 580)
    4.  Overlapping pooling
    5.  [Dropout]({{< relref "KBhsu_cs224n_apr162024.md#dropout" >}})
    6.  Data augmentation

    each of these is 0-2% improvements.

<!--list-separator-->

-  Networks Became Bigger

    -   AleNet (8 layers)
    -   VGG (17 layers)
    -   ResNet (hundreds of layers)


### [Language Model]({{< relref "KBhlanguage_model.md" >}})s {#language-model--kbhlanguage-model-dot-md--s}

see [Language Model]({{< relref "KBhlanguage_model.md" >}})


### Risks of ML {#risks-of-ml}

ML can be used for **beneficial and harmful**

-   surveillance
-   addictive social media
-   automated hacking

Or malfunction:

-   underperformance
-   biases


### Machine Learning with Knowledge Based System {#machine-learning-with-knowledge-based-system}

1.  [knowledge based system]({{< relref "KBhsu_cs205l_jan072025.md#knowledge-based-system" >}}) is discrete, whereas machine learning is continuous math and has errors
2.  ML is derived from continuous math, which means it may have inherent approximation errors (early ML tends to be on problems whose baseline is "random", such as ads recommendation)

When you don't have any priors regarding
