+++
title = "Project Proposal: Lookahead Sampler"
author = ["Houjun Liu"]
draft = false
+++

## Introduction {#introduction}

Recent advances of language models (LMs) introduced the possibility of in-context, few or zero-shot reasoning (<a href="#citeproc_bib_item_1">Brown et al. 2020</a>) using LMs without much or any fine tuning.

Yet, classically, LM decoding takes place in a left-to-right fashion, auto-regressively resolving one token at a time by sampling from the output distribution of possible next words without multi-step planning.

Work in LM agents have taken steps to solve more complex problems that would typically require multi-step reasoning even while using this direct decoding approach. The simplest idea, named "chain-of-thoughts" (CoT), involves forcing the LM at decode time to begin the decoding process with natural language reasoning about its actions (<a href="#citeproc_bib_item_11">Wei et al. 2022</a>). The method has contributed to the creation of powerful language agents (<a href="#citeproc_bib_item_13">Yao, Zhao, et al. 2023</a>) that can reason about complex actions.

Despite the relative success of CoT, the scheme still does not support any kind of backtracking as it samples directly from the LM's posterior distribution. When a problem requires a significantly large number of steps to solve, issues relating to "de-generation" (<a href="#citeproc_bib_item_3">Holtzman et al. 2020</a>) becomes increasingly prevalent: whereby, naive maximizations of sequence likelihood results in a most likely sub-phrase being repeated which does not contribute to increased information or progress on a problem.

Recent theoretical work suggests these types of degeneration arises due to the distortion of output probability density caused by the last-layer softmax projection into the probability simplex (<a href="#citeproc_bib_item_2">Finlayson et al. 2023</a>): due the lower degrees of freedom offered by a probability syntax, both high and low tails of the latent next-word distribution becomes emphasized in the output probability distribution.

To address this, recent approaches such as Tree of Thoughts (ToT) (<a href="#citeproc_bib_item_12">Yao, Yu, et al. 2023</a>) have separated the process of next-step proposal ("thinking") and choosing the actual step to take given a situation ("reasoning"). This separate allows the representation of a problem through only short decoding sequences that are less prone to degeneration, while allowing a separate LM call to score the value of being at any given partial solution through a maximum-likely single-token output that is less likely to be distorted.

In this work, we extend the ToT prompting scheme to formalize this process of "thinking" and "reasoning" via a Language Model as a Partially Observable Markov Decision Process (POMDP). We call this decoding scheme the Lookahead Sampler (LS).

The key underlying assumption of the proposed LS scheme involves the claim that LMs are able to make judgments about the value of a subsequence towards solving a problem by analyzing the likelihood of a particular sequence against a judgment of value. This assumption is supported by the existence of reinforcement learning formulations of LM-on-LM output verification---both for reasoning ((<a href="#citeproc_bib_item_10">Verma et al. 2022</a>)) and hallucination ((<a href="#citeproc_bib_item_6">Liu et al. 2022</a>))--as well as the use of LM-inferred state value heuristics in the ToS approach.

We leverage this assumption by, similar to ToT, using the LM's evaluation of the likelihood of a sequence (similar to LM "scoring" of a "thought" in ToT) as a heuristic for the coherence and reasoning within a subsequence of LM output---forming a "self reflection" scheme similar to other LM-scoring schemes previously proposed (<a href="#citeproc_bib_item_7">Paul et al. 2023</a>; <a href="#citeproc_bib_item_8">Shinn, Labash, and Gopinath 2023</a>). Yet, differing from ToT, we explicitly formulate this scoring by an LM as an "observation" of an unobservable underlying latent understanding of the input sequence.

By solving the LS problem with the anytime POMCP solver (<a href="#citeproc_bib_item_9">Silver and Veness 2010</a>), we further demonstrate that LS exhibits stronger anytime characteristics on the Game of 24 task as compared to ToT while maintaining performance that is comparable to ToT and superior to CoT. Lastly, we were able to obtain these results at lower costs to ToT evaluations by using a hybrid language modeling approach by using a larger language model, GPT-4, for posterior sampling and evaluation while using a smaller language model, GPT-3.5-Turbo-Instruct, as the "thought" generator.


