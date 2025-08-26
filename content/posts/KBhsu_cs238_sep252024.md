+++
title = "SU-CS238 SEP252024: Probability Review"
author = ["Houjun Liu"]
draft = false
layout = "blank"
+++

## Random Variable {#random-variable}

**random variables** takes on different values with different probabilities. Each value a **random variable** take on is an **event**.

For instance, here's a random variable representing a die: \\(X\\). It can takes on the following values, with the following probabilities:

\begin{align}
P(X=1) = \frac{1}{6}\\\\
P(X=2) = \frac{1}{6}\\\\
\dots \\\\
P(X=6) = \frac{1}{6}
\end{align}

where each assignment \\(X=k\\) is what we refer to above as an **event**.

The set of assignments of a random variable and their associated probability is called a _distribution_: distributions "assigns probabilities to outcomes." When we say a certain random variable \\(X\\) is "distributed" following a distribution \\(D\\), we say \\(X \sim D\\). Semantically, we say \\(X\\) is a \\(D\\) random variable.


## notation time! {#notation-time}

\begin{equation}
P(X=k)
\end{equation}

"our random variable \\(X\\) takes up the value \\(k\\)". We (including the textbook!) write it as:

\begin{equation}
P(x^{k})
\end{equation}

as a shorthand.


## a frequentist definition {#a-frequentist-definition}

say you performed \\(n\\) trials, and you are wondering what the probability of a certain event \\(E\\) is amongst those trials

\begin{equation}
P(x^{j}) = \lim\_{n\to \infty} \frac{n(x^{j})}{n}
\end{equation}

"the ratio of trials that result in the event to the number of times you tried"


## Probability Axioms {#probability-axioms}

