/*
Tags
array | binary-search

Companies
给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
*/
var searchRange = function(nums, target, start = 0) {
	if (!nums.length) return [-1, -1]
	const middle = Math.floor(nums.length / 2);

	if (target === nums[middle]) {
		let left = middle;
		let right = middle;

		while(left > 0 && nums[left - 1] === target) {
			left -= 1;
		}
		while(right < nums.length - 1 && nums[right + 1] === target) {
			right += 1;
		}
		return [start + left, start + right]
	}
	if(target < nums[middle]) {
		return searchRange(nums.slice(0, middle), target, start)
	}
	return searchRange(nums.slice(middle + 1), target, start + middle + 1)
};