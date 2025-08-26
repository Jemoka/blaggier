+++
title = "AIBridge Packages and Tools"
author = ["Houjun Liu"]
draft = false
+++

****This is usually not needed if you are using [Google Colab](https://colab.research.google.com/).**** If you are following the instructions provided during our lecture series, please disregard this page.

However, students have expressed interest in working with their own system's copy of Jupyter or local installation. We therefore provide a set of very tenuous instructions for installing the tools used in our session using _vanilla C-Python_ (i.e. not anaconda/conda/miniconda.)


## Python {#python}

Our tools target Python 3.8+. Use your system's package manager to install Python at least version 3.8, or use [Python Foundation's](https://www.python.org/downloads/) universal installers.


## Packages {#packages}

Python sometimes ships `pip`, its packaging utility separately. Refer to your own distribution's installation instructions if none of `pip` or `pip3` or `python -m pip` or `python -m pip`.

Once your copy of pip has been identified, let's move on to...


## Installing Packages {#installing-packages}

Here are the packages we will need for our sessions:

-   `scikit-learn`
-   `pandas`
-   `numpy`

Along with its respective dependencies. Here's a one-liner:

```bash
python3 -m pip install scikit-learn pandas numpy
```

Good luck!