---
title: CSS动画
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/692fa61f7313ea6c25102f0f.jpg
tags: CSS
categories: 前端
---

### CSS3 2D转换

转换是CSS3中具有颠覆性的特征之一，可以实现元素的位移，旋转，缩放等效果

转换可以理解为变形：**缩放、旋转、移动**

#### 移动

2D移动数2D这个样哑巴中的一种功能，可以改变元素在页面中的位置，类似于定位

语法是这样：

```css
transform:translate(x,y);
transform:translateX(n);
transform:translateY(n);
```

```css
div{
    width: 200px;
    height: 200px;
    background-color: pink;
    transform: translate(100px,100px);
}
```

**​ translate**最大的优点是**不会影响到其他元素的位置**

translate的百分比单位是相对于自身元素的translate

我们可以用这个特点实现子盒子在父盒子的中央位置

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>天菜</title>
    <style>
        div{
            position: relative;
            width: 500px;
            height: 500px;
            background-color: pink;
        }
        p{
            position: absolute;
            top:50%;
            left: 50%;;
            width: 200px;
            height: 200px;
            background-color:aqua;
            transform: translate(-50%,-50%);
        }
    </style>
</head>
<body>
    <div>
        <p></p>
    </div>
</body>
</html>
```

对行内标签是没有效果的

#### 旋转

旋转是指元素在二维平面内顺时针或者逆时针旋转

这是基本的语法：

```css
transform:rotate(度数)
```

rotate里面跟度数，单位是deg，比如rotate(45deg)

角度为正的时候，顺时针

负的时候是逆时针

默认的旋转的中心点是元素的中心点

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
        }
        div img{
            width: 100%;
            height: 100%;
            border-radius: 50px;
        }
        div:hover img{
            transform: rotate(360deg);
            transition: all 0.7s;
        }
    </style>
</head>
<body>
    <div>
        <img src="./1714915128_new_IMG-20240503-WA0094.jpg" alt="">
    </div>
</body>
</html>
```

真是盖了帽了

旋转可以给我们做出三角形

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            position: relative;
            width: 249px;
            height: 35px;
            border: 1px solid red;
        }
        div::after{
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 15px;
            height: 15px;
            border-right: 1px solid skyblue;
            border-bottom: 1px solid seagreen;
            transform: rotate(45deg);
        }
    </style>
</head>
<body>
    <div>

    </div>
</body>
</html>
```

三角和旋转配合起来就可以有动画的效果

我们可以设置我们元素转换的中心点：transform-origin

```css
transform-origin: x y;
```

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            overflow: hidden;
            width: 200px;
            height: 200px;
            border: 1px solid palegreen;
            margin: 100px auto;
        }
        div::before{
            content: "喜欢";
            display: block;
            width: 100%;
            height: 100%;
            background-color: hotpink;
            transform: rotate(180deg);
            transform-origin: left bottom;
            transition: all 0.4s;
        }
        div:hover::before{
            transform: rotate(0deg);
        }
    </style>
</head>
<body>
    <div></div>
</body>
</html>
```

旋转效果可爱捏

#### 缩放

缩放的语法：

```css
transform: scale(x,y);
```

里面的数字如果不跟单位的话就是倍数的意思

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
            height: 200px;
            background-color: pink;
            margin: 100px auto;
        }
        div:hover{
            transform: scale(2,2);
        }
    </style>
</head>
<body>
    <div></div>
</body>
</html>
```

scale缩放最大的优势：可以设置转换中心点缩放，默认以中心点缩放，而且不影响其他盒子

#### 分页按钮

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        li{
            float: left;
            width: 30px;
            height: 30px;
            border: 1px solid pink;
            margin: 10px;
            text-align: center;
            line-height: 30px;
            list-style: none;
            border-radius: 7px;
            transition: all 0.4s;
        }
        li:hover{
            transform: scale(1.2);
        }
    </style>
</head>
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
    </ul>
</body>
</html>
```

2D转换有综合的写法，是同时使用多个转换，空格隔开即可

顺序会影响转换的效果

当我们同时拥有位移和其他属性的时候，记得要将位移放到最前面

### CSS3 动画

动画是CSS3中具有颠覆性的特征之一，可以通过多个结点控制一个或一组动画，常用来实现复杂的动画效果

动画可以实现更多的变化，控制，连续自动播放等效果

先定义再调用

```css
@keyframes 动画名称{
     0%{
           width:100px;
      }
      100%{
            width:200px;
        }
}
```

