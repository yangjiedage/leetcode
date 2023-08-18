/*
binary-search | dynamic-programming
给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
*/
var lengthOfLIS = function(nums) {
	let max = 1;
	const dp = new Array(nums.length).fill(1)
	for(let i = 1; i < nums.length; i++) {
		for(let j = 0; j < i; j++ ) {
			if (nums[j] < nums[i]) {
				dp[i] = Math.max(dp[i], dp[j] + 1);
				max = Math.max(dp[i], max)
			}
		}
	}
	return max
};