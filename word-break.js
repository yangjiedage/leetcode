/*
dynamic-programming
给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。
*/
// "aaab"\n["a", "aa", "aaa"]
var wordBreak = function(s, wordDict) {
	const strMap = {};
	function checkS(s) {
		if(s === '') return true;
		if (strMap[s] !== undefined) return strMap[s]
		for(const word of wordDict) {
			const sWord = s.slice(0, word.length);
			if (sWord === word) {
				const nextS = s.slice(word.length);
				strMap[nextS] = checkS(nextS);
				if (strMap[nextS]) return true
			}
		}
		return false
	}
	return checkS(s)

	// 动归解法
	const dp = new Array(s.length + 1).fill(false);

	dp[0] = true;

	for(let i = 1; i <= s.length; i++) {
		for (const word of wordDict) {
			if (i >= word.length && s.slice(i - word.length, i) === word) {
				dp[i] = dp[i] || dp[i - word.length]
			}
		}
	}
	return dp[s.length]
};