这是定义动画

这是使用动画：

```css
div{
    height: 300px;
    width: 300px;
    border-color: aqua;
    animation-name: move;
    animation-duration: 5s;
}
```

动画可以实现很多效果

动画可以改变任意多的样式任意多的次数

可以用百分比规定变化发生的时间，或者用关键词from to，等同于0和100

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @keyframes move{
            0%{
                transform: translate(0px);
            }
            25%{
                transform: translate(1000px,0);
            }
            50%{
                transform: translate(1000px,500px);
            }
            75%{
                transform: translate(0,500px);   
            }
            100%{
                transform: translate(0px);
            }
        }
        div img{
            height: 200px;
            width: 300px;
            background-color: aqua;
            animation-name: move;
            animation-duration: 3s;
        }
    </style>
</head>
<body>
    <div>
        <img src="./pp.jpg" alt="">
    </div>
</body>
</html>
```

还挺炫酷的

这是各种可以设置的属性
动画结束之后的状态是backwards

动画简写就是animation：动画名称，持续时间，运动曲线，何时开始，播放次数，是否反方向，动画起始或者结束的状态

我用动画做了537的发光眼：

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .map{
            position: relative;
            width: 550px;
            height: 550px;
            background-image: url(./537.jpg);
        }
        .city{
            position: absolute;
            top: 141px;
            right: 105px;
        }
        .dotted{
            width: 8px;
            height: 8px;
            background-color: rgb(0, 255, 76);
            border-radius: 50%;
        }
        .city div[class^="pulse"]
        {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 8px;
            height: 8px;
            box-shadow: 0 0 12px #5dfd00;
            border-radius: 50%;
            animation: pulse 1.2s linear infinite;
        }
        .map .city .pulse2{
            animation-delay: 0.4s;
        }
        .map .city .pulse3{
            animation-delay: 0.8s;
        }
        @keyframes pulse{
            0%{

            }
            70%{
                width: 40px;
                height: 40px;
                opacity: 1;
            }
            100%{
                width: 70px;
                height: 70px;
                opacity: 0;
            }
        }    
</style>
</head>
<body>
    <div class="map">
        <div class="city">
            <div class="dotted"></div>
            <div class="pulse1"></div>
            <div class="pulse2"></div>
            <div class="pulse3"></div>
        </div>
    </div>
</body>
</html>
```

然后关于速度曲线有细节，具体看这张表：

这个步长是一步一步走的

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            width: 0;
            height: 30px;
            background-color: pink;
            animation: w 4s steps(10) forwards;
        }

        @keyframes w{
            0%{
                width: 0;
            }
            100%{
                width: 200px;
            }
        }
    </style>
</head>
<body>
    <div></div>
</body>
</html>
```

我们可以拿这个实现打字效果

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            overflow: hidden;
            width: 0;
            height: 30px;
            white-space: nowrap;
            background-color: pink;
            animation: w 4s steps(11) forwards;
        }

        @keyframes w{
            0%{
                width: 0;
            }
            100%{
                width: 180px;
            }
        }
    </style>
</head>
<body>
    <div>西安邮电你是杀不死我的</div>
</body>
</html>
```

嘻嘻

我是不会放过你们的

给我等着吧

这个肉像是有蛆爬过去一样

西安邮电还在输出

而且我还吃了大半碗才发现这件事

#### 案例：奔跑的蓝色米老鼠

### CSS3 3D转换

我们的生活环境是3D的，照片就是3D物品在2D平面中呈现的例子

它近大远小

且物体后面遮挡不可见

我们3D转换所用到的三维坐标系是立体空间，是由三个轴共同组成的

#### 3D位移

这是语法：

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
            height: 200px;
            background-color: pink;
            /* transform: translateX(100px) translateY(100px) translateZ(100px); */
            transform: translate3d(100px,100px,100px);
        }
    </style>
</head>
<body>
    <div></div>
