// 逆波兰表达式
// 逆波兰表达式又叫做后缀表达式。在通常的表达式中，二元运算符总是置于与之相关的两个运算对象之间，
// 这种表示法也称为中缀表示。波兰逻辑学家J.Lukasiewicz于1929年提出了另一种表示表达式的方法，
// 按此方法，每一运算符都置于其运算对象之后，故称为后缀表示。
// 1 + 1 === 中缀表达式。运算符在两个数值中间
// 1,1,+  === 就是后缀表达式。
// a+b ---> a,b,+
// a+(b-c) ---> a,b,c,-,+

function cale_exp(exp) {
   let stack = new Stack();
   for (let i = 0; i < exp.length; i++) {
      let item = exp[i]
      // 寻找运算符号
      if (['+', '-', '*', '/'].indexOf(item) >= 0) {
         let value_1 = stack.pop(),
            value_2 = stack.pop(),
            // 将栈顶前两个元素拼接成字符串运算表达式。
            exp_str = value_2 + item + value_1,
            // 使用 eval() 计算表达式；
            res = eval(exp_str);
         // 计算结果压入栈中
         stack.push(res);
      } else {
         stack.push(item);
      }
   }
   // 错误处理
   if(stack.isEmpty()) return false;

   return stack.pop()
}

console.log(cale_exp(['1','2','3','*','-']))
console.log(cale_exp(['6','2','3','*','*']))
console.log(cale_exp([1]))