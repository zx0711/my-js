/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2020-11-19 10:48:13
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-11-20 16:06:06
 */
;(function (window) {
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'

  function Promise(excutor) {
    const self = this
    this.status = PENDING // 给promise对象指定status属性，初始值为pending
    this.data = undefined
    this.callbacks = [] // 回调队列。每个元素的结构：{onResolved(){}, onRejected(){}}

    function resolve(value) {
      // 状态只能改变1次。如果当前状态不是pending,直接结束
      if (self.status !== PENDING) {
        return
      }
      // 将状态改为resolved
      self.status = RESOLVED
      // 保存value数据
      self.data = value

      // 如果有待执行callback函数，立即执行异步执行回调函数
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach((callbacksObj) => {
            callbacksObj.onResolved(value)
          })
        })
      }
    }

    function reject(reason) {
      if (self.status !== PENDING) {
        return
      }
      self.status = REJECTED
      self.data = reason
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach((callbacksObj) => {
            callbacksObj.onRejected(reason)
          })
        })
      }
    }

    try {
      // 立即同步执行excutor
      excutor(resolve, reject)
    } catch (error) {
      // 如果执行器抛出异常，promise对象变为rejected状态
      reject(error)
    }
  }

  // .then是同步的
  Promise.prototype.then = function (onResolved, onRejected) {
    onResolved =
      typeof onResolved === 'function'
        ? onResolved
        : (value) => {
            // 向后传递成功的value
            return value
          }
    // 指定默认的失败的回调（实现错误/异常传透的关键点）
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            // 向后传递失败的reason
            throw reason
          }

    // 返回一个新的promise对象
    return new Promise((resolve, reject) => {
      // 调用指定的回调函数处理，根据执行的结果，改变return的promise的状态
      // handle为了处理返回的promise
      const self = this
      function handle(callbackType) {
        /*
          1,如果回调函数执行抛出异常，return的promise就会失败，reason就是error
          2,如果回调函数执行返回非promise,return的promise是成功，value为返回的值
          3，如果回调函数返回的是promise,return的promise的结果就是这个promise的结果，
          */
        try {
          const result = callbackType(self.data) // 主要为了获取return后的结果
          if (result instanceof Promise) {
            // 3.result为promise对象
            // result.then(
            //   (value) => {
            //     resolve(value) // 当result成功时，让return的promise也成功
            //   },
            //   (reason) => {
            //     reject(reason) // 当result失败时，让return的promise也失败
            //   }
            // )
            result.then(resolve, reject)
          } else {
            // 2
            resolve(result) // 当result成功时，让return的promise也成功
          }
        } catch (error) {
          // 1
          reject(error) // 当result失败时，让return的promise也失败
        }
      }

      // self.status当前状态是pending,resolved,rejected,是否是这三个状态的一种，取决于执行器里的方法是异步还是同步
      // 如果方法是异步，状态肯定是pending，因为.then是同步。所以拿到的状态是pending
      // 如果方法是同步，状态肯定是resolved,rejected，所以也就不走pending
      if (self.status === PENDING) {
        // 当前状态还是pedding状态，把当前回调函数放入队列中
        // this.callbacks.push({ onResolved, onRejected })
        self.callbacks.push({
          onResolved: function () {
            handle(onResolved)
          },
          onRejected: function () {
            handle(onRejected)
          },
        })
      } else if (self.status === RESOLVED) {
        // 如果当前是resolved,
        // 当前状态已经是resolved状态
        setTimeout(() => {
          handle(onResolved)
        })
      } else {
        // 如果当前是rejected状态，异步执行onRejected并改变return的promise状态
        // 'rejected'
        setTimeout(() => {
          handle(onRejected)
        })
      }
    })
  }

  /*
    Promise原型对象的catch()
    指定失败的回调函数
    返回一个新的promise对象
   */
  Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
  }

  Promise.resolve = function (value) {
    // 返回一个成功/失败的promise
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
    })
  }

  /*
  Promise函数对象的reject方法，
  返回一个指定的reason的失败的promise
   */
  Promise.reject = function (reason) {
    // 返回一个失败的promise
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }
  Promise.all = function (promises) {
    // 用来保存所有成功value的数组
    const values = new Array(promises.length)
    // 用来保存成功promise的数量
    let resolvedCount = 0
    return new Promise((resolve, reject) => {
      // 遍历promise获取每个promise的结果
      promises.forEach((p, index) => {
        Promise.resolve(p).then(
          (value) => {
            resolvedCount++ // 成功的数量+1
            // p成功，将成功的value报讯values
            values[index] = value

            // 如果全部成功，将return的promise改为成功
            if (resolvedCount === promises.length) {
              resolve(values)
            }
          },
          (reason) => {
            // 只要一个失败了，return的promise就失败
            reject(reason)
          }
        )
      })
    })
  }

  /* 只有第一次调用的才有效果 */
  Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((p, index) => {
        Promise.resolve(p).then(
          (value) => {
            resolve(value) // 一旦有成功了，将return变为成功
          },
          (reason) => {
            reject(reason) // 一旦有失败了，将return变为失败
          }
        )
      })
    })
  }
  window.Promise = Promise
})(window)
