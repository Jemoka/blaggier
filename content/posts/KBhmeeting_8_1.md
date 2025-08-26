+++
title = "meeting 8/1"
author = ["Houjun Liu"]
draft = false
+++

## Updates {#updates}

-   dropping dropout: <https://proceedings.mlr.press/v202/geiping23a/geiping23a.pdf>
-   CAW-coref: revised! do we need more space for things such as a figure?
    -   stanza 1.9.0 staged! <https://huggingface.co/stanfordnlp/stanza-en>


### Yay mend works! {#yay-mend-works}

{{< figure src="/ox-hugo/2024-08-01_14-11-07_screenshot.png" >}}

.mean() vs. .sum() for the dW maps?


### PPL Isn't the Only Possible Metric {#ppl-isn-t-the-only-possible-metric}

{{< figure src="/ox-hugo/2024-08-01_15-12-14_screenshot.png" >}}

even if our model is better ppl, its worse at squad than Facebook (granted its been trained a lot less); will run with new pretraining model (expect that no dropout will be better (see paper above)).


### Pretraining Updates (smaller Bert, which dataset?) {#pretraining-updates--smaller-bert-which-dataset}

<https://wandb.ai/jemoka/dropfree?nw=nwuserjemoka>


### Binary Masking with the Pretraining Above {#binary-masking-with-the-pretraining-above}

Edit success

|                   | Our Bert (No Dropout) | Our Bert (Dropout) |
|-------------------|-----------------------|--------------------|
| edit success      | 0.9709                | 0.9723             |
| edit localization | 0.8375                | 0.8452             |
| mean activations  | 3853                  | 22511              |

Yay! (more seriously)


## Question {#question}


### Paper Plan {#paper-plan}


#### Part 1: Skipping Dropout isn't bad, and may even be good {#part-1-skipping-dropout-isn-t-bad-and-may-even-be-good}

-   pretraining
-   squad


#### Part 3: Emperics: Dropout Has Knowledge Storage Consiquences {#part-3-emperics-dropout-has-knowledge-storage-consiquences}

-   knowledge neurons
-   integrated gradients
-   binary masking


#### Part 4: Impact: look, editing is easier without dropout (no data yet) {#part-4-impact-look-editing-is-easier-without-dropout--no-data-yet}

-   consistency (this is weak, hence theory maybe helpful, or we can skip)
-   MEND (just worked yay!)
-   Finetune (echo to squad)
-   LoRA

    slowly reduce ReFT update rank, see how edit success drops

(x verbs y)

-   for each, train/(MEND infer) on 90%, test on the other 10%, see if it works
    -   "correct" to the {IID} example


### Casual Interventions {#casual-interventions}

shall we? simple exchange interaction? how does it work for a bert? does it fit into this story?

(ottowa captial &lt;mask&gt;)
=&gt;
(DC capital &lt;mask&gt;)
