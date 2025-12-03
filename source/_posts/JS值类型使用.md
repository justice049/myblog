---
title: JS值类型使用
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/692fd7f74c455cbabc95862b.jpg
tags: JS
categories: 前端
---


### 章节介绍与类型判断

看看构造函数

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
        let hd=[]
        let hdcms = {}
        console.log(hd instanceof Array)        //判断是否在原型链上（是否由这个构造函数创建出来
        console.log(hdcms instanceof Object)
    </script>
</body>
</html>
```

都是true

### 字符串转义与模板字面量使用

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
        let hd = 'houdun\'人'
        console.log(hd)
    </script>
</body>
</html>
```



加个\\就成了

### 模板字面量浅谈使用技巧

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
        let lessons= [
            {title:"媒体查询响应式布局"},
            {title:"FLEX弹性盒模型"},
            {title:"GRID栅格系统"}
        ]
        function template(){
            return `
            <ul>${lessons.map(item=>`<li>${item.title}</li>`).join('')}</ul>
            `
        }
        document.body.innerHTML=template()
</script>
</body>
</html>
```

### 神奇的标签模板实例操作

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
        let name = '后盾人'
        let web = "houdunren.com"
        console.log(tag`在线教程${name}，网址是${web}`)
        function tag(strings,...vars){
            console.log(vars)
            console.log(strings)
        }
    </script>
</body>
</html>
```

打印出来是这样的

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
            { title: "后盾人媒体查询响应式布局", author: '后盾人向军' },
            { title: "FLEX弹性盒模型", author: '后盾人' },
            { title: "GRID栅格系统后盾人教程", author: '古老师' }
        ]
        function template() {
            return `
            <ul>${lessons.map(item => links`<li>作者：${item.author},课程：${item.title}</li>`)
                    .join('')}
                </ul>`
        }
        function links(strings, ...vars) {
            return strings.map((str, key) => {      //将字符替换成链接
                return str + (vars[key] ? vars[key].replace("后盾人",`<a href="https://www.houdunren.com">     
                    后盾人</a>`) : "")  //变量数量多
            }).join('')
        }
        document.body.innerHTML += template()
    </script>
</body>

</html>
```

这是把字符替换成链接了

### 字符串及基本函数使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" name="password">
    <span></span>
    <script>
        let ps = document.querySelector("[name='password']")
        ps.addEventListener('keyup',function(){
            this.value = this.value.trim()
            let error = " "
            let span = document.getElementsByTagName('span')
            if(this.value.length<5){
                error="密码不能小于五位"
            }
            span[0].innerHTML=error
        })
    </script>
</body>
</html>
```

可以做渐变（可能）效果

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
        let hd = 'houdunren'
        for(let i =0;i<hd.length;i++){
            let span = document.createElement("span")
            span.style.fontSize = (i+1)*10+'px'
            span.innerHTML = hd[i]
            document.body.append(span)
        }
    </script>
</body>
</html>
```

### 字符串截取操作

让我们看一下字符串的截取操作

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
        let hd = "houdunren.com"
        console.log(hd.slice(1,3))
        console.log(hd.substr(1,3))
        console.log(hd.substring(1,3))

        console.log(hd.slice(-3,-1))
        console.log(hd.substr(-3))
        console.log(hd.substring(-3,2))
    </script>
</body>
</html>
```

### 解锁字符串使用技巧

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
        const hd = "houdunren.com"
         //从哪个位置开始找，找不到就是-1
        if (hd.indexOf('h') != -1) {
            console.log('找到了')
        }
        console.log(hd.includes("h",8))     //和上面的作用一样
        console.log(hd.startsWith('H'))     //返回布尔类型，看是否在开始
        console.log(hd.lastIndexOf('o',9))  //从后向前查
    </script>
</body>

</html>
```

这是数组的some方法

查找字符串方法：

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
        const word = ["php","css"]
        const string = "我喜欢在后盾人学习php与css芝士"
        const status = word.some(word=>{
            console.log(word)
            return string.includes(word)
        })
        if(status){
            console.log('找到了')
        }
    </script>
</body>
</html>
```

