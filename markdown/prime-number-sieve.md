---

Title: PRIME NUMBER SIEVE

Date: 2017-1-3

Author: Tyler

---

The goal of this project it to:

1.  Practice math

2.  Build a prime Siev

3.  Entertain me on an airplane

First thing we need to do is build an empty array with a bunch of space.
We will be checking prime numbers up to this point.

var arrbucket = new Array(1000);

After we have that empty array we need to set every value to false,

for(var i = 0; i \< arrbucket.length; i ++){

arrbucket\[i\] = false;

}

We then create an array called *primes* and populate it with the number
1 as our first prime. We then cycle through the arrbucket checking to
see if that value is true of false, if its still false we know its
prime. So as a prime number we push it to the array of primes. After we
have it added to the array of primes we cycle through the bucket
flipping every multiple of that number to true. For more information
about the math behind this check out [the wiki page]{.underline}

var primes = \[1\]

for(var i = 2; i \< arrbucket.length; i++){

if(!arrbucket\[i\]){

primes.push(i)

for(var a = i; a \< arrbucket.length; a = a + i){

arrbucket\[a\] = true

}

}

}

We also need a helper function that checks to see if a item exists in an
array.

var contains = function(n, arr){

for(var i = 0; i \< arr.length; i++){

if(n === arr\[i\]){

return true;

}

}

return false;

}

Finally my favorite part, a function that checks to see if a number is
prime.

isPrime = function(n){

if(contains(n, primes)){

return true;

}else{

return false;

}

}

All togeather it looks like this:

var arrbucket = new Array(1000);

for(var i = 0; i \< arrbucket.length; i ++){

arrbucket\[i\] = false;

}

var primes = \[1\]

for(var i = 2; i \< arrbucket.length; i++){

if(!arrbucket\[i\]){

primes.push(i)

for(var a = i; a \< arrbucket.length; a = a + i){

arrbucket\[a\] = true

}

}

}

var contains = function(n, arr){

for(var i = 0; i \< arr.length; i++){

if(n === arr\[i\]){

return true;

}

}

return false;

}

isPrime = function(n){

if(contains(n, primes)){

return true;

}else{

return false;

}

}
