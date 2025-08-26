+++
title = "Projects Index"
author = ["Houjun Liu"]
tags = ["index"]
draft = false
+++

[Projects Index]({{< relref "KBhprojects.md" >}}) is a [index]({{< relref "KBhzettlekasten_index.md" >}}) that contains a list of almost all projects for which I have ever worked on. Major categories are highlighted from chapter titles.


## Research Projects {#research-projects}

I end up doing a lot of research these days, and so have isolated that to a different, academic homepage.

**For a list of my recent research, please head to my [academic homepage]({{< relref "KBhresearch_index.md" >}}). For concision they are NOT repeated here.**


## Large-Scale Endeavors {#large-scale-endeavors}


### Condution {#condution}

An open-source task management app. [Website](https://www.condution.com/).

****Motivation****: I got really tired with most other to-do apps after swapping them out over and over again, until I got fed up and built one with some friends.

-   ****Role****: Co-Founder, Lead Developer.
-   ****Technologies****: React, Ionic, Firebase, Typescript, Swift, PostgreSQL
-   ****Key facts****: 10,000+ users, 8-person team, [featured](https://www.almanacnews.com/print/story/2021/02/26/community-briefs) in the Bay Area almanac, praised by Asana’s head of developer relations for “open-source advocacy”


### Simon {#simon}

Augmenting the functionality of large-language-models with Elastic. [Repository](https://github.com/shabang-systems/simon).

****Motivation****: LLMs have become more and more prominent, and frameworks like ReAct is finally mature enough to produce coherent, well reasoned responses.

-   ****Role****: Author
-   ****Technologies****: Huggingface, GPT-3.5, ElasticSearch


### CMU [batchalign]({{< relref "KBhbatchalign.md" >}}) {#cmu-batchalign--kbhbatchalign-dot-md}

A pipeline for the automated preparation of annotated CHAT transcripts from raw audio. [Repository](https://github.com/talkbank/batchalign).

****Motivation****: my work over the summer.

-   ****Role****: Author
-   ****Technologies****: Torch, Huggingface, NLTK, CLAN, computational linguistics
-   ****Key facts****: work developed with and maintained under Prof. Brian MacWhinney at CMU's psycolinguistics department.


### SSI Polar Rover {#ssi-polar-rover}

We are sending a Rover to Antarctica! [Controller Repository](https://github.com/stanford-ssi/powertron), [Guidance and Nav Repository](https://github.com/stanford-ssi/PX4-Autopilot).

****Motivation****: rovers are cool, and we can do lots of search and planning with it.

-   ****Role****: Team Lead
-   ****Technologies****: PX4, Search and Planning (Classic AI), Kalman Filters, Embedded Systems, Teensy Microcontroller
-   ****Key facts****: work sponsored by Stanford research and are on track to be tested in Antarctica in Summer 2025


### AIBridge {#aibridge}

A bootcamp for non-CS students in data science. [Website]({{< relref "KBhaibridge_course_website.md" >}})

****Motivation****:

-   ****Role****: Co-Founder, Lecturer
-   ****Technologies****: Python, ScyPy, Scikit-learn, Pandas
-   ****Key facts****: worked with Prof. Xin Liu at UC Davis to develop an introductary one-week bootcamp in ML. We piloted the program this summer at Davis to an in-person group of 20 PhD students in food science sponsored by [AIFS]({{< relref "KBhaifs.md" >}}).


## Full-Stack Projects {#full-stack-projects}


### tractotato {#tractotato}

CommonLisp macroset for time tracking. [Repo](https://github.com/Jemoka/tractotato).

****Motivation****: I wanted to learn CommonLisp macros syntax after reading the [Land of Lisp](http://landoflisp.com/) book.

-   ****Role****: author
-   ****Technologies****: CommonLisp


### Scratchathon Portal {#scratchathon-portal}

Portal to submit projects for a scratch hackathon I hosted. [Repo](https://github.com/Jemoka/ScratchathonPortal).

****Motivation****: my friends [McGuy](https://www.youtube.com/channel/UC2MtlTiLxWNQAjHyFZt95Vw) and [fuelvin](https://www.youtube.com/watch?v=1Fll6uaz5Kk), both content creators on Scratch on YouTube, put together a Scratch hackathon summer of 2020. This is the submission portal.

-   ****Role****: author
-   ****Technologies****: React, Vercel, Firebase


### syzygy {#syzygy}

Library rethinking to-do list dating to be more flexible and powerful. [Repo](https://github.com/jklsnt/syzygy).

****Motivation****: a friend and I wanted to innovate beyond the scope of Condution to see how we can abstract away a to-do list system to its bare minimum.

-   ****Role****: co-founder, co-author
-   ****Technologies****: Rust


### positron {#positron}

Library for building lightweight native apps using web tech. [Repo](https://github.com/jklsnt/positron).

****Motivation****: I wanted to re-make electron to be more lightweight using Suckless' Surf browser concept.

-   ****Role****: author
-   ****Technologies****: C++, GTK


### MODAP {#modap}

A R&amp;D team for fireline safety during emergency fires. [Repository](https://github.com/MODAP/stack).

****Motivation****: a friend approached me with an opportunity to help our local community, especially with the increased influx of fires.

-   ****Role****: Team Lead
-   ****Technologies****: Rust, Torch, ARM, electronics (i2C, UART, messaging protocols, etc.)
-   ****Key facts****: coordinated 5 engineers in developing new technology, supported by Dr. Robert G. Gann, Deputy Director, Center of Excellence for Advanced Technology Aerial Firefighting at the state of Colorado as well as Captain Mason of CalFire


## OS/Driver Development {#os-driver-development}


### Broadcom Wifi/Bluetooth 4377 Chip Linux Driver {#broadcom-wifi-bluetooth-4377-chip-linux-driver}

A driver patchset to support cutting-edge Broadcom 4377 Wifi/Bluetooth chips. [Repo](https://github.com/Jemoka/linux-mbp-wifi).

****Motivation****: I needed to be able to use Wifi on my laptop while running Arch Linux.

-   ****Role****: author
-   ****Technologies****: C, (small amounts of) Assembly
-   ****Key facts****: integrated into the [t2linux](https://wiki.t2linux.org/) pipeline used to make WiFi possible on Linux for most MacBooks released after 2018


## Distributed Algorithms and Parallel Computing {#distributed-algorithms-and-parallel-computing}


### coveather {#coveather}

An encrypted, anonymized system for protected health information verification. [Preprint](https://arxiv.org/abs/2205.02753), [Repo](https://github.com/Jemoka/coveather), and [internal note]({{< relref "KBhcoveather.md" >}}).

****Motivation****: I wanted to be able to make vaccine passports more feasible because the current COVID testing/vaccine verification scheme is really bad.

-   ****Role****: author
-   ****Technologies****: Clojure, `core.async` concurrency, Monte-Carlo simulations, blockchain, PGP
-   ****Key facts****: project won first place at the California STEM Fair, and got special recognition from the Yale Science and Engineering assoc. Total award $3000.


### multischedule {#multischedule}

A multiple-asynchronous scheduling and delegation algorithm. [Repo](https://github.com/Jemoka/multischedule).

****Motivation****: (didn't even come close to getting there) I wanted to create a way to solve or simplify debugging loop overrun problems in robotics codebases.

-   ****Role****: author
-   ****Technologies****: Clojure, `core.async` concurrency


### rotifer {#rotifer}

A work-in-progress distributed algorithm for [taproot](#taproot). [Repo](https://github.com/jklsnt/rotifer).

****Motivation****: I wanted to make taproot even more distributed if possible.

-   ****Role****: author
-   ****Technologies****: Clojure, XML, UDP, ICE


### simian {#simian}

Exploring OT/CRDT and collaborative text editing for taproot. [Repo](https://github.com/jklsnt/simian).

****Motivation****: I wanted to learn about how apps like Google Docs work, and explore Operational Transformation/CRDT, in hopes of putting it into [taproot](#taproot).

-   ****Role****: author
-   ****Technologies****: Clojure, OT, CRDT


### aron {#aron}

A distributed multi-dimensional optimization tool. [Repo](https://github.com/Jemoka/aron).

****Motivation****: [Nueva]({{< relref "KBhnueva_courses_index.md" >}})'s course scheduling was quite a mess, and I wanted to help. It is a very complex problem and this project is in the freezer at the moment.

-   ****Role****: author
-   ****Technologies****: CommonLisp


### mitte {#mitte}

Easy UDP sockets. [Repo](https://github.com/jklsnt/mitte), [Docs](https://jklsnt.github.io/mitte/mitte/).

****Motivation****: a friend and I wanted to explore UDP.

-   ****Role****: co-author
-   ****Technologies****: Rust, UDP, ICE (connection)


## Cryptography and security {#cryptography-and-security}

See also: [coveather](#coveather).


### jrainbow {#jrainbow}

An implementation of a MD5 rainbow table. [Repo](https://github.com/Jemoka/rainbow), [Crate](https://crates.io/crates/jrainbow).

****Motivation****: I wanted to understand how Rainbow Tables worked.

-   ****Role****: author
-   ****Technologies****: Rust, MD5


## Note-taking Systems and \\(\LaTeX\\) improvements {#note-taking-systems-and-latex-improvements}


### taproot {#taproot}

A shared [zettlekasten]({{< relref "KBhzettlekasten.md" >}}) of notes and learning resources put together by some friends and I. there has been a few iterations. [Current Repo](https://github.com/jklsnt/taproot3), [Current Site](https://taproot3.jklsnt.com/), [Legacy Site](https://taproot2.shabang.cf/), [Even More Legacy Site](https://taproot.shabang.cf/).

****Motivation****: I started writing nice \\(\LaTeX\\) PDFs of my homework, and some friends wanted to have access to it. Later when I mentioned it, another friend had a similar need; so we asked many people to pool our notes and work together to share.

-   ****Role****: co-founder, co-lead, developer
-   ****Technologies****: Next.JS, XeLaTeX, GNU Make, Firn, Hugo, Emacs Org, Org-Publish, Markdown


### blag {#blag}

The [zettlekasten]({{< relref "KBhzettlekasten.md" >}}) you are currently in! My currently maintained personal knowledgebase. [Repo](https://github.com/jemoka/blag), [Site](https://www.jemoka.com/).

****Motivation****: I wanted to experiment with more advanced note-taking techniques after developing taproot, and it ended up superseeding the note-taking abilities of taproot.

-   ****Role****: author
-   ****Technologies****: Next.js, Emacs Org, Hugo


### gdoc.el {#gdoc-dot-el}

A utility to enable GNU Emacs to edit Google Doc documents based on the `gdrive` utility. [Repo](https://github.com/Jemoka/gdoc.el).

****Motivation****: I wanted to edit Google Docs in Emacs!

-   ****Role****: author
-   ****Technologies****: GNU Emacs, elisp


### interesting {#interesting}

Things that my friends and I find interesting, chucked on the web and builds itself. [Repo](https://github.com/Jemoka/interesting), [Site](https://interesting-blue.vercel.app/). No longer maintained.

****Motivation****: many text channels were too clogged with stuff my friend group found interesting, so I wanted to take initiative to collect them.

-   ****Role****: co-founder, author
-   ****Technologies****: Next.js, Vercel, remark, CommonMark Markdown


## Public Configurations {#public-configurations}


### borg {#borg}

Automatically configure terminals. [Repo](https://github.com/Jemoka/Borg).

****Motivation****: I needed a way to copy my system terminal config onto a system quickly.

-   ****Role****: author
-   ****Technologies****: Bash, Zsh, OhMyZsh


### .config {#dot-config}

A group of sane configuration files. [Repo](https://github.com/Jemoka/.config).

****Motivation****: some Redditors asked for my Config, and I thought I'd share it to benefit the community; also for personal backup.

-   ****Role****: author, maintainer
-   ****Technologies****: Unix administration, Perl, Ruby, LISP


### .emacs.d {#dot-emacs-dot-d}

Simple, powerful, and semantic GNU Emacs configuration for personal use. [Repo](https://github.com/Jemoka/.emacs.d).

****Motivation****: I wanted to track my progress in developing a working Emacs config.

-   ****Role****: author, maintainer
-   ****Technologies****: GNU Emacs, elisp
