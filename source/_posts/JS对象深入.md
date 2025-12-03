---
title: JS内置对象
abbrlink: 3eeb
swiper_index: 1
top_group_index: 1
background: "#fff"
cover: https://pic1.imgdb.cn/item/692fd2284c455cbabc957dee.jpg
tags: JS
categories: 前端
---

### 深入对象

#### 创建对象三种方式

首先我们可以利用对象字面量创建对象

也可以使用new Object创建对象

还可以使用构造函数创建对象

#### 构造函数

就像是，直接设定，和new一个出来，和自己搓默认成员函数一样

构造函数是一种特殊的函数，主要用来初始化对象

使用场景：常规的 {...} 语法允许创建一个对象。比如我们创建了佩奇的对象，继续创建乔治的对象还需要重新写一 遍，此时可以通过构造函数来快速创建多个类似的对象

感觉和cpp的差不多

构造函数有两个约定：命名用大写字母开头

只能用new操作符执行

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
        function Pig() {
            this.name = name
            this.age = age
            this.gender = gender
        }
        const Peppa = new Pig('佩奇', 6, '女')
        const George = new Pig('乔治', 3, '男')
        const Mum = new Pig('王振', 30, '女')
        const Dad = new Pig('逍遥', 32, '男')
        
    </script>
</body>

</html>
```

使用new关键字调用函数的行为被称之为实例化

实例化构造函数没有参数的时候可以省略

构造函数内部无需使用return，返回值就是新的创建的对象

构造函数内部return返回值无效

这两个也是实例化构造函数：new Object（） new Date（）

#### 实例成员&静态成员

通过构造函数创建的对象称为实例对象，实例对象中的属性和方法称为实例成员

### 内置构造函数

在JS中主要的数据类型有六种：

字符串、数值、布尔、undefined、null

字符串、数值、布尔、等基本类型也都有专门的构造函数，这些我们称为包装类型

几乎所有的数据都可以基于构造函数创建

#### Object

它是内置的构造函数，用于创建普通对象，我们推荐使用字面量的方式来声明对象，而不是Object构造函数

有三个常用的静态方法

Object.keys 静态方法获取对象中所有属性（键）

Object.values 静态方法获取对象中所有属性值

好一个键值

Object. assign 静态方法常用于对象拷贝

静态方法只有构造函数Object可以调用哦
#### Array

Array是内置的构造函数，用于创建数组

创建数组也是建议用字面量而不是Array构造函数创建

reduce是返回函数累计处理的结果，经常用于求和等

起始值可以省略，如果写就作为第一次累计的起始值

累计值参数：有起始值则以起始值为准开始累计，累计值=起始值

如果没有起始值，则累计值以数组的第一个数组元素作为起始值开始累计

后面每次遍历都会用后面的数组元素累计到累计值里面（类似求和里面的sum）

练习：

const spec = { size: '40cm\*40cm' , color: '黑色'}

请将里面的值写到div标签里
思路：获得所有的属性值，然后拼接字符串就可以了

获得所有的属性值是：Object.values() 返回的是数组

拼接数组是：join(‘’) 这样就可以转换为字符串了

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div></div>
    <script>
        const spec = {size: '40cm*40cm' , color: '黑色'}
        //所有的属性值回去过来
        document.querySelector('div').innerHTML = Object.values(spec).join('/')
    </script>
</body>
</html>
```

伪数组转换成真数组的静态方法： Array.from()

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <script>
        const lis =document.querySelectorAll('ul li')
        console.log(lis);    //此处的lis是伪数组
        const liss = Array.from(lis)
        console.log(liss)
    </script>
</body>
</html>
```


#### String

字符串也有一些相关的方法

JavaScript 中的字符串、数值、布尔具有对象的使用特征，如具有属性和方法

之所以具有对象特征的原因是字符串、数值、布尔类型数据是 JavaScript 底层使用 Object 构造函数“包装”来的，被 称为包装类型。

将下面的字符串渲染到准备好的p标签内部

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="name"></div>
    <script>
        const gift = '50g茶叶,清洗球'
        const p =document.querySelector('.name')
        p.innerHTML = gift.split(',').map(item => `<span class='tag'>【赠品】${item}</span><br>`).join('')
    </script>
</body>
</html>
```

