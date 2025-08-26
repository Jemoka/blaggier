+++
title = "Hierarchical Multi-Label Clsf. for Vaccine"
author = ["Houjun Liu"]
draft = false
+++

Misinformation can decline people's intent to vaccinate.


## Data {#data}

VaxConcerns Taxonomy: sorting misinformation into a taxonomy which has multiple, hierarchical labels

So, you can classify a label in a bunch of places.


## Approaches {#approaches}

Ask an LLM to do one of the following...


### One-Shot, Multi-Label {#one-shot-multi-label}

Ignore hierchy, just go do multi label system


### multi-pass, hierarchical label {#multi-pass-hierarchical-label}

try to predict groups at a time, each pass has a label group as input and needs to produce whether the label is given + sublabels


### one pass, hierarchical label {#one-pass-hierarchical-label}

Only predict labels on the lowest level, then extract higher level information


### binary search {#binary-search}

predict highest level, then search down


## "Almost Few Shot" {#almost-few-shot}

Trying to force a specific output format.
