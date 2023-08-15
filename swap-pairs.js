/*
Tags
linked-list

Companies
给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
*/
var swapPairs = function(head) {
	if (!head || !head.next) return head;

	let cur = head;
	let next = cur.next;
	head = next;
	const nextNext = next.next;
	next.next = cur
	cur.next = nextNext;
	next = cur.next;
	while(next && next.next) {
		const prev = cur;
		cur = next;
		next = next.next;
		const nextNext = next.next;
		next.next = cur;
		prev.next = next;
		cur.next = nextNext
		next = cur.next
	}
	return head;
};