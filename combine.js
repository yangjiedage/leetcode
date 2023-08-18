/*
backtracking

Companies
给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

你可以按 任何顺序 返回答案。
*/
const versionList = versionData.data.map((item) => ({
	value: item
}))
var combine = function(n, k) {
	const result = [];
	const numList = [];
	for (let i = 1; i <= n; i++) {
		numList.push(i);
	}
	function getNum(pos, k, res) {
		if (pos + k === n) {
			result.push([...res, ...numList.slice(pos)])
			return
		}
		if (k === 0) {
			result.push(res);
			return
		}
		getNum(pos + 1, k, res);
		getNum(pos + 1, k - 1, [...res, numList[pos]])
	}
	getNum(0, k, []);
	return result;
};