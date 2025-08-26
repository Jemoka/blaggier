+++
title = "DOST"
author = ["Houjun Liu"]
draft = false
+++

There is **extreme noise** in the patient annotations: for instance, in their health rhythm labels there's around 20% contradictions in the dataset.

1.  accurate diagnosis
2.  limiting "domain rule violations"


## approach {#approach}

1.  take your dataset, and validate rules
2.  IF validation is successful, train model normally with that sample
3.  IF the validation is unsuccessful, then use the output samples as negative examples
