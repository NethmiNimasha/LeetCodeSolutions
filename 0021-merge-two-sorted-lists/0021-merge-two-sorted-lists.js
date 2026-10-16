
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    // Create a dummy node
    let dummy = new ListNode(0);
    let current = dummy;

    // Compare both lists while they have nodes
    while (list1 !== null && list2 !== null) {

        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    // Attach the remaining nodes
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // Return the merged list
    return dummy.next;
};
