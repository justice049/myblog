---
title: JS事件
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/692fab7d7313ea6c25104a6c.jpg
tags: JS
categories: 前端
---

### 事件监听（绑定）

##### 事件监听

目标：能够给DOM元素添加事件监听

###### 什么是事件

事件是在编程时系统内发生的动作或者发生的事情

比如用户再网页上点击一个按钮

###### 什么是事件监听

就是让程序检测是否有事件产生，一旦有事件触发，就立即调用一个函数做出响应，也称为绑定时间或者注册事件

比如鼠标经过显示下拉菜单，点击播放轮播图等

**事件类型要加引号**

**函数是点击之后再去执行，每次点击都会执行一次**

这是实例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button class="btn">
        这是一个按钮
    </button>
    <script>
        const btn = document.querySelector('.btn')
        btn.addEventListener('click',function(){
            alert('点击了')
        })
    </script>
</body>
</html>
```

讲真的有点像Linux的抓取信号

##### 点击关闭顶部广告

需求是点击关闭之后顶部就关闭了

分析：

点击的是关闭按钮

关闭的是父盒子

核心：利用样式的显示和隐藏完成

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            position: relative;
            width: 300px;
            height: 300px;
            background-color: pink;
            line-height: 300px;
            text-align: center;
            font-size: 33px;
            margin: 0 auto;
        }
        .box1{
            position: absolute;
            right: 20px;
            top:10px;
            width: 20px;
            height: 20px;
            background-color: skyblue;
            line-height: 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="box">
        我是广告
        <div class="box1">
            x
        </div>
    </div>
    <script>
        // 获取事件源
        const box1=document.querySelector('.box1')
        const box=document.querySelector('.box')
        // 事件侦听
        box1.addEventListener('click',function(){
            box.style.display = 'none'
        })
    </script>
</body>
</html>
```

display:none隐藏元素

display:block 显示元素

##### 随机点名


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        h2 {
            text-align: center;
        }

        .box {
            width: 600px;
            margin: 50px auto;
            display: flex;
            font-size: 25px;
            line-height: 40px;
        }

        .qs {

            width: 450px;
            height: 40px;
            color: red;

        }

        .btns {
            text-align: center;
        }

        .btns button {
            width: 120px;
            height: 35px;
            margin: 0 50px;
        }
    </style>
</head>

<body>
    <h2>随机点名</h2>
    <div class="box">
        <span>名字是：</span>
        <div class="qs">这里显示姓名</div>
    </div>
    <div class="btns">
        <button class="start">开始</button>
        <button class="end">结束</button>
    </div>

    <script>
        // 数据数组
        const arr = ['马超', '黄忠', '赵云', '关羽', '张飞']

        const qs = document.querySelector('.qs')
        //业务1：开始按钮模块
        let timeId = 0
        let random = 0
        const start = document.querySelector('.start')
        start.addEventListener('click', function () {
            timeId = setInterval(function () {
                random = parseInt(Math.random() * arr.length)
                qs.innerHTML = arr[random]
            }, 35)
            // 如果数组里面只有一个值了，那么就不需要抽取了，让两个按钮禁用即可
            if(arr.length === 1){
                start.disabled = true
                end.disabled = true
            }
        })
        const end = document.querySelector('.end')
        end.addEventListener('click',function(){
            clearInterval(timeId)
            arr.splice(random,1)
        })
    </script>
</body>

</html>
```

#### 轮播图点击切换

需求：点击左右按钮可以切换轮播图

先完成前两条：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>轮播图点击切换</title>
    <style>
        * {
            box-sizing: border-box;
        }

        .slider {
            width: 560px;
            height: 400px;
            overflow: hidden;
        }

        .slider-wrapper {
            width: 100%;
            height: 320px;
        }

        .slider-wrapper img {
            width: 100%;
            height: 100%;
            display: block;
        }

        .slider-footer {
            height: 80px;
            background-color: rgb(100, 67, 68);
            padding: 12px 12px 0 12px;
            position: relative;
        }

        .slider-footer .toggle {
            position: absolute;
            right: 0;
            top: 12px;
            display: flex;
        }

        .slider-footer .toggle button {
            margin-right: 12px;
            width: 28px;
            height: 28px;
            appearance: none;
            border: none;
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
            border-radius: 4px;
            cursor: pointer;
        }

        .slider-footer .toggle button:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        .slider-footer p {
            margin: 0;
            color: #fff;
            font-size: 18px;
            margin-bottom: 10px;
        }

        .slider-indicator {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            align-items: center;
        }

        .slider-indicator li {
            width: 8px;
            height: 8px;
            margin: 4px;
            border-radius: 50%;
            background: #fff;
            opacity: 0.4;
            cursor: pointer;
        }

        .slider-indicator li.active {
            width: 12px;
            height: 12px;
            opacity: 1;
        }
    </style>
</head>

<body>
    <div class="slider">
        <div class="slider-wrapper">
            <img src="./images/slider01.jpg" alt="" />
        </div>
        <div class="slider-footer">
            <p>对人类来说会不会太超前了？</p>
            <ul class="slider-indicator">
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div class="toggle">
                <button class="prev">&lt;</button>
                <button class="next">&gt;</button>
            </div>
        </div>
    </div>
    <script>
        // 1. 初始数据
        const data = [
            { url: './images/slider01.jpg', title: '对人类来说会不会太超前了？', color: 'rgb(100, 67, 68)' },
            { url: './images/slider02.jpg', title: '开启剑与雪的黑暗传说！', color: 'rgb(43, 35, 26)' },
            { url: './images/slider03.jpg', title: '真正的jo厨出现了！', color: 'rgb(36, 31, 33)' },
            { url: './images/slider04.jpg', title: '李玉刚：让世界通过B站看到东方大国文化', color: 'rgb(139, 98, 66)' },
            { url: './images/slider05.jpg', title: '快来分享你的寒假日常吧~', color: 'rgb(67, 90, 92)' },
            { url: './images/slider06.jpg', title: '哔哩哔哩小年YEAH', color: 'rgb(166, 131, 143)' },
            { url: './images/slider07.jpg', title: '一站式解决你的电脑配置问题！！！', color: 'rgb(53, 29, 25)' },
            { url: './images/slider08.jpg', title: '谁不想和小猫咪贴贴呢！', color: 'rgb(99, 72, 114)' },
        ]

        const img = document.querySelector('.slider-wrapper img')
        const p = document.querySelector('.slider-footer p')
        const color = document.querySelector('.slider-footer')
        // 右按钮业务
        // 获取右侧按钮
        const next = document.querySelector('.next')

        let i = 0     //信号量，控制播放图片张数
        // 注册点击事件
        next.addEventListener('click', function () {
            i++
            if (i >= 8) {
                i = 0
            }
          commen()
        })

        // 左按钮业务
        // 获取左侧按钮
        const prev = document.querySelector('.prev')
        // 注册点击事件
        prev.addEventListener('click', function () {
            i--
            if (i < 0) {
                i = 7
            }
            commen()
        })

        // 因为左右的后面代码一样，所以在此声明一个渲染的函数作为复用
        function commen(){
            // 得到对应的对象
            img.src = data[i].url
            p.innerHTML = data[i].title
            color.style.background = data[i].color

            document.querySelector('.slider-indicator .active').classList.remove('active')
            document.querySelector(`.slider-indicator li:nth-child(${i + 1})`).classList.add('active')
        }
    </script>
</body>

</html>
```

接下来添加计时器模块，我们可以通过JS自动调用点击事件：

#### 小米搜索框案例

