+++
title = "ICLR2025 Kilani: MrT5 Tokenizer-Free"
author = ["Houjun Liu"]
draft = false
+++

## Motivation {#motivation}

ByteT5 is very expensive (because you have to have a residual on every damn token)


## MrT5 {#mrt5}

MrT5 uses a soft attention masking gate at pretraining time to delete unused tokens; at inference time we use a hard cut.

Cool: MrT5 learns language independent compression rate (different languages have different rates).
