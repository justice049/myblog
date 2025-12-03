---
title: Symbol类型
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/692fe0854c455cbabc95a9d2.jpg
tags: JS
categories: 前端
---

### Symbol使用场景介绍

举个例子，当leader让你去机房取某个电脑的时候，机房那么多电脑，你怎么知道取哪个

所以这个时候symbol的作用就显现出来了（上面有什么贴纸的，什么型号的电脑）

### 声明定义Symbol的几种方式

两个symbol定义完之后比较是不会相等的

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
        let hd = Symbol()
        console.log(typeof hd)
        let edu = Symbol("后盾人在线教程")   //添加描述
        console.log(hd.description)     //打印描述
        let cms = Symbol.for("hdcms")   //这样定义系统会有记录
        console.log(cms)     //这时候再定义判断就是相等的
        console.log(Symbol.keyFor(cms))     //可以获取到描述
        
    </script>
</body>
</html>
```

### 使用Symbol解决字符串耦合问题

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
        let grade = {
            李四:{js:100,css:89},
            李四:{js:35,css:56}
        }
        console.log(grade)
    </script>
</body>
</html>
```

这种情况下只会打印出一个，可以用symbol解决这个问题（注意赋值和取值都要加[ ]）

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
        let user1 = {
            name:'李四',
            key:Symbol()
        } 
        let user2 = {
            name:'李四',
            key:Symbol()
        }
        let grade = {
            [user1.key]:{js:100,css:89},
            [user2.key]:{js:35,css:56}
        }
        console.log(grade)
    </script>
</body>
</html>
```

### Symbol在缓存容器中的使用

symbol本质上就是生成一个永远不会重复的字符串

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
        class Cache{
            static data = {}
            static set(name,value){
                return(this.data[name]=value)
            }
            static get(name){
                return this.data[name]
            }
        }
        Cache.set('hdcms','houdunren.com')
        console.log(Cache.get("hdcms"))
        let user = {
            name:'apple',
            desc:"用户资料",
            key:Symbol("用户数据")
        }
        let cart = {
            name:'apple',
            desc:"购物车",
            key:Symbol("购物车数据")
        }
        // Cache.set("user-apple",user)
        // Cache.set("cart-apple",cart)
        // console.log(Cache.get("user-apple"))
        Cache.set(user.key,user)
        Cache.set(cart.key,cart)
        console.log(Cache.get(user.key))
    </script>
</body>
</html>
```

### 扩展特性与对象属性保护

这是一些特性：

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
        let symbol = Symbol("这是一个symbol类型")
        let hd = {
            name:"后盾人",
            [symbol]:"houdunren.com0"
        }
        for(const key in hd){
            console.log(key)    //遍历不到,只能遍历到普通属性
        }
        for(const key of Object.getOwnPropertySymbols(hd)){
            console.log(key)        //只能遍历到symbol属性
        }
        for(const key of Reflect.ownKeys(hd)){
            console.log(key)        //可以遍历所有属性
        }
    </script>
</body>
</html>
```

根据这些特性可以保护私有属性

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
        let site = Symbol("这是一个symbol")
        class User{
            constructor(name){
                this.name = name
                this[site] = "后盾人"
            }
            getName(){
                return `${this[site]} ${this.name}`
            }
        }
        let zs = new User('张三')
        // console.log(zs.getName())
        for(const key in zs){
            console.log(key)
        }
    </script>
</body>
</html>
```

​
