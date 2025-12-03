---
title: JS函数和对象
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/692fac5c7313ea6c25104a7d.jpg
tags: JS
categories: 前端
---

## 函数

### 为什么需要函数

函数是被设计为执行指定任务的代码块

函数可以把具有相同或者相似逻辑的代码包裹起来，通过函数调用执行这些被包裹的代码逻辑，这样的优势是有利于精简代码方便复用

### 函数传参

要把计算的数字传到函数内，可以提高灵活性

还是那句话，形参是实参的临时拷贝（真的吗）

形参可以看做是变量，如果一个变量不给值，默认是undefined，如果做用户不输入实参，则undefined+undefined的结果是NaN

如果用户不输入实参就可以给缺省值（形参默认值）

这个默认值只会在缺少实际参数传递的时候才会被执行，所以有参数会执行传递过来的实参，否则默认为undefined

### 函数返回值

有些函数不需要返回值，如果要返回那就用return

### 作用域

全局和局部

如果函数内部变量没声明直接赋值也当全局变量看（强烈不推荐）

函数内部的形参可以看做是局部变量（那看来和cpp差不多）

和cpp一样，先局部后全局

变量访问时采取就近原则的方式来查找变量最终的值

### 匿名函数

函数可以分为具名函数和匿名函数

没有名字的函数无法直接使用

使用方式是函数表达式

或者立即执行

函数表达式：将匿名函数赋值给一个变量，并且通过变量名进行调用，这个是函数表达式

匿名函数的使用场景是没有

但是先认识

## 对象

### 什么是对象

有点小逆天，进度居然这么快，让我有点季度

但是感觉没东西比cpp难学了

保存用户信息用之前学过的数据类型不方便

所以先描述再组织

就有对象了

对象是一种数据类型，无序数据的集合

可以详细的描述某个事物

### 对象使用

对象声明

{ }是对象字面量

对象有属性和方法组成

属性：信息或叫特征（名词）

方法： 功能或者行为（动词）

属性就是依附在对象上的变量，外面是变量，对象内是属性

想必你也发现增和改的语法一样，判断标准是对象有没有这个属性，没有就是新增，有就是改

方法

数据行为性的信息称为方法，比如跑步，唱歌等，一般是动词性的，本质为函数
方法是由方法名和函数名两部分构成，期间使用：分割

多个属性见使用，分割

方法是衣服在对象中的函数


### 遍历对象

我们目标是能够遍历输出对象里面的元素

遍历对象用的语句是for in

一般不用这种方式遍历数组，主要是用来遍历对象

for in语法中的k是一个遍历，在循环的过程中依次代表对象的属性名

由于k是变量，所以必须使用[ ]语法解析

k是获得对象的属性名

对象名[k]是获得属性值

遍历数组对象

我们要求根据以上的数据渲染生成表格

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table {
            width: 600px;
            text-align: center;
        }

        table,
        th,
        td {
            border: 1px solid #ccc;
            border-collapse: collapse;
        }

        caption {
            font-size: 18px;
            margin-bottom: 10px;
            font-weight: 700;
        }

        tr {
            height: 40px;
            cursor: pointer;
        }

        table tr:nth-child(1) {
            background-color: #ddd;
        }

        table tr:not(:first-child):hover {
            /* 这个的意思是除了第一行 */
            background-color: #eee;
        }
    </style>
</head>

<body>
    <h2>学生信息</h2>
    <p>将数据渲染到页面中...</p>

    <table>
        <caption>学生列表</caption>
        <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
            <th>家乡</th>
        </tr>
        <script>
 let students=[
        {name:'励志轩',age:18,gender:'女',hometown:'通辽'},
        {name:'荷叶饭',age:18,gender:'女',hometown:'通辽'},
        {name:'尹君墨',age:18,gender:'女',hometown:'通辽'},
        {name:'燃柒吖',age:18,gender:'女',hometown:'通辽'}
    ]
    for(let i=0;i<students.length;i++){
        document.write(`
            <tr>
            <td>${i+1}</td>
            <td>${students[i].name}</td>
            <td>${students[i].age}</td>
            <td>${students[i].gender}</td>
            <td>${students[i].hometown}</td>
        </tr>
        `)
    }
        </script>
    </table>

</body>

</html>
```

### 内置对象

我们要学会调用JS为我们准备好的内置对象

内置对象是什么

JS内部提供的对象包含各种属性和方法给开发者调用（STL）

内置对象math

math对象是JS提供的数学对象，提供了一系列做数学运算的方法

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
        let arr = ['赵云', '黄忠', '关羽', '张飞', '马超', '刘备', '曹操'] 
        let num = Math.floor(Math.random()*7)
        document.write(arr[num])
    </script>
</body>
</html>
```

加一行：arr.splice(num,1)

生成随机颜色

①：如果参数传递的是true或者无参数，则输出 一个随机十六进制的颜色

②：如果参数传递的是false，则输出 一个随机rgb的颜色

③：格式： function getRandomColor(flag){

}

console.log(getRandomColor(true)) //#ffffff

console.log(getRandomColor(false)) //rgb(255,255,255)

