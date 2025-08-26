+++
title = "Starting With Why: The Knowledgebase"
author = ["Houjun Liu"]
draft = false
+++

Everyone and their dog has a blog at this point. Why not me? You see, I don't really like the idea of blogging, but I _do_ enjoy taking notes. I take a crap tonnes of notes, and sometimes people want to see a copy of them.

In order to facilitate this, some friends and I created [taproot](https://taproot3.sanity.gq/), a collective note-taking effort which also automatically compiled pretty cool previews and an internet site. I still am one of the primary maintainers of taproot.

While working on the project, however, we noticed that the loop-based architecture (instead of being based on events/triggers), lack of duplicity, and requirement of a central build server made it difficult.

In this vein, [quantumish](https://quantumish.github.io/) (also with his own lovely set of notes, tap on the link!) and I were discussing if the essentials of taproot can be built into a static site generator. Hence, this is an experiment (to hopefully be merged with the taproot group) to facilitate this.