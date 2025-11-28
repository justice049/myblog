---
title: 初识CSS
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/6929613f7f8e1c737822deec.png
tags: CSS
categories: 前端
---


​CSS是控制页面展示效果的（能够对网页中元素位置的排版进行像素级精确控制, 实现美化页面的效果. 能够做到页面的样式和结 构分离）

就和化妆一样

HTML是决定页面结构的

先写一个标签吧

**style**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        p{
            color: red;
            font-size: 40px;
        }
    </style>
</head>
<body>
    <p>hello world</p>
    <h1>hello</h1>
</body>
</html>
```

这是一种选择器+ {一条/N条声明}

**选择器决定针对谁修改 (找谁)**

**声明决定修改啥. (干啥)** 

**声明的属性是键值对. 使用 ; 区分键值对, 使用 : 区分键和值**

tips：

> CSS要写到style标签
> 
> style标签可以放到页面中的任意位置，一般放到head标签
> 
> CSS使用/\* \*/作为注释（Ctrl+/快速切换）

### 引入方式

#### 内部样式表

内部样式表就是将CSS嵌套到html中（通过style标签嵌套）

它放哪都行但一般放到head标签中

优点：这样可以让样式和页面结构分离

缺点：分离的不够彻底，尤其是CSS内容多的时候

#### 行内样式表

行内样式表示通过style属性，来指定某个标签的样式，只适用于简单样式，只针对某个标签

缺点：不能写太复杂的样式（这种写法优先级较高，会覆盖其他的样式）


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        p{
            color: red;
            font-size: 40px;
        }
    </style>
</head>
<body>
    <p>hello world</p>
    <h1>hello</h1>
    <h1 style="color: aqua; font-size: 80px;">我是一个神经病</h1>
</body>
</html>
```

行内样式表比内部样式表优先级高

#### 外部样式

这可是实际开发中最常用的方式！

> 1.可以创建一个css文件
> 
> 2.使用link标签引入CSS

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <p>上帝为你关上一扇门, 然后就去睡觉了</p>
</body>
</html>
```

```html
p {
    color: red;
    font-size: 80px;
}
```

它的优点就在于样式和结构彻底分离了

缺点是收到了浏览器的缓存影响，修改之后不一定立刻生效

缓存的知识：

> 是计算机中一种常见的提升性能的技术手段.
> 
> 网页依赖的资源(图片/CSS/JS等)通常是从服务器上获取的. 如果频繁访问该网站, 那么这些外部资 源就没必要反复从服务器获取. 就可以使用缓存先存起来(就是存在本地磁盘上了). 从而提高访问效 率
> 
> 可以通过 ctrl + F5 强制刷新页面, 强制浏览器重新获取 css 文件

### 代码风格

#### 样式格式

可以是紧凑风格

```css
p { color: red; font-size: 30px;}
```

也可以是展开风格

```css
p {
    color: red;
    font-size: 30px;
}
```

#### 样式大小写

虽然CSS不分大小写，但是开发时统一小写

劳斯我想打CCPC和ICPC

#### 空格规范

冒号后面要带空格，选择器和{间也有空格

### 选择器

#### 选择器功能

选中页面指定的标签元素

要先选中元素才能设置元素的属性

#### 选择器种类

在CSS3中做出了选择器的补充

分为基础选择器和复合选择器：

> **基础选择器：单个选择器构成的**
> 
> 标签选择器
> 
> 类选择器
> 
> id选择器
> 
> 通配符选择器

> **复合选择器：把多种基础选择器综合运用起来**
> 
> 后代选择器
> 
> 子选择器
> 
> 并集选择器
> 
> 伪类选择器

这是CSS选择器参考手册，请过目

[CSS 选择器参考手册](https://www.w3school.com.cn/cssref/css_selectors.asp "CSS 选择器参考手册")

#### 基础选择器

##### 标签选择器

标签选择器可以快速为同一类型的标签都选择出来，但是不能差异化的选择

上面已经介绍过了，不多赘述

##### 类选择器

特点是：

> 差异化表示不同的标签
> 
> 可能让多个标签都使用同一个标签

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <p class="pain">上帝为你关上一扇门, 然后就去睡觉了</p>
    <p class="rich">下辈子我也要当有钱人</p>
</body>
</html>
```

```css
.rich{
    color: blue;
}
.pain{
    color: chocolate;
}
```

对。

语法的结构就是：

> 类名前要有.
> 
> 下方标签可以用class属性调用
> 
> 一个类可以被多个标签使用，一个标签也可以使用多个类（多个类名用 空格分割，可以使代码更好的复用捏）
> 
> 如果是长类名就可以用-分割了
> 
> 不要使用纯数字，中文，标签来命名类（关于命名规范我真的很想说，，这很难评）

