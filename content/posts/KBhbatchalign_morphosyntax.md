+++
title = "Batchalign Morphosyntax"
author = ["Houjun Liu"]
draft = false
+++

We now describe the procedure used to perform morpho-syntactic analysis which is used to extract morphological and dependency information, including the morphological features used in this analysis. The core facilities of neural morpho-syntax is provided by the Stanza package ((<a href="#citeproc_bib_item_11">Qi et al. 2020</a>)), on the basis of which we perform myriad customizations in order to support the analysis functionality needed for this work.

The process of morpho-syntax analysis occurs in five basic steps: 1) performance of raw language sample analysis (LSA) using automatic speech recognition (ASR) and utterance segmentation tools already built into the Batchalign system ((<a href="#citeproc_bib_item_6">Liu et al. 2023</a>)) 2) use of the Stanza tokenizer and multi-word token (MWT) recognizer to obtain initial word-level tokenization of each utterance 3) programmatic, language-specific correction of these tokenization, especially pertaining to multi-word tokens (MWTs) and multi-word forms 4) the invocation of the rest of the Stanza neural pipeline for morphology, dependency, and feature extraction 5) programmatic extraction and correction of output features after the Stanza pipeline.


## Initial Language Sample Analysis {#initial-language-sample-analysis}

Because the rest of the analysis we describe in this work takes place at a textual level, we first must extract text from the original auditory language samples. This step of the analysis occurs using the Batchalign system ((<a href="#citeproc_bib_item_6">Liu et al. 2023</a>)), and specifically its facilities for ASR and utterance segmentation. We describe here briefly the high-level options available as a part of the Batchalign ASR system relevant to the downstream analysis which we present; specific details of the system is described in further detail in publication regarding the system itself.

To perform the initial ASR, Batchalign offers two methods; users can select either the use of a commercial ASR service, Rev.AI (training supervized by (<a href="#citeproc_bib_item_3">Del Rio et al. 2022</a>)), or a local ASR model based on OpenAI Whisper ((<a href="#citeproc_bib_item_12">Radford et al. 2022</a>)).

Though the choice of ASR system is largely irrelevant to downstream analysis, it is critical to note that---because the orthography of Universal Dependencies training data for the Stanza models used in our analysis here uses native orthographies ((<a href="#citeproc_bib_item_11">Qi et al. 2020</a>; <a href="#citeproc_bib_item_2">De Marneffe et al. 2021</a>))---latinized transcripts must be converted back into their original orthography before downstream analysis.

