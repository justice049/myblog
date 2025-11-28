---
title: CSS布局
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/6929643d7f8e1c737822df60.png
tags: CSS
categories: 前端
---


​那就讲讲CSS元素的显示模式吧

在CSS中，HTML的标签显示模式有很多

### 元素的显示模式

#### 块级元素

常见的块级元素：

```css
h1 - h6
p
div
ul
ol
li
...
```

有一些特点：

> 独占一行
> 
> 高度，宽度，内外边距，行高都可以控制
> 
> 宽度默认是父级元素宽度的100%（和父元素一样宽）
> 
> 是一个容器（盒子），里面可以放行内和块级元素

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .demol .parent {
            width: 500px;
            height: 500px;
            background-color: aqua;
        }
        .demol .child {
            /* 不写width，默认和父元素一样
            不写height，默认为0 */
            height: 200px;
            background-color: blue;
        }
    </style>
</head>
<body>
    <div class="demol">
        <div class="parent">
            <div class="child">
                孩子
            </div>
            <div class="child">
                妈妈
            </div>
        </div>
    </div>
</body>
</html>
```

tips：

文字类元素内不能使用块级元素

p标签主要用于存放文字，内部不可以放块级元素（尤其是div）

#### 行内元素/内联元素

使用display就可以把行内元素转成块级元素了

这是一些常见的元素：

```css
a
strong
b
em
i
del
s
ins
u
span
...
```

特点：

> 不独占一行，一行可以显示多个
> 
> 设置高度，宽度，行高无效
> 
> 左右外边距有效（上下无效），内边距有效
> 
> 默认宽度就是本身的内容
> 
> 行内元素只能容纳文本和其他的行内元素，不能放块级元素

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .demo2 span{
            width: 200px;
            height: 200px;
            background-color: rgb(195, 195, 231);
        }
    </style>
</head>
<body>
    <div class="demo2">
        <span>前端</span>
        <span>后端</span>
        <span>人工智能</span>
    </div>
</body>
</html>
```

tips：

> a标签中不能再放a标签（Chrome不报错，但是最好不要这么做）
> 
> a标签里可以放块级元素，但是更建议把a转换成块级元素

#### 区别

行内元素和块级元素还是有区别的

> 块级元素独占一行，行内元素不独占一行
> 
> 块级元素可以设置宽高，行内元素不能设置宽高
> 
> 块级元素四个方向都能设置内外边距，行内元素垂直方向不能设置

#### 改变显示模式

使用display属性可以修改元素的显示模式

可以把div等变成行内元素，也可以把a，span等变成块级元素

```css
display: block 改成块级元素 [常用]
display: inline 改成行内元素 [很少用]
display: inline-block 改成行内块元素
```

行内块元素，我现在是智性恋，喜欢chat和kimi

```css
div {
  display: inline-block;
}
```

#### 盒模型

每一个HTML元素就相当于一个矩形的“盒子”

这个盒子由这几个部分构成

> 边框：border
> 
> 内容：content
> 
> 内边距：padding
> 
> 外边距：margin

##### 边框

边框有一些属性：

> 粗细: border-width
> 
> 样式: border-style, 默认没边框. solid 实线边框 dashed 虚线边框 dotted 点线边框
> 
> 颜色: border-color

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            width: 200px;
            height: 100px;
            border-color: aquamarine;
            border-style: solid;
            border-width: 10px;
        }
    </style>
</head>
<body>
    <div></div>
</body>
</html>
```

边框有可能撑大盒子，如何让边框不撑大盒子呢？

只需要加一句：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            width: 200px;
            height: 100px;
            border-color: aquamarine;
            border-style: solid;
            border-width: 10px;
            box-sizing: border-box;
        }
    </style>
</head>
<body>
    <div></div>
</body>
</html>
```

这个border设置还可以简写 （没有顺序要求），还可以改四个方向的任意边框

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            width: 200px;
            height: 100px;
            border: 1px solid red;
            /* border-color: aquamarine;
            border-style: solid;
            border-width: 10px; */
            box-sizing: border-box;
        }
    </style>
</head>
<body>
    <div></div>
</body>
</html>
```

```css
border-top/bottom/left/right
```

然后边框设置会利用到层叠性（就近原则的生效）：

```css
border: 1px solid blue;
border-top: red;
```

这就是只给上边框设置成红色，其他都是蓝色

##### 内边距

padding可以设置内容和边框的距离

默认写法是顶着边框放置的，用padding来控制这个距离

可以给四个方向都加上边距：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            width: 200px;
            height: 100px;
            padding-left: 5px;
            padding-top: 5px;
            padding-bottom: 5px;
            padding-right: 5px;
        }
    </style>
</head>
<body>
    <div>我想打算法比赛</div>
</body>
</html>
```

如果想要距离一样的话也可以直接设置padding：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            width: 200px;
            height: 100px;
            padding: 5px;
        }
    </style>
</head>
<body>
    <div>我想打算法比赛</div>
