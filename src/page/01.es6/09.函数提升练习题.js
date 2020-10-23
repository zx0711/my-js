/*
 * @Description:函数提升练习题
 * @Author: xiao.zhang
 * @Date: 2020-10-23 10:29:47
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-10-23 10:34:11
 */
function foo1() {
  function bar() {
    return 3
  }
  return bar()
  function bar() {
    return 8
  }
}
console.log(foo1())

function foo2() {
  var bar = function () {
    return 3
  }
  return bar()
  var bar = function () {
    return 8
  }
}
console.log(foo2())

console.log(foo3())
function foo3() {
  var bar = function () {
    return 3
  }
  return bar()
  var bar = function () {
    return 8
  }
}

function foo4() {
  return bar()
  var bar = function () {
    return 3
  }
  var bar = function () {
    return 8
  }
}
console.log(foo4())