#### Number

Number是内置的构造函数，用于创建数值

常用方法：

toFixed() 设置保留小数位的长度

### 综合案例

综合案例提供的需求是：根据后台提供的数据渲染购物车页面

业务模块：

> ①：渲染图片、标题、颜色、价格、赠品等数据
> 
> ②：单价和小计模块
> 
> ③：总价模块

分析业务模块：

> ①：把整体的结构直接生成然后渲染到大盒子.list 里面
> 
> ②：那个方法可以遍历的同时还有返回值
> 
> ③：最后计算总价模块，求和方法：map 方法 reduce 方法

渲染模块：

> ①：先利用map来遍历，有多少条数据，渲染多少相同商品
> 
> ②：里面更换各种数据，注意使用对象解构赋值
> 
> ③：利用reduce计算总价

详细分析：

> ①：先利用map来遍历，有多少条数据，渲染多少相同商品
> 
> - 可以先写死的数据
> - 注意map返回值是 数组，我们需要用 join 转换为字符串
> - 把返回的字符串 赋值 给 list 大盒子的 innerHTML

```javascript
//根据数据渲染页面
    document.querySelector('.list').innerHTML = goodsList.map(item => {
      return `
        <div class="item">
      <img src="https://yanxuan-item.nosdn.127.net/84a59ff9c58a77032564e61f716846d6.jpg" alt="">
      <p class="name">称心如意手摇咖啡磨豆机咖啡豆研磨机 <span class="tag">【赠品】10优惠券</span></p>
      <p class="spec">白色/10寸</p>
      <p class="price">289.90</p>
      <p class="count">x2</p>
      <p class="sub-total">579.80</p>
    </div>
        `
    }).join('')
```

第二步：更换数据

> - 先更换不需要处理的数据，图片，商品名称，单价，数量
> - 采取对象解构的方式
> - 注意 单价要保留2位小数， 489.00 toFixed(2)

```javascript
//根据数据渲染页面
    document.querySelector('.list').innerHTML = goodsList.map(item => {
      const {picture,name,count,price} = item
      return `
        <div class="item">
      <img src=${picture} alt="">
      <p class="name">${name}<span class="tag">【赠品】10优惠券</span></p>
      <p class="spec">白色/10寸</p>
      <p class="price">${price.toFixed(2)}</p>
      <p class="count">x${count}</p>
      <p class="sub-total">579.80</p>
    </div>
        `
    }).join('')
```

接下来做业务模块：处理规格文字模块

> - 获取 每个对象里面的 spec , 上面对象解构添加 spec
> - 获得所有属性值是： Object.values() 返回的是数组
> - 拼接数组是 join(‘’) 这样就可以转换为字符串了

```javascript
const text = Object.values(spec).join('/')
```

接下来处理赠品模块，获取每个对象里面的gift，在上面的结构对象添加gift

注意要判断是否有gift属性，没有的话不需要渲染

利用变成的字符串然后写到 p.name里面

更换数据 - 处理 小计 模块

- 小计 = 单价 \* 数量
- 小计名可以为: subTotal = price \* count
- 注意保留2位小数 关于小数的计算精度问题:

0.1 + 0.2 = ?

解决方案： 我们经常转换为整数 （0.1\*100 + 0.2\*100）/ 100 === 0.3

```javascript
//处理赠品模块
      const subTotal = (price*count).toFixed(2)
      const str =  gift ? gift.split(',').map(item=>`<span class="tag">【赠品】${item}</span>`).join(''):''
```

计算合计模块

- 求和用到数组 reduce 方法 累计器
- 根据数据里面的数量和单价累加和即可
- 注意 reduce方法有2个参数，第一个是回调函数，第二个是 初始值，这里写 0

```javascript
//合计模块
    const total = goodsList.reduce((prev, item) => prev + (item.price * 100 * item.count) / 100, 0)
    document.querySelector('.amount').innerHTML = total.toFixed(2)
```

