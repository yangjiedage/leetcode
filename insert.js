/*
array | sort

Companies
给你一个 无重叠的 ，按照区间起始端点排序的区间列表。

在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
*/
var insert = function(intervals, newInterval) {
	if (!intervals.length) return [newInterval];
	for(let i = 0; i < intervals.length; i++) {
		if (i === 0 && intervals[i][0] > newInterval[1]) {
			return [newInterval, ...intervals]
		} else if (i > 0 && intervals[i - 1][1] < newInterval[0] && intervals[i][0] > newInterval[1]) {
			return [...intervals.slice(0, i), newInterval, ...intervals.slice(i)];
		}
		if (intervals[i][1] < newInterval[0]) {
			continue;
		};
		const cur = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
		const start = i;
		while(i < intervals.length - 1 && newInterval[1] >= intervals[i + 1][0]) {
			cur[1] = Math.max(cur[1], intervals[i + 1][1]);
			i += 1
		}
		return [...intervals.slice(0, start), cur, ...intervals.slice(i + 1)]
	}
	if (intervals[intervals.length - 1][1] < newInterval[0]) {
		return [...intervals, newInterval]
	} 
};