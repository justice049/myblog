---
title: JS数组挖掘
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/692fde3b4c455cbabc958b53.gif
tags: JS
categories: 前端
---

### 数组引用类型分析

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
        let array = [1,2,3,4]
        let hd = array
        hd[1]="houdunren.com"
        console.log(array)
        console.log(hd)
    </script>
</body>
</html>
```

这就是我们的羁绊！

### 多维数组操作

可以在数组中定义多个值，然后这样进行访问：

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
        //首先可以这样
        let array = [["houdunren","nihaome"],["xiangjun","cms"]]
        console.log(array[1][1])
        let lessons = [{name:"php",click:33},{name:"js",click:88}]
        console.log(lessons[1].name)
    </script>
</body>
</html>
```

### Array.of与数组创建细节

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
        let hd= ["hdcms"]
        hd[3]="houdunren"
        console.log(hd.length)
        console.log(hd[2])
        console.log(hd)
    </script>
</body>
</html>
```
### 类型检测与转换

把数组转换成字符串会更方便传递

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>hdcms</div>
    <div>hdcms</div>
    <script>
        let divs = document.querySelectorAll("div")
        console.log(
            Array.from(divs, function (item) {
                item.style.backgroundColor = "red"
            })
        )
    </script>
</body>

</html>
```

### 展开语法真的好用啊

接下来我们看看展开语法

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
        let arr = ["hdcms", "houdunren"]
        let hd = ["js", "css"]
        arr = [...arr, ...hd]
        console.log(arr)
        // for (const value of hd) {
        //     arr.push(value)
        // }
        // console.log(arr)
    </script>
</body>

</html>
```

使用展开语法也可以更快捷的计算和

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
        let arr = ["hdcms","houdunren"]
        let hd = ["js","css"]
        function sum(...args){
            return args.reduce((s,v)=>{
                return (s+=v)
            },0)
        }
        console.log(sum(1,2,34,54,5))
    </script>
</body>
</html>
```

### 点语法操作DOM节点元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" width="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
       .hide{
            display: none;
        }
    </style>
</head>
<body>
    <div>houdunren.com</div>
    <div>hdcms.com</div>
    <script>
        const div = document.querySelectorAll('div');
        // 使用 forEach 替代 map 方法
        [...div].forEach(function(item){
            item.addEventListener("click", function(){
                this.classList.toggle("hide");
            });
        });
    </script>
</body>
</html>
```

点击就会消除的魔法

### 使用解构赋值提高效率

解构可以简单理解为把数组里面的值批量赋值给变量

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
        let arr = ["houdunren",2010,"houdunren.com"]
        let [name,...args] = arr
    </script>
</body>
</html>
```

### 添加元素的多种操作技巧

可以使用...也可以使用push方法追加元素，一般来说是更加推荐用push方法的，举个例子：

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
        function rangeArray(begin,end){
            const array = []
            for(let i = begin ;i<=end;i++)
        {
            array.push(i)
        }
        return array
        }
        console.table(rangeArray(11,15))
    </script>
</body>
</html>
```

### 数据出栈与入栈及填充操作

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
        console.log(Array(5).fill("houdunren"))
        console.log([1,2,3,4].fill("houdunren",1,3))
    </script>
</body>
</html>
```

出入栈已经很熟悉了，主要 是看看填充操作

### splice与slice实现数组的增删改查

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
        let arr = [1,2,3,4,5]
        let hd= arr.slice(1,3)      //从哪开始截取，截到哪里
        console.log(hd)
    </script>
</body>
</html>
```

像这样使用splice

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
        let arr = [1,2,3,4,5]
        arr.splice(1,1,"后盾人","hdcms","houdunren")
        console.log(arr)
    </script>
</body>
</html>
```

### 数组移动函数实例

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
        function move(array,from,to){
            if(from<0 || to>=array.length)
            {
                console.log("参数错误")
                return
            }
            const newArray = [...array]
            let item = newArray.splice(from,1)
            console.log(...item)
            newArray.splice(to,0,item[0])
            return newArray
        }
        let arr = [1,2,3,4,5]
        console.table(move(arr,1,3))
    </script>
</body>
</html>
```

清空数组的多种处理方式

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
        let hd = [1,2,3,4,5]
        hd = []                 //推荐,清空是产生一块新空间
        hd.length = 0           //推荐，引用同一块地址
        hd.splice(0,hd.length)
        while(hd.pop()){}
    </script>
</body>
</html>
```

