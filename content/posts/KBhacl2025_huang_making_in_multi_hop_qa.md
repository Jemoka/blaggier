+++
title = "ACL2025 Huang: Making in Multi-Hop QA"
author = ["Houjun Liu"]
draft = false
+++

Question: can we find a good context permutation to improve reasoning capabilities.


## One-Liner {#one-liner}


## Notable Methods {#notable-methods}

Two key evaluations:

-   evalutanig relationships between gold documents; notice that performance relates to distance between documents (but FTing helps)
-   investigate the effects between different attention masks (i.e., the use of prefix vs continuation masks)


### IC Score {#ic-score}

attention-based context attribution method


## New Concepts {#new-concepts}

**Key insight**: correct answers will have single peak of IC scores at gold results; incorrect answers will have more dispersed IC scores.

=&gt;

relevant documents should be placed next to each other
