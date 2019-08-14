class PriorityQueue {

   constructor() {
      this.items = [];
   }

   // 添加操作进行一些修改，
   // element：添加的元素。  priority：元素所需的优先级标识
   // 例如 '小黑', 1  
   enqueue(element, priority) {
      const queueElement = { element, priority }
      // 检测对垒是否为空
      if (this.isEmpty()) {
         // 为空，就直接添加元素
         this.items.push(queueElement)
      } else {
         // 不为空， 就比较当前元素和队列以存在元素的优先级
         const preIndex = this.items.findIndex((item) => queueElement.priority < item.priority)
         // 已存在元素的优先级小于，被添加元素，就是将被添加元素插入到以存在元素前面。
         if (preIndex > -1) {
            this.items.splice(preIndex, 0, queueElement)
         } else {
            // 优先级小于已存在元素，直接将元素添加到队列尾部    
            this.items.push(queueElement)
         }
      }
   }

   dequeue() {
      return this.items.shift();
   }

   front() {
      return this.items[0];
   }

   clear() {
      this.items = [];
   }

   size() {
      return this.items.length;
   }

   isEmpty() {
      return !this.items.length;
   }

   print() {
      console.log(this.items);
   }
}

let queue = new PriorityQueue();
queue.enqueue('小黑', 1);
queue.enqueue('小红', 4);
queue.enqueue('小黄', 3);
queue.enqueue('小白', 1);
console.log(queue);

