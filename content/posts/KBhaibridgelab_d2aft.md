+++
title = "AIBridgeLab D3Morning"
author = ["Houjun Liu"]
draft = false
+++

Welcome to the Day-3 Morning Lab! We are glad for you to join us. Today, we are learning about how Pandas, a data manipulation tool, works, and working on cleaning some data of your own!


## Iris Dataset {#iris-dataset}

We are going to lead the Iris dataset from `sklearn` again. This time, however, we will load the full dataset and parse it ourselves (instead of using `return_X_y`.)

Let's begin by importing the Iris dataset, as we expect.

```python
from sklearn.datasets import load_iris
```

And, load the dataset to see what it looks like.

```python
iris = load_iris()
iris.keys()
```

```text
dict_keys(['data', 'target', 'frame', 'target_names', 'DESCR', 'feature_names', 'filename', 'data_module'])
```

We have a pretty large dictionary full of information! Let's pull out `data` (our input data), `target` (our output data), and `feature_names`, the names of our feature.

```python
iris_in = iris["data"]
iris_out = iris["target"]
iris_names = iris["feature_names"]
```


## Data Manipulation {#data-manipulation}

{{< figure src="/ox-hugo/2022-06-15_15-52-10_screenshot.png" >}}

`pandas` is a very helpful utility that allow us to see into data more conveniently. The object that we are usually working with, when using pandas, is called a `DataFrame`. We can actually create a `DataFrame` pretty easily. Let's first import `pandas`

```python
import pandas as pd
```


### Loading Data {#loading-data}

We have aliased it as `pd` so that its easier to type. Awesome! Let's make a DataFrame.

```python
df = pd.DataFrame(iris_in)
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

Nice! We have our input data contained in a data frame and nicely printed in a table; cool! However, the column names `1`, `2`, `3`, `4` aren't exactly the most useful labels for us. Instead, then, let's change the column headers to:

```python
iris_names
```

|                   |                  |                   |                  |
|-------------------|------------------|-------------------|------------------|
| sepal length (cm) | sepal width (cm) | petal length (cm) | petal width (cm) |

How? We can both get and set the columns via `df.columns`:

```python
df.columns = iris_names
```

Let's look at the `DataFrame` again!

```python
df
```

```text
     sepal length (cm)  sepal width (cm)  petal length (cm)  petal width (cm)
0                  5.1               3.5                1.4               0.2
1                  4.9               3.0                1.4               0.2
2                  4.7               3.2                1.3               0.2
3                  4.6               3.1                1.5               0.2
4                  5.0               3.6                1.4               0.2
..                 ...               ...                ...               ...
145                6.7               3.0                5.2               2.3
146                6.3               2.5                5.0               1.9
147                6.5               3.0                5.2               2.0
148                6.2               3.4                5.4               2.3
149                5.9               3.0                5.1               1.8

[150 rows x 4 columns]
```

Excellent! Now our data frame looks much more reasonable.


## Wranging Data {#wranging-data}

How do we manipulate the data around? Well, we can index this data by both columns and rows.

Indexing by columns first is very easy. Pandas tables are, by default, "column-major". This means that we can just index the columns just like a list!

```python
df["petal width (cm)"]
```

```text
0      0.2
1      0.2
2      0.2
3      0.2
4      0.2
      ...
