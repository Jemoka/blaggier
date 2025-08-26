+++
title = "Pitch a Project"
author = ["Houjun Liu"]
draft = false
+++

## User Story {#user-story}

Sejin is the executive administrative assistant at Nueva, working on scheduling Liza, Lee, Terry, and the other admins against the members of the wider community. Sejin spends most of her day scheduling people, of which, the largest time drawn is spent convincing people to move their schedules "in favor" of that of another person (i.e. manually). The reason why this is done is because her approach to scheduling is one-shot: emailing everybody for general availability, noting in her mind who the high-priority attendees are (say, Liza), and if no times match asking/convincing those in lower priority to move their schedules. Although she enjoys the process of putting events together, she is particularly frustrated that, due to the busy schedules and often back-and-forth emails needed to get and conform everyone's schedule, response rates to complicated scheduling problems are low.

Sejin, during a main brunt of her job of scheduling inter or intra-admin meetings, need a solution to schedule many executives at once with attention to their priority/authority/importance to a meeting as well as the possible fluidity of their schedules. There is an inherit fluidity to scheduling as a master-planner of a few admin's schedules: in that, if needed, she has authority to move entire meetings as long as they are swapped for equivalent times of availability. Hence, a previously bad time may suddenly become available if enough scheduling conflicts is generated, thereby creating the incentive for swapping another meeting away for the one being scheduled and rescheduling other attendees of lower priority.

Current scheduling software does not account for either types of fluidity. Tools like Doodle/When2Meet can accommodate for inherent "priority"---with Sejin choosing the time-slot that would have the most, highest priority individuals scheduled---but are one-shot planning tools which do not provide space for swapping entire meetings out to make scheduling work better. Other tools like Calendly or simple iCal does not provide any semblance of priority or "multi-possibility" for meetings, though does indeed provide the time-blocking capability to swap two meetings at will. These problems result in Sejin needing to just create large email chains to resolve scheduling problems. Also, no scheduling tools provide an opportunity to manually "convince" or request someone to make time due to the constraints that presented during first-round scheduling. Lastly, scheduling software does not space-block. Sometimes there is a physical capacity/de-duplication limit to spaces, which cannot be accounted for.

Once the initial scheduling and emailing processes are automated, Sejin can spend more time focusing on what she actually enjoys: thinking about the process of an event and its details. Schedule can now be an afterthought, an event which happens in the background which is eventually reported to her on the online portal as she is planning the details of the event.


## Proposal {#proposal}

Fundamentally, this is a fractional knapsack problem. "How do we maximize the maximum amount of attendance of maximum amounts of important people?"

From a target market, I think a good target would be medium organization assistants: Sejin's concerns really only become a problem when you are scheduling for a one (or few) vs. many situation where there is a stable group of people you are scheduling for, who wants to meet with each other or other people outside.

As far as UX, this tool should not require log-in except for the master planner (i.e. our user.) Participants in meeting should be able to freely enter their schedules or create evergreen accounts to manage their scheduling. (This is not as well thought out at the moment.)

Lastly, for the tech stack, I don't think I have the ability to finish the entire stack by myself. From a MVP perspective (if we are trying to satisfy all needs), there needs to be a system optimizing a constantly shifting fractional knapsack, a way to put and store availability information, and a way to automate the requesting/convincing of scheduling change (e.g.. "MyApp Notification! Liza is not available at the one time you selected, but everyone else is available at this different time. Can you make this time? Y/N") . Ideally, we would also send iCal invites in the end.