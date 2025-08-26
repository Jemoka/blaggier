+++
title = "SU-CS224N MAY022024"
author = ["Houjun Liu"]
draft = false
+++

## Zero-Shot Learning {#zero-shot-learning}

GPT-2 is able to do many tasks with **not examples** + **no gradient updates**.


## Instruction Fine-Tuning {#instruction-fine-tuning}

Language models, by default, are not _aligned_ with user intent.

1.  collect paired examples of **instruction** + **output** across many tasks
2.  then, evaluate on **unseen tasks**

~3 million examples &lt;&lt; n billion examples

dataset: MMLU

You can generate an [Instruction Fine-Tuning](#instruction-fine-tuning) dataset by asking a larger model for it (see Alpaca).


### Pros + Cons {#pros-plus-cons}

-   simple and straightforward + generalize to unseen tasks
-   but, its **EXPENSIVE** to collect ground truth data
    -   ground truths maybe wrong
    -   creative tasks may not have a correct answer
    -   LMs penalizes all token-level mistakes equally, but some mistakes are worse than others
    -   humans may generate suboptimal answers


## Human Preference Modeling {#human-preference-modeling}

Imagine if we have some input \\(x\\), and two output trajectories, \\(y\_{1}\\) and \\(y\_{2}\\).

Suppose we have \\(R(x, y)\\).

We desire:

\begin{equation}
\mathbb{E}\_{\hat{y} \sim p\_{\theta}(y | x)} R(x, y)
\end{equation}


### RLHF, in broad strokes {#rlhf-in-broad-strokes}

1.  do [Instruction Fine-Tuning](#instruction-fine-tuning)
2.  estimate a reward model \\(R(x,y)\\)
3.  maximize that reward model


### Model Preferences as an NLP Problem {#model-preferences-as-an-nlp-problem}

Train:

\begin{equation}
RM\_{\phi}(x, y)
\end{equation}

which models a human preference scores.


### Get preference data {#get-preference-data}

To get the preference data actually, ask the humans to **RANK** the rankings.


#### Bradley-Terry Preference Model {#bradley-terry-preference-model}

Suppose a human chose \\(y^{w}\\) over \\(y^{l}\\). Then, [Bradley-Terry Preference Model](#bradley-terry-preference-model) tells us that a good reward model \\(R\\) will minimize:

\begin{equation}
J(\phi) = -\mathbb{E}\_{(x, y^{w}, y^{l})} \qty[\log \sigma \qty(R\_{\phi}(x, y^{w}) - R\_{\phi}(x, y^{l}))]
\end{equation}


### PPO {#ppo}

Then, we optimize this:

\begin{equation}
\max\_{\theta} \mathbb{E}\qty[ RM\_{\phi}(x, \hat{y}) - \beta \log \qty( \frac{P\_{\theta}^{RL} (\hat{y} | x)}{P\_{\theta}^{orig} (\hat{y} | x)})]
\end{equation}

we have a penalty term to prevent large drifts.


### DPO {#dpo}

What if there is a way to write \\(R\_{\phi}(x,y)\\) directly in terms of \\(p\_{\theta}^{RL}(\hat{y}|x)\\)?

---

Our goal is to solve this problem:

\begin{equation}
\max\_{\theta} \mathbb{E}\qty[ RM(x, \hat{y}) - \beta \log \qty( \frac{P\_{\theta}^{RL} (\hat{y} | x)}{P\_{\theta}^{orig} (\hat{y} | x)})]
\end{equation}

There's actually a closed-form solution to this!

\begin{equation}
p^{\*} (\hat{y} | x) = \frac{1}{Z(x)} p^{orig} (\hat{y}|x) \exp \qty(\frac{1}{\beta} RM(x| \hat{y}))
\end{equation}

where \\(Z(x) = \sum\_{\hat{y} \in y}^{} p^{orig}(\hat{y}|x)\\).

Notice! Computing the normalization term \\(Z\\) is intractable! But first, we rearrange this equation to get:

\begin{equation}
RM(x, \hat{y}) = \beta \log  \frac{p^{\*}(\hat{y}|x)}{p^{PT}(\hat{y}|x)} + \beta \log  Z(x)
\end{equation}

Now, we want to solve for a \\(p^{\*}\\) given reward signal, so let's parametrize it:

\begin{equation}
RM\_{\theta}(x, \hat{y}) = \beta \log  \frac{p\_{\theta}(\hat{y}|x)}{p^{PT}(\hat{y}|x)} + \beta \log  Z(x)
\end{equation}

(issue: wait, but in the beginning \\(\theta = PT\\), so \\(\log (1) = 0\\), and this whole thing is \\(0\\).... we will get to that, also \\(Z\\) is still intractable.)

Now! Recall [Bradley-Terry Preference Model](#bradley-terry-preference-model): a good \\(RM\_{\theta}\\) should

\begin{equation}
\min\_{\phi} -\mathbb{E}\_{(x, y^{w}, y^{l})} \qty[\log \sigma \qty(R\_{\phi}(x, y^{w}) - R\_{\phi}(x, y^{l}))]
\end{equation}

Plugging our expression for \\(RM\_{\theta}\\) from an equation ago into here, you'll notice the \\(Z\\) CANCELLS OUT! And this gives:

\begin{equation}
\min\_{\theta} -\mathbb{E}\_{(x, y^{w}, y^{l})} \qty[\log \sigma \qty(\beta \log \frac{p\_{\theta}(y^{w}|x)}{p\_{PT}(y^{w}|x)} - \beta \log \frac{p\_{\theta}(y^{l}|x)}{p\_{PT}(y^{l}|x)})]
\end{equation}