### 字符串替换标题关键词

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
        const hd = "houdunren.com"
        console.log(hd.replace('houdunren','hdcms'))

        const word = ["php" , "css"]
        const string = "我其实不喜欢学php和css"
        const repaceString = word.reduce((pre,word)=>{
           return pre.replace(word,`<a href="?w=${word}">${word}</a>`)
        },string)
        console.log(repaceString)
        document.body.innerHTML += repaceString
    </script>
</body>
</html>
```

### 电话号码模糊处理

对电话号码进行模糊处理，要进行一些类型转换

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
        function phone(mobile,len=3){
            return String(mobile).slice(0,len*-1)+'*'.repeat(len)
        }
        console.log(phone(98765432101))
    </script>
</body>
</html>
```

类型转换使用技巧

这是字符串和数字之间的相互转化

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
        //字符串转成数值
        const string = "99"
        console.log(typeof string)
        console.log(string*1 + 78)
        console.log(Number(string)+88)
        //数值转换成字符串
        const number = 66
        console.log(typeof number)
        const str = number + ""
        console.log(typeof str)
        console.log(typeof String(number))
        //字符串的数字直接转换成数字，数字忽略
        const string2 = "99.78houdunren"   //如果以字符串开头结果将会是NaN,这个的结果还是99
        console.log(parseInt(string2))  
    </script>
</body>
</html>
```

字符串转化成数组

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
        const cms = 'hdms'
        console.log(cms.split(""))
    </script>
</body>
</html>
```
数组转换成字符串：

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
        const array = ["hdcms","houdunren"]
        console.log(array.join(""))
    </script>
</body>
</html>
```
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
        let str = "houdunren"
        console.log(typeof str)
        console.log(str.substr(3))

        let cms = new String("hdcms")
        console.log(typeof cms)
        console.log(cms.substr(3))
    </script>
</body>
</html>
```
上面有隐式类型转换

### Boolean隐式转换原理

用于判断真假的布尔类型吗，有点有趣

比较的时候都转换成数值类型（true=1，false=0）

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
        const boolean = new Boolean(true)
        console.log(typeof boolean)
        console.log(boolean.valueOf)
    </script>
</body>
</html>
```

看看实例：

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
        let array = [1,2,3]
        console.log(Number(array))
        console.log(array ==false)
        console.log(Boolean([]))
        if([])console.log("hihi")
        console.log(Boolean({}))
    </script>
</body>
</html>
```
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
        let array = []
        console.log(Number(array))
        console.log(array ==false)
        console.log(Boolean([]))
        if([])console.log("hihi")
        console.log(Boolean({}))
    </script>
</body>
</html>
```
array隐式转换成数值之后是1，不等于false

但是要是空数组之后转换就为0了，也就等于false

然后就算是空引用也不为假（空对象也是，空数组也是）

### 显示转换Booean类型

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
        // 针对数值
        let number = 0 
        console.log(typeof(number))
        number = !!number       //第一种
        console.log(typeof(number))
        console.log(Boolean(number))    //第二种
        // 针对字符串
        let string = 'houdunren'
        console.log(!!string)
        console.log(Boolean(string))
        //针对数组
        let array = []
        console.log(!![])
        console.log(Boolean([]))
        //针对对象
        let object = {}
        console.log(!!{})
        console.log(Boolean(object))
        let date = new Date()
        console.log(!!date)
        console.log(Boolean(date))
    </script>
</body>
</html>
```

这是不同类型的数据显式转换成bool类型的方法

### boolean实例操作

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
        while (true) {
            const year = prompt('我哪年出生的').trim()
            if(!year){
                continue
            }
            console.log(year=='2005'?"回答正确":"回答错误")
            break
        }
    </script>
</body>

</html>
```

这是应用的实例

### Number声明方式与基本函数

接下来看看数值类型

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
        let number = 99.556
        console.log(Number.isInteger(number))   //判断是不是整数
    </script>
</body>
</html>
```

