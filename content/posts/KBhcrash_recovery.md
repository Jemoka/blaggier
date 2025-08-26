+++
title = "crash recovery"
author = ["Houjun Liu"]
draft = false
+++

## Major Challenges {#major-challenges}

-   **data loss**: crashes can happen, and not all data could be saved to disk
-   **inconsistency**: crashes can happen in the middle of operations
    -   crashes could occur when someone of the blocks that have been written to disk, but not others
    -   inode and free lists don't agree.

Ideally, filesystem operations should be **atomic**. Every operation should happen or not happen at all---but not halfway.

Case study: [Block Cache Modification]({{< relref "KBhunix_v6_filesystem.md#block-cache-modification" >}})


## Tradeoffs {#tradeoffs}

The overall design tradeoffs between this:

-   durability - the data needs to be safe (which is slow, and may require manual crash recovery (sans cache, etc.))
-   performance - it needs to be fast (which may mean less error checking)
-   consistency - the filesystem needs to be uniform (which means that we need to be slower and we may drop data in favor of previous checkpoints that worked)

Also the disks themselves can still fail.


## fsck {#fsck}

Don't make any changes to filesystem at all. At the system boot time, check filesystem for consistency.

main limitation:

-   can't restart filesystem until it completes: this process ****takes forever****
-   restores consistency, but doesn't prevent loss of info
-   restores consistency, but filesystem may still be unusable (core files moved to lost+found)
-   a block could migrate from a password file to some other random file, hence removing info

---

-   Check whether or not there is a clean shutdown: setting a disk flag on clean shutdown; so if the flag isn't set there isn't a clean shutdown.
-   If it wasn't a clean shutdown, identify inconsistencies
-   Scans meta data (inodes, indirect blocks, free list, directory blocks) and handle any of the following situations---


### block in an inode and in free list {#block-in-an-inode-and-in-free-list}

Solution: pull the block off of free list


### block is a part of two inodes {#block-is-a-part-of-two-inodes}

Solutions:

-   give to newest
-   randomly pick
-   make a copy
-   remove (generally a bad idea, we don't want to destroy data)


### inode claims one dirent refers to it, but there are no such dirent {#inode-claims-one-dirent-refers-to-it-but-there-are-no-such-dirent}

put the file under the `lost+found` folder


## ordered writes {#ordered-writes}

****Example****: block is in file and also in the free list.

This basically removes the need to wait for fsck on reboot.

We can use a certain **order** of operations to prevent these types of errors from occurring:

1.  Always initialize the **TARGET** before initializing the **REFERENCE**
    -   Initialize inode before initalize directory entry to it
2.  Never reuse a resource before **NULLIFYING** all existing ****REFERENCES****
    -   Remove the inode reference before putting a block on the free list
3.  Never clear the ****LAST REFERENCE**** to a live resource before setting a ****NEW REFERENCE**** ("its better to have 2 copies instead of none")
    -   Make the new directory entry before get rid of the old one

---

Limitations:

-   **performance**: we need to do operations synchronously
    -   if we really want to do caching async, we can track dependencies
    -   circular dependencies are possible
-   ****leak****: it could leak resources (reference nullification happens but resource not added)
    -   We can run fsck in the background


## journaling {#journaling}

[journaling](#journaling) keeps a paper trail of disk appertains in the event of a crash. We have an append-only log on disk that stores disk operations.

-   before performing an operation, record its info in the log
-   and write that to disk

The log will always record what's happening ahead. The actual block updates can eventually be carried out in any order.


### what do we log? {#what-do-we-log}

-   we only log **metadata** changes (inodes, moving stuff around, etc.)
-   payload operations are not saved


### structure {#structure}

We typically have a LSN: log serial number, operations, and metadata.

\#+begin_src toml
[offset 335050]
LSN 18384030
operation = "LogBlockAlloc"
blockno = 1027
zero_on_replay = 0

[offset 23232]
LSN N
operation = "LogPatch"
blockno = 8
offset = 137
bytes = 0.04
inode = 52
\#+end_arc

"zero-on-replay":

> Specifies that block number blockno, which was previously free, should now be marked as allocated (0 or false in the freemap). If zero_on_replay is non-zero, it means that the block is being used for metadata---i.e., as an indirect (or double-indirect) block, or for a directory.


### limitations {#limitations}


#### checkpoints {#checkpoints}

Its an add-only paper trial. We can truncate the log occasionally at a "checkpoint", and truncate the log which is no longer needed.


#### multiple log entries {#multiple-log-entries}

An atomic operations may have multiple log entries corresponding to it (because they have many steps). We need to make sure that the entire operation is replayed or none at all.

So, we introduce **transactions**: each atomic operation will be wrapped into a unit transaction.


#### where do we start replaying {#where-do-we-start-replaying}

You don't know where **exactly** you crashed.

So, log entries should be **idempotent**: doing something multiple times should have the same effect of doing them once. To make this happen, we need to cache all the data that's needed to write to the log in the log itself. It cannot have external dependencies.

So we just replay the entire log. To save time every so often you trim the logs via [checkpoints](#checkpoints)


#### log entries may take time {#log-entries-may-take-time}

We can also make log entry writes in the block cache too. This doesn't matter too much: if both the log and the actual data is wiped from the cache, the filesystem is **still consistent** (we just lost data).

When finally we write stuff to disk, we write the logs first. So no problems there.
