/*
tree | breadth-first-search

给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
*/
var levelOrderBottom = function (root) {
	if (!root) return [];
	let levelStack = [
		[root]
	];
	const result = [];
	while (levelStack.length) {
		const currentLevel = levelStack[levelStack.length - 1];
		if (!currentLevel.length) break;
		const nextLevel = [];
		for (let i = 0; i < currentLevel.length; i++) {
			if (currentLevel[i].left) {
				nextLevel.push(currentLevel[i].left)
			}
			if (currentLevel[i].right) {
				nextLevel.push(currentLevel[i].right)
			}
		}
		levelStack.push(nextLevel);
	}

	while (levelStack.length) {
		const currentLevel = levelStack.pop();
		const currentLevelNodes = [];
		if (!currentLevel.length) continue;
		for (let i = 0; i < currentLevel.length; i++) {
			currentLevelNodes.push(currentLevel[i].val)
		}
		result.push(currentLevelNodes)
	}
	return result;
};