</body>
</html>
```

也有其他情况表示的边距：

```css
padding: 5px; 表示四个方向都是 5px
padding: 5px 10px; 表示上下内边距 5px, 左右内边距为 10px
padding: 5px 10px 20px; 表示上边距 5px, 左右内边距为 10px, 下内边距为 20px
padding: 5px 10px 20px 30px; 表示 上5px, 右10px, 下20px, 左30px (顺时针)
```

以及内边距也是回程大盒子的，使用box-sizing: border-box属性也可以使内边距不再撑大盒子

##### 外边距

内边距是控制页内容的，外边距是控制盒子和盒子间的距离

控制盒子和盒子之间的距离

可以给四个方向都加上边距

> margin-top
> 
> margin-bottom
> 
> margin-left
> margin-right

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            background-color: aqua;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div>OOTD</div>
    <div>PTSD</div>
</body>
</html>
```

外边距的复合写法的规则和padding相同

```css
margin: 10px; // 四个方向都设置
margin: 10px 20px; // 上下为 10, 左右 20
margin: 10px 20px 30px; // 上 10, 左右 20, 下 30
margin: 10px 20px 30px 40px; // 上 10, 右 20, 下 30, 左 40
```

#### 块级元素水平居中

> 前提：
> 
> 指定宽度（如果不指定元素，则默认和父元素一致）
> 
> 把水平margin设置成auto

这三种写法都可以：

```css
margin-left: auto; margin-right: auto;
margin: auto;
margin: 0 auto;
```

tips：

> 这个水平居中的方式和text-align不一样
> 
> margin：auto是给块级元素用的
> 
> text-align：center是让行内元素或者行内块元素居中的

对于垂直居中，不能使用“上下margin为auto的方式”

#### 去除浏览器默认样式

浏览器会给元素加上一些默认的样式，尤其是内外边距，不同的浏览器默认样式存在差别

为保证代码阿紫不同浏览器都能按照统一样式显示，往往会去除浏览器默认样式

可以使用通配符选择器完成这件事：

```css
* {
    marign: 0;
    padding: 0;
}
```

#### 弹性布局

我们写一点代码（这真的叫代码吗）：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            width: 100%;
            height: 150px;
            background-color: blue;
        }
        div>span{
            background-color: green;
            width: 100px;
        }
    </style>
</head>
<body>
    <div>
        <span>划酒拳</span>
        <span>猜有无</span>
        <span>摇筛盅</span>
    </div>
</body>
</html>
```


#### flex布局基本概念

flex是flexible box的缩写，意思是弹性盒子

任何一个html元素都可以指定为display：flex完成弹性布局

**flex布局的本质是给父盒子添加display:flex属性，来控制盒子的位置和排列方式**

有一些基础的概念：

> 被设置为**display:flex** 属性的元素, 称为**flex container**
> 
> 它的所有子元素立刻称为了该容器的成员, 称为 **flex item**
> 
> **flex item** 可以纵向排列, 也可以横向排列, 称为**flex direction(主轴)**


**tips：当父元素设置为display:flex之后，子元素的float，clear，vertical-align都会失效**

##### 常用属性

###### justify-content

设置主轴上的子元素排列方式（使用之前要确定好主轴是啷个方向）：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style>
    div{
        width: 100%;
        height: 150px;
        background-color: cornflowerblue;
        display: flex;
    }
    div span{
        width: 100px;
        height: 100px;
        background-color: lightgreen;
    }
</style>
</head>
<body>
    <div>
        <span>苦</span>
        <span>哪</span>
        <span>有</span>
        <span>软</span>
        <span>饭</span>
        <span>好</span>
        <span>吃</span>
    </div>
</body>
</html>
```

###### aligin-items

这是设置侧轴上的元素排列方式

在上面的代码中，是让元素按照主轴的方向排列，同理也可以指定元素方向按照侧轴方向排列

这取值和那个justify-content差不多：

> 理解 stretch(拉伸):
> 
> 这个是 align-content 的默认值. 意思是如果子元素没有被显式指定高度,那么就会填充满父元素的高度.

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style>
    div{
        width: 500px;
        height: 500px;
        background-color: cornflowerblue;
        display: flex;
        justify-content: space-around;
    }
    div span{
        width: 50px;
        background-color: lightgreen;
    }
</style>
</head>
<body>
    <div>
        <span>苦</span>
        <span>哪</span>
        <span>有</span>
        <span>软</span>
        <span>饭</span>
        <span>好</span>
        <span>吃</span>
    </div>
</body>
</html>
```

可以用align-items实现垂直居中：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style>
    div{
        width: 500px;
        height: 500px;
        background-color: cornflowerblue;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    div span{
        width: 50px;
        height: 100px;
        background-color: lightgreen;
    }
</style>
</head>
<body>
    <div>
        <span>苦</span>
        <span>哪</span>
        <span>有</span>
        <span>软</span>
        <span>饭</span>
        <span>好</span>
        <span>吃</span>
    </div>
</body>
</html>
```

tips：align-items只能针对单行元素来实验

如果有多行元素就得使用item-contents

我去趟厕所

以及，苦哪有软饭好吃

​
