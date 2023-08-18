/*
tree | breadth-first-search
给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
*/
var levelOrder = function(root) {
	if (!root) return [];
	let levelStack = [[root]];
	const result = [];
	while(levelStack.length) {
		const currentLevel = levelStack.pop();
		if (!currentLevel.length) break;
		const currentLevelNodes = [];
		const nextLevel = [];
		for (let i = 0; i < currentLevel.length; i++) {
			currentLevelNodes.push(currentLevel[i].val)
			if (currentLevel[i].left) {
				nextLevel.push(currentLevel[i].left)
			}
			if (currentLevel[i].right){
				nextLevel.push(currentLevel[i].right)
			}
		}
		levelStack.push(nextLevel);
		result.push(currentLevelNodes);
	}
	return result;
};