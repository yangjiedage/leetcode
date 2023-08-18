/*
dynamic-programming
给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
*/
var canPartition = function(nums) {
	let sum = 0;
	for(const num of nums) {
		sum += num;
	}

	if (sum % 2 === 1) return false;

	const target = sum / 2;
	const len = nums.length
	const dp = new Array(len + 1).fill(0).map(() => new Array(target + 1).fill(false));
	dp[0][0] = true;

	for (let i = 1; i <= len; i++) {
		for(let j = 0; j <= target; j++) {
			if (nums[i - 1] <= j) {
				dp[i][j] = dp[i - 1][j] || dp[i-1][j - nums[i - 1]]
			} else {
				dp[i][j] = dp[i - 1][j]
			}
		}
	}

	return dp[len][target]
};