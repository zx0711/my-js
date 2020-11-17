/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2020-11-17 10:53:32
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-11-17 11:03:51
 */
define(function (require, exports, module) {
  // 引入依赖模块（异步）
  require.async('./module3', function (m3) {
    console.log('异步引入模块3' + m3.API_KEY)
  })
  // 引入依赖模块（同步）
  var module2 = require('./module2')

  function show() {
    console.log('module4 show()' + module2.msg)
  }
  exports.show = show
})
