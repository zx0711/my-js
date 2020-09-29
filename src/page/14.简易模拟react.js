/*
 * @Description: react 一次渲染，dom操作和setState变化
 * @Author: xiao.zhang
 * @Date: 2020-09-16 17:57:15
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-09-29 14:36:05
 */


class LikeButton {
  constructor () {
    this.state = { isLiked: false }
  }
  
  setState (state){
    const oldEl = this.el
    this.state = state
    this.render()
    this.el = this.render()
    if (this.onStateChange) this.onStateChange(oldEl, this.el)
  }

  changeLikeText () {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }
  render () {
    this.el = createDOMFromString(`
    <button class='like-btn'>
      <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
      <span>👍</span>
    </button>
  `)
    this.el.addEventListener('click', ()=>{this.changeLikeText()}, false)
    return this.el
  }
}

const createDOMFromString = (domString) => {
  const div = document.createElement('div')
  div.innerHTML = domString
  return div
}

const likeButton1 = new LikeButton()

likeButton1.onStateChange = (oldEl, newEl) => {
  // 在oldEl之前插入新的newEl,并删除oldEl
  wrapper.insertBefore(newEl, oldEl) // 插入新的元素
  wrapper.removeChild(oldEl) // 删除旧的元素
  // wrapper.appendChild(newEl) 
}

const wrapper = document.querySelector('.wrapper')

console.log('likeButton1.render()',likeButton1.render())
wrapper.appendChild(likeButton1.render())
