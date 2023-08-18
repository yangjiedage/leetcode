/*
dynamic-programming | tree

给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。
*/
var generateTrees = function(n) {
	function getTree(start, end) {
		const allTrees = [];
		if (start > end ) return [null];

		for(let i = start; i <= end; i++) {
			const leftTrees = getTree(start, i - 1);
			const rightTrees = getTree(i + 1, end);

			for(const left of leftTrees) {
				for(const right of rightTrees) {
					allTrees.push({
						val: i,
						left,
						right,
					})
				}
			}
		}
		return allTrees;
	}
	return getTree(1, n)
};

console.log(generateTrees(5).length)