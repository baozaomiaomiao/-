interface IQueue<T> {
   enqueue(ele): void;
   dequeue(): T;
   front(): T;
   isEmpty(): boolean;
   size(): number;
   print(): void;
}

class TSQueue<T> implements IQueue<T> {
   private queue: T[];
   // 入列
   enqueue(ele): void {
      if (ele === undefined) {
         throw new Error('Undefined is not a valid value');
      }
      this.queue.push(ele);
   }

   // 出列
   dequeue(): T {
      if (this.isEmpty()) {
         throw new SyntaxError('Queue is empty');
      }
      return this.queue.shift();
   }

   // 查看队列第一个元素
   front(): T {
      if (this.isEmpty()) {
         throw new SyntaxError('Queue is empty');
      }
      return this.queue[0];
   }

   // 查看队列是否为空
   isEmpty(): boolean {
      return this.queue.length === 0;
   }

   // 查看队列大小
   size(): number {
      return this.queue.length;
   }

   // 打印队列
   print(): void {
      if (this.isEmpty()) {
         throw new SyntaxError('Queue is empty');
      }
      console.log(this.queue.toString());
   }
}