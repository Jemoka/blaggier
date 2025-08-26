+++
title = "Proposal: Dynamic Resource Scheduling through Direct Optimization"
author = ["Houjun Liu"]
draft = false
+++

## Background {#background}

In operations research, a key problem involves balancing limited and uncertain resources for the maximization of a specific business objective under constraints (such as budget or time). Approaches for this problem are frequently domain-specific due to the variability in design variables.

For simpler problems such as hub-and-spoke placement design, one can use proximity (i.e. distance) as a target, leading to clustering-based approaches ((<a href="#citeproc_bib_item_6">Ruan et al. 2016</a>)) which focuses on minimizing resource distance to solve a specific task. In others probes, however, clustering based approaches do not show a clear advantage due to the fact that they involve resource allocation decisions on a non-linear space (unlike physical space) subject also to non-linear constraints (unlike time).

(<a href="#citeproc_bib_item_5">Luo et al. 2021</a>) provides a succinct summary of various approaches used for cloud computing optimization; a vast majority of problems in that domain can be qualified as "resource allocation" problems, whereby one seeks to maximize the ordering of specific renewable resources' utilization to maximize uptime. This type of problem is also seen in hospital resource allocation ((<a href="#citeproc_bib_item_7">Visintin et al. 2017</a>))---whereby the finite (due to limited bedcount) and renewable (due to patients leaving/dying) resources are optimized for maximal throughput.

Approaches exist to mix scheduling-based optimization and resource based optimizations for specific domains such as disaster relief ((<a href="#citeproc_bib_item_1">Baxter, Wilborn Lagerman, and Keskinocak 2020</a>)). Yet, these approaches are generally much more widely adaptable than the specific domains on which they are applied.

As such, this proposal seeks to provide a formalization of combined scheduling and resource allocation problems, which the proposed project will seek to solve using a variety of approach and explore an application of this generic formulation through the task of executive time scheduling.


## Formulation {#formulation}

We formalize the task of resource management as an optimization under uncertainty scheme. Critical to this formalization is the choice that the objective function of this formalization under _any_ parameters is **minimizing time**---that is, unlike classic resource allocation tasks, we do not consider the maximization of throughput or utilization as an objective.

We make this decision informed by the fact that any resource allocation problem is either unsolvable completely (due to the resource being fundamentally constrained to perform a unit task), or solvable trivially without considering time (by simply allocating in a queue), while any scheduling problem naively already uses minimizing time spent as the optimization objective. Therefore, by minimizing for time, our solver should then optimize for secondary objectives such as utilization.

Further, we consider time to be absolute with respect to \\(t^{(0)}\\), the epoch. As such, we obtain an optimization problem that:

\begin{align}
\arg\min\_{\theta}\ & t^{(f)}\_{\theta} - t^{(0)}
\end{align}

To obtain \\(t^{(f)}\\), we create a temporal dependency relation through all **objects** (i.e. the design variables) within the system---in effect creating a Gantt chart upon which we perform our optimization (in effect, automating approaches such as (<a href="#citeproc_bib_item_3">Doolen and Van Aken 2016</a>)); the final timestamp of the dependency relation can then serve as our value for \\(t^{(f)}\\).

To support this formulation, therefore, we have to formalize every other secondary objective in terms of an **object** with a temporal dependency. To do this, we provide fundamental primitives here upon which a computations graph for \\(t^{(f)}\\) can be generated; the product of all parameters of the primitives used forms the design variable upon which optimization occurs.


### Block {#block}

a "block" is a fixed region of time \\((t\_{1}, t\_2)\\)  where \\(t^{(0)} < t\_{1} < t\_2\\) for which no other primitives can be scheduled. Its existance does not change \\(t^{(f)}\\).


### Event {#event}

A event is a unit of work with fixed time window, each with a specific dispatch time and duration. If our schedule contains \\(n\\) events, we demand that \\(t\_{\theta}^{(f)} > t\_{n}^{(1)}\\) where \\(t^{(1)}\_{n}\\) is the ending time of the last event.

If an event is scheduled atop a Block, its end time is increased by the duration of that block.

An event always exposes at least one design variable, dispatch time, which is when the event shall take place; further, it may expose any set of categorical parameters to choose from. Importantly, the **duration** of each event is neither a parameter nor a design variable in this system; it is a computed, **random variable** value (making this an optimization under uncertainty problem) of the design variables and schedule (due to resource allocation constraints). The Operationalization section below provides more details on this fact.


### Task {#task}

A task is multiple events and tasks in dependent order, meaning each event must conclude when the other begins.


### Schedule {#schedule}

A schedule is a combination of tasks and blocks which are internally dependent. In effect, our optimization problem becomes the act of choosing dispatch times of events which is allowable by the schedule.

\begin{align}
\arg\min\_{\theta}\ & t^{(f)}\_{\theta} - t^{(0)} \\\\
s.t.\ &\theta \in \text{schedule}
\end{align}


## Operationalization {#operationalization}