需求：当表单得到焦点，显示下拉菜单，失去焦点就隐藏下拉菜单

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        ul {

            list-style: none;
        }

        .mi {
            position: relative;
            width: 223px;
            margin: 100px auto;
        }

        .mi input {
            width: 223px;
            height: 48px;
            padding: 0 10px;
            font-size: 14px;
            line-height: 48px;
            border: 1px solid #e0e0e0;
            outline: none;
        }

        .mi .search {
            border: 1px solid #ff6700;
        }

        .result-list {
            display: none;
            position: absolute;
            left: 0;
            top: 48px;
            width: 223px;
            border: 1px solid #ff6700;
            border-top: 0;
            background: #fff;
        }

        .result-list a {
            display: block;
            padding: 6px 15px;
            font-size: 12px;
            color: #424242;
            text-decoration: none;
        }

        .result-list a:hover {
            background-color: #eee;
        }
    </style>

</head>

<body>
    <div class="mi">
        <input type="search" placeholder="小米笔记本">
        <ul class="result-list">
            <li><a href="#">全部商品</a></li>
            <li><a href="#">小米11</a></li>
            <li><a href="#">小米10S</a></li>
            <li><a href="#">小米笔记本</a></li>
            <li><a href="#">小米手机</a></li>
            <li><a href="#">黑鲨4</a></li>
            <li><a href="#">空调</a></li>
        </ul>
    </div>
    <script>
        const input = document.querySelector('input')
        const ul = document.querySelector('.result-list')
        input.addEventListener('focus',function(){
            ul.style.display = 'block'
            input.classList.add('search')
        })
        input.addEventListener('blur',function(){
            ul.style.display = 'none'
            input.classList.remove('search')
        })
    </script>
</body>

</html>
```

就这样孩子们

#### 评论字数统计

需求：用户输入文字，可以计算用户输入的字数


```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>评论回车发布</title>
  <style>
    .wrapper {
      min-width: 400px;
      max-width: 800px;
      display: flex;
      justify-content: flex-end;
    }

    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;
      background: url(./images/avatar.jpg) no-repeat center / cover;
      margin-right: 20px;
    }

    .wrapper textarea {
      outline: none;
      border-color: transparent;
      resize: none;
      background: #f5f5f5;
      border-radius: 4px;
      flex: 1;
      padding: 10px;
      transition: all 0.5s;
      height: 30px;
    }

    .wrapper textarea:focus {
      border-color: #e4e4e4;
      background: #fff;
      height: 50px;
    }

    .wrapper button {
      background: #00aeec;
      color: #fff;
      border: none;
      border-radius: 4px;
      margin-left: 10px;
      width: 70px;
      cursor: pointer;
    }

    .wrapper .total {
      margin-right: 80px;
      color: #999;
      margin-top: 5px;
      opacity: 0;
      transition: all 0.5s;
    }

    .list {
      min-width: 400px;
      max-width: 800px;
      display: flex;
    }

    .list .item {
      width: 100%;
      display: flex;
    }

    .list .item .info {
      flex: 1;
      border-bottom: 1px dashed #e4e4e4;
      padding-bottom: 10px;
    }

    .list .item p {
      margin: 0;
    }

    .list .item .name {
      color: #FB7299;
      font-size: 14px;
      font-weight: bold;
    }

    .list .item .text {
      color: #333;
      padding: 10px 0;
    }

    .list .item .time {
      color: #999;
      font-size: 12px;
    }
  </style>
</head>

<body>
  <div class="wrapper">
    <i class="avatar"></i>
    <textarea id="tx" placeholder="发一条友善的评论" rows="2" maxlength="200"></textarea>
    <button>发布</button>
  </div>
  <div class="wrapper">
    <span class="total">0/200字</span>
  </div>
  <div class="list">
    <div class="item" style="display: none;">
      <i class="avatar"></i>
      <div class="info">
        <p class="name">清风徐来</p>
        <p class="text">大家都辛苦啦，感谢各位大大的努力，能圆满完成真是太好了[笑哭][支持]</p>
        <p class="time">2022-10-10 20:29:21</p>
      </div>
    </div>
  </div>
<script>
  
  const tx=document.querySelector('#tx')
  const total=document.querySelector('.total')
 
  // 当文本域失去了焦点，就让total显示
  tx.addEventListener('focus',function(){
    total.style.opacity = 1
  })
  // 当文本域失去了焦点，就让total隐藏
  tx.addEventListener('blur',function(){
    total.style.opacity = 0
  })
  // 检测用户输入
  tx.addEventListener('input',function(){
    total.innerHTML = `${tx.value.length}/200字`
  })
</script>
</body>

</html>
```

这个我写的就只有JS那小部分，当文本域获得焦点，就让total显示

当文本域时区焦点，就让total隐藏

检测用户输入

### 事件对象

#### 获取事件对象

能说出什么是事件对象不？

不能就滚去学

哦。

事件对象是对象，这个对象里有时间触发时的相关信息

例如：鼠标点击事件中，事件对象就存了鼠标点在哪个位置等信息

**获取事件对象**

语法：如何获取

在事件绑定的回调函数第一个参数就是事件对象

一般命名为event、ev、e

事件对象是对象，这个里有事件触发的相关信息

在事件绑定的回调函数的第一个参数就是事件对象

#### 评论回车回复案例

需求是按下回车键盘，可以发布信息
最好是用keyup

我们来介绍一下trim吧

这个可以来介绍这个：

```javascript
const str = '         pi nk'
console.log(str.trim())
```

这个trim可以去除没用的空格

有效的空格没所谓

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>评论回车发布</title>
  <style>
    .wrapper {
      min-width: 400px;
      max-width: 800px;
      display: flex;
      justify-content: flex-end;
    }

    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;
      background: url(./images/avatar.jpg) no-repeat center / cover;
      margin-right: 20px;
    }

    .wrapper textarea {
      outline: none;
      border-color: transparent;
      resize: none;
      background: #f5f5f5;
      border-radius: 4px;
      flex: 1;
      padding: 10px;
      transition: all 0.5s;
      height: 30px;
    }

    .wrapper textarea:focus {
      border-color: #e4e4e4;
      background: #fff;
      height: 50px;
    }

    .wrapper button {
      background: #00aeec;
      color: #fff;
      border: none;
      border-radius: 4px;
      margin-left: 10px;
      width: 70px;
      cursor: pointer;
    }

    .wrapper .total {
      margin-right: 80px;
      color: #999;
      margin-top: 5px;
      opacity: 0;
      transition: all 0.5s;
    }

    .list {
      min-width: 400px;
      max-width: 800px;
      display: flex;
    }

    .list .item {
      width: 100%;
      display: flex;
    }

    .list .item .info {
      flex: 1;
      border-bottom: 1px dashed #e4e4e4;
      padding-bottom: 10px;
    }

    .list .item p {
      margin: 0;
    }

    .list .item .name {
      color: #FB7299;
      font-size: 14px;
      font-weight: bold;
    }

    .list .item .text {
      color: #333;
      padding: 10px 0;
    }

    .list .item .time {
      color: #999;
      font-size: 12px;
    }
  </style>
</head>

<body>
  <div class="wrapper">
    <i class="avatar"></i>
    <textarea id="tx" placeholder="发一条友善的评论" rows="2" maxlength="200"></textarea>
    <button>发布</button>
  </div>
  <div class="wrapper">
    <span class="total">0/200字</span>
  </div>
  <div class="list">
    <div class="item" style="display: none;">
      <i class="avatar"></i>
      <div class="info">
        <p class="name">switch</p>
        <p class="text">西安邮电美食广场外面的小灯效仿大唐不夜城，就让它效仿到了个唐[笑哭][支持]</p>
        <p class="time">2024-11-27 20:29:21</p>
      </div>
    </div>
  </div>
  <script>

    const tx = document.querySelector('#tx')
    const total = document.querySelector('.total')
    const item = document.querySelector('.item')
    const text = document.querySelector('.text')

    // 当文本域获得了焦点，就让total显示
    tx.addEventListener('focus', function () {
      total.style.opacity = 1
    })
    // 当文本域失去了焦点，就让total隐藏
    tx.addEventListener('blur', function () {
      total.style.opacity = 0
    })
    // 检测用户输入
    tx.addEventListener('input', function () {
      total.innerHTML = `${tx.value.length}/200字`
    })
    // 按下回车发布评论
    tx.addEventListener('keyup', function (e) {
      // 只有按下回车键才触发
      if (e.key === 'Enter') {
        if(tx.value.trim() !== '')
      {
        item.style.display = 'block'
        text.innerHTML = tx.value
        // 等我们按下回车之后结束并清空文本域
      }
        tx.value = ''
        total.innerHTML = `${tx.value.length}/200字`
      }
    })
  </script>
</body>

</html>
```

