const _queue = Symbol('queue');

class Queue {
   constructor() {
      // 模仿私有属性
      this[_queue] = [];
   }

   // 入列
   enqueue(ele) {
      if (ele === undefined) {
         throw new Error('Undefined is not a valid value');
      }
      this[_queue].push(ele);
   }

   // 出列
   dequeue() {
      if (this.isEmpty()) {
         throw new SyntaxError('Queue is empty, please add elements using enqueue()');
      }
      return this[_queue].shift();
   }

   // 查看队列第一个元素
   front() {
      if (this.isEmpty()) {
         throw new SyntaxError('Queue is empty');
      }
      return this[_queue][0];
   }

   // 查看队列是否为空
   isEmpty() {
      return this[_queue].length === 0;
   }

   // 查看队列大小
   size() {
      return this[_queue].length;
   }

   // 打印队列
   print() {
      if (this.isEmpty()) {
         throw new SyntaxError('Queue is empty');
      }
      console.log(this[_queue].toString());
   }
}


// 练习题
//-----------------------------------------------------
// 击鼓传花练习 
// 每传三次踢出，第三次停留的玩家。直到只有一名玩家停止

// 玩家列表
// let player = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// 游戏规则
// let num = 3

let chuanhua = (player, num = 3) => {
   let queue = new Queue(),
      numPlayer; // 用于调试，保存每一次移除的玩家

   // 将玩家依次入列
   for (let i = 0; i < player.length; i++) {
      queue.enqueue(player[i]);
   }

   while (queue.size() > 1) {
      // 每循环三次，踢出第三次点到的玩家
      for (let j = 0; j < num - 1; j++) {
         queue.enqueue(queue.dequeue());
      }
      numPlayer = queue.dequeue();
      console.log('淘汰的玩家' + numPlayer);
   }
   return queue.dequeue();
}

// ----------------------------------------------------------------------------------------------
// 约瑟夫环。 每遍历三个元素就将第三个元素删除。其余元素放入尾部，直到剩下最后一个元素

// 实验用的数据。
let arr = []
for (let i = 0; i < 100; i++) {
   arr.push(i)
}

function joseph_Ring(arr_list) {
   let queue = new Queue(),
      // 计数器
      index = 0;
   // 将参数依次填入到队列
   for (let i = 0; i < arr_list.length; i++) {
      queue.enqueue(arr_list[i]);
   }
   // 队列里的元素，不是唯一的就一直循环，删除元素
   while (queue.size() != 1) {
      let a = queue.dequeue()
      index ++;
      // 每隔两个删一个。不满足条件的元素继续放入尾部。
      if (index % 3 !== 0) {
         queue.enqueue(a)
      }
   }
   console.log(queue.print())
   return queue.front()

}
