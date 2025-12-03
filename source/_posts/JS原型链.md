---
title: JS原型链
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/692fd7484c455cbabc95856f.jpg
tags: JS
categories: 前端
---

### 编程思想
主要就是面向过程和面向对象
前端的面向过程比较多

### 构造函数

封装是面向对象思想中比较重要的一部分，JS的面向对象可以通过构造函数实现封装

同样的将变量和函数组合到了一起并且能通过this实现数据的共享，不同的是借助构造函数创建出来的实例对象之间是彼此互不影响的

总结：

1. 构造函数体现了面向对象的封装特性
2. 构造函数实例创建的对象彼此独立、互不影响

封装是面向对象思想中比较重要的一部分，js面向对象可以通过构造函数实现的封装

前面我们所学的构造函数的方法很好用，但是存在浪费内存的问题
面向对象编程的特性：比如封装性、继承性等，可以借助于构造函数来实现

我们希望所有的对象使用同一个函数，这样比较节省内存，那么我们要怎么做？

### 原型

#### 原型

目标：能够利用原型对象实现方法共享

构造函数通过原型分配的函数是所有对象所 共享的。

JavaScript 规定，每一个构造函数都有一个 prototype 属性，指向另一个对象，所以我们也称为原型对象

这个对象可以挂载函数，对象实例化不会多次创建原型上函数，节约内存

**我们可以把那些不变的方法，直接定义在 prototype 对象上，这样所有对象的实例就可以共享这些方法。** ****

**构造函数和原型对象中的this 都指向 实例化的对象**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function Star(uname,age){
            this.uname= uname
            this.age = age
        }
        Star.prototype.sing = function(){
            console.log('我会唱歌')
        }
        const ldh = new Star('刘德华',18)
        const zxy = new Star('张学友',19)
        console.log(ldh.sing === zxy.sing)
    </script>
</body>
</html>
```
**数组扩展方法**

需求： ①：给数组扩展求最大值方法和求和方法

比如： 以前学过 const arr = [1,2,3]

arr.reverse() 结果是 [3,2,1]

扩展完毕之后： arr.sum() 返回的结果是 6

这俩都是数组扩展方法，了解一下

```javascript
Array.prototype.max = function(){
            return Math.max(...this)
        }
        console.log([1,2,3].sum())
```

```javascript
Array.prototype.sum = function(){
            return this.reduce((prev,item)=>prev+item,0)
        }
        console.log([1,2,3].sum())
```

#### constructor 属性

每个原型对象里面都有个constructor 属性（constructor 构造函数）

作用：该属性指向该原型对象的构造函数， 简单理解，就是指向我的爸爸，我是有爸爸的孩子
目标：了解constructor属性的作用

**使用场景：**

如果有多个对象的方法，我们可以给原型对象采取对象形式赋值.

但是这样就会覆盖构造函数原型对象原来的内容，这样修改后的原型对象 constructor 就不再指向当前构造函数了

此时，我们可以在修改后的原型对象中，添加一个 constructor 指向原来的构造函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function Star(name){
            this.name=name
        }
        Star.prototype = {
            sing:function(){console.log('唱歌')},
            dance:function(){console.log('跳舞')}
        }
        console.log(Star.prototype.constructor)  //指向Object
    </script>
</body>
</html>
```

要认清谁是爹（重新指回原型对象的构造函数捏）：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function Star(name){
            this.name = name
        }
        Star.prototype = {
            //手动利用constructor 指向Star构造函数
            constructor:Star,
            sing:function(){console.log('唱歌')},
            dance:function(){console.log('跳舞')}
        }
        console.log(Star.prototype.constructor)
    </script>
</body>
</html>
```

constructor属性的作用是指向该原型对象的构造函数

构造函数可以创建实例对象，构造函数是一个原型对象，一些公共的属性或者方法放到这个原型对象身上

#### 对象原型

对象都会有一个属性** \_\_proto\_\_** 指向构造函数的 prototype 原型对象

之所以我们对象可以使用构造函数 prototype 原型对象的属性和方法，就是因为对象有 \_\_proto\_\_ 原型的存在

> tips：
> 
> 1.\_\_proto\_\_ 是JS非标准属性
> 
> 2.[[prototype]]和\_\_proto\_\_意义相同
> 
> 3.用来表明当前实例对象指向哪个原型对象prototype
> 
> 4.\_\_proto\_\_对象原型里面也有一个 constructor属性，指向创建该实例对象的构造函数

#### 原型继承

继承是面向对象编程的另一个特征，通过继承进一步提升代码的程度，JS中大多是借助原型对象实现继承的特性

封装是抽取公共部分

把男人和女人公共部分抽出来放到人类里面

继承：让男人和女人都能继承人类的一些属性和方法

把男人女人公共的属性和方法抽取出来 People

然后赋值给Man的原型对象，可以共享这些属性和方法

注意让constructor指回Man这个构造函数

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        const People = {
            head: 1,
            eyes: 2,
            legs: 2,
            say: function () { },
            eat: function () { }
        }
        //男人
        function Man() {

        }
        //把公共属性和方法给原型，这样就可以共享
        Man.prototype = People
        //让原型里面的constructor重新指回Man找自己的爸爸
        Man.prototype.construtor = Man
        const pink = new Man()
        console.log(pink)
    </script>
</body>

</html>
```

