/*
Stock Buy And Sell
Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. 
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]

Output: 5

Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

Note: That buying on day 2 and selling on day 1 is not allowed because you must buy before you sell. */

/* Approach :   let start date be arr[0] and profit =arr[1]-start
                loop linearly  and check if start> arr[i] then start=arr[i];
                if arr[i]-start >profit then update profit arr[i]-start 
                return profit ;
*/

const a = [7, 1, 5, 3, 6, 4];
console.log(stockprofit(a));


function stockprofit(arr) {
  if (arr.length == 1) return 0;  // basic check
  let start = arr[0];            //step 1
  let profit = arr[1] - start; 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < start) start = arr[i];        //step 2
 
    if (arr[i] - start > profit) profit = arr[i] - start;       //step 3
  }
  return profit;
}
