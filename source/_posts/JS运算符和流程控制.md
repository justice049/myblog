---
title: JS运算符和流程控制
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/692fdd8e4c455cbabc958ac1.jpg
tags: JS
categories: 前端
---

### 赋值运算符与算术运算符

没什么好说的，等号谁都会用

### 比较运算符注意事项

如果一个是字符一个是数字也是可以比较的（==）

===是判断值和类型是否相等

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
        let a = 1
        let b = "1"
        console.log(a == b)
    </script>
</body>

</html>
```

### 短路运算的妙用

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
        let a = 6
        let b = 0
        let f = a || b
        console.log(f)  //结果是6
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
        let a = 6
        let b = 0
        let sex = "保密" || prompt("请输入必须")    //这就是失败的短路运算 
        console.log(sex)
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
        function star(num = 5) {
            return "*".repeat(num)
        }
        console.log(star())
    </script>
</body>

</html>
```

### 网站协议接受验证

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="https://www.houdunren.com" id="form">
        用户名：<input type="text" name="user">
        <hr>
        <input type="checkbox" name="copyright"> 接受协议
        <hr>
        <button>按钮</button>
    </form>
    <script>
        function query(el) {
            return document.querySelector(el)
        }
        query("#form").addEventListener("submit", function (event) {
            let user = query("[name = 'user']").value.trim()
            let copyright = query("[name='copyright']").checked     //检查复选框是否被选中
            if (!user || copyright == false) {
                event.preventDefault()
                alert("请接收协议并添加用户名")
            }
        })
    </script>
</body>

</html>
```

### 使用ifelse判断密码强度

流程控制真简单（吗？）

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <input type="password" name="password" id="">
    <span id="msg"></span>
    <script>
        document.querySelector("[name = 'password']").
            addEventListener('keyup', function () {
                let length = this.value.length
                let span = document.querySelector('#msg')
                let msg = ""
                if (length > 10) {
                    msg = '密码无敌安全'
                } else if (length > 6) {
                    msg = '中级密码强度'
                }
                else {
                    msg = "密码太弱"
                }
                span.innerHTML = msg
            })
        let status = false
    </script>
</body>

</html>
```

确实挺简单的

### 三元表达式真的好可爱

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
        function div(options = {}){
            let div = document.createElement("div")
            div.style.width = options.width?
            options.width:"100px"
            div.style.height = options.height?
            options.height:"100px"
            div.style.backgroundColor = 
            options.bgcolor ? options.bgcolor:"red"
            document.body.appendChild(div)
        }
        div()
        div({width:"300px",height:"50px",bgcolor:"green"})
    </script>
</body>
</html>
```

### while循环控制

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
        function table(options={tr:5,td:3}){
            document.write(`<table border="1" width="100%"`)
            while(options.tr-- != 0)
        {
            let td = options.td
            document.write(`<tr>`)
                while(td-- != 0){
                    document.write(`<td>${td}</td>`)
                }
                document.write(`</td>`)
        }
        document.write(`</table>`)
        }
        table()
    </script>
</body>
</html>
```

while循环控制（其实我感觉这个和循环也没有什么太大的关系）

### dowhile循环实例操作

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=0, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let start = 0
        do{ 
            let n = 0
            do{
                document.write('*')
            }while(++n <= start)
            document.write('<br>')
        }while(++start <= 5)
    </script>
</body>
</html>
```

使用while照常理来说比do while方便一点

### break-continue与label标签的使用

当子层循环想要退出外层循环可以采用打标签的形式

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
        houdunren: for(let i = 1;i<=10;i++){
            hdcms:for(let n = 1;n<=10;n++){
                if(n%2 == 0){
                    console.log(i,n)
                }
                if(n+i > 10)
                {
                    break houdunren
                }
            }
        }
    </script>
</body>
</html>
```

​
