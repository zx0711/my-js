import React, { Component } from 'react'
import Second from './second'

// export default class index extends Component {
//   render() {
//     console.log('路由组件收到的props', this.props)
//     return (
//       <div>
//         <h3>我是About的内容</h3>
//         <Second />
//       </div>
//     )
//   }
// }
export default (props) => {
  console.log('路由组件收到的props', props)
  return (
    <div>
      <h3>我是About的内容</h3>
      <Second />
    </div>
  )
}
