/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2020-11-16 19:45:52
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-11-16 19:49:29
 */
;(function (window, dataService) {
  let name = 'Tom'

  function showMsg() {
    alert(dataService.getMsg() + ', ' + name)
  }

  window.alerter = { showMsg }
})(window, dataService)
