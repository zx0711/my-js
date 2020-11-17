/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2020-11-16 19:52:08
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-11-17 10:27:16
 */
;(function () {
  require.config({
    baseUrl: 'js/', // 基本路径 出发点在根目录下
    paths: {
      // 映射: 模块标识名: 路径
      alerter: './modules/alerter', // 此处不能写成alerter.js,会报错
      dataService: './modules/dataService',
    },
  })
  require(['alerter'], function (alerter) {
    alerter.showMsg()
  })
})()