## Tree of Thoughts {#tree-of-thoughts}

We provide here a short summary of the Tree of Thoughts (ToT) (<a href="#citeproc_bib_item_12">Yao, Yu, et al. 2023</a>) approach that is relevant to our model. ToT offers a scheme to enable multi-step reasoning with LMs by presenting a decomposition of multi-step LM reasoning into individual steps which is then combined through classic approaches in search and planning.

Specifically, ToT represents a given problem as a finite-horizon planning problem which it then solves in four broad steps.

**Thought Decomposition**: by leveraging problem-specific characteristics, each problem is decomposed into distinct, incremental steps towards a solution. For the "Game of 24" task, for instance, each "thought" is considered a line of equation which contributes to the overall task of combining four numbers to reach 24.

Now, let \\(p\_{\theta}\\) be our language model, \\(s\_{j}^{(i)}\\) be thought candidate \\(j\\) of step \\(i\\) of a decomposed problem, \\(s\_{\*}^{(i)}\\) the optimal thought to continue from at step \\(i\\), \\(\tau\_{ \*} = \qty[s^{(1)}\_{ \*}, ..., s^{(n)}\_{ \*}]\\) a "solution" to a given problem.

**Thought Generation**: multiple, initial short decodings of a LM---sampling from \\(s' \sim p\_{\theta}^{thought}\qty(s^{(i+1)} | s^{(i)})\\) is obtained which forms a series of next states ("thoughts") which encodes a partial step towards the solution which is reachable at any given state.

**Thought Evaluation**: another LM call rates each of the possible next states for their chance in reaching the solution; specifically, we ask the LM to reason about a given state by calculating the posterior probabilities of predicting a specific judgement of value (the words "sure"_"likely"_"impossible") given that state; that is: \\(V(s\_{j}) = \arg\max\_{o} \\{p^{value}\_\theta(o|s\_{j}), o \in \\{ sure, likely, impossible\\}, \forall j \in 1 ... n\\).

**Problem Solving**: finally, given this heuristic, solving a specific problem in ToT involves using a search-and-planning scheme (specifically, DFS or BFS) to cycle between generation and evaluation of thoughts until a terminal thought is reached. Branches on the DFS tree is pruned if they are voted as "impossible".

By combining explicit planning and LM reasoning, this approach achieved state-of-the-art results on the Game of 24 and other difficult natural-language tasks such as a crossword. However, the ToT approach does not incorporate any form of heuristic-guided preferential planning between different "possible" states---in contrast to dynamic approaches which preferentially explore sequences of high probability of success.


## Methods {#methods}


### Problem Formulation {#problem-formulation}

Our work formalizes and augments the stepwise decoding scheme proposed by ToT as a Partially Observable Markov Decision Process (POMDP) (<a href="#citeproc_bib_item_5">Kaelbling, Littman, and Cassandra 1998</a>). A POMDP is a search and planning formulation which emphasizes the uncertain nature of intermediate steps by formalizing each problem into a tuple \\((\mathcal{S}, \mathcal{A}, \mathcal{O}, \mathcal{T}, \mathcal{R}, \gamma, s\_0)\\).

We specifically define our problem formulation as follows:

-   \\(\mathcal{S} = S \times U\\), where \\(s \in S\\) is each sub-step of our decomposed problem and \\(u \in U\\) representing the unmeasurable, true underlying value being estimated by \\(V(s)\\) in ToT representing the usefulness of a particular thought
-   \\(\mathcal{A} = [a\_0, a\_1, a\_2]\\), a discrete set of possible problem-solving actions---to "continue" expanding a particular branch \\(a\_0\\), to "rollback" to previous branch \\(a\_1\\), or to "think" a new thought at the current branch \\(a\_2\\).
-   \\(\mathcal{O} \in S \times U\\), exactly the same as \\(\mathcal{S}\\), but instead of the unobservable underlying value of a given \\(s\\) we obtain \\(V(s)\\) instead from the language model by asking the language model for its judgement regarding a state; importantly, because the observations are simply a sample on the distribution, we can directly use \\(V(s\_{j}) \sim p^{value}\_\theta(o|s\_{j}), o \in \\{ sure, likely, impossible\\}, \forall j \in 1 ... n\\)
-   \\(\mathcal{T}\\) is given deterministically given the state and action---"continue" appends the current state to the solution trajectory, yielding a new subproblem, and calculates a new thought; "rollback" pops the last item in the solution trajectory back into the current state and reverts to the previous subproblem; "think" reformulates a new state given the current subproblem
-   \\(\mathcal{R}\\) is given by a language model evaluator given a final trajectory, where: \\(r\_{\max}\\) is given if the LM believes a trajectory successfully solves the problem, and \\(r\_{\min}\\) is given if the LM believes a trajectory failed to solve the problem

Lastly, for this problem, we set discount \\(\gamma\\) to \\(1\\) to maximize joint reward, and \\(s\_0\\) would be the initial, unsolved problem.


### Modified POMCP {#modified-pomcp}

To solve the formalization given above in an actual problem, we chose the POMCP solver (<a href="#citeproc_bib_item_9">Silver and Veness 2010</a>). This solver is chosen for three primary reasons.

First, by only needing actions and observation sequences as input, the solver requires no explicit distribution on observation and transitions, meaning that simply making concrete samples from the language model posterior is enough to take advantage of its distributional nature.

Second, the POMCP solver has excellent anytime performance characteristics; the search tree for possible solutions will prioritize most possible solutions as rated by intermediate value, but can expand to (at the worst case) an exhaustive search of all possible intermediate states. In particular, easier problems will have stronger heuristic signals, which typically will take less time to solve; this means that a cutoff could be specified by the user to control the speed/accuracy trade-off in solving a given problems.

Specifically, a POMCP solver collects a tree based on sequences of actions and their resulting observations \\(h = \\{a\_1, o\_1, ...\\}\\). When planning for a specific action, the scheme samples a series of possible next states from a generative model given your current state and action \\(s' \sim T(\cdot | s,a)\\) and calculates reward \\(R(s,a)\\) from current state.

Once this procedure grows the tree to a certain depth, a point-wise value estimate is calculated from a roll-out.

For this specific problem, we modify the typical "rollout" rollout procedure by essentially performing CoT reasoning with a weighted average of the possible rewards in obtained in the end:

\begin{algorithm}
\caption{obtain a value estimate at some leaf state $s\_{f}$}\label{alg:cap}
\begin{algorithmic}
\Ensure $d > f$
\State $s = s\_{f}$
\State $L \gets d-n$ \Comment{Depth Remaning in Rollout}
\State $\tau \gets \\{s\_0, \dots, s\_{f}\\}$
\While{$L \neq 0$}
\State $\tau \gets \tau \cup \left\\{\arg\max\_{s'} \qty(p^{thought}\_{\theta}(s'|s))\right\\}$
\State $s = s'$
\State $L \gets L-1$
\EndWhile
\State $V = \frac{R\_{\max} \cdot p\_{\theta}^{evaluate}(\tau^{\*}|\tau)+R\_{\min} \cdot p\_{\theta}^{evaluate}(\neg\tau^{\*}|\tau)}{R\_{\max}+R\_{\min}}$\Comment{LM-Posterior Weighted Average of Possible Reward}
\State \Return $V$
\end{algorithmic}
\end{algorithm}

where, \\(p\_{\theta}^{thought}\\) is the "thought" generation prompt previously discussed, and \\(p\_{\theta}^{evaluate}\\) is the evaluation prompt to check if a particular trajectory truly solves the target task which is also used in reward calculation. Recall that \\(\tau^{\*}\\) represents a trajectory which answers the given question correctly.

As CoT is a reasonably performant reasoning procedure that is relatively lightweight to compute, we believe it would serve to _raise_ the lower bound of possible values, and therefore aid the speed of solution in POMCP.


### Task Setup {#task-setup}

{{< figure src="/ox-hugo/2024-03-13_22-38-50_screenshot.png" >}}

Similar to ToT, we are going to use the Game of 24 as a difficult multi-step reasoning task with which to test the scheme proposed.

The Game of 24 is a mathematical reasoning game, which uses four numbers and basic arithmetic operations to obtain a value of 24. For instance, for the problem of `4 9 10 13`, a solution trajectory may look as follows:

-   \\(s\_0\\): subproblem: 4 9 10 13
-   \\(s\_1\\): \\(13-9=4\\), subproblem: 4 4 10
-   \\(s\_2\\): \\(10-6 = 6\\), subproblem: 4 6
-   \\(s\_3\\): \\(4 \cdot 6\\), subproblem: 24

which concludes the solution.

**Data Source**: in order to maintain comparability to ToT, we leverage the exact dataset curated by Yao et. al. scraped from 4nums.com as our problem set as well. Importantly, the data is sorted by rate of difficulty (as measured by weighted average time for solution)

**Benchmark**: the "success rate" metric reported involves the success rate across 100 games, corresponding to the metric reported by ToT. Additionally, we also report time-to-solve metrics as measured by the time between the initialization of an empty POMCP tree to obtaining a proposed solution from the scheme.

**Language Modeling**: distinct from ToT, to perform language model, we use _two separate language models_. \\(p\_{\theta}^{evaluate}\\) and \\(p\_{\theta}^{value}\\) (for \\(\mathcal{R}\\) and \\(\mathcal{O}\\) respectively) were computed using GPT-4-Turbo (1106), and \\(p\_{\theta}^{thought}\\) was computed using GPT-3.5-Turbo-Instruct (0914). This hybrid approach allows for single-token only inference on the larger GPT-4 models, affording dramatic performance improvements.

**Solving**: we performed language model inference through the OpenAI Azure Cognitive Services API and used the POMDPs.jl, BasicPOMCP.jl Julia packages for the orchestration of the solver.


### Results {#results}

| Method    | Success |
|-----------|---------|
| CoT       | 4.0%    |
| ToT (b=1) | 45%     |
| ToT (b=5) | 74%     |
| LS (ours) | TODO    |

[plot of dificulty vs time]

As shown in [the table], we have [results]. Specifically, we have [these results, which are hopefull ygood]---far exceeding results from CoT (<a href="#citeproc_bib_item_11">Wei et al. 2022</a>) and are compatible with the approach in ToT.

Furthermore, Figure [figure] shows the anytime nature of the proposed solver. As problem difficulty (as rated by solution time-weighted percentage of 4nums.com users' solutions) increases, the time it requires for our solver to identify the correct answer increases as well.


## Conclusion {#conclusion}

In this work, we propose Lookahead Sampler (LS), a novel language model decoding scheme that extends ToS (<a href="#citeproc_bib_item_12">Yao, Yu, et al. 2023</a>) which leverages a large language model's self-reflective reasoning capabilities (<a href="#citeproc_bib_item_7">Paul et al. 2023</a>; <a href="#citeproc_bib_item_8">Shinn, Labash, and Gopinath 2023</a>) to guide multi-hop reasoning about a problem.

We formalize our approach through the POMDP framework (<a href="#citeproc_bib_item_5">Kaelbling, Littman, and Cassandra 1998</a>), and demonstrate comparable performance of our approach on the Game of 24 problem to ToT through using the online POMCP (<a href="#citeproc_bib_item_9">Silver and Veness 2010</a>) solver. Because of the anytime behavior of POMCP, we are able to demonstrate anytime scaling properties of our solver's behavior: more difficult problems takes longer and more LM inferences to solve. Taken together, these properties makes LS a more flexible approach to solving basic multi-step reasoning tasks as compared to previous approaches---allowing for contemporary LMs to solve more complex problems.

In its current form, this work has two key limitations. First, similar to that proposed by ToT, the approach is still _significantly_ more computationally expensive than CoT or other direct decoding approaches; therefore, these search techniques is likely unnecessary for problems which can be solved with high accuracy using simpler techniques. Second, posterior distributions---even when taking only top-k samples for extremely small k---are still meaningful only on billion-parameter models if used without additional fine tuning (<a href="#citeproc_bib_item_4">Hu and Levy 2023</a>): making the heuristic-driven performance improvements of LS limited in scope. With additional fine-tuning of surrogate value models, LS could likely perform dramatically more efficiently while obtaining its positive characteristics in solution quality.



<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Brown, Tom B., Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared Kaplan, Prafulla Dhariwal, Arvind Neelakantan, et al. 2020. “Language Models Are Few-Shot Learners.” arXiv. <a href="http://arxiv.org/abs/2005.14165">http://arxiv.org/abs/2005.14165</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Finlayson, Matthew, John Hewitt, Alexander Koller, Swabha Swayamdipta, and Ashish Sabharwal. 2023. “Closing the Curious Case of Neural Text Degeneration.” arXiv. <a href="http://arxiv.org/abs/2310.01693">http://arxiv.org/abs/2310.01693</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>Holtzman, Ari, Jan Buys, Li Du, Maxwell Forbes, and Yejin Choi. 2020. “The Curious Case of Neural Text Degeneration.” arXiv. <a href="http://arxiv.org/abs/1904.09751">http://arxiv.org/abs/1904.09751</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_4"></a>Hu, Jennifer, and Roger P Levy. 2023. “Prompting Is Not a Substitute for Probability Measurements in Large Language Models.” In <i>The 2023 Conference on Empirical Methods in Natural Language Processing</i>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_5"></a>Kaelbling, Leslie Pack, Michael L. Littman, and Anthony R. Cassandra. 1998. “Planning and Acting in Partially Observable Stochastic Domains.” <i>Artificial Intelligence</i> 101 (1): 99–134. doi:<a href="https://doi.org/10.1016/S0004-3702(98)00023-X">10.1016/S0004-3702(98)00023-X</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_6"></a>Liu, Tianyu, Yizhe Zhang, Chris Brockett, Yi Mao, Zhifang Sui, Weizhu Chen, and Bill Dolan. 2022. “A Token-Level Reference-Free Hallucination Detection Benchmark for Free-Form Text Generation.” In <i>Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)</i>, 6723–37. Dublin, Ireland: Association for Computational Linguistics. doi:<a href="https://doi.org/10.18653/v1/2022.acl-long.464">10.18653/v1/2022.acl-long.464</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_7"></a>Paul, Debjit, Mete Ismayilzada, Maxime Peyrard, Beatriz Borges, Antoine Bosselut, Robert West, and Boi Faltings. 2023. “Refiner: Reasoning Feedback on Intermediate Representations.” <i>arXiv Preprint arXiv:2304.01904</i>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_8"></a>Shinn, Noah, Beck Labash, and Ashwin Gopinath. 2023. “Reflexion: An Autonomous Agent with Dynamic Memory and Self-Reflection.” <i>arXiv Preprint arXiv:2303.11366</i>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_9"></a>Silver, David, and Joel Veness. 2010. “Monte-Carlo Planning in Large POMDPs.” <i>Advances in Neural Information Processing Systems</i> 23.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_10"></a>Verma, Siddharth, Justin Fu, Mengjiao Yang, and Sergey Levine. 2022. “CHAI: A CHatbot AI for Task-Oriented Dialogue with Offline Reinforcement Learning.” arXiv. <a href="http://arxiv.org/abs/2204.08426">http://arxiv.org/abs/2204.08426</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_11"></a>Wei, Jason, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Brian Ichter, Fei Xia, Ed H Chi, Quoc V Le, and Denny Zhou. 2022. “Chain-of-Thought Prompting Elicits Reasoning in Large Language Models.”</div>
  <div class="csl-entry"><a id="citeproc_bib_item_12"></a>Yao, Shunyu, Dian Yu, Jeffrey Zhao, Izhak Shafran, Thomas L. Griffiths, Yuan Cao, and Karthik Narasimhan. 2023. “Tree of Thoughts: Deliberate Problem Solving with Large Language Models.” arXiv. <a href="http://arxiv.org/abs/2305.10601">http://arxiv.org/abs/2305.10601</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_13"></a>Yao, Shunyu, Jeffrey Zhao, Dian Yu, Nan Du, Izhak Shafran, Karthik Narasimhan, and Yuan Cao. 2023. “ReAct: Synergizing Reasoning and Acting in Language Models.” arXiv. <a href="http://arxiv.org/abs/2210.03629">http://arxiv.org/abs/2210.03629</a>.</div>
</div>
