+++
title = "Exercises in PGA"
author = ["Houjun Liu"]
draft = false
+++

## Preamble {#preamble}

As notation differs between Alg4DM (which the presentation and notes use) and the paper, we provide a note here to standardize the notation of the PGA formulation to avoid confusion.

Recall that the non-linear program formulation of the naive PGA implementation gives:

\begin{align}
\max\_{\theta}\ &f(\theta) \\\\
\text{such that}\ &J\theta = \bold{1} \\\\
& \theta \geq \bold{0} \\\\
& h\_{i}(\theta) \leq  \epsilon\_{i},\ \forall i
\end{align}

for:

\begin{equation}
f(\theta) = \beta^{\top} \bold{Z}^{-1} \bold{r}\_{\theta}
\end{equation}

and

\begin{equation}
h\_{i}(\theta) = \beta^{\top} \bold{Z}^{-1} C\_{i}
\end{equation}

where \\(\bold{Z} = (\bold{I} - \gamma \bold{T}\_{\theta})\\), and \\(\bold{T}\_{\theta}((x,s), (x',s'))\\) is a transition matrix between state and controller latent pairs.


## Question 1 {#question-1}

In the Non Linear Program (NLP) formulation above, the constraint \\(J\theta = \bold{1}\\)  is a block-diagonal matrix filled with only ones and zeros that serve a particular purpose.

1.  Though we didn't describe \\(J\\) in detail in the talk apart from its function, recall that its job is to add up certain elements in the \\(\theta\\) vector to ensure they satisfy certain constraints. What breaks down about PGA if that constraint is removed (i.e. what does it do)?
2.  Given your answer in 1, what should be the input and output dimensions of the \\(J\\) map? You may use in your answer, as needed, any expression that involves \\(|X|\\) the number of nodes in the controller, \\(|A|\\) the size of the action space, \\(|O|\\) the size of the observation space and \\(|S|\\) the size of the state space.


### Answer {#answer}

Recall that:

\begin{equation}
\theta = \mqty(\Psi(a\_0 | x\_0) \\\ \Psi(a\_1 | x\_0) \\\ \dots \\\ \Psi(a\_n | x\_N) \\\ \eta(x\_0 | x\_0, a\_0, o\_0) \\\ \eta(x\_1 | x\_0, a\_0, o\_0) \\\ \dots \\\ \eta(x\_N | x\_N, a\_n, o\_f))
\end{equation}

We want to ensure that each output \\(\sum\_{a}\Psi(a | x\_{j}) = 1\\), and \\(\sum\_{x} \eta(x|x\_{i},a\_{j},o\_{k}) = 1\\) (that both the action distributions at a node and the node transitions are indeed categirocial probability distributions).

As we flattened every combination of possible outputs of \\(\Psi\\) and \\(\eta\\) of output onto \\(\theta\\), the constraint \\(J\theta = \bold{1}\\) ensures that each \\(\Psi\\) and \\(\eta\\) conditioned on a pair of current condition remains a probability distribution. Otherwise, the model will likely collapse to taking advantage of impossible probabilities ("we have \\(300\\%\\) chance of a highly valuable state!") to maximize the utility.

Its signature is:

\begin{equation}
J: \mathbb{R}^{|A \times X \times X \times X \times A \times O|} \to \mathbb{R}^{|X \times X \times A \times O|}
\end{equation}

Each input dimension corresponds to a slot on \\(\theta\\), and each output dimension corresponds to a thing we want to add up to \\(1\\), which means each pair of conditions to the distributions of \\(\Psi\\) and \\(\eta\\).

As there are \\(A \cdot X\\) possible combinations of \\(a,x\_{j}\\) for \\(\Psi(a|x\_{j})\\) and \\(X \cdot X\cdot A\cdot O\\) possible combinations of \\(x, x\_{i}, a\_{j},o\_{k}\\) for \\(\eta(x|x\_i, a\_{j}, o\_{k})\\) to be tabulated for probability in \\(\theta\\), this matrix has \\(A^{2}X^{3}O\\) columns as input.

As there are \\(X\\) possible prior conditions to \\(\Psi\\) and \\(X \cdot A \cdot O\\) possible prior conditions to \\(\eta\\), this means the matrix should have \\(X^{2}AO\\) rows of output.


## Question 2 {#question-2}

The constraints to the optimization objective for controller C-POMDPs is extremely similar to non-constrained controller POMDPs. In effect, they only differ by the third constraint:

\begin{equation}
h\_{i}(\theta) \leq \varepsilon\_{i}
\end{equation}

In fact, both systems have the same, exact, unchanged optimization objective that doesn't change regardless of constraint: \\(\max\_{\theta}\ &f(\theta)\\).

Why is solving C-POMDPs using controllers gradient methods much harder than solving POMDPs using a similar objective, and how exactly does the PGA authors' contributions address this issue to make its computation feasible?


### Answer {#answer}

In order to ensure that the output distribution by gradient descent actually fits the constraints provided (and other constraints regarding them being probability distributions), the constraints to the optimization problem---\\(h\_{i}(\theta)\\) included---needs to be computed per step to project the raw output parameters down into valid parameters.

\\(h\_{i}\\), importantly, is **non-linear** and **non-convex**. Removing this constraint makes the optimization bounds linear which drastically speeds up computation. This is why POMDPs leveraging similar approaches don't have as much computational intractability.

To solve this, the PGA authors linearise the \\(h\_{i}\\) function using a first-order Taylor expansion in order to make this last constraint linear as well, which makes the entire projection problem have linear constraints: vastly improving computational efficiency.