如果我们给男人提供了一个吸烟的方法，那么我们会发现女人也自动添加了这个方法

问题就是男人和女人都同时使用了一个对象，根据引用类型的特点，他们指向同一个对象，修改一个就会都影响

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
         const People = {
            head: 1,
            eyes: 2,
            legs: 2,
            say: function () { },
            eat: function () { }
        }
        //男人
        function Man() {

        }
        //把公共属性和方法给原型，这样就可以共享
        Man.prototype = People
        //让原型里面的constructor重新指回Man找自己的爸爸
        Man.prototype.construtor = Man
        const pink = new Man()
        Man.prototype.smoking = function(){}
        //女人
        function Women(){
            this.pink = function(){ }
        }
        Women.prototype = People
        Women.prototype.construtor = Women
        const red = new Women()
        console.log(red)
    </script>
</body>
</html>
```

我们的需求是男人和女人不要使用同一个对象，但是不同对象里面包含相同的属性和方法

答案：构造函数

new 每次都会创建一个新的对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function Star(){
            this.age = 18
            this.say = function(){ }
        }
        const ldh = new Star()
        const zxy = new Star()
        console.log(ldh)
        console.log(zxy)
        console.log(ldh === zxy)
    </script>
</body>
</html>
```

继承写法：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function Person(){
            this.head = 1
            this.eyes = 2
            this.legs = 2
            this.say = function(){}
            this.eat = function(){}
        }
        console.log(new Person())   //就是输出刚才的对象
        const People = {
            head:1,
            eyes:2,
            legs:2,
            say:function(){},
            eat:function(){}
        }
    </script>
</body>
</html>
```

继承写法完善：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
         const People = {
            head: 1,
            eyes: 2,
            legs: 2,
            say: function () { },
            eat: function () { }
        }

        function Person(){
            this.head = 1
            this.eyes = 2
            this.legs = 2
            this.say = function(){}
            this.eat = function(){}
        }
        //男人
        function Man() {

        }
        //把公共属性和方法给原型，这样就可以共享
        Man.prototype = new Man()
        //让原型里面的constructor重新指回Man找自己的爸爸
        Man.prototype.construtor = Man
        const pink = new Man()
        Man.prototype.smoking = function(){}
        //女人
        function Women(){
            this.pink = function(){ }
        }
        Women.prototype = People
        Women.prototype.construtor = Women
        const red = new Women()
        console.log(red)
    </script>
</body>
</html>
```

就是用new Person

此处的Women就没有smoking方法

1. 人类共有的属性和方法有那些，然后做个构造函数，进行封装，一般公共属性写到构造函数内部，公共方法，挂载 到构造函数原型身上。
2. 男人继承人类的属性和方法，之后创建自己独有的属性和方法
3. 女人同理

#### 原型链

基于原型对象的继承使得不同构造函数的原型对象关联在一起，并且这种关联的关系是一种链状的结构，我们将原型对 象的链状结构关系称为原型链

> ① 当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性。
> 
> ② 如果没有就查找它的原型（也就是 \_\_proto\_\_指向的 prototype 原型对象）
> 
> ③ 如果还没有就查找原型对象的原型（Object的原型对象）
> 
> ④ 依此类推一直找到 Object 为止（null）
> 
> ⑤ \_\_proto\_\_对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线
> 
> ⑥ 可以使用 instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

### 综合案例

目的： 练习面向对象写插件（模态框）

①：Modal 构造函数 制作

- 需要的公共属性： 标题（title）、提示信息内容（message） 可以设置默认参数
- 在页面中创建模态框

(1) 创建div标签可以命名为：modalBox

(2) div标签的类名为 modal

(3) 标签内部添加 基本结构，并填入相关数据