### 环境对象

目标：能够分析判断函数运行在不同环境中，this所纸袋的对象

环境对象：指的是函数内容的特殊变量this，它代表当前函数所处的环境

作用：

弄清楚this的指向，可以让我们代码更简洁

函数的调用方式不同，this纸袋的对象也不同

谁调用this就是谁，是判断this指向的粗略原则

直接调用函数，直接相当于是window.函数，所以用this指代window.

有点像this指针


### 综合案例

**Tab栏切换**

我们的需求是鼠标经过不同的选项卡底部可以显示不同的内容
那有的人就要问了，哎？你鼠标经过变的话，你用hover不就行了？

此言差矣

你点完之后，它还是停留在那个界面

所以这个是鼠标经过事件，而不是单纯的hover

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>tab栏切换</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .tab {
      width: 590px;
      height: 340px;
      margin: 20px;
      border: 1px solid #e4e4e4;
    }

    .tab-nav {
      width: 100%;
      height: 60px;
      line-height: 60px;
      display: flex;
      justify-content: space-between;
    }

    .tab-nav h3 {
      font-size: 24px;
      font-weight: normal;
      margin-left: 20px;
    }

    .tab-nav ul {
      list-style: none;
      display: flex;
      justify-content: flex-end;
    }

    .tab-nav ul li {
      margin: 0 20px;
      font-size: 14px;
    }

    .tab-nav ul li a {
      text-decoration: none;
      border-bottom: 2px solid transparent;
      color: #333;
    }

    .tab-nav ul li a.active {
      border-color: #e1251b;
      color: #e1251b;
    }

    .tab-content {
      padding: 0 16px;
    }

    .tab-content .item {
      display: none;
    }

    .tab-content .item.active {
      display: block;
    }
  </style>
</head>

<body>
  <div class="tab">
    <div class="tab-nav">
      <h3>每日特价</h3>
      <ul>
        <li><a class="active" href="javascript:;">精选</a></li>
        <li><a href="javascript:;">美食</a></li>
        <li><a href="javascript:;">百货</a></li>
        <li><a href="javascript:;">个护</a></li>
        <li><a href="javascript:;">预告</a></li>
      </ul>
    </div>
    <div class="tab-content">
      <div class="item active"><img src="./images/tab00.png" alt="" /></div>
      <div class="item"><img src="./images/tab01.png" alt="" /></div>
      <div class="item"><img src="./images/tab02.png" alt="" /></div>
      <div class="item"><img src="./images/tab03.png" alt="" /></div>
      <div class="item"><img src="./images/tab04.png" alt="" /></div>
    </div>
  </div>
  <script>
    // 给每个东西都添加定向模块
    const as = document.querySelectorAll('.tab-nav a')
    // console.log(as)
    for (let i = 0; i < as.length; i++) {
      as[i].addEventListener('mouseenter', function () {
        // 给五个li都绑定鼠标经过事件
        // console.log('鼠标经过')
        document.querySelector('.tab-nav .active').classList.remove('active')
        // 添加类active
        this.classList.add('active')   //这个this就是as[i]
        // 五个盒子
        document.querySelector('.tab-content .active').classList.remove('active')
        // 对应序号的item显示添加active类
        document.querySelector(`.tab-content .item:nth-child(${i+1})`).classList.add('active')
      })
    }
  </script>
</body>

</html>
```

这个和之前的也差不多，是删除之后再对应添加

### 全选文本框案例

需求是用户点击全选就把这些复选框全选了，如果取消全选就全部取消
还要完成的功能是用户点击全选，复选框全选，取消全选就全部取消，文字对应变化


这个复选框选择器用了伪类选择器

```html
<!DOCTYPE html>

<html>

<head lang="en">
  <meta charset="UTF-8">
  <title></title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
      border: 1px solid #c0c0c0;
      width: 500px;
      margin: 100px auto;
      text-align: center;
    }

    th {
      background-color: #09c;
      font: bold 16px "微软雅黑";
      color: #fff;
      height: 24px;
    }

    td {
      border: 1px solid #d0d0d0;
      color: #404060;
      padding: 10px;
    }

    .allCheck {
      width: 80px;
    }
  </style>
</head>

<body>
  <table>
    <tr>
      <th class="allCheck">
        <input type="checkbox" name="" id="checkAll"> <span class="all">全选</span>
      </th>
      <th>商品</th>
      <th>商家</th>
      <th>价格</th>
    </tr>
    <tr>
      <td>
        <input type="checkbox" name="check" class="ck">
      </td>
      <td>小米手机</td>
      <td>小米</td>
      <td>￥1999</td>
    </tr>
    <tr>
      <td>
        <input type="checkbox" name="check" class="ck">
      </td>
      <td>小米净水器</td>
      <td>小米</td>
      <td>￥4999</td>
    </tr>
    <tr>
      <td>
        <input type="checkbox" name="check" class="ck">
      </td>
      <td>小米电视</td>
      <td>小米</td>
      <td>￥5999</td>
    </tr>
  </table>
  <script>
    // 获取大复选框
    const checkAll = document.querySelector('#checkAll')
    // 获取所有的小复选框
    const cks = document.querySelectorAll('.ck')
    // 点击大复选框，注册事件
    checkAll.addEventListener('click', function () {
      for (let i = 0; i < cks.length; i++) {
        // 遍历所有的小复选框，让所有小复选框的checked = 大复选框的checked
        cks[i].checked = checkAll.checked
      }
    })
    // 小复选框控制大复选框
    for (let i = 0; i < cks.length; i++) {
      cks[i] = addEventListener('click', function () {
        checkAll.checked = document.querySelectorAll('.ck:checked').length === cks.length
      })
    }
  </script>
</body>

</html>
```

### 事件流

#### 事件流与两个阶段

假设页面有个div，当触发事件时，会经历两个阶段：捕获、冒泡

捕获是父到子，冒泡是子到父

实际工作都是用事件冒泡为主

#### 事件捕获

事件捕获是从DOM的根元素开始，执行对应的事件（从外到里）

事件捕获需要写对应代码才能看到效果

addEventListener第三个参数传入 true 代表是捕获阶段触发（很少使用）

若传入false代表冒泡阶段触发，默认就是false

若是用 L0 事件监听，则只有冒泡阶段，没有捕获

#### 事件冒泡

当一个元素事件被触发时，同样的事件将会在该元素的所有祖先中一次触发，这个叫事件冒泡

当一个元素触发事件后，会依次向上调用所有父级元素的同名事件

事件冒泡默认存在

L2事件监听第三个蚕食是false，或者默认都是冒泡

#### 阻止冒泡

因为默认有冒泡模式的存在，所以容易导致事件影响到父级元素

所以如果想把事件限制在当前元素内，就需要组织事件冒泡

阻止事件冒泡要拿到事件对象

此方法可以阻断事件流动传播，不光在冒泡阶段有效，捕获的时候也有用

我们在某些情况下需阻止默认行为的发生，比如阻止链接的跳转，表单域跳转


#### 解绑事件

on事件方式，直接使用null覆盖偶就可以实现事件的解绑


解绑事件

addEventListener方式，必须使用：

removeEventListener(事件类型, 事件处理函数, [获取捕获或者冒泡阶段])

匿名函数无法被解绑

鼠标经过事件的区别

两种注册事件的区别

### 事件委托

如果给多个元素注册事件，我们可以用for循环注册事件

但是有寄巧注册一次就可以完成上面的效果

这个小技巧就是事件委托

事件委托是利用事件流的特征解决一些开发需求的知识技巧

ul.addEventListener('click' , function(){}) 执行父级点击事件
**事件委托的好处：减少注册次数，提高程序性能**

**事件委托委托给了父元素​**

这样找到真正触发的元素：

事件对象.target.tagName

#### Tab栏切换改造

优化程序，将tab切换案例改为事件委托写法
```html
<div data-id="0"></div>
<script>
    const div = document.querySelector('div')
    console.log(div.dataset.id)  ///可以这样获取id:0
