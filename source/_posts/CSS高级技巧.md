---
title: CSS高级寄巧
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/692f9f9a7313ea6c25102340.jpg
tags: CSS
categories: 前端
---


### 精灵图

为什么需要精灵图呢？
一个网页中往往会应用很多小背景图作为修饰，当网页中的图像过多时，服务器就会频繁地接收和发送 请求图片，造成服务器请求压力过大，这将大大降低页面的加载速度。

因此，为了有效地减少服务器接收和发送请求的次数，提高页面的加载速度，出现了 CSS 精灵技术（也称 CSS Sprites、CSS 雪碧）

**核心原理：将网页中的一些小背景图像整合到一张大图中 ，这样服务器只需要一次请求就可以了**

这是王者和淘宝的精灵图

使用精灵图的核心：

> 1. 精灵图主要针对于小的背景图片使用。
> 2. 主要借助于背景位置来实现---background-position 。
> 3. 一般情况下精灵图都是负值。（千万注意网页中的坐标： x轴右边走是正值，左边走是负值， y轴同理。）

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            width: 60px;
            height: 60px;
            margin: 100px auto;
            background:url(./IMG王者3d.png);
            background-position: -182px 0;
        }
    </style>
</head>
<body>
    <div class="box">

    </div>
</body>
</html>
```

耶

### 字体图标

字体图标使用场景：网页中通用的小图标

精灵图有很多优点，但是也有很多缺点：

> 1.图片文件比较大
> 
> 2.图片本身放大和缩小会失真
> 
> 3.一旦图片制作完毕想要更换很复杂

此时就有一种技术的出现很好的解决了以上的问题：字体图标inconfont

字体图标可以为前端工程师提供方便高效的图标使用方式，展示的是图标，本质是字体

所以简单就用字体图标

复杂就用精灵图

字体图标是网页常见的图标，直接网上下载即可

> 1.字体图标的下载
> 
> 2.字体图标的引入（到html页面中）
> 
> 3.字体图标的追加（以后添加新的小图标）

字体图标下载推荐网站：

```css
http://icomoon.io

http://www.iconfont.cn/
```

第一个是外网要挂梯子

选择完点右下角打包下载到本地

再解压 有很多种样式可供选择
引入就需要把下载包里面的fonts文件夹放到页面根目录下


```css
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @font-face {
            font-family: 'icomoon';
            src: url('fonts/icomoon.eot?b7s6ss');
            src: url('fonts/icomoon.eot?b7s6ss#iefix') format('embedded-opentype'),
                url('fonts/icomoon.ttf?b7s6ss') format('truetype'),
                url('fonts/icomoon.woff?b7s6ss') format('woff'),
                url('fonts/icomoon.svg?b7s6ss#icomoon') format('svg');
            font-weight: normal;
            font-style: normal;
            font-display: block;
        }
        span{
            font-size: 100px;
            color: black;
            font-family: 'icomoon';
        }
        p{
            font-size: 100px;
            color: rgb(13, 148, 13);
            font-family: 'icomoon'; 
        }
    </style>
</head>

<body>
    <span></span>
    <p></p>
</body>

</html>
```

如果之后要新增，点上面那个选择文件


这样就可以新增了

字体图标加载原理：

### CSS三角

网页中常见一些三角形，使用 CSS 直接画出来就可以，不必做成图片或者字体图标

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   <style>
     div { 
        width: 0; 
        height: 0; 
        line-height: 0; 
        font-size: 0; 
        border: 50px solid transparent; 
        border-left-color: pink; 
        } 
   </style>
</head>
<body>
    <div></div>
</body>
</html>
```

### CSS用户界面样式

所谓的界面样式，就是更改一些用户的操作样式，以便提高更好的用户体验

更改用户的鼠标样式

```css
li {cursor: pointer; }
```
可以设置或检索在对象上移动的鼠标指针采取何种系统预定义的光标形状
表单轮廓

给表单添加 outline: 0; 或者 outline: none; 样式之后，就可以去掉默认的蓝色边框。

```css
input {outline: none; }
```

防止表单域拖拽

在实际开发中，文本域右下角是不可以拖拽的：

```css
textarea{ resize: none;}
```

### vertical-align属性应用

