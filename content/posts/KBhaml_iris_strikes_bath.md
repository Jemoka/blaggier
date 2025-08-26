+++
title = "AML: Iris Strikes Back"
author = ["Houjun Liu"]
draft = false
+++

You are no doubt familiar with the Iris dataset: a dataset containing flower pedal shapes and their corresponding sub-type of Iris flower: Setosa, Versicolour, and Virginica.

We are going to take those pedal measurements, and predict the type of Iris we are looking at!

Let's get the Iris dataset first. Turns out, Scikit Learn (your old friend from last semester) ships a copy of the Iris dataset with itself. So, we will load the dataset from it.

Let's first import what we need:

```python
import torch
import torch.nn as nn

import sklearn
from sklearn import datasets

import pandas as pd
```

Excellent. To load the built-in Iris dataset from sklearn, we can:

```python
# load iris
iris = datasets.load_iris()

# put input features into a dataframe
df = pd.DataFrame(data=iris.data, columns=iris.feature_names)
# add targets column from iris data
df["target"] = iris.target
df
```

```text
     sepal length (cm)  sepal width (cm)  ...  petal width (cm)  target
0                  5.1               3.5  ...               0.2       0
1                  4.9               3.0  ...               0.2       0
2                  4.7               3.2  ...               0.2       0
3                  4.6               3.1  ...               0.2       0
4                  5.0               3.6  ...               0.2       0
..                 ...               ...  ...               ...     ...
145                6.7               3.0  ...               2.3       2
146                6.3               2.5  ...               1.9       2
147                6.5               3.0  ...               2.0       2
148                6.2               3.4  ...               2.3       2
149                5.9               3.0  ...               1.8       2

[150 rows x 5 columns]
```

You can imagine that this dataset could have been loaded from a CSV, etc.

Just to recap, here are the columns of this dataset:

```python
df.columns
```

```text
Index(['sepal length (cm)', 'sepal width (cm)', 'petal length (cm)',
       'petal width (cm)', 'target'],
      dtype='object')
```

Now, pause. Let's think about two questions from last semester:

1.  What type of ML problem is this? (Classification? Regression? Clustering?)
2.  Before any engineering: How many **input** features are there? How many **output** features?

---

...

...

1.  What type of ML problem is this? _Classification_
2.  Before any engineering: _4 input features_, _1 output feature_

Awesome. Let's inspect this dataset again:

```python
df
```

```text
     sepal length (cm)  sepal width (cm)  ...  petal width (cm)  target
0                  5.1               3.5  ...               0.2       0
1                  4.9               3.0  ...               0.2       0
2                  4.7               3.2  ...               0.2       0
3                  4.6               3.1  ...               0.2       0
4                  5.0               3.6  ...               0.2       0
..                 ...               ...  ...               ...     ...
145                6.7               3.0  ...               2.3       2
146                6.3               2.5  ...               1.9       2
147                6.5               3.0  ...               2.0       2
148                6.2               3.4  ...               2.3       2
149                5.9               3.0  ...               1.8       2

[150 rows x 5 columns]
```

You will notice that the targets are _not shuffled_. If we fit this into our neural network, it will **overfit**---memorize output without generalization---to one target, then to another, etc.

So first, let's shuffle this table. To do so, we will simply ask Pandas to resample \\(100\\%\\) of the dataset; it will do this sampling randomly:

```python
df = df.sample(frac=1)
df
```

```text
     sepal length (cm)  sepal width (cm)  ...  petal width (cm)  target
49                 5.0               3.3  ...               0.2       0
93                 5.0               2.3  ...               1.0       1
50                 7.0               3.2  ...               1.4       1
145                6.7               3.0  ...               2.3       2
14                 5.8               4.0  ...               0.2       0
..                 ...               ...  ...               ...     ...
48                 5.3               3.7  ...               0.2       0
91                 6.1               3.0  ...               1.4       1
45                 4.8               3.0  ...               0.3       0
131                7.9               3.8  ...               2.0       2
5                  5.4               3.9  ...               0.4       0

[150 rows x 5 columns]
```

You will note, however, that the indicies are reshuffled as well! This is actually Pandas being helpful---allowing us to unshuffle the dataset if needed. But, we actually have no need to do this.