### 数组的拆分与合并操作

拆分：split，合并：join，...语法，concat

介绍一下copyWithin的使用

查找元素基本使用

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
        let arr = [1,2,3,4]
        console.log(arr.indexOf(-4))    //这种查找是严格类型匹配
        console.log(arr.includes(2))    //返回的是真假
        console.log(arr.lastIndexOf(2,-3))  //从后往前查找
    </script>
</body>
</html>
```

### includes方法原理实现

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
        let arr = [1, 2, 3, 4, 5]
        function includes(array, value) {
            for (const find of array) {
                if (find == value) {
                    return true
                }
            }
            return false
        }
        console.log(includes(arr, 3))
    </script>
</body>

</html>
```

### 高效的find与findIndex新增方法

find方法也可以帮助我们查找，它返回的就是值（不是索引）

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
        let arr = [1,2,3,4,5]
        console.log(arr.find(function(item){
            return item == 2
        }))
    </script>
</body>
</html>
```

对于引用类型的查找，includes会有些问题（因为进行的是地址之间的比较），使用find比较合适：

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
        let lessons = [{ name: "js" }, { name: "css" }, { name: "mysql" }]
        // console.log(lessons.includes({name:"css"}))   //找不到
        console.log(lessons.find(function (item) {
            return item.name == 'css'
        }))
    </script>
</body>
</html>
```

如果只想知道所在位置就用findIndex：

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
        let lessons = [{ name: "js" }, { name: "css" }, { name: "mysql" }]
        // console.log(lessons.includes({name:"css"}))   //找不到
        console.log(lessons.findIndex(function (item) {
            return item.name == 'css'
        }))
    </script>
</body>
</html>
```

### 自定义find原型方法实现

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
        function find(array,callback){
            for(const value of array){
                if(callback == value)
            {
                return value
            }
            }
            return undefined
        }
        let arr = [1,2,3,4,5]
        console.log(find(arr,2))
    </script>
</body>
</html>
```

还可以使用原型链进行查找

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
        Array.prototype.findValue = function(callback){
            for(const value of this){
                if(callback(value)) return value
            }
            return undefined
        }
        let arr = [1,2,3,4,5]
        const res = arr.findValue(function(item){
            return item == 2
        })
        console.log(res)
    </script>
</body>
</html>
```

### 数组排序使用技巧

接下来看看排序，在使用中是比较重要的

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
        let arr = [5,6,1,8,9,3]
        arr = arr.sort(function(a,b){
            //-1 从小到大       1 从大到小
            return a-b
        })
        console.table(arr)
    </script>
</body>
</html>
```

简单的搓一个函数

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
        let cart = [
            {name:"iphone" ,price:12000},
            {name:"imac" , price:18000},
            {name:"ipad",price:3200}
        ]
        cart = cart.sort(function(a,b){
            return a.price - b.price
        })
        console.table(cart)
    </script>
</body>
</html>
```

### sort排序算法原理实现

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
        let arr = [1, 5, 3, 6, 4]
        //sort
        function sort(array, callback) {
            for (const n in array) {
                for (const m in array) {
                    if (callback(array[n], array[m]) < 0) {
                        const temp = array[n]
                        array[n] = array[m]
                        array[m] = temp
                    }
                }
            }
            return array
        }
        console.log(sort(arr, function (a, b) {
            return b - a
        }))
    </script>
</body>

</html>
```

### 循环操作中引用类型使用技巧

要注意的是值类型的改变不会影响原来数组，但是引用类型会

### forEach循环方法使用

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
        let lessons = [
            {title:"媒体查询响应式布局",category:"css"},
            {title:"FLEX弹性盒模型",category:"css"},
            {title:"增删改查",category:"mysql"}
    ]
    lessons.forEach(function(item,index,lessons){
        item.title = item.title.substr(0,2)
    })
    console.log(lessons)
    </script>
</body>
</html>
```

再看一组：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>
        .disable{
            color: #ddd;
        }
    </style>
    <ul>
        <li>hdcms</li>
        <li>houdunren</li>
    </ul>
    <script>
        let lis = document.querySelectorAll("ul li")
        lis.forEach(function(item){
            item.addEventListener("click",function(){
                this.classList.toggle("disable")
            })
        })
    </script>
</body>
</html>
```

### iterator迭代器方法玩转数组

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
        let arr = ["hdcms","houdunren"]
        let values = arr.values()
        while(({value,done}=values.next()) && done ===false)
    {
        console.log(value)
    }
    </script>