Because of this limitation, the significantly wider language and orthographic profile of the Whisper model (in particular, WhisperV3 available at <https://huggingface.co/openai/whisper-large-v3>) is advantageous for non-English languages; therefore, the majority of the recognition needed to cover all the languages described here (and in particular ones with non-latinized native orthography) is performed with the Whisper option.

After ASR, the Batchalign system has the capability to perform text-based utterance segmentation---useful to maintain the standardization metrics such as MLU or mean features per utterance. For English and Mandarin, Batchalign uses a Bert ((<a href="#citeproc_bib_item_5">Devlin et al. 2019</a>)) style token classification model for the task of utterance segmentation which is trained in the manner previously described in (<a href="#citeproc_bib_item_6">Liu et al. 2023</a>). For other languages, Batchalign relies on the sentence-level text segmentation produced by Whisper model as a baseline for utterance segmentation.


## Morpho-Syntactic Analysis {#morpho-syntactic-analysis}

The rest of the morpho-syntax analysis described here follows largely the principles outlined by the Universal Dependencies (UD) project ((<a href="#citeproc_bib_item_2">De Marneffe et al. 2021</a>)), and is performed largely by the neural analysis models given by the Stanza ((<a href="#citeproc_bib_item_11">Qi et al. 2020</a>)) system. However, to ensure a consistent analysis, we now describe some key deviations and modifications we make to the end-to-end Stanza system.

After LSA, the rest of the analysis takes place at the utterance level. This consequentially means that there is no continuation of analyses between different utterances---for instance, a dependency between two forms cannot span across utterances even if they belong to the same sentence. To implement this, we simply treat each utterance as a "sentence" to be analyzed by Stanza.


### Tokenization {#tokenization}

The first step of analysis involves tokenizing each utterance into tokens. Because the CHAT transcription format ((<a href="#citeproc_bib_item_8">MacWhinney 2014</a>)) largely encodes tokenization by using whitespace delineated token groups to identify words, tokenization is frequently given natively in the transcript.

This is, however, untrue in some languages whose token representations have little to do with word-level representations. In Japanese child language, for instance, two of the language's three writing systems---hiragana and katakana---are moraic-based units frequently employed to transcribe a child during L1 development ((<a href="#citeproc_bib_item_10">Ota 2015</a>)) while the third---kanji, often used for actual word representations needed for morpho-syntax analysis, have little to do with phonology. Because of this, whitespace-delineated token representations are not suitable as a source of information for word representations.

For languages which has this limitation, we employ the more complex token segmentation scheme given in Stanza which involves formulating word-level tokenization as a token labeling task---ignoring any transcribed tokenizations, labeling each input _character_ as belonging to the start, middle, or end of a token---before further processing each resulting "token group" via the downstream, semantic aware modules such as the Stanza lemmatizer. In this way, we recover a canonical tokenization for those particular languages based on the annotation style chosen by the working group of the target language in UD annotation; for Japanese, for instance, this may include some resulting orthographic Kanji formed by joining tokens from other syllabaries following the short-unit word (SUW) style ((<a href="#citeproc_bib_item_4">Den et al. 2008</a>)). We then use this canonical tokenization to "retokenize" the original CHAT transcript with this new tokenization.

Once this initial tokenization is obtained, we can then proceed to the remaining analysis by the pipeline describe here.


### Multi-Word Token and Form Correction {#multi-word-token-and-form-correction}

Following the convention of UD ((<a href="#citeproc_bib_item_2">De Marneffe et al. 2021</a>)), there is a distinction to be made between tokens---continuous character spans without delineation in between---and syntactic words used in analysis.

This distinction is relevant in particular with respect to the treatment of "multi-word tokens" (MWTs)---a single continuous text span which contains multiple syntactic words, each with individual features and dependencies which needs to be analyzed independently.

Augmenting Stanza's neural-only analysis, we use a lexicon and orthography driven approach to identify and expand three types of such MWTs.

Two types of such MWTs are usually automatically recognized by Stanza through the same tokenization procedure described in the section above: clitics and contractions. Clitics are independent syntactical forms attached to other words, such as in Spanish _despertarme_ (_despertar_ + _me_)---with the latter being a separate syntactic word which modifies the previous word which needs to be analyzed independently (i.e. modifying that I am who woke the object up); contractions are combinations of multiple words into one token, such as in English _I'm_ (_I_ + _am_).

If clitics and contractions are not automatically expanded by Stanza, we use a rules-based analysis of orthography to detect these some of these common forms and manually expand them. This functionality is currently supported for detection of the subject contractions in French and Italian (i.e. _l'amor_ to _le_ + amor/, _t'aime_ to _te_ + _aime_) through detecting apostrophe and matching the first form to a lexicon, prepositional contractions (i.e. _jusqu'ici_ to _jusque_ + _ici_) in a similar manner, and be-contractions in English (i.e. _you're_ to _you_ + _are_).

The third type of MWT not typically expanded by Stanza, but which our pipeline uses a lexicon to detect and expand, are single-unit, multi-word forms which are usually joined by an underscore in the CHAT transcription format ((<a href="#citeproc_bib_item_8">MacWhinney 2014</a>)) because they are a single semantic form and multiple syntactic words. For instance, the form _pirates_des_Caraïbes_ is one such form, broken into _pirates_ _des_ _Caraïbes_.

We implement this correction functionality by implementing a custom step in the Stanza analysis pipeline; this step takes the "draft" tokenizations from Stanza as input, and will return the correct tokenization and word expansions to downstream analysis functions in Stanza---ensuring that morphologies, features, and dependencies will be analyzed on the _corrected_ word.

Additionally, the neural tokenizer in Stanza would occasionally mark forms as MWTs when they are simply single-token single-word forms with a punctuation within (i.e. the French word _aujourd'hui_); in those cases, we perform the opposite correction forcing Stanza to treat the resulting token a single word instead of an MWT. These cases are identified and corrected using a lexicon as well.

In final output into the CHAT transcription format, we follow the convention set forth by the CLAN MOR/MEGRASP system ((<a href="#citeproc_bib_item_7">MacWhinney 2012</a>)) and join the morphology analyses of multi-word tokens together with a tilde (~), maintaining token-level alignment between the transcript and analysis yet being able to encode multiple words within a token.


### Morphology and Dependency Analysis {#morphology-and-dependency-analysis}

In our work, we make no further adjustments to the Stanza morphology, dependency, and feature analysis of each language and simply run the remaining Stanza analysis pipeline with the corrected tokens.

Notably, because of the Stanza models are largely trained via the Universal Dependencies ((<a href="#citeproc_bib_item_2">De Marneffe et al. 2021</a>)) dataset, some datasets (such as UD Dutch Alpino by (<a href="#citeproc_bib_item_1">Bouma, Van Noord, and Malouf 2001</a>)) will be rich in annotated feature information whereas some others (such as UD Japanese GSD in (<a href="#citeproc_bib_item_9">Nivre et al. 2020</a>)) will have little to no features annotated. Our UD analysis, therefore, carries the design choices of analysis made within these gold datasets.

Once these morphology, dependency, and feature information has been annotated by the Stanza system, we proceed to perform morphology-dependent extraction and correction of the resulting features as a final processing step.


### Morpho-syntax Transcription and Feature Correction {#morpho-syntax-transcription-and-feature-correction}

After analysis by Stanza, we operationalize the extracted features using an annotation format very similar to the one used in the MOR/MEGRASP system (described further in <https://talkbank.org/manuals/mor.pdf>) within the _%mor_ and _%gra_ lines in CHAT.

Though the annotation format largely follows MOR and MEGRASP, our analysis here deviate in two key ways. First, we use part-of-speech tags conforming to the Universal POS tags (UPOS) as well as dependency relations annotated via the UD convention instead of that of MEGRASP.

Furthermore, we make some adjustments to the method by which morphological features are presented which takes components from both the typical style of both MOR and UD.

As mentioned above, there exists variations as to which features are available which differs for each language being analyzed. Therefore, our overaching goal is to report the _maximal set_ of features which 1) can be reported for each language and 2) provide additional information beyond the "default" case.

In service to this, aspect, mood, tense, polarity, clusivity, case, type, degree, conjugation (form), and politeness are reported for their respective corresponding morphologies as-available and as-annotated directly following the UD annotation specifications; gender is reported for all tagged genders beyond "common neutral" (ComNeut); and number is reported for all beyond singular. Importantly, for personhood, fourth and zeroth person are resolved to be reported as "fourth person"---as in, the impersonal and alternate-third persons are not distinguished; first, second, and third persons are preserved as is.

The annotated features, similar to MOR, are joined using a dash "-" after the lemma of the form being tagged in the _%mor_ line.


## Data and Software Availability {#data-and-software-availability}

The analysis described here has been integrated as a processing module in a revised version of the Batchalign system, named Batchalign2, which is available to be used by visiting <https://github.com/talkbank/batchalign2>.

The utterance segmentation models trained using the manner described in ((<a href="#citeproc_bib_item_6">Liu et al. 2023</a>)) are additionally available for US english and mandarin; these models are available at <https://huggingface.co/talkbank>.
