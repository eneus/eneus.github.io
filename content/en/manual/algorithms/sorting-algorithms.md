---
title: "Sorting Algorithms"
date: 2019-08-23T13:52:36+06:00
type: "manual"
tags: ["algorithms", "Sorting", "Development"]
image: images/manual/sorting-algorithm.png
description : "Sorting Algorithms"
---
A sorting algorithm is an algorithm made up of a series of instructions that takes an array as input, performs specified operations on the array, sometimes called a list, and outputs a sorted array. Sorting algorithms are often taught early in computer science classes as they provide a straightforward way to introduce other key computer science topics like Big-O notation, divide-and-conquer methods, and data structures such as binary trees, and heaps. There are many factors to consider when choosing a sorting algorithm to use.

Contents
Sorting Algorithms
Properties of Sorting Algorithms
Common Sorting Algorithms
Choosing a Sorting Algorithm
See Also
References
Sorting Algorithms
In other words, a sorted array is an array that is in a particular order. For example, $[a, b, c, d]$ is sorted alphabetically, $[1, 2, 3, 4, 5]$ is a list of integers sorted in increasing order, and $[5, 4, 3, 2, 1]$ is a list of integers sorted in decreasing order.

A sorting algorithm takes an array as input and outputs a permutation of that array that is sorted.

There are two broad types of sorting algorithms: integer sorts and comparison sorts.

#### Comparison Sorts

Comparison sorts compare elements at each step of the algorithm to determine if one element should be to the left or right of another element.

Comparison sorts are usually more straightforward to implement than integer sorts, but comparison sorts are limited by a lower bound of O(n \log n)O(nlogn), meaning that, on average, comparison sorts cannot be faster than O(n \log n)O(nlogn). A lower bound for an algorithm is the worst-case running time of the best possible algorithm for a given problem. The "on average" part here is important: there are many algorithms that run in very fast time if the inputted list is already sorted, or has some very particular (and overall unlikely) property. There is only one permutation of a list that is sorted, but n!n! possible lists, so the chances that the input is already sorted is very unlikely, and on average, the list will not be very sorted.

The running time of comparison-based sorting algorithms is bounded by \Omega(n \log n)Ω(nlogn).

A comparison sort can be modeled as a large binary tree called a decision tree where each node represents a single comparison. Because the sorted list is some permutation of the input list, for an input list of length nn, there are n!n! possible permutations of that list. This is a decision tree because each of the n!n! is represented by a leaf, and the path the algorithm must take to get to each leaf is the series of comparisons and outcomes that yield that particular ordering.

At each level of the tree, a comparison is made. Comparisons happen, and we keep traveling down the tree; until the algorithm reaches the leaves of the tree, there will be a leaf for each permutation, so there are n!n! leaves.

Each comparison halves the number of future comparisons the algorithm must do (since if the algorithm selects the right edge out of a node at a given step, it will not search the nodes and paths connected to the left edge). Therefore, the algorithm performs O(\log n!)O(logn!) comparisons. Any binary tree, with height hh, has a number of leaves that is less than or equal to 2^h2 
h
 .

From this,

$2^h \geq n!.$
$2h≥n!$.

Taking the logarithm results in

$h \geq \log(n!).$
$h≥log(n!).$

From Stirling's approximation,

$n! > \left(\frac{n}{e}\right)^n$.

$n!>( e/n ) n$.

Therefore,

$\begin{aligned} h &\geq \log\left(\frac{n}{e}\right)^n = n\log \left(\frac{n}{e}\right) = n\log n- n \log e = \Omega(n\log n). \end{aligned}h ≥ log(e/n)^n = nlog(e/n) = nlogn−nloge =Ω (nlogn)$.
​	
 
### Integer Sorts

Integer sorts are sometimes called counting sorts (though there is a specific integer sort algorithm called counting sort). Integer sorts do not make comparisons, so they are not bounded by $Ω(n\log n)Ω(nlogn)$. Integer sorts determine for each element​ xx how many elements are less than x. If there are 14 elements that are less than x, then x will be placed in the $15^{th}$ slot. This information is used to place each element into the correct slot immediately—no need to rearrange lists.

### Properties of Sorting Algorithms
All sorting algorithms share the goal of outputting a sorted list, but the way that each algorithm goes about this task can vary. When working with any kind of algorithm, it is important to know how fast it runs and in how much space it operates—in other words, its time complexity and space complexity. As shown in the section above, comparison-based sorting algorithms have a time complexity of $Ω(n log n)$, meaning the algorithm can't be faster than $n log n$. However, usually, the running time of algorithms is discussed​ in terms of big O, and not Omega. For example, if an algorithm had a worst-case running time of $O(n log n)$, then it is guaranteed that the algorithm will never be slower than $O(n log n)$, and if an algorithm has an average-case running time of $O(n^2)$, then on average, it will not be slower than $O(n^2)$.

The running time describes how many operations an algorithm must carry out before it completes. The space complexity describes how much space must be allocated to run a particular algorithm. For example, if an algorithm takes in a list of size nn, and for some reason makes a new list of size nn for each element in nn, the algorithm needs $n^2$ space.