145    2.3
146    1.9
147    2.0
148    2.3
149    1.8
Name: petal width (cm), Length: 150, dtype: float64
```

Nice! I want to know introduce the idea of a "cursor". A "cursor" is used to index this high-dimensional data; think about it as the way to turn this table into something like an indexable 1-D list.

The simplest cursor is `.loc` ("locator.")

Unlike list indexing directly, `.loc` is "row-major:" the first index selects _rows_ instead of columns.

```python
df.loc[0]
```

```text
sepal length (cm)    5.1
sepal width (cm)     3.5
petal length (cm)    1.4
petal width (cm)     0.2
Name: 0, dtype: float64
```

Nice! You can see that `.loc` turned our table into a list, with each "sample" of the data more clearly represented by indexing it like a list.

What if, then, we want to select the "pedal width" value inside this sample? We just select the first index, a comma, then select the second index.

```python
df.loc[0, "petal width (cm)"]
```

```text
0.2
```

Excellent! We can see, because we changed the header columns to be strings, we have to index them like strings.

What if, instead of the first row, we want to get... say, the first, fifth, and sixth rows? Unlike traditional lists, Pandas' cursors can be _indexed by a list_.

So this:

```python
df.loc[0]
```

```text
sepal length (cm)    5.1
sepal width (cm)     3.5
petal length (cm)    1.4
petal width (cm)     0.2
Name: 0, dtype: float64
```

turns into

```python
df.loc[[0,2,8,9]]
```

```text
   sepal length (cm)  sepal width (cm)  petal length (cm)  petal width (cm)
0                5.1               3.5                1.4               0.2
2                4.7               3.2                1.3               0.2
8                4.4               2.9                1.4               0.2
9                4.9               3.1                1.5               0.1
```

This would give us the 0th, 2nd, 8th, and 9th row!

This is all good, but, it's kind of annoying to type the column names (like "petal width (cm)") every time! No worries, we can address this.

`iloc` is a variant of `loc` which uses integer indexes. For row indexing, the syntax remains exactly the same; `iloc`, however, converts all column indexes to integers sequentially. Therefore:

```python
df.loc[0, "petal width (cm)"]
```

becomes

```python
df.iloc[0, 3]
```

```text
0.2
```

Nice! Isn't that convenient.


## Some statistics {#some-statistics}

The main gist of the lab here is to manipulate the input data a little. Pandas provides many helpful utilities to help us with that. For instance, let's take a single feature in the data, say, the pedal with:

```python
pwidth = df["petal width (cm)"]
# same pwidth = df.iloc[:,3], where : returns everything in the row dimention
pwidth
```

```text
0      0.2
1      0.2
2      0.2
3      0.2
4      0.2
      ...
145    2.3
146    1.9
147    2.0
148    2.3
149    1.8
Name: petal width (cm), Length: 150, dtype: float64
```

We can now find out how distributed this data is, to glean some info about normalization! The most basic is for us to find the mean width of the petals:

```python
pwidth.mean()
```

```text
1.1993333333333336
```

Awesome! We can calculate the standard by applying this constant to that entire row. The syntax works just like how you expect---subtracting a scalar from the whole column just subtracts that constant from every element---without any fuss:

```python
(((pwidth-pwidth.mean())**2).sum()/len(pwidth))**0.5
```

```text
0.7596926279021594
```

Cool! In the scheme of things, that's actually a pretty good. However, if it was not, we could normalize the data!

Let's first get the norm of the vector

```python
pwidth_norm = sum(pwidth**2)**0.5
pwidth_norm
```

```text
17.38763928772391
```

And, let's normalize our vector by this norm!

```python
pwidth_normd = pwidth/pwidth_norm
pwidth_normd
```

```text
0      0.011502
1      0.011502
2      0.011502
3      0.011502
4      0.011502
         ...
145    0.132278
146    0.109273
147    0.115024
148    0.132278
149    0.103522
Name: petal width (cm), Length: 150, dtype: float64
```

Excellent. Let's find out its standard deviation again! This time we will use `.std()` instead.

```python
pwidth_normd.std()
```

```text
0.04383790440709825
```

Much better.


## Now you try {#now-you-try}

-   Load the wine dataset into a DataFrame and manipulate it.
-   Feed slices back into our functions yesterday! Can you make the subsets of the data you made yesterday via the `.iloc` notation to make slicing easier?
-   Can you quantify the accuracy, precision, and recall on a shuffled version of the wine dataset and logistic regression? `seed=0`
-   Is there any columns that need normalisation? Any outliers (2 std. dev away)? Why/why not?
-   Create a balanced version of the wine dataset between red and white classes. Does fitting this normalized version into our model makes training results better?