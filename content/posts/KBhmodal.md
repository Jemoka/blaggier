+++
title = "Modal"
author = ["Houjun Liu"]
draft = false
+++

Modal is a cloud deployment system that's entirely programmatic. No yaml:

```python
import modal

stub = modal.stub(gpu="a100")
@stub.function()
def fit(x):
    import whatever
    whatever.thing()
```

So think run.house, but they have the infra.


## fine-tuning with Modal {#fine-tuning-with-modal}

<https://github.com/modal-labs/llama-recipes>

You can store the serverless functions, and [Modal]({{< relref "KBhmodal.md" >}}) can serve stored serverless functions. Modal have web hooks as well to do inference at a front end.

Modal can serve most the management as well.


## pricing {#pricing}

13B: 500 tokens/s on 40GB AA10 (3.73 / hour)
70B: 300 tok /s 80 GB( 2\* 5.59/hour)
