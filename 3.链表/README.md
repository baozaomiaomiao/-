# 链表
* 前提：要存储多个元素，数组（列表）可能是最常用的数据结构。
* 每一种编程语言都有默认实现数组结构, 这种数据结构非常方便，提供了一个便利的 **[ ]** 语法来访问它的元素。
* 但是数组也有很多缺点:
   * 在大多数语言中，数组的大小是固定的，从数组的起点或中间插入或移除元素的成本很高，因为需要移动所有元素。
* 链表: 是**非常重要**的基础数据结构。 
   * 要存储多个元素, 另外一个选择就是使用链表，链表不同于数组, 链表中的元素在内存中不必是连续的空间.
   * 链表的每个元素由一个存储元素本身的节点和一个指向下一个元素的引用(指针或者链接)组成.
   
![示意图](https://github.com/baozaomiaomiao/JavaScript-data-structure/blob/master/imgs/%E9%93%BE%E8%A1%A8%E7%A4%BA%E6%84%8F%E5%9B%BE.png)
* 相对于数组, 链表有一些缺点:
   * 链表访问任何一个位置的元素时, 都需要从头开始访问(无法跳过第一个元素访问任何一个元素).
   * 无法通过下标直接访问某个元素， 需要从头一个个访问
* 链表结构类似于火车: 一列火车是由火车头和一系列车厢组成。每节车厢都相互连接。每节车厢都是链表的元素，车厢间的连接就是指针(引用)。

![示意图](https://github.com/baozaomiaomiao/JavaScript-data-structure/blob/master/imgs/%E9%93%BE%E8%A1%A8-%E7%81%AB%E8%BD%A6.png)
![示意图](https://github.com/baozaomiaomiao/JavaScript-data-structure/blob/master/imgs/%E9%93%BE%E8%A1%A8-%E7%81%AB%E8%BD%A6-%E7%BB%93%E6%9E%84%E7%89%88.png)
-----
### 链表的常见操作
* `append(element)`: 向链表尾部添加一个新的项.
   * 场景一 链表为空。直接将插入的元素设为链表头。如图直接添加一个值为15的节点
   
   ![示意图](https://github.com/baozaomiaomiao/JavaScript-data-structure/blob/master/imgs/%E9%93%BE%E8%A1%A8append.png)
   * 场景二 链表中已经有元素了, 需要向最后的节点的next中添加节点.链表头指向新的节点，新的节点指向null
   ![示意图](D:\学习\JavaScript 数据结构和算法\imgs\链表append2.png)
* `insert(position, element)`: 向链表的特定位置插入一个新的项.
   * 场景一 添加到第一个位置, 表示新添加的节点是头, 就需要将原来的头节点, 作为新节点的next
   ![示意图](D:\学习\JavaScript 数据结构和算法\imgs\链表insert.png)
   * 场景二 如果是添加到其他位置, 我们通过while循环, 一点点向下找. 并且在这个过程中保存上一个节点和下一个节点.找到正确的位置后, 将新节点的next指向下一个节点, 将上一个节点的next指向新的节点.
   ![示意图](D:\学习\JavaScript 数据结构和算法\imgs\链表insert2.png)
* `remove(element)`: 从链表中移除一项.
* `indexOf(element)`: 返回元素在链表中的索引。如果链表中没有该元素则返回-1.
* `removeAt(position)`: 从链表的特定位置移除一项.
   * 移除第一项时, 直接让head指向第二项信息就可以啦
   ![示意图](D:\学习\JavaScript 数据结构和算法\imgs\链表removeAt.png)
   * 移除其他项时。首先, 我们需要通过while循环, 找到正确的位置，找到正确位置后, 就可以直接将上一项的next指向current项的next, 这样中间的项就没有引用指向它, 也就不再存在于链表后, 会面会被回收掉.
   ![示意图](D:\学习\JavaScript 数据结构和算法\imgs\链表removeAt2.png)
* `isEmpty()`: 检查链表是否为空，如果链表里没有任何元素就返回`true`，否则返回`false`.
* `size()`: 返回链表里的元素个数.
* `clear()`: 移除链表里的所有元素.
* `print()`: 打印链表里的元素.
![示意图](https://github.com/baozaomiaomiao/JavaScript-data-structure/imgs/%E6%A0%88.png)
