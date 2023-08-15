/*
hash-table | two-pointers | string | sliding-window
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
*/
var lengthOfLongestSubstring = function(s) {
	if (!s.length ||s.length === 1) return s.length 
	let maxStr = s.charAt(0);
	let end = 0;
	for (let i = 1; i < s.length; i++) {
		// console.log('maxStr', maxStr, end)
		for (let j = i - 1; j >= 0; j--) {
			if (s.charAt(j) === s.charAt(i)) {
				const curStr = s.slice(j + 1, i);
				maxStr = curStr.length >= maxStr.length ? curStr : maxStr;
				end = 1 + j;
				break;
			}

			if (j === end) {
				const curStr = s.slice(end, i + 1);
				maxStr = curStr.length >= maxStr.length ? curStr : maxStr;
				break;
			}
		}
	}
	return maxStr.length
};