+++
title = "MedBlindTuner"
author = ["Houjun Liu"]
draft = false
+++

One possible approach for using homomorphic encryption, developed specifically for imaging data.

1.  extract relevant features locally
2.  resulting data is encrypted using FHE
3.  train model remotely using FHE encrypted data
4.  send model back, and data owners decrypt the inference results locally
