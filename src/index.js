/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2020-09-18 11:06:27
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2021-01-25 17:37:25
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(App, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
