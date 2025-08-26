+++
title = "Train a Bert"
author = ["Houjun Liu"]
draft = false
+++

So you want to train a Bert? Either your name is david or you stumbled upon this from the internet. well hello. I'm tired and its 1AM so like IDFK if this will be any accurate at all. Oh and if you are reading this because you are an NLPer, I apologize for the notation its 1am.


## CLS Tokens {#cls-tokens}

A Bert is a bi-directional transformer encoder model. A Transformer encoder takes a sequence of tokenized input text (each being an embedding), and produces a dense embedding for each token. Hence, for each word vector \\(w \in W \subset \mathbb{R}^{n}\\), a Bert \\(B\\) performs a mapping \\(\mathcal{L}\qty(W, \mathbb{R}^{m})\\) applied onto each input token.

So:

\begin{equation}
w\_1, \dots, w\_{n} \underbrace{\implies}\_{BERT} m\_{1}, \dots, m\_{n}
\end{equation}

where \\(B w\_{j} = m\_{j}\\)

Importantly, if your name is david, you are interested in a Bert for mapping a _sequence_ (of usually one) token(s) to _one_ token. Because, your task looks like:

-   fishy =&gt; smell
-   valuable =&gt; value
-   large =&gt; size
-   very chonky =&gt; size

So, you ideally want _one_ embedding per input sequence with which to predict your output token ("very chonky" should result in some single sequence embedding that helps us get to "size"). To do this, we introduce the idea of a `<cls/>` token, which is a "classification token" tacked onto the end of each input sequence whose output embeddings is the only one we care about.

For instance, for:

\begin{equation}
very, chonky, CLS \underbrace{\implies}\_{BERT} B(very), B(chonky), B(CLS)
\end{equation}

we only care about the embedding for \\(B(CLS) \in \mathbb{R}^{m}\\) as the embedding for the entire sequnece of text "very chonky".

This is well motivated because you should take cs224n.


## Game Plan {#game-plan}

So then, let \\(B\\) be our Bert, \\(w\_1, ..., w\_{n}, w\_{CLS}\\) be our input tokens, \\(V\\) being our vocabulary of size \\(|V|\\), our model must do the following things:

-   Bert the input sequence: \\(B(w\_1, ..., w\_{n}, w\_{CLS}) \implies m\_{1}, ..., m\_{CLS}\\)
-   get only the last embedding: \\(m\_{CLS} \in \mathbb{R}^{m}\\)
-   project it into our vocab space using a fully connected layer: \\(o = T(m\_{CLS})\\) where \\(T \in  \mathcal{L}\qty(\mathbb{R}^{m}, \mathbb{R}^{|V|})\\)
-   softmax baybee: \\(a = softmax (o)\\)
-   choose your output word: \\(\arg\max\_{j} a\_{j}\\)


## Rock and Roll {#rock-and-roll}

```python
# import shit as you need, I'm not your LSP

# also don't do this. don't put your tokenizer into the torch module
# I'm just lazy

class David(nn.Module):


    def __init__(self):
        self.lm = BertModel.from_pretrained("bert-base-uncased")
        self.tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
        self.fc = nn.Linear(self.lm.config.hidden_size, len(self.tokenizer))
        self.criterion = nn.CrossEntropyWithSoftmax() # this doens't exist but you can code

    def forward(input_sequence_batch:List[str], output_word_batch:List[str]):
        enc = self.tokenizer(input_sequence, return_tensors="pt", padding=True)
        bert = self.lm(**enc).pooler_output # your good friends at huggningface
                                            # did the [cls] shit for you. if you want
                                            # to change how pooling happens (how CLS is computed,
                                            # you can mess with .last_hidden_state
                                            #
                                            # also some implementations use first token as pooler
        mapped = self.fc(bert)

        label_ids = self.tokenizer.get_ids_for_tokens(output_word_batch) # this is probably wrong
        label_onehot = F.one_hot(label_ids) # this is definietly wrong

        loss = self.criterion(mapped, label_onehot)

        return {
            "output": self.tokenizer.get_tokens_for_ids(mapped.argmax(dim=1)),
            "loss": loss.mean()
        }






```
