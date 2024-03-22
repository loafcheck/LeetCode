var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        let currentPrice = prices[i];
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        } else {
            let potentialProfit = currentPrice - minPrice;
            if (potentialProfit > maxProfit) {
                maxProfit = potentialProfit;
            }
        }
    }
    
    return maxProfit;
};

console.log(maxProfit([7,6,4,3,1])); // Output: 0
