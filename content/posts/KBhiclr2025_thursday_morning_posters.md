+++
title = "ICLR2025 Thursday Morning Posters"
author = ["Houjun Liu"]
draft = false
+++

## ICLR2025 Hu: belief state transformer {#iclr2025-hu-belief-state-transformer}

Key insight: residual stream at the last token kept thought of as a belief state encoding future tokens, that is, uncertainty in the last residual directly correlate the diversity of output

Method: trainer transformer and trainer reverse transformer like what Robert wanted, then correlate


## ICLR2025 Lingam: diversity of thoughts {#iclr2025-lingam-diversity-of-thoughts}

Key insight: Use iterative sampling to achieve higher diversity in self reflection, in order to get better outputs.


## ICLR2025 Gu: data selection via optimal control. {#iclr2025-gu-data-selection-via-optimal-control-dot}

Key insight: use Potryagin data selection, criteria as control target leverage optimal control, and solve for optimal data mix


## ICLR2025 Kim: Adam with adaptive batch selection {#iclr2025-kim-adam-with-adaptive-batch-selection}

Key insight: use bandit approaches to select a batch size at every step which maximize gradient


## ICLR2025 Fujimoto: General purpose, model, free reinforcement learning {#iclr2025-fujimoto-general-purpose-model-free-reinforcement-learning}

Key insight: learn a linear representation of latent dynamics, and do your reinforcement learning for a few steps on the learned latent instead of the actual inputs, and then re-sample dynamics after action.


## ICLR2025 Wang: speculative rag. {#iclr2025-wang-speculative-rag-dot}

Key inside: make multiple drafts and then score it using a different model before performing actual retrieval


## ICLR2025 Kolbeinsson: composable interventions. {#iclr2025-kolbeinsson-composable-interventions-dot}

Intervention order influences intervention success, and composition, success; compression worsens the ability for interventions to work


## ICLR2025 Ouyang: Projection head is an information bottleneck {#iclr2025-ouyang-projection-head-is-an-information-bottleneck}

Key insight: projection head if distinct from pre-training task serves as an information bottleneck because task difference


## ICLR2025 Xu: alignment data synthesis from scratch by prompting  aligned LLMs with nothing {#iclr2025-xu-alignment-data-synthesis-from-scratch-by-prompting-aligned-llms-with-nothing}

Key insignt: roll out a bunch of samples, label them, and then fine tune on it
