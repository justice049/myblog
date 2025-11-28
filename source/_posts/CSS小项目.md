---
title: CSS小项目
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/692965c27f8e1c737822fe39.jpg
tags: CSS
categories: 前端
---

### 小工具：snipaste

全世界最好用的截图工具来了

Snipaste是一个强大简单的截图工具，方便的点就在于可以把截图贴回屏幕上


常用快捷方式有这些：

> 1.F1截图，同时测量大小，设置箭头，文字书写
> 
> 2.F3在桌面置顶显示
> 
> 3.点击图片，Alt取色（Shift切换取色模式）
> 
> 4.按Esc取消图片显示

### 小米侧边栏

核心就是转成块级元素

> 1.把链接a转换为块级元素，这样链接可以单独占一行，并且有宽度和高度
> 
> 2.鼠标经过a给链接设置背景颜色

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        a{
            display: block;
            width: 230px;
            height: 40px;
            background-color: rgb(124, 124, 124);
            font-size: 14px;
            color: aliceblue;
            text-decoration: none;
            text-indent: 2em;
        }
        a:hover{
            background-color: chocolate;
        }
    </style>
    <title>Document</title>
</head>
<body>
    <a href="#">爪机</a>
    <a href="#">平板垫脑</a>
    <a href="#">垫脑</a>
    <a href="#">su7</a>
    <a href="#">纸张垃圾桶</a>
</body>
</html>
```

实现出来是这个样子的，很简单，不多说了


透明度设置：

前三个为rgb：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            width: 300px;
            height: 300px;
            background: rgba(0,0,0,0.5);
        }
    </style>
</head>
<body>
    <div></div>
</body>
</html>
```

单纯对背景色半透明，对盒子中内容无影响

### 五彩导航

把导航做成五颜六色的会有什么好处吗

就像西柚导航一样

建议纸鹿学长把它该名成西电导航

或者什么都好

