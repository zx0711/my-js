/*
 * @Description: 类和构造函数的区别
 * @Author: xiao.zhang
 * @Date: 2020-08-02 21:59:20
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-09-17 10:11:06
 */ 

//  问题：
//  1.什么是构造函数
//  2.构造函数和类又有什么关系
//  3，构造函数和类绑定方法和变量的方式分别是什么样子的

// 解析：
// 1，只要使用了new的都是构造函数
// 2，类的原型对象上的constructor 就是构造函数，比如下面的例子中 Person1.prototype.constructor === Person2方法
// 3，看例子：

// 类添加属性和方法的方式方法,生成实例的写法都是一样的
class Person1 {
    constructor(name){
        this.name = name;
    }
    eat1(){
      
    }
}


const zx1 = new Person1('zhangxiao')

// 构造函数添加属性和方法的方式写法,
function Person2(name){
    this.name = name;
}
Person2.prototype.eat2 = function(){

}
const zx2 = new Person2('zhangxiao')
console.log(zx2)
// zx1 和 zx2 都是通过原型链调用的eat1 和 eat2方法

// 所有的构造函数默认都是返回this 如果里面没有写return

// 一个很好的例子：
// https://blog.csdn.net/weixin_42006492/article/details/83753847