</script>
```

这是自定义属性的筛选

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>tab栏切换</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .tab {
      width: 590px;
      height: 340px;
      margin: 20px;
      border: 1px solid #e4e4e4;
    }

    .tab-nav {
      width: 100%;
      height: 60px;
      line-height: 60px;
      display: flex;
      justify-content: space-between;
    }

    .tab-nav h3 {
      font-size: 24px;
      font-weight: normal;
      margin-left: 20px;
    }

    .tab-nav ul {
      list-style: none;
      display: flex;
      justify-content: flex-end;
    }

    .tab-nav ul li {
      margin: 0 20px;
      font-size: 14px;
    }

    .tab-nav ul li a {
      text-decoration: none;
      border-bottom: 2px solid transparent;
      color: #333;
    }

    .tab-nav ul li a.active {
      border-color: #e1251b;
      color: #e1251b;
    }

    .tab-content {
      padding: 0 16px;
    }

    .tab-content .item {
      display: none;
    }

    .tab-content .item.active {
      display: block;
    }
  </style>
</head>

<body>
  <div class="tab">
    <div class="tab-nav">
      <h3>每日特价</h3>
      <ul>
        <li><a class="active" href="javascript:;" data-id="0">精选</a></li>
        <li><a href="javascript:;" data-id="1">美食</a></li>
        <li><a href="javascript:;" data-id="2">百货</a></li>
        <li><a href="javascript:;" data-id="3">个护</a></li>
        <li><a href="javascript:;" data-id="4">预告</a></li>
      </ul>
    </div>
    <div class="tab-content">
      <div class="item active"><img src="./images/tab00.png" alt="" /></div>
      <div class="item"><img src="./images/tab01.png" alt="" /></div>
      <div class="item"><img src="./images/tab02.png" alt="" /></div>
      <div class="item"><img src="./images/tab03.png" alt="" /></div>
      <div class="item"><img src="./images/tab04.png" alt="" /></div>
    </div>
  </div>

  <script>
    // 获取ul事件
    const ul = document.querySelector('.tab-nav ul')
    ul.addEventListener('click',function(e){
      // 只有点击了a才会进行添加类和删除类操作
      if(e.target.tagName == 'A')
    {
      document.querySelector('.tab-nav .active').classList.remove('active')
      e.target.classList.add('active')  //不能用this，this指向的是调用的函数
      const id = +e.target.dataset.id   //字符串转成数字型
      document.querySelector('.tab-content .active').classList.remove('active')
      document.querySelector(`.tab-content .item:nth-child(${id+1})`).classList.add('active')
    }
    })
  </script>
</body>

</html>
```

需要注意的是把字符串转成数字型

### 其他事件

#### 页面加载事件

加载外部资源（图片，外联CSS和JS等）加载完毕的时候触发的事件

为什么要学这个（怎么什么都要学，我恨你们）

事件名：load

监听页面所有资源加载完毕

给window添加load事件

不光可以监听整个页面资源加载完毕，也可以针对某个资源绑定load事件

当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像等完全加载

事件名：DOMContentLoaded

给document添加DOMContentLoaded事件

#### 元素滚动事件

##### 页面滚动事件

我们想要让页面滚动一段距离，比如100px，就让某些元素显示隐藏

可以用scroll来检测滚动的距离

##### 获取位置

在开发中，我们经常检测页面滚动的距离，比如页面滚动100像素就可以显示一个元素或者固定一个元素

document.documentElement HTML 文档返回对象为HTML元素

被卷去的头部或者左侧用scrollTop / scrollLeft属性，可以读取，也可以修改

检测页面滚动的头部距离（被卷去的头部）用document.documentElement.scrollTop属性

##### 页面滚动显示隐藏侧边栏

当页面滚动大于300px的时候，就显示侧边栏，否则隐藏侧边栏

我们需要用到页面滚动事件

检测页面被卷去的头部，如果大于300，就让侧边栏显示

显示和隐藏配合CSS过渡，利用opacity添加渐变效果

以及我都忘了这个对象：

```html
<script>
  const elevator = document.querySelector('.xtx-elevator')
  // 当页面滚动大于三百像素，就显示电梯导航
  // 给页面添加滚动事件
  window.addEventListener('scroll',function(){
    const n =document.documentElement.scrollTop
    if( n >= 300){
      elevator.style.opacity = 1
    }
    else{
      elevator.style.opacity = 0
    }
  })
</script>
```

然后我们再做个点击返回顶部的功能

```javascript
// 点击返回页面顶部
  const backTop = document.querySelector('#backTop')
  backTop.addEventListener('click',function(){
    // 可读写的
    document.documentElement.scrollTop = 0
  })
```

我们还可以通过 scrollTo() 方法把内容滚动到指定的坐标

然后这是以上实例的全部代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>小兔鲜儿 - 新鲜 惠民 快捷!</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="renderer" content="webkit">
  <link rel="stylesheet" href="./css/common.css">
  <link rel="stylesheet" href="./css/index.css">
</head>

