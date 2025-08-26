+++
title = "minimum user base requirements for coveather"
author = ["Houjun Liu"]
draft = false
+++

How many disturbance users can [coveather]({{< relref "KBhcoveather.md" >}}) take without crashing? Let's find out.


## Code {#code}

Util function to mapreduce a list:

```sage
def multiplyList(l) :
    # Multiply elements one by one
    result = 1
    for x in l:
         result = result * x
    return result
```

We first set a user count:

```sage
N = var("N")

# Pool size
val_percent = var("val_percent")

# Pools
val_pool = N*val_percent
user_pool = N*(1-val_percent)

# Disturbance
disturbance_percent = var("disturbance_percent")

# Validation Pools + Disburbance
val_disturbance_pool = disturbance_percent*val_pool
val_normal_pool = (1-disturbance_percent)*val_pool
```

```sage
# Chance of three or more disturbance attestors
# which is equal to one minus chance of zero, one, or two disturbance attesors
no_disturbance_attestor = (val_normal_pool/val_pool)*((val_normal_pool-1)/(val_pool-1))*((val_normal_pool-2)/(val_pool-2))*((val_normal_pool-3)/(val_pool-3))

one_disturbance = []
for disturbance_point in range(0,4):
    res = []
    res.append((val_disturbance_pool)/(val_pool-disturbance_point))
    for pre_disturbance in range(0,disturbance_point):
        res.append((val_normal_pool-pre_disturbance)/(val_pool-pre_disturbance))
    for post_disturbance in range(disturbance_point+1,4):
        res.append((val_normal_pool-post_disturbance)/(val_pool-post_disturbance))

    one_disturbance.append(multiplyList(res))
one_disturbance_attestor = sum(one_disturbance)

two_disturbance = []
for disturbance_point_i in range(0,4):
    for disturbance_point_j in range(disturbance_point_i+1,4):
        res = []
        res.append((val_disturbance_pool)/(val_pool-disturbance_point_i))
        res.append((val_disturbance_pool-1)/(val_pool-disturbance_point_j))

        for pre_i_disturbance in range(0,disturbance_point_i):
            res.append((val_normal_pool-pre_disturbance)/(val_pool-pre_disturbance))
        for sandwich in range(disturbance_point_i+1,disturbance_point_j):
            res.append((val_normal_pool-post_disturbance)/(val_pool-sandwich))
        for post_j_disturbance in range(disturbance_point_j+1,4):
            res.append((val_normal_pool-post_disturbance)/(val_pool-post_j_disturbance))

        two_disturbance.append(multiplyList(res))
two_disturbance_attestor = sum(two_disturbance)

distubrance_chance(N, val_percent, disturbance_percent) = expand(1-(no_disturbance_attestor+one_disturbance_attestor+two_disturbance_attestor))

# no_disturbance_attestor
```

```text
(N*(disturbance_percent - 1)*val_percent + 3)*(N*(disturbance_percent - 1)*val_percent + 2)*(N*(disturbance_percent - 1)*val_percent + 1)*(disturbance_percent - 1)/((N*val_percent - 1)*(N*val_percent - 2)*(N*val_percent - 3))
```

```sage
z = var("z")
val_dist(val_percent, disturbance_percent) = distubrance_chance(100, val_percent, disturbance_percent)
implicit_plot3d(val_dist-z, (val_percent,0.1,1), (disturbance_percent, 0,1), (z, 0,1) ,frame=True,axes_labels=['Validation','Disturbance', 'Chance'],axes=False, color=(val_dist,colormaps.Blues))
```

```text
Launched html viewer for Graphics3d Object
```

```sage
z = var("z")
n_dist(N, disturbance_percent) = distubrance_chance(N, 0.1, disturbance_percent)
show(implicit_plot3d(n_dist-z, (N,100,100000), (disturbance_percent, 0,1), (z, 0,1) ,frame=True,axes_labels=['N','Disturbance', 'Chance'],axes=False, color=(n_dist,colormaps.Blues)), aspect_ratio=[1,100000,100000], plot_points=100)
```

```text
Launched html viewer for Graphics3d Object
```

```sage
n_dir(N) = distubrance_chance(N, 0.1, 0.1)
# plot(n_dir, (N,100,100000),axes_labels=['N', 'Disturbance'], thickness=1)
# solve(distubrance_chance(100, N, 0.1)==0.01, N, to_poly_solve=True)
# implicit_plot(distubrance_chance(100, N, 0.1)==0.01, (N, 0,1), (z, 0,
# solve(distubrance_chance(N, val_perc, 0.1)==0.01, val_perc, to_poly_solve=True)
# implicit_plot(solve(distubrance_chance(N, val_perc, 0.1)==0.01, val_perc)[0])

# val_perc = var("var_perc")
show(implicit_plot(distubrance_chance(N, val_perc, 0.1)==0.01, (N, 15, 1000), (val_perc, 0,1), plot_points=300,axes_labels=['N','Val Ratio'],axes=False), aspect_ratio=800)

# solve(distubrance_chance(800, val_perc, 0.1)==0.01, val_perc, to_poly_solve=True)
```

</Users/houliu/.sage/temp/baboon.jemoka.com/64368/tmp_9bdcu2si.pn>