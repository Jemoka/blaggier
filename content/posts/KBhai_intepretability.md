+++
title = "AI Intepretability"
author = ["Houjun Liu"]
draft = false
+++

The BIG NEW THING in AI research. Because normal results for seq2sseq is already doing very well. Slightly more realistic models of language acquisition.

"Linguistics is not just about human languages": humans, animals, and machines.

BIG AGI What: question is the difference between a dumb human and GPT?


## Speech is Based for Interoperability {#speech-is-based-for-interoperability}

-   continuous data (as opposed to text)
-   much less complex with vision: vision is more complex
-   speech is a nice controllable system (????)


## Models of Language Acquisition {#models-of-language-acquisition}

<https://arxiv.org/pdf/2309.07861.pdf>

{{< figure src="/ox-hugo/2023-10-26_11-13-01_screenshot.png" >}}

Approximation of spoken language: GAN generates ElectroMagnetic Articulagraphy; then, a pretrained model turns that into a spoken language.

Then, a discriminator then perform discrimination; and a decoder decodes the speech and feeds it back into the gan with a reconstruction loss.

You can take a latent representation and stretch it real hard.

You can also feed the audio into \\(Q\\), and decode an latent encoding, and then performs changes.

Per layer, you can also add the activations of all filters outputs together to get a pattern of activation (frequency vs. number of samples) to figure out what is being encoded. If you see high activations at vowels, it'd be values, etc.

-   earlier layers correspond to brain stem
-   layer layers correspond to acoustic envelope


## questions {#questions}

1.  whale still has no semantics though?
2.  reconstruction loss between brain and intermediate layers
