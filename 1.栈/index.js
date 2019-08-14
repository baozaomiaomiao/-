<<<<<<< HEAD
const _stack = Symbol('stack');
// 创建一个为 栈类
class Stack {
   constructor() {
      // 模仿私有属性
      this[_stack] = [];
   }
   // 添加元素。将元素压入到栈
   push(element) {
      // 判断是否传入参数
      if(element === undefined) {
         throw new Error('Undefined is not a valid value');
      }
      // 借用JS数组的push, JS是门高级语言封装好了一系列方法
      this[_stack].push(element);
      
      // 自己实现
      //this[_stack][this[_stack].length] = element;
   }

   // 移除栈顶元素，并返回
   pop() {
      // 做一下代码健壮性处理。栈为空时 不可以取不出元素。
      if(this.isEmpty()) {
         throw new SyntaxError('Stack is empty, please add elements using push()');
      }
      return this[_stack].pop();

      // if(this[_stack].length === 0 ) return undefined;
      // let result = this[_stack][this[_stack].length - 1];
      // this[_stack].length -= 1; 
      // return result;
   }

   // 查看栈顶元素
   peek() {
      if(this.isEmpty()) {
         throw new SyntaxError('stack is empty');
      }
      return this[_stack][this[_stack].length - 1];
   }

   // 查看栈是否为空
   isEmpty() {
      return this[_stack].length === 0;
   }

   // 清空栈
   clear() {
      this[_stack] = [];
   }

   // 获取栈的大小
   size() {
      return this[_stack].length;
   }
   
   // 打印栈数据
   print() {
      if(this.isEmpty()) {
         throw new SyntaxError('The stack is empty');
      }
      console.log(this[_stack].toString());
   }
}
=======
const _stack = Symbol('stack');
// 创建一个为 栈类
class Stack {
   constructor() {
      // 模仿私有属性
      this[_stack] = [];
   }
   // 添加元素。将元素压入到栈
   push(element) {
      // 判断是否传入参数
      if(element === undefined) {
         throw new Error('Undefined is not a valid value');
      }
      // 借用JS数组的push, JS是门高级语言封装好了一系列方法
      this[_stack].push(element);
      
      // 自己实现
      //this[_stack][this[_stack].length] = element;
   }

   // 移除栈顶元素，并返回
   pop() {
      // 做一下代码健壮性处理。栈为空时 不可以取不出元素。
      if(this.isEmpty()) {
         throw new SyntaxError('Stack is empty, please add elements using push()');
      }
      return this[_stack].pop();

      // if(this[_stack].length === 0 ) return undefined;
      // let result = this[_stack][this[_stack].length - 1];
      // this[_stack].length -= 1; 
      // return result;
   }

   // 查看栈顶元素
   peek() {
      if(this.isEmpty()) {
         throw new SyntaxError('stack is empty');
      }
      return this[_stack][this[_stack].length - 1];
   }

   // 查看栈是否为空
   isEmpty() {
      return this[_stack].length === 0;
   }

   // 清空栈
   clear() {
      this[_stack] = [];
   }

   // 获取栈的大小
   size() {
      return this[_stack].length;
   }
   
   // 打印栈数据
   print() {
      if(this.isEmpty()) {
         throw new SyntaxError('The stack is empty');
      }
      console.log(this[_stack].toString());
   }
}
>>>>>>> afb56d3b14fe2e7702d7a4a3ead718f78ca53552
