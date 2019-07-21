const _stack = Symbol('stack');
// 创建一个为 栈类
class Stack {
   constructor() {
      // 模仿私有属性
      this[_stack] = [];
   }
   // 添加元素。将元素压入到栈
   push(element) {
      // 借用JS数组的push
      this[_stack].push(element);
      
      // 自己实现
      //this[_stack][this[_stack].length] = element;
   }

   // 移除栈顶元素，并返回
   pop() {
      return this[_stack].pop();

      // if(this[_stack].length === 0 ) return undefined;
      // let result = this[_stack][this[_stack].length - 1];
      // this[_stack].length -= 1; 
      // return result;
   }

   // 查看栈顶元素
   peek() {
      return this[_stack][this[_stack].length - 1]
   }

   // 查看栈是否为空
   isEmpty() {
      return this[_stack].length === 0
   }

   // 清空栈
   clear() {
      this[_stack] = []
   }

   // 获取栈的大小
   size() {
      return this[_stack].length
   }
}


// ------------------------------------------------------------

// 练习 使用栈结构实现，十进制转化为二进制   


let divBy2 = (number) => {
   let numStack = new Stack(),  
       remainder,   //保存余数
       stringStack = '' // 获取二进制结果

   while (number > 0) {
      remainder = number % 2 // 余数 0 | 1
      numStack.push(remainder)
      number = Math.floor(number / 2)  // 向下取整，方便计算 25/2 = 12.5 => 12 / 2 .....
   }    

   while(!numStack.isEmpty()) {
      stringStack += numStack.pop()        
   }

   return stringStack
}

