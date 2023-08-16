var uniquePathsWithObstacles = function(obstacleGrid) {
	const dp = [];
	const n = obstacleGrid.length;
	const m = obstacleGrid[0].length;
	for(let i = 0; i < n; i++) {
		dp.push(new Array(m).fill(0))
	}
	for (let i = 0; i < n; i++) {
		if (obstacleGrid[i][0] === 1) break;
		dp[i][0] = 1
	}
	for (let i = 0; i < m; i++) {
		if (obstacleGrid[0][i] === 1) break;
		dp[0][i] = 1
	}
	for(let i = 1; i < n; i++) {
		for (let j = 1; j < m; j++) {
			if (obstacleGrid[i][j] === 0) {
				dp[i][j] = dp[i-1][j] + dp[i][j-1]
			}
			
		}
	}
	return dp[n - 1][m - 1]
};