// 传入一个字符串判断括号是否成对出现  ()合法  ( 不合法 
// 例： ()sd(fg(fw))(d)  合法
// ((ll)(w)g()  不合法 

//判断字符串括号是否合法
const pairedParenthesis = (str) => {
   const stack = new Stack();
   
   for(let i = 0; i < str.length; i++) {
      let item = str[i];
      if(item === '(') {
         // 找到'(' 压入栈中
         stack.push(item);
      } else if (item === ')') {
         // 寻找')' 匹配 如果栈内没有元素，说明没有'(' 直接返回false
         if(stack.isEmpty()) {
            return false;
         } else {
            // 不为空就代表含有'('，删除一个 以示匹配成功
            stack.pop();
         }
      }
   }
   return stack.isEmpty();
}; 

console.log(pairedParenthesis('()sd(fg(fw))(d)'));
console.log(pairedParenthesis('((ll)(w)g()'));
pairedParenthesis('((ll)(w)g()))');