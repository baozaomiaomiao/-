class Set {

   constructor() {
      this.items = {};
   }

   // 判断元素是否存在
   has(value) {
      return this.items.hasOwnProperty(value);
   }

   // 添加元素。
   add(value) {
      // 集合中的属性不能重复。检查属性是否存在
      if (!this.has(value)) {
         this.items[value] = value;
         return true;
      }
      return false;
   }

   // 删除元素
   remove(value) {
      // 判断属性是否存在
      if (this.has(value)) {
         delete this.items[value];
         return true;
      }
      return false;
   }

   get size() {
      // Object.keys 返回属性名组成的数组
      return Object.keys(this.items).length;
   }

   // 获取集合的所有属性
   get values() {
      return Object.keys(this.items);
   }

   // 并集
   union(otherSet) {
      // 创建一个新的集合，代表两个集合的并集
      const unionSet = new Set()
      // 遍历第一个集合的元素添加到新的集合；
      this.values.forEach((v, i) => unionSet.add(this.values[i]))
      // 遍历第二个集合的元素添加到新的集合。重复的元素会过滤
      otherSet.values.forEach((v, i) => unionSet.add(otherSet.values[i]))
      return unionSet
   }

   // 交集
   intersection(otherSet) {
      const intersectionSet = new Set();
      this.values.forEach((v, i) => {
         if (otherSet.has(v)) {
            intersectionSet.add(v);
         }
      });
      return intersectionSet;
   }
   // 差集，A-B 存在于A中且不存在与B中
   difference(otherSet) {
      const differenceSet = new Set();
      this.values.forEach((v, i) => {
         if (!otherSet.has(v)) {
            differenceSet.add(v);
         }
      });
      return differenceSet;
   }
   // 子集，A 包含于 B
   subset(otherSet) {
      if (this.size > otherSet.size) {
         return false;
      } else {
         return !this.values.some(v => !otherSet.has(v));
      }
   }

}

const set = new Set();
set.add(1);
console.log(set.values); // ["1"] 
console.log(set.has(1));  // true 
console.log(set.size); // 1 
set.add(2);
console.log(set.values);  // ["1", "2"] 
console.log(set.has(2));  // true 
console.log(set.size); // 2 
set.remove(1);
console.log(set.values); // ["2"] 
set.remove(2);
console.log(set.values); // []

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
const setC = setA.union(setB);
console.log(setC);  // { '1': '1', '2': '2', '3': '3', '4': '4' } 因为是用JS对象模拟的集合，所以使key: value形式。集合应该是这个样子的 {1,2,3,4} 