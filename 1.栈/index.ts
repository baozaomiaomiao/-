// 创建一个为 栈类
class _Stack {
   // 私有属性
   private stack = [];
   
   // 添加元素。将元素压入到栈
   push(element): void {
      // this.stack[this.stack.length] = element;
      this.stack.push(element)
   }

   // 移除栈顶元素，并返回
   pop(): any {
      // if(this.stack.length === 0 ) return undefined;
      // let result = this.stack[this.stack.length - 1];
      // this.stack.length -= 1; 
      // return result;

      return this.stack.pop()
   }
   
   // 查看栈顶元素
   peek(): any {
      return this.stack[this.stack.length - 1]
   }
   
   // 查看栈是否为空
   isEmpty(): boolean {
      return this.stack.length === 0
   }

   // 清空栈
   clear(): void {
      this.stack = []
   }

   // 获取栈的大小
   size(): number {
      return this.stack.length
   }
}


