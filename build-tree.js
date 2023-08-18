/*
array | tree | depth-first-search

给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
*/
var buildTree = function(preorder, inorder) {
	if (!preorder.length) return null;

	if (!preorder.length === 1) {
		return {
			val: preorder[0].val,
			left: null,
			right: null
		}
	}

	const rootVal = preorder[0];
	let inorderIndex = 0;
	for (let i = 0; i < inorder.length; i++) {
		if (inorder[i] === rootVal) {
			inorderIndex = i;
			break;
		}
	}

	const leftInorder = inorder.slice(0, inorderIndex);
	const rightInorder = inorder.slice(inorderIndex + 1);

	const leftPreorder =  preorder.slice(1, leftInorder.length + 1);
	const rightPreorder = preorder.slice(leftInorder.length + 1);

	return {
		val: rootVal,
		left: buildTree(leftPreorder, leftInorder),
		right: buildTree(rightPreorder, rightInorder)
	}
};