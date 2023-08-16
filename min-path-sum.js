var minPathSum = function(grid) {
	const dp = [];
	const n = grid.length;
	const m = grid[0].length;
	for(let i = 0; i < n; i++) {
		dp.push(new Array(m).fill(0))
	}
	dp[0][0] = grid[0][0]
	for (let i = 1; i < n; i++) {
		dp[i][0] = dp[i-1][0] + grid[i][0]
	}
	for (let i = 1; i < m; i++) {
		dp[0][i] = dp[0][i-1] + grid[0][i]
	}
	for(let i = 1; i < n; i++) {
		for (let j = 1; j < m; j++) {
			dp[i][j] = Math.min(dp[i - 1][j] + grid[i][j], dp[i][j-1] + grid[i][j])
		}
	}
	return dp[n - 1][m - 1]
};