var maxProfit = function(prices) {
	let min = prices[0];
	let profit = 0
	for (let i = 1; i < prices.length; i++) {
		while(prices[i] > prices[i - 1]) {
			i += 1;
		}
		// console.log(i, min, profit)
		if (prices[i - 1] > min) {
			profit = profit + prices[i - 1] - min;
		}
		min = prices[i]
	}
	return profit
};