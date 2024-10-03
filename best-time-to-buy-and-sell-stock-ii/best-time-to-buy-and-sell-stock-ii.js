/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = [];
    
    for ( let i = 0 ; i < prices.length ; i++) {
        if(prices[i] < prices[i+1]) {
            profit.push(prices[i+1] - prices[i]);
        }
    }
 
    let maxP = profit.reduce((accumulate, current) => accumulate + current, 0);
    return maxP;
};