<body>
  <!-- 项部导航 -->
  <div class="xtx_topnav">
    <div class="wrapper">
      <!-- 顶部导航 -->
      <ul class="xtx_navs">
        <li>
          <a href="javascript:;">请先登录</a>
        </li>
        <li>
          <a href="javascript:;">免费注册</a>
        </li>
        <li>
          <a href="javascript:;">我的订单</a>
        </li>
        <li>
          <a href="javascript:;">会员中心</a>
        </li>
        <li>
          <a href="javascript:;">帮助中心</a>
        </li>
        <li>
          <a href="javascript:;">在线客服</a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="mobile sprites"></i>
            手机版
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!-- 头部 -->
  <div class="xtx_header">
    <div class="wrapper">
      <!-- 网站Logo -->
      <h1 class="xtx_logo"><a href="/">小兔鲜儿</a></h1>
      <!-- 主导航 -->
      <div class="xtx_navs">
        <ul class="clearfix">
          <li>
            <a href="javascript:;">首页</a>
          </li>
          <li>
            <a href="javascript:;">生鲜</a>
          </li>
          <li>
            <a href="javascript:;">美食</a>
          </li>
          <li>
            <a href="javascript:;">餐厨</a>
          </li>
          <li>
            <a href="javascript:;">电器</a>
          </li>
          <li>
            <a href="javascript:;">居家</a>
          </li>
          <li>
            <a href="javascript:;">洗护</a>
          </li>
          <li>
            <a href="javascript:;">孕婴</a>
          </li>
          <li>
            <a href="javascript:;">服装</a>
          </li>
        </ul>
      </div>
      <!-- 站内搜索 -->
      <div class="xtx_search clearfix">
        <!-- 购物车 -->
        <a href="javascript:;" class="xtx_search_cart sprites">
          <i>2</i>
        </a>
        <!-- 搜索框 -->
        <div class="xtx_search_wrapper">
          <input type="text" placeholder="搜一搜">
        </div>
      </div>
    </div>
  </div>
  <!-- 分类及焦点图 -->
  <div class="xtx_entry">
    <div class="wrapper">
      <!-- 分类 -->
      <div class="xtx_category">
        <!-- 顶级分类 -->
        <ul class="xtx_category_super">
          <li>
            <a href="javascript:;">
              生鲜
              <small>水果</small>
              <small>蔬菜</small>
            </a>
            <i class="sprites"></i>
          </li>
          <li class="active">
            <a href="javascript:;">
              美食
              <small>面点</small>
              <small>干果</small>
            </a>
            <i class="sprites"></i>
          </li>
          <li>
            <a href="javascript:;">
              电器
              <small>数码产品</small>
            </a>
            <i class="sprites"></i>
          </li>
          <li>
            <a href="javascript:;">
              居家
              <small>床品</small>
              <small>四件套</small>
              <small>被枕</small>
            </a>
            <i class="sprites"></i>
          </li>
          <li>
            <a href="javascript:;">
              洗护
              <small>洗发洗护</small>
              <small>美妆</small>
            </a>
            <i class="sprites"></i>
          </li>
          <li>
            <a href="javascript:;">
              孕婴
              <small>奶粉</small>
              <small>玩具</small>
              <small>辅食</small>
            </a>
            <i class="sprites"></i>
          </li>
          <li>
            <a href="javascript:;">
              餐橱
              <small>数码产品</small>
            </a>
            <i class="sprites"></i>
          </li>
          <li>
            <a href="javascript:;">
              服饰
              <small>女装</small>
              <small>男装</small>
            </a>
            <i class="sprites"></i>
          </li>
          <li>
            <a href="javascript:;">
              杂货
              <small>户外</small>
              <small>图书</small>
            </a>
            <i class="sprites"></i>
          </li>
          <li>
            <a href="javascript:;">
              品牌
              <small>品牌制造</small>
            </a>
            <i class="sprites"></i>
          </li>
        </ul>
        <!-- 子分类 -->
        <div class="xtx_category_subset">

        </div>
      </div>
      <!-- 焦点图 -->
      <div class="xtx_banner">

        <ul>
          <li>
            <a href="javascript:;">
              <img src="./uploads/banner_1.png" alt="">
            </a>
          </li>
        </ul>
        <!-- 切换按钮  -->
        <a href="javascript:;" class="prev sprites"></a>
        <a href="javascript:;" class="next sprites"></a>
        <!-- 指示器 -->
        <div class="indicator">
          <span></span>
          <span></span>
          <span class="active"></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </div>
  </div>
  <!-- 新鲜好物 -->
  <div class="xtx_goods_new xtx_panel">
    <div class="wrapper">
      <!-- 面板头部 -->
      <div class="xtx_panel_header">
        <h3>新鲜好物<small>新鲜出炉 品质靠谱</small></h3>
        <a href="javascript:;" class="more">
          查看全部<i class="sprites"></i>
        </a>
      </div>
      <!-- 商品列表 -->
      <div class="xtx_panel_goods_1">
        <a href="javascript:;">
          <img src="./uploads/new_goods_1.jpg" alt="">
          <span class="name">睿米无线吸尘器F8</span>
          <span class="price"><small>￥</small>899</span>
        </a>
        <a href="javascript:;">
          <img src="./uploads/new_goods_2.jpg" alt="">
          <span class="name">智能环绕3D空调</span>
          <span class="price"><small>￥</small>1299</span>
        </a>
        <a href="javascript:;">
          <img src="./uploads/new_goods_3.jpg" alt="">
          <span class="name">广东软软糯米煲仔饭</span>
          <span class="price"><small>￥</small>129</span>
        </a>
        <a href="javascript:;">
          <img src="./uploads/new_goods_4.jpg" alt="">
          <span class="name">罗西机械智能手表</span>
          <span class="price"><small>￥</small>3399</span>
        </a>
      </div>
    </div>
  </div>

  <!-- 人气推荐 -->
  <div class="xtx_goods_popular xtx_panel">
    <div class="wrapper">
      <!-- 面板头部 -->
      <div class="xtx_panel_header">
        <h3>人气推荐<small>人气爆款 不容错过</small></h3>
      </div>
      <!-- 商品列表 -->
      <div class="xtx_panel_goods_1">
        <a href="javascript:;">
          <img src="./uploads/popular_1.jpg">
          <span class="title">特惠推荐</span>
          <span class="alt">我猜得到 你的需要</span>
        </a>
        <a href="./index-hot.html">
          <img src="./uploads/popular_2.jpg">
          <span class="title">爆款推荐</span>
          <span class="alt">人气好物推荐</span>
        </a>
        <a href="./index-one.html">
          <img src="./uploads/popular_3.jpg">
          <span class="title">场景使用一站买全</span>
          <span class="alt">编辑精心整理推荐</span>
        </a>
        <a href="javascript:;">
          <img src="./uploads/popular_4.jpg">
          <span class="title">领券中心</span>
          <span class="alt">发现更多超值优惠券</span>
        </a>
      </div>
    </div>
  </div>

  <!-- 热门品牌 -->
  <div class="xtx_goods_brand xtx_panel">
    <div class="wrapper">
      <div class="xtx_panel_header">
        <h3>热门品牌<small>国际经典 品质保证</small></h3>
        <div class="page-bar">
          <a href="javascript:;" class="prev sprites"></a>
          <a href="javascript:;" class="next sprites active"></a>
        </div>
      </div>
      <!-- 商品列表 -->
      <div class="xtx_goods">
        <ul>
          <li>
            <a href="./index-brand.html">
              <img src="./uploads/brand_goods_1.jpg" alt="">
            </a>
            <a href="./brand-list.html">
              <img src="./uploads/brand_goods_2.jpg" alt="">
            </a>
            <a href="javascript:;">
              <img src="./uploads/brand_goods_3.jpg" alt="">
            </a>
            <a href="javascript:;">
              <img src="./uploads/brand_goods_4.jpg" alt="">
            </a>
            <a href="javascript:;">
              <img src="./uploads/brand_goods_5.jpg" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 分类商品 -->
  <div class="xtx_goods_category xtx_panel">
    <div class="wrapper">
      <!-- 生鲜 -->
      <div class="xtx_panel_header">
        <h3>生鲜</h3>
        <a href="javascript:;" class="more">
          查看全部<i class="sprites"></i>
        </a>
        <div class="tabs-bar">
          <a href="javascript:;" class="active">水果</a>
          <a href="javascript:;">蔬菜</a>
          <a href="javascript:;">肉禽蛋</a>
          <a href="javascript:;">裤装</a>
          <a href="javascript:;">衬衫</a>
          <a href="javascript:;">内衣</a>
        </div>
      </div>
      <!-- 商品列表 -->
      <div class="xtx_panel_goods_2">
        <ul class="clearfix">
          <li>
            <a href="javascript:;">
              <img src="./uploads/fresh_goods_cover.jpg" alt="">
            </a>
            <div class="label">
              <span>生鲜馆</span>
              <span>全场3件8折</span>
            </div>
          </li>
          <li>
            <!-- 商品图片 -->
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/fresh_goods_1.jpg" alt="">
              </div>
            </a>
            <!-- 商品信息 -->
            <div class="meta">
              <p class="name">美威 智利原味三文鱼排 240g/袋 4片装</p>
              <p class="flag">海鲜年货</p>
              <p class="price"><small>￥</small>59</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/fresh_goods_2.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">红功夫 麻辣小龙虾1.5kg 4-6钱/25-32只</p>
              <p class="flag">火锅食材</p>
              <p class="price"><small>￥</small>71.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/fresh_goods_3.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">三都港 冷冻无公害黄花鱼 700g 2条 袋装</p>
              <p class="flag">海鲜水产</p>
              <p class="price"><small>￥</small>49.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/fresh_goods_4.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">渔公码头 大连鲜食入味 即食海参 辽参刺参 调味海</p>
              <p class="flag">海鲜年货</p>
              <p class="price"><small>￥</small>899</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/fresh_goods_5.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">越南进口白心火龙果4个 装 标准果 单果400-550g </p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>29</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/fresh_goods_6.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">广西沃柑 柑橘1.5kg</p>
              <p class="flag">新鲜水果</p>
              <p class="price"><small>￥</small>59</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/fresh_goods_7.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">进口 牛油果 6个装 单果重约130-180g</p>
              <p class="flag">新鲜水果</p>
              <p class="price"><small>￥</small>39.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/fresh_goods_8.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">泰国进口山竹5A级 500g </p>
              <p class="flag">新鲜水果</p>
              <p class="price"><small>￥</small>29.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
        </ul>
      </div>

      <!-- 服饰 -->
      <div class="xtx_panel_header">
        <h3>服饰</h3>
        <a href="javascript:;" class="more">
          查看全部<i class="sprites"></i>
        </a>
        <div class="tabs-bar">
          <a href="javascript:;" class="active">行李箱</a>
          <a href="javascript:;">男士包袋</a>
          <a href="javascript:;">女士包袋</a>
          <a href="javascript:;">钱包及小提袋</a>
          <a href="javascript:;">男鞋</a>
          <a href="javascript:;">女鞋</a>
          <a href="javascript:;">拖鞋</a>
        </div>
      </div>
      <!-- 商品列表 -->
      <div class="xtx_panel_goods_2">
        <ul class="clearfix">
          <li>
            <a href="javascript:;">
              <img src="./uploads/clothes_goods_cover.jpg" alt="">
            </a>
            <div class="label">
              <span>服饰馆</span>
              <span>3折狂欢</span>
            </div>
          </li>
          <li>
            <!-- 商品图片 -->
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/clothes_goods_1.jpg" alt="">
              </div>
            </a>
            <!-- 商品信息 -->
            <div class="meta">
              <p class="name">人本秋季厚底帆布鞋 韩版低帮增高学生</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>55</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/clothes_goods_2.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">迪士尼真皮针扣表带宽度 14-16mm规格双色压纹 女表带</p>
              <p class="flag">海鲜年货</p>
              <p class="price"><small>￥</small>20.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/clothes_goods_3.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">三都港 冷冻无公害黄花鱼 700g 2条 袋装</p>
              <p class="flag">海鲜水产</p>
              <p class="price"><small>￥</small>209</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/clothes_goods_4.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">ONLY夏季新款高腰宽松 七分阔腿裙裤休闲裤</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>274.5</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/clothes_goods_5.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">拉夫劳伦t恤男正品 </p>
              <p class="flag">圆领短袖</p>
              <p class="price"><small>￥</small>99</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/clothes_goods_6.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">李宁跑步鞋男鞋空气 弧2018春季款</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>79</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/clothes_goods_7.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">Dickies男鞋2020春季 英伦休闲工装鞋低帮</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>179</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/clothes_goods_8.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">北极绒春夏季纯棉背心 男士修身纯色打底</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>69</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
        </ul>
      </div>

      <!-- 餐厨 -->
      <div class="xtx_panel_header">
        <h3>餐厨</h3>
        <a href="javascript:;" class="more">
          查看全部<i class="sprites"></i>
        </a>
        <div class="tabs-bar">
          <a href="javascript:;" class="active">水果</a>
          <a href="javascript:;">蔬菜</a>
          <a href="javascript:;">肉禽蛋</a>
          <a href="javascript:;">裤装</a>
          <a href="javascript:;">衬衫</a>
          <a href="javascript:;">内衣</a>
        </div>
      </div>
      <!-- 商品列表 -->
      <div class="xtx_panel_goods_2">
        <ul class="clearfix">
          <li>
            <a href="javascript:;">
              <img src="./uploads/kitchen_goods_cover.jpg" alt="">
            </a>
            <div class="label">
              <span>餐厨馆</span>
              <span>大额优惠<br>等你来拿</span>
            </div>
          </li>
          <li>
            <!-- 商品图片 -->
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/kitchen_goods_1.jpg" alt="">
              </div>
            </a>
            <!-- 商品信息 -->
            <div class="meta">
              <p class="name">创意可爱不锈钢便携餐具 套装筷子便携三件套</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>5.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/kitchen_goods_2.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">三金西瓜霜竹炭牙刷软毛 成人家用家庭装</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>20.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/kitchen_goods_3.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">朴（TOPOTO）大卫免手 洗平板拖把拓扑懒人木地 板刮刮乐桶拖布</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>129</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/kitchen_goods_4.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">ONLY夏季新款高腰宽松 七分阔腿裙裤休闲裤</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>274.5</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/kitchen_goods_5.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">金纺不伤手柔顺剂 妈妈的选择</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>29</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/kitchen_goods_6.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">洁成绵柔抹布洗碗巾超 值5片装 洗锅刷碗</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>10.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/kitchen_goods_7.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">大卫双驱动旋转拖把桶 免手洗拓扑拖布地拖墩布 </p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>159</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/kitchen_goods_8.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">斧头牌（AXE）去污地板 清洁剂2L 柠檬清香 </p>
              <p class="flag">海鲜年货</p>
              <p class="price"><small>￥</small>22.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
        </ul>
      </div>

      <!-- 居家 -->
      <div class="xtx_panel_header">
        <h3>居家</h3>
        <a href="javascript:;" class="more">
          查看全部<i class="sprites"></i>
        </a>
        <div class="tabs-bar">
          <a href="javascript:;" class="active">咖啡具</a>
          <a href="javascript:;">水具酒具</a>
          <a href="javascript:;">锅具</a>
          <a href="javascript:;">餐具</a>
          <a href="javascript:;">功能厨具</a>
          <a href="javascript:;">茶具</a>
          <a href="javascript:;">清洁保鲜</a>
        </div>
      </div>
      <!-- 商品列表 -->
      <div class="xtx_panel_goods_2">
        <ul class="clearfix">
          <li>
            <a href="javascript:;">
              <img src="./uploads/home_goods_cover.jpg" alt="">
            </a>
            <div class="label">
              <span>居家馆</span>
              <span>全场满减</span>
            </div>
          </li>
          <li>
            <!-- 商品图片 -->
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/home_goods_1.jpg" alt="">
              </div>
            </a>
            <!-- 商品信息 -->
            <div class="meta">
              <p class="name">菜鸟异常专用链接 非请 勿拍</p>
              <p class="flag">海鲜年货</p>
              <p class="price"><small>￥</small>8999</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/home_goods_2.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">【中盐软水盐】汉斯希 尔家用软水机适配</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>65</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/home_goods_3.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">云米净水壶家用直饮台式 净水机渗透过滤自来水</p>
              <p class="flag">海鲜年货</p>
              <p class="price"><small>￥</small>129</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/home_goods_4.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">ztk恒温调奶器配件玻璃壶 炖盅</p>
              <p class="flag">海鲜年货</p>
              <p class="price"><small>￥</small>129</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/home_goods_5.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">荞麦枕头单人枕芯双人 护颈椎枕头芯</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>29</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/home_goods_6.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">Bear/小熊 LLJ-B04G1 家用多功能切碎机 电动</p>
              <p class="flag">料理机</p>
              <p class="price"><small>￥</small>10.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/home_goods_7.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">荣事达薄饼机春饼春卷皮 家用博饼机电饼铛 </p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>159</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="img-box">
                <img src="./uploads/home_goods_8.jpg" alt="">
              </div>
            </a>
            <div class="meta">
              <p class="name">美式双人实木床 红实木 显档次</p>
              <p class="flag"></p>
              <p class="price"><small>￥</small>22.9</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 最新主题 -->
  <div class="xtx_goods_topic xtx_panel">
    <div class="wrapper">
      <div class="xtx_panel_header">
        <h3>最新专题</h3>
        <a href="javascript:;" class="more">
          查看全部<i class="sprites"></i>
        </a>
      </div>
      <div class="xtx_topic">
        <ul class="clearfix">
          <li>
            <a href="javascript:;">
              <img src="./uploads/topic_goods_1.jpg" alt="">
              <div class="meta">
                <p class="title">
                  吃这些美食才不算辜负自己
                  <small>餐厨起居洗护好物</small>
                </p>
                <span class="price"><small>￥</small>29.9起</span>
              </div>
            </a>
            <div class="social">
              <span class="like">
                <i class="sprites"></i>1220
              </span>
              <span class="view">
                <i class="sprites"></i>1800
              </span>

              <span class="reply">
                <i class="sprites"></i>1220
              </span>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <img src="./uploads/topic_goods_2.jpg" alt="">
              <div class="meta">
                <p class="title">
                  吃这些美食才不算辜负自己
                  <small>餐厨起居洗护好物</small>
                </p>
                <span class="price"><small>￥</small>29.9起</span>
              </div>
            </a>
            <div class="social">
              <span class="liked">
                <i class="sprites"></i>1220
              </span>
              <span class="view">
                <i class="sprites"></i>1800
              </span>

              <span class="reply">
                <i class="sprites"></i>1220
              </span>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <img src="./uploads/topic_goods_3.jpg" alt="">
              <div class="meta">
                <p class="title">
                  吃这些美食才不算辜负自己
                  <small>餐厨起居洗护好物</small>
                </p>
                <span class="price"><small>￥</small>29.9起</span>
              </div>
            </a>
            <div class="social">
              <span class="like">
                <i class="sprites"></i>1220
              </span>
              <span class="view">
                <i class="sprites"></i>1800
              </span>

              <span class="reply">
                <i class="sprites"></i>1220
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- 公共底部 -->
  <div class="xtx_footer clearfix">
    <div class="wrapper">
      <!-- 联系我们 -->
      <div class="contact clearfix">
        <dl>
          <dt>客户服务</dt>
          <dd class="chat">在线客服</dd>
          <dd class="feedback">问题反馈</dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd class="weixin">公众号</dd>
          <dd class="weibo">微博</dd>
        </dl>
        <dl>
          <dt>下载APP</dt>
          <dd class="qrcode">
            <img src="./uploads/qrcode.jpg">
          </dd>
          <dd class="download">
            <span>扫描二维码</span>
            <span>立马下载APP</span>
            <a href="javascript:;">下载页面</a>
          </dd>
        </dl>
        <dl>
          <dt>服务热线</dt>
          <dd class="hotline">
            400-0000-000
            <small>周一至周日 8:00-18:00</small>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 其它 -->
    <div class="extra">
      <div class="wrapper">
        <!-- 口号 -->
        <div class="slogan">
          <a href="javascript:;" class="price">价格亲民</a>
          <a href="javascript:;" class="express">物流快捷</a>
          <a href="javascript:;" class="quality">品质新鲜</a>
        </div>
        <!-- 版权信息 -->
        <div class="copyright">
          <p>
            <a href="javascript:;">关于我们</a>
            <a href="javascript:;">帮助中心</a>
            <a href="javascript:;">售后服务</a>
            <a href="javascript:;">配送与验收</a>
            <a href="javascript:;">商务合作</a>
            <a href="javascript:;">搜索推荐</a>
            <a href="javascript:;">友情链接</a>
          </p>
          <p>CopyRight &copy; 小兔鲜儿</p>
        </div>
      </div>
    </div>
  </div>
  <!-- 电梯 -->
  <div class="xtx-elevator">
    <ul class="xtx-elevator-list">
      <li><a href="javascript:;" data-name="new">新鲜好物</a></li>
      <li><a href="javascript:;" data-name="popular">人气推荐</a></li>
      <li><a href="javascript:;" data-name="brand">热门品牌</a></li>
      <li><a href="javascript:;" data-name="topic">最新专题</a></li>
      <li><a href="javascript:;" id="backTop"><i class="sprites"></i>顶部</a></li>
    </ul>
  </div>
