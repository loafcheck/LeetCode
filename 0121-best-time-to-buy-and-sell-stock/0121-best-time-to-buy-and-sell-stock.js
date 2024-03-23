var maxProfit = function(prices) {
    
    let minimumPrice = prices[0]
    let maxProfit = 0;
    
    for(let i = 1 ; i < prices.length ; i++) {
        if(prices[i] < minimumPrice) {
            minimumPrice = prices[i];
        } else {
            let potentialProfit = prices[i] - minimumPrice
            if(potentialProfit > maxProfit) {
             maxProfit = potentialProfit;
            }
           
        }
    }
    return maxProfit;
};
