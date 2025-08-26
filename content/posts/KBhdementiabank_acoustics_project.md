+++
title = "DementiaBank Acoustics Project"
author = ["Houjun Liu"]
draft = false
+++

The [DementiaBank Acoustics Project]({{< relref "KBhdementiabank_acoustics_project.md" >}}) is a working title for an acoustic-only challenge for AD detection. This document serves as the lab notebook for this project.

This project will attempt to replicate some of the results of [Wang 2019]({{< relref "KBhwang_2019.md" >}}) and [Martinc 2021]({{< relref "KBhmartinc_2021.md" >}}), but focusing on minimizing human involvement; we will first work on raw transcript classification with ERNIE (cutting all CHAT annotations), then introduce pause-encoding in a manner similar to [Yuan 2021]({{< relref "KBhyuan_2021.md" >}}) which is automated by MFA. Goal is to replicate the results of [Yuan 2021]({{< relref "KBhyuan_2021.md" >}})/or even [Martinc 2021]({{< relref "KBhmartinc_2021.md" >}}) in a completely automated manner.


## Background Reading {#background-reading}

I first began by doing a literature survey on the [ADReSS Challenge]({{< relref "KBhadress_literature_survey.md" >}}) results published in the Frontiers AD special interest group issue.


## Proposal {#proposal}

And then, we wrote a proposal: [DementiaBank Acoustics Project Proposal]({{< relref "KBhdementiabank_acoustics_project_proposal.md" >}})


## Brainstoming {#brainstoming}

More notes from the meeting: [DementiaBank Acoustics Brainstoming]({{< relref "KBhdementiabank_acoustics_brainstoming.md" >}})


## Protocol Notes {#protocol-notes}


### July 1st {#july-1st}