### 数值类型转换技巧与NaN类型

什么是NaN呢？顾名思义就是，not a number

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
        console.log(Number("houdunren"))
        console.log(2 / "houdunren")
        console.log(Number.isNaN(2/"houdunren"))
    </script>
</body>
</html>
```

当无法转换成数字或者数字和字符串进行运算的时候得到的就会是NaN

NaN类型之间是无法进行比较的

数组只有一个值就取那个值，没有就是0，有多个就是NaN

### Math数学计算

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
        //Math
        Math.max(1,2,3,4,5)     //取得最大值
        let grade = [12,3,2,124]
        console.log(Math.max.apply(null,grade))     //以数组形式传参
        console.log(Math.ceil(5.01))    //向上取整
        console.log(Math.floor(4.99))   //向下取整
    </script>
</body>
</html>
```

这是一些Math的相关方法

### Math.random随机点名操作

基本上所有语言都有他们对应的随机数操作，JS也不例外

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
        //0~1
        console.log(Math.random())
        //0~5
        console.log(Math.floor(Math.random() * (5 + 1)))
        //张三-马六
        const students = ["李四", "宋七", "张三", "王五", "马六"]
        console.log(2 + Math.floor(Math.random() * (students.length - 2)))
    </script>
</body>

</html>
```

### 日期时间戳的使用与计算脚本执行时间

其实你之前学过的，对吧

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
        const date = new Date()
        console.log(date)
        console.log(typeof date)
        console.log(date*1)

        const start = Date.now()
        for(let i = 0;i<100000000;i++){}
        const end = Date.now()
        console.log((end-start)/1000+"秒")
    </script>
</body>
</html>
```

写一个脚本计算时间

ISO与TIMESTAMP格式互换

来看看标准时间和时间戳之间的转化吧

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
        const date = new Date("1996-7-12 08:22:12")
        //时间转换成时间戳
        console.log(date*1)
        console.log(Number(date))
        console.log(date.valueOf())
        console.log(date.getTime())
        const timestamp = date.valueOf()
        //时间戳转换成时间
        console.log(timestamp)
        console.log(new Date(timestamp))
    </script>
</body>
</html>
```

### 封装日期格式化函数

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
        const date = new Date("1992-2-12 10:22:18")
        function dateFormat(date, format = "YYYY-MM-DD HH:mm:ss") {
            const config = {
                YYYY: date.getFullYear(),
                MM: (date.getMonth() + 1),
                DD: date.getDate(),
                HH: date.getHours(),
                mm: date.getMinutes(),
                ss: date.getSeconds()
            }
            for (const key in config) {
                format = format.replace(key, config[key])
            }
            return format
        }
        console.log(dateFormat(date, "YYYY年MM月DD日HH时mm分ss秒"))
    </script>
</body>

</html>
```

这样虽然不难但是很麻烦哎

优秀的日期处理库momentjs

介绍一个优秀的日期处理库（其实我在学过里牛渴死之后就有点那个啥了，念念不忘必有回响的感觉）

这是一个优秀的日期处理库：

[BootCDN - Bootstrap 中文网开源项目免费 CDN 加速服务 铂特优选https://www.bootcdn.cn/](https://www.bootcdn.cn/ "BootCDN - Bootstrap 中文网开源项目免费 CDN 加速服务 铂特优选")这是使用（只要拷贝就好了）：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 加载完整的 Moment.js 库 -->
    <script src="https://cdn.bootcdn.net/ajax/libs/moment.js/2.30.1/moment.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/moment.js/2.30.1/locale/ar-kw.min.js"></script>
    <script>
        const date = moment("1992-02-22 10:12:24");
        console.log(date.format("YYYY-MM-DD HH:mm:ss")); // 输出原始日期
        console.log(date.add(10, "days").format("YYYY-MM-DD HH:mm:ss")); // 输出加10天后的日期
    </script>
</body>
</html>
```
​


​