-   \\(0 \leq P(x^j) \leq 1, \forall X, \forall j\\): all probabilities are numbers between 0 and 1
-   \\(P(x^1 \vee \ldots \vee x^n)=1\\): set of all possible outcomes must be from the sample space
-   if \\(x^{a}\\) and \\(x^{b}\\) are mutually exclusive, \\(P(x^a)+P(x^b) = P(x^a \vee x^b)\\)
    -   so: if \\(if \ x^a \wedge x^b = F\\) (there's no world in with \\(x^{a}\\) and \\(x^{b}\\) is both true), then \\(P(x^a)+P(x^b) = P(x^a \vee x^b)\\)


## Probabilities Correlaries {#probabilities-correlaries}

To prove the results in this part, we will use the language of set theory. However, axioms derived in this language directly translate into the logic language before and after.


### Probability of complements {#probability-of-complements}

Statement:

\begin{equation}
P(\neg x^j) = 1-p(x^j)
\end{equation}

Discussion:
The worlds in which \\(\neg x^{j}\\) is the complement of the world in which \\(x^{j}\\) is true. Let the worlds in which \\(x^{j}\\) is true be \\(E\\), then, we desire:

\\(P(E^{C}) = 1- P(E)\\)

Because:

We know that \\(E\\) and \\(E^{C}\\) are mutually exclusive, so

\begin{align}
P(S) = 1 &= P(E \cup E^{C})  \\\\
&= P(E) + P(E^{C})
\end{align}

So \\(1-P(E) = P(E^{C})\\)


### Probability of Subsets {#probability-of-subsets}

Statement:

\begin{equation}
x^a \rightarrow x^b, P(x^a) \leq P(x^b)
\end{equation}

Discussion:
The first part implies that the worlds in which \\(x^{a}\\) is true is a subset than the words in which \\(x^{b}\\) is true (because \\(x^{a}\\) implies \\(x^{b}\\)). Meaning, if \\(E\\) was the worlds in which \\(x^{a}\\) is true, and \\(F\\) is the world in which \\(x^{b}\\) is true, we desire:

if \\(E \subseteq F\\), then \\(P(F) \geq P(E)\\).

Recall a result from set theory: if \\(E \subseteq F\\), \\(F = E \cup (E^{C} \cap F)\\).

Then, we have:

\begin{align}
P(F) &= P(E \cup (E^{C} \cap F))   \\\\
&= P(E) + P(E^{C} \cap F)
\end{align}

\\(P(E^{C} \cap F) \geq 0\\), so:

\begin{equation}
P(F) \geq P(E)
\end{equation}


### Inclusion-Exclusion Principle {#inclusion-exclusion-principle}

Statement:

\begin{equation}
P(x^a)+P(x^b) - P(x^a\wedge x^b) = P(x^a \vee x^b)
\end{equation}

Discussion:
Consider \\(A\\) be the set of worlds in which \\(x^{a}\\) is true; and \\(B\\) the set of worlds in which \\(x^{b}\\) is true.

\begin{equation}
P(A \cup B) = P(A) + P(B) - P(A\cap B)
\end{equation}

Again, consider: \\(A \cup B = A \cup (A^{C} \cap B)\\), and \\(B = (A \cap B) \cup (A^{C} \cap B)\\)

so:

\begin{align}
P(A\cup B) &= P(A \cup (A^{C} \cap B))   \\\\
&= P(A) + P(A^{C} \cap B) \\\\
&= P(A) + P(B) - P(A \cap B)
\end{align}


## Conditional Probabilities {#conditional-probabilities}

\\(x\\): loosing contact, \\(y\\): sensor failure.

"what's the probability of us loosing contact given we had a sensor failure?"

\begin{equation}
P(x|y) :=  \frac{P(x \wedge y)}{P(y)}
\end{equation}

for simplicity we will write **AND** with a comma:

\begin{equation}
P(x|y) :=  \frac{P(x, y)}{P(y)}
\end{equation}

multiplying:

\begin{equation}
P(x|y)P(y) :=  P(x, y)
\end{equation}

We can keep going!

\begin{equation}
P(z|x,y) P(x,y) = P(z,x,y)
\end{equation}

stick them together:

\begin{equation}
P(z|x,y) P(x|y)P(y) = P(z,x,y)
\end{equation}

so, in general:


### Probability chain rule {#probability-chain-rule}

\begin{equation}
P(a^1, a^2 \dots, a^{n}) = P(a^{n} \mid a^1, a^2 \dots a^{n-1})P(a^1, a^2 \dots a^{n-1})
\end{equation}


### Condition does not change axioms/results if ts consistent {#condition-does-not-change-axioms-results-if-ts-consistent}

-   $0 &le; P(x) &le; 1\\(0 \leq P(x|y) \leq 1\\)
-   ...


## Bayes Theorem {#bayes-theorem}

"Inference!"

it provides us a way of going from \\(P(x|y) \implies P(y|x)\\); let \\(y\\) be spam, and \\(x\\) be emails with the word "gold" in it. It's easy to measure \\(P(x|y)\\) (get a bunch of spam, check for the word "gold"), and by doing this we can get the more important value of \\(P(y|x)\\) (probability of spam given "gold".)

Recall conditional probability:

\begin{equation}
P(x|y) :=  \frac{P(x, y)}{P(y)}
\end{equation}

and the fact that \\(P(x,y) = P(y,x)\\). so:

\begin{align}
P(x|y) &=  \frac{P(x, y)}{P(y)}  \\\\
&= \frac{P(y,x)}{P(y)}  \\\\
&= \frac{P(y|x) P(x)}{P(y)}
\end{align}


## Independence {#independence}

We define \\(y \perp x\\) if:

\begin{equation}
P(x|y) = P(x)
\end{equation}

"knowing \\(y\\) doesn't do anything to our knowledge of \\(x\\)"

Now. Consider the conditional probability:

\begin{equation}
P(x|y) P(y) = P(x,y)
\end{equation}

substituting our definition in:

\begin{equation}
P(x) P(y) = P(x,y)
\end{equation}

if \\(y \perp x\\).

---

stuff could be **conditionally** independent:

\begin{equation}
P(e^{1}, e^{2}|f) = P(e^{1}|f) P(e^{2}|f)
\end{equation}

does **not** imply \\(e^{1} \perp e^{2}\\)

conversely, \\(e^{1}\perp e^{2}\\) does **not** imply \\(e^{1} | f \perp e^{2} | f\\)


## Law of Total Probability {#law-of-total-probability}

\begin{equation}
P(x) = \sum\_{y \in Y} P(x,y)
\end{equation}

meaning also:

\begin{equation}
P(x) = \sum\_{y \in Y} P(x|y) P(y)
\end{equation}

applying this to Bayes theorem

\begin{align}
P(x|y) &= \frac{P(y|x) P(x)}{\sum\_{x} P(y|x) P(x)}
\end{align}


## Practice Problems {#practice-problems}


### Mammogram {#mammogram}

Conditions:

-   natural occurrence of breast cancer is \\(8\\%\\)
-   mammogram results a positive in \\(95\\%\\) in people with breast cancer
-   mammogram results a positive in \\(7\\%\\) in people without breast cancer

**What's the probability that a patient has breast cancer with a positive mammogram result?**

Let \\(x\\) be the event that the patient has breast cancer, and \\(y\\) is a positive mammogram result. We want \\(P(x|y)\\).

Let's convert each of our conditions into this formalism!

-   \\(P(x) = 0.08\\)
-   \\(P(y|x) = 0.95\\)
-   \\(P(y|\neg x) = 0.07\\)

Now, recall we want:

\begin{equation}
P(x|y) = \frac{P(y|x)P(x)}{P(y|x)P(x)+P(y|\neg x)P(\neg x)}
\end{equation}

The only thing we don't directly have \\(P(\neg x)\\), but recall by the properties is \\(P(\neg x) = 1-P(x)\\). So, \\(P(\neg x) = 1-0.08 = 0.92\\).

Plugging everything in:

\begin{equation}
P(x|y) = \frac{0.95\cdot0.08}{0.95\cdot0.08+0.07\cdot0.92} \approx 0.5413
\end{equation}


### Monty Hall {#monty-hall}

Three doors, prize behind one, midterm behind the other two. Assume the likelihood of the prize behind each door is equivalent, and assume that the host is playing rationally.

You picked a door, and the host said another door had a midterm. Should you switch?

---

WLOG you picked door 1, host said door 3 had midterm.

Let's formalize this first. Let \\(p^{i}\\) be the event that \\(i\\) door had prize; and \\(h^{j}\\) be the event that host picks \\(j\\) door.

We desire to answer:

\begin{equation}
P(p^{1} | h^{3}) \stackrel{?}{\succ} P(p^{2} | h^{3})
\end{equation}

---

recall: \\(P(p^{(i)}) = \frac{1}{3}\\)


#### Left Case {#left-case}

let us consider first:

\begin{equation}
P(p^{1} | h^{3}) = \frac{P(p^{1}, h^{3})}{P(h^{3})}
\end{equation}

Let us expand this out with the LoTP:

\begin{equation}
\frac{P(h^{3}|p^{1}) P(p^{1})}{P(h^{3}|p^{1}) P(p^{1}) + P(h^{3}|p^{2}) P(p^{2}) + P(h^{3}|p^{3}) P(p^{3})}
\end{equation}

-   Recall all \\(P(p^{j}) = \frac{1}{3}\\)
-   Now, let's consider each case:
    -   \\(P(h^{3}|p^{1}) = \frac{1}{2}\\) --- the host has no bias towards opening either doors 2 or 3, just not door 1
    -   \\(P(h^{3}|p^{2}) = 1\\) --- the host will definitely
        open door \\(3\\), because they can't open your door and door 2 has
        the prize
    -   \\(P(h^{3}|p^{3}) = 0\\) --- a rational host will not open the door that has the prize

Plugging this in:

\begin{equation}
P(p^{1} | h^{3}) = \frac{\frac{1}{2} \frac{1}{3}}{\frac{1}{2} \frac{1}{3} + 1 \frac{1}{3}} = \frac{1}{3}
\end{equation}


#### Right case {#right-case}

Note that the denominator is exactly the same

\begin{equation}
P(p^{2} | h^{3}) = \frac{P(p^{2}, h^{3})}{P(h^{3})}
\end{equation}

Our numerator is \\(P(p^{2}, h^{3}) = P(h^{3}|p^{2}}) P(p^{2})\\). The left value is \\(1\\), and the right value is still \\(\frac{1}{3}\\). Plugging it in:

\begin{equation}
P(p^{2} | h^{3}) = \frac{1 \frac{1}{3}}{\frac{1}{2} \frac{1}{3} + 1 \frac{1}{3}} = \frac{2}{3}
\end{equation}


#### Conclusion {#conclusion}

\begin{equation}
P(p^{1} | h^{3}) < P(p^{2} | h^{3})
\end{equation}

meaning

\begin{equation}
p^{1} | h^{3} \prec p^{2} | h^{3}
\end{equation}

so we should probably switch


## Continuous and Discrete Probabilities {#continuous-and-discrete-probabilities}


### Discrete Distributions {#discrete-distributions}

So far we have been talking about **discrete** distributions, where a random variable takes on discrete values such as dice rolls \\(1:6\\). These distributions use a **probability mass function** (by convention uppercase \\(P\\)), which is written as an assignment of probabilities to values.

As a reminder:

\\(P(S) = 1\\), where \\(S\\) is the sample space. Since our probability mass function specify all possible events, we should expect:

\begin{equation}
\sum\_{X}^{} P(X) = 1
\end{equation}


### Continuous Distributions {#continuous-distributions}

"what's the probability of the high tomorrow at Stanford being exactly \\(82.9239328452^{\circ} F\\)?"

Vanishingly unlikely. So, events in continuous distribution are formulated as an _integral_ over ranges of likely outcomes. That is:

\begin{equation}
P(a \leq X \leq b)
\end{equation}

if \\(X \sim D\\) where \\(D\\) is continuous.

Continuous distributions are given by a **probability density function** (PDF), which defines _changes_ in probabilities over a range. Integrating it results in the actual probability value. That is, for PDF \\(f(x)\\) (by convention lowercase \\(f\\)), we have:

\begin{equation}
P(a \leq X \leq b) = \int\_{a}^{b} f(x) \dd{x}
\end{equation}

We often ask for events of the shape \\(X \leq x\\) (or, the complement thereof, \\(X \geq x\\))---"what's the chance that it will be hotter than \\(90^{\circ}\\) tomorrow? So, we often compute the **cumulative density function** (CDF) of a probability \\(F(x)\\) (by convention uppercase \\(f\\)), which is defined by:

\begin{equation}
F(x) = P[X \leq x] = \int\_{-\infty}^{x} f(z) \dd{z}
\end{equation}


### Moments {#moments}

expected value: the "mean" of the random variable:

\begin{equation}
E[X] = \int\_{-\infty}^{\infty} x f(x) \dd{x}
\end{equation}

and variance:

\begin{equation}
Var[X] = E[X^{2}] - [E[X]]^{2}
\end{equation}


## Some Useful Distributions {#some-useful-distributions}

See slides.


### Gaussian {#gaussian}

It's the best because the **central limit theorem** exists: if you have a bunch of independent, and identical random variables, adding more them together results in more of a Gaussian distribution. That is, for a bunch of independent \\(X\_{n}\\) where all \\(X\_{j}\sim X\\), we have that:

\begin{equation}
    \sum\_{i=1}^{N} X\_{n} \sim \mathcal{N}(n\mu, n \sigma^{2}), \text{as}\ n \to \infty
\end{equation}


## Compute a CDF! {#compute-a-cdf}

2.1, Chapter 2 of AlgDM: Consider a continuous random variable \\(X\\), which exponential distribution parameterized by \\(\lambda\\) with density \\(p(x|\lambda) = \lambda e^{-\lambda x}\\) with nonnegative support; compute the CDF of \\(X\\).

We want:

\begin{equation}
F(x) = \int\_{-\infty}^{x} f(z) \dd{z}
\end{equation}

recall we are also "parameterized by \\(\lambda\\)", meaning we have some fixed, given \\(\lambda\\). Also, we are given our \\(f\_{\lambda}(x)\\); recall this function has "nonnegative support", meaning that our:

\begin{equation}
f\_{\lambda}(x) = 0, x < 0
\end{equation}

Writing it out fully, then, our PDF is:

\begin{equation}
f\_{\lambda}(x) =
\begin{cases}
0, x<0\\\\
p(x|\lambda) = \lambda e^{-\lambda x}$, x\geq 0
\end{cases}
\end{equation}

Plugging it in:

\begin{align}
F(x) &= \int\_{-\infty}^{x} f\_{\lambda}(z) \dd{z}  \\\\
&= \int\_{0}^{x} \lambda e^{-\lambda z} \dd{z}  \\\\
&= \left -e^{-\lambda z} \right|\_{0}^{x}  \\\\
&= 1-e^{-\lambda x}
\end{align}
