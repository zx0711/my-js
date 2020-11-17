/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2020-11-16 17:22:52
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-11-16 17:24:29
 */
/**
 * 使用exports.xxx = value向外暴露一个对象
 */
'use strict'
exports.foo = function () {
  console.log('module3 foo()')
}

exports.bar = function () {
  console.log('module3 bar()')
}
