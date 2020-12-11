/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2020-12-11 13:59:19
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-12-11 14:28:13
 */
function fibonacci(n) {
  return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}

var onmessage = function (event) {
  var number = event.data
  // 分线程接收到主线程发送的数据
  console.log('分线程接收到主线程发送的数据:', +number)

  var result = fibonacci(number)
  postMessage(result)
  console.log('分线程向主线程返回数据：' + result)
  // alert(result) alert是window的方法，在分线程不能调用
  // 分线程中的全局对象不是window,所以在分线程中不可能更新界面，所以只有主线程才能更新dom,分线程就用来计算
}
console.log('this', this)