<script>
  const elevator = document.querySelector('.xtx-elevator')
  // 当页面滚动大于三百像素，就显示电梯导航
  // 给页面添加滚动事件
  window.addEventListener('scroll',function(){
    const n =document.documentElement.scrollTop
    if( n >= 300){
      elevator.style.opacity = 1
    }
    else{
      elevator.style.opacity = 0
    }
  })

  // 点击返回页面顶部
  const backTop = document.querySelector('#backTop')
  backTop.addEventListener('click',function(){
    // 可读写的
    document.documentElement.scrollTop = 0
  })
</script>
</body>

</html>
```

#### 页面尺寸事件

会在窗口尺寸改变的时候触发事件

### 元素尺寸和位置

使用场景：

滚动多少距离是我们自己算的，最好是页面滚到某个元素，就可以做某些事

通过JS的方式可以得到元素在页面中的位置，这样我们就省去计算了

**获取宽高：**

获取元素自身宽高，包含元素自身设置的宽高，padding，border

offsetWidth和offsetHeight

我们获取出来的是数值，更加方便计算

我们获取的是可视宽高，如果盒子是隐藏的，那么获取的结果是0

**获取位置：**

获取元素距离自己定位的父级元素的左上距离

offsetLeft和offsetTop是只读属性
#### 仿京东固定导航栏案例

需求：

当页面滚动到秒杀模块，导航栏就自动划入，否则滑出

分析：

> ①：用到页面滚动事件
> 
> ②：检测页面滚动大于等于 秒杀模块的位置 则滑入，否则滑出
> 
> ③：主要移动的是秒杀模块的顶部位置

```java
<script>
        const sk = document.querySelector('.sk')
        const header = document.querySelector('.header')
        // 页面滚动事件
        window.addEventListener('scroll',function(){
            // 当页面滚动到秒杀模块的时候，就改变头部的top值
            //页面被卷去的头部 >= 秒杀模块的位置offsetTop
            const n = document.documentElement.scrollTop
        
            header.style.top = n>=sk.offsetTop ? 0 : '-80px'

        })
    </script>
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .content {
            overflow: hidden;
            width: 1000px;
            height: 3000px;
            background-color: pink;
            margin: 0 auto;
        }

        .backtop {
            display: none;
            width: 50px;
            left: 50%;
            margin: 0 0 0 505px;
            position: fixed;
            bottom: 60px;
            z-index: 100;
        }

        .backtop a {
            height: 50px;
            width: 50px;
            background: url(./images/bg2.png) 0 -600px no-repeat;
            opacity: 0.35;
            overflow: hidden;
            display: block;
            text-indent: -999em;
            cursor: pointer;
        }

        .header {
            position: fixed;
            top: -80px;
            left: 0;
            width: 100%;
            height: 80px;
            background-color: purple;
            text-align: center;
            color: #fff;
            line-height: 80px;
            font-size: 30px;
            transition: all .3s;
        }

        .sk {
            width: 300px;
            height: 300px;
            background-color: skyblue;
            margin-top: 500px;
        }
    </style>
