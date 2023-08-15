/*
string | dynamic-programming

给你一个字符串 s，找到 s 中最长的回文子串。
*/
var longestPalindrome = function(s) {
	if (s.length === 1) return s;

	if (s.length === 2) {
		return s.charAt(0) === s.charAt(1) ? s : s.charAt(0);
	}
	let maxLen = 1;
	let begin = 0;
	const dp = [];
	for(let i = 0; i < s.length; i++) {
		dp.push(new Array(s.length).fill(false));
	}

	for(let i = 0; i < s.length; i++) {
		dp[i][i] = true;
	}

	for(let i = 1; i < s.length; i++) {
		for(let j = i - 1; j >= 0; j--) {
			if(s.charAt(j) === s.charAt(i)) {
				if (j - i < 3) {
					dp[j][i] = true;
				} else {
					dp[j][i] = dp[j + 1][i - 1];
				}
			
				if (dp[j][i] && i - j + 1 > maxLen) {
					maxLen = i - j + 1;
					begin = j
				}
			} 
		}
	}
	return s.substring(begin, begin + maxLen)
};