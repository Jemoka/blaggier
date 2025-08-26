+++
title = "ACL2025 Monday Morning Posters"
author = ["Houjun Liu"]
draft = false
+++

## ACL2025 Zhang: FaithfulRAG: Fact level conflict modeling {#acl2025-zhang-faithfulrag-fact-level-conflict-modeling}

Key insight: RAG performance degrades wen model has context and parametric knowledge mismatch, identifying those and use three step iterative method to improve context faithfulness.


## ACL2025 Ding: LLM reasoning capability via scalable question synthesis {#acl2025-ding-llm-reasoning-capability-via-scalable-question-synthesis}

Key insight: generate free-from questions conditioned only in BOS, then distill and DPO to get a nice question generation dataset and directly fine tune


## ACL2025 Wen: synthetic data strategy on domain specific retrieval {#acl2025-wen-synthetic-data-strategy-on-domain-specific-retrieval}

Key insight: train your models enough to memorize the context of a specific domain and therefore be able to recall better in particular using document based IDs


## ACL2025 Xu: updating small KV cache during longform generation {#acl2025-xu-updating-small-kv-cache-during-longform-generation}

Key insight: evict members of KV cache that has small attention scores whenever you run out


## ACL2025 Wu: batch speculative decoding {#acl2025-wu-batch-speculative-decoding}

Key insight: generate extra draft tokens in speculative decoding, use those to fill up extra space, greedily selected tokens to re-verify


## ACL2025 Kong: segment level direct preference optimization {#acl2025-kong-segment-level-direct-preference-optimization}

Key insight: entire 2 conversation rollout, use LLM as judge to pick out key segment, then tune in key segments. Key insight is that scores are based on entire conversation, but tuning is only on key segments.


## ACL2025 He: idimaticity in word representations {#acl2025-he-idimaticity-in-word-representations}

Key insight: idioms are represented well in models, but if you do random word replacements, they still are represented well. Which means that mostly it is controlling for lexical overlap


## ACL2025 Hirsch: localized attribution queries in context grounded generation {#acl2025-hirsch-localized-attribution-queries-in-context-grounded-generation}

Key insight: a new task which benchmarks attribution by first resolving coreferences and then performing context attribution


## ACL2025 Feher: retrofitting large language models with dynamic tokenization {#acl2025-feher-retrofitting-large-language-models-with-dynamic-tokenization}

Key insight: we can tokenized data anew each batch and train a adapter


## ACL2025 Fodor: composition and sentence meaning {#acl2025-fodor-composition-and-sentence-meaning}

Key insight: if you ever constructed a dataset that's lexically similar but semantically distant similarity metrics don't work well