</head>

<body>
    <div class="header">我是顶部导航栏</div>
    <div class="content">
        <div class="sk">秒杀模块</div>
    </div>
    <div class="backtop">
        <img src="./images/close2.png" alt="">
        <a href="javascript:;"></a>
    </div>
    <script>
        const sk = document.querySelector('.sk')
        const header = document.querySelector('.header')
        // 页面滚动事件
        window.addEventListener('scroll',function(){
            // 当页面滚动到秒杀模块的时候，就改变头部的top值
            //页面被卷去的头部 >= 秒杀模块的位置offsetTop
            const n = document.documentElement.scrollTop
            header.style.top = n>=sk.offsetTop ? 0 : '-80px'
        })
    </script>
</body>

</html>
```

#### 实现B站点击小滑块移动效果

需求：当点击链接的时候，下面的红色滑块跟着移动

```html
<script>
    // 1. 事件委托的方法 获取父元素 tabs-list
    const list = document.querySelector('.tabs-list')
    const line = document.querySelector('.line')
    // 2. 注册点击事件
    list.addEventListener('click', function (e) {
      // 只有点击了A 才有触发效果
      if (e.target.tagName === 'A') {
        // console.log(11)
        // 当前元素是谁 ？  e.target
        // 得到当前点击元素的位置
        // console.log(e.target.offsetLeft)
        // line.style.transform = 'translateX(100px)'
        // 把我们点击的a链接盒子的位置  然后移动
        line.style.transform = `translateX(${e.target.offsetLeft}px)`
      }
    })
  </script>
