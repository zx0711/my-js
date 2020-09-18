/*
 * @Description: 
 * @Author: xiao.zhang
 * @Date: 2020-09-16 17:57:15
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-09-17 14:32:53
 */
class LikeButton {
  constructor () {
    this.state = { isLiked: false }
  }
  
  setState (state){
    console.log('ddd',this)
    const oldEl = this.el
    this.state = state
    this.el = this.render()
    if (this.onStateChange) this.onStateChange(oldEl, this.el)
  }

  changeLikeText () {
    // const likeText = this.el.querySelector('.like-text')
    // this.state.isLiked = !this.state.isLiked
    // likeText.innerHTML = this.state.isLiked ? '取消' : '点赞'
    this.setState({
      isLiked: !this.state.isLiked
    })
  }
  render () {
    
    const text = this.state.isLiked ? '取消' : '点赞'
    
    this.el = createDOMFromString(`
    <button class='like-btn'>
      <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
      <span>👍</span>
    </button>
  `)
  // console.log('ddddddddddd',this.el) 
    this.el.addEventListener('click', ()=>{this.changeLikeText()}, false)
    return this.el
  }
}

const createDOMFromString = (domString) => {
  const div = document.createElement('div')
  div.innerHTML = domString
  return div
}
const wrapper = document.querySelector('.wrapper')
const likeButton1 = new LikeButton()
wrapper.appendChild(likeButton1.render()) 

likeButton1.onStateChange = (oldEl, newEl) => {
  wrapper.insertBefore(newEl, oldEl) // 插入新的元素
  wrapper.removeChild(oldEl) // 删除旧的元素
}
// const likeButton2 = new LikeButton()
// wrapper.appendChild(likeButton1.render()) 