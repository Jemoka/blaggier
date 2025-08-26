+++
title = "Recommender System"
author = ["Houjun Liu"]
draft = false
+++

[Recommender System]({{< relref "KBhrecommender_system.md" >}}) is a system that provide recommendations due to search; it combines [Information Retrival]({{< relref "KBhinformation_retrival.md" >}}) with another goal:

-   **Editorial/Hand-Curated lists**: "list of favorites", "essential items", etc.
-   **Aggregates**: top 10 lists, most popular, recent uploads
-   (hardest) **Individual tailors**: user-based recommendation


## Formal Model {#formal-model}

-   \\(X\\) the set of users
-   \\(S\\) the set of things to recommend
-   \\(R\\) the set of distinct and totally ordered ratings  (stars 1-5, real number 0-1, etc.)
-   Utility function: \\(U:X \times S \to R\\) ("how much

Three key problems:

-   **obtain** \\(U\\) as much as possible, leaving something blank
-   **extrapolate** blank entries in \\(U\\) which maybe high ("recommend something")
-   **evaluate** our recommendation method


## obtaining \\(U\\) {#obtaining-u}

-   ask people (rate!)
-   implicit signals (buying book, picking song, watching video, etc.)---this will create a binary matrix


## extrapolating \\(U\\) {#extrapolating-u}

\\(U\\) is sparse (people can't rate everything).

**Cold Start problem**:

-   new items have no ratings
-   new users have no history

**Three Main Approaches**:


### content based filtering {#content-based-filtering}

**Recommend \\(s\\) to \\(x\\) if \\(s \sim s'\\) based on content where \\(s'\\) is already rated highly by \\(x\\)**

("if the user likes Jazz, given them more Jazz")

1.  create profile of each item (movie: genre, actor, years; lexicon: important words by [TF-IDF]({{< relref "KBhranked_information_retrieval.md#tf-idf" >}}); etc)
2.  create profile of user, say by averaging ratings of the things the user marked as high
3.  cosine similarity

---

Advantages:

-   no need for data on other users (no user sparsity)
-   able to tailor to unique tastes
-   able to recommend new and unpopular things
-   transparent

Disadvantages:

-   need to build a profile for user
-   overspecialization (never recommend outside of user's preferences)
-   unable to exploit other users' judgments
-   finding good features is hard


### collaborative filtering {#collaborative-filtering}

Instead of using content features of items to recommend, we find user instead.


#### user-user [collaborative filtering](#collaborative-filtering) {#user-user-collaborative-filtering--orga6897ce}

Consider a user \\(x\\), and some set of unrated items \\(i\\).

Let's find \\(N\\) other users with similar ratings: 1) find similar users and 2) recommend items they like.

Then, we estimate \\(x\\)'s ratings for \\(i\\) based on the similar users' ratings for \\(i\\).

<!--list-separator-->

-  problem

    because the sparsity of the user vectors which we treat as \\(0\\), cosine gets confused. Cosine doesn't really capture the "oppositeness" of a 5 star vs a 1 star rating.

    solution: **mean center** each user---subtracting each user's score from their mean rating (ignoring missing values, and do not subtract anything to the missing values). This allows opposite opinions to have opposite signs as well.

<!--list-separator-->

-  sparsity

    we prevent computing values for which one user does not rate; as in, we chop the vectors such that the comparison between \\(x\\) and \\(x\_{n} \in X\\) are both dense (i.e. if one of the two users don't rate something, we do not include that in the vector).

    after this, we can compute our normal cosine similarity; remember to normalise.

<!--list-separator-->

-  prediction

    finally, after we got our \\(N\\), we can return our prediction for \\(I\\) either based on an average score of the similar users retrieved in \\(N\\) or average weighted of scores in \\(N\\) weighted by similarity to our target user \\(x\\).

    \begin{equation}
    r\_{xi} = \frac{1}{N} \sum\_{}^{} r\_{yi}
    \end{equation}

    or

    \begin{equation}
    r\_{xi} = \sum\_{}^{} \frac{sim(x,y) r\_{yi}}{sim(x,y)}
    \end{equation}


#### item-item [collaborative filtering](#collaborative-filtering) {#item-item-collaborative-filtering--orga6897ce}

For item \\(i\\), we want to find other similar **items** to our item \\(i\\), and average the user's own ratings on those similar items onto \\(i\\).

this tends to work better because items are easier to classify than users.

<!--list-separator-->

-  problem

    -   cold start (we need initial data to seed the rating)
    -   sparsity (user ratings are sparse)
    -   popularity bias---creates filter bubbles and hard to generalize over unique tastes


### latent factor (neural) systems {#latent-factor--neural--systems}

1.  represent each video and user as an embedding
2.  [collaborative filtering](#collaborative-filtering).

YouTube obtains this embedding by predicting what video user is going to watch


## evaluation {#evaluation}

RMSE between held out ratings:

\begin{equation}
\sqrt{\frac{\sum\_{xi}^{}(r\_{xi} - r^{\*}\_{xi})^{2}}{N}}
\end{equation}
