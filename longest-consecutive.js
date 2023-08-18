/*
array | union-find
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
*/
var longestConsecutive = function(nums) {
	const obj = new Set(nums)
	// console.log(obj);
	let max = 0;

	for(const num of nums) {
		if (!obj.has(num-1)) {
			let len = 0;
			let curr = num;
			while(obj.has(curr)) {
				len += 1;
				curr += 1
			}
			max = Math.max(len, max)
		}
	}
	// console.log(max)
	return max
};