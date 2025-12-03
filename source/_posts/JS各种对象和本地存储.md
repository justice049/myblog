---
title: JS各种对象和本地存储
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/692fd2224c455cbabc957dd5.webp
tags: JS
categories: 前端
---

​### Window对象

#### BOM（浏览器对象模型）

BOM是浏览器对象模型

Window对象是一个全局对象，也可以说是JS中的顶级对象

像是document、alert()、console.log()都是window的属性

所有通过var定义在全局作用域的变量、函数都会变成window对象的属性和方法

window对象下的属性和方法调用的时候可以省略window

#### 定时器-延时函数

JS内定了一个用来让代码延迟执行的函数，叫setTimeout

setTimeout仅仅执行一次，就可以理解为把一段代码延迟执行，平时的时候省略window

延时器需要等待，所以后面的代码先执行

每次调用延时器都会产生新的延时器
##### 5s钟之后消失的广告

我们需要让5s之后广告自动消失（真的会有这么良心的广告吗，我以为起手三十秒）

我们需要设置延时函数、隐藏元素

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
            margin: 0 auto;
        }
        .button{
            position: absolute;
            right: 10px;
            top: 10px;
            width: 20px;
            height: 20px;
            background-color: skyblue;
            color: white;
            text-align :center;
            line-height: 20px;
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="button">
            x
        </div>
    </div>
    <script>
        let timer = setTimeout(function(e){
            const box = document.querySelector('.box')
            box.style.display = 'none'
        },5000)
    </script>
</body>
</html>
```

#### JS执行机制
JS的一大特点是单线程

JavaScript 是为处理页面中用户的交互，以及操作 DOM 而诞生的。

比如我们对某个 DOM 元素进行添加和删除操作，不能同时进行。 应该先进行添加，之 后再删除。 单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。

这样所导致的问题是： 如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉

为了解决这个问题，利用了多核CPU的计算能力，H5提出了Web Worker标准，允许JS脚本创建多个线程，所以JS中出现了同步和异步

同步的任务都在主线程上执行，形成一个执行栈

而异步是通过回调函数实现的

异步任务的三种类型：

> 1、普通事件，如 click、resize 等
> 
> 2、资源加载，如 load、error 等
> 
> 3、定时器，包括 setInterval、setTimeout 等

异步任务相关添加到任务队列中


先执行栈中的同步任务，异步任务放入任务队列中

一旦执行栈中的所有同步任务执行完毕，系统就按次序读取任务队列中的异步任务，被读取的异步任务结束等待状态，进入执行栈开始执行

主线程不断的重复获得任务，执行任务，再获取任务，执行任务，这种机制被称为事件循环


#### location对象

location的数据类型是对象，它拆分并保存了URL地址的各个组成部分

href属性获取完整的URL地址，对它赋值的时候用于地址的跳转

##### 5s之后跳转页面

需求：用户点击可以跳转，如果不点击，就5s之后自动跳转，要求里面有秒数倒计时

分析：

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
        setTimeout(function () {
            location.href = 'https://www.bilibili.com/'
        }, 5000)
    </script>
</body>

</html>
```

易如反掌孩子们

hash属性获取地址中的哈希值，符号#后main的部分

经常用于不刷新页面显示不同页面，比如网易云音乐

reload用来刷新当前页面，传入的参数为true的时候表示强制刷新：
其实也很像fflush


#### navigator对象

navigator的数据类型是对象，该对象下记录了浏览器自身的相关信息

常用的属性方法：

可以通过userAgent检测浏览器的版本和平台

#### histroy对象

history 的数据类型是对象，主要管理历史记录， 该对象与浏览器地址栏的操作相对应，如前进、后退、历史记录等


它在实际开发中很少用，但是在OA办公系统里很常见

### 本地存储

#### 本地存储介绍

以前我们页面写的数据一刷新页面就没了

随着互联网的快速发展，基于网页的应用越来越普遍，同时也变得越来越复杂，为了满足各种各样的需求，会经常在本地存储大量的数据，HTML规范提出了相关解决方案

数据存储在用户浏览器中

设置读取方便，甚至页面刷新不丢失数据

容量较大，sessionStorage和localStorage约 5M 左右

常用的使用场景：

```html
https://todomvc.com/examples/vanilla-es6/
```

页面刷新数据不丢失

#### 本地存储分类

能够使用localStorage 把数据存储的浏览器中

作用就是**可以将数据永久存储在本地(用户的电脑), 除非手动删除，否则关闭页面也会存在**

可以多窗口（页面）共享（同一浏览器可以共享）

以键值形式存储使用

**sessionStorage：**

特性是生命周期是关闭浏览器窗口

在同一个窗口（页面）下的数据可以共享

以键值对的形式存储使用

用法和localStorage基本相同

#### 存储复杂数据类型

本地只能存储字符串，无法存储复杂的数据类型


我们存储复杂的数据类型需要将复杂数据类型转换成JSON字符串并存储到本地

JSON.stringify(复杂数据类型)

```javascript
<script>
        const goods = {
            name:'小米13',
            price:3999
        }
        localStorage.setItem('goods',JSON.stringify(goods))
    </script>
```

但是这样就存在问题：本地存储里面取出来的是字符串，不是对象，无法直接使用

所以我们要把取出来的字符串转换为对象

语法： JSON.parse(JSON字符串)

```javascript
<script>
        const goods = {
            name:'小米13',
            price:3999
        }
        localStorage.setItem('goods',JSON.stringify(goods))
        const obj = JSON.parse(localStorage.getItem('goods'))
        console.log(obj)
    </script>
```

### 综合案例

还是按照学生信息表的样子，但这次我们要求的是刷新页面后数据不丢失

**需求1：读取本地数据**

如果本地存储有数据，则返回JSON.parse()之后的对象

如果本地存储没有数据，则声明一个空的数组

```javascript
<script>
    // 参考数据
    const initData = [
      {
        stuId: 1,
        uname: '迪丽热巴',
        age: 22,
        salary: '12000',
        gender: '女',
        city: '北京',
        time: '2099/9/9 08:08:08'
      }
    ]
    localStorage.setItem('data', JSON.stringify(initData))
    // localStorage.setItem('data', JSON.stringify(initData))
    // 1. 渲染业务
    // 1.1 先读取本地存储的数据
    // (1). 本地存储有数据则记得转换为对象然后存储到变量里面，后期用于渲染页面
    const arr = JSON.parse(localStorage.getItem('data')) || []
    // (2). 如果没有数据，则用 空数组来代替，上面用了逻辑中断
    
  </script>
```

主要就是那两行代码

**需求2：渲染模块**

字符串拼接有新的思路（效果更高，开发常用的写法）

利用map()和join()数组方法实现字符串拼接
map可以处理数据并且返回新的数组
join()方法用于把数组中的所有元素转换一个字符
数组元素是通过参数里面指定的分隔符进行分割的

渲染页面部分：

```javascript
// 利用map和join方法来渲染页面
    function render() {
      // 利用map遍历数组，返回对应tr的数组
      // 把数组转换为字符串
      // 把生成的字符串追加给tbody
      const trArr = arr.map(function (ele) {
        return `
         <tr>
        <td>${ele.stuId}</td>
        <td>${ele.uname}</td>
        <td>${ele.age}</td>
        <td>${ele.gender}</td>
        <td>${ele.salary}</td>
        <td>${ele.city}</td>
        <td>${ele.time}</td>
        <td>
          <a href="javascript:">
            <i class="iconfont icon-shanchu"></i>
            删除
          </a>
        </td>
        </tr>`
      })

      // 把数组转换为字符串join
      // 把生成的字符串追加给tbody
      tbody.innerHTML = trArr.join('')

    //  统计总共有几条数据
    document.querySelector('.title span').innerHTML = arr.length
    }
```

接下来我们实现一下**录入模块：**


```javascript
// 新增业务
    // form表单注册提交事件，阻止默认行为
    const info = document.querySelector('.info')
    const uname = document.querySelector('.uname')
    const age = document.querySelector('.age')
    const salary = document.querySelector('.salary')
    const gender = document.querySelector('.gender')
    const city = document.querySelector('.city')
    info.addEventListener('submit', function (e) {
      e.preventDefault()
      // 非空判断
      if(!uname.value || !age.value || !salary.value)
    {
       return alert('输入内容不能为空')
    }
    // 给arr数组追加对象，里面存储表单获取过来的数据
    arr.push({
        stuId: arr.length+1,
        uname: uname.value,
        age: age.value,
        salary: salary.value,
        gender: gender.value,
        city: city.value,
        time: new Date().toLocaleString()
        // 获取当前的时间
    })
    // 渲染页面和重置表单
    render()
    this.reset()
    })
```

但是上面的数据没存在本地存储，所以我们修改一下

我的代码出错就在这

因为没有事先初始化渲染页面，就是这里出现了问题

然后这个就是问题所在，只有新增的时候才能有办法

```javascript
// 把数组转换为字符串join
      // 把生成的字符串追加给tbody
      tbody.innerHTML = trArr.join('')

      //  统计总共有几条数据
      document.querySelector('.title span').innerHTML = arr.length
    }

    render()    //初始化渲染页面，就是这里出了问题

    // 新增业务
    // form表单注册提交事件，阻止默认行为
    const info = document.querySelector('.info')
    const uname = document.querySelector('.uname')
    const age = document.querySelector('.age')
    const salary = document.querySelector('.salary')
    const gender = document.querySelector('.gender')
    const city = document.querySelector('.city')

    info.addEventListener('submit', function (e) {
      e.preventDefault()
      // 非空判断
      if(!uname.value || !age.value || !salary.value)
    {
       return alert('输入内容不能为空')
    }
    // 给arr数组追加对象，里面存储表单获取过来的数据
    arr.push({
        stuId: arr.length+1,
        uname: uname.value,
        age: age.value,
        salary: salary.value,
        gender: gender.value,
        city: city.value,
        time: new Date().toLocaleString()
        // 获取当前的时间
    })
    // 渲染页面和重置表单
    render()
    this.reset()

    // 把数组重新存入到本地存储里面，要转换成为JSON字符串存储
    localStorage.setItem('data',JSON.stringify(arr))
    })
```

然后我们制作**删除模块：**

```javascript
// 删除业务模块
    // 首先采取时间委托形式，给tbody注册点击事件
    tbody.addEventListener('click',function(e){
      if(e.target.tagName === 'A')
    {
      // 得到当前点击的索引号，渲染数据的时候 ，动态给a链接添加自定义属性比如data-id
      console.log(e.target.dataset.id)
    }
    // 确认框确认是否真的要删除
    if(confirm('你确定要删除这条数据就行'))
    {
      // 根据索引号，利用splice删除数组这条数据
      arr.splice(e.target.dataset.id,1)
      // 重新渲染页面
      render()
      // 把最新arr数组存入本地存储
      localStorage.setItem('data',JSON.stringify(arr))
    }
    })
```

**关于stuId的处理问题：**

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>学生就业统计表</title>
  <link rel="stylesheet" href="./iconfont/iconfont.css">
  <link rel="stylesheet" href="./css/index.css" />
</head>

<body>
  <h1>学生就业统计表</h1>
  <form class="info" autocomplete="off">
    <input type="text" class="uname" name="uname" placeholder="姓名" />
    <input type="text" class="age" name="age" placeholder="年龄" />
    <input type="text" class="salary" name="salary" placeholder="薪资" />
    <select name="gender" class="gender">
      <option value="男">男</option>
      <option value="女">女</option>
    </select>
    <select name="city" class="city">
      <option value="北京">北京</option>
      <option value="上海">上海</option>
      <option value="广州">广州</option>
      <option value="深圳">深圳</option>
      <option value="曹县">曹县</option>
    </select>
    <button class="add">
      <i class="iconfont icon-tianjia"></i>添加
    </button>
  </form>

  <div class="title">共有数据<span>0</span>条</div>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
        <th>薪资</th>
        <th>就业城市</th>
        <th>录入时间</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>迪丽热巴</td>
        <td>23</td>
        <td>女</td>
        <td>12000</td>
        <td>北京</td>
        <td>2099/9/9 08:08:08</td>
        <td>
          <a href="javascript:">
            <i class="iconfont icon-shanchu"></i>
            删除
          </a>
        </td>
      </tr>
    </tbody>
  </table>
  <script>
    // 参考数据
    // const initData = [
    //   {
    //     stuId: 1,
    //     uname: '迪丽热巴',
    //     age: 22,
    //     salary: '12000',
    //     gender: '女',
    //     city: '北京',
    //     time: '2099/9/9 08:08:08'
    //   }
    // ]
    // localStorage.setItem('data', JSON.stringify(initData)) ,没必要进行重复填写
    // localStorage.setItem('data', JSON.stringify(initData))
    // 1. 渲染业务
    // 1.1 先读取本地存储的数据
    // (1). 本地存储有数据则记得转换为对象然后存储到变量里面，后期用于渲染页面
    const arr = JSON.parse(localStorage.getItem('data')) || []
    // (2). 如果没有数据，则用 空数组来代替，上面用了逻辑中断
    const tbody = document.querySelector('tbody')

    // 利用map和join方法来渲染页面
    function render() {
      // 利用map遍历数组，返回对应tr的数组
      // 把数组转换为字符串
      // 把生成的字符串追加给tbody
      const trArr = arr.map(function (ele,index){
        return `
         <tr>
        <td>${ele.stuId}</td>
        <td>${ele.uname}</td>
        <td>${ele.age}</td>
        <td>${ele.gender}</td>
        <td>${ele.salary}</td>
        <td>${ele.city}</td>
        <td>${ele.time}</td>
        <td>
          <a href="javascript:" data-id="${index}">
            <i class="iconfont icon-shanchu"></i>
            删除
          </a>
        </td>
        </tr>`
      })

      // 把数组转换为字符串join
      // 把生成的字符串追加给tbody
      tbody.innerHTML = trArr.join('')

      //  统计总共有几条数据
      document.querySelector('.title span').innerHTML = arr.length
    }

    render()    //初始化渲染页面，就是这里出了问题

    // 新增业务
    // form表单注册提交事件，阻止默认行为
    const info = document.querySelector('.info')
    const uname = document.querySelector('.uname')
    const age = document.querySelector('.age')
    const salary = document.querySelector('.salary')
    const gender = document.querySelector('.gender')
    const city = document.querySelector('.city')

    info.addEventListener('submit', function (e) {
      e.preventDefault()
      // 非空判断
      if(!uname.value || !age.value || !salary.value)
    {
       return alert('输入内容不能为空')
    }
    // 给arr数组追加对象，里面存储表单获取过来的数据
    arr.push({
        stuId: arr.length ? arr[arr.length - 1].stuId + 1 : 1,
        uname: uname.value,
        age: age.value,
        salary: salary.value,
        gender: gender.value,
        city: city.value,
        time: new Date().toLocaleString()
        // 获取当前的时间
    })
    // 渲染页面和重置表单
    render()
    this.reset()

    // 把数组重新存入到本地存储里面，要转换成为JSON字符串存储
    localStorage.setItem('data',JSON.stringify(arr))
    })

    // 删除业务模块
    // 首先采取时间委托形式，给tbody注册点击事件
    tbody.addEventListener('click',function(e){
      if(e.target.tagName === 'A')
    {
      // 得到当前点击的索引号，渲染数据的时候 ，动态给a链接添加自定义属性比如data-id
      console.log(e.target.dataset.id)
    }
    // 确认框确认是否真的要删除
    if(confirm('你确定要删除这条数据就行'))
    {
      // 根据索引号，利用splice删除数组这条数据
      arr.splice(e.target.dataset.id,1)
      // 重新渲染页面
      render()
      // 把最新arr数组存入本地存储
      localStorage.setItem('data',JSON.stringify(arr))
    }
    })
    

  </script>
</body>

</html>
```

​
