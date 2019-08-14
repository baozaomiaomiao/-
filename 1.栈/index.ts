<<<<<<< HEAD
interface IStack<T> {
   push(element: T): void;
   pop(): T;
   peek(): T;
   isEmpty(): boolean;
   clear(): void;
   size(): number;
   print(): void;
}

// 创建一个为 栈类。约束栈里面元素的类型
class _Stack<T> implements IStack<T>{
   // 私有属性
   private stack: T[];

   // 添加元素。将元素压入到栈
   push(element: T): void {
      this.stack.push(element);
   }

   // 移除栈顶元素，并返回
   pop(): T {
      if (this.isEmpty()) {
         throw new SyntaxError('Stack is empty, please add elements using push()');
      }
      return this.stack.pop();
   }

   // 查看栈顶元素
   peek(): T {
      if (this.isEmpty()) {
         throw new SyntaxError('The stack is empty');
      }
      return this.stack[this.stack.length - 1];
   }

   // 查看栈是否为空
   isEmpty(): boolean {
      return this.stack.length === 0;
   }

   // 清空栈
   clear(): void {
      this.stack = [];
   }

   // 获取栈的大小
   size(): number {
      return this.stack.length;
   }

   // 打印栈数据
   print(): void {
      if (this.isEmpty()) {
         throw new SyntaxError('The stack is empty');
      }
      console.log(this.stack.toString());
   }
}


=======
// 创建一个为 栈类
class _Stack {
   // 私有属性
   private stack = [];
   
   // 添加元素。将元素压入到栈
   push(element): void {
      if(element === undefined) {
         throw new Error('Undefined is not a valid value');
      }
      this.stack.push(element);
   }

   // 移除栈顶元素，并返回
   pop(): any {
      if(this.isEmpty()) {
         throw new SyntaxError('Stack is empty, please add elements using push()');
      }
      return this.stack.pop();
   }
   
   // 查看栈顶元素
   peek(): any {
      if(this.isEmpty()) {
         throw new SyntaxError('The stack is empty');
      }
      return this.stack[this.stack.length - 1];
   }
   
   // 查看栈是否为空
   isEmpty(): boolean {
      return this.stack.length === 0;
   }

   // 清空栈
   clear(): void {
      this.stack = [];
   }

   // 获取栈的大小
   size(): number {
      return this.stack.length;
   }

   // 打印栈数据
   print(): void {
      if(this.isEmpty()) {
         throw  new SyntaxError('The stack is empty');
      }
      console.log(this.stack.toString());
   }
}


>>>>>>> afb56d3b14fe2e7702d7a4a3ead718f78ca53552