</body>
</html>
```

这是一种迭代对象的方法

使用for of方法迭代：

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
        let arr = ["hdcms","houdunren"]
        for(const value of arr.values()){
            console.log(value)
        }
    </script>
</body>
</html>
```

还有一种方法：

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
        let arr = ["hdcms","houdunren"]
        let entries = arr.entries()
        console.log(entries.next())
    </script>
</body>
</html>
```

解构赋值它也不失为一种好计策：

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
        let arr = ["hdcms","houdunren"]
        for(const[key,value]of arr.entries()){
            console.log(value)
        }
    </script>
</body>
</html>
```

### every与some这么用的

再来看一些高效处理数组的方法

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
        let arr = ['hdcms','houdunren']
        let status = arr.every(function(value,index,arr){
            console.log(value)
            return true
        })
    </script>
</body>
</html>
```

every可以这么用，当所有都为真的时候才返回真，而some是有一个是真的就是真的

使用的格式是一样的

### filter过滤元素使用

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
        let lessons = [
            {title:"媒体响应式布局",category:"css"},
            {title:"FLEX弹性盒模型",category:"css"},
            {title:"MYSQL多表查询随意操作",category:"mysql"},
        ]
        const cssLessons = lessons.filter(function(lesson){
            return lesson['category'] == 'css'
        })
        console.table(cssLessons)
    </script>
</body>
</html>
```

### 自定义过滤函数理解原理

这样可以自己实现一个过滤的函数：

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
        let hd = [1, 2, 3, 4]
        function filter(array, callback) {
            let newArray = []

            for (const value of array) {
                if (callback(value) === true) {
                    newArray.push(value)

                }
            }
            return newArray
        }
        console.log(filter(hd,function(value){
            return value>2
        }))
    </script>
</body>

</html>
```

### map映射数组与引用类型处理技巧

映射可以对数组进行二次操作：

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
        let lessons = [
            {title:"媒体查询响应式布局",category:"css"},
            {title:"FLEX弹性盒模型",category:"css"},
            {title:"MYSQL多表查询随意操作",category:"mysql"}
        ]
        let hd = lessons.map(function(value){
            return{
                title:value.title,
                category:value.category,
                click:100
            }
        })
        console.table(hd)
        console.table(lessons)
        // let arr = ["hdcms","houdunren"]
        // arr.map(function(value,index,arr){
        //     console.log(index)
        // })
    </script>
</body>
</html>
```

### 超好用的reduce方法详解

`reduce` 是 JavaScript 中数组的一个高阶方法，它接收一个回调函数和一个可选的初始值作为参数，将数组中的元素通过该回调函数进行组合或累积操作，最终返回一个单一的值

字符串拼接：

```javascript
let words = ['Hello', 'World', '!'];
let sentence = words.reduce((accumulator, currentValue) => accumulator + " " + currentValue);
console.log(sentence); // 输出 "Hello World!
```

写一个统计数据出现几次的函数：

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
        let arr = [1, 2, 3, 1, 1]
        function arrayCount(array, item) {
            return array.reduce(function (total, cur) {
                total += item == cur ? 1 : 0
                return total
            }, 0)
        }
        console.log(arrayCount(arr, 1))
    </script>
</body>

</html>
```

### 购物车汇总与获取最贵商品

获取最贵的商品：

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
        let cart = [
            { name: "iphone", price: 12000 },
            { name: "imac", price: 25000 },
            { name: "ipad", price: 3600 }
        ]
        function maxPric(goods) {
            return cart.reduce(function (pre, cur) {
                return pre.price > cur.price ? pre : cur
            })
        }
        console.log(maxPric(cart))
    </script>
</body>

</html>
```

商品价格的汇总：

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
         let cart = [
            { name: "iphone", price: 12000 },
            { name: "imac", price: 25000 },
            { name: "ipad", price: 3600 }
        ]
        function sum(goods){
            return goods.reduce(function(total,cur){
                return (total += cur["price"])
            },0)
        }
        console.log(sum(cart))
    </script>
</body>
</html>
```

### 处理购物车中的重复商品

筛选商品：

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
        let cart = [
            { name: "iphone", price: 12000 },
            { name: "imac", price: 25000 },
            { name: "ipad", price: 3600 }
        ]
        function getNameByPrice(goods, price) {
            return goods.reduce(function (arr, cur) {
                if (cur.price > price) {
                    arr.push(cur)
                }
                return arr
            }, []).map(function(item){
                return item.name
            })
        }
        console.table(getNameByPrice(cart, 10000))
    </script>
</body>

</html>
```

