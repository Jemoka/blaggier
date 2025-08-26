+++
title = "Term-Document Matrix"
author = ["Houjun Liu"]
draft = false
+++

A [Term-Document Matrix]({{< relref "KBhterm_document_matrix.md" >}}) is a boolean matrix of: rows---"terms", the search keywords---and columns---"documents", which is the document. Each element \\((x,y)\\) is \\(1\\) if \\(y\\) contains term \\(x\\), and \\(0\\) otherwise.

To perform a search, we take a boolean operation over each row (usually either complement for NOT or identity), and AND it with all other terms. The resulting boolean string are the valid documents.

Notably, this is quite intractable because the matrix is quite (words times documents) blows up. However, this representation is **QUITE SPARSE**. So, ideally we only store it sparsely.
