import React, { Component } from 'react'

export default class Fetch extends Component {
  /**
   * fetch：原生函数，不用使用XHR,
   * 老版本浏览器可能不支持
   * 关注分离的设计思想（复杂问题简单化）
   */
  // promise未优化版本
  fetch = () => {
    fetch('http://localhost:3000/api2/cars')
      .then(
        (res) => {
          console.log('联系服务器成功了', res)
          return res.json()
        },
        (error) => {
          console.log('联系服务器失败了', error)
          return new Promise(() => {})
        }
      )
      .then(
        (info) => {
          console.log('成功的数据', info)
        },
        (error) => {
          console.log('失败的数据', error)
        }
      )
  }

  // promise优化版本
  fetch1 = () => {
    fetch('http://localhost:3000/api2/cars')
      .then((res) => {
        console.log('联系服务器成功了', res)
        return res.json()
      })
      .then((info) => {
        console.log('成功的数据', info)
      })
      .catch((error) => {
        console.log('请求出错：', error)
      })
  }

  // promise顶配版本
  fetch1 = async () => {
    try {
      const response = await fetch('http://localhost:3000/api2/cars')
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.fetch}>发送网络请求</button>
      </div>
    )
  }
}
