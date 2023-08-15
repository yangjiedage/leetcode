/*
array | two-pointers
给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

返回这三个数的和。

假定每组输入只存在恰好一个解。
*/
var threeSumClosest = function(nums, target) {
	nums.sort((a, b) => a - b);
	const len = nums.length;
	let result = Infinity;
	for (let i = 0; i < len; i++) {
		if (i > 0 && nums[i - 1] === nums[i]) continue;
		let left = i + 1;
		let right = len - 1;

		while(left < right) {
			const currentResult = nums[i] + nums[left] + nums[right];

			if (currentResult === target) return target;

			if (Math.abs(currentResult - target) < Math.abs(result - target)) {
				result = currentResult;
			}

			if (currentResult > target) {
				let nextRight = right - 1;

				while(left < nextRight && nums[nextRight] === nums[right]) {
					nextRight -= 1
				}
				right = nextRight;
			} else {
				let nextLeft = left + 1;

				while(nextLeft < right && nums[nextLeft] === nums[left]) {
					nextLeft += 1
				}
				left = nextLeft;
			}
		}
	}
	return result;
};