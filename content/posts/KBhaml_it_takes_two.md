+++
title = "AML: It Takes Two"
author = ["Houjun Liu"]
tags = ["writing", "aml"]
draft = false
+++

Hello everyone! It's April, which means we are ready again for a new unit. Let's dive in.

You know what's better than one neural network? TWO!!! Multi-modal approaches---making two neural networks interact for a certain result---dominate many of the current edge of neural network research. In this unit, we are going to introduce one such approach, **Generative Adversarial Networks** (**GAN**), but leave you with some food for thought for other possibilities for what training multiple networks together can do.

Be aware that this unit will begin our more theory-focused discussions, and will leave more of the implementation up to your own explorations or a later fuller example. If you don't understand the math or the theory, please do flag us down in class or out to get things clarified.


## Motivation {#motivation}

Although we will provide motivations for the architecture of a **GAN** in a bit, let's first provide a problem to ground ourselves.

Say we want to build a neural network to generate pictures of mountain goats. How would you do that?

You can't build a supervised model exactly: what's the input, and what are the labels? No clear answer. Even if you have labels, you'd have infinitely many possible such mountain goats; how do you generate labels for all of those?

To help us in solving this problem, let us make a few related claims that may seem unmotivated for now:

1.  It is easy to find images of mountain goats `[citation needed]`
2.  It is eas(ier) to train a model to classify if an image is a mountain goat or not
3.  It is easy to generate random noise
4.  We want more pictures of mountain goats because they are cool

It maybe unclear how `1-3` help us solve the mountain-goat generation problem; to explain why they are all crucial, we have to first understand some hand wavy game theory.


## (Better) Motivation {#better--motivation}

It's storytime!

Al Capone and Eliot Ness are playing a game. Al is trying to create counterfeit Franklins, and Eliot is trying to catch them out of circulation.

Al first uses his HP Inkjet printer to print the currency. Eliot quickly wises up and uses a microscope to observe whether or not a piece of money in question is printed by ink or via color pigmented paper. Not wishing to foil his plan, Al asks his lab to develop new color pigmentation technology---just like the US currency does!

Yet, Eliot outsmarts Al again---he uses a spectrophotometer to analyze whether or not the money in question is made using paper or on cotton like the actual US currency. Seeing this, an angry Al purchases a tonne of cotton and starts printing his counterfeits on cotton.

Wanting to satisfy Jack's uselessly long analogy, Doctor Strange comes and freezes time for everyone except Al and Eliot (and their respective teams). As the true US currency technology remains the same, Eliot and Al continue to play this game: both developing better technologies to make or catch counterfeits.

After a billion years, Doctor Strange gets bored and looked into his frozen world. What does he see?

Al Capone built an exact replica of the US Mint.

Why? Each time Al gets caught out by Eliot, Al learns one more aspect of how his counterfeit differs from actual US currency. In effect, he's also learning one new detail of how the US currency is made. Therefore, if he keeps patching these tiny differences that Eliot helpfully pointed out for him for the span of a billion years, what Al will be producing will eventually be indistinguishable from US dollars as Eliot will be out of things to point out!

At this point, the Capone-Ness system has reached what we call **Nash equilibrium**: neither Eliot nor Al have a better move to make---Eliot no longer has anything more he can possibly do to catch counterfeits as Al's money is identical to US currency, and Al can no longer change his formula for money-making as any deviation will create another factor Eliot can latch onto.


## GANs {#gans}

A **Generative Adversarial Network** (**GAN**) is a multi-modal generation model.

It is made out of two interacting neural networks:

-   **generator** \\(G(x)\\): Al Capone
-   **discriminator** \\(D(x)\\): Eliot Ness

Specifically, the **generator** is an unsupervised model trained on the task of generating the targets ("images of mountain goats") from random noise, while the **discriminator** is a **self-supervised model** trained on the task of classifying whether or not something is actually the target ("actual images of mountain goats") or the output of the generator.

The two models converge in tandem, in a similar fashion to the story discribed above.


### Discriminator \\(D(x)\\) {#discriminator-d--x}

The **discriminator** \\(D(x)\\) is perhaps the more easily understandable model out of the two. It is a **self-supervised model** designed with the task of discriminating whether or not a particular input came from the actual world ("goat images") or was the output of the **generator**.

Specifically, the **discriminator** is a neural network with any middle layers you'd like that takes the output of the **generator** _or_ real images as input, and produces a single `sigmoid` activated feature (between 0-1) where \\(0\\) represents "definitely produced by **generator**" and \\(1\\) represents "definitely real world."


