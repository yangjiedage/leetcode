/*
backtracking

给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
*/
var partition = function(s) {
	const len = s.length;
	const dp = new Array(len).fill(0).map(() => new Array(len).fill(true));
	
	for (let i = len - 1; i >= 0; i--) {
		for (let j = i + 1; j < len; j++) {
			dp[i][j] = (s[i] === s[j]) && dp[i + 1][j - 1];
		}
	}
	const result = [];
	const ans = [];

	function dfs(i) {
		if (i === len) {
			result.push(ans.slice());
			return;
		}

		for (let j= i; j < len; j++) {
			if (dp[i][j]) {
				ans.push(s.slice(i, j + 1));
				dfs(j + 1);
				ans.pop()
			}
		}
	}
	// console.log(dp);
	dfs(0);
	return result;
};