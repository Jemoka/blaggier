+++
title = "Align with New Vocab"
author = ["Houjun Liu"]
draft = false
+++

Begin with a new installation of MFA, and head to the directory. First run validate with the original dictionary.

```shell
mfa validate ~/Downloads/tb/my_corpus english_us_arpa english_us_arpa
```

We see that there is in deed an section of corpus that is out-of-vocab.

```text
INFO -     11 OOV word types
INFO -     18 total OOV tokens
```

Therefore, we will generate a new dictionary based on the existing dictionary of `english_us_arpa`.

First download the english_us_arpa model

```shell
mfa model download g2p english_us_arpa
```

Then, perform the actual dictionary generation:

```shell
mfa g2p english_us_arpa ~/Downloads/tb/my_corpus  ~/Downloads/tb/my_corpus/new_dict.txt
```

There is a chance this command fails with

```text
There was an issue importing Pynini, please ensure that it is installed. If you are on Windows, please use the Windows Subsystem for Linux to use g2p functionality.
```

If so, install pynini

```shell
conda add pynini
```

Finally, run the `mfa g2p` command above to generate pronunciations.

You should end up with a file named `new_dict.txt`, which should include missing words.

Finally, perform alignment with this new dictionary.

```shell
mfa align ~/Downloads/tb/my_corpus ~/Downloads/tb/my_corpus/new_dict.txt english_us_arpa ~/Downloads/tb/my_corpus_output
```

Notice here the second argument of `mfa align` is no longer `english_us_arpa`, our base dictionary. Instead, it is our custom dictionary.