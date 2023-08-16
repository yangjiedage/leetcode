/*
backtracking

Companies
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
*/
var permute = function(nums) {
	const result = [];

	function getSum(rest, res) {
		if (!rest.length) {
			result.push(res);
			return
		}

		for (let i = 0; i < rest.length; i++) {
			getSum([...rest.slice(0, i), ...rest.slice(i+1)], [...res, rest[i]])
		}
	}
	getSum(nums, []);
	return result;
};