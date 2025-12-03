---
title: JS进阶
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/692fd7cd4c455cbabc958616.jpg
tags: JS
categories: 前端
---

### 深浅拷贝

#### 深拷贝

开发中我们经常需要复制一个对象，如果直接用赋值会有下面的问题

深浅拷贝只针对引用类型，深拷贝拷贝的是对象，不是地址

常见方法：

1. 通过递归实现深拷贝
2. lodash/cloneDeep
3. 通过JSON.stringify()实现

##### 递归实现深拷贝

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
        let num = 1
        function fn() {
            console.log('我要打印六次')
            if (num >= 6) {
                return
            }
            num++
            fn()
        }
        fn()
    </script>
</body>

</html>
```

函数递归：利用递归函数实现 setTimeout 模拟 setInterval效果

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
        function getTime(){
            const time = new Date().toLocaleString()
            console.log(time)
            setTimeout(getTime,1000)     //定时器调用当前的函数
        }
        getTime()
    </script>
</body>
</html>
```

通过递归函数实现深拷贝

常见的方法：js库lodash里面cloneDeep内部实现了深拷贝

通过JSON.stringify()实现

#### 浅拷贝

浅拷贝：拷贝的是地址

常见方法：

1. 拷贝对象：Object.assgin() / 展开运算符 {...obj} 拷贝对象

2.拷贝数组：Array.prototype.concat() 或者 [...arr]

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
        const obj = {
            uname:'pink'
        }
        const o ={...obj}
        console.log(o)
        o.uname  = 'red'
        console.log(o)
        console.log(obj)
    </script>
</body>
</html>
```

但是还有问题。。。

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
       const pink = {
        name:'品客老师',
        age:28
       }
        const red = {}
        Object.assign(red,pink)
        console.log(red)     //品客老师 
        red.name = 'red老师'
        console.log(red)    //red老师
        console.log(pink)   //品客老师
    </script>
</body>
</html>
```

如果是简单的数据类型拷贝值，引用数据类型拷贝的是地址（如果是单层对象就没问题，如果是多层就有问题）

### 异常处理

#### throw 抛异常

异常处理是指预估代码执行过程中可能发生的错误，然后最大程度的避免错误的发生导致整个程序无法继续运行

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
        function counter(x,y){
            if(!x || !y){
                //throw参数不能为空
                throw new Error('参数不能为空')
            }
            return x+y
        }
        counter()
    </script>
</body>
</html>
```

> 总结：
> 
> 1. throw 抛出异常信息，程序也会终止执行
> 2. throw 后面跟的是错误提示信息
> 3. Error 对象配合 throw 使用，能够设置更详细的错误信息

#### try /catch 捕获异常

我们可以通过try / catch 捕获错误信息（浏览器提供的错误信息） try 试试 catch 拦住 finally 最后

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
        function foo(){
            try{
                //查找DOM节点
                const p = document.querySelector('.p')
                p.style.color = 'red'
            } catch (error){
                //try代码段执行有错误的时候，汇之星catch代码段
                // 查看错误信息
                console.log(error.message)
                //终止代码继续执行
                return
            }
            finally{
                alert('执行')
            }
            console.log('如果出现错误，我的语句将不会执行')
        }
        foo()
    </script>
</body>
</html>
```

> 总结：
> 
> 1. try...catch 用于捕获错误信息
> 2. 将预估可能发生错误的代码写在 try 代码段中
> 3. 如果 try 代码段中出现错误后，会执行 catch 代码段，并截获到错误信息
> 4. finally 不管是否有错误，都会执行

捕获异常：try catch finally

可能会出现的错误代码：try

调用错误信息：利用catch的参数

#### debugger

我们可以通过try/catch捕获错误信息（浏览器提供的错误信息）

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
        const arr = [1, 3, 5]
        const newArr = arr.map((item, index) => {
            debugger
            console.log(item)       //当前元素
            console.log(index)      //当前元素引号
            return item + 10          //当前元素+10
        })
        console.log(newArr)         //[11,13,15]
    </script>
</body>

