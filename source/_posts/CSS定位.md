---
title: CSS定位
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/692f9df37313ea6c251022c2.jpg
tags: CSS
categories: 前端
---

### 为什么要用定位

以下的情况用标准流或者浮动可以实现吗？

1.某个元素可以自由的在一个盒子内移动位置，并且压住其他的盒子
2.当我们滚动窗口的时候，盒子是固定屏幕某个位置的

就像是CSDN的创作助手和这个吗喽一样：

就是因为以上效果，标准流或者浮动都无法快速的实现，所以需要用到定位来实现

所以：

> 1. 浮动可以让多个块级盒子一行没有缝隙排列显示， 经常用于横向排列盒
> 2. 定位则是可以让盒子自由的在某个盒子内移动位置或者固定屏幕中某个位置，并且可以压住其他盒子

### 定位的分类

定位：将盒子定在某一个位置，所以定位也是在摆放盒子， 按照定位的方式移动盒子

定位 = 定位模式 + 边偏移

**定位模式用于指定一个元素在文档中的定位方式**

**边偏移则决定了该元素的最终位置**

定位模式决定元素的定位方式 ，它通过 CSS 的 position 属性来设置，其值可以分为四个

边偏移就是定位的盒子移动到最终位置。有 top、bottom、left 和 right 4 个属性

**静态定位 ​**

静态定位是元素的默认定位方式，无定位的意思：

```css
选择器 { position: static; }
```

静态定位按照标准流特性摆放位置，没有边偏移

静态定位在布局的时候很少使用

**相对定位relative（重点）**

相对定位是元素在移动位置的时候，是相对于它的原来的位置来说的（自恋）

```css
选择器 { position: relative; }
```

相对定位的特点：

> 1. 它是相对于自己原来的位置来移动的（移动位置的时候参照点是自己原来的位置）。
> 2. 原来在标准流的位置继续占有，后面的盒子仍然以标准流的方式对待它。 因此，相对定位并没有脱标。它最典型的应用是给绝对定位当爹的。。。（限制绝对定位）

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box1{
            position: relative;
            top: 100px;
            left: 100px;
            width: 100px;
            width: 200px;
            height: 200px;
            background-color: aquamarine;
        }
        .box2{
            width: 200px;
            height: 200px;
            background-color: blue;
        }
    </style>
</head>
<body>
    <div class="box1">

    </div>
    <div class="box2">

    </div>
</body>
</html>
```

**绝对定位absolute（重要）**

绝对定位是元素在移动位置的时候，是相对于它祖先元素来说的（拼爹型）

```css
选择器 { position: absolute; }
```

绝对定位三个特点：

> 1. 如果没有祖先元素或者祖先元素没有定位，则以浏览器为准定位（Document 文档）
> 2. 如果祖先元素有定位（相对、绝对、固定定位），则以最近一级的有定位祖先元素为参考点移动位置
> 3. 绝对定位不再占有原先的位置（脱标，比浮动飘得还高）

### 子绝父相

为了弄清楚这个口诀，就明白了绝对定位和相对定位的使用场景

“子绝父相”很重要。是我们学习的口诀，是定位中的最常用的一种方式（子级是绝对定位的话父级就要用相对定位）

> ① 子级绝对定位，不会占有位置，可以放到父盒子里面的任何一个地方，不会影响其他的兄弟盒子
> 
> ② 父盒子需要加定位限制子盒子在父盒子内显示
> 
> ③ 父盒子布局时，需要占有位置，因此父亲只能是相对定位

这就是子绝父相的由来，所以相对定位经常用来作为绝对定位的父级

总结：因为父级需要占有位置，因此是相对定位， 子盒子不需要占有位置，则是绝对定位

子绝父相不是永远不变的，如果父元素不需要占有位置，子绝父绝也会遇到

**固定定位fixed（重要）**

固定定位是元素固定于浏览器可视区的位置

主要使用场景： 可以在浏览器页面滚动时元素的位置不会改变

```css
选择器 { position: fixed; }
```

固定定位特点：

1.以浏览器的可视窗口作为参考点移动元素

跟父元素没有任何关系

不随滚动条滚动

2. 固定定位不在占有原先的位置

固定定位也是脱标的，其实固定定位也可以看做是一种特殊的绝对定位

**固定定位小技巧：固定在板心右侧位置**

固定定位不仅可以对齐整个页面，还可以以中间的版心为参照对齐

小算法（不，这不是）：

> 1. 让固定定位的盒子 left: 50%. 走到浏览器可视区（也可以看做版心） 的一半位置
> 2. 让固定定位的盒子 margin-left: 版心宽度的一半距离。 多走 版心宽度的一半位置

让固定定位的盒子贴着版心的右侧对齐

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   <style>
    .box2{
        position: fixed;
        left: 50%;
        top:100px;
        background-color: aqua;
        width: 50px;
        height: 100px;
        margin-left: 500px;
    }
    .box1{
        background-color: pink;
        width: 1000px;
        height: 700px;
        margin: 0 auto;
    }
   </style>
</head>
<body>
    <div class="box2">

    </div>
    <div class="box1">

    </div>
</body>
</html>
```

