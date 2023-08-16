/*
array | backtracking

Companies
给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 
*/
var combinationSum = function(candidates, target) {
	const result = [];
	function getSum(res, target, idx){
		if (idx === candidates.length) return;
		if (target === 0) {
			result.push(res);
			return
		}

		getSum(res, target, idx + 1);
		if (target - candidates[idx] >= 0) {
			getSum([...res, candidates[idx]], target -candidates[idx], idx)
		}
	}
	getSum([], target, 0);
	return result
};