一个标签可以使用多个类名，这是示例：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <p class="pain box">上帝为你关上一扇门, 然后就去睡觉了</p>
    <p class="rich box">下辈子我也要当有钱人</p>
</body>
</html>
```

##### id选择器

用#开头，后面跟值

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <p id="fe">学后端学的</p>
    <p id="server">学成全栈就老实了</p>
</body>
</html>
```

```css
#fe{
    color: aquamarine;
}

#server{
    color: rgb(151, 41, 173);
}
```

和类选择器类似

> id选择器的值和html中某个元素的id值相同
> 
> html的元素id不必带#
> 
> id是唯一的，不能被多个标签使用（和类选择器最大的区别，就跟姓名和身份证号一样）

##### 通配符选择器

使用\*的定义，选取所有的标签捏

```css
*{
    color: azure;
}
```

学里牛渴死就是好啊

页面内的所有内容都会被改成这个颜色


### 复合选择器

##### 后代选择器

后代选择器也叫包含选择器，选择某个父元素中的某个子元素

```html
元素1 元素2 {样式声明}
```

元素间要用空格分割，元素1是父级，元素2是子集，只选元素2，不影响元素1

就相当于是把ol中的li修改颜色，不影响ul：

```css
<ul>
    <li>aaa</li>
    <li>bbb</li>
    <li>ccc</li>
</ul>
<ol>
    <li>ddd</li>
    <li>eee</li>
    <li>fff</li>
</ol>
```

```css
ol li {
    color: red;
}
```

以及不一定是儿子，也可以是孙子，不仅可以是爸爸类，还可以是爷爷类

```css
<ul>
    <li>aaa</li>
    <li>bbb</li>
    <li><a href="#">ccc</a></li>
</ul>
```

```css
ul a {
    color: yellow;
}
```

可以是任意基础选择器的组合（包括类选择器，id选择器）

##### 子选择器

子选择器和后代选择器类似，但是只能选择子标签

```css
元素1>元素2 { 样式声明 }
```

使用大于号分割

只选亲儿子，不选孙子

```css
<div class="two">
    <a href="#">链接1</a>
    <p><a href="#">链接2</a></p>
</div>
```

这是后代选择器的写法，可以把链接1和2都选中：

```css
.two a {
    color: red;
}
```

这是子选择器的写法，只选链接1：

```css
.two>a {
    color: red;
}
```

##### 并集选择器

并集选择器用于选择多组标签，可以集体声明

```css
元素1, 元素2 { 样式声明 }
```

> 通过，分割多个元素
> 
> 表示同时选择元素1和元素2
> 
> 任何基础选择器都可以使用并集选择器
> 
> 并集选择器建议竖着写，每个选择器占一行（最后一个选择器不加,）

```css
<div>苹果</div>
<h3>香蕉</h3>
<ul>
    <li>鸭梨</li>
    <li>橙子</li>
</ul>
```

这是把他们都改成红色：

```css
div,
h3,
ul>li {
    color: red;
}
```

##### 伪类选择器

什么是伪类选择器？

它是用来定义元素的状态的

链接伪类选择器：

> a:link 选择未被访问过的链接
> 
> a:visited 选择已经被访问过的链接
> 
> a:hover 选择鼠标指针悬停上的链接
> 
> a:active 选择活动链接(鼠标按下了但是未弹起)

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        a {
            color: black;
        }
        a:hover {
            color: cornflowerblue;
        }
        a:active {
            color: lawngreen;
        }
    </style>
</head>
<body>
    <a href="#">哈哈哈我疯啦</a>
</body>
</html>
```

```css
a:link {
    color: black;
    /* 去掉 a 标签的下划线 */
    text-decoration: none;
}
a:visited {
    color: green;
}
a:hover {
    color: red;
}
a:active {
    color: blue;
}
```

我们如何让一个已经被访问过的链接恢复成未访问的状态捏？

只需要清空浏览器的历史记录即可：

Ctrl+Shift+delete

> **tips：**
> 
> **按照LVHA的顺序书写，如果把A拿到前面就会导致它失效（记忆规则绿化）**
> 
> **浏览器的a标签都有默认的样式，一般实际开发需要单独指定样式**
> 
> **实际开发主要给链接做一个样式，给hover做一个样式即可**

##### :focuse伪类选择器

这个可以选取获取焦点的input表单元素，就比如这个可以当输入的时候把框改颜色：

```css
<!DOCTYPE html>
<html>

<head>
  <style>
    input:focus 
    {
      border: 2px solid blue;
      outline: none;
    }
  </style>
</head>

<body>
  <input type="text" placeholder="请输入内容">
