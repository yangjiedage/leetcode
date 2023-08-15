/*
Tags
string | backtracking

Companies
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
*/
var generateParenthesis = function(n) {
	const result = [];
	function getBrace(braces, left, right) {
		// console.log(braces, left, right)
		if (braces.length === 2 * n) {
			result.push(braces.join(''))
			return;
		}

		if (left < n) {
			braces.push('(');
			getBrace(braces, left + 1, right);
			braces.pop();
		}

		if (left > right) {
			braces.push(')');
			getBrace(braces, left, right + 1);
			braces.pop();
		}
	}
	getBrace([], 0, 0);
	return result;
};