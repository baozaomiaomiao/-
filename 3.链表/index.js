// 链表节点
class Node {
   constructor(element) {
      // element 保存当前节点数据
      this.element = element;
      // next 指向下一个节点。默认值为null
      this.next = null;
   }
}

// 链表
class LinkedList {
   constructor() {
      // 链表头
      this.head = null;
      // 链表元素的长度
      this.length = 0;
   }

   // 返回链表大小
   size() {
      return this.length;
   }

   // 链表添加加元素
   append(element) {
      const node = new Node(element);
      // 存储节点
      let current = null;
      // 如果是空链表
      if (this.head === null) {
         // 把节点设为链表头
         this.head = node;
      } else {
         // 链表不为空。就从链表头开始遍历。将元素连接在一起
         current = this.head;
         // 最后一个节点的next会指向null,停止循环。
         while (current.next) {
            current = current.next;
         }
         // 将最后一个节点的next指向新的节点。
         current.next = node;
      }
      this.length++;
   }



   // 获取链表头部
   getHead() {
      return this.head;
   }

   // 获取指定位置的节点
   getNode(index) {
      if (index < 0 || index > this.length) return null;

      let current = this.head;
      let nodeIndex = index;
      // 循环使链表不停的往下寻找
      while (nodeIndex > 0) {
         current = current.next;
         nodeIndex--;
      }
      return current;
   }

   // 指定位置添加元素
   insert(position, element) {
      // position === length,在尾节点后面直接添加即可
      if (position === this.length) {
         return this.append(element);
      }
      // 越界处理.直接返回false
      if (position < 0 || position >= this.length) {
         return false;
      } else {
         //实现方法一
         let node = new Node(element);
         if (position === 0) {
            node.next = this.head;
            this.head = node;
         } else {
            // 找到要插入位置的前一个元素(position - 1)的next引用。进行连接
            // 要在中间插入元素，势必会使元素向后移。所以需要保证next能正确连接
            let previous = this.getNode(position - 1);
            node.next = previous.next;
            previous.next = node;
         }
         //    // 实现方法二：不借助其他方法；
         //    let node = new Node(element),
         //       current = this.head,
         //       index = 0,
         //       previous = null;
         //    // 判断是否在链表第一个位置添加
         //    if (position === 0) {
         //       // 链表头指向新的节点
         //       this.head = node;
         //       // 新的链表头的next指向之前的元素
         //       this.head.next = current;
         //    } else {
         //       // 遍历链表。不停的向后移动找到index < position的元素。进行连接
         //       while (index < position) {
         //          previous = current;
         //          current = current.next;
         //          index++;
         //       }
         //       node.next = current;
         //       previous.next = node;
         //    }
         this.length++;
         return true;
      }
   }

   // 删除任意位置元素
   removeAt(position) {
      // 越界处理
      if (position < 0 || position >= this.length) {
         return null;
      } else {
         let current = this.head, //保存对第一个元素的引用 && 担当对所循环链表的当前元素的引用
            index = 0,
            previous = null;
         let deleteNode = null
         // 删除的是头节点
         if (position === 0) {
            deleteNode = this.head;
            // head指向下一个节点
            this.head = this.head.next;
         } else {
            while (index < position) {
               previous = current;
               //
               current = current.next;
               index++;
            }
            //使前一个元素的next直接指向被删除元素的下一项。跳过current，从而移除它
            previous.next = current.next;
         }
      }
      this.length--;
      // 返回被删除的元素
      return current.element;
   }

   isEmpty() {
      return !this.length;
   }

   // 转化为字符串
   toString() {
      let current = this.head,
         string = '';
      while (current) {
         string += `${current.element}`;
         current = current.next;
      }
      return string;
   }

   // 获取指定元素下标；
   indexOf(element) {
      let current = this.head,
         index = 0;
      while (current) {
         if (element === current.element) {
            return index;
         }
         index++;
         current = current.next;
      }
      return -1;
   }
}

let a = new LinkedList()
a.append(1)
a.append(2)
a.append(3)
a.insert(1, '11')
console.log(a.getNode(1))
console.log(a.getHead())
