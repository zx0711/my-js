/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2020-11-16 19:52:37
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-11-17 10:26:22
 */
define(['dataService'], function (dataService) {
  let name = 'Tom'
  function showMsg() {
    alert(dataService.getMsg() + ', ' + name)
  }
  // 暴露模块
  return { showMsg }
})