全部代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .list {
      width: 990px;
      margin: 100px auto 0;
    }

    .item {
      padding: 15px;
      transition: all .5s;
      display: flex;
      border-top: 1px solid #e4e4e4;
    }

    .item:nth-child(4n) {
      margin-left: 0;
    }

    .item:hover {
      cursor: pointer;
      background-color: #f5f5f5;
    }

    .item img {
      width: 80px;
      height: 80px;
      margin-right: 10px;
    }

    .item .name {
      font-size: 18px;
      margin-right: 10px;
      color: #333;
      flex: 2;
    }

    .item .name .tag {
      display: block;
      padding: 2px;
      font-size: 12px;
      color: #999;
    }

    .item .price,
    .item .sub-total {
      font-size: 18px;
      color: firebrick;
      flex: 1;
    }

    .item .price::before,
    .item .sub-total::before,
    .amount::before {
      content: "¥";
      font-size: 12px;
    }

    .item .spec {
      flex: 2;
      color: #888;
      font-size: 14px;
    }

    .item .count {
      flex: 1;
      color: #aaa;
    }

    .total {
      width: 990px;
      margin: 0 auto;
      display: flex;
      justify-content: flex-end;
      border-top: 1px solid #e4e4e4;
      padding: 20px;
    }

    .total .amount {
      font-size: 18px;
      color: firebrick;
      font-weight: bold;
      margin-right: 50px;
    }
  </style>
</head>

<body>
  <div class="list">
    <!-- <div class="item">
      <img src="https://yanxuan-item.nosdn.127.net/84a59ff9c58a77032564e61f716846d6.jpg" alt="">
      <p class="name">称心如意手摇咖啡磨豆机咖啡豆研磨机 <span class="tag">【赠品】10优惠券</span></p>
      <p class="spec">白色/10寸</p>
      <p class="price">289.90</p>
      <p class="count">x2</p>
      <p class="sub-total">579.80</p>
    </div> -->
  </div>
  <div class="total">
    <div>合计：<span class="amount">1000.00</span></div>
  </div>
  <script>
    const goodsList = [
      {
        id: '4001172',
        name: '称心如意手摇咖啡磨豆机咖啡豆研磨机',
        price: 289.9,
        picture: 'https://yanxuan-item.nosdn.127.net/84a59ff9c58a77032564e61f716846d6.jpg',
        count: 2,
        spec: { color: '白色' }
      },
      {
        id: '4001009',
        name: '竹制干泡茶盘正方形沥水茶台品茶盘',
        price: 109.8,
        picture: 'https://yanxuan-item.nosdn.127.net/2d942d6bc94f1e230763e1a5a3b379e1.png',
        count: 3,
        spec: { size: '40cm*40cm', color: '黑色' }
      },
      {
        id: '4001874',
        name: '古法温酒汝瓷酒具套装白酒杯莲花温酒器',
        price: 488,
        picture: 'https://yanxuan-item.nosdn.127.net/44e51622800e4fceb6bee8e616da85fd.png',
        count: 1,
        spec: { color: '青色', sum: '一大四小' }
      },
      {
        id: '4001649',
        name: '大师监制龙泉青瓷茶叶罐',
        price: 139,
        picture: 'https://yanxuan-item.nosdn.127.net/4356c9fc150753775fe56b465314f1eb.png',
        count: 1,
        spec: { size: '小号', color: '紫色' },
        gift: '50g茶叶,清洗球,宾利,智能手机'
      }
    ]

    //根据数据渲染页面
    document.querySelector('.list').innerHTML = goodsList.map(item => {
      //对象解构
      const { picture, name, count, price, gift, spec } = item
      //规格文字模块处理
      const text = Object.values(spec).join('/')
      //处理赠品模块
      const subTotal = ((price * count * 100) / 100).toFixed(2)
      const str = gift ? gift.split(',').map(item => `<span class="tag">【赠品】${item}</span>`).join('') : ''
      return `
        <div class="item">
      <img src=${picture} alt="">
      <p class="name">${name}${str}</p>
      <p class="spec">${text}</p>
      <p class="price">${price.toFixed(2)}</p>
      <p class="count">x${count}</p>
      <p class="sub-total">${subTotal}</p>
    </div>
        `
    }).join('')

    //合计模块
    const total = goodsList.reduce((prev, item) => prev + (item.price * 100 * item.count) / 100, 0)
    document.querySelector('.amount').innerHTML = total.toFixed(2)
  </script>
</body>

</html>
```
​
