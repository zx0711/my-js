/*
 * @Description: 手动实现一个promise
 * @Author: xiao.zhang
 * @Date: 2020-09-25 16:23:45
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-09-27 11:20:57
 */
// new Promise(fn).then(successFn,failFn)

import React from 'react';

class Test{
  constructor (fn){
    console.log('fn',fn)
    this.states = {
      PENDING: 'PENDING', RESOLVED: 'RESOLVED', REJECTED: 'REJECTED'
    }
    this.state = this.states.PENDING
    // 定义Promise失败状态的回调函数集合
    this.resolvedCallBacks = []
    // 定义Promise成功状态的回调函数集合
    this.rejectedCallBacks = []
    // 为静态方法定义其内部使用的指向实例的that  
    MyPromise.that = this

    fn(Test.success, Test.fail)
  }

  static success (value){
    console.log('我是静态成功方法',value)
  }

  static fail(value){
    console.log('我是静态失败方法')
  }
  // 增加在Test原型上的方法
  then (onSuccess, onFail){
    onSuccess()
    onFail()
  }
}

const dd = new Test(resolve =>{resolve(1)})
new Test(resolve =>{resolve(1)}).then(()=>{},()=>{})

function GG (){
  console.log('ddddd',dd)
  return <div>加油 笑笑</div>
}

export default GG