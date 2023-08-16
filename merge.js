/*
array | sort

Companies
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
*/
var merge = function(intervals) {
	const result = [];
	let cur = []
	intervals.sort((a, b) => a[0] - b[0]);
	for(let i = 0; i < intervals.length; i++) {
		if (i === 0) {
			cur = intervals[0]
			continue;
		}

		if (intervals[i][0] <= cur[1]) {
			cur[1] = Math.max(intervals[i][1], cur[1])
		} else {
			result.push(cur);
			cur = intervals[i]
		}
	}
	return [...result, cur]
};