</body>
</html>
```

而xyz都是不能省略的，如果没有的话就写0

要在2D平面产生近大远小视觉立体的效果只是二维的

#### 透视

如果想要产生3D效果的话需要透视（3D投影在2D平面）

模拟人类的视觉位置，可以认为是只安排一只眼睛去看

透视我们也称之为视距，视距就是人的眼睛到屏幕的距离

距离视觉点近的电脑平面成像越大，越远的越小

透视的单位是像素


透视是写在被观察元素的父盒子上面的

d是视距，是一个距离人的眼睛到屏幕的距离

z是z轴，物体距离屏幕的距离，越大我们看到的物体就越大

#### 3D旋转

3D旋转可以让我们按照x轴y轴z轴或者自定义轴旋转

语法：

```css
transform: rotateX(45deg);
transform: rotateY(45deg);
transform: rotateZ(45deg);
transform: rotate3d(x,y,z,deg);
```

这前面三个分别是沿着x，y，z正方向旋转45deg，第四个是沿着自定义轴旋转，deg是角度

对于元素的旋转方向的判断，基于左手准则

左手手拇指指向x轴的正方向，其余手指的弯曲方向就是该元素沿着x轴旋转的方向

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            /* 透视写到被观察的元素的父盒子上面 */
            perspective: 500px;
        }
        div{
            width: 200px;
            height: 300px;
            background-color: pink;
            transform: translate3d(100px,100px,100px);
            transform: translateZ(-300px);
            transition: all 0.5s;
            margin: 0 auto;
        }
        div img{
            width: 100%;
            height: 100%;
        }
        div:hover
        {
            transform: rotateX(180deg);
        }
    </style>
</head>
<body>
    <div>
        <img src="./王振1.jpg" alt="">
    </div>
</body>
</html>
```

这是沿着不同轴转动能实现的效果

#### 3D呈现

3D呈现是transform-style

它控制子元素是否开启三维立体环境

transform-style:flat子元素不开启3d立体空间，默认的

transform-style:preserve-3d，子元素开启立体空间

代码写给父级，影响的是子盒子

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            perspective: 500px;
        }
        .box{
            position: relative;
            width: 200px;
            height: 200px;
            margin: 100px auto;
            transition: all 1.1s;
            transform-style: preserve-3d;
        }
        .box:hover{
            transform: rotateY(60deg);
        }
        .box div{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: aquamarine;
        }
        .box div:last-child{
            background-color: purple;
            transform: rotateX(60deg);
        }
    </style>
</head>
<body>
    <div class="box">
        <div></div>
        <div></div>
    </div>
</body>
</html>
```

这就可以实现3D的立体效果

##### 两面旋转盒

我们首先需要搭建html结构

box父盒子里面包含前后两个子盒子

box是反转的盒子，front是前面的盒子，back是后面的盒子

我们反转的是盒子

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            perspective: 350px;
        }
        .box{
            position: relative;
            width: 250px;
            height: 300px;
            margin: 100px auto;
            /* 让背面的盒子保存立体空间 */
            transition: all 3s;
            transform-style: preserve-3d;
            backface-visibility: hidden;
        }
        .front,
        .back{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
        .front{
            z-index: 1;
        }
        .back{
            transform: rotateY(180deg);
        }
        .box:hover{
            transform: rotateY(180deg);
        }
    </style>
</head>
<body>
    <div class="box">
        <img src="./见见的狗.jpg" alt="" class="front">
        <img src="./王振2.jpg" alt="" class="back">
    </div>
</body>
</html>
```

这是我们实现的代码

### 旋转木马案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            perspective: 800px;
        }
        @keyframes rotate{
            0%{
                transform: rotateY(0);

            }
            100%{
                transform: rotateY(360deg);
            }
        }
        section{
            position: relative;
            width: 400px;
            height: 400px;
            margin: 100px auto;
            transform-style: preserve-3d;
            animation: rotate 10s linear infinite;
            background: url(./王振1.jpg);
            background-size: cover;
        }
        section:hover{
            /* 鼠标放置暂停 */
            animation-play-state: paused;
        }
        section div{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: url(./见见的狗.jpg);
        }
        section div:nth-child(1){
            transform: translateZ(500px);
        }
        section div:nth-child(2){
            transform: rotateY(60deg) translateZ(500px);
        }
        section div:nth-child(3){
            transform: rotateY(120deg) translateZ(500px);
        }
        section div:nth-child(4){
            transform: rotateY(180deg) translateZ(500px);
        }
        section div:nth-child(5){
            transform: rotateY(240deg) translateZ(500px);
        }
        section div:nth-child(6){
            transform: rotateY(300deg) translateZ(500px);
        }
    </style>
</head>
<body>
    <section>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>
</body>
</html>
```

当然是要先旋转再移动啦

说实话这个看久了头都晕了

### 浏览器私有前缀

浏览器有私有前缀，是为了兼容老版本的写法，比较新版本的浏览器都无需添加

这就是主要的属性

​
