import ReactDOM from 'react-dom'
/**
 * 使用jsx语法创建虚拟DOM
 */
const VDOM = <h1 id="title">hello，react</h1>
const realDOM = <div id="demo">hello,realReact</div>
ReactDOM.render(VDOM, document.getElementById('root'))

console.log('虚拟DOM', VDOM)
console.log('真实DOM', realDOM)

/**
 * 关于虚拟DOM:
 * 1，本质是Object类型的对象（一般对象）
 * 2，虚拟DOM比较‘轻’，对象里含有的属性比较少，真实DOM比较‘重’（因为虚拟DOM是react内部在用，无需真实DOM上那么多属性）
 * 3，虚拟DOM最终会被React转化为真实DOM,呈现在页面上
 */
