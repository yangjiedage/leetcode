/*
linked-list | two-pointers

给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
*/
var removeNthFromEnd = function(head, n) {
	let len = 0;
	let cur = head;
	while(cur) {
		cur = cur.next;
		len += 1;
	}
	const deleteN = len - n + 1;
	cur = head;
	if (deleteN === 1) {
		cur = cur.next;
		head.next = null;
		return cur
	}
	let count = 1;
	while(cur) {
		if (count + 1 === deleteN) {
			cur.next = cur.next.next
			return head
		}
		count += 1;
		cur = cur.next
	}
};