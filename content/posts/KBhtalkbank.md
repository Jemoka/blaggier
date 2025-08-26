+++
title = "talkbank"
author = ["Houjun Liu"]
draft = false
+++

Moved much of this to Drafts instead

-   phonbank: poor articulation
-   disfluent kids
-   late talkers

-   Write a review about ASR benchmark methods
    -   REV would be our benchmark
        -   What corpora we use?
        -   Has anyone used **disordered speech**?
        -   Or really seriously accented speech vis a vi CORALL (how was CORALL sampled?)
    -   What samples? How do we sample? What are the benchmarks?

---

{{< figure src="/ox-hugo/2023-06-01_16-32-05_screenshot.png" >}}

-   ASR model + WER
-   tildes and noprompt swapped

-   WER
-   missing words
-   correct alignment


## things {#things}

-   swap noprompt backwards
-   apostrophies for quotes
-   the word separation error
    -   put tilde BETWEEN specific symbols with connection symbols
-   jemoka becomes batchalign 2
-   Extended UD?


## combining {#combining}

-   bash script to run batchalign multiple times throughout the directories


## Removing {#removing}

-   removing non-auditory SBCA corpus area


## Diarization {#diarization}

-   Diarization as a Bi-product of ASR


## humans at the end {#humans-at-the-end}

-   do speaker ID in the end
-   DO TO BATCHALIGN
-   allow people to reject files


## runhouse meeting {#runhouse-meeting}

-   &lt;&gt;Donny Greenberg: ADNE, nurses' health
-   implementation at Google: grantees of canniniminty


### Remaining questions {#remaining-questions}

-   but **we can't provide SSH**
-   function.save()
-   remote
    -   running through hashicorp vault?
    -   serializing ssh key remote?
    -   RUNHOUSE call into remote!
    -   _headscale_
-   take wave2vec and hubert and GSLM


## questions? {#questions}

-   ask about inter-turn pauses, where
    -   INV: something something something &lt;-
    -   PAR: WWW &lt;-
    -   INV: somethingsomething else &lt;-
    -   PAR: words words word
-   no bullets are given for PAR, so do we skip it? do we count the time for WWW all as an inter-turn pause between INV and PAR? etc.


## Per Turn {#per-turn}

-   **Turn** level analysis
-   Rename tier to


## Silence duration? {#silence-duration}

-   does it include inter-utterance pauses?
-   within-utterance pause
    -   fluency, mechanistic
-   between-utterance pause
    -   pause between utterances
-   also: between-speaker pause!
    -   leaves room for the speaker to take the floor
    -   BETWEEN speaker pauses: "I don't know what you are asking me", etc.: "breakdown!"

-   add features: STOPPA, TRESTLE, Wang

<https://coryshain.github.io/>


## featurize {#featurize}

-   saturnino
-   fausa


### Questions {#questions}

-   What features?
-   Where to put them?
-   TalkBankDB
-   How to encode the features?


### "How informative are your features" {#how-informative-are-your-features}

-   Start coming up with features (TRESTLE, perhaps)
-   Encode them into xarray
-   &lt;&gt; saturnino


## stuff {#stuff}

-   make Spanish names list
-   name, city, countries


## corpuses {#corpuses}

-   **SABSAE**: santa barbara english
-   **CABNC**: British english
-


## next {#next}

-   ignore any words that goes wrong in the pipeline
-   `~change: noun => n; verb => v, etc.~`
-   DET: ignore "DEF", or perhaps the entir featureless
-   unbulleted VAD exprimentents


## errors! {#errors}

{{< figure src="/ox-hugo/2022-12-23_20-22-46_screenshot.png" >}}

line 1492

\*PAR:	so ‡ anyway I tiptoe to the front door , open the front door and
	walk in . •1045194_1050644•
%mor:	co|so beg|beg adv|anyway pro:sub|I v|+n|tip+n|toe prep|to
	det:art|the n|front n|door cm|cm adj|open det:art|the n|front n|door
	coord|and n|walk adv|in .
%gra:	1|0|BEG 2|1|BEGP 3|5|JCT 4|5|SUBJ 5|0|ROOT 6|5|JCT 7|9|DET 8|9|MOD
	9|6|POBJ 10|5|LP 11|14|MOD 12|14|DET 13|14|MOD 14|5|OBJ 15|14|CONJ
	16|15|COORD 17|16|NJCT 18|5|PUNCT


## errors? {#errors}

-   words without features needs to be correctly handled (done in the middle of meeting)
-   04111 (me ma SOS)
-   nouns shouldn't mark if it is Com,Neut, should'nt mark if its Com
-   fix PASTP =&gt; PAST
-   and does past participles exist?


## more {#more}

-   Move shua to d(e)
-   Include instructions on how to recreate a broken Conda environment
-   Update the package to conda somehow


## move {#move}

{{< figure src="/ox-hugo/2022-12-03_00-17-14_screenshot.png" >}}


## next steps {#next-steps}

