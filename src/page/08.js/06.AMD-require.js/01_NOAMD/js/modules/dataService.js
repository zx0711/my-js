/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2020-11-16 19:46:06
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-11-16 19:48:59
 */
;(function (window) {
  let msg = 'zx 加油'

  function getMsg() {
    return msg
  }

  window.dataService = { getMsg }
})(window)