### Generator \\(G(x)\\) {#generator-g--x}

The **generator** \\(G(x)\\) is a model that takes a _random tensor_ as input and attempts to produce a generated sample ("a picture of a goat"). As with the discriminator, it can have any middle layers you'd like but has to produce a tensor with the same shape and activation of an actual sample. For instance, if you are trying to produce images, the output of your **generator** has to be of shape \\((channels, x, y)\\) activated with `sigmoid` for brightness; if you are trying to produce single scalars, then the **generator** has to produce only value, etc.

It is perhaps very mystifying how we would ever build a magical box that takes a random tensor and turn it into a pretend image; looking at the loss functions (i.e. training objectives) of these two networks may perhaps help clarify this.


### Loss Functions {#loss-functions}

Before we begin, I want to quickly reiterate something which will be crucial to your mental framework of the loss functions: **THEY ARE NOT METRICS**. The _value_ of the loss functions---especially these ones---are now completely devoid of physical meaning; instead, the _trend_ of the loss functions ("value goes down means model is doing better") is what matters.

We are introducing the simplest form of **GAN** loss functions by [Goodfellow, et al](https://arxiv.org/abs/1406.2661) called "non-saturating loss." There are better ones, but these ones are mathematically elegant and works most of the time---and are the "base case" loss functions which other models improve on.


#### Discriminator Loss {#discriminator-loss}

\begin{equation}
L\_{d} (\bold{x}\_{i}, \bold{z}\_{i}) = -\log D(\bold{x}\_{i}) - \log  (1- D(G(\bold{z}\_{i})))
\end{equation}

where, \\(\bold{x}\_{i}\\) is a tensor representing a real sample (for instance, again, an actual grid of pixels for a mountain goat image), and \\(\bold{z}\_{i}\\) is a tensor containing random noise.

Woof. This is quite a scary loss function; let's break it up into pieces.

-   \\(-\log D(\bold{x}\_{i})\\): \\(\bold{x}\_{i}\\) is a real sample, so we expect \\(D\\) to produce \\(1\\). Any value below \\(1\\) (i.e. the **discriminator** thinking a real image is generated) will produce negative values of increasingly larger magnitude as \\(D(\bold{x}\_{i})\\) approaches \\(0\\). If the discriminator produces \\(1\\) correctly, \\(\log 1 = 0\\) and we indeed have converged.
-   \\(-\log (1- D(G(\bold{z}\_{i})))\\): on the flip side, we expect the generator to consider the output of the generator (i.e. \\(D(G(\bold{z}\_{i}))\\)) to be generated and produce \\(0\\). Therefore, we expect the same scheme as before but flipped (\\(1-D(G(\bold{z}\_{i})\\))---if \\(D(G(\bold{z}))\\) produces \\(1\\) ("the discriminator is fooled"), \\(1-D(G(\bold{z}))\\) will produce \\(0\\) and the loss will be very high. Vise versa: if \\(D(G(\bold{z}))\\) produces \\(0\\) ("the discriminator picked out the fake"), the loss will be \\(0\\).

    Adding the two values encourages our discriminator to both classify real samples as real \\(1\\), and generated samples as fake \\(0\\).


#### Generator Loss {#generator-loss}

\begin{equation}
L\_{g}(\bold{z}\_{i}) = -\log (D(G(\bold{z}\_{i})))
\end{equation}

The sharp-eyed among you may realize that this is just the right term from the above expression without the \\(1-\\) negation. Indeed, the training target for the **generator** is very simple: "did I fool the discriminator": if \\(D\\) produces a large (close to \\(1\\)) output on the generated result---indicating that it is indeed "fooled"---our \\(log\\) will approach \\(0\\); whereas, if \\(D\\) produces a small (close to \\(0\\)) output on the generated result---indicating that it correctly spotted the fake---our \\(log\\) will produce a very negative value which creates high loss.


## The GAN Training Loop {#the-gan-training-loop}

Loss functions in place, we are almost ready to make the model. The thing that's tricky about training a GAN is that we have to ensure that _both_ the **discriminator** and **generator** are converging at the same exact time: ensuring that neither Capone nor Ness has _dramatically_ better technology than the other. This requires a little bit of finesse on your part in terms of the training loop. Plus, our loss functions here are quite special, so their definitions will also need a little wrangling.

At this point, though, I hope we are all pretty confident in how to structure the basics of a ML model. Instead of going over that again, let's go over some of the differences in Python pseudo-code (code that doesn't run, but to illustrate how you would write it)---specially in four focus areas.


### Dataprep {#dataprep}

Just a short note here on GAN data prep. What's the special thing about GANs? They are **self-supervised**---meaning they make their own labels. Instead, all you need to provide is plenty of examples of the thing you want your model to generate.

As such, your batch wouldn't contain `x_data`, `y_data`, etc. Instead, your dataset code should look something of the flavor:

```python
image_grid = example_data_for_the_gan_numpy()

dataset = TensorDataset(torch.tensor(image_grid).float()) # only one argument!
dataloader = DataLoader(dataset, batch_size=BATCH_SIZE, shuffle=True)
```

You will notice that the `TensorDataset` here took only _one_ argument as input, as opposed to the usual 2: this is, as we discussed before, as product of the fact that our GAN only needs examples of the thing you want it to generate---no labels needed (or possible!)


### Network Construction {#network-construction}

Of course, a GAN consists of two different networks. Though the network construction is mostly arbitrary, there are some general constraints:


#### generator {#generator}

1.  **input shape**: arbitrary, but takes exclusively random values as input; ideally you want this to be the same number of dimensions as the output
2.  **output shape**: the _output shape_ of your network has to be the shape of one sample of the real data as the generator should generate something that looks like real data
3.  **output activation**: whatever makes sense for the real data: if probabilities, then `softmax`; if images, then `sigmoid` (as normalized brightness), etc.


#### discriminator {#discriminator}

1.  **input shape**: the _output shape_ of the generator, or the shape of one real sample of data. (_Thinking Break_: WHY? as usual, pause and chat)
2.  **output shape**: `(batch_size, 1)`. We want to output a scalar between \\(0\\) ("probably fake") and \\(1\\) ("probably real") for every sample
3.  **output activation**: `sigmoid` to get those values actually between \\(0\\) and \\(1\\)


### Network Initialization {#network-initialization}

Because the generator and discriminator are two different networks, they require different optimizers!

So, we have to go about making them. This is fortunately pretty direct:

```python
# initialize networks
gen = GeneratorNetwork()
disc = DiscriminatorNetwork()

# initalize *two seperate optimizers*
gen_optim = Adam(gen.parameters(), lr=LR1)
disc_optim = Adam(disc.parameters(), lr=LR2)
```

Nothing out of the ordinary here, but a worthy reminder that you need 2. This will become important shortly.


### Training Loop {#training-loop}

This is the main event, and probably the bit that most people trip up the most: the training loop. Let's see a pseudocode implementation of one, and we will discuss how its structured.

_Note that we will be making some adjustments to our tried-and-true backprop logic._

```python
for _ in range(EPOCHS):
    for batch in iter(dataloader):
        # train generator first
        disc_score = disc(gen(torch.rand(BATCH_SIZE,YOUR,INPUT,SHAPE,HERE)))
        # compute + backprop generator loss
        generator_loss = (-torch.log(disc_score))
        generator_loss.backward()
        # disconnect discriminator gradients
        disc_optim.zero_grad()
        # step and clear
        gen_optim.step()
        gen_optim.zero_grad()

        # now, train discriminator
        disc_score_false = disc(gen(torch.rand(BATCH_SIZE,YOUR,INPUT,SHAPE,HERE)).detach())
        disc_score_true = disc(batch)
        # compute + backprop discriminator loss
        discriminator_loss = (-torch.log(disc_score_true)-torch.log(1-disc_score_false))
        discriminator_loss.backward()
        # step and clear
        disc_optim.step()
        disc_optim.zero_grad()
```

Woweee. Much to talk about. Let's break it down.


#### Scoring on fake sample {#scoring-on-fake-sample}

We first generate a fake sample from the generator by first passing it random noise from `torch.rand`, then passing its output to the discriminator to get a group of scores.

```python
disc_score = disc(gen(torch.rand(BATCH_SIZE,YOUR,INPUT,SHAPE,HERE)))
```


#### Calculating the generator loss {#calculating-the-generator-loss}

Next up, we will calculate the generator loss on the score that the discriminator gave for that fake sample we generated earlier.

Recall that:

\begin{equation}
L\_{g}(\bold{z}\_{i}) = -\log (D(G(\bold{z}\_{i})))
\end{equation}

and hence:

```python
generator_loss = (-torch.log(disc_score))
```

<span class="underline">Thinking break!</span>: why does implementing `(-torch.log(disc_score))` accomplish the same thing as taking \\(-\log (D(G(\bold{z}\_{i})))\\)? Specifically, how is `disc_score` calculated in our example?


#### The generator backprop step {#the-generator-backprop-step}

For all that drilling we did of BACKPROP! STEP! RESET!, the next step may feel sacrilegious:

```python
generator_loss.backward()
# disconnect discriminator gradients
disc_optim.zero_grad()
# step and clear
gen_optim.step()
gen_optim.zero_grad()
```

_What is happening here?_ Let's take it one step at a time.

First, we call `generator_loss.backward()` to backprop the loss; nothing wrong here. But then, against all odds, we call `.zero_grad()` on the **discriminator** optimizer. What gives?

Recall that, in this case, we are training the **generator**; as the loss-function literally asks the **discriminator** to be wrong, we mustn't be updating the discriminator using the gradients computed against this function; instead, we simply want the generator to be updated to better fool the **discriminator**.

Therefore, we immediately zero out all the gradients on the **discriminator** to prevent this step from updating the **discriminator** with the "fooling" loss function; and proceed to update the **generator** weights as usual.


#### Scoring on detached fake sample and real sample {#scoring-on-detached-fake-sample-and-real-sample}

Next up, training the **discriminator**. We first obtain scores from the discriminator for a real sample and a fake sample separately:

```python
disc_score_false = disc(gen(torch.rand(BATCH_SIZE,YOUR,INPUT,SHAPE,HERE)).detach())
disc_score_true = disc(batch)
```

You should notice that the code here for obtaining the fake sample is almost identical to the one before; except, we are calling this `.detach()` against the generator output. This is very functionally similar to the "calling `.zero_grad()` immediately" move we made earlier; called `.detach()` asks PyTorch to treat whatever tensor there as a constant, and not propagate gradients any more backwards into the **generator**, which in this case we do not want to change as we are optimizing the **discriminator**.


#### Calculating the discriminator loss {#calculating-the-discriminator-loss}

With all the pieces in place, this is again just a very directly implementation of:

\begin{equation}
L\_{d} (\bold{x}\_{i}, \bold{z}\_{i}) = -\log D(\bold{x}\_{i}) - \log  (1- D(G(\bold{z}\_{i})))
\end{equation}

in code.

```python
discriminator_loss = (-torch.log(disc_score_true)-torch.log(1-disc_score_false))
```


#### Normal backprop {#normal-backprop}

Because we ran `.detach()` before on the **generator** output, the **generator** is treated as a constant through this second loss function; as such, our backpropegation step will normally update the **discriminator**'s weights without any fuss. We therefore go back to our tried-and-true formula:

```python
discriminator_loss.backward()
disc_optim.step()
disc_optim.zero_grad()
```

Tada! That's it; the GAN training loop.


## Final Thoughts and Unit Challenge {#final-thoughts-and-unit-challenge}

Sorry for the very theoretically dense unit; please don't hesitate to flag us down if any questions take place. To leave you, here are a few final tips and tricks for making GANs.

1.  If your model doesn't work, try **pretraining** the **discriminator**: letting Eliot Ness get a bit of a head start by training the discriminator to recognize noise from real images; to do this, just don't run the code that updates the generator weights.
2.  GANs are known to perform something called **mode collapse**: whereby, instead of reaching **Nash equilibrium**, one of the two networks crash while the other one completely converges. One attempt to solve this is something called **Wassterstein Loss**, which is [discussed here](https://developers.google.com/machine-learning/gan/loss#wasserstein-loss) (<https://developers.google.com/machine-learning/gan/loss#wasserstein-loss>). One important note, however, is that using this loss function makes your network _technically_ not a GAN anymore (as the **discriminator** will not be actually usefully discriminating, instead acting as a "**critic**" for the generator only producing non-interpretable scores), but it has shown improved performance for the **generator** only.
3.  GANs are notoriously hard to make work. [See this whole page from Google](https://developers.google.com/machine-learning/gan/problems) (<https://developers.google.com/machine-learning/gan/loss>) about the various ways GANs can fail and possible strategies to remedy them. **Do not** be scared if your model doesn't work immediately or even after copious tuning.

Ok, onto the challenge: make a GAN! There are two variants of this:

1.  Easier --- use a pair of **dense neural networks** to make a GAN to generate valid series of \\(5\\) numbers which we explored in the beginning of this class \\([a,b,c,c+1,c+2]\\)
2.  Harder --- use a pair of **convolutional neural networks** to make a GAN to generate [these nice pictures of pets](https://thor.robots.ox.ac.uk/~vgg/data/pets/images.tar.gz) (<https://thor.robots.ox.ac.uk/~vgg/data/pets/images.tar.gz>). Sorry that this is not mountain goats: unfortunately, a dataset large enough is not available for this task :/

Good luck, and have fun!
