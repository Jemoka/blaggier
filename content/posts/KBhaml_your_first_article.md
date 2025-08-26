+++
title = "AML: Your First Article"
author = ["Houjun Liu"]
draft = false
+++

Hello y'all! This quick post about... writing your first "article" (ahem, MA) for this class. To me, the most rewarding part of our journey together is to be able to support everyone through writing very presentable reports---even if it is on old or simple problems---but in the format from which you can easily jump off and write a fully-blown scientific article in the future.


## exemplar we discussed {#exemplar-we-discussed}

(<a href="#citeproc_bib_item_1">Kameswari, Sravani, and Mamidi 2020</a>)

I should add that, despite the word being used, this is by _no means_ the only way that you can write a wonderful scientific article. It just had the right structure for us to go over in class :)


## overall goals {#overall-goals}

We want to make reports that are _clear_ (easily understandable for audience), _concise_ (only uses words when needed, prioritizing figures and intuition), and _precise_ (when making claims, they are supported clearly with data). And so, the following sections focus mostly on improving those three criteria.


## discussion per section {#discussion-per-section}

Let's now switch to bullet-point format, going over some ideas of how to make strong sections:


### abstract {#abstract}

_Guiding Questions_: What is your study about? What did you do? How well did it work?

-   more jargon here is OK, but should be **immediately** summative of your whole study
-   only use enough jargon to make it concise: this section should be **crystal clear** for everyone of your academic peers (i.e. anyone in our class/familiar with ML)
-   it should be easily skimmable


### intro/motivation/background {#intro-motivation-background}

_Guiding Questions_: Why are you making big picture choices you made? Did anyone do it before you? How did they do it? What changes are you making (for this class, "none" is acceptable)?

-   immediately, you should state what you are trying to do and why its worthwhile of your reader's time
-   keep the goal scope small: not "cancer is an sickness that affects a lot of people", but "this specific gene is correlated with cancer prognosis"
-   **justify why you are using AML tools!** if the relationship you are modeling is a line, deep learning is way overkill
-   summarize previous work: if anyone did it before you, what approach did they do; why? Are you/why are you doing anything difference (i.e. why do you believe methods to be not as good?)


### methods {#methods}

_Guiding Questions_: How did you do your study?

-   give as much information for a peer (i.e. anyone in our class/familiar with ML) to be able to **reproduce your entire study**
-   good to think about...
    -   data sourcing
    -   _detailed_ notes on data preparation and feature engineering (bonus points for code)
    -   model selection + motivation (should be broadly given in the prev. section already)
    -   model implementation (layer counts, activations, seeds)
    -   (hyper)parameters (LR, batch size, epoch, optimizer momentum/beta, layer seeds) --- saying "default" here is fine but be specific about what you are leaving to default
    -   training environment (hardware, library versions, time it took, etc.)

Also, from a class standpoint, we want to see your hard work in actually practicing the skills we are learning!


### results/data {#results-data}

_Guiding Questions_: Why should your peer believe you did what you said you did?

-   motivate validation metrics used (i.e. why is success in this validation metric a measurement by proxy of success in the stated problem in the intro?)
-   report the clear details the withholding scheme used---simple train/val split? k-fold? leave-one-out?
-   present in **graphical or tabular form!** your clear key takeaways; in general, keep words in this section to a minimum
    -   "these distributions look visually different!"
    -   "these lines are definitely parallel!"
    -   "this number is definitely larger than this other number!"

During the process of "NTJ", a paper reading methodology taught by the XRT lab, the skill of jumping abstract =&gt; data ("figures") =&gt; takeaways ("novelty") is greatly emphasized. Usually, the best papers will represent their key takeaways clearly and graphically in this section, so that the reader only need to go into the methods section strictly when needed to reproduce or clarify questions.


### conclusion/discussion {#conclusion-discussion}

_Guiding Questions_: Summarize.

It is often good to include future work here as well as well as fascinating extensions of your choosing. This section differs from the abstract in both the inclusion of future work, as well as its audience: while the abstract need only to be crystal clear for your peers, the conclusion should be clear to everyone in the _field_ --- so redefinition of paper-specific jargon, etc.


### ethics {#ethics}

_Guiding Questions_: Where did your data come from; why is its collection and **processing** (they are independent permissions!) legal and ethical? Why are you not breaking the world?

See: [this Medium article](https://medium.com/@GovAI/a-guide-to-writing-the-neurips-impact-statement-4293b723f832) for more!


## from the experts {#from-the-experts}

NIPS (leading ML conference) rubric for a paper ([jump to "Review Content" section](https://nips.cc/Conferences/2020/PaperInformation/ReviewerGuidelines))



<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Kameswari, Lalitha, Dama Sravani, and Radhika Mamidi. 2020. “Enhancing Bias Detection in Political News Using Pragmatic Presupposition.” In <i>Proceedings of the Eighth International Workshop on Natural Language Processing for Social Media</i>, nil. doi:<a href="https://doi.org/10.18653/v1/2020.socialnlp-1.1">10.18653/v1/2020.socialnlp-1.1</a>.</div>
</div>
