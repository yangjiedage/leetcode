/*
array | backtracking

Companies
给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用 一次 。
*/
var combinationSum2 = function(candidates, target) {
	candidates.sort((a,b) => a - b);
	const result = []
	function getSum(pos, rest, res) {
		if (rest === 0) {
			result.push(res);
			return;
		}

		for (let i = pos; i < candidates.length; i++) {
			if(rest -  candidates[i] < 0) {
				break;
			}

			if (i > pos && candidates[i] === candidates[i-1]) continue;

			getSum(i + 1, rest - candidates[i], [...res, candidates[i]]);
		}
	}
	getSum(0, target, []);
	return result;
};