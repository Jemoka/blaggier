+++
title = "NUS-ECON320 Inter-Temporal Choice"
author = ["Houjun Liu"]
draft = false
+++

We want to construct a combined agent

\begin{equation}
(k\_1+k\_2)x^{\*}(k\_1+k\_2, \gamma^{\*}) = x^{\*}(k\_1,\gamma\_{1})k\_1+x^{\*}(k\_2, \gamma\_{2})k\_2
\end{equation}

which combines the relative risk of \\(\gamma\_{1}, \gamma\_{2}\\) into some new \\(\gamma^{\*}\\), which produces the same combined consumption of both agents \\(k\_1+k\_2\\).

Let us create some CAS tools to solve the inter-temporal choice problem generically for 10 steps in the past.

We do this by solving backwards. We will create a variable \\(k\\) to measure asset, and \\(k\_{t}\\) the remaining asset at time \\(t\\).

Let us first declare the function for [power utility]({{< relref "KBhpower_utility.md" >}}). \\(k\\) is our asset holding, \\(\gamma\\) our relative margin of risk, and \\(U\\) the power utility.

```sage
# risk aversion
y = var("y", latex_name="\gamma", domain='real')
# discount factor
d = var("d", latex_name="\delta", domain='real')
# final value at time t=f
k_f = var("k_f", latex_name="k_f", domain='real')

# the instrument's percentage return over a period: i.e. (1+mu)*I_t = k_{t+1}
m = var("m", latex_name="\mu", domain='real')

# boundary conditions
assume(y>0)
assume(y<1)
assume(d>0)
assume(d<1)
# power utility
u(c) = ((c^(1-y)-1)/(1-y))
u
```

```text
c |--> -(c^(-y + 1) - 1)/(y - 1)
```

At the final time stamp, we desire to consume all of our assets. Therefore, we will seed our investment amount at \\(I=0\\). We will optimize for eventual global utility, therefore, we will talley our utility; starting this talley at \\(0\\).

```sage
# at the final time, leave nothing for investment
I=0; u_total = 0
```

From every step from here, we will discount this utility by \\(d\\), then solve for the _previous_ step's target consumption that would maximize utility. That is, at every step, we desire:

\begin{equation}
k\_{t-1} = I\_{t} + c\_{t} \implies c\_{t} = k\_{t-1}-I\_{t}
\end{equation}

"we want to consume all we have that needed't to be invested"

and

\\(\max u(c\_{t})\\)

Recall also that \\((1+\mu)I\_{t} = k\_{t+1}\\)  (as \\(\mu\\) is the mean log-return, 1+that times \\(I\\), how much was invested at time \\(t\\), is the expected capital one time period from then.) Therefore, to make sure that \\(k\_{f}\\) gets back in the final period, we solve for our seed value for \\(I\\), how much to invest would be:

\begin{equation}
I\_{t-1} = \frac{k\_t}{(1+m)}
\end{equation}

Enough talk, let's get to it:

```sage
# create an dictionary to keep track of all the capital variables
k = {}
# we will iterate time stamps 1-10
T = 10
# a variable for captial at that time
for i in range(T):
    k_t = var(f"k_{T-i}", latex_name=f"k_{T-i}") # t-i becasue we are solving backwards; i0 = T10
    # what can be consumed at every time stamp
    # is the k of the previous timestamp, minus
    # what needs to be left over
    # we multiply here by d because we want to
    # discount future utility
    u_total = d*u_total + u(k_t-I)
    # add the current variable to dictionary
    k[T-i] = k_t # recall again i0=T10 because backwards
    # solve for the next investment amount
    I = k_t/(1+m)
u_total
```

