Who's The Customer?
You are waiting in line for the next World Of Warcraft expansion at the locale game store. And you want to know the Gamertag, i.e., the online name of one of the persons waiting in line with you.

You are given a directed graph of Customers, where one Customer has exactly one reference to the next Customer or null if it is the last Customer.
Given such a graph, you need to find the Gamertag of the N'th customer from the right, meaning the int numberFromRight from the last customer in line.

Example
An example of a graph where FindFromRight(ExoticWhale, 3) should return TrainedPony.

ExoticWhale -> TrainedPony -> FlashyRogue -> Herobot -> null

Solution
Implement your solution in the FindFromRight method. If you see // YOUR SOLUTION GOES HERE, you've found the right place 🙂

What you'll be evaluated on
Please note that extra points are given for a solution that allocates as little extra memory and iterates the graph as few times as possible. 
This requirement should not be interpreted in terms of complexity theory but actual iterations and memory usage. 
For instance, is it possible to iterate the graph only once using a constant number of extra pointers? Remember to leave comments in your code to let us know about your thought process.
