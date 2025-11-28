---
title: CSS背景和圆角边框
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/692962e87f8e1c737822df25.jpg
tags: CSS
categories: 前端
---

### 背景属性

#### 背景颜色

背景颜色这样设置：

```css
background-color: [指定颜色]
```

默认是透明的（transparent），可以通过设置颜色的方式修改

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1 {
            text-indent: 2em;
            color: azure;
        }
        body{
            background-color: black;
        }
    </style>
</head>
<body>
    <h1>秽土转生</h1>
</body>
</html>
```


#### 背景图片

背景图片就更好设置了：

```css
background-image: url(...);
```

那有人就要问了

这和image有什么区别？

问得好，比image更方便控制位置（图片在盒子中的位置）

> tips：
> 
> 1. url 不要遗漏
> 2. url 可以是绝对路径, 也可以是相对路径
> 3. url 上可以加引号, 也可以不加

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        p{
            background-image: url(微信图片_20240126210846.jpg);
        }
    </style>
</head>
<body>
    <p>秽土转生</p>
</body>
</html>
```

#### 背景平铺

```css
background-repeat: [平铺方式]
```

我们可以给背景加颜色

这是一些可取的值：

> repeat: 平铺
> 
> no-repeat: 不平铺
> 
> repeat-x: 水平平铺
> 
> repeat-y: 垂直平铺

小的图比较明显

默认是repeat，背景颜色和背景颜色可以同时出现 ，背景图片在背景色上面

#### 背景位置

可以给背景设置位置：

```css
background-position: x y;
```

参数有三种风格：

> 1. 方位名词: (top, left, right, bottom)
> 2. 精确单位: 坐标或者百分比(以左上角为原点)
> 3. 混合单位: 同时包含方位名词和精确单位

tips：

> 如果参数的两个值都是方位名词, 则前后顺序无关. (top left 和 left top 等效)
> 
> 如果只指定了一个方位名词, 则第二个默认居中. (left 则意味着水平居中, top 意味着垂直居中. )
> 
> 如果参数是精确值, 则的的第一个肯定是 x , 第二个肯定是 y. (100 200 意味着 x 为 100, y 为 200)
> 
> 如果参数是精确值, 且只给了一个数值, 则该数值一定是 x 坐标, 另一个默认垂直居中
> 
> 如果参数是混合单位, 则第一个值一定为 x, 第二个值为 y 坐标. (100 center 表示横坐标为 100, 垂 直居中)

梦回当年里牛渴死设计的时候，进程线程管道通信，你发它不收，谁阻塞谁轮询谁等待

#### 背景尺寸

没错可设置背景尺寸：

```css
background-size: length|percentage|cover|contain;
```

可以填具体的数值，如 40px 60px 表示宽度为 40px, 高度为 60px

可填百分比：按照父元素的尺寸设置

cover：把背景图像扩展到足够大，以使背景图完全覆盖背景区域（但是背景图像的某些部分也许没办法显示在背景定位区域中）

contain：把图像图像扩展成最大尺寸，以致宽度和高度完全适应内容区域

### 圆角矩形

可以通过border-radius使边框带圆角效果

#### 基本用法

就是想要让尖角变圆滑这样就好看了

比如小智桌面，比如纸鹿学长的网站

圆圆的就是很好看，加上毛玻璃就会变高级。。。

length是内切圆半径，数值越大，弧线越强烈


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
        height: 300px;

        background-image: url(微信图片_20240126210846.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border: 2px solid green;
        border-radius: 10px;
    }
    </style>
</head>
<body>
    <div>秽土转生</div>
</body>
</html>
```

#### 生成圆形

让border-radius的值为正方形宽度的一半即可：

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

        background-image: url(微信图片_20240126210846.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border: 2px solid green;
        border-radius: 250px;
    }
    </style>
</head>
<body>
    <div>秽土转生</div>
</body>
</html>
```

也可以不写数值，直接用50%来表示

#### 生成圆角矩形

生成圆角矩形捏就是让border-radius的值为矩形高度的一半：

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
        height: 500px;

        background-image: url(微信图片_20240126210846.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border: 2px solid green;
        border-radius: 250px;
    }
    </style>
</head>
<body>
    <div>秽土转生</div>
</body>
</html>
```

像个蹲便

#### 展开写法

border-radius是一个复合写法，可以针对四个角分别设置

```css
border-radius:2em;

border-top-left-radius:2em;
border-top-right-radius:2em;
border-bottom-right-radius:2em;
border-bottom-left-radius:2em;
```

这两种写法是等价的

```css
border-radius: 10px 20px 30px 40px;
 
border-top-left-radius:10px;
border-top-right-radius:20px;
border-bottom-right-radius:30px;
border-bottom-left-radius:40px;
```

这也等价（按照顺时针排列）