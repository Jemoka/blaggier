+++
title = "Leave-One-Out Cross Validation"
author = ["Houjun Liu"]
draft = false
+++

[LOOCV]({{< relref "KBhloo.md" >}}) is a cross validation method whereby the entire dataset bar one sample is used for training; then, validation is ran on one sample. This is repeated \\(N\\) times (with a fresh model and a fresh item left out) to get a distribution of one-shot validation results that is an approximately-normal curve centered around the mean validation result from many one-shot samples.