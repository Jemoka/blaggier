+++
title = "software dev starter pack"
author = ["Houjun Liu"]
draft = false
+++

Here's a bit of a guide to start in software development. It is mostly links to other resources that would help.


## Introductory Remarks {#introductory-remarks}

Nobody "learns" software development. Even in job interviews, people expect you to have "worked" in software development. The industry, as a whole, drives via "learn-by-doing", so its best to start thinking about _what you want to achieve_ with software dev in terms of projects, then look specifically for resources to help you achieve those. Once you Google enough, et viola! You will have the skills needed to tackle another project.


## Common Tooling {#common-tooling}

There are some common tooling that is standard across all of software development.


### Google {#google}

Google it! 99.98% of programming skills center around google-fu. Learn to Google unknown terms and get a better sense of the picture. The same rule applies through this guide as well.


### StackExchange {#stackexchange}

A group of very mean people put together a very helpful family of websites which are essentially vicious forum boards. They are the StackExchange family of boards.

The most famous of which, and the one focused on programming, is called [StackOverflow](https://stackoverflow.com/). StackOverflow ("SO") is an _extremely_ helpful resource for browsing any question you may have. For instance, if your code crashes with a [stack trace]({{< relref "KBhstack_trace.md" >}}), Googling the error and set `site:stackoverflow.com` will get you pretty far.

If you ask a question, though, [be prepared to get yelled at](https://www.reddit.com/r/learnprogramming/comments/7w5bm4/why_on_people_on_stack_overflow_so_rude/) though, the likely reason is that your question is already answered.


### macOS {#macos}

For the quick-start type of hardware fitting for this guide: [get a macBook](https://www.apple.com/macbook-air/). Even the cheapest one.

Development on Windows is like cooking on campfire. Doable, useful for specific things, but not great overall. If you have a PC, I would (and recommend! its great for advanced users especially) to put [Debian/Ubuntu/some easy to use Linux](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview) on it. Windows is just terrible.

I should add that Microsoft started doing Windows Subsystem for Linux: <https://docs.microsoft.com/en-us/windows/wsl/install>, which apparently have been pretty good. So worth taking a shot if you are stuck on Windows.


### \*nix Terminal {#nix-terminal}

BSD/UNIX terminal is a tool that essentially skips the fancy user interface (UI) which your operating system draws and directly runs things "organically." If you see something in a guide that says like:

"please execute"

```bash
python3 test.py
```

or perhaps

```bash
wget https://wandb.ai/jemoka >> test
```

they are probably asking you to type it ("execute it") into the Terminal and hit enter.

[Read this guide](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview) put together by the Ubuntu people, it's very good. To open the terminal on your macOS device, open an app called `Terminal.app`. On Ubuntu, I believe its also an app called `terminal`.


### IDE {#ide}

An "IDE" is an [Integrated Development Environment](https://en.wikipedia.org/wiki/Integrated_development_environment). It is where code is written. Fortunately, this is an easy one: [use VSCode](https://code.visualstudio.com/). There is literally no better tool out there for beginners and advanced users; no wonder it has 70% market share.

> Sidenote: But Jack? What do you use? I use something called [emacs](https://www.gnu.org/software/emacs/) for very specific reasons. Please don't unless you really want misery and to [learn a whole language](https://www.gnu.org/software/emacs/manual/html_node/eintr/) to configure it.


### Computer Language Architecture {#computer-language-architecture}

This is how an idea turns into "stuff" on your screen.

Human programming languages ("Python"), are a very readable sort of code. No computers can actually read it. Usually, code you write goes through a three-step process before its able to be ran.

First, the language you write gets converted by a "compiler" or "interpreter", specialized pieces of code that takes human programming languages into a more machine-readable form of code named "assembly" or "byte code" respectively, called the "intermediate".

For now, think of the difference between compilers and interpreters as translating code either all-at-once (compilers) or line-by-line (interpreters). Because the former has a grander view of the whole, languages that use a compiler ("compiled languages") are faster. Although, many programmers find languages that use in interpreter ("interpreted language") easier because they can spot problems line by line.

But wait! There's more. Assembly and byte-code (what compilers and interpreters generate) are not actually runnable by a computer. Yet another piece of software called a "runtime" takes the reasonably-machine-readable code and actually performs the required operations.

Some runtimes for languages like C++ uses the raw x86 CPU, which is the stereotypical "binary" zeros-and-ones. Some other languages, say Java, uses horribly complex runtimes that amounts to a whole virtual machine.

Here's a bit of a table.

| Language   | C/I | Compiler/Interpreter | Intermediate    | Runtime      |
|------------|-----|----------------------|-----------------|--------------|
| Python     | I   | python               | python bytecode | python       |
| Java       | C   | javac                | java object     | java VM      |
| JavaScript | I   | V8 (literally)       | js bytecode     | web browser! |
| C/C++      | C   | gcc/clang            | x86 asm         | x86 cpu      |

Wonder what the runtimes for languages like Java are built in? C/C++. Eventually it all becomes x86 cpu instructions but its like a layer cake. This is why Python and friends are called a "higher level language".


### git {#git}

Git is where all the code is!

Git is a decentralized "version-control" system. It is basically a timestamp-backup system of code with messages and branching.

GitHub is a website where people like to back up their code. [Here's my profile on GitHub.](https://github.com/Jemoka/)

Managing Git is pretty... Involved. It, for instance, assumes familiarity with the Terminal as described above. I suggest learning it, though. Here are some good resources:

-   Morgan's [very very good](https://github.com/morgansierrasnyder/git-going) git tutorial... On GitHub!
-   And [this article](https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/) on some commands you should know!


## Industry-Specific Skills {#industry-specific-skills}


### What you start with doesn't matter, but start with something {#what-you-start-with-doesn-t-matter-but-start-with-something}

Its easiest to learn programming if you have a project in mind. So, find a project in mind---what it is, though, _doesn't matter._ The concepts across programming are highly transferable, but the actual skill is easiest to learn if you are learning w.r.t. a project.


### Data science, prototyping, and machine learning {#data-science-prototyping-and-machine-learning}

Python would be your friend for all things of programming where the act of programming is a means to an end. That is: if you are writing code to _do something_ that's not inherently software (data science, machine learning, heck, also manipulating quantum qubits), Python is your friend.

Its a language that's designed to be easy to write: is a very do-as-I-say language that sacrifices efficiency and elegance for getting crap done. This is how I started programming. [This is the book I started with.](https://www.amazon.com/Python-Programming-Absolute-Beginner-3rd/dp/1435455002) It teaches Python through programming a series of small projects that are mostly Terminal games.

To learn data science, [Nueva's very own data science course](https://jennselby.github.io/MachineLearningCourseNotes/) give very good conceptual framework. A typical first project is to recognize pictures of handwritten digits, [for which there is a good guide](https://towardsdatascience.com/handwritten-digit-mnist-pytorch-977b5338e627). I also started something called [AIBridge]({{< relref "KBhaibridge_course_website.md" >}}) with [AIFS]({{< relref "KBhaifs.md" >}}), so if we ever publish the recordings I will put them here.

Google also: pip, ipython, Jupyter.


### Backend engineering {#backend-engineering}

Backend engineering is the science of dealing with databases and writing API (application programming interfaces). I don't suggest starting with this, but if you are particularly interested in databases, you could!

To master backend engineering, first learn a database manipulation language. For 99.98% of the industry, this means [mysql](https://www.mysqltutorial.org/getting-started-with-mysql/). The link directs to a pretty good guide.

Furthermore, the language with which backend is written is Java. I hate to say it, but despite Java's terribleness (don't worry about it ;)) its very dependable. [Here's a book](https://nostarch.com/learnjava) on Java. In general, I really like all of the books from no starch press.


### Frontend and Web engineering {#frontend-and-web-engineering}

Do you like making stuff move? Do you like drawing buttons? Front end maybe for you. The most basic type of front-end engineering is making websites.

Start by making a "vanilla website": HTML (what's on the page), CSS (what colours and sizes), JavaScript (how it moves) is the standard trio of languages to start. freeCodeCamp (a great Medium blog, check their stuff out) has a [good guide](https://www.freecodecamp.org/news/html-css-and-javascript-explained-for-beginners/) on the matter.

However, as you progress in your journey, you will find these tools woefully inadequate. Hence, most people writing web front end move on to something called a "JavaScript Framework", a tool to generate a "vanilla" website from some more easily manipulable JS (changing the text on the page moves from a four line operation (indexing, selecting, grabbing, changing) to a one-liner (state.text=new text)).

A popular JS framework is [ReactJS](https://reactjs.org/tutorial/tutorial.html). Check them out.


### Fullstack Engineering {#fullstack-engineering}

Frontend + Backend.


### Game development {#game-development}

Game development is honestly one of the most horribly complicated and richly science-y part of CS. I am not super experience in game development but learning C++ and mastering [Unity](https://docs.unity3d.com/560/Documentation/Manual/UnityBasics.html), the game engine. Oh, right, game dev is the _only_, and I repeat _only_ (with invisible footnotes and qualifications) reason why you should be writing code on Windows.

A friend [is good at game dev](https://github.com/Radbuglet/), I can make an intro if needed.


## Good Luck! {#good-luck}

Remember: Google-fu and project-based curiosity is your friend. Let me know if you have questions.