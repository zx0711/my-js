/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2021-02-25 19:41:53
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2021-02-25 20:07:25
 */
const proxy = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    proxy('/api1', {
      // 遇见api1前缀的请求，就会触发该代理配置
      target: 'http://localhost:5000', // 请求转发给谁
      changeOrigin: true, // 控制服务器收到的请求头中Host字段的值,设置为true,服务器请求显示来自于localhost:5000，否则localhost:3000
      pathRewrite: { '^/api1': '' }, // 一个正则的匹配，把/api1转为空，重写请求路径
    }),
    proxy('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' },
    })
  )
}
