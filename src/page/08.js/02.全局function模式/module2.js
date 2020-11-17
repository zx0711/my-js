/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2020-11-16 16:18:22
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-11-16 16:21:24
 */
let data2 = 'other data'

function foo() {
  // 与另一个模块中的函数冲突了
  console.log(`foo2() ${data2}`)
}