</html>
```

### 处理this

#### this指向

this 是 JavaScript 最具“魅惑”的知识点，不同的应用场合 this 的取值可能会有意想不到的结果

##### 普通函数this指向

普通函数的调用方式决定了 this 的值，即【谁调用 this 的值指向谁】

普通函数没有明确调用者时 this 值为 window，严格模式下没有调用者时 this 的值为 undefined

##### 箭头函数this指向

箭头函数中的this与普通函数完全不同，也不受调用方式的影响，事实上箭头函数中并不存在 this

> 1. 箭头函数会默认帮我们绑定外层 this 的值，所以在箭头函数中 this 的值和外层的 this 是一样的
> 
> 2.箭头函数中的this引用的就是最近作用域中的this
> 
> 3.向外层作用域中，一层一层查找this，直到有this的定义

tips：在开发中【使用箭头函数前需要考虑函数中 this 的值】，事件回调函数使用箭头函数时，this 为全局的 window 因此DOM事件回调函数如果里面需要DOM对象的this，则不推荐使用箭头函数

tips：同样由于箭头函数 this 的原因，基于原型的面向对象也不推荐采用箭头函数

总结：

> 1. 函数内不存在this，沿用上一级的
> 
> 2.不适用 ：构造函数，原型函数，dom事件函数等等
> 
> 3. 适用 ：需要使用上层this的地方

#### 改变this

JS中允许指定函数中this中的指向，有3个方法可以动态指定普通函数中this的指向

##### call()

使用 call 方法调用函数，同时指定被调用函数中 this 的值

语法：**fun.call(thisArg, arg1, arg2, ...)**

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
        const obj = {
            name:'pink'
        }
        function fn(){
            console.log(this)   //指向obj
        }
        fn.call(obj)
    </script>
</body>
</html>
```

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
        const obj = {
            name:'pink'
        }
        function fn(x,y){
            console.log(this)   //指向obj
            console.log(x,y)     //传送过来的参数相加
        }
        fn.call(obj,1,2)
    </script>
</body>
</html>
```

thisArg：在 fun 函数运行时指定的 this 值

arg1，arg2：传递的其他参数

返回值就是函数的返回值，因为它就是调用函数

##### apply()

使用 apply 方法调用函数，同时指定被调用函数中 this 的值

**语法： fun.apply(thisArg, [argsArray])**

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
        // 求和函数
        function counter(x,y){
            return x+y
        }
        //调用counter函数，并传入参数
        let result = counter.apply(null,[5,10])
        console.log(result)
    </script>
</body>
</html>
```

> thisArg：在fun函数运行时指定的 this 值
> 
> argsArray：传递的值，必须包含在数组里面
> 
> 返回值就是函数的返回值，因为它就是调用函数
> 
> 因此 apply 主要跟数组有关系，比如使用 Math.max() 求数组的最大值

求数组最大值有两个方法：

call和apply的区别是都是调用函数，都能改变this指向，参数不一样，apply传递的必须是数组

##### bind()

bind() 方法不会调用函数。但是能改变函数内部this 指向

**语法：fun.bind(thisArg, arg1, arg2, ...)**

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
        //普通函数
        function sayHi(){
            console.log(this)
        }
        let user ={
            name:'小明',
            age:18
        }
        //调用bind指定this的值
        let sayHello = sayHi.bind(user)
        //调用使用bind创建的新函数
        sayHello()
    </script>
</body>
</html>
```

thisArg：在 fun 函数运行时指定的 this 值

arg1，arg2：传递的其他参数

返回由指定的 this 值和初始化参数改造的 原函数拷贝 （新函数）

因此当我们只是想改变 this 指向，并且不想调用这个函数的时候，可以使用 bind，比如改变定时器内部的 this指向

### 性能优化

#### 防抖

防抖就是触发事件后在n秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间

举个例子：

北京买房政策：需要连续5年的社保，如果中间有一年断了社保，则需要从新开始计算 比如，我 2020年开始计算，连续交5年，也就是到2024年可以买房了，包含2020年 但是我 2024年断社保了，整年没交，则需要从2025年开始算第一年往后推5年… 也就是 2029年才能买房…

再比如说王者 的回城（死去的游戏开始攻击我，都多少年没玩了）

使用场景：搜索框防抖

假设输入就可以发送请求，但是不能每次输入都去发送请求，输入比较快发送请求会比较多 我们设定一个时间，假如300ms， 当输入第一个字符时候，300ms后发送请求，但是在200ms的时候又输入了一个字符， 则需要再等300ms 后发送请求

要求：鼠标在盒子上移动，鼠标停止之后，500ms后里面的数字就会变化+1

这种方式可能会造成卡顿

所以我们可以使用lodash提供的防抖来处理，也可以手写一个防抖函数来处理

##### lodash提供防抖

[Lodash 简介 | Lodash中文文档 | Lodash中文网https://www.lodashjs.com/](https://www.lodashjs.com/ "Lodash 简介 | Lodash中文文档 | Lodash中文网") 这是lodash的官方文档

这是那个防抖函数

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    .box {
      width: 500px;
      height: 500px;
      background-color: #ccc;
      color: #fff;
      text-align: center;
      font-size: 100px;
    }
  </style>
</head>

<body>
  <div class="box"></div>
  <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
  <script>
    //利用防抖实现性能优化
    const box = document.querySelector('.box')
    let i=1
    function mouseMove(){
      box.innerHTML = i++
    }
    //添加事件
    // box.addEventListener('mousemove',mouseMove)
    //利用lodash库实现防抖 -500ms之后采取+1
    box.addEventListener('mousemove',_.debounce(mouseMove,500))
  </script>
</body>

</html>
```

