+++
title = "AML: REINFORCE(ment learning)"
author = ["Houjun Liu"]
tags = ["writing", "aml"]
draft = false
+++

Woof. As I begin to write this I should add that **this unit is going to be conceptually dense**. Though we are teaching one particular algorithm (incidentally, named, REINFORCE), the world of reinforcement learning is build by one, if not many, very advanced treatments in maths.

So if anything, I would focus on getting the conceptual flavor of how these problems are formulated and discuses. If you can be along for the mathematical and algorithmic journey, then even better --- but by no means required or expected... There's still lots for all of us to learn together.

Speaking of college level classes, I _loved_ the detailed and accessible overview of Reinforcement Learning methods by Professors Charles Isbell and Michael Littlman from Georgia Tech CoC. If you find yourself gravitating towards the topic of this unit, go check them out:

<https://omscs.gatech.edu/cs-7642-reinforcement-learning-course-videos>

Ok. Let's dive in.


## Motivation {#motivation}

We are used to a clear, **differentiable** loss function. One particular exercise in class we do a lot is to shout out a problem, and think about its loss function:

-   "classifying Pokemon!" ... "cross entropy!"
-   "generating stock price!" ... "MSE!"
-   "making pictures of rice!" ... "GAN non-saturating loss!"

and so on. Regardless of the classification/regression difference, you will note that these functions are all of the shape:

\begin{align}
&f(\hat{y}, y) = \text{single float value}
\end{align}

Meaning, it takes **two vectors**---the _output_ ("prediction", \\(\hat{y}\\)) of the network, and the _desired output_ ("target", \\(y\\)) in your training data, and produces (sometimes with much mathematical gymnastics) a single scalar value representing which we try to optimize to be lower.

Note that, regardless of **supervised learning** (like Pokemon classification; we have input, desired targets, and actual output) or **unsupervised learning** (like GAN rice generation; we have only the desired targets and actual output), we _have the desired targets_ in hand. We _know_ what the model is supposed to do (i.e. have many examples of correct behavior), and are just teaching the model to do so one way or other.

But what if.... we _don't_ know the correct behavior of the model? Can you brainstorm some tasks that would very well might want to automate using ML, but can't provide precise labels for the desired action?

...

