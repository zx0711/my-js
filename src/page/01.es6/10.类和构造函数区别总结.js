/*
 * @Description: 类和构造函数的区别
 * @Author: xiao.zhang
 * @Date: 2020-08-02 21:59:20
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-10-09 14:53:49
 */

//  问题：
//  1.什么是构造函数： 只要使用了new的都是构造函数
//  2.构造函数和类又有什么关系：类的原型对象上的constructor 就是构造函数，比如下面的例子中 Person1.prototype.constructor === Person2方法
//  3，构造函数和类绑定方法和变量的方式分别是什么样子的： 看下面

// 类添加属性和方法的方式方法,生成实例的写法都是一样的
class Person1 {
  constructor(name) {
    this.name = name
  }
  eat1() {}
}

const zx1 = new Person1('zhangxiao')

// 构造函数添加属性和方法的方式写法,
function Person2(name) {
  this.name = name
  this.newFunc = () => {
    console.log('我可以被调用吗')
  }
}
Person2.prototype.eat2 = function () {
  console.log('我是构造函数的方法')
}
const zx2 = new Person2('zhangxiao')
console.log(zx2)

// 总结：
// zx1 和 zx2 都是通过原型链调用的eat1 和 eat2方法
// 在new 的过程中默认就是返回新创建的对象。只不过把这个对象赋予在了this上面，然后如果没有返回其他，就是返回的this
// 所有的构造函数默认都是返回this 如果里面没有写return

// 一个很好的例子：
// https://blog.csdn.net/weixin_42006492/article/details/83753847
