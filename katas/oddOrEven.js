/* Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).*/

const oddOrEven = array => array.reduce((a,b)=> a + b, 0)%2 ? "odd" : "even" /*I have used 
REDUCE, to sum all the numbers of the array, and %2 to check if the nunber was odd or even.
1 = true and 0 = false*/

//sorry, I'm learning english