我们还会发现，有些定位是相对定位和固定定位的混合，是sticky的，粘性的

语法：

```css
选择器 { position: sticky; top: 10px; }
```

粘性定位的特点：

> 1. 以浏览器的可视窗口为参照点移动元素（固定定位特点）
> 2. 粘性定位占有原先的位置（相对定位特点）
> 3. 必须添加 top 、left、right、bottom 其中一个才有效 跟页面滚动搭配使用

兼容性较差，IE 不支持

**定位的总结：**

1. 一定记住 相对定位、固定定位、绝对定位 两个大的特点：

是否占有位置（脱标否）

以谁为基准点移动位置

2. 学习定位重点学会子绝父相

### 定位叠放次序

在使用定位布局时可能会出现盒子重叠的情况

此时，可以使用 z-index 来控制盒子的前后次序 (z轴)

```css
选择器 { z-index: 1; }
```

**绝对定位盒子居中**

加了绝对定位的盒子不能通过margin：0 auto水平居中，但是可以通过下面的计算方法实现水平和垂直居中：

> 1.left 50%：让盒子的左侧移动到父级元素的水平中心位置
> 
> 2.margin-left - 100px：让盒子向左移动自身宽度的一半

**定位特殊特性**

绝对定位和固定定位也和浮动类似

> 1. 行内元素添加绝对或者固定定位，可以直接设置高度和宽度
> 2. 块级元素添加绝对或者固定定位，如果不给宽度或者高度，默认大小是内容的大小

