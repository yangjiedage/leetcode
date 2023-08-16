var uniquePaths = function(n, m) {
	const dp = [];
	for(let i = 0; i < n; i++) {
		dp.push(new Array(m).fill(1))
	}
	for(let i = 1; i < n; i++) {
		for (let j = 1; j < m; j++) {
			dp[i][j] = dp[i-1][j] + dp[i][j-1]
		}
	}
	return dp[n - 1][m - 1]
};