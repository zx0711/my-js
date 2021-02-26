import React, { Component } from 'react'
import axios from 'axios'

export default class TestAxios extends Component {
  /**
   * react ajax
   *  1.react本身只关注界面，并不包含发生ajax请求的代码
   *  2.前端应用需要通过ajax请求与后台进行交互
   *  3.react应用中需要集成第三方库ajax库（或自己封装）
   * 常见的ajax请求库
   *  1.jquery
   *  2.axios:
   *    1.封装XmlHttpRequest对象的ajax
   *    2.promise风格
   *    3.可以用在浏览器端和服务器端
   */

  getStudentData = () => {
    /**
     * http://localhost:5000/students,package.json没配置代理服务器，会报跨域
     * http://localhost:3000/index.html 返回本项目的index.html
     * http://localhost:3000/index2.html 返回404
     */
    axios.get('http://localhost:3000/api1/students').then(
      (res) => {
        console.log('成功了：', res.data)
      },
      (error) => {
        console.log('失败了', error)
      }
    )
  }

  getCarData = () => {
    /**
     * http://localhost:5000/students,package.json 没配置代理服务器，会报跨域
     * http://localhost:3000/index.html 返回本项目的index.html
     * http://localhost:3000/index2.html 返回404
     */
    axios.get('http://localhost:3000/api2/cars').then(
      (res) => {
        console.log('成功了：', res.data)
      },
      (error) => {
        console.log('失败了', error)
      }
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
        <button onClick={this.getCarData}>点我获取汽车数据</button>
      </div>
    )
  }
}