```javascript
//Modal 构造函数的封装 - 模态框
    function Modal(title = '',message= ''){
      //创建modal模态框盒子
      //创建div标签
      this.modalBox = document.createElement('div')
      //给div标签添加类名为modal
      this.modalBox.className = 'modal'
      // modal盒子内部填充两个div标签并且修改文字内容
      this.modalBox.innerHTML =`
      <div class="header">${title}<i>x</i></div>
    <div class="body">${message}</div>
      `
      console.log(this.modalBox)
    }
```

**步骤**

①：open方法

- 写到构造函数的原型对象身上
- 把刚才创建的modalBox 添加到 页面 body 标签中
- open 打开的本质就是 把创建标签添加到页面中
- 点击按钮， 实例化对象，传入对应的参数，并执行 open 方法

```javascript
//调用构造函数
    // new Modal('温馨提示','您没有权限删除操作')
    //给构造函数原型对象挂载open方法
    Modal.prototype.open = function(){
      //不要用箭头函数(需要用到this)
      // 把刚才创建的modelBox显示到 页面body中
      document.body.append(this.modalBox)
    }

    //测试一下点击删除按钮
    document.querySelector('#delete').addEventListener('click',()=>{
      const del = new Modal('温馨提示','您没有权限删除操作')
      //实例对象调用open方法
      del.open()
    })

    //测试一下点击登录按钮
    document.querySelector('#login').addEventListener('click',()=>{
      const login = new Modal('友情提示','您没有注册')
      //实例对象调用open方法
      login.open()
    })
```

步骤：

①：close方法

- 写到构造函数的原型对象身上
- 把刚才创建的modalBox 从页面 body 标签中 删除
- 需要注意，x 删除按钮绑定事件，要写到open里面添加

因为open是往页面中添加元素，同时顺便绑定事件

有个小bug需要我们解决一下，就是多次点击的时候显示很多的模态框，准备open显示的时候我们要先判断页面里面有没有modal盒子，有的话就移除，没有的话就添加

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>面向对象封装消息提示</title>
  <style>
    .modal {
      width: 300px;
      min-height: 100px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      position: fixed;
      z-index: 999;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      background-color: #fff;
    }

    .modal .header {
      line-height: 40px;
      padding: 0 10px;
      position: relative;
      font-size: 20px;
    }

    .modal .header i {
      font-style: normal;
      color: #999;
      position: absolute;
      right: 15px;
      top: -2px;
      cursor: pointer;
    }

    .modal .body {
      text-align: center;
      padding: 10px;
    }

    .modal .footer {
      display: flex;
      justify-content: flex-end;
      padding: 10px;
    }

    .modal .footer a {
      padding: 3px 8px;
      background: #ccc;
      text-decoration: none;
      color: #fff;
      border-radius: 2px;
      margin-right: 10px;
      font-size: 14px;
    }

    .modal .footer a.submit {
      background-color: #369;
    }
  </style>
</head>

<body>
  <button id="delete">删除</button>
  <button id="login">登录</button>

  <script>
    // Modal 构造函数的封装 - 模态框
    function Modal(title = '', message = '') {
      // 创建 modal 模态框盒子
      // 创建 div 标签
      this.modalBox = document.createElement('div');
      // 给 div 标签添加类名为 modal
      this.modalBox.className = 'modal';
      // modal 盒子内部填充两个 div 标签并且修改文字内容
      this.modalBox.innerHTML = `
        <div class="header">${title}<i>x</i></div>
        <div class="body">${message}</div>
      `;
    }

    // 调用构造函数
    // new Modal('温馨提示','您没有权限删除操作')

    // 给构造函数原型对象挂载 open 方法
    Modal.prototype.open = function () {
      // 先检查页面上是否已经有一个 modal 如果有则先移除
      const existingModal = document.querySelector('.modal');
      if (existingModal) {
        existingModal.remove();
      }

      // 把刚才创建的 modalBox 显示到页面 body 中
      document.body.append(this.modalBox);
      // 等着盒子显示出来就可以绑定点击事件了
      this.modalBox.querySelector('i').addEventListener('click', () => {
        // this 指向实例对象
        this.close();
      });
    }

    // 测试一下点击删除按钮
    document.querySelector('#delete').addEventListener('click', () => {
      const del = new Modal('温馨提示', '您没有权限删除操作');
      // 实例对象调用 open 方法
      del.open();
    });

    // 测试一下点击登录按钮
    document.querySelector('#login').addEventListener('click', () => {
      const login = new Modal('友情提示', '您没有注册');
      // 实例对象调用 open 方法
      login.open();
    });

    // 给构造函数的原型函数对象挂载 close 方法
    Modal.prototype.close = function () {
      this.modalBox.remove();
    }
  </script>
</body>

</html>
```

​
