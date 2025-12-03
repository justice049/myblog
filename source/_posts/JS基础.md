---
title: JS基础
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/692fa6237313ea6c25102f14.jpg
tags: JS
categories: 前端
---


​**JS是什么？**

是一种运行在客户端（浏览器）的编程语言，实现人机交互效果

**作用捏？**

网页特效 (监听用户的一些行为让网页作出对应的反馈)

表单验证 (针对表单数据的合法性进行判断)

数据交互 (获取后台的数据, 渲染到前端)

服务端编程 (node.js)

前端有自己的后端语言：node.js

ECMAScript:

规定了js基础语法核心知识

比如：变量、分支语句、循环语句、对象等等

Web APIs :

DOM 操作文档，比如对页面元素进行移动、大小、添加删除等操作

BOM 操作浏览器，比如页面弹窗，检测窗口宽度、存储数据到浏览器等等

我们查询资料可以直接去一个权威的网站查：

[JavaScript | MDN**JavaScript（JS）是一种具有函数优先特性的轻量级、解释型或者说即时编译型的编程语言。虽然作为 Web 页面中的脚本语言被人所熟知，但是它也被用到了很多非浏览器环境中，例如 Node.js、Apache CouchDB、Adobe Acrobat 等。进一步说，JavaScript 是一种基于原型、多范式、单线程的动态语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。**https://developer.mozilla.org/zh-CN/docs/Web/JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript "JavaScript | MDN")

## JS介绍

### JS书写位置

JS书写的位置可以在行内，内部和外部的

#### 行内书写

在行内书写就是在body里面

然后使用script标签包住

alert是页面弹出警示框的意思

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 内部js -->
    <script>
        // 页面弹出警示框
        alert('你好，js')
    </script>
</body>
</html>
```

我们将`<script>`放在HTML文件的底部附近的原因是浏览器会按照代码在文件中的顺序加载 HTML。

如果先加载的 JavaScript 期望修改其下方的 HTML，那么它可能由于 HTML 尚未被加载而失效。 因此，将 JavaScript 代码放在 HTML页面的底部附近通常是最好的策略。

#### 外部书写

那么外部书写JS怎么写呢？

将代码写在以js结尾的文件里

通过script标签引入到html页面中

> tips：
> 
> 1. script标签中间无需写代码，否则会被忽略！
> 2. 外部JavaScript会使代码更加有序，更易于复用，且没有了脚本的混合，HTML 也会更加易读，因此这是个好的习惯。

这是把代码写在以.js结尾的文件里

通过script标签引入到html页面中

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 内部js -->
   <script src="./my.js"></script>
</body>
</html>
```

#### 内联JS

代码是写在标签内部的

注意：此处作为了解即可，但是后面的vue框架会使用这样的模式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="alert('我必须要离开西安邮电')"></button>
</body>
</html>
```

### JS注释

我们目标是会使用两种JS的注释方法

单行注释就是//

多行就是/\* \*/（快捷键：Shift+Alt+A）

### JS的结束符

和C一样用;

实际情况中可以不写

可以自动推断语句 的结合素为孩子

所以为了风格的统一要么都写要么都不写

### 输入输出语法

输出和输入也可理解为人和计算机的交互，用户通过键盘、鼠标等向计算机输入信息，计算机处理后再展示结果给用 户，这便是一次输入和输出的过程

输出语法1：

```javascript
document.write('我必须要离开西安邮电')
```

它的作用是向body输出内容

tips：如果输出的内容写的是标签，那么他也会被解析成网页元素

语法2：

```javascript
alert('西安邮电有杀人指标')
```

这是页面弹出警告对话框

语法3：

```javascript
console.log('西安邮电你给我等着')
```

这是控制台输出语法，程序员调试使用

输入的语法：

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        prompt('请输入你觉得最差的大学')
    </script>
</body>
</html>
```

作用是显示一个对话框，对话框中包含一条文字信息，用于提示用户输入文字

alert() 和 prompt() 它们会跳过页面渲染先被执行

### 字面量

什么是字面量？

字面量是在计算机中描述事/物

比如：

我们工资是：1000 此时1000就是数字字面量

'呆猫小伙'这是字符串字面常量

还有[]数组字面量和{}对象字面量

## 变量

### 变量是什么

用户输入的数据存储就是用变量

变量是计算机存储数据的容器
变量不是数据本身，它们仅仅是一个用于存储数值的容器。可以理解为是一个个用来装东西的纸箱子。

### 变量基本使用

声明和赋值

声明变量语法：

```javascript
let 变量名
```

let 即关键字 (let: 允许、许可、让、要)，所谓关键字是系统提供的专门用来声明（定义）变量的词语

赋值语法：

```javascript
<script>
        let a;
        a = 18;
        alert(a)
</script>
```

感觉和Python好像啊

let不允许多次声明一个变量

声明多个变量的时候中间用，隔开（可读性差，建议分开声明）

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        prompt('请输入内容')
        let uname = prompt('请输入内容')
        document.write(uname)
    </script>
</body>
</html>
```

### 变量的本质

变量的本质就是程序在内存中申请的一块存放数据的小空间

内存：计算机中存储数据的地方，相当于一个空间

### 变量命名规则与规范

变量命名需要规范

**规则：必须遵守，不遵守报错 (法律层面)**

**规范：建议，不遵守不会报错，但不符合业内通识 （道德层面）**

1.规则：

不能用关键字

只能用下划线，字母，数字，\$组成，且数字不能开头

字母严格区分大小写

2.规范:

起名一定有意义

遵循小驼峰命名法

在较旧的JS中使用var来声明变量，而不是let

### var与let

let 为了解决 var 的一些问题

> var 声明:
> 
> 可以先使用 在声明 (不合理)
> 
> var 声明过的变量可以重复声明(不合理)
> 
> 比如变量提升、全局变量、没有块级作用域等

### 数组

数组的语法是这样的：

```javascript
let arr = []
```

arr是变量，[ ]是数组字面量

这是具体的声明语法：

```javascript
let arr = ['数电','嵌入式','通原','电磁场']
```

数组是按照顺序保存的，所以每个数据都有自己的编号

数组下标，和C一样

数组可以保存多个数据

## 常量

### 基本使用

使用const声明的变量称为常量

当某个变量永远不会改变的时候，就可以使用const声明

命名规范和变量一致

```javascript
const G = 9.8
```

tips：不需要重新赋值的数据使用const，常量不允许重新赋值，声明的时候必须要赋值（初始化）

## 数据类型

JS的数据类型分为两大类：

基本数据类型和引用数据类型

### 数字类型 （number）

数字类型就是我们学习中学到的数字，可以是整数小数负数整数

都成为数据类型

JS是弱数据类型，变量到底属于哪种类型只有赋值之后才可以确认

Java是强数据类型

数字可以有很多操作，这是算术运算符，不做赘述

算术运算符有不同的优先级

优先级越高越先执行，优先级相同时从左向右执行

NaN代表一个计算错误，是一个不正确的或者一个未定义的数学操作所得到的结果

NaN是粘性的，任何对NaN的操作都会返回NaN

### 字符串类型（string）

通过单引号或者双引号或者反引号包裹的数据都叫字符串

没有本质的区别，推荐单引号

必须成对使用，可以嵌套，但是不能自己嵌套自己

必要的时候可以使用转义字符\\输出单引号或者双引号

```javascript
let cjn1 = '小爷我就是'
let cjn2 = '陈俊男'
document.write(cjn1 + cjn2)
```

字符串拼接的时候用+即可

模板字符串，这是使用反引号（\` \`）当内容拼接变量的时候用\${ }包住变量

```javascript
let name = '陈俊男'
document.write(`小爷我就是${name}`)
```

模板字符串可以让我们拼接的更简便

### 布尔类型（boolean）

表示肯定或者否定的时候在计算机中对应的是布尔类型数据

有两个固定的值true和false，肯定的数据用true，表示否定的数据使用false

没什么好说的

### 未定义类型（undefined）

未定义是比较特殊的类型，只有一个值undefined

只声明变量在不赋值的情况下变量的默认值就是undefined，一般很少直接赋值成这个

我们开发的时候经常声明一个变量，等待传输过来的数据

如果我们不知道是否传递过来，就可以检测是不是undefined判断用户是否传数据过来了

### 空类型（null）

JS的null仅仅是一个无、空或者值未知的特殊值

**null和undefined区别**

undefined 表示没有赋值

null 表示赋值了，但是内容为空

官方解释是把null作为尚未创建的对象

将来有变量里面存放的是一个对象，但是对象还没创建好，可以先给个null

### 检测数据类型

控制台语句常用于测试结果来使用

数字型和布尔类型为蓝色，字符串和undefined颜色为灰色

```javascript
let age = 18
let uname = '陈俊男'
let flag = false
let buy
console.log(age)
console.log(uname)
console.log(flag)
console.log(buy)
```

我们可以通过typeof关键字检测数据类型

typeof运算符可以返回被检测的数据类型，支持两种语法格式

1.作为运算符：typeof x，这是常用的写法

2.函数形式typeof（x）

有括号和没有括号得到的结果是一样的，所以常用的写法是运算符（少写一点是一点）

## 类型转换

### 为什么要类型转换

JS是弱数据类型，有个坑是使用表单，prompt获取过来的数据默认是字符串类型的，此时不能够直接简单的进行加法运算

此时就需要类型转换

### 隐式转换

当某些运算符被执行的时候，就会自动将一些数据类型进行转换，这种就是隐式转换

寄巧：

+号作为正号解析可以转换成数字型

任何数据和字符串想旧爱的结果都是字符串

### 显式转换

编写程序时过度依靠系统内部的隐式转换是不严禁的，因为隐式转换规律并不清晰，大多是靠经验总结的规律。 为了避免因隐式转换带来的问题，通常根逻辑需要对数据进行显示转换

#### **Number(数据)**

它可以转换成为数字类型

如果字符串内容里面有非数字，**转换失败的时候结果是NaN**

NaN也是number类型的数据，代表非数字

**parseInt(数据)**

只保留整数

**parseFloat(数据)**

可以保留小数

#### String(数据)

还可以通过变量.toString(进制)


### 运算符

#### 赋值运算符

赋值运算符

这些运算符可以在对变量赋值时快速操作

很简单不说了

#### 比较运算符

很简单，如他所说，判断相等可以试试===

有几种特殊情况需要注意一下：

NaN不等于任何值包括本身，都是false

尽量不要比较小数因为有精度问题（Python也有这样的问题）

#### 逻辑运算符

和之前学的一样，不说了

#### 运算符优先级

一元运算符里面的逻辑非优先级很高

逻辑与比逻辑或优先级高

```javascript
let a = 3 > 5 && 2 < 7 && 3 == 4
console.log(a);
let b = 3 <= 4 || 3 > 1 || 3 != 2
console.log(b);
let c = 2 === "2"
console.log(c);
let d = !c || b && a
console.log(d);
```

### 语句

#### 表达式和语句

表达式是可以被求值的代码

语句是一段可以执行的代码

话虽然是这么说。。。

但是这让我突然想到了C和cpp中的各种函数

#### 分支语句

程序三大控制流程语句：

分支语句包含If分支，三元运算符，Switch语句

if语句有三种使用：单分支，双分支，多分支

三元运算符
Switch语句

#### 循环语句

让我们学学JS的调试吧，只需要点一下

致敬gdb

##### 删

可以通过pop删除最后一个元素并返回值
有头删有尾删还有从任意位置删

如果只写一个参数，就是从那个参数开始删，删到最后

让我们讲个栗子方便使用吧：

随机抽奖

中奖的用户就要从数组里面删除，不允许重复抽奖

点击删除按钮就会删除

改查都讲过了，不赘述

## 实战案例

用户的订单案例

需求：用户输入商品价格和商品数量，以及收获地址可以自动发音订单信息

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h2 {
            margin: 0 auto;
        }

        table {
            border-collapse: collapse;
        }

        table,
        th,
        td {
            border: 1px solid #000;
        }
    </style>
</head>

<body>
    <h2>订单确认</h2>
    <script>
        let price = +prompt('请输入商品价格')
        let num = +prompt('请输入商品数量')
        let place = prompt('请输入收获地址')
        total = price * num
        document.write(`
         <table>
        <tr>
            <th>商品名称</th>
            <th>商品价格</th>
            <th>商品数量</th>
            <th>总价</th>
            <th>收获地址</th>
        </tr>
        <tr>
            <td>小米青春版plus</td>
            <td>${price}</td>
            <td>${num}</td>
            <td>${total}元</td>
            <td>${place}</td>
        </tr>
    </table>
        `)
    </script>
</body>
</html>
```

​