-   Began by moving a subsample of [Pitt](https://dementia.talkbank.org/access/English/Pitt.html)'s [Cookie Theft]({{< relref "KBhctp.md" >}}) to `pitt-7-1` in the `raw` data folder
-   Ran `flo` on all collected samples. Arguments used are the same as that for [batchalign]({{< relref "KBhbatchalign.md" >}}), except _we filter out the `INV` tier_ as we are detecting AD on patient and not investigator: so `flo +d +ca +t* -tINV`
-   Moved all collected samples (and changed extension to .txt) to the same sub-folder, but in `transcripts_nodisfluency`


### July 2nd {#july-2nd}

-   Created a dataprep script `dataprep.py` which dumps a pickled copy of cleaned data to `transcripts_nodisfluency/pitt-7-1.dat`.
-   Created sliding windows of 5 pieces of dialogue concatenated, stored it in `transcripts_nodisfluency/pitt-7-1-windowed.dat`
-   Used tencent/HuYong's `nghuyong/ernie-2.0-en` Ernie 2.0 model, the continuous language model from Baidu (Layer:12, Hidden:768, Heads:12)


### July 4th {#july-4th}

-   Finalized training code. Selected base hyperparameters {bs: 8, epochs: 2, lr: 3e-3, length: 60}. Again, we are using Baidu's `nghuyong/ernie-2.0-en`.
-   Started training fastcalculator on `24bc812`


#### train: faithful-frog-3 {#train-faithful-frog-3}

{bs: 8, epochs: 2, lr: 3e-3, length: 60, pitt-7-1-windowed.dat }

{{< figure src="/ox-hugo/2022-07-04_19-20-13_screenshot.png" >}}

-   Commentary: LR could be too high, looking at the divergent loss behavior.
-   Decision: dropping bs to `4` and lr to `1e-5`, similar to previous transformers. Also training for 3 epochs.


#### train: revived-disco-5 {#train-revived-disco-5}

{bs: 4, epochs: 3, lr: 1e-5, length: 60, pitt-7-1-windowed.dat }

{{< figure src="/ox-hugo/2022-07-04_19-28-07_screenshot.png" >}}

-   Commentary: quintessential overfitting
-   Decision:
    -   Made the corpus bigger
        -   cleaned the entire [Pitt](https://dementia.talkbank.org/access/English/Pitt.html) corpus (`pitt-7-4` in the `raw` folder) to become training data. Similar to `pitt-7-1`, ran `flo` on all collected samples; arguments used are the same as that for [batchalign]({{< relref "KBhbatchalign.md" >}}), except _we filter out the `INV` tier_ as we are detecting AD on patient and not investigator: so `flo +d +ca +t* -tINV`; the `flo`'d results are in `transcripts_nodisfluency`.
        -   the notable difference between the previous dataset `7-1` and the current one `7-4` is that the `7-4` are prepended numbered by the task (`cookie/100-01.cha` `> =cookie-100-01.txt`)
        -   New (full) Pitt data as prepared above is ran though the dataprep script as of `b325514cfad79da82d7a519ed29ea19ed87b2be4` (difference is that empty/dummy files are ignored), and pickled at `transcripts_nodisfluency/pitt-7-4.dat` and `transcripts_nodisfluency/pitt-7-4-windowed.dat` respectively.
        -   For new data, window size is still `5`, splitting `10` cases out for testing now instead of `5`.


#### train: vocal-oath-6 {#train-vocal-oath-6}

{bs: 4, epochs: 3, lr: 1e-5, length: 60, pitt-7-4-windowed.dat}

{{< figure src="/ox-hugo/2022-07-04_20-20-01_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-04_20-35-54_screenshot.png" >}}

-   Commentary: high recall, low precision. Perhaps classes aren't balanced?
    -   Spoiler alert: they are not.
    -   An inspection of data reveals that there is 3211 rows of dementia, 2397 rows of control
-   Decision:
    -   Created `pitt-7-4-bal` and `pitt-7-4-windowed-bal` series of data based on dataprep.py on `703f79248a20fd7a13a5033ca2bf7f691f42c941`. This version force-crops to make sure that the dementia and control indicies have the exact same length for each class.


#### train: helpful-leaf-7 {#train-helpful-leaf-7}

{bs: 4, epochs: 3, lr: 1e-5, length: 60, pitt-7-4-windowed-bal.dat}

{{< figure src="/ox-hugo/2022-07-04_21-31-19_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-04_21-35-43_screenshot.png" >}}

Beautiful. Question now is whether or not there is data leakage/external heuristics. It is a good time to do some [LOOCV]({{< relref "KBhloo.md" >}}). Getting this result without any disfluency calculations seems unlikely.

But anyways, going to discuss these results as they seem to meet results we see in [Yuan 2021]({{< relref "KBhyuan_2021.md" >}}), even without top-N ensemble; though this is one trial, [LOOCV]({{< relref "KBhloo.md" >}}) may still show that we actually need it.


### July 5th {#july-5th}

-   Began the day with creating the script k-fold validation; I originally hoped to exactly replicate the procedure of [Yuan 2021]({{< relref "KBhyuan_2021.md" >}}) for comparability, but, not sure how they got the actual result of a min/max range with [LOOCV]({{< relref "KBhloo.md" >}}) on binary; therefore, we will instead create a 95% [confidence interval]({{< relref "KBhconfidence_interval.md" >}}) analysis via a single-variable [t test]({{< relref "KBht_statistics.md" >}}) on standard k-fold validation. K=50
-   During one-off testing, another set of hyperparameters seems to work too: {bs: 72, epochs: 3, lr: 1e-5, length: 60, pitt-7-4-windowed-bal.dat}. As we have not begun tuning for hyperparameters, we are just going to use this set, K=50, for the first k-fold trial.


#### k-fold: F4ZVbGfdBAQvtvXemWZCZD {#k-fold-f4zvbgfdbaqvtvxemwzczd}

code: 55f77ff1dea03c3ed66967864dc52fd2c0062f23

{{< figure src="/ox-hugo/2022-07-05_13-22-24_screenshot.png" >}}

{bs: 72, epochs: 3, lr: 1e-5, length: 60, pitt-7-4-windowed-bal.dat}
K = 50

{{< figure src="/ox-hugo/2022-07-05_14-25-26_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-05_14-26-00_screenshot.png" >}}

It seems like the results we got is consistent and validates in a manner which we expect.


### July 7th {#july-7th}

Yesterday was a day filled with working on [batchalign]({{< relref "KBhbatchalign.md" >}}), but we are back now. Today, I aim to look into the heuristic that I identified yesterday by playing with the model, which is that it seems like the model prefers the use of long-focused sentences _about_ cookies, so the heruistic its picking up is probably on-topicness.

I am going to first leverage the lovely `cdpierse/transformers-interpret` tool to help build some explainability by adding it to validate.py. Upon some human validation with random sampling, the model seem to do less well than I'd hoped. Running a train cycle with the new results/params seen above to see if it does better.


#### train: brisk-oath-10 {#train-brisk-oath-10}

{bs: 72, epochs: 3, lr: 1e-5, length: 60, pitt-7-4-windowed-bal.dat}

{{< figure src="/ox-hugo/2022-07-07_11-39-18_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-07_11-48-40_screenshot.png" >}}

-   Commentary: It seems like the model is doing overall worse from validation data, but it does fairly well during test data.
-   Decision:
    -   I can fairly confidently claim that the model is just fitting on topic. As in, if the topic is about cookies (theft/taking/cookie/mother/etc.), it will be classified as control.
    -   One thing that we can do is to claim this task as directly task-controlled: that is, include **no** data except cookie and control for that difference
    -   Then, the model would't be able to predict the result b/c the variation in topic won't have influence.
    -   This is going to be prepared in the `cookiepitt-7-7-bal*` based on `dataprep.py` in commit `518dec82bb961c0a8ad02e3080289b56102aa1a2`


#### train: super-durian-11 {#train-super-durian-11}

{bs: 72, epochs: 3, lr: 1e-5, length: 60, cookiepitt-7-7-windowed-bal.dat}

{{< figure src="/ox-hugo/2022-07-07_13-51-01_screenshot.png" >}}

-   Commentary: the model is _no where near convergence_
-   Decision: multiplying the LR by 10


#### train: floral-sunset-12 {#train-floral-sunset-12}

{bs: 72, epochs: 3, lr: 1e-4, length: 60, cookiepitt-7-7-windowed-bal.dat}

{{< figure src="/ox-hugo/2022-07-07_13-54-38_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-07_14-02-47_screenshot.png" >}}

-   Commentary: There we go. This seem to be more in line with what we see in [Yuan 2021]({{< relref "KBhyuan_2021.md" >}})
-   Decision: ok, let's elongate the actual content. Perhaps we can try a 7-element search instead? This is written as `cookiepitt-7-7-*-long`. Code based on `9e31f4bc13c4bfe193dcc049059c3d9bda46c8d0`


#### train: sweet-plasma-13 {#train-sweet-plasma-13}

{bs: 72, epochs: 3, lr: 1e-4, length: 60, cookiepitt-7-7-windowed-long-bal.dat}

{{< figure src="/ox-hugo/2022-07-07_15-05-28_screenshot.png" >}}

-   Commentary: underfitting
-   Dropping batch size down to 64 to add more steps


#### train: smart-river-14 {#train-smart-river-14}

{bs: 64, epochs: 3, lr: 1e-4, length: 60, cookiepitt-7-7-windowed-long-bal.dat}

{{< figure src="/ox-hugo/2022-07-07_15-13-21_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-07_15-20-57_screenshot.png" >}}

-   Commentary: this finally fits to the specifications which [Yuan 2021]({{< relref "KBhyuan_2021.md" >}}) have revealed
-   Decision: running k-fold on this architecture


#### k-fold: XgsP4FVS6ScFxCZKFJoVQ5. {#k-fold-xgsp4fvs6scfxczkfjovq5-dot}

Code: 3870651ba71da8ddb3f481a7c3e046397a09d8b2

{{< figure src="/ox-hugo/2022-07-07_15-30-07_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-07_16-18-44_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-07_16-20-23_screenshot.png" >}}


### July 8th {#july-8th}

-   Began the day with aligning the entirety of cookie for both control and dementia, named the dataset `alignedpitt-7-8` in the RAW folder
-   Per what we discussed, will add [pause] as a token to the model. Then, transcript the text such that it would contain normalized values to the pauses for pauses &gt; 0.250 seconds. Therefore, the data would look like

    "hello my name is [pause] 262 [pause] bob"


### July 9th {#july-9th}

-   Created transcript.py, which coverts the data in `raw` to `transcripts_pauses`, which contains pause values &gt; 250 msc and prepends them with [pause] tokens
-   The code from above is taken from `check.py` in [batchalign]({{< relref "KBhbatchalign.md" >}}), used `transcript.py` from `7e19a4912cf0ad5d269c139da5ce018615495ebb` to clean out the dataset; placed it in similar txt format to `alignedpitt-7-8`
-   Ran dataprep with window size of 5, created `alignedpitt-7-8.bat` and `alignedpitt-7-8-windowed.bat` as the dataprep file
-   starting a new training run, with `[pause]` added as a new token, code `06846c6c95e6b1ccf17f0660c5da76aa50231567`


#### train: golden-tree-16 {#train-golden-tree-16}

{bs: 64, epochs: 3, lr: 1e-4, length: 60, alignedpitt-7-8-windowed.dat}

{{< figure src="/ox-hugo/2022-07-09_11-48-01_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-09_11-51-24_screenshot.png" >}}

So realistically, we have the same F1 between the two, but pause encoding increased the accuracy of prediction yet dropped recall dramatically.

As a random check, let's find out if simple fine-tuning (only training on classifier) would work, so:

{{< figure src="/ox-hugo/2022-07-09_12-07-31_screenshot.png" >}}


#### train: jumping-blaze-17 {#train-jumping-blaze-17}

{bs: 64, epochs: 3, lr: 1e-4, length: 60, alignedpitt-7-8-windowed.dat}. This time with only training classifier.

{{< figure src="/ox-hugo/2022-07-09_12-09-22_screenshot.png" >}}

-   Commentary: we did not like. start coverging
-   Bumping LR by a factor of 10


#### train: vital-water-18 {#train-vital-water-18}

{bs: 64, epochs: 3, lr: 1e-3, length: 60, alignedpitt-7-8-windowed.dat}. This time with only training classifier.

{{< figure src="/ox-hugo/2022-07-09_12-11-20_screenshot.png" >}}

-   Commentary: barely started converging, seem to be a local
-   Training for 2 more epochs


#### train: fiery-smoke-19 {#train-fiery-smoke-19}

{bs: 64, epochs: 5, lr: 1e-3, length: 60, alignedpitt-7-8-windowed.dat}. This time with only training classifier.

{{< figure src="/ox-hugo/2022-07-09_12-14-14_screenshot.png" >}}

-   Commentary: classic overfitting

At this point, unlocking the model would probably be a good bet


#### train: leafy-deluge-20 {#train-leafy-deluge-20}

{bs: 64, epochs: 5, lr: 1e-4, length: 60, alignedpitt-7-8-windowed.dat}.

Training once again with code without locking, and bump LR down

{{< figure src="/ox-hugo/2022-07-09_13-14-39_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-09_13-17-36_screenshot.png" >}}

-   Commentary: classic the recall is slowly creeping up
-   Decision: let's go for 8 epochs


#### train: royal-pond-21 {#train-royal-pond-21}

{bs: 64, epochs: 8, lr: 1e-4, length: 60, alignedpitt-7-8-windowed.dat}.

{{< figure src="/ox-hugo/2022-07-09_13-22-40_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-09_13-24-01_screenshot.png" >}}

Commentary: let's run k-fold now, with these settings.


#### k-fold: QskZWfEsML52ofcQgGujE2. {#k-fold-qskzwfesml52ofcqgguje2-dot}

{{< figure src="/ox-hugo/2022-07-09_14-06-23_screenshot.png" >}}

{bs: 64, epochs: 8, lr: 1e-4, length: 60, alignedpitt-7-8-windowed.dat}.

{{< figure src="/ox-hugo/2022-07-09_16-08-09_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-09_16-08-31_screenshot.png" >}}

Ok, the base hypothesis from [Yuan 2021]({{< relref "KBhyuan_2021.md" >}}) is very much confirmed here. The same training, same content, but pause encoding is very beneficial to the quality of the results. The results that they reported contained an ensemble data, which is in the high 80s; we can now continue doing something new as [Yuan 2021]({{< relref "KBhyuan_2021.md" >}})'s conclusion is fairly achieved.

{{< figure src="/ox-hugo/2022-07-09_16-15-07_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-09_18-26-57_screenshot.png" >}}

We can probably call the replication stage done, with no dramatically better effect.


### July 10th {#july-10th}

-   FluCalc! Leonid's lovely new program can be an uberuseful feature extraction tool
-   Let's try using to build a new dataset, and network. FluCalc + Pause Encoding + Textual Data [late fusion]({{< relref "KBhfusion.md#late-fusion" >}})
-   This is becoming `alignedpitt-7-8-flucalc`. As the program is currently under heavy development to include results from [batchalign]({{< relref "KBhbatchalign.md" >}}), we will specify version `V 09-Jul-2022 11:00` for now.
-   Done, the new data has the same i/o shape, but then has a bunch of features filtered for nulls which contains outputs from flucalc. Again, `alignedpitt-7-8-flucalc` from `4346fc07c4707343c507e32786b6769b6bd6fb49` does not take into account results from the `%wor` tier!


### July 11th {#july-11th}

-   `ab19abd6486884141c9ab4e4e185255a77ae833e` is the final-ish version of the late fusion model
-   We are going to use `alignedpitt-7-8-flucalc` to start training


#### train: royal-pond-21 {#train-royal-pond-21}

{bs: 64, epochs: 8, lr: 1e-4, length: 60, alignedpitt-7-8-flucalc-windowed.dat}.

{{< figure src="/ox-hugo/2022-07-11_10-15-58_screenshot.png" >}}

-   Commentary: overfitting
-   Decision, droping lr by a factor of 10, also increasing length to 70


#### train: fallen-dust-25 {#train-fallen-dust-25}

{bs: 64, epochs: 8, lr: 1e-5, length: 70, alignedpitt-7-8-flucalc-windowed.dat}.

{{< figure src="/ox-hugo/2022-07-11_10-37-32_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-11_10-38-37_screenshot.png" >}}

-   Commentary: overfitting
-   Decision, droping lr by a factor of 10, dropping batch size to 32, training more to 10


#### train: dainty-meadow-26 {#train-dainty-meadow-26}

{bs: 32, epochs: 10, lr: 1e-6, length: 70, alignedpitt-7-8-flucalc-windowed.dat}.

{{< figure src="/ox-hugo/2022-07-11_10-45-52_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-11_10-46-31_screenshot.png" >}}

****ah****

-   At this point, I think it'd be good to do some feature selection
-   Let's do a chi^2 correlation, and select 3 best features

<!--listend-->

```python
import pandas as pd

DATA = "/Users/houliu/Documents/Projects/DBC/data/transcripts_pauses/alignedpitt-7-8-flucalc-windowed.bat"

# read pickle
df = pd.read_pickle(DATA)
# test
test_data = df[df.split=="test"]
# also, get only train data
df = df[df.split=="train"]
df
```

```text
              target  mor_Utts  ...  split                                          utterance
trial sample                    ...
120-2 1049         1 -0.179084  ...  train  well the boy is getting some cookies handing o...
336-1 2492         0 -0.481740  ...  train  +oh okay, the the little girl askin(g) for the...
076-4 786          1 -0.179084  ...  train  well the little boy was looking at that cookie...
279-0 2250         1  1.980274  ...  train  kid's stool turnin(g) [pause]540[pause] over s...
014-2 151          1  0.746355  ...  train  he's fallin(g) off the chair  down here or try...
...              ...       ...  ...    ...                                                ...
208-0 1655         0 -0.481740  ...  train  the boy [pause]920[pause] is going after [paus...
492-0 2696         1 -0.179084  ...  train  oh yes quite a_lot the kid's tryin(g) to get t...
497-1 2727         1  0.129396  ...  train  what else ? &uh the see the [pause]2400[pause]...
175-2 1535         0  0.863668  ...  train  the window is open you can see out the curtain...
279-0 2261         1  1.980274  ...  train  the other kid with [pause]610[pause] the stool...

[2848 rows x 44 columns]
```

Let's slice out the bits which is labels, etc.

```python
in_data = df.drop(columns=["utterance", "target", "split"])
in_data.columns
```

```text
Index(['mor_Utts', 'mor_Words', 'mor_syllables', '#_Prolongation',
       '%_Prolongation', '#_Broken_word', '%_Broken_word', '#_Block',
       '%_Block', '#_PWR', '%_PWR', '#_PWR-RU', '%_PWR-RU', '#_WWR', '%_WWR',
       '#_mono-WWR', '%_mono-WWR', '#_WWR-RU', '%_WWR-RU', '#_mono-WWR-RU',
       '%_mono-WWR-RU', 'Mean_RU', '#_Phonological_fragment',
       '%_Phonological_fragment', '#_Phrase_repetitions',
       '%_Phrase_repetitions', '#_Word_revisions', '%_Word_revisions',
       '#_Phrase_revisions', '%_Phrase_revisions', '#_Pauses', '%_Pauses',
       '#_Filled_pauses', '%_Filled_pauses', '#_TD', '%_TD', '#_SLD', '%_SLD',
       '#_Total_(SLD+TD)', '%_Total_(SLD+TD)', 'Weighted_SLD'],
      dtype='object')
```

And the labels:

```python
out_data = df["target"]
out_data
```

```text
trial  sample
120-2  1049      1
336-1  2492      0
076-4  786       1
279-0  2250      1
014-2  151       1
                ..
208-0  1655      0
492-0  2696      1
497-1  2727      1
175-2  1535      0
279-0  2261      1
Name: target, Length: 2848, dtype: int64
```

And now, let's select 3 best features.

```python
from sklearn.feature_selection import SelectKBest, f_classif

k_best_tool = SelectKBest(f_classif, k=3)
k_best_tool.fit(in_data, out_data)

best_features = k_best_tool.get_feature_names_out()
best_features
```

|       |            |                  |
|-------|------------|------------------|
| %_WWR | %_mono-WWR | %_Total_(SLD+TD) |

OD = other disfluencies; SLD = stuttering-like disfluencies; TD = total disfluencies; WWR = whole-word-repetition

ok, let's select those features


#### train: visionary-plasma-27 {#train-visionary-plasma-27}

{bs: 32, epochs: 10, lr: 1e-6, length: 70, alignedpitt-7-8-flucalc-windowed.dat}. Also with feature selection.

{{< figure src="/ox-hugo/2022-07-11_11-27-49_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-11_11-28-11_screenshot.png" >}}

hmmm.

I am curious if we just ran something like a decision tree, what happens.

```python
in_features = df.drop(columns=["utterance", "target", "split"])
test_features = test_data.drop(columns=["utterance", "target", "split"])
in_targets = df["target"]
test_targets = test_data["target"]
```

seed the classifier, and fit.

```python
from sklearn.ensemble import RandomForestClassifier

clsf = RandomForestClassifier()
clsf.fit(in_features, in_targets)
clsf.score(test_features, test_targets)
```

```text
0.5932203389830508
```

OK nevermind. What about SVC?

```python
from sklearn.svm import SVC

clsf = SVC()
clsf.fit(in_features, in_targets)
clsf.score(test_features, test_targets)
```

```text
0.5932203389830508
```

Turns out, deep learning still does better. I'm thinking maybe the output is being faulty, say, for something like the loss function.

Decision: switching activation to sigmoid.


#### train: sunny-bush-31 {#train-sunny-bush-31}

{bs: 32, epochs: 10, lr: 1e-6, length: 70, alignedpitt-7-8-flucalc-windowed.dat}, selected features

{{< figure src="/ox-hugo/2022-07-11_12-35-52_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-11_12-37-21_screenshot.png" >}}

Ok let's think about this. Decision: added batch normalization.


#### train: autumn-jazz-32 {#train-autumn-jazz-32}

{bs: 32, epochs: 10, lr: 1e-6, length: 70, alignedpitt-7-8-flucalc-windowed.dat}, selected features

{{< figure src="/ox-hugo/2022-07-11_12-50-10_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-11_12-50-56_screenshot.png" >}}

The model maybe overfitting on some simple heuristic; some basic statistics revealed that these variables are actually quite differently distributed.

{{< figure src="/ox-hugo/2022-07-11_13-06-06_screenshot.png" >}}

Perhaps we should increase the complexity of the model?

{{< figure src="/ox-hugo/2022-07-11_13-08-49_screenshot.png" >}}


#### train: fallen-microwave-33 {#train-fallen-microwave-33}

{bs: 32, epochs: 10, lr: 1e-6, length: 70, alignedpitt-7-8-flucalc-windowed.dat}, selected features

Just to test, I am bumping the LR to 1e-5, just to see what happens. I am very confused.

{{< figure src="/ox-hugo/2022-07-11_13-14-26_screenshot.png" >}}


#### train: upbeat-flower-35 {#train-upbeat-flower-35}

{bs: 32, epochs: 10, lr: 1e-5, length: 70, alignedpitt-7-8-flucalc-windowed.dat}, selected features

{{< figure src="/ox-hugo/2022-07-11_13-21-53_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-07-11_13-23-35_screenshot.png" >}}

The more we work on this, the more overfit it gets. (I FORGOT A RELUCTIFIER)


#### a note {#a-note}

{bs: 32, epochs: 10, lr: 1e-5, length: 70, alignedpitt-7-11-flucalc-windowed.dat}, selected features

{{< figure src="/ox-hugo/2022-07-11_17-07-45_screenshot.png" >}}

Pauses, no meta:

{{< figure src="/ox-hugo/2022-07-11_17-09-23_screenshot.png" >}}

Pauses, meta:

{{< figure src="/ox-hugo/2022-07-11_17-08-41_screenshot.png" >}}

so effectively cointoss


## Concerns and Questions {#concerns-and-questions}


### July 2nd {#july-2nd}

-   `pitt7-1/dementia/493-0` PAR tier "tell me everything you see going on in that picture" doesn't seem to be labeled correctly; I am guessing that's supposed to be INV?
-   Has anyone tried to include investigator/participant cross-dialogue?


### July 4th {#july-4th}

-   Is the model overfitting on antiquated language?
-   Is the model overfitting on cooke-theft on-topic-ness?


### July 11th {#july-11th}

-   LSTM only on pauses?