// 练习 使用栈结构实现，将传入的十进制转化为二，八或十六进制

// decNumber: 需要转化的十进制
// base: 对应的进制

let baseConverter = (decNumber, base) => {
   let remStack = new Stack(),  // 需要引入栈结构的代码。此处并没有引入
       // 存储余数 
       rem,
       // 存储转化的结果                    
       baseString = '',
       // 涉及十六进制，对于超出的数字部分需要转化。
       digits = '0123456789ABCDEF';
   
   // 参数小于零停止运算
   while(decNumber > 0) {
      rem = Math.floor(decNumber % base); // 保留整数去除小数部分
      remStack.push(rem); // 压入每一次计算的余数
      decNumber = Math.floor(decNumber / base); // 保留整数进行下一次运算
   }

   while(!remStack.isEmpty()) {
      //digits[remStack.pop()] => 通过取出栈的每一个元素，来做下标取出对应的数字
      // 二进制的余数结果  => [1,0,1,0,0] 只能取前两位 0 | 1，八进制同理
      // 十六进制的余数结果 => [1,11,12,5,0，10，13] 将十进制数字转化为十六进制对应的英文字母
      baseString += digits[remStack.pop()]; 
   }
   //返回字符串拼接的结果
   return baseString; 
}
