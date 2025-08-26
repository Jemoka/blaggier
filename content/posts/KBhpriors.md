+++
title = "Video Generation with Learned Priors"
author = ["Houjun Liu"]
draft = false
+++

## visual prediction task {#visual-prediction-task}

Given \\(n\\) frames of video \\(x\_{1}, ..., x\_{n}\\), predict \\(T\\) subsequent frames \\(x\_{n+1}... x\_{n+T}\\).


## Action Conditioned Prediction Network {#action-conditioned-prediction-network}

Visual prediction task. Two inputs:

1.  taken action
2.  image

Predict the next \\(t\\) frame. Challenge! What is the action? Predicting the action is not super easy.


## RAFI {#rafi}

Conditional Flow Matching with Video Generation.

<https://arxiv.org/pdf/2406.14436>
