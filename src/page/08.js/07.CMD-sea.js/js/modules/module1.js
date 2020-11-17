/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2020-11-17 10:48:35
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-11-17 10:49:59
 */
define(function (require, exports, module) {
  var data = 'zx.com'
  function show() {
    console.log('module1 show()' + data)
  }
  exports.show = show
})
