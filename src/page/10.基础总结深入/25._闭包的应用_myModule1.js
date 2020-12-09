/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2020-12-08 16:36:25
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-12-08 16:42:03
 */
function myModule() {
  // 私有数据
  var msg = 'zx'
  // 操作数据的函数
  function doSomething() {
    console.log('doSomething()' + msg.toUpperCase())
  }
  function doOtherthing() {
    console.log('doOtherthing()' + msg.toLowerCase())
  }
  return {
    doSomething: doSomething,
    doOtherthing: doOtherthing,
  }
}
