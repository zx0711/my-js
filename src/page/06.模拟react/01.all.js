/*
 * @Description: 
 * @Author: xiao.zhang
 * @Date: 2020-09-17 11:46:46
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-09-17 13:46:43
 */
class Component {
  constructor (props = {}) {
    this.props = props
  }
  setState (state) {
    const oldEl = this.el
    this.state = state
    this._renderDOM()
    if (this.onStateChange) this.onStateChange(oldEl, this.el)
  }

  _renderDOM () {
    this.el = createDOMFromString(this.render())
    if (this.onClick) {
      this.el.addEventListener('click', this.onClick.bind(this), false)
    }
    return this.el
  }
}

const createDOMFromString = (domString) => {
  const div = document.createElement('div')
  div.innerHTML = domString
  return div
}

const wrapper = document.querySelector('.wrapper')

const mount = (component, wrapper) => {
  console.log('===component===',typeof component)
  console.log('===component===_renderDOM()',component._renderDOM())
  wrapper.appendChild(component._renderDOM())
  component.onStateChange = (oldEl, newEl) => {
    wrapper.insertBefore(newEl, oldEl)
    wrapper.removeChild(oldEl)
  }
}

class LikeButton extends Component {
  constructor () {
    // super(props)
    // this.props = props
    this.state = { isLiked: false }
  }

  onClick () {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render () {
    // console.log('=====this===',this.props)
    return `
      <button class='like-btn'>
        <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
        <span>👍</span>
      </button>
    `
  }
}

mount(new LikeButton({name:'123'}), wrapper)