# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

On my initial pass of this assignment I was less familiar with recurrence relations than I am now

At each step of recursion, we split our array of numbers into three seperate arrays each of size n/3 (with n being number of elements in array at start of call)
If helperSum is called with an array empty array or an array with only 1 element, it returns 0 or the singular value to be added to the sum.
The work done at each level is a simple constant addition
This gives us a recurrence relation of:  
T(n) { 1 if n <= 1, 3T(n/3) + 1 if n > 1

Going another layer deep assuming n > 1 to show behavior:  
T(n) = 3T(n/3) + 1
sub back in for T(n)
T(n) = 3(3T(n/3*3) + 1) + 1
T(n) = 9T(n/9) + 4
(ignore constant factor)
T(n) = 3<sup>i</sup>T(n/3<sup>i</sup>)

Ignoring our constant factor and knowing that our exit/base case of our recursion is 1, we solve for n/3<sup>i</sup> = 1, which gives us a value for i of log<sub>3</sub>n. substitutiong that back in gives us T(n) = 3<sup>log<sub>3</sub>n</sup>, which simplifies to simply n

This gives us our final Time complexity of $\Theta$(n), which makes much more sense. We are performing an amount of addition operations linear to the number of elements put in.
