import React, { Component } from 'react'
import { Link, NavLink, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test'
import Headers from './components/header'
import MyNavLink from './components/myNavLink'
export default class Big extends Component {
  /**
   * 路由的基本使用
   * <BrowserRouter>
   *    <Link to="/about" style={{ background: 'red', display: 'block' }}>
              ablout
        </Link>
        <Route path="/about" component={About}></Route>
   * </BrowserRouter>
  */

  /**
   * 组件分为一般组件和路由组件
   * 1，写法不同：
   *    a,路由组件：<Route path="/about" component={About}></Route>
   *    b,一般组件： <Headers/>
   * 2，存放位置不同
   *    a,一般组件：components
   *    b,路由组件：pages
   * 3,接收到的props不同
   *    a,一般组件：写组件标签时传递了什么，就能收到什么
   *    b,路由组件：接收到3个固定的属性(只是在第一层组件内，如果这个组件有子组件，那么子组件肯定是接收不到的，这个父组件既可以是类组件也可以说是函数式组件)
   *        history:
              go: ƒ go(n)
              goBack: ƒ goBack()
              goForward: ƒ goForward()
              push: ƒ push(path, state)
              replace: ƒ replace(path, state)
            location:
              pathname: "/about"
              search: ""
              state: undefined
            match:
              params: {}
              path: "/about"
              url: "/about"
   */

  /**
   * NavLink和Link使用功能一样，比Link高级
   */

  /**
   * switch的使用
   * 1，通常情况下，path和component是一一对应的关系
   * 2，switch可以提高路由匹配效率（单一匹配）
   *         <Route path="/home" component={Home}></Route>
             <Route path="/home" component={Test}></Route>
             只匹配第一个
   */

  /**
   * 路由的严格匹配和模糊匹配
   * 1，默认使用是模糊匹配（简单记：输入的路径必须包含要匹配的路径，且顺序要一致）
   * 2，开启严格匹配： <Route path="/home" component={Home} exact></Route>
   * 3，严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
   */
  render() {
    return (
      <div>
        <Headers></Headers>
        <div>
          <div style={{ width: '60px' }}>
            {/* 原生html中，靠a标签跳转不同的页面 */}
            {/* <a href="/about.html" style={{ background: 'red', display: 'block' }} >about </a>
            <a href="/home.html" style={{ background: 'yellow', display: 'block' }}>home</a> */}

            {/* 在react中靠路由链接实现切换组件 */}
            {/* <NavLink
              activeClassName="demo"
              to="/about"
              style={{ display: 'block' }}
            >
              ablout
            </NavLink>
            <NavLink
              to="/home"
              activeClassName="demo"
              style={{ display: 'block' }}
            >
              home
            </NavLink> */}
            <MyNavLink
              to="/home"
              activeClassName="demo"
              style={{ display: 'block' }}
            >
              home
            </MyNavLink>
            <MyNavLink
              to="/about"
              activeClassName="demo"
              style={{ display: 'block' }}
            >
              about
            </MyNavLink>
          </div>

          <div>
            {/* 注册路由 */}
            <Switch>
              <Route path="/about" component={About}></Route>
              <Route path="/home" component={Home} exact></Route>
              {/* <Route path="/home" component={Test}></Route> */}
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
