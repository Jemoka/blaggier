+++
title = "Research Tips"
author = ["Houjun Liu"]
draft = false
+++

Mykel's Research Tips!

"we are not trying to sell our ideas, we are trying to sell understanding"


## Levels of Critique {#levels-of-critique}

-   high level: "is this problem important/can it scale?"
-   mid level: "do the experiments show what is claimed"
-   low level: typography, grammar, style

State contributions before and after.


## Good Presentations {#good-presentations}

-   not too stuffy nor casual
-   frequent use of graphics
-   you don't want bullets with more than 2 lines
-   clear, upfront objective of the paper
-   everything was understanding **during** presentation: timing presentations such that its digestible as drinking down


## Time Management {#time-management}

Randy Pausch's time management lecture.

-   optimize for fun
-   "why am I doing this?"
-   have "you can always change your plan, but only if you have one"

SEPARATE: email, to-do list, calendar


## Writing a Paper {#writing-a-paper}

Jennifer Widom: how to write a paper


## Packages to Use {#packages-to-use}


### Plots {#plots}

"using matlab to screenshot a plot is... an automatic F. If you want to have A quality work, you can use pgfplot. Or you can use a pgfplots backend."

```python
import tikzplotlib
```


### Tables {#tables}

No vertical linens

<http://people.inf.ethz.ch/markusp/teaching/guides/guide-tables.pdf>

\toprule

Possibly: PGFPlotsTable. TikZ.


### Algos {#algos}

algorithmicx


### Captions {#captions}

subcaptions


### Units {#units}

siunitx


### Code {#code}

minted, or---code executation---pythontex


### References {#references}

"cleveref": tell you what it is, and give you back with the "Fig. #N" informatino.


### Good Presentation {#good-presentation}

-   powerpoint tedx talk
-   give strong technical presentations by Markus Puschel


### General Tips {#general-tips}

-   separate the problem from the solution before presenting the solution
-   number slides! also include total number of slides
-   one slide per minute
-   one liners are best, two liners are ok, three + are bad

Transitions are hard: don't tap on a slide and go "woah"; pre-cache first sentence of each slide.

Overview **AFTER** the motivation.


## Reference Handling {#reference-handling}

-   biblatex: bibtex with postprocessing the .tex
-   sislstrings.bib: mykel's conference list for .bib
-   JabRef


## PhD Thesis {#phd-thesis}

<http://www.feron.org/Eric/PhD_characterization_2.htm>

-   "Cool Theorems and New Methods"
-   "Cool Methods and Predictions"
-   "Beautiful Demonstrations"
-   "Cool engineering ideas"


## "How to Write a Paper" {#how-to-write-a-paper}

<https://cs.stanford.edu/people/widom/paper-writing.html>

1.  what's the problem
2.  why is it interesting and important?
3.  why is it hard?
4.  why hasn't been solved before/what's wrong with previous solutions?
5.  what are the key components of my approach and results?

You want the intro to end near the end of the first page or near the end of the second page. **Always lead with the problem.**


## Mathematical Writing {#mathematical-writing}

"CS209 mathematical writing"

Don't start a sentence with a symbol.

Don't use "utilize".


## Authorship {#authorship}

-   talk about it early
-   universities have authorship inclusion deadline


## Complexity {#complexity}

-   complexity should be justified (why does simpler method's not work?)
-