We give here a sketch of two common resources which are allocated through optimization techniques, and how the framework outlined above allows them to be formalized.


### Constrained Resource Allocation {#constrained-resource-allocation}

Consider the case where there are \\(n\\) possibly-divisible units of work to be completed by \\(w\\) workers. In the fashion outlined in ((<a href="#citeproc_bib_item_2">Cavalcante, Cardonha, and Herrmann 2013</a>)), each work unit \\(n\\) is considered a Task, subdivided into one to multiple Events based on the nature of the task.

To compute \\(t\_{2}\\) of each event, we greedily ((<a href="#citeproc_bib_item_4">Lee et al. 2013</a>)) assign the event to the first available worker at that point, and, if a worker is not available, we add to \\(t\_2\\) the wall time until the an worker becomes available. As such, the task of choosing the correct sequence of wall times becomes a proxy for allocating worker usage; for instance, if a task with a dependency needs to start earlier, moving other tasks' dispatch times to when the dependent task started is a proxy for assigning the dependent task first to a worker.


### Traffic Allocation {#traffic-allocation}

If a transportation task is needed, we formalize it as a single Event. This event has uncertain duration (due to traffic). The high-level choices of routing are exposed as a parameter to this event, while the details are computed directly and taken as oracle data.


## Optimization {#optimization}

Tasks and their dependencies are an abstraction over the choices of a sequence of events. With a certain Event order chosen, one can solve the optimization problem with a two step, iterative approach.

1.  choose parameters: we formulate event "parameters" as categorical here, so its possible to perform simple grid search to choose parameters; if the parameter space is large, approximate bracketing approaches maybe sufficient to choose each parameter
2.  optimization: using the method of dual numbers, we use the selected parameters to create a computation graph for \\(t^{(f)}\\) with uncertainty; this is our design objective for which we can use local model methods or direct methods to solve

Once an optimal choice of \\(2\\) is obtained, we return to step \\(1\\), fixing our choices of dispatch times, for an reevaluation of parameters. We repeat until this scheme converges.


## Implementation {#implementation}

For each Event, we provide an interface to compute its duration based on dispatch time and state (the other chosen dispatch times.) Event durations are computed left-to-right in order for all previous events of a computation to already have both an associated dispatch time and ending time.



<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Baxter, A. E., H. E. Wilborn Lagerman, and P. Keskinocak. 2020. “Quantitative Modeling in Disaster Management: A Literature Review.” <i>IBM Journal of Research and Development</i> 64 (1): 3:1–3:13. doi:<a href="https://doi.org/10.1147/JRD.2019.2960356">10.1147/JRD.2019.2960356</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Cavalcante, Victor F., Carlos H. Cardonha, and Ricardo G. Herrmann. 2013. “A Resource Constrained Project Scheduling Problem with Bounded Multitasking.” <i>IFAC Proceedings Volumes</i> 46 (24): 433–37. doi:<a href="https://doi.org/10.3182/20130911-3-BR-3021.00084">10.3182/20130911-3-BR-3021.00084</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>Doolen, Toni, and Eileen Van Aken. 2016. “Integrated Earned Value Gantt Chart (EV-Gantt) Tool for Project Portfolio Planning and Monitoring Optimization.” <i>Engineering Management Journal</i> 28 (1): 1–2. doi:<a href="https://doi.org/10.1080/10429247.2016.1150027">10.1080/10429247.2016.1150027</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_4"></a>Lee, Kangbok, Lei Lei, Michael Pinedo, and Shengbin Wang. 2013. “Operations Scheduling with Multiple Resources and Transportation Considerations.” <i>International Journal of Production Research</i> 51 (23): 7071–90. doi:<a href="https://doi.org/10.1080/00207543.2013.781283">10.1080/00207543.2013.781283</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_5"></a>Luo, Quyuan, Shihong Hu, Changle Li, Guanghui Li, and Weisong Shi. 2021. “Resource Scheduling in Edge Computing: A Survey.” <i>IEEE Communications Surveys &#38; Tutorials</i> 23 (4): 2131–65. doi:<a href="https://doi.org/10.1109/COMST.2021.3106401">10.1109/COMST.2021.3106401</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_6"></a>Ruan, J.H., X.P. Wang, F.T.S. Chan, and Y. Shi. 2016. “Optimizing the Intermodal Transportation of Emergency Medical Supplies Using Balanced Fuzzy Clustering.” <i>International Journal of Production Research</i> 54 (14): 4368–86. doi:<a href="https://doi.org/10.1080/00207543.2016.1174344">10.1080/00207543.2016.1174344</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_7"></a>Visintin, Filippo, Paola Cappanera, Carlo Banditori, and Pamela Danese. 2017. “Development and Implementation of an Operating Room Scheduling Tool: An Action Research Study.” <i>Production Planning &#38; Control</i> 28 (9): 758–75. doi:<a href="https://doi.org/10.1080/09537287.2017.1310328">10.1080/09537287.2017.1310328</a>.</div>
</div>
