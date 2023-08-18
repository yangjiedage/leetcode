var numTrees = function (n) {
	const dp = new Array(n).fill(0);
	dp[0] = 1;
	dp[1] = 2;
	for (let i = 2; i < n; i++) {
		for (let j = 0; j <= i; j++) {
			if (j === 0 || j === i) {
				dp[i] += dp[i - 1];
				continue;
			}
			dp[i] = dp[i] + dp[j - 1] * dp[i - j - 1]
		}
	}
	return dp[n - 1]
};