浮动元素、绝对定位(固定定位）元素的都不会触发外边距合并的问题

**绝对定位（固定定位）会完全压住盒子**

浮动元素不同，只会压住它下面标准流的盒子，但是不会压住下面标准流盒子里面的文字（图片） 但是绝对定位（固定定位） 会压住下面标准流所有的内容。

浮动之所以不会压住文字，因为浮动产生的目的最初是为了做文字环绕效果的。 文字会围绕浮动元素

### 淘宝轮播图


大盒子我们类名为：tb-promo         淘宝广告

里面先放一张图片

左右两个按钮，用连接就好了 ，左箭头prev 右箭头next

底部的小圆点ul，类名为promo-nav

先放盒子然后按照想法做出想要的效果：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .tb-promo{
            position: relative;
            width: 520px;
            height: 280px;
            margin: 0 auto;
            background-color: aqua;
        }
        .tb-promo img{
            width: 520px;
            height: 280px;
        }
        .prev{
            position: absolute;
            left: 0;
            top: 125px;
            /* 加了绝对定位的盒子可以直接设置高度和宽度 */
            width: 20px;
            height: 30px;
            background: rgba(0,0,0,0.3);
            list-style: none;
            line-height: 30px;
            text-align: center;
            text-decoration: none;
            color: white;
            border-radius: 0 15px 15px 0;
        }
        .next{
            position: absolute;
            right: 0;
            top: 125px;
            /* 加了绝对定位的盒子可以直接设置高度和宽度 */
            width: 20px;
            height: 30px;
            background: rgba(0,0,0,0.3);
            list-style: none;
            line-height: 30px;
            text-align: center;
            text-decoration: none;
            color: white;
            border-radius: 15px 0 0 15px;
        }
    </style>
</head>
<body>
    <div class="tb-promo">
        <img src="../pp.jpg" alt="">
        <a href="#" class="prev"> &lt; </a>
        <a href="#" class="next">></a>
    </div>
</body>
</html>
```

代码冗余，可以使用并集选择器简化代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .tb-promo{
            position: relative;
            width: 520px;
            height: 280px;
            margin: 0 auto;
            background-color: aqua;
        }
        .tb-promo img{
            width: 520px;
            height: 280px;
        }
        .prev,.next{
            position: absolute;
            top: 125px;
            /* 加了绝对定位的盒子可以直接设置高度和宽度 */
            width: 20px;
            height: 30px;
            background: rgba(0,0,0,0.3);
            list-style: none;
            line-height: 30px;
            text-align: center;
            text-decoration: none;
            color: white;
        }
        .prev{
            left: 0;
            border-radius: 0 15px 15px 0;
        }
        .next{
            right: 0;
            border-radius: 15px 0 0 15px;
        }
    </style>
</head>
<body>
    <div class="tb-promo">
        <img src="../pp.jpg" alt="">
        <a href="#" class="prev"> &lt; </a>
        <a href="#" class="next">></a>
    </div>
</body>
</html>
```

如果一盒子有left也有right则默认执行left，同理也先执行top

然后是制作下面的边栏，做完了

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
        li{
            list-style: none;
        }
        .tb-promo{
            position: relative;
            width: 520px;
            height: 280px;
            margin: 0 auto;
            background-color: aqua;
        }
        .tb-promo img{
            width: 520px;
            height: 280px;
        }
        .prev,.next{
            position: absolute;
            top: 125px;
            /* 加了绝对定位的盒子可以直接设置高度和宽度 */
            width: 20px;
            height: 30px;
            background: rgba(0,0,0,0.3);
            list-style: none;
            line-height: 30px;
            text-align: center;
            text-decoration: none;
            color: white;
        }
        .prev{
            left: 0;
            border-radius: 0 15px 15px 0;
        }
        .next{
            right: 0;
            border-radius: 15px 0 0 15px;
        }
        .promo-nav{
            position:absolute;
            bottom: 15px;
            left: 0;
            width: 70px;
            height: 13px;
            left: 50%;
            margin-left: -35px;
            border-radius: 6.5px;
            background-color: rgb(255,255,255,.4);
        }
        .promo-nav li{
            float: left;
            height: 8px;
            width: 8px;
            border-radius: 50%;
            margin: 3px;
            background-color: white;
        }
        .promo-nav .select{
            background-color: #ff5000;
        }
    </style>
</head>
<body>
    <div class="tb-promo">
        <img src="../pp.jpg" alt="">
        <a href="#" class="prev"> &lt; </a>
        <a href="#" class="next">></a>
        <div class="promo-nav">
            <li class="select"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </div>
    </div>
</body>
</html>
```

### 网页布局总结

通过盒子模型可以清楚知道大部分html标签是一个盒子

通过CSS浮动，定位 可以让每个盒子排列成网页

一个完整的网页，是标准流、浮动、定位一起完成布局的，每个都有自己的专门用法

### 元素的显示与隐藏

接下来说一下元素的显示和隐藏

类似网站广告，当我们点击关闭就不见了，但是我们重新刷新页面，会重新出现！ 本质：让一个元素在页面中隐藏或者显示出来。

**display属性**

display属性用于一个元素应如何显示

> display：none：隐藏对象
> 
> display：block：除了转换为块级元素之外，也有显示元素的意思

**display隐藏元素之后，不再占有原来的位置**

应用极其广泛，搭配JS可以做很多的网页特效

**visibility 可见性**

visibility 属性用于指定一个元素应可见还是隐藏

> visibility：visible ; 元素可视
> 
> visibility：hidden; 元素隐藏

visibility 隐藏元素后，继续占有原来的位置。 如果隐藏元素想要原来位置， 就用 visibility：hidden 如果隐藏元素不想要原来位置， 就用 display：none (用处更多重点）

**overflow 溢出**

一个网页有许多的盒子，但是一个盒子不可以影响其他的盒子，所以我们可以用overflow溢出，overflow 属性指定了如果内容溢出一个元素的框（超过其指定高度及宽度） 时，会发生什么

一般情况下，我们都不想让溢出的内容显示出来，因为溢出的部分会影响布局。 但是如果有定位的盒子， 请**慎用overflow:hidden 因为它会隐藏多余的部分**

所以总结一下就是：

> 1. display 显示隐藏元素 但是不保留位置
> 2. visibility 显示隐藏元素 但是保留原来的位置
> 3. overflow 溢出显示隐藏 但是只是对于溢出的部分处理

我们拿土豆网作为显示与隐藏的例子

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .tudou{
            position: relative;
            width: 444px;
            height: 320px;
            background-color: pink;
            margin: 30px auto;
        }
        .tudou img{
            width: 100%;
            height: 100%;
        }
        .mask{
            display: none;
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgb(0,0,0,.4);
        }
        .tudou:hover .mask{
            display: block;
        }
    </style>
</head>
<body>
    <div class="tudou">
        <div class="mask"></div>
        <img src="./om.jpg" alt="">
    </div>
</body>
</html>
```

你无敌了孩子

​
