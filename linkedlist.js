class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
a.next = b;
b.next = c;
c.next = d;
const reverseList = (curr,prev = null) =>{
    if(curr === null){
      return prev;
    }
    next = curr.next;
    curr.next = prev;
    return reverseList(next,curr);
  }
const print = (head) => {
    if (head === null) return;
    console.log(head.val);
    print(head.next);
}
print(a);
const newHead  = reverseList(b)
console.log('-');
print(newHead);