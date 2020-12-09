/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2020-12-08 16:44:05
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-12-08 16:56:22
 */
;(function (window) {
  // 私有数据
  var msg = 'zx'
  // 操作数据的函数
  function doSomething() {
    console.log('doSomething()' + msg.toUpperCase())
  }
  function doOtherthing() {
    console.log('doOtherthing()' + msg.toLowerCase())
  }
  window.myModule = {
    doSomething: doSomething,
    doOtherthing: doOtherthing,
  }
})(window)

// 传入window的好处: 代码压缩可以把传入的window压缩为w
