// 普通类装饰器
// export function logClass(params) {
//   params.prototype.name = '动态扩展的属性'
//   params.prototype.run = function () {
//     console.log('我是一个run方法')
//   }
// }

// // 类装饰器：装饰器工厂（可传参）
// export function logClass2(params: any) {
//   return function (target: any) {
//     console.log('params', params)
//     console.log('target', target)
//   }
// }

// // 属性装饰器
// export function logProperty(params: any) {
//   return function (target: any, attr: any) {
//     console.log('target', target)
//     console.log('attr', attr)
//     console.log('params', params)
//   }
// }

// // 方法装饰器
// export function logFunction(params: any) {
//   return function (target: any, attr: any, desc: any) {
//     console.log('__target', target)
//     console.log('__attr', attr)
//     console.log('__gg', desc.value)
//     const internalFn = function () {
//       // console.log('__params', params)
//       // 先判断是否没有登录，如果没有登录则直接弹出来
//       if ('未登录') {
//         desc.value = function () {}
//       } else if ('已登录未注册成为开发者') {
//         desc.value = function () {}
//       } else if ('已登录已注册但当前处于待审核状态') {
//         desc.value = function () {}
//       } else if ('已登录已注册但当前处于未通过状态') {
//         desc.value = function () {}
//       }
//     }

//     if (params) {
//       // do something
//       internalFn()
//     } else {
//       internalFn()
//     }
//   }
// }
