---
title: JS使用细节
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/692fdc384c455cbabc9589e3.jpg
tags: JS
categories: 前端
---


### 程序跑起来与避免延迟

如果你讲JS，你就不可能只讲JS

后盾人说开发就要用VScode（确实，Windows和Linux都可以跑）

然后就是第一天开发的时候装的那些插件

### 前端访问流程基本分析

托管到服务器上的东西，谁访问下载到谁的电脑里

就是如此简单。。

### 

体验解析过程与变量提升

解析器在执行之前会先做变量的提升

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
        function hd() {
            if (false) {
                var web = "houdunren.com"
            }
            console.log(web)
        }
    </script>
</body>

</html>
```

### let&const暂时性死区TDC

如果使用let或者const来声明变量那会产生一个暂时性死区TDC（言下之意就是不能在声明变量之前使用变量），帮助我们让代码更加的合理（对声明的保护）

### 

var-let-const的共同点

主要涉及的就是作用域（变量的作用域，先局部后全局）

### 可怕的全局污染

有的人不好好声明，可以加上这个让它强制声明：

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
        "use strict"
        mu = 777
    </script>
</body>
</html>
```

主要就是不要定义太多的全局变量，容易造成一些污染

### 块作用域

这是块作用域的一些应用：

```javascript
(function(){    //立即执行函数,控制作用域，避免发生污染
    var $ = (window.$ = {})     //开放接口出去
    $.web = "hdcms"
    var url = "hdcms.com"
    $.getUrl = function(){
        return url
    }
}.bind(window)())
```

使用let或者const就可以有块作用域，优点就是不会影响先前定义的一些变量的值

### const常量声明一探究竟

如果仅仅是这样函数是不会报错的，因为受限于作用域

const针对的标量不可以改变，但是引用类型是可以改变的

封装到块里面就又不会报错了

### window全局对象污染与重复声明

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
        let screenLeft = 88 
        console.log(window.screenLeft)      //window对象里面的值没有被改变，如果使用var就会被改变
    </script>
</body>
</html>
```

这是window的全局对象，window对象保存着窗口的一些信息

针对var的重复声明，系统是不会报错的

### Object.freeze冻结变量

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
        const HOST = {
            url:"baidu.com",
            prot:443
        }
        HOST.prot = 80
        console.log(HOST)
    </script>
</body>
</html>
```

这种情况变量的值是可以被改变的

我们可以使用Object的静态方法将其冻结，这样它的值就不会改变了

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
        const HOST = {
            url:"baidu.com",
            prot:443
        }
        Object.freeze(HOST)
        HOST.prot = 80
        console.log(HOST)
    </script>
</body>
</html>
```

### 标量与引用类型的传值与传址特性

老生常谈的传值调用和传址调用

### null与undefined详解

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
        //null   undefined
        let config = {}
        let web = ""
        function show(name){
            console.log(name)
        }
        console.log(show())
    </script>
</body>
</html>
```

### use strict严格模式高质量代码守卫

这不就是之前说的那个吗，不说了

使用严格模式就对啦！

​