数组去重：

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
        let array = [1, 2, 3, 3, 1, 4, 2]
        let newArr = array.reduce(function (arr, cur) {
            if (arr.includes(cur) === false) {
                arr.push(cur)
            }
            return arr
        }, [])
        console.log(newArr)
    </script>
</body>

</html>
```

商品去重：

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
        //重复商品
        let cart = [
            { name: "iphone", price: 12000 },
            { name: "imac", price: 25000 },
            { name: "ipad", price: 3600 },
            { name: "iphone", price: 12000 }
        ]
        function filterGoods(goods){
            return goods.reduce(function(arr,cur){
                let find = arr.find(function(v){
                    return v.name == cur.name
                })
                if(!find) arr.push(cur)
                return arr
            },[])
        }
        console.table(filterGoods(cart))
    </script>
</body>

</html>
```

### 炫酷的文字LOGO效果元素构建

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>houdunren.com</div>
    <script>
        const div = document.querySelector('div');
        // 使用 forEach 遍历字符数组
        [...div.textContent].reduce(function (pre, cur, index) {
            pre == index && (div.innerHTML = " ")
            console.log(pre, cur, index);
            let span = document.createElement("span")
            span.innerHTML = cur
            div.appendChild(span)
            span.addEventListener("mouseover",function(){
                this.classList.add("color")
            })
        }, 0);
    </script>
</body>

</html>
```

### 为LOGO添加关键帧动画

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            padding: 0;
            margin: 0;
        }
        body{
            width: 100vh;       /*视口大小*/
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: chartreuse;
        }
        div{
            font-size: 5em;
            font-weight: bold;
            text-transform: uppercase;   /*大写*/
            color: cornflowerblue;
            text-align: center;
        }
        div>span{
            position: relative;
            display: inline-block;
        }
        .color{
            animation-name: color;
            animation-duration: 1s;
            animation-iteration-count: 2;
            animation-timing-function: linear;
            animation-direction: alternate;
        }
        @keyframes color{       /*添加关键帧*/
            50%{
                color: darkorange;
                transform: scale(2);
            }
            to{
                color:violet;
                transform: scale(0.5);
            }
        }
    </style>
</head>

<body>
    <div>houdunren.com</div>
    <script>
        const div = document.querySelector('div');
        // 使用 forEach 遍历字符数组
        [...div.textContent].reduce(function (pre, cur, index) {
            pre == index && (div.innerHTML = " ")
            console.log(pre, cur, index);
            let span = document.createElement("span")
            span.innerHTML = cur
            div.appendChild(span)
            span.addEventListener("mouseover",function(){
                this.classList.add("color")
            })
        }, 0);
    </script>
</body>

</html>
```

有个问题是这个只能动画一次，有缺陷，所以还要改

### 

监听animationend事件移动动画类

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            padding: 0;
            margin: 0;
        }
        body{
            width: 100vh;       /*视口大小*/
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: chartreuse;
        }
        div{
            font-size: 5em;
            font-weight: bold;
            text-transform: uppercase;   /*大写*/
            color: cornflowerblue;
            text-align: center;
        }
        div>span{
            position: relative;
            display: inline-block;
        }
        .color{
            animation-name: color;
            animation-duration: 1s;
            animation-iteration-count: 2;
            animation-timing-function: linear;
            animation-direction: alternate;
        }
        @keyframes color{       /*添加关键帧*/
            50%{
                color: darkorange;
                transform: scale(1.5);
            }
            to{
                color:violet;
                transform: scale(0.5);
            }
        }
    </style>
</head>

<body>
    <div>houdunren.com</div>
    <script>
        const div = document.querySelector('div');
        // 使用 forEach 遍历字符数组
        [...div.textContent].reduce(function (pre, cur, index) {
            pre == index && (div.innerHTML = " ")
            console.log(pre, cur, index);
            let span = document.createElement("span")
            span.innerHTML = cur
            div.appendChild(span)
            span.addEventListener("mouseover",function(){
                this.classList.add("color")
            })
            span.addEventListener('animationend',function(){
                this.classList.remove("color")
            })
        }, 0);
    </script>
</body>

</html>
```

至此数组相关操作全部结束捏

​