```text
-(((((((d*(d*(k_10^(-y + 1) - 1)/(y - 1) + ((k_9 - k_10/(m + 1))^(-y + 1) - 1)/(y - 1)) + ((k_8 - k_9/(m + 1))^(-y + 1) - 1)/(y - 1))*d + ((k_7 - k_8/(m + 1))^(-y + 1) - 1)/(y - 1))*d + ((k_6 - k_7/(m + 1))^(-y + 1) - 1)/(y - 1))*d + ((k_5 - k_6/(m + 1))^(-y + 1) - 1)/(y - 1))*d + ((k_4 - k_5/(m + 1))^(-y + 1) - 1)/(y - 1))*d + ((k_3 - k_4/(m + 1))^(-y + 1) - 1)/(y - 1))*d + ((k_2 - k_3/(m + 1))^(-y + 1) - 1)/(y - 1))*d - ((k_1 - k_2/(m + 1))^(-y + 1) - 1)/(y - 1)
```

We can now use the scipy numerical optimizer to minimize this target. Recall that we can recover the actual value of consumption at each step as \\(c=k-\frac{k}{m+1}\\).

We will set some initial conditions:

```sage
_m = 0.01 # 1% period-to-period increase
_k = 1000 # $1000 capital
_y = 0.8 # generally risk averse
_d = 0.9 # the future matters slightly less
```

Recall that the scipy optimizer MINIMIZES, so we will make the loss the negative of utility. Before we finally start, we need to make the actual, numerical loss function that performs the substitution:

```sage
# we reverse the k_* variables because it is stored in the dictionary
# in reverse, because we knew the reverse condition first
optim_variables = list(k.values())
optim_variables.reverse()

# this function is also the callback, so it returning
# True terminates execution
def u_total_loss(x):
    # the optimizer's current step
    # we want to take [1:], because we need to keep k1 the same at _k the
    # initial value
    substitution_dict = {key: val for key, val in zip(optim_variables[1:], x)}
    # initial conditions
    substitution_dict[m] = _m
    substitution_dict[y] = _y
    substitution_dict[d] = _d
    substitution_dict[d] = _d
    # we want to keep the initial value k1 the same
    substitution_dict[k[1]] = _k
    try:
        # get value
        content = (-1*u_total).subs(substitution_dict)

        # recall we multiply by -1 because we are MINIMIZING, so the loss is
        # the inverse of the maximization utility target
        return float(content.n()), False
    except:
        return 0, True
```

Finally, we are ready to start. We will now create the other initial conditions k1...k10 and : we will set the initial value to all be 1000 (i.e. do nothing) and have the optimizer work it out from there:

```sage
from scipy.optimize import minimize
target = minimize(lambda x:u_total_loss(x)[0], [_k for _ in range(T-1)], callback=lambda x:u_total_loss(x)[1])
target
```

```text
      fun: -50.71592850322347
 hess_inv: array([[ 9518.97596212,  7617.14636381,  5964.42171873,  4433.87331935,
         4253.91810669,  3528.72923763,  2329.61846616,  1769.85078017,
         1126.51562458],
       [ 7617.14636381, 14333.33933517, 11251.71278723,  8073.31207641,
         7444.53071922,  6481.03236385,  4347.35353474,  2644.39855553,
         1359.86586059],
       [ 5964.42171873, 11251.71278723, 15011.27497355, 10093.46973099,
         9229.06386286,  8371.07459024,  5510.14654004,  3480.74298654,
         1639.19265606],
       [ 4433.87331935,  8073.31207641, 10093.46973099, 12434.28059884,
        11689.33288295, 10711.57399875,  7440.7461982 ,  4810.57094062,
         2255.16306648],
       [ 4253.91810669,  7444.53071922,  9229.06386286, 11689.33288295,
        14840.59602968, 12519.06872583,  8708.9160148 ,  5688.83339388,
         2598.27394651],
       [ 3528.72923763,  6481.03236385,  8371.07459024, 10711.57399875,
        12519.06872583, 14999.44881857, 10630.30739223,  6512.62254338,
         2293.45506703],
       [ 2329.61846616,  4347.35353474,  5510.14654004,  7440.7461982 ,
         8708.9160148 , 10630.30739223, 12147.11811342,  7149.37937935,
         2657.8129831 ],
       [ 1769.85078017,  2644.39855553,  3480.74298654,  4810.57094062,
         5688.83339388,  6512.62254338,  7149.37937935,  7260.90962516,
         2422.66762041],
       [ 1126.51562458,  1359.86586059,  1639.19265606,  2255.16306648,
         2598.27394651,  2293.45506703,  2657.8129831 ,  2422.66762041,
         2911.30717272]])
      jac: array([ 0.00000000e+00, -3.81469727e-06,  2.38418579e-06,  0.00000000e+00,
        8.58306885e-06, -5.24520874e-06,  2.86102295e-06, -1.43051147e-06,
       -5.24520874e-06])
  message: 'Optimization terminated successfully.'
     nfev: 1360
      nit: 130
     njev: 136
   status: 0
  success: True
        x: array([841.22097906, 699.82556541, 573.89912346, 461.63474591,
       361.51493714, 272.10309839, 192.29084196, 120.94057011,
        57.12129925])
```

