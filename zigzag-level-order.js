var zigzagLevelOrder = function(root) {
	if (!root) return [];
	let level = 1;
	let levelStack = [[root]];
	const result = [];
	while(levelStack.length) {
		const cureentLevel = levelStack.pop();
		if (!cureentLevel.length) break;
		const cureentLevelNodes = [];
		const nextLevel = [];

		if (level % 2) {
			for (let i = 0; i < cureentLevel.length; i++) {
				cureentLevelNodes.push(cureentLevel[i].val)
			}
		} else {
			for (let i = cureentLevel.length - 1; i >= 0 ; i--) {
				cureentLevelNodes.push(cureentLevel[i].val)
			}
		}
		for (let i = 0; i < cureentLevel.length; i++) {
			if (cureentLevel[i].left) {
				nextLevel.push(cureentLevel[i].left)
			}
			if (cureentLevel[i].right){
				nextLevel.push(cureentLevel[i].right)
			}
		}
		level += 1;
		levelStack.push(nextLevel);
		result.push(cureentLevelNodes);
	}
	return result;
};