```

### 综合案例

还是小兔仙儿的电梯导航案例

这次我们的需求变成了，点击不同的模块，页面可以自动跳转不同的位置


```html
<script>
    // 第一大模块，页面滑动可以显示和隐藏
    (function () {
      const elevator = document.querySelector('.xtx-elevator')
      // 当页面滚动大于三百像素，就显示电梯导航
      // 给页面添加滚动事件
      window.addEventListener('scroll', function () {
        const n = document.documentElement.scrollTop
        if (n >= 300) {
          elevator.style.opacity = 1
        }
        else {
          elevator.style.opacity = 0
        }
      })

      // 点击返回页面顶部
      const backTop = document.querySelector('#backTop')
      backTop.addEventListener('click', function () {
        // 可读写的
        document.documentElement.scrollTop = 0
      })
    })();

    // 第二第三都放到第一个执行函数里面
    (function () {
      // 点击页面可以滑动
      const list = document.querySelector('.xtx-elevator-list')
      list.addEventListener('click',function(e){
      //  排他思想
        if(e.target.tagName === 'A'){
          // document.querySelector('.xtx-elevator-list .active').classList.remove('active')
          // 不能直接这样写，因为会报错(直接获取再移除)
          // 先获取类名，再添加判断
          const old = document.querySelector('.xtx-elevator-list .active')
          // 如果原来有active类的对象，就移除类，如果开始没有对象，就不删除，所以不报错
          if(old)
        {
          old.classList.remove('active')
        }
        e.target.classList.add('active')
        }
      })
    })();
  </script>
```

然后我们需要实现这样的功能，点击模块跳转到对应位置


```javascript
// 第二第三都放到第一个执行函数里面
    (function () {
      // 点击页面可以滑动
      const list = document.querySelector('.xtx-elevator-list')
      list.addEventListener('click',function(e){
      //  排他思想
        if(e.target.tagName === 'A'){
          // document.querySelector('.xtx-elevator-list .active').classList.remove('active')
          // 不能直接这样写，因为会报错(直接获取再移除)
          // 先获取类名，再添加判断
          const old = document.querySelector('.xtx-elevator-list .active')
          // 如果原来有active类的对象，就移除类，如果开始没有对象，就不删除，所以不报错
          if(old)
        {
          old.classList.remove('active')
        }
        e.target.classList.add('active')
        // 获得自定义属性 
        // 我们可以根据小盒子的自定义属性值，去选择对应的大盒子
        const top = document.querySelector(`.xtx_goods_${e.target.dataset.name}`).offsetTop
        // 这是获得对应的大盒子的offsetTop
        // 让页面滚动到对应的位置
        document.documentElement.scrollTop = top
      }
      })
    })();
```

这是实现点击就到某个模块的效果，但是问题就在于这个顶部也被包进去了，按理说他应该是不参与高亮的才对

然后我们如果不想让效果太僵硬的话，可以添加页面滑动：

```javascript
html{
  scroll-behavior: smooth;
}
```

而想要解决顶部高亮的问题只需要在代码里添加判断条件即可：

```javascript
// 第二第三都放到第一个执行函数里面
    (function () {
      // 点击页面可以滑动
      const list = document.querySelector('.xtx-elevator-list')
      list.addEventListener('click',function(e){
      //  排他思想
        if(e.target.tagName === 'A' && e.target.dataset.name){
          // document.querySelector('.xtx-elevator-list .active').classList.remove('active')
          // 不能直接这样写，因为会报错(直接获取再移除)
          // 先获取类名，再添加判断
          const old = document.querySelector('.xtx-elevator-list .active')
          // 如果原来有active类的对象，就移除类，如果开始没有对象，就不删除，所以不报错
          if(old)
        {
          old.classList.remove('active')
        }
        e.target.classList.add('active')
        // 获得自定义属性 
        // 我们可以根据小盒子的自定义属性值，去选择对应的大盒子
        const top = document.querySelector(`.xtx_goods_${e.target.dataset.name}`).offsetTop
        // 这是获得对应的大盒子的offsetTop
        // 让页面滚动到对应的位置
        document.documentElement.scrollTop = top
      }
      })
    })();
```

我们还要实现的效果是，滑动到某个页面的时候自动高亮

```javascript
<script>
    // 第一大模块，页面滑动可以显示和隐藏
    (function () {
      const elevator = document.querySelector('.xtx-elevator')
      // 当页面滚动大于三百像素，就显示电梯导航
      // 给页面添加滚动事件
      window.addEventListener('scroll', function () {
        const n = document.documentElement.scrollTop
        if (n >= 300) {
          elevator.style.opacity = 1
        }
        else {
          elevator.style.opacity = 0
        }
      })

      // 点击返回页面顶部
      const backTop = document.querySelector('#backTop')
      backTop.addEventListener('click', function () {
        // 可读写的
        document.documentElement.scrollTop = 0
      })
    })();

    // 第二第三都放到第一个执行函数里面
    (function () {
      // 点击页面可以滑动
      const list = document.querySelector('.xtx-elevator-list')
      list.addEventListener('click',function(e){

      //  排他思想
        if(e.target.tagName === 'A' && e.target.dataset.name){
          // document.querySelector('.xtx-elevator-list .active').classList.remove('active')
          // 不能直接这样写，因为会报错(直接获取再移除)
          // 先获取类名，再添加判断
          const old = document.querySelector('.xtx-elevator-list .active')
          // 如果原来有active类的对象，就移除类，如果开始没有对象，就不删除，所以不报错
          if(old)
        {
          old.classList.remove('active')
        }
        e.target.classList.add('active')
        // 获得自定义属性 
        // 我们可以根据小盒子的自定义属性值，去选择对应的大盒子
        const top = document.querySelector(`.xtx_goods_${e.target.dataset.name}`).offsetTop
        // 这是获得对应的大盒子的offsetTop
        // 让页面滚动到对应的位置
        document.documentElement.scrollTop = top
      }
      })

      // 页面滚动，可以根据大盒子选小盒子，添加active类
      // 首先要移除原有的类
      window.addEventListener('scroll', function () {
        const old = document.querySelector('.xtx-elevator-list .active')
          // 如果原来有active类的对象，就移除类，如果开始没有对象，就不删除，所以不报错
          if(old)
        {
          old.classList.remove('active')
        }
        // 判断滑动位置，选择小盒子
        // 首先要获取大盒子
        const news = document.querySelector('.xtx_goods_new')
        const popular= document.querySelector('.xtx_goods_popular')
        const brand = document.querySelector('.xtx_goods_brand')
        const topic = document.querySelector('.xtx_goods_topic')
        const n = document.documentElement.scrollTop
        if(n>=news.offsetTop && n < popular.offsetTop)
        {
          document.querySelector('[data-name=new]').classList.add('active')
        }
        else if(n>=popular.offsetTop && n<brand.offsetTop)
        {
          document.querySelector('[data-name=popular]').classList.add('active')
        }
        else if(n>=brand.offsetTop && n<topic.offsetTop)
        {
          document.querySelector('[data-name=brand]').classList.add('active')
        }
        else{
          document.querySelector('[data-name=topic]').classList.add('active')
        }
      })
    })();
  </script>
```
​

