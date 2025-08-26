+++
title = "Luz 2021"
author = ["Houjun Liu"]
tags = ["ntj"]
draft = false
+++

DOI: 10.1101/2021.03.24.21254263


## One-Liner {#one-liner}

Review paper presenting the \\(ADReSS\_o\\) challenge and current baselines for three tasks


## Notes {#notes}

Three tasks + state of the art:

-   Classification of AD: accuracy \\(78.87\\%\\)
-   Prediction of [MMSE]({{< relref "KBhmmse.md" >}}) score: RMSE \\(5.28\\)
-   Prediction of cognitive decline: accuracy \\(68.75\\%\\)


### Task 1 {#task-1}

AD classification baseline established by decision tree with [late fusion]({{< relref "KBhfusion.md#late-fusion" >}})

{{< figure src="/ox-hugo/2022-06-25_22-57-05_screenshot.png" >}}

([LOOCV]({{< relref "KBhloo.md" >}}) and test)


### Task 2 {#task-2}

[MMSE]({{< relref "KBhmmse.md" >}}) score prediction baseline established by [grid search]({{< relref "KBhgrid_search.md" >}}) on parameters.

{{< figure src="/ox-hugo/2022-06-25_22-58-42_screenshot.png" >}}

SVR did best on both counts; results from either model are averaged for prediction.


### Task 3 {#task-3}

{{< figure src="/ox-hugo/2022-06-25_23-02-07_screenshot.png" >}}

Same thing here, DT does better but notably its F1 is smaller; data trained with final late fusion