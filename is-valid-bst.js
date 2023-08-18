/*
tree | depth-first-search
给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

有效 二叉搜索树定义如下：

节点的左子树只包含 小于 当前节点的数。
节点的右子树只包含 大于 当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
*/
var isValidBST = function(root) {
	let max = -Infinity;
	let isValid = true;
	function checkTree(root) {
		if (root.left) {
			checkTree(root.left);
		}
		if (root.val <= max) {
			isValid = false;
		}
		max = Math.max(root.val);
		if (root.right) {
			checkTree(root.right);
		}
	}
	checkTree(root);
	return isValid;
};