function Animal() {
  // 实例属性
  this.name = name || 'Animal'
  // 实例方法
  this.sleep = function () {
    console.log(this.name + '正在睡觉')
  }
  this.play = function (play) {
    console.log(this.name + '正在玩' + play)
  }
}
// 类方法
Animal.eat = function (food) {
  console.log(food)
}
// 原型方法
Animal.prototype.play = function (play) {
  console.log(play)
}

// test1 类调用方法
Animal.eat('food') // food  可以调用类方法
console.log(Animal.name) // Animal 可以调用实例属性
Animal.play('warter') // not a function 不能调用原型方法
Animal.sleep() // not a function  不能调用实例方法

// test2 new实例化后调用方法
let Cat = new Animal()
console.log(Cat.name) // Animal 可以调用实例属性
Cat.play('warter') // 可以调用原型方法（实例方法会覆盖原型方法  优先级高于原型）
Cat.sleep() // 可以调用实例方法
Cat.eat('food') // 不可以调用类方法

// 实例方法需要通过实例化对象去调用
// 类方法不需要通过实例化对象去调用
// 原型方法也需要实例化对象去调用
