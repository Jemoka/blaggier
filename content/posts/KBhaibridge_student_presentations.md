+++
title = "AIBridge Student Presentations"
author = ["Houjun Liu"]
draft = false
+++

## Rewa Rai {#rewa-rai}

Nitin Lab, Dept. of Food Sci + Tech - Davis


### Wine {#wine}


#### Classification Task {#classification-task}

Whole data:

-   Decision Tree: 98.46%
-   Random Forest: 99.84%
-   Gaussian NB: 97.08%


#### Regression Task {#regression-task}

Feature selection with 2 best features actually improved.


### Talkthrough {#talkthrough}

Detecting berry infection by leaf classification. Use FTIR spectroscopy as a means of infection classification.


## Tana Hernandez {#tana-hernandez}

PHD Student, Nitin Lab, Dept. of Food Sci + Tech - Davis


### Talkthrough {#talkthrough}

Given input for reaction, predict resulting gell strength from protein+carbo+lactic acid.

Goal to figure out what features are o predict gell formation. Use feature extraction to reduce the need of doing.

Wet lab task: use high-throughput 96 hole plates to measuring kinetics of absorborance and kinetics. In a single hour, 96 data points can be acquired.

Then, droplet elements are added to the plates.

Model: take feature inputs which was selected, classification on gell formation and regression for time for gell.


## Jimmy Nguyen {#jimmy-nguyen}

PHD Student, Nitin Lab, Dept. of Food Sci + Tech - Davis


### Talk through {#talk-through}

Need: creating plant-based products which just feels and tastes like actual meet based food.

Task: given molecular information, classify taste based on like-product and unlike


## Luyao Ma {#luyao-ma}

Postdoc Researcher, Nitin Lab, Dept. of Food Sci + Tech - Davis


### Talk thought {#talk-thought}

Problem: lots of antimicrobian resistance in food: on track for 10 million deaths due to antimicrobial resistance. This is caused by antibiotics given to animals, which then is given indirectly to humans. Humans gut bactorials became more more resistant to antibiotics due to antimicrobial bacterial deveolping in animal guts.

Current surveilance systems for antibiotic bacteria: require centralized lab for analysis, data collection is slow, and data integration is very slow (2ish years to publish final results), protocol also changes.

Goal: rapid in field automatic detection scheme

Expose wells of bacterial to detect color intensity


## ? {#d1457b}

PHD Student, USDA


### Wine {#wine}

Naive bayes (6 RFE features); XE Boost Random Forest + Search with 9 features


### Talkthrough {#talkthrough}

-   Dietary data
-   Random calls

Interested in gut miocrobiome influences. Goal: which factors to predict CAZyme dyvirsetiy?

Random forest regression
Need for prediction for which features: use Shapley Addadtive for result intepretation.


## Yue {#yue}


### Wine {#wine}

OH WOWO

Reg:

99.98 train, 59.788 test.

-   Balanced dataset
-   Sequential feature selection
-   PCA -&gt; 3 features
-   Random Forest

Something else: `ExhaustiveFeatureSelector`

Clsf:

still 4 features.


### Talkthrough {#talkthrough}

Deep learning, CV applications.

Nutrition product validation so far is entirely manual; current work in bias are mostly political, so finding a ground truth is difficult.

Supervised is probability difficult; getting the data and cluster.


## Sriya Sunil {#sriya-sunil}

PhD Food Science, Cornell


### Wine {#wine}

Decision tree classifier; resulted in 7 features.

99.97% train, 97.08% test.

Support Vector Regression; resulted in 7 features as well.

39.25% train, 32.79% test.


### Talkthrough {#talkthrough}

Microbial growth on baby spinach. Features: initial counts, prevalence of bacteria, growth of bacteria.

Output regression to time to spoilage