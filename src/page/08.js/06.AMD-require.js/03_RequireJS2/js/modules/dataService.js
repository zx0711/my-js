/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2020-11-16 19:52:49
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-11-17 10:34:06
 */
// 定义没有依赖的模块
define(function () {
  let msg = 'www.baidu.comzx'
  function getMsg() {
    return msg
  }
  return { getMsg } // 暴露模块
})
