/*
linked-list | two-pointers

Companies
给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
*/
var rotateRight = function(head, k) {
	if (!head) return null
	let len = 1;
	let cur = head;
	while(cur.next) {
		len += 1;
		cur = cur.next;
	}

	const countK = len - (k % len);

	let tail = head;
	for(let i = 1; i < countK; i++) {
		tail = tail.next
	}
	cur.next = head;
	head = tail.next;
	tail.next = null;
	return head
};