+++
title = "AIBridgeLab D2Aft"
author = ["Houjun Liu"]
draft = false
+++

Welcome to the Day-2 Afternoon Lab! We are super excited to work through tasks in linear regression and logistic regression, as well as familiarize you with the Iris dataset.


## Iris Dataset {#iris-dataset}

Let's load the Iris dataset! Begin by importing the `load_iris` tool from `sklearn`. This is an easy loader scheme for the iris dataset.

```python
from sklearn.datasets import load_iris
```

Then, we simply execute the following to load the data.

```python
x,y = load_iris(return_X_y=True)
```

We use the `return_X_y` argument here so that, instead of dumping a large `CSV`, we get the neat-cleaned input and output values.

Let's inspect this data a little.

```python
x[0]
```

|     |     |     |     |
|-----|-----|-----|-----|
| 5.1 | 3.5 | 1.4 | 0.2 |

We can see that each `sample` of the data is a vector in \\(\mathbb{R}^4\\). They correspond to four attributes:

-   septal length
-   septal width
-   pedal length
-   pedal width

What's the output?

```python
y[0]
```

```text
0
```

We can actually see all the possible values of the output by putting it into a set.

```python
set(y)
```

|   |   |   |
|---|---|---|
| 0 | 1 | 2 |

There are three different `classes` of outputs.

-   Iris Setosa
-   Iris Versicolour
-   Iris Virginica

Excellent. So we can see that we have a dataset of four possible inputs and one possible output. Let's see what we can do with it.


## Logistic Regression {#logistic-regression}

The simplest thing we can do is a logistic regression. We have a there _categories_ for output and a lot of data for input. Let's figure out if we can predict the output from the input!

Let's import logistic regression tool first, and instantiate it.

```python
from sklearn.linear_model import LogisticRegression
reg = LogisticRegression()
```

We will "fit" the data to the model: adjusting the model to best represent the data. Our data has 150 samples, so let's fit the data on 140 of them.

```python
testing_samples_x = x[-5:]
testing_samples_y = y[-5:]
x = x[:-5]
y = y[:-5]
```

Wonderful. Let's fit the data onto the model.

```python
reg = reg.fit(x,y)
```

Let's go ahead and run the model on our 10 testing samples!

```python
predicted_y = reg.predict(testing_samples_x)
predicted_y
```

|   |   |   |   |   |
|---|---|---|---|---|
| 2 | 2 | 2 | 2 | 2 |

And, let's figure out what our actual results say:

```python
testing_samples_y
```

|   |   |   |   |   |
|---|---|---|---|---|
| 2 | 2 | 2 | 2 | 2 |

Woah! That's excellent.


## Linear Regression {#linear-regression}

Instead of predicting the output _classes_, we can predict some values from the output. How about if we used septal length, width, and pedal length to predict petal width? The output now is a number, not some classes, which calls for linear regression!

Let's import linear regression tool first, and instantiate it.

```python
from sklearn.linear_model import LinearRegression
reg = LinearRegression()
```

We will "fit" the data to the model again. As we have cleaned out the `testing_samples`, we simply need to split out the fourth column for the new x and y:

```python
new_x = x[:,:3]
new_y = x[:,3]

new_testing_samples_y = testing_samples_x[:,3]
new_testing_samples_x = testing_samples_x[:,:3]
```

Taking now our newly parsed data, let's fit it to a linear model.

```python
reg = reg.fit(new_x,new_y)
```

Let's go ahead and run the model on our 10 testing samples!

```python
new_predicted_y = reg.predict(new_testing_samples_x)
new_predicted_y
```

|           |            |            |            |            |
|-----------|------------|------------|------------|------------|
| 1.7500734 | 1.61927061 | 1.79218767 | 2.04824364 | 1.86638164 |

And, let's figure out what our actual results say:

```python
new_testing_samples_y
```

|     |     |   |     |     |
|-----|-----|---|-----|-----|
| 2.3 | 1.9 | 2 | 2.3 | 1.8 |

Close on some samples, not quite there on others. How good does our model actually do? We can use `.score()` to figure out the \\(r^2\\) value of our line on some data.

```python
reg.score(new_x, new_y)
```

```text
0.9405617534915884
```

Evidently, it seems like about \\(94\\%\\) of the variation in our output data can be explained by the input features. This means that the relationship between septals are not _exactly_ a linear pattern!


## Now you try {#now-you-try}

-   Download the [wine quality dataset](https://archive.ics.uci.edu/ml/datasets/Wine+Quality)
-   Predict the quality of wine given its chemical metrics
-   Predict if its red or white wine given its chemical metrics
-   Vary the amount of data used to .fit the model, how does that influence the results?
-   Vary the amount in each "class" (red wine, white wine) to fit the model, how much does that influence the results.