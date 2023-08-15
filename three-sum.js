/* 
array | two-pointers
给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

你返回所有和为 0 且不重复的三元组。
*/
var threeSum = function(nums) {
	nums.sort((a, b) => a - b);
	const result = [];
	const len = nums.length;
	for (let i = 0; i < len; i++) {
		if (i > 0 && nums[i - 1] === nums[i]) continue;

		const target = -nums[i];
		let right = len  - 1;

		for (let left = i + 1; left < len; left++) {
			if (left > i + 1 && nums[left] === nums[left  - 1]) continue;

			// 如果大于target，右指针左移，这样加起来的数就会变小
			while(right > left && nums[right] + nums[left] > target){
				right -= 1;
			}

			if (right === left) break;
			if (nums[right] + nums[left] === target) {
				result.push([nums[i], nums[left], nums[right]])
			}
		}
	}
	return result;
};