CSS 的 vertical-align 属性使用场景： 经常用于设置图片或者表单(行内块元素）和文字垂直对齐

用于设置一个元素的垂直对齐方式，但是它只针对于行内元素或者行内块元素有效。

语法：

```css
vertical-align : baseline | top | middle | bottom
```

图片、表单都属于行内块元素，默认的 vertical-align 是基线对齐。

vertical-align可以解决图片底部默认空白缝隙问题

bug：图片底侧会有一个空白缝隙，原因是行内块元素会和文字的基线对齐。

主要解决方法有两种：

> 1. 给图片添加 vertical-align:middle | top| bottom 等。 （提倡使用的）
> 2. 把图片转换为块级元素 display: block;


### 溢出的文字省略号显示

单行文本溢出显示省略号

多行文本溢出显示省略号

单行文本溢出显示省略号必须满足三个条件：

```css
/*1. 先强制一行内显示文本*/ 
 white-space: nowrap; （ 默认 normal 自动换行） 
 /*2. 超出的部分隐藏*/ 
 overflow: hidden; 
 /*3. 文字用省略号替代超出的部分*/ 
 text-overflow: ellipsis;
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   <style>
     div { 
        width: 100px;
        height: 80px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        background-color: cadetblue;
    } 
   </style>
</head>
<body>
    <div>西安邮电你是杀不死我的哈哈哈哈哈哈哈哈</div>
</body>
</html>
```

而至于多行文本溢出显示省略号有较大的兼容性问题，适合于webKit浏览器或者是移动端，移动端大部分是webkit内核

```css
overflow: hidden; 
text-overflow: ellipsis; 
/* 弹性伸缩盒子模型显示 */ 
display: -webkit-box; 
/* 限制在一个块元素显示的文本的行数 */ 
-webkit-line-clamp: 2; 
/* 设置或检索伸缩盒对象的子元素的排列方式 */ 
-webkit-box-orient: vertical;
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 100px;
            height: 43px;
            overflow: hidden;
            text-overflow: ellipsis;
            /* 弹性伸缩盒子模型显示 */
            display: -webkit-box;
            /* 限制在一个块元素显示的文本的行数 */
            -webkit-line-clamp: 2;
            /* 设置或检索伸缩盒对象的子元素的排列方式 */
            -webkit-box-orient: vertical;

            background-color: cadetblue;
        }
    </style>
</head>

<body>
    <div>西安邮电你是杀不死我的哈哈哈哈哈哈哈哈</div>
</body>

</html>
```

**更推荐让后台人员来做这个效果，因为后台人员可以设置显示多少个字，操作更简单。**

又有我们的事了么

我补药

有一些东西可以帮我们进行技术更快更好的布局

### 常见布局寄巧

margin负值的运用

这是为了让1+1=1

> 1.让每个盒子margin 往左侧移动 -1px 正好压住相邻盒子边框
> 
> 2.鼠标经过某个盒子的时候，提高当前盒子的层级即可（如果没有有定位，则加相对定位（保留位置），如果有定位，则加z-index）

文字围绕浮动元素

文字围绕浮动元素就是在巧妙运用浮动元素不会压住文字的特性

行内块的巧妙运用

页码在页面的中间显示：

> 1. 把这些链接盒子转换为行内块， 之后给父级指定 text-align:center
> 2. 利用行内块元素中间有缝隙，并且给父级添加 text-align:center; 行内块元素会水平会居中

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
            text-align: center;
        }
        .box a{
            display: inline-block;
            width: 36px;
            height: 36px;
            background-color: #f7f7f7;
            border: 1px solid #ccc;
            text-align: center;
            line-height: 36px;
            text-decoration: none;
            color: #333;
            font-size: 16px;
        }
        .box .prev,
        .box .next{
            width: 85px;
        }
        .box .current,
        .box .elp{
            border: 0;
            background-color: white;
        }
        .box input{
            height: 36px;
            width: 45px;
            border: 1px solid #ccc;
            outline: none;
        }
        .box button{
            width: 60px;
            height: 36px;
            background-color: #f7f7f7;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <div class="box">
    <a href="#" class="prev">&lt;&lt;上一页</a>
    <a href="#">1</a>
    <a href="#" class="current">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <a href="#">5</a>
    <a href="#">6</a>
    <a href="#">7</a>
    <a href="#">8</a>
    <a href="#" class="elp">...</a>
    <a href="#" class="next">&gt;&gt;下一页</a>
    到第
    <input type="text">
    页
    <button>确定</button>
    </div>
</body>
</html>
```


CSS三角强化

我们来实现这样的布局吧

它的原理也是三角


```css
width: 0; 
height: 0; 
border-color: transparent red transparent transparent; 
border-style: solid; 
border-width: 22px 8px 0 0;
```

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box1{
            width: 0;
            height: 0;
            /* 上边框宽度调大 */
            border-top: 100px solid transparent;
            border-right: 50px solid skyblue;
            /* 左下的边框宽度设置为0 */
            border-bottom: 0;
            border-left: 0;
        }
    </style>
</head>
<body>
    <div class="box1">

    </div>
</body>
</html>
```

然后实现京东的那个图片：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .price{
            width: 160px;
            height: 24px;
            border: 1px solid red;
            text-align: center;
            line-height: 24px;
            margin: 0 auto;
        }
        .left{
            position: relative;
            float: left;
            width: 90px;
            height: 100%;
            background-color: red;
            font-size: 16px;
            color: white;
            font-weight: 700;
            margin-right: 8px;
        }
        .left i{
            position: absolute;
            right: 0;
            height: 0;
            border-style: solid;
            border-top: 24px solid transparent;
            border-right: 10px solid white;
            border-bottom: 0;
            border-left: 0;
        }
        .right{
            font-size: 12px;
            color: gray;
            text-decoration: line-through;
        }
    </style>
</head>
<body>
    <div class="box1">

    </div>
    <div class="price">
        <span class="left">
            $1449
            <i></i>
        </span>
        <span class="right">
            $1650
        </span>
    </div>
</body>
</html>
```

不同浏览器对有些标签的默认值是不同的，为了消除不同浏览器对HTML文本呈现的差异，照顾浏览器的兼 容，我们需要对CSS 初始化

简单理解： CSS初始化是指重设浏览器的样式。 (也称为CSS reset）

每个网页都必须首先进行 CSS初始化。

Unicode编码字体：

我们把中文字体的名称用相应的Unicode编码来代替，这样就可以有效的避免浏览器解释CSS的时候出现乱码的问题：

> 黑体 \\9ED1\\4F53
> 
> 宋体 \\5B8B\\4F53
> 
> 微软雅黑 \\5FAE\\8F6F\\96C5\\9ED1

​