Take, for instance, the task of [teaching this poor stick figure how to stand up](https://gymnasium.farama.org/environments/mujoco/humanoid_standup/):

{{< figure src="/ox-hugo/2023-04-30_12-37-54_screenshot.png" caption="<span class=\"figure-number\">Figure 1: </span>aw so sad" >}}

you are given a list of forces currently hitting the figure, and you are to produce a list of forces the figure's limbs should produce.

Of course you can't know precisely the labels at every given moment: there are no "best" or, arguably, even a "correct" strategy for standing the figure up. There's no labels which you can use to even begin to approach this task!

What to do?

**In come Reinforcement Learning (RL)**

Ok, this is where the math will begin. I encourage you to take a piece of paper and start writing down each symbol we define together, and refer to that piece of paper copiously to understand the expressions.

If you want to learn this more, the conceptual basis we are working with is called **policy gradient**, specifically the **REINFORCE** algorithm. This is _not even close_ to being the only way to approach the Reinforcement Learning task; but its one fairly interesting and successful approach.


## The Environment: Agent, State, Action, and Policy {#the-environment-agent-state-action-and-policy}

Three variables underlie the basics of **Reinforcement Learning**:

-   **state** \\(s\_{t}\\): the "situation" of the **environment**, what can be "observed"; for our example above, this looks like the forces on each limb of our humanoid.
-   **action** \\(a\\): a certain perturbation one can do to the agent which will influence its **state**; for our example, this looks like moving ("translating"/"applying force on") one or many limbs.
-   **policy** \\(\pi\\): the **policy** is a function which takes the **state** as input, and produces a probability distribution (think "softmax") over all the **actions** one could choose. We will talk extensively about this shortly.
-   **agent**: a general term describing the actual thing being controlled; for instance, our humanoid.
-   **episode**: an entire group of **states**, starting at the beginning and continuing for instance, for a fixed number of **states** or until a certain end is reached (for instance, for the humanoid walking task, when it falls).

---

IMPORTANT NOTE: policy is as function \\(\pi(s\_{t})\\), literally a _function named pi_. It has nothing to do with the ratio between the radius and circumference of a circle. Its _just called pi..._ Unfortunately, we are working to stick to the language used by current literature, but sometimes their symbol choice is rather deranged.

---


## Reward {#reward}

In lieu of a loss function, **Reinforcement Learning** is a class of models that learn from a numerical signal called **reward**. The reward function typically looks like this:

\begin{equation}
r\_{t}(s\_{t},a\_{t}) = \text{single float value}\ (-\infty, +\infty)
\end{equation}

Instead of calculating the difference between the desired and actual output of the model, the **reward** signal scores _how good taking a certain action is_ in an environment. It takes two vectors as input: the **state** and an **action** on the state, to produce a certain score.

Unlike what we are used to with the loss, this **reward** value is _not_ differentiable w.r.t. the parameters of the network! The action is a _sample_ from the distribution; so this score can be generated however you'd like. Furthermore, unlike what we are used to with **loss**, a **higher** **reward** value means a better action.


## Cumulative Discounted Reward {#cumulative-discounted-reward}

Note again the expression for that reward statement:

\begin{equation}
r\_{t}(s\_{t}, a\_{t})
\end{equation}

each of these variables are parameterized by this subscript $t$---meaning reward is calculated _per time!_ This actually presents us a problem to describe the _overall_ behavior of our agent. Pause and think why this may be.

...

For instance, the act of "standing up" often require multiple steps; many of which honestly doesn't contribute at all to the act of standing up until many steps later! For instance, the act of propping up one's hands to the ground---which actually _lowers_ your center of gravity, and hence naively should get a negative reward---is actually critical in being able to stand up well.

If we train a model (somehow, ignoring the details for now) to maximize \\(r\_{t}\\), then we will get an _instant gratification machine_: meaning, its pretty useless for any just a tad-bit complex task!

To deal with this, we need to introduce the idea of a **trajectory** (\\(\tau\\)). A **trajectory** is a list of state-action pairs generated by the same exact policy (i.e. no learning at all) just playing a game out to completion---i.e. until the end of the **episode**.

That is:

\begin{equation}
\tau = [(s\_{0}, \pi(s\_{0})), \dots, (s\_{n}, \pi(s\_{n}))] = [(s\_{0}, a\_{0}), \dots, (s\_{n}, a\_{n})]
\end{equation}

We then define a new-and-improved reward function \\(R\_{t}(\tau)\\) which models not just _how good our policy is right now_, but _how good WILL our policy be given these set of actions_.

Specifically, at every timestamp:

\begin{equation}
R\_{t}(\tau) = r\_{t}(s\_{t}, a\_{t}) + \gamma r\_{t+1}(s\_{t+1}, a\_{t+1})+ \gamma^{2} r\_{t+2}(s\_{t+2}, a\_{t+2}) + \dots
\end{equation}

where, \\(0 \leq \gamma \leq 1\\) is a hyperparameter called a **discount factor** controlling how much more the current reward matters.

Woof, the math here looks a bit scary; let's break it down. We are defining a function $R<sub>t</sub>(&tau;)$---taking \\(\tau\\) as input, meaning this function actually knows all of the model's future behavior as well as current ones; each term of this function \\(R\\) multiplies \\(\gamma\\) a certain number of times to the instantaneous reward at that point.

This function, then, essentially adds up all the _future reward taking the current action will eventually lead to_---"how much reward does choosing this path afford you"---discounting rewards earned in the future with a certain factor \\(\gamma\\) because those are subject to change based on your **agent**'s future decisions. Things that are more the future gets discounted harder, by \\(\gamma^{n}\\).

This expression for \\(R\_{t}(\tau)\\) is called the **cumulative discounted reward**, or "the reward" for short. When we refer to the reward in the rest of this write-up, this is probably the expression you are looking for.


## Policy Gradient Theorem {#policy-gradient-theorem}

The policy gradient theorem is unfortunately not going to be very well motivated in the time that we have together. If you are curious, the proof, and some more discussion, can be found [here](https://lilianweng.github.io/posts/2018-04-08-policy-gradient/#proof-of-policy-gradient-theorem) or in my notes [here]({{< relref "KBhpolicy_gradient.md" >}}).

For now, let's just skip to the result... The loss function objective \\(J\\) with which we can use to optimize a neural network, given a set of _non-connected_ **reward** signals and a policy to optimize \\(\pi\\), is:

\begin{equation}
-\sum\_{t=0}  \log \pi\_{\theta} (a\_{t} | s\_{t}) R\_{t}(\tau)
\end{equation}

where, \\(\theta\\) are the **weights** to **policy** \\(\pi\\), and the rest are usual symbols defined above.

Let's break it down.

The rest of this is a summation over all time of the trajectory; meaning you have to first generate the entire trajectory \\(\tau\\) first and then add this value per slice:

-   \\(\pi\_{\theta}(a\_{t}|s\_{t})\\): this is the _probability_ (often called "confidence") of the model to take action \\(a\_{t}\\) at state \\(s\_{t}\\); for a discrete set of actions (i.e. choosing/classification), we already know how to do this: `torch.argmax`. The code example below/in class explores how to do this for a continuous sample.
-   \\(\log \pi\_{t}(a\_{t}|s\_{t})\\): we want to take the log of this confidence score the model produced: bigger "confident" number, smaller magnitude log, smaller error
-   \\(R\_{t}(\tau)\\) the **Cumulative Discounted Reward** from that timestamp on, as we discussed before

The sharp-eyed among you may notice that this function is very similarly shaped as cross-entropy: except you swap out the ground truth \\(y\\) for the cumulative reward \\(R\_{t}(\tau)\\). Indeed that is the case! In fact, much of the similar motivations apply both functions.


## REINFORCE {#reinforce}

Loss function in hand, its time to actual perform the actual optimization. There's three main steps to actually perform the REINFORCE algorithm optimization:

1.  **Play the game**: generating _entire **episode**_ worth of \\(s\_{t}, a\_{t}, r\_{t}\\) using the same exact unoptimized policy \\(\pi\\), storing a full trajectory \\(\tau\\)
2.  **Calculate the reward**: calculate, using the discounting equation above, \\(R\_{t}\\) from each \\(r\_{t}\\). Remember that each \\(R\_{t}\\) is a reward comprised of the current reward, plus \\(\gamma\\) raised to a certain power to discount the future rewards \\(r\_{t+n}\\).
3.  **Replay and backprop**: Compute the actual error above for each timeframe, backpropegating them all but _don't change the weights_ (i.e. call `.backward()` but not `.step()`)
4.  **Change the weights all at once**: call `.step()` and make our model better!

As we have no fixed-length data, there are no **epochs** to this setup.; we will instead specify a number of times we want to run the above steps---meaning we have a number of **episodes** you can tune while training the model.


## Next Steps {#next-steps}

Apart from the bunch of theory here, there still remain a lot of practical questions in how to make all this happen in PyTorch. We hope to discuss this together in class, and explore the wonderful set of tools Gym---a RL state/reward calculation library---can do for us!

To get started on this discussion, here's one implementation of the humanoid-standup task we can be working from: <https://github.com/Jemoka/demo_amlmod4rl/blob/master/main.py>