这就是实现防抖效果

##### 手写防抖函数

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    .box {
      width: 500px;
      height: 500px;
      background-color: #ccc;
      color: #fff;
      text-align: center;
      font-size: 100px;
    }
  </style>
</head>

<body>
  <div class="box"></div>
  <script>
    //利用防抖实现性能优化
    const box = document.querySelector('.box')
    let i=1
    function mouseMove(){
      box.innerHTML = i++
    }
    //手写防抖函数，通过定时器实现
    function debounce(fn,t){
        let timer
        //返回匿名函数
        return function(){
            //函数调用就执行这个
            if(timer) clearTimeout(timer)
            timer = setTimeout(function(){
                fn()    //加()调用fn函数
            },t)
        }
    }
    box.addEventListener('mousemove',debounce(mouseMove,500))
  </script>
</body>

</html>
```

#### 节流

节流就是指连续触发事件但是在 n 秒中只执行一次函数

只有等到了上一个人做完核酸，整个动作完成了， 第二个人才能排队跟上

举个例子：**王者的技能冷却，冷却期间无法释放技能**

开发使用场景 – 小米轮播图点击效果 、 鼠标移动、页面尺寸缩放resize、滚动条滚动 就可以加节流

假如一张轮播图完成切换需要300ms， 不加节流效果，快速点击，则嗖嗖嗖的切换

加上节流效果， 不管快速点击多少次， 300ms时间内，只能切换一张图片

利用节流来处理-鼠标滑过盒子显示文字

要求：鼠标在盒子上移动，里面的数字就会变化+1

①： 如果以前方式，每次鼠标移动就会有大量操作，触发频次太高

##### 手写节流函数

要求：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    .box {
      width: 500px;
      height: 500px;
      background-color: #ccc;
      color: #fff;
      text-align: center;
      font-size: 100px;
    }
  </style>
</head>

<body>
  <div class="box"></div>
  <script>
    //利用防抖实现性能优化
    const box = document.querySelector('.box')
    let i=1
    function mouseMove(){
      box.innerHTML = i++
    }
    //手写节流函数，通过定时器实现
    function throttle(fn,t){
        let timer =null
        return function(){
            if(!timer)
        {
            timer=setTimeout(function(){
                fn()
                //清空定时器
                timer = null
            },t)
        }
        }
    }
    box.addEventListener('mousemove',throttle(mouseMove,500))
  </script>
</body>

</html>
```

##### lodash库节流函数

这个是节流函数：
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    .box {
      width: 500px;
      height: 500px;
      background-color: #ccc;
      color: #fff;
      text-align: center;
      font-size: 100px;
    }
  </style>
</head>

<body>
  <div class="box"></div>
  <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
  <script>
    //利用防抖实现性能优化
    const box = document.querySelector('.box')
    let i=1
    function mouseMove(){
      box.innerHTML = i++
    }
    //添加事件
    // box.addEventListener('mousemove',mouseMove)
    //利用lodash库实现节流 -500ms之后采取+1
    box.addEventListener('mousemove',_.throttle(mouseMove,500))
  </script>
</body>

</html>
```

### 综合案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="referrer" content="never" />
  <title>综合案例</title>
  <style>
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    .container {
      width: 1200px;
      margin: 0 auto;
    }

    .video video {
      width: 100%;
      padding: 20px 0;
    }

    .elevator {
      position: fixed;
      top: 280px;
      right: 20px;
      z-index: 999;
      background: #fff;
      border: 1px solid #e4e4e4;
      width: 60px;
    }

    .elevator a {
      display: block;
      padding: 10px;
      text-decoration: none;
      text-align: center;
      color: #999;
    }

    .elevator a.active {
      color: #1286ff;
    }

    .outline {
      padding-bottom: 300px;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <a href="http://pip.itcast.cn">
        <img src="https://pip.itcast.cn/img/logo_v3.29b9ba72.png" alt="" />
      </a>
    </div>
    <div class="video">
      <video src="https://v.itheima.net/LapADhV6.mp4" controls></video>
    </div>
    <div class="elevator">
      <a href="javascript:;" data-ref="video">视频介绍</a>
      <a href="javascript:;" data-ref="intro">课程简介</a>
      <a href="javascript:;" data-ref="outline">评论列表</a>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
  <script>
    //获取元素，要对视频进行操作
    const video = document.querySelector('video')
    video.ontimeupdate = _.throttle(() => {
      //把当前时间存储到本地存储
      localStorage.setItem('currentTime', video.currentTime)
    }, 1000)
    //打开页面触发事件，从本地存储里面取出记录的时间，赋值给video.currentTime
    video.onloadeddata = () => {
      video.currentTime = localStorage.getItem('currentTime') || 0
    }
  </script>
</body>

</html>
```

​
