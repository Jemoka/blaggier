+++
title = "AIBridge Iris Variance Worksheet"
author = ["Houjun Liu"]
draft = false
+++

SPOILER ALERT for future labs!! Don't scroll down!

We are going to create a copy of the iris dataset with a random variance.

```python
import sklearn
from sklearn.datasets import load_iris
```

Let's load the iris dataset:

```python
x,y = load_iris(return_X_y=True)
```

Because we need to generate a lot of random data, let's import random

```python
import random
```

Put this in a df

```python
import pandas as pd
df = pd.DataFrame(x)
df
```

```text
       0    1    2    3
0    5.1  3.5  1.4  0.2
1    4.9  3.0  1.4  0.2
2    4.7  3.2  1.3  0.2
3    4.6  3.1  1.5  0.2
4    5.0  3.6  1.4  0.2
..   ...  ...  ...  ...
145  6.7  3.0  5.2  2.3
146  6.3  2.5  5.0  1.9
147  6.5  3.0  5.2  2.0
148  6.2  3.4  5.4  2.3
149  5.9  3.0  5.1  1.8

[150 rows x 4 columns]
```

Let's make 150 random numbers with pretty low variance:

```python
random_ns = [random.uniform(65,65.2) for _ in range(0, 150)]
random_series = pd.Series(random_ns)
random_series
```

```text
0      65.127515
1      65.034572
2      65.123271
3      65.043985
4      65.145743
         ...
145    65.036410
146    65.157172
147    65.034925
148    65.037373
149    65.042466
Length: 150, dtype: float64
```

Excellent. Now let's put the two things together!

```python
df["temp"] =  random_series
df
```

```text
       0    1    2    3       temp
0    5.1  3.5  1.4  0.2  65.127515
1    4.9  3.0  1.4  0.2  65.034572
2    4.7  3.2  1.3  0.2  65.123271
3    4.6  3.1  1.5  0.2  65.043985
4    5.0  3.6  1.4  0.2  65.145743
..   ...  ...  ...  ...        ...
145  6.7  3.0  5.2  2.3  65.036410
146  6.3  2.5  5.0  1.9  65.157172
147  6.5  3.0  5.2  2.0  65.034925
148  6.2  3.4  5.4  2.3  65.037373
149  5.9  3.0  5.1  1.8  65.042466

[150 rows x 5 columns]
```

And, while we are at it, let's make new labels

```python
names = pd.Series(["sepal length", "sepal width", "pedal length", "pedal width", "temp"])
df.columns = names
df
```

```text
     sepal length  sepal width  pedal length  pedal width       temp
0             5.1          3.5           1.4          0.2  65.127515
1             4.9          3.0           1.4          0.2  65.034572
2             4.7          3.2           1.3          0.2  65.123271
3             4.6          3.1           1.5          0.2  65.043985
4             5.0          3.6           1.4          0.2  65.145743
..            ...          ...           ...          ...        ...
145           6.7          3.0           5.2          2.3  65.036410
146           6.3          2.5           5.0          1.9  65.157172
147           6.5          3.0           5.2          2.0  65.034925
148           6.2          3.4           5.4          2.3  65.037373
149           5.9          3.0           5.1          1.8  65.042466

[150 rows x 5 columns]
```

Excellent. Let's finally get the flower results.

```python
df["species"] = y
df
```

```text
     sepal length  sepal width  pedal length  pedal width       temp  species
0             5.1          3.5           1.4          0.2  65.127515        0
1             4.9          3.0           1.4          0.2  65.034572        0
2             4.7          3.2           1.3          0.2  65.123271        0
3             4.6          3.1           1.5          0.2  65.043985        0
4             5.0          3.6           1.4          0.2  65.145743        0
..            ...          ...           ...          ...        ...      ...
145           6.7          3.0           5.2          2.3  65.036410        2
146           6.3          2.5           5.0          1.9  65.157172        2
147           6.5          3.0           5.2          2.0  65.034925        2
148           6.2          3.4           5.4          2.3  65.037373        2
149           5.9          3.0           5.1          1.8  65.042466        2

[150 rows x 6 columns]
```

And dump it to a CSV.

```python
df.to_csv("./iris_variance.csv", index=False)
```

Let's select for the input data again:

```python
X = df.iloc[:,0:5]
y = df.iloc[:,5]
X
```

```text
     sepal length  sepal width  pedal length  pedal width       temp
0             5.1          3.5           1.4          0.2  65.127515
1             4.9          3.0           1.4          0.2  65.034572
2             4.7          3.2           1.3          0.2  65.123271
3             4.6          3.1           1.5          0.2  65.043985
4             5.0          3.6           1.4          0.2  65.145743
..            ...          ...           ...          ...        ...
145           6.7          3.0           5.2          2.3  65.036410
146           6.3          2.5           5.0          1.9  65.157172
147           6.5          3.0           5.2          2.0  65.034925
148           6.2          3.4           5.4          2.3  65.037373
149           5.9          3.0           5.1          1.8  65.042466

[150 rows x 5 columns]
```

And use the variance threshold tool:

```python
from sklearn.feature_selection import VarianceThreshold
sel = VarianceThreshold(0.1)
sel.fit_transform(X)
```

| 5.1 | 3.5 | 1.4 | 0.2 |
|-----|-----|-----|-----|
| 4.9 | 3   | 1.4 | 0.2 |
| 4.7 | 3.2 | 1.3 | 0.2 |
| 4.6 | 3.1 | 1.5 | 0.2 |
| 5   | 3.6 | 1.4 | 0.2 |
| 5.4 | 3.9 | 1.7 | 0.4 |
| 4.6 | 3.4 | 1.4 | 0.3 |

...

As we expected.

And let's use the select k best tool:

```python
from sklearn.feature_selection import SelectKBest, chi2
sel = SelectKBest(chi2, k=4)
res = sel.fit_transform(X, y)
res
```

| 5.1 | 3.5 | 1.4 | 0.2 |
|-----|-----|-----|-----|
| 4.9 | 3   | 1.4 | 0.2 |
| 4.7 | 3.2 | 1.3 | 0.2 |
| 4.6 | 3.1 | 1.5 | 0.2 |
| 5   | 3.6 | 1.4 | 0.2 |
| 5.4 | 3.9 | 1.7 | 0.4 |
| 4.6 | 3.4 | 1.4 | 0.3 |
| 5   | 3.4 | 1.5 | 0.2 |

...

Also, as we expected. Got rid of temp.