-   deal with \`n\`
-   +... fix
-   remove bullets


## results {#results}

-   ~ contraction
-   &amp; fused
-   - suffix
-   getting rid of punkt in mor
    -   , =&gt; cm
    -   . =&gt; no PUNKT, stays


## stuff {#stuff}

-   chocolaty (noadmin, <https://docs.chocolatey.org/en-us/choco/setup#non-administrative-install>)
-   miniconda
-   setx path "%path%;C:\tools\miniconda3\condabin"
-   curl env first, the install (Windows can't do it from a URL)


## readme {#readme}

-   ~~conda init zsh (close shell, open again)~~
-   .mp4
-   mfa model downloading
-   what's the difference between online docker install and manual install
-   NLTK Huggingface transformers tokenizers (versining)
-   /opt/homebrew/Caskroom/miniforge/base/envs/aligner/lib/python3.9/site-packages/montreal_forced_aligner/corpus/text_corpus.py;  getattr(self, k).update(error_dict[k])

AttributeError: 'list' object has no attribute 'update'
FileArgumentNotFoundError: ; line 139

-


## DBA {#dba}

-   See the data on the frequency of haphax legomina vs. COCA


## ESPNet {#espnet}

-   need to talk to Ji Yang


## Andrew's Features {#andrew-s-features}

-   Collapse two PAR tiers down
-   ~~Checkpoint per file~~
-   ~~One corpus prompt per run~~
-   ~~Handle empty tiers~~
-   ~~I/P selection crashes! contingency~~
-   ~~preview the LONGEST segment instead of the top one~~
-   ~~-i kill in the middle~~


## fixes {#fixes}

-   "my mom's cryin(g)" [&lt;] mm [l648] (also themmm after)
-   "made her a nice dress" [&lt;] mhm [l1086]
-   "when I was a kid I" &amp;=laughs [l1278]


## Others {#others}

-   chstring (for uh, mm-hmm)
-   retrace (asr&amp;fa folder)
-   lowcase (caps)
-   rep-join.cut (fixes/)

    {{< figure src="/ox-hugo/2022-08-02_12-55-55_screenshot.png" >}}

<!--listend-->

-   numbers
-   &lt;affirmative&gt;
-   'mo data!
    -   CallFriend/CallHome (ca-data)
    -   ISL?
    -   SBCSAE
    -   Aphasia + MICASE
    -   TBI data
-   Providing a Two-Pass Solution
-   Writing
    -   Big description of the pipeline
    -   Notion of the pipeline
    -   Better tokenization?
-   8/18

---

-   Initial segment repetition
-   Extracting studdering
-   Gramatically problematic


## mar {#mar}

-   mar has done a thing and its phoneme level
-   We did it, now automated
-   LEAP data


## next actions {#next-actions}

-   Aphasia (-apraxia?): classification
-   Child data (EllisWeismer)
-   Dementia


## a {#a}

-   `~Multiple @Begin/CHECK problem~`
-   `~Placement of @Options~`
-   `~Strange, missing period~`
-   `~Bracket comments should FOLLOW words instead of PRECEEDING them~`
-   `~%xwor: line~`

-   STICK TO DASHES WHEN DISTRIBUTING BATCHALIGN
-   end the utterance when it ends (incl. inter-utterance pauses)
-   "I" need to be capitalized
-   11005 (LT)

Align EllisWeismer

Also cool to align:

-   fluency IISRP/\*

-   <https://en.wikipedia.org/wiki/Speaker_diarisation>
-   <https://universaldependencies.org/>


## Alzheimer's Project {#alzheimer-s-project}

-   <https://dementia.talkbank.org/>
-   <https://luzs.gitlab.io/adresso-2021/>
-   Specifically: <https://dementia.talkbank.org/access/English/Pitt.html>

-   Review Kathleen Fraser: <https://drive.google.com/drive/u/1/folders/1lYTIzzXLXw3LlDG9ZQ7k4RayDiP6eLs1>
-   Here are the review papers: <https://drive.google.com/drive/u/1/folders/1pokU75aKt6vNdeSMpc-HfN9fkLvRyutt>
-   Read this first: <https://drive.google.com/drive/u/1/folders/0B3XZtiQwQW4XMnlFN0ZGUndUamM?resourcekey=0-AlOCZb4q9TyG4KpaMQpeoA>

-   Some PITT data have 3-4 recordings

****The best way to diagnosing alzhimers' is from language.****

Why this field is needed: to analyze a pre-post test metric.

Desired output: existence of dementia (a.k.a alzheimer's').

Other research to read:

-   Penn (julia parish something but they don't stare their data but they smile and things with Mark Libermann type of thing)
-   Learning more about speech text
-   <https://my.clevelandclinic.org/health/diagnostics/22327-differential-diagnosis>

python3 ~/mfa_data/[batchalign]({{< relref "KBhbatchalign.md" >}})-dist/batchalign.py ~/mfa_data/my_corpus ~/mfa_data/my_corpus_aligned

christan marr paper on MFA on child data
