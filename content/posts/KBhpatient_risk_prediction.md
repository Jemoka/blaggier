+++
title = "Patient Risk Prediction"
author = ["Houjun Liu"]
draft = false
+++

## Patient Scoring Systems {#patient-scoring-systems}

How do we score the status of a patient? Well, we can begin by having a chart---SpO2, can breath, etc. etc.

**Drawbacks**:

1.  these systems are quite generic
2.  not very representative of some information


## Method {#method}

1.  MIMIC-IV 6000 ICU patient stays, 48994 vital signs---measuring across patient stays
2.  **dynamic time warping to create a similar matrix**
3.  clustering post-hoc to correlate patients together