> 目标：
> 
> 1.链接属于行内元素，但是此时需要宽度，高度，因此需要模式转换
> 
> 2.里面的文字需要水平居中和垂直居中
> 
> 2.链接里面要设置背景图
> 
> 4.鼠标经过变化背景图片，要用到伪类选择器

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .nav a{
            display: inline-block;
            width: 120px;
            height: 58px;
            text-align: center;
            background-color: cornflowerblue;
            line-height: 58px;
            color: aliceblue;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="nav">
        <a href="#">模电</a>
        <a href="#">概率论</a>
        <a href="#">信号与系统</a>
        <a href="#">大学物理</a>
    </div>
</body>
</html>
```

每一个都需要设置不同的背景

所以要有不同的类：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .nav a{
            display: inline-block;
            width: 120px;
            height: 58px;
            text-align: center;
            background-color: cornflowerblue;
            line-height: 58px;
            color: rgb(255, 255, 255);
            text-decoration: none;
        }
        .nav .bg1{
            background: url(./om.jpg);
        }
        .nav .bg1:hover{
            background: url(./pp.jpg);
        }
        .nav .bg2{
            background:url(./pp.jpg);
        }
        .nav .bg2:hover{
            background: url(R-C.jpg);
        }
    </style>
</head>
<body>
    <div class="nav">
        <a href="#" class="bg1">模电</a>
        <a href="#" class="bg2">概率论</a>
        <a href="#" class="bg3">信号与系统</a>
        <a href="#" class="bg4">大学物理</a>
    </div>
</body>
</html>
```

### CSS三大特性

CSS有三个非常重要的特性：层叠性、继承性、优先级

层叠性就是相同选择器设置相同的样式，此时一个样式会覆盖另一个冲突的样式，层叠性主要解决样式冲突的问题

样式冲突：遵循的原则是​**就近**​，哪个样式离结构近，就执行哪个样式

样式不冲突就不会层叠

（长江后浪推前浪，前浪死在沙滩上）

世界是一个巨大的子承父业

有钱真好啊下辈子我也要当有钱人

CSS的继承就是子标签会继承父标签的某些样式（文本颜色和字号）

继承的样式：text-，font-，line-及color属性

行高的继承有点特别，行高可以跟单位也可以不跟

不跟单位就是倍数（当前元素文字大小的倍数）

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
           font: 12px/1.5;
        }
        div{
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div>十日</div>
    <p>终焉</p>
</body>
</html>
```


优先级：选择器相同的话就看层叠性

选择器不同的话就看权重哩

！important是在样式后面加

权重是有4组数字组成，但是**不会有进位**

类选择器永远大于元素选择器，id选择器永远大于类选择器

等级判断从左到右，如果某一位的数值 相同，则判断下一位的数值

继承的权重是0

就像是高启强虽然很厉害，但是高晓晨依然变成精神小伙一样（不是哥们）

标签到底执行哪个样式，先看标签有没被直接选出来

a链接默认制定了样式（蓝色，带下划线）

复合选择器会**有权重叠加​**

我们前端也要学PS，那有人就要问了

那PS不是美术生学的吗？

问得好捏

还是那句话，我最开始以为网页的设计是需要会前端的美术生，或者有艺术细胞的计科爷

但是实际上UI和前端还是又区别的

设计稿，UI来画

网页实现，前端来干

也就是说他们用啥前端也得学啥

网页美工大部分的效果图都是用PS来完成的，所以以后我们的切图工作都在PS中完成

### 产品模块

先做最外面的盒子的设计：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        body{
            background-color: aliceblue;
        }
        .box{
            width: 298px;
            height: 415px;
            background-color: #fff;
            margin: 100px auto;     /*块级元素居中 */
        } 
    </style>
</head>
<body>
    <div class="box">

    </div>
</body>
</html>
```

效果就是这样，浅蓝色中间有个白色的盒子

然后就要添加样式图片了

要让这个图片不超过盒子的大小，所以把宽度设置成盒子的百分百就好了：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        body{
            background-color: aliceblue;
        }
        .box{
            width: 298px;
            height: 415px;
            background-color: #fff;
            margin: 100px auto;     /*块级元素居中 */
        } 
        .box img{
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="box">
        <img src="./pp.jpg" alt="">
    </div>
</body>
</html>
```

然后就开始写主题文字，设定各种边距：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        body{
            background-color: aliceblue;
        }
        .box{
            width: 298px;
            height: 415px;
            background-color: #fff;
            margin: 100px auto;     /*块级元素居中 */
        } 
        .box img{
            width: 100%;
        }
        .review{
            height: 70px;
            font-size: 14px;
            padding: 0 28px;
            /* 段落没有width属性，所以padding不会撑开盒子的宽度 */
            margin-top: 30px;
        }
    </style>
</head>
<body>
    <div class="box">
        <img src="./pp.jpg" alt="">
        <p class="review">乌拉呀哈咿呀哈，呜呀伊哈,乌拉乌拉呀哈，呀哈呀哈乌拉</p>
    </div>
</body>
</html>
```

然后就开始实现评价模块：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        body{
            background-color: aliceblue;
        }
        .box{
            width: 298px;
            height: 415px;
            background-color: #fff;
            margin: 100px auto;     /*块级元素居中 */
        } 
        .box img{
            width: 100%;
        }
        .review{
            height: 70px;
            font-size: 14px;
            padding: 0 28px;
            /* 段落没有width属性，所以padding不会撑开盒子的宽度 */
            margin-top: 30px;
        }
        .appraise{
            font-size: 12px;
            color: #b0b0b0;
            margin-top: 20px;
            padding: 0 28px;
        }
    </style>
</head>
<body>
    <div class="box">
        <img src="./pp.jpg" alt="">
        <p class="review">乌拉呀哈咿呀哈，呜呀伊哈,乌拉乌拉呀哈，呀哈呀哈乌拉</p>
        <div class="appraise">来自114514条评价</div>
    </div>
</body>
</html>
```

来看商品详情的描述怎么实现：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        body{
            background-color: aliceblue;
        }
        .box{
            width: 298px;
            height: 415px;
            background-color: #fff;
            margin: 100px auto;     /*块级元素居中 */
        } 
        .box img{
            width: 100%;
        }
        .review{
            height: 70px;
            font-size: 14px;
            padding: 0 28px;
            /* 段落没有width属性，所以padding不会撑开盒子的宽度 */
            margin-top: 30px;
        }
        .appraise{
            font-size: 12px;
            color: #b0b0b0;
            margin-top: 20px;
            padding: 0 28px;
        }
        .info{
            font-size: 14px;
            margin-top: 15px;
            padding: 0 28px;
        }
        .info h4{
            display: inline-block;
            font-weight: 400;        
            /* 不加粗 */
        }
        .info span{
            color: #ff6700;
        }
    </style>
</head>
<body>
    <div class="box">
        <img src="./pp.jpg" alt="">
        <p class="review">乌拉呀哈咿呀哈，呜呀伊哈,乌拉乌拉呀哈，呀哈呀哈乌拉</p>
        <div class="appraise">来自114514条评价</div>
        <div class="info">
            <h4>软萌孙乌空...</h4> |
            <span>49.0元</span>
        </div>
    </div>
</body>
</html>
```

然后是对中间的灰色竖线的细化：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        body{
            background-color: aliceblue;
        }
        .box{
            width: 298px;
            height: 415px;
            background-color: #fff;
            margin: 100px auto;     /*块级元素居中 */
        } 
        .box img{
            width: 100%;
        }
        .review{
            height: 70px;
            font-size: 14px;
            padding: 0 28px;
            /* 段落没有width属性，所以padding不会撑开盒子的宽度 */
            margin-top: 30px;
        }
        .appraise{
            font-size: 12px;
            color: #b0b0b0;
            margin-top: 20px;
            padding: 0 28px;
        }
        .info{
            font-size: 14px;
            margin-top: 15px;
            padding: 0 28px;
        }
        .info h4{
            display: inline-block;
            font-weight: 400;        
            /* 不加粗 */
        }
        .info span{
            color: #ff6700;
        }
        .info em{
            font-style: normal;
            color: #ebe4e0;
            margin: 0 6px 0 15px;
        }
    </style>
</head>
<body>
    <div class="box">
        <img src="./pp.jpg" alt="">
        <p class="review">乌拉呀哈咿呀哈，呜呀伊哈,乌拉乌拉呀哈，呀哈呀哈乌拉</p>
        <div class="appraise">来自114514条评价</div>
        <div class="info">
            <h4>软萌孙乌空...</h4> 
            <em>|</em>
            <span>49.0元</span>
        </div>
    </div>
</body>
</html>
```

然后把软萌孙乌空换成商品的链接就好了：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        body{
            background-color: aliceblue;
        }
        a{
            color:#333;
            text-decoration: none;
        }
        .box{
            width: 298px;
            height: 415px;
            background-color: #fff;
            margin: 100px auto;     /*块级元素居中 */
        } 
        .box img{
            width: 100%;
        }
        .review{
            height: 70px;
            font-size: 14px;
            padding: 0 28px;
            /* 段落没有width属性，所以padding不会撑开盒子的宽度 */
            margin-top: 30px;
        }
        .appraise{
            font-size: 12px;
            color: #b0b0b0;
            margin-top: 20px;
            padding: 0 28px;
        }
        .info{
            font-size: 14px;
            margin-top: 15px;
            padding: 0 28px;
        }
        .info h4{
            display: inline-block;
            font-weight: 400;        
            /* 不加粗 */
        }
        .info span{
            color: #ff6700;
        }
        .info em{
            font-style: normal;
            color: #ebe4e0;
            margin: 0 6px 0 15px;
        }
    </style>
</head>
<body>
    <div class="box">
        <img src="./pp.jpg" alt="">
        <p class="review">乌拉呀哈咿呀哈，呜呀伊哈,乌拉乌拉呀哈，呀哈呀哈乌拉</p>
        <div class="appraise">来自114514条评价</div>
        <div class="info">
            <h4><a href="#">软萌孙乌空...</a></h4> 
            <em>|</em>
            <span>49.0元</span>
        </div>
    </div>
</body>
</html>
```

哦。

### 快报模块

再写一个快报模块磨炼一下自己

还是有三个盒子捏

还是先清除一下内外边距再说，然后将大致的边框设置一下：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .box{
            width: 248px;
            height: 163px;
            border: 1px solid #ccc;
            margin: 100px auto;
        }
        .box h3{
            height: 32px;
            border-bottom:1px solid #ccc ;
            font-size: 14px;
            font-weight: 400;
            line-height: 32px;
            padding-left:15px;
        }
    </style>
</head>
<body>
    <div class="box">
        <h3>尸块大清仓</h3>

    </div>
</body>
</html>
```

下面的模块可以用无序列表实现

怎么去掉li前面的项目符号（圆点）？

```css
list-style:none;
```

综上写一个调整完的就是：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .box{
            width: 248px;
            height: 163px;
            border: 1px solid #ccc;
            margin: 100px auto;
        }
        li{
            list-style: none;
        }
        .box h3{
            height: 32px;
            border-bottom:1px solid #ccc ;
            font-size: 14px;
            font-weight: 400;
            line-height: 32px;
            padding-left:15px;
        }
        .box ul li a{
           font-size: 12px; 
           color: #666;
           text-decoration: none;
        }
        .box ul li{
            height:23px;
            line-height:23px;
        }
    </style>
</head>
<body>
    <div class="box">
        <h3>尸块大清仓</h3>
        <ul>
            <li><a href="#">【特惠】荷叶饭尸块五折秒杀！</a></li>
            <li><a href="#">【特惠】励志轩尸块十元三斤！</a></li>
            <li><a href="#">【特惠】燃燃子尸块十元优惠券！</a></li>
            <li><a href="#">【特惠】瑶瑶尸块立省1000!</a></li>
            <li><a href="#">【特惠】蓝色米老鼠凡买以上商品免费送!</a></li>
        </ul>
    </div>
</body>
</html>
```

然后再调整一下上面的和左边的边距：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .box{
            width: 248px;
            height: 163px;
            border: 1px solid #ccc;
            margin: 100px auto;
        }
        li{
            list-style: none;
        }
        .box h3{
            height: 32px;
            border-bottom:1px solid #ccc ;
            font-size: 14px;
            font-weight: 400;
            line-height: 32px;
            padding-left:15px;
        }
        .box ul li a{
           font-size: 12px; 
           color: #666;
           text-decoration: none;
        }
        .box ul li a:hover{
            text-decoration:underline;
        }
        .box ul li{
            height:23px;
            line-height:23px;
            padding-left: 20px;
        }
        .box ul{
            margin-top:7px;
        }
    </style>
</head>
<body>
    <div class="box">
        <h3>尸块大清仓</h3>
        <ul>
            <li><a href="#">【特惠】荷叶饭尸块五折秒杀！</a></li>
            <li><a href="#">【特惠】励志轩尸块十元三斤！</a></li>
            <li><a href="#">【特惠】燃燃子尸块十元优惠券！</a></li>
            <li><a href="#">【特惠】瑶瑶尸块立省1000!</a></li>
            <li><a href="#">【特惠】蓝色米老鼠凡买以上商品免费送!</a></li>
        </ul>
    </div>
</body>
</html>
```

明天我要进行一个模电实验的考试和模电考试

​