_Awesome!_ We now can recover \\(c\\) at each point by a nice helpful function:

```sage
c(k0, k1) = k0 - k1/(_m+1)
```

"Consumption is how much we have, minus how much we would be investing"

So, let us translate our list to the actual values consumed:

```sage
capital_over_time = [_k]+target.x.tolist() # we need to add the initial condition _k back to the
                                           # inventory list
consumption_over_time = [c(i,j) for i,j in zip(capital_over_time, capital_over_time[1:])]
consumption_over_time
```

```text
[167.107941529699,
 148.324379643989,
 131.608611479784,
 116.835018601197,
 103.699164584812,
 92.1059288329209,
 81.7161261514775,
 72.5477032414004,
 64.3848282779261]
```


## Examples of Output {#examples-of-output}

```sage
_m = 0.01 # 1% period-to-period increase
_k = 1000 # $1000 capital
_y = 0.8 # generally risk averse
_d = 0.9 # the future matters slightly less
```

```text
[167.107941529699,
 148.324379643989,
 131.608611479784,
 116.835018601197,
 103.699164584812,
 92.1059288329209,
 81.7161261514775,
 72.5477032414004,
 64.3848282779261]
```

---

```sage
_m = 0.1 # 1% period-to-period increase
_k = 1000 # $1000 capital
_y = 0.8 # generally risk averse
_d = 0.9 # the future matters slightly less
```

```text
[154.860597149863,
 152.989432556196,
 151.010433069881,
 149.201249715528,
 147.329750167852,
 145.539019666462,
 143.739371599600,
 141.984228587213,
 140.243839963791]
```

---

```sage
_m = 0.01 # 1% period-to-period increase
_k = 1000 # $1000 capital
_y = 0.2 # generally risky
_d = 0.9 # the future matters slightly less
```

```text
[388.525041338376,
 241.124420093987,
 149.632568775223,
 92.8644259086613,
 57.6330459746870,
 35.7667230511026,
 22.1970017374152,
 13.7754327365677,
 8.54930907023498]
```

---

```sage
_m = -0.01 # this is a loosing stock
_k = 1000 # $1000 capital
_y = 0.9 # very safe
_d = 0.9 # the future matters
```

```text
      fun: 0
 hess_inv: array([[1, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 1, 0, 0, 0, 0, 0, 0, 0],
       [0, 0, 1, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 1, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 1, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 1, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 1, 0, 0],
       [0, 0, 0, 0, 0, 0, 0, 1, 0],
       [0, 0, 0, 0, 0, 0, 0, 0, 1]])
      jac: array([0., 0., 0., 0., 0., 0., 0., 0., 0.])
  message: 'Optimization terminated successfully.'
     nfev: 10
      nit: 0
     njev: 1
   status: 0
  success: True
        x: array([1000., 1000., 1000., 1000., 1000., 1000., 1000., 1000., 1000.])
```

Evidently: do nothing if we have a loosing cause.

---

```sage
_m = 1.00 # this is SUPER winning stock
_k = 1000 # $1000 capital
_y = 0.9 # very safe
_d = 0.9 # the future matters
```

```text
[125.667556437602,
 241.474827418105,
 460.068836905327,
 868.972817783791,
 4540.45893314523,
 4219.93058738029,
 3988.05775624984,
 3996.89431939885,
 3615.74982832315]
```

We made so much money that we are spending a lot of it and still spending it.