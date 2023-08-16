/*
backtracking

Companies
给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
*/
var permuteUnique = function(nums) {
	const result = [];
	nums.sort((a, b) => a - b)
	function getSum(rest, res) {
		if (!rest.length) {
			result.push(res);
			return
		}

		for (let i = 0; i < rest.length; i++) {
			if (i > 0 && rest[i] === rest[i - 1]) continue;
	
			getSum([...rest.slice(0, i), ...rest.slice(i+1)], [...res, rest[i]])
		}
	}
	getSum(nums, []);
	return result
};