</body>

</html>
```

CSS属性有很多，这是参考文档：

[CSS 参考手册](https://www.w3school.com.cn/cssref/index.asp "CSS 参考手册")对。

### 字体属性

#### 设置字体

没错，字体也是可以设置的，感觉世界是一个巨大的图形化界面转代码

算了，应该是是一个巨大的代码实现图形化界面


```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style>
    div {
        font-family: '宋体';
    }
</style>
</head>
<body>
    <div>
        如果没有爱的话这一生太长了
    </div>
</body>
</html>
```

也可以通过英文来设置

> 字体的名称可以用中文，但是不建议
> 
> 多个字体之间使用，分割（从左到右查找字体，如果都找不到就用默认的）
> 
> 建议使用常见字体，否则兼容性不好

#### 大小

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style>
    div {
        font-family: '宋体';
        font-size: 80px;
    }
</style>
</head>
<body>
    <div>
        如果没有爱的话这一生太长了
    </div>
</body>
</html>
```

如果你设置错误（比如单位错了） ，就会帮你整成默认的，毕竟他要有容错

> 不同的浏览器默认字号不一样，最好给一个明确的值（Chrome默认是16px）
> 
> 可以给body标签使用font-size
> 
> 单位px不能忘记
> 
> 标题标签需要单独指定大小捏

实际上设置的是字体中的字符框高度，实际的字符字形可能比这些框高或者矮

#### 粗细

粗细就是这样设置：

```css
p {
 font-weight: bold;
    font-weight: 700;
}
```

可以使用数字表示粗细，700==bold，400是不变粗，==normal

取值范围：100-->900

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style>
    div {
        font-family: '宋体';
        font-size: 80px;
        font-weight: bold;
    }
</style>
</head>
<body>
    <div>
        如果没有爱的话这一生太长了
    </div>
</body>
</html>
```

#### 文字样式

可以将文字设置成倾斜，但是常用的是把em/i改成不倾斜：

```css
/* 设置倾斜 */
font-style: italic;
/* 取消倾斜 */
font-style: normal;
```

### 文本属性

#### 文本颜色

文本颜色可以通过很多方式设置，这个时候就要介绍一下三原色了

色光三原色RGB算了不介绍了知道就行了

算了还是介绍一下吧

计算机中针对RGB三个分量，分别使用一个字节表示（8个比特位，表示的范围是0-255，十六进制表示为00-FF）

数值越大表示该分量的颜色越浓

255,255,255表示白色

0,0,0表示黑色（光色三原色捏）

比如

```css
color: red;
color: #ff0000;
color: rgb(255, 0, 0);
```

鼠标悬停在VScode的颜色上会出现颜色选择器，可以手动调节颜色

color属性值的写法：

> 预定义的颜色值(直接是单词)
> 
> [最常用] 十六进制形式
> 
> RGB 方式

十六进制形式表示颜色，如果两两相同，就可以用一个来表示

#ff00ff => #f0f

但是我又不是学美术的

我也不学化妆

感觉那个红玫瑰和酒红色都挺好看的

#### 文本对齐

可以控制文字水平方向的对齐，还可以控制图片元素的居中和靠右捏

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style>
    div {
        font-family: '宋体';
        font-size: 80px;
        font-weight: bold;
        text-align: center;
    }
</style>
</head>
<body>
    <div>
        如果没有爱的话这一生太长了
    </div>
</body>
</html>
```

> center: 居中对齐
> 
> left: 左对齐
> 
> right: 右对齐

没什么要介绍的，把之前的好好学就会用了

#### 文本装饰

```css
text-decoration: [值];
```

常用取值：

> underline 下划线. [常用]
> 
> none 啥都没有. 可以给 a 标签去掉下划线.
> 
> overline 上划线. [不常用]
> 
> line-through 删除线 [不常用]

#### 文本缩进

控制段落的首行缩进（其他行不影响）

```css
text-indent: [值];
```

> 单位可以用px或者em
> 
> 使用em作为单位更好，1个em就是当前元素的文字大小
> 
> 缩进可以是负的，表示会往左缩进（有可能导致文字冒出去）

#### 行高

行高值得是上下文本行的基线距离

HTML中展示文字涉及到这几个基准线

> 顶线
> 
> 中线
> 
> 基线 (相当于英语四线格的倒数第二条线)
> 
> 底线

内容区：底线和顶线包裹的区域（灰色的这部分）


基线之间的距离=顶线间距=底线间距=中线间距

```css
line-height: [值];
```

行高=上边距+下边距+字体大小

上下边距是相等的

行高也可以取normal等，取决于浏览器的实现，chrome上normal为21px

行高等于元素高度就可以实现文字居中对齐

​
