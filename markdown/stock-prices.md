---

Title: STOCK PRICES

Date: 2016\-11\-3

Author: Tyler

---

You are handed a Back To The Future 2 style book\. Instead of the almanac though, its tomorrows stock results\. For this exercise we are going to work out a way to figure out how to maximize our returns on the following

// Starting Code

stockPricesYesterday = \[10, 7, 5, 8, 11, 9\]

getMaxProfit\(stockPricesYesterday\)

The first version of this code could be something super simple like:

// works here\.\.\.

var getMaxProfit = function\(stockPricesYesterday\)\{

  return Math\.max\(\.\.\.stockPricesYesterday\) \- Math\.min\(\.\.\.stockPricesYesterday\)

\}

var stockPricesYesterday = \[10, 7, 5, 8, 11, 9\];

getMaxProfit\(stockPricesYesterday\)

This of course doesn't solve the problem every time, but it does introduce a cool tool we have, the spread operator\. The spread operator \.\.\. is a way to expand an array or object and pass in each part as a separate item\. Our getMaxProfit function is pretty easy to understand, it takes the largest number of the day, and subtracts the smallest number from it\. In out next example we will be address what to do if the largest number comes BEFORE the smallest number, and there for making it impossible to sell at the highest price, or buy at the lowest\.

