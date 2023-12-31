/*
	backtracking
	给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
	给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
*/

var letterCombinations = function(digits) {
	if (!digits.length) return [];
	const numberToLetter = {
		'2': 'abc',
		'3': 'def',
		'4': 'ghi',
		'5': 'jkl',
		'6': 'mno',
		'7': 'pqrs',
		'8': 'tuv',
		'9': 'wxyz'
	}

	const result = [];

	function getStr(digits, prevStr) {
		if (!digits.length) {
			result.push(prevStr);
			return;
		}
		const letters = numberToLetter[digits.charAt(0)];
		for (let j = 0; j < letters.length; j++) {
			getStr(`${digits.substring(1)}`, `${prevStr}${letters.charAt(j)}`)
		}	
	}
	getStr(digits, '');
	return result
};