> 分析：
> 
> 提示： 16进制颜色格式为:  ‘#ffffff’   其中f可以是任意 0-f之间的字符
> 
> 提示:   rgb颜色格式为:  ‘rgb(255,255,255) ’  其中255可以是任意0-255之间的数字

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
        let arr1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
        let num1 = prompt('请输入true(十六进制)或者false(rgb颜色)')
        function color(num){
        if(num == 'false')
    {
        s='rgb('
        for(i=0;i<3;i++){
        f=Math.floor(Math.random()*256)
        s=s+f.toString()+','
        }
        s=s.slice(0,-1);
        s+=')'
        return s
    }
    else{
        s='#'
        for(i= 0 ;i<6;i++)
    {
        f=Math.floor(Math.random()*16)
        s+=arr1[f]
    }
        return s 
    }
}
    background=color(num1)
    document.write(background)
    </script>
</body>
</html>
```

## 综合案例

学成在线的页面渲染案例

我们的需求是根据数据渲染列表页面

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>学车在线首页</title>
    <link rel="stylesheet" href="./style.css">
    <style>

    </style>
</head>

<body>

    <!-- 4. box核心内容区域开始 -->
    <div class="box w">
        <div class="box-hd">
            <h3>精品推荐</h3>
            <a href="#">查看全部</a>
        </div>
        <div class="box-bd">
            <ul class="clearfix">
                <script>
                    let data = [
                        {
                            src: './course01.png',
                            title: 'Think PHP 5.0 博客系统实战项目演练',
                            num: 1125
                        },
                        {
                            src: './course02.png',
                            title: 'Android 网络动态图片加载实战',
                            num: 357
                        },
                        {
                            src: './course03.png',
                            title: 'Angular2 大前端商城实战项目演练',
                            num: 22250
                        },
                        {
                            src: './course04.png',
                            title: 'Android APP 实战项目演练',
                            num: 389
                        },
                        {
                            src: './course05.png',
                            title: 'UGUI 源码深度分析案例',
                            num: 124
                        },
                        {
                            src: './course06.png',
                            title: 'Kami2首页界面切换效果实战演练',
                            num: 432
                        },
                        {
                            src: './course07.png',
                            title: 'UNITY 从入门到精通实战案例',
                            num: 888
                        },
                        {
                            src: './course08.png',
                            title: 'Cocos 深度学习你不会错过的实战',
                            num: 590
                        },
                    ]
                    for (let i = 0; i < data.length; i++) {
                        document.write(`
                    <li>
                    <a href="#">
                        <img src="${data[i].src}" alt="">
                        <h4>
                            ${data[i].title}
                        </h4>
                        <div class="info">
                            <span>高级</span> • <span>${data[i].num}</span>人在学习
                        </div>
                    </a>
                    </li>
                        `)
                    }
                </script>
            </ul>
        </div>
    </div>

</body>

</html>
```


## 综合案例

要求是用户输入秒数就可以自动转换成时分秒

怎么补零？

可以用三目操作符试试：

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
        let seconds = +prompt('请输入秒数')
        seconds = parseInt(seconds);
        if (isNaN(seconds)) {
            console.log('请输入有效的数字秒数');
        }
        else {
            function time(s1) {
                let h = parseInt(s1 / 60 / 60 % 24)
                let m = parseInt(s1 / 60 % 60)
                let s = parseInt(s1 % 60)
                h = h < 150 ? '0' + h : h
                m = m < 10 ? '0' + m : m
                s = s < 10 ? '0' + s : s
                let res = h.toString() + '时' + m.toString() + '分' + s.toString() + '秒'
                return res
            }
        }
        let result = time(seconds)
        console.log(result)
    </script>
</body>

</html>
```
没错，世界如此简单

#### 逻辑中断

逻辑中断？

这是类似于给缺省值

很常用

#### 逻辑短路

如果都是真，那&&输出最后一个真，||输出第一个真

### 综合案例

输入四个季度的数据，可以生成柱形图

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        .box {
            display: flex;
            width: 700px;
            height: 300px;
            border-left: 1px solid pink;
            border-bottom: 1px solid pink;
            margin: 50px auto;
            justify-content: space-around;
            align-items: flex-end;
            text-align: center;
        }
        .box>div {
            display: flex;
            width: 50px;
            background-color: pink;
            flex-direction: column;
            justify-content: space-between;
        }
        .box div span {

            margin-top: -20px;
        }
        .box div h4 {
            margin-bottom: -35px;
            width: 70px;
            margin-left: -10px;
        }
    </style>
</head>
<body>
    <script>
        let arr = []
        for (let i = 1; i <= 4; i++) {
            arr.push(prompt(`请输入第${i}季度的数据`))
        }
        document.write(`<div class="box">`)
        for (let i = 0; i < arr.length; i++) {
            document.write(`
                <div style="height: ${arr[i]}px;" >
                <span>${arr[i]}</span>
                <h4>第${i+1}季度</h4>
                </div>
            `)
        }
        document.write(`</div>`)
    </script>
    </div>
</body>
</html>
```

孩子们这就是渲染

### 排序相关

然后我们用JS来实现一下冒泡排序

我不，凭什么

直接有排序的写法

和C中的qsort差不多，写个比较函数

​
