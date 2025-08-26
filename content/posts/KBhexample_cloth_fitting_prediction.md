+++
title = "Example: Cloth Fitting Prediction"
author = ["Houjun Liu"]
draft = false
+++

**Have:  \\(m\\) training data points \\((\theta\_{i}, \phi\_{i})\\) generated from the true/approximated function \\(\phi\_{i} = f\qty (\theta\_{i})\\) (which uses physical simulation/CV techniques). Training data here is \*very expensive** and **lots of errors**

**Want**: \\(\hat{f}\qty(\theta) = f\qty(\theta)\\)

**Problem**: as joints rotate (which is highly nonlinear), cloth verticies move in complex and non-linear ways which are difficult to handle with a standard neural network---there are _**highly** non-linear rotations_! which is not really easy to make with standard [model functions]({{< relref "KBhmodel_function.md#model-function" >}}) using \\(\hat{f}\\).
