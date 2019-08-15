// 哈希表
class HashTable {
   constructor() {
      this.table = [];
   }

   // 普通的散列函数
   static loseloseHashCode(key) {
      let hash = 0;
      for(let codePoint of key) {
         // 通过ascii码表转换字母为数字
         hash = codePoint.charCodeAt();
      }
      // 得到更小的值,返回的值称为散列值
      return hash % 37;
   }

   // 社区推崇版的散列函数。前人总结的尽可能的少造成地址冲突。
   // 注意散列函数不论怎样都是有几率造成地址冲突的
   // 这里面的数字都是实验总结。
   static djb2HashCode(key) {
      let hash = 5381;
      for(let codePoint of key) {
         hash += hash * 33 + codePoint.charCodeAt();
      }
      return hash % 1013;
   }

   // 添加元素
   // key: 属性 例如: Jobs
   // value: 属性值 例如邮箱：jobs@qq.com
   put(key, value) {
      // 获取key的散列值
      const position = HashTable.loseloseHashCode(key);
      console.log(`${position} - ${key}`);
      // 将散列值作为属性，并保存属性值。
      this.table[position] = value;
   }

   // 获取属性值
   get(key) {
      return this.table[HashTable.loseloseHashCode(key)];
   }

   // 删除元素
   remove(key) {
      this.table[HashTable.loseloseHashCode(key)] = undefined;
   }

   //获取哈希表
   getItem() {
      return this.table;
   }
}
// let hash = new HashTable()
// console.log(hash.put('Jobs','jobs@qq.com' )) // 28 - Jobs
// console.log(hash.put('John','John@qq.com' )) // 29 - John
// console.log(hash.getItem())
// console.log(hash.get('Jobs'))
// console.log(hash.remove('Jobs'))
// console.log(hash.getItem())

//------------------------------------------------------------------------
// 解决地址冲突
// 第一种： 分离链接法
// 借助链表类
class HashTable_L {
   constructor() {
      this.table = [];
   }

   static loseloseHashCode(key) {
      let hash = 0;
      for (let codePoint of key) {
         hash += codePoint.charCodeAt();
      }
      return hash % 37;
   }
   // 改造put方法。
   put(key, value) {
      const position = HashTable_L.loseloseHashCode(key);
      // 每一个地址都使用一个链表结构储存属性。
      if (this.table[position] === undefined) {
         this.table[position] = new LinkedList();
      }
      // 使用链表储存数据。如果地址冲突后续元素会追加到链表中。
      // key也要保存。同一个地址可能有多个元素。需要使用key来判断元素。
      this.table[position].append({ key, value });
   }

   get(key) {
      const position = HashTable_L.loseloseHashCode(key);
      // 判断地址是否为空。
      if (this.table[position] === undefined) return undefined
      const getElementValue = node => {
         // 第二步：判断链表元素是否存在。这也是递归的终止条件。
         if (!node && !node.element) return undefined;
         // 第三步：判断，当前链表元素的key是否与传入的参数相等
         if (Object.is(node.element.key, key)) {
            return node.element.value;
         } else {
            // 第四步： 不相等 递归一直往下查找。
            return getElementValue(node.next);
         }
      }
      // 第一步：获取链表的第一个元素。
      return getElementValue(this.table[position].head);
   }

   // 同上。大同小异 也采用递归删除元素。
   remove(key) {
      const position = HashTable_L.loseloseHashCode(key);
      if (this.table[position] === undefined) return undefined
      const getElementValue = node => {
         if (!node && !node.element) return false;
         if (Object.is(node.element.key, key)) {
            this.table[position].remove(node.element);
            // 判断链表后续是否还有元素。
            if (this.table[position].isEmpty()) {
               this.table[position] = undefined;
            }
            return true;
         } else {
            return getElementValue(node.next);
         }
      }
      return getElementValue(this.table[position].head);
   }
}

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
      // 越界处理.直接返回false
      if (position < 0 || position > this.length) {
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
         this.length++;
         return true;
      }
   }

   // 移除指定位置元素
   removeAt(position) {
      // 检查越界值
      if (position < 0 || position >= this.length) {
         return null;
      }

      let current = this.head;
      let previous = null;
      let index = 0;
      if (position === 0) {
         this.head = current.next;
      } else {
         while (index < position) {
            previous = current;
            current = current.next;
            index++;
         }
         previous.next = current.next;
      }
      this.length--;
      return current.element;
   }

   isEmpty() {
      return !this.length;
   }

   // 转化为字符串
   toString() {
      let current = this.head,
         string = "";
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

   // 删除元素
   remove(element) {
      return this.removeAt(this.indexOf(element));
   }
}

let hash = new HashTable_L()
console.log(hash.put('Ana', 'jobs@qq.com')) // 13 - Ana
console.log(hash.put('Donnie', 'John@qq.com')) // 13 - Donnie
// 储存位置在第13项。由于是链表结构所以直接调用链表的方法。
console.log(hash